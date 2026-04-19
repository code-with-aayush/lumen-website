// src/components/Analytics/index.tsx
"use client";

import Script from "next/script";

/**
 * GA4 tag loader. Guarded on NEXT_PUBLIC_GA_ID so the component is a
 * no-op when analytics isn't configured (e.g. preview branches).
 * Loaded afterInteractive so it never blocks LCP.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

type GtagFn = (
  command: "event" | "config" | "set",
  eventName: string,
  params?: Record<string, unknown>
) => void;

export function track(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  }
}
