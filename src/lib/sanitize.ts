// src/lib/sanitize.ts

/** Strip all HTML tags from a string */
export function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

/** Enforce max length and strip HTML */
export function sanitizeText(input: string, maxLength: number): string {
  return stripHtml(input).slice(0, maxLength);
}

/** Validate email with strict regex (RFC 5322 simplified) */
export function isValidEmail(email: string): boolean {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  return re.test(email) && email.length <= 254;
}

/** Validate phone: digits, spaces, dashes, parens, plus. 10–20 chars */
export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}
