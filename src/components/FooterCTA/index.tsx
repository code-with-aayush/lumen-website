// src/components/FooterCTA/index.tsx
import Link from "next/link";

interface FooterCTAProps {
  headline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function FooterCTA({
  headline = "Your first visit begins with a conversation.",
  primaryCta = { label: "Book consultation", href: "/book" },
  secondaryCta = { label: "Chat with our concierge", href: "/contact" },
}: FooterCTAProps) {
  return (
    <section className="bg-feature py-28 md:py-40" aria-label="Call to action">
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl text-feature-ink font-light mb-10 leading-tight">
          {headline}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="inline-block text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-10 py-4 hover:bg-champagne-deep transition-colors"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-block text-xs tracking-widest uppercase font-sans text-feature-ink border border-feature-rule px-10 py-4 hover:border-bone/30 transition-colors"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
