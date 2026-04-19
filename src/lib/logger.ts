// src/lib/logger.ts
/* eslint-disable no-console -- the logger is the single sanctioned wrapper around console */
const isProd = process.env.NODE_ENV === "production";

export const logger = {
  info: (...args: unknown[]) => {
    if (!isProd) console.info("[INFO]", ...args);
  },
  warn: (...args: unknown[]) => {
    if (!isProd) console.warn("[WARN]", ...args);
  },
  error: (...args: unknown[]) => {
    // Always log errors, even in production (server-side only)
    console.error("[ERROR]", ...args);
  },
};
