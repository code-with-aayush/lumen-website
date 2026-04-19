// src/components/Hero/index.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EditorialMarquee } from "@/components/EditorialMarquee";
import { MagneticButton } from "@/components/MagneticButton";

const HERO_MARKERS = [
  "Board-certified medical director",
  "FDA-cleared devices",
  "Physician-led protocols",
  "In-house pharmacy",
  "Member-only access",
  "West Village, NYC",
  "Established 2019",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.12 } },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 32,
      filter: reducedMotion ? "blur(0px)" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex flex-col"
      aria-label="Hero section"
    >
      {/* Mobile background image (hidden on lg) */}
      <div className="absolute inset-0 lg:hidden z-0" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          style={reducedMotion ? {} : { y: imageY, scale: imageScale }}
        >
          <Image
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1800&auto=format&fit=crop"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
      </div>

      {/* Ambient champagne glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 w-[700px] h-[600px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(212,177,115,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 10% 90%, rgba(212,177,115,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Top row — tiny editorial label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="container relative z-10 pt-28 md:pt-36"
      >
        <div className="flex items-center gap-4">
          <span className="w-10 h-px bg-champagne/60" />
          <p className="text-[10px] tracking-[0.45em] uppercase text-champagne/70 font-sans">
            Medical Aesthetics · Est. 2019 · West Village
          </p>
        </div>
      </motion.div>

      {/* Main grid */}
      <div className="container relative z-10 flex-1 flex items-center py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Content column */}
          <motion.div
            style={reducedMotion ? {} : { y: textY, opacity: textOpacity }}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <motion.h1
              variants={item}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-bone font-light leading-[1.02] tracking-[-0.035em]"
            >
              Considered
              <br />
              treatments, for
              <br />
              skin that looks
              <br />
              <em className="text-champagne not-italic italic font-extralight">
                like&nbsp;yours.
              </em>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-stone text-base md:text-lg max-w-md font-sans leading-relaxed"
            >
              A medical aesthetics studio in Manhattan, for results
              that don&rsquo;t announce themselves.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <MagneticButton strength={0.2} className="inline-block">
                <Link
                  href="/book"
                  className="group/btn relative inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-sans text-ink-deep bg-champagne px-9 py-5 hover:bg-bone transition-colors duration-500 overflow-hidden"
                >
                  <span className="relative z-10">Book a consultation</span>
                  <span
                    aria-hidden="true"
                    className="relative z-10 inline-block w-6 h-px bg-current transition-all duration-500 group-hover/btn:w-10"
                  />
                </Link>
              </MagneticButton>
              <Link
                href="/treatments"
                className="group/link inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-sans text-bone border border-bone/20 px-9 py-5 hover:border-champagne hover:text-champagne hover:bg-champagne/5 transition-all duration-500"
              >
                <span>Browse treatments</span>
                <span
                  aria-hidden="true"
                  className="inline-block w-4 h-px bg-current transition-all duration-500 group-hover/link:w-8"
                />
              </Link>
            </motion.div>

            {/* Micro-stats row */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-white/5 mt-4"
            >
              <MicroStat label="Established" value="2019" />
              <MicroStat label="Treatments" value="5,200+" />
              <MicroStat label="Location" value="West Village" />
              <MicroStat label="Director" value="Dr. Reyes, MD" />
            </motion.div>
          </motion.div>

          {/* Image column — desktop only, framed */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[70vh] max-h-[700px] overflow-hidden border border-white/10"
            >
              <motion.div
                style={reducedMotion ? {} : { y: imageY, scale: imageScale }}
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1400&auto=format&fit=crop"
                  alt="Lumen Aesthetics studio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0px, 42vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40" />

              {/* Image meta overlay */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.35em] uppercase text-bone/80 font-sans">
                  Studio · Suite 4
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-champagne rounded-full animate-pulse" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-bone/80 font-sans">
                    Live
                  </span>
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase text-bone/60 font-sans mb-1">
                    Now booking
                  </p>
                  <p className="font-serif text-xl text-bone font-light italic">
                    Spring 2026
                  </p>
                </div>
                <span className="text-[9px] tracking-[0.3em] uppercase text-champagne/80 font-sans">
                  01 / 08
                </span>
              </div>
            </motion.div>

            {/* Vertical label beside image */}
            <div
              aria-hidden="true"
              className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
            >
              <div className="w-px h-12 bg-gradient-to-b from-transparent to-stone/30" />
              <p
                className="text-[9px] tracking-[0.35em] uppercase text-stone/50 font-sans"
                style={{ writingMode: "vertical-rl" }}
              >
                Scroll to explore
              </p>
              <div className="w-px h-12 bg-gradient-to-b from-stone/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee — editorial ticker */}
      <div className="relative z-10 border-t border-white/5">
        <EditorialMarquee
          items={HERO_MARKERS}
          speed="slow"
          className="py-5"
        />
      </div>
    </section>
  );
}

function MicroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[9px] tracking-[0.3em] uppercase text-stone/60 font-sans">
        {label}
      </span>
      <span className="font-serif text-base text-bone font-light">{value}</span>
    </div>
  );
}
