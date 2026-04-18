"use client";
// src/app/error.tsx
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to error tracking service in production
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-28">
      <div className="container max-w-2xl">
        <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-6">
          Something went wrong
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-bone font-light leading-tight mb-6">
          An unexpected error occurred.
        </h1>
        <p className="text-stone font-sans text-base leading-relaxed mb-12 max-w-sm">
          We&rsquo;ve logged the issue. Please try again, or contact us
          directly at{" "}
          <a
            href="mailto:hello@lumenaesthetics.com"
            className="text-champagne hover:opacity-70 transition-opacity"
          >
            hello@lumenaesthetics.com
          </a>
          .
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={reset}
            className="text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-8 py-4 hover:bg-champagne-deep transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-xs tracking-widest uppercase font-sans text-champagne border border-champagne/30 px-8 py-4 hover:border-champagne transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
