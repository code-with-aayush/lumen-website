// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanitizeText, isValidEmail } from "@/lib/sanitize";
import { logger } from "@/lib/logger";

const MAX_BODY_SIZE = 10 * 1024; // 10KB

// In-memory rate limiter: 5 submissions per IP per hour
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count++;
  return { allowed: true, retryAfter: 0 };
}

const contactSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name is required")
      .max(100, "Name too long"),
    email: z
      .string()
      .email("Invalid email")
      .max(254, "Email too long"),
    phone: z.string().max(20, "Phone too long").optional(),
    service: z.string().max(100, "Service too long").optional(),
    message: z
      .string()
      .min(10, "Message too short")
      .max(2000, "Message too long"),
    honeypot: z.string().max(0, "Bot detected").optional(),
  })
  .strict();

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(retryAfter) },
      }
    );
  }

  // Content-type check
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Invalid content type" },
      { status: 400 }
    );
  }

  // Body size limit
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

  // Validate
  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission" },
      { status: 400 }
    );
  }

  const { name, email, phone, service, message, honeypot } = parsed.data;

  // Honeypot check
  if (honeypot && honeypot.length > 0) {
    // Silently succeed to fool bots
    return NextResponse.json({ success: true });
  }

  // Strict email validation
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  // Sanitize inputs
  const sanitizedName = sanitizeText(name, 100);
  const sanitizedMessage = sanitizeText(message, 2000);
  const sanitizedPhone = phone ? sanitizeText(phone, 20) : undefined;
  const sanitizedService = service ? sanitizeText(service, 100) : undefined;

  // Send email via Resend if API key is configured
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
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
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!emailResponse.ok) {
        logger.error("Resend API error", await emailResponse.text());
      }
    } catch (err) {
      logger.error("Email send failed", err);
      // Don't fail the request — log and continue
    }
  } else {
    // Development: log to server console only
    logger.info("Contact form submission (no Resend key configured):", {
      name: sanitizedName,
      email,
      service: sanitizedService,
    });
  }

  return NextResponse.json({ success: true });
}
