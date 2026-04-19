// src/lib/turnstile.ts
// Cloudflare Turnstile server-side verification. Token comes from the
// <Turnstile> widget in the form; we POST it to Cloudflare to confirm
// the submission is human before we do anything with it.
import { logger } from "./logger";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(
  token: string | undefined,
  remoteIp?: string
): Promise<{ success: boolean; skipped: boolean }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // No secret configured — treat as skipped rather than failing dev builds.
    return { success: true, skipped: true };
  }

  if (!token) return { success: false, skipped: false };

  try {
    const form = new URLSearchParams();
    form.set("secret", secret);
    form.set("response", token);
    if (remoteIp) form.set("remoteip", remoteIp);

    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
    const data = (await res.json()) as { success?: boolean };
    return { success: Boolean(data.success), skipped: false };
  } catch (err) {
    logger.error("Turnstile verification request failed", err);
    return { success: false, skipped: false };
  }
}
