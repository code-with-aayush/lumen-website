// src/components/Turnstile/index.tsx
"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

interface TurnstileProps {
  siteKey: string;
  onToken: (token: string) => void;
  theme?: "light" | "dark" | "auto";
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

/**
 * Cloudflare Turnstile invisible challenge widget.
 * Renders the widget once the CF script is ready, hands back a token
 * via onToken whenever one is issued.
 */
export function Turnstile({ siteKey, onToken, theme = "dark" }: TurnstileProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    function tryRender() {
      if (!hostRef.current || !window.turnstile) return false;
      if (widgetIdRef.current) return true;
      widgetIdRef.current = window.turnstile.render(hostRef.current, {
        sitekey: siteKey,
        theme,
        callback: onToken,
        "expired-callback": () => onToken(""),
        "error-callback": () => onToken(""),
      });
      return true;
    }

    if (!tryRender()) {
      interval = setInterval(() => {
        if (tryRender() && interval) clearInterval(interval);
      }, 200);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // widget already gone
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme, onToken]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />
      <div ref={hostRef} />
    </>
  );
}
