// src/app/not-found.tsx
import Link from "next/link";
import { NAV_LINKS } from "@/constants/site";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-28">
      <div className="container max-w-2xl">
        <p className="font-serif text-champagne text-7xl md:text-9xl font-light leading-none mb-12 opacity-30">
          404
        </p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-6">
          Page not found
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-bone font-light leading-tight mb-6">
          This page doesn&rsquo;t exist.<br />
          The rest of the site does.
        </h1>
        <p className="text-stone font-sans text-base leading-relaxed mb-12 max-w-sm">
          Try one of these, or head back to the homepage.
        </p>

        <div className="flex flex-col gap-3 mb-12 max-w-xs">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between border-b border-white/5 pb-3 text-stone font-sans text-sm hover:text-champagne transition-colors group"
            >
              {label}
              <span className="text-champagne opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          ))}
          <Link
            href="/book"
            className="flex items-center justify-between border-b border-white/5 pb-3 text-stone font-sans text-sm hover:text-champagne transition-colors group"
          >
            Book a consultation
            <span className="text-champagne opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
        </div>

        <Link
          href="/"
          className="text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-8 py-4 hover:bg-champagne-deep transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
