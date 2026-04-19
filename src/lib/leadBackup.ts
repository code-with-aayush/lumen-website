// src/lib/leadBackup.ts
// Secondary persistence for contact leads. Primary destination is Resend;
// if that fails or is unconfigured, the lead is still pushed to an Upstash
// Redis list so no inquiry is lost silently.
import { redis } from "./ratelimit";
import { logger } from "./logger";

const LEAD_LIST_KEY = "lumen:leads:contact";
const LEAD_MAX_LENGTH = 1000; // cap the list to prevent unbounded growth

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  utm?: Record<string, string>;
  referer?: string;
  ip: string;
  userAgent: string;
  createdAt: string;
  emailDelivered: boolean;
}

export async function backupLead(payload: LeadPayload): Promise<boolean> {
  if (!redis) {
    // No backup configured — caller will have logged the primary attempt.
    return false;
  }
  try {
    await redis.lpush(LEAD_LIST_KEY, JSON.stringify(payload));
    await redis.ltrim(LEAD_LIST_KEY, 0, LEAD_MAX_LENGTH - 1);
    return true;
  } catch (err) {
    logger.error("Lead backup to Upstash failed", err);
    return false;
  }
}
