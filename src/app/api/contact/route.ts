// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as Sentry from "@sentry/nextjs";
import { sanitizeText, isValidEmail } from "@/lib/sanitize";
import { logger } from "@/lib/logger";
import { contactLimiter, checkRateLimit } from "@/lib/ratelimit";
import { verifyTurnstile } from "@/lib/turnstile";
import { backupLead, type LeadPayload } from "@/lib/leadBackup";

const MAX_BODY_SIZE = 10 * 1024; // 10KB

const utmSchema = z
  .object({
    utm_source: z.string().max(100).optional(),
    utm_medium: z.string().max(100).optional(),
    utm_campaign: z.string().max(100).optional(),
    utm_content: z.string().max(100).optional(),
    utm_term: z.string().max(100).optional(),
  })
  .partial()
  .optional();

const contactSchema = z
  .object({
    name: z.string().min(2, "Name is required").max(100, "Name too long"),
    email: z.string().email("Invalid email").max(254, "Email too long"),
    phone: z.string().max(20, "Phone too long").optional(),
    service: z.string().max(100, "Service too long").optional(),
    message: z
      .string()
      .min(10, "Message too short")
      .max(2000, "Message too long"),
    honeypot: z.string().max(0, "Bot detected").optional(),
    turnstileToken: z.string().max(2048).optional(),
    utm: utmSchema,
    referer: z.string().max(2048).optional(),
  })
  .strict();

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  // 1. Rate limit (Upstash Redis — serverless-safe).
  const { allowed, retryAfter } = await checkRateLimit(contactLimiter, ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  // 2. Content-type check.
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Invalid content type" },
      { status: 400 }
    );
  }

  // 3. Body size limit.
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_SIZE) {
    return NextResponse.json(
      { error: "Request body too large" },
      { status: 413 }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // 4. Zod validation (strict mode — unknown keys rejected).
  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const {
    name,
    email,
    phone,
    service,
    message,
    honeypot,
    turnstileToken,
    utm,
    referer,
  } = parsed.data;

  // 5. Honeypot — silently succeed so bots don't retry.
  if (honeypot && honeypot.length > 0) {
    return NextResponse.json({ success: true });
  }

  // 6. Turnstile verification (skipped in dev if secret not configured).
  const turnstile = await verifyTurnstile(turnstileToken, ip);
  if (!turnstile.success) {
    return NextResponse.json(
      { error: "Verification failed. Please refresh and try again." },
      { status: 400 }
    );
  }

  // 7. Strict email regex beyond Zod's .email().
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  // 8. Sanitize text inputs.
  const sanitizedName = sanitizeText(name, 100);
  const sanitizedMessage = sanitizeText(message, 2000);
  const sanitizedPhone = phone ? sanitizeText(phone, 20) : undefined;
  const sanitizedService = service ? sanitizeText(service, 100) : undefined;
  const sanitizedReferer = referer ? sanitizeText(referer, 2048) : undefined;

  // 9. Primary destination — Resend email.
  const resendKey = process.env.RESEND_API_KEY;
  let emailDelivered = false;
  if (resendKey) {
    try {
      const utmSummary = utm
        ? Object.entries(utm)
            .filter(([, v]) => v)
            .map(([k, v]) => `${k}=${v}`)
            .join(" · ") || "—"
        : "—";

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Lumen Concierge <noreply@lumenaesthetics.com>",
          to: ["hello@lumenaesthetics.com"],
          subject: `New inquiry from ${sanitizedName}`,
          text: [
            `Name: ${sanitizedName}`,
            `Email: ${email}`,
            sanitizedPhone ? `Phone: ${sanitizedPhone}` : null,
            sanitizedService ? `Interested in: ${sanitizedService}` : null,
            `Message:\n${sanitizedMessage}`,
            "",
            `Source: ${utmSummary}`,
            sanitizedReferer ? `Referer: ${sanitizedReferer}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (emailResponse.ok) {
        emailDelivered = true;
      } else {
        const body = await emailResponse.text();
        logger.error("Resend API error", body);
        Sentry.captureMessage("Resend delivery failed", {
          level: "error",
          tags: { surface: "contact-form" },
          extra: { status: emailResponse.status, body },
        });
      }
    } catch (err) {
      logger.error("Email send failed", err);
      Sentry.captureException(err, {
        tags: { surface: "contact-form" },
      });
    }
  }

  // 10. Secondary destination — Upstash Redis list. Always attempted so
  // no lead is ever lost, even if Resend succeeded.
  const backupPayload: LeadPayload = {
    name: sanitizedName,
    email,
    phone: sanitizedPhone,
    service: sanitizedService,
    message: sanitizedMessage,
    utm: utm
      ? Object.fromEntries(Object.entries(utm).filter(([, v]) => v)) as Record<string, string>
      : undefined,
    referer: sanitizedReferer,
    ip,
    userAgent: req.headers.get("user-agent") ?? "unknown",
    createdAt: new Date().toISOString(),
    emailDelivered,
  };
  const backedUp = await backupLead(backupPayload);

  // 11. If both destinations failed, surface an error so the lead isn't lost silently.
  if (!emailDelivered && !backedUp) {
    Sentry.captureMessage("Both contact destinations failed", {
      level: "error",
      tags: { surface: "contact-form" },
      // Never log email address to error tracking — PII.
      extra: { service: sanitizedService, utm: backupPayload.utm },
    });
    return NextResponse.json(
      { error: "We couldn't send your message. Please email hello@lumenaesthetics.com." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
