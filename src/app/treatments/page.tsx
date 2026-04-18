// src/app/treatments/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FooterCTA } from "@/components/FooterCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Label } from "@/components/ui/Label";
import { TREATMENTS, TREATMENT_CATEGORIES } from "@/constants/treatments";

export const metadata: Metadata = {
  title: "Treatments — Precision over abundance",
  description:
    "Eleven treatments at Lumen Aesthetics. Each one chosen because it works. Injectables, skin, laser and device treatments in Manhattan's West Village.",
  alternates: {
    canonical: "https://lumenaesthetics.com/treatments",
  },
};

export default function TreatmentsPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container">
          <RevealOnScroll>
            <Label className="mb-6 block">Treatments</Label>
            <h1 className="font-serif text-5xl md:text-7xl text-bone font-light leading-tight mb-6">
              Precision over abundance.
            </h1>
            <p className="text-stone text-base md:text-lg font-sans max-w-xl">
              We offer eleven treatments. Each one chosen because it works, not
              because it trends.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Quiz banner */}
      <div className="bg-charcoal py-6 border-t border-b border-white/5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone text-sm font-sans">
            Not sure where to start?
          </p>
          <Link
            href="/quiz"
            className="text-xs tracking-widest uppercase font-sans text-champagne border border-champagne/30 px-6 py-3 hover:bg-champagne hover:text-ink-deep transition-colors whitespace-nowrap"
          >
            Take the treatment quiz
          </Link>
        </div>
      </div>

      {/* Treatment categories */}
      {TREATMENT_CATEGORIES.map((cat) => {
        const treatments = TREATMENTS.filter((t) => t.category === cat.key);
        return (
          <section
            key={cat.key}
            className="py-20 md:py-28 border-b border-white/5"
            aria-label={cat.label}
          >
            <div className="container">
              <RevealOnScroll>
                <h2 className="font-serif text-3xl md:text-4xl text-bone font-light mb-12">
                  {cat.label}
                </h2>
              </RevealOnScroll>

              <div className="flex flex-col gap-0">
                {treatments.map((treatment, i) => (
                  <RevealOnScroll key={treatment.slug} delay={i * 0.05}>
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start py-10 border-t border-white/5 hover:bg-charcoal/50 -mx-4 px-4 md:-mx-8 md:px-8 transition-colors"
                      aria-label={`View ${treatment.name} treatment details`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                        {/* Image */}
                        <div className="relative h-32 md:h-28 overflow-hidden shrink-0">
                          <Image
                            src={treatment.image}
                            alt={treatment.name}
                            fill
                            sizes="200px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        {/* Info */}
                        <div>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-stone font-sans mb-1">
                            {treatment.typeLabel}
                          </p>
                          <h3 className="font-serif text-2xl text-bone font-light mb-2">
                            {treatment.name}
                          </h3>
                          <p className="text-stone text-sm font-sans leading-relaxed max-w-xl">
                            {treatment.heroDescription}
                          </p>
                        </div>
                      </div>
                      {/* Price + CTA */}
                      <div className="text-right">
                        <p className="text-champagne text-sm font-sans mb-1">
                          {treatment.price}
                        </p>
                        {treatment.pricePackage && (
                          <p className="text-stone text-xs font-sans mb-4">
                            {treatment.pricePackage}
                          </p>
                        )}
                        <span className="text-xs tracking-widest uppercase font-sans text-stone group-hover:text-champagne transition-colors">
                          Learn more →
                        </span>
                      </div>
                    </Link>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <FooterCTA
        headline="Ready to start?"
        primaryCta={{ label: "Book a consultation", href: "/book" }}
        secondaryCta={{ label: "Ask a question", href: "/contact" }}
      />
    </>
  );
}
