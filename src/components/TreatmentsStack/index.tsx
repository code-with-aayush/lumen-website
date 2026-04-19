// src/components/TreatmentsStack/index.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TextLink } from "@/components/ui/TextLink";
import { TREATMENTS } from "@/constants/treatments";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Treatment } from "@/types/treatment";

const FEATURED_SLUGS = [
  "botox-dysport",
  "morpheus8",
  "halo-laser",
  "dermal-filler",
  "hydrafacial",
  "bbl-photofacial",
];

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

export function TreatmentsStack() {
  const featured = FEATURED_SLUGS.map(
    (slug) => TREATMENTS.find((t) => t.slug === slug)!
  );

  return (
    <section
      className="bg-charcoal relative"
      aria-label="Featured treatments"
    >
      {/* Ambient top glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(212,177,115,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 pt-28 md:pt-36 pb-12">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
      </div>

      {/* Stacking cards */}
      <div className="relative">
        {featured.map((treatment, i) => (
          <StackCard
            key={treatment.slug}
            treatment={treatment}
            index={i}
            total={featured.length}
          />
        ))}
      </div>

      {/* Spacer so the last card can settle before next section */}
      <div className="h-[20vh]" aria-hidden="true" />
    </section>
  );
}

interface StackCardProps {
  treatment: Treatment;
  index: number;
  total: number;
}

function StackCard({ treatment, index, total }: StackCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Each successive card sits slightly lower so the stack is visible
  const topOffset = 80 + index * 16;

  // The previous cards recede (scale down) as the next slides over them
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.7, 0.4]);

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <div
      ref={ref}
      className="sticky px-4 md:px-8"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        style={
          reducedMotion
            ? {}
            : {
                scale,
                opacity: cardOpacity,
              }
        }
        className="relative w-full max-w-6xl mx-auto h-[82vh] min-h-[560px] mb-10 origin-top"
      >
        <Link
          href={`/treatments/${treatment.slug}`}
          aria-label={`Open ${treatment.name}`}
          className="group block h-full overflow-hidden border border-white/10 bg-ink-deep hover:border-champagne/40 transition-colors duration-500"
        >
        {/* Split layout */}
        <article className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Image side */}
          <div className="relative overflow-hidden order-1 md:order-2">
            <motion.div
              style={reducedMotion ? {} : { y: imageY }}
              className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.14]"
            >
              <Image
                src={treatment.image}
                alt={treatment.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-[1.08]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-l from-ink/30 via-transparent to-ink/40" />

            {/* Corner index badge — mobile only */}
            <div className="absolute top-5 right-5 md:hidden">
              <span className="font-serif text-5xl text-champagne/70 font-light italic">
                {ROMAN[index]}
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className="relative flex flex-col justify-between p-8 md:p-12 order-2 md:order-1 bg-gradient-to-br from-ink-deep via-charcoal to-ink-deep">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="font-serif text-4xl md:text-6xl text-champagne/40 font-light italic">
                {ROMAN[index]}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone/60 font-sans">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Middle — headline */}
            <div className="flex flex-col gap-5 py-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-champagne/70 font-sans">
                {treatment.typeLabel}
              </p>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bone font-light tracking-[-0.02em] leading-[1.05]">
                {treatment.name}
              </h3>
              <p className="font-serif text-xl md:text-2xl text-champagne font-light italic leading-snug">
                &ldquo;{treatment.tagline}&rdquo;
              </p>
              <p className="text-stone text-sm md:text-base leading-relaxed font-sans max-w-md">
                {treatment.heroDescription}
              </p>
            </div>

            {/* Bottom — meta */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10 text-xs font-sans">
                <div>
                  <span className="block text-[9px] tracking-[0.25em] uppercase text-stone/50 mb-1">
                    Session
                  </span>
                  <span className="text-bone/80">{treatment.session}</span>
                </div>
                <div>
                  <span className="block text-[9px] tracking-[0.25em] uppercase text-stone/50 mb-1">
                    Downtime
                  </span>
                  <span className="text-bone/80">
                    {treatment.downtime.length > 20
                      ? treatment.downtime.slice(0, 18) + "…"
                      : treatment.downtime}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] tracking-[0.25em] uppercase text-stone/50 mb-1">
                    From
                  </span>
                  <span className="text-champagne">{treatment.price}</span>
                </div>
              </div>

              <span className="inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-sans text-bone transition-colors duration-300 w-fit group-hover:text-champagne">
                Read treatment
                <span
                  aria-hidden="true"
                  className="inline-block w-10 h-px bg-current transition-all duration-500 group-hover:w-20"
                />
              </span>
            </div>
          </div>
        </article>
        {/* Border sweep accent on hover */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 group-hover:w-full"
        />
        </Link>
      </motion.div>
    </div>
  );
}
