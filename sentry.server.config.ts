// src/sentry.server.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enableLogs: true,
  sendDefaultPii: false,
});
