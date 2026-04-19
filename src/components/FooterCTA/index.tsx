// src/components/FooterCTA/index.tsx
"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headlineScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 1, 0.98]
  );

  return (
    <section
      ref={ref}
      className="relative bg-feature py-28 md:py-40 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,177,115,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="container text-center max-w-3xl mx-auto relative z-10">
        <div
          aria-hidden="true"
          className="w-px h-12 bg-gradient-to-b from-transparent via-champagne/40 to-transparent mx-auto mb-10"
        />
        <motion.h2
          style={reducedMotion ? {} : { scale: headlineScale }}
          className="font-serif text-4xl md:text-6xl text-feature-ink font-light mb-10 leading-tight tracking-[-0.02em]"
        >
          {headline}
        </motion.h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton strength={0.2}>
            <Link
              href={primaryCta.href}
              className="group/btn relative inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-sans text-ink-deep bg-champagne px-10 py-5 overflow-hidden transition-colors duration-500"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-bone">
                {primaryCta.label}
              </span>
              <span
                aria-hidden="true"
                className="relative z-10 inline-block w-4 h-px bg-current transition-all duration-500 group-hover/btn:w-8 group-hover/btn:text-bone"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink-deep transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"
              />
            </Link>
          </MagneticButton>
          <Link
            href={secondaryCta.href}
            className="group/link inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-sans text-feature-ink border border-feature-rule px-10 py-5 hover:border-champagne hover:text-champagne hover:bg-champagne/5 transition-all duration-500"
          >
            <span>{secondaryCta.label}</span>
            <span
              aria-hidden="true"
              className="inline-block w-4 h-px bg-current transition-all duration-500 group-hover/link:w-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
