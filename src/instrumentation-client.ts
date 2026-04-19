// src/instrumentation-client.ts
// Next.js 15+ convention. On Next.js 14, Sentry.init happens in
// the root-level sentry.client.config.ts — do NOT init again here
// (causes "Multiple Sentry Session Replay instances" runtime errors).
import * as Sentry from "@sentry/nextjs";

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
