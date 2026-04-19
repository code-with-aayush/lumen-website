// src/lib/ratelimit.ts
// Upstash Redis sliding-window rate limiter. Serverless-safe — unlike
// an in-process Map, which reset on every Vercel function invocation
// and was effectively disabled in production.
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { logger } from "./logger";

const redis = (() => {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
})();

function build(prefix: string, max: number, window: `${number} ${"s" | "m" | "h" | "d"}`) {
  if (!redis) return null;
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(max, window),
    prefix: `lumen:${prefix}`,
    analytics: true,
  });
}

export const contactLimiter = build("contact", 5, "1 h");
export const quizLimiter = build("quiz", 10, "1 h");

export async function checkRateLimit(
  limiter: Ratelimit | null,
  identifier: string
): Promise<{ allowed: boolean; retryAfter: number }> {
  if (!limiter) {
    // Upstash not configured — fail-open in local dev, fail-closed in prod.
    if (process.env.NODE_ENV === "production") {
      logger.error(
        "Rate limiter misconfigured (missing Upstash env) — blocking request in production."
      );
      return { allowed: false, retryAfter: 3600 };
    }
    return { allowed: true, retryAfter: 0 };
  }

  try {
    const res = await limiter.limit(identifier);
    return {
      allowed: res.success,
      retryAfter: Math.max(0, Math.ceil((res.reset - Date.now()) / 1000)),
    };
  } catch (err) {
    logger.error("Upstash ratelimit call failed", err);
    // Network blip: fail-open rather than punish the user.
    return { allowed: true, retryAfter: 0 };
  }
}

export { redis };
