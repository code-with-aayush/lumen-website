// src/components/TreatmentsBento/index.tsx
import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TiltCard } from "@/components/TiltCard";
import { TextLink } from "@/components/ui/TextLink";
import { TREATMENTS } from "@/constants/treatments";

const FEATURED_SLUGS = [
  "botox-dysport",
  "morpheus8",
  "halo-laser",
  "dermal-filler",
  "hydrafacial",
  "bbl-photofacial",
];

export function TreatmentsBento() {
  const featured = FEATURED_SLUGS.map(
    (slug) => TREATMENTS.find((t) => t.slug === slug)!
  );

  return (
    <section
      className="py-28 md:py-36 bg-charcoal relative overflow-hidden"
      aria-label="Featured treatments"
    >
      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(212,177,115,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-champagne/60 font-sans mb-4">
                Treatments
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-bone font-light">
                A focused menu. Nothing
                <br className="hidden md:block" /> we wouldn&rsquo;t do
                ourselves.
              </h2>
            </div>
            <TextLink href="/treatments">See the full menu</TextLink>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {featured.map((treatment, i) => (
            <RevealOnScroll key={treatment.slug} delay={i * 0.06}>
              <TiltCard className="h-full">
              <Link
                href={`/treatments/${treatment.slug}`}
                className="group block h-full bg-charcoal p-8 hover:bg-charcoal-soft transition-colors duration-500 relative overflow-hidden"
                aria-label={`Learn about ${treatment.name}`}
              >
                {/* Cursor-aware glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 60% at var(--mx) var(--my), rgba(212,177,115,0.10) 0%, transparent 65%)",
                  }}
                />

                <div className="relative h-52 mb-6 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />
                </div>

                <p className="text-[10px] tracking-[0.25em] uppercase text-stone font-sans mb-2">
                  {treatment.typeLabel}
                </p>
                <h3 className="font-serif text-xl text-bone font-light mb-2 group-hover:text-champagne transition-colors duration-300">
                  {treatment.name}
                </h3>
                <p className="text-champagne/70 text-xs font-sans">
                  {treatment.price}
                </p>

                {/* Bottom border that reveals on hover */}
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-champagne/30 transition-all duration-500" />
              </Link>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
