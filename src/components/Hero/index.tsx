// src/components/Hero/index.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.13 } },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 28,
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
      className="relative min-h-screen flex items-end pb-24 md:pb-36 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: reducedMotion ? 0 : imageY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1800&auto=format&fit=crop"
          alt="Lumen Aesthetics studio"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-[1.12]"
        />
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </motion.div>

      {/* Ambient champagne glow — bottom left */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[700px] h-[500px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 90%, rgba(212,177,115,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Vertical location label — desktop only */}
      <div
        aria-hidden="true"
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-stone/30" />
        <p
          className="text-[9px] tracking-[0.35em] uppercase text-stone/50 font-sans"
          style={{ writingMode: "vertical-rl" }}
        >
          West Village, New York
        </p>
        <div className="w-px h-16 bg-gradient-to-b from-stone/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          style={{ y: reducedMotion ? 0 : textY }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="text-[10px] tracking-[0.45em] uppercase text-champagne/60 font-sans mb-8"
          >
            Medical Aesthetics · West Village
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-5xl sm:text-6xl md:text-[80px] text-bone font-light leading-[1.04] mb-8 tracking-[-0.03em]"
          >
            Considered treatments,
            <br />
            for skin that looks
            <br />
            <em className="text-champagne not-italic">like yours.</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-stone text-base md:text-lg mb-12 max-w-md font-sans leading-relaxed"
          >
            A medical aesthetics studio in Manhattan,&nbsp;for results
            that don&rsquo;t announce themselves.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-8 py-4 hover:bg-champagne-deep transition-colors text-center"
            >
              Book a consultation
            </Link>
            <Link
              href="/treatments"
              className="inline-block text-xs tracking-widest uppercase font-sans text-bone border border-bone/20 px-8 py-4 hover:border-champagne hover:text-champagne transition-all duration-300 text-center"
            >
              Browse treatments
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-4 right-0 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <span className="text-[9px] tracking-[0.35em] uppercase text-stone/40 font-sans">
            Scroll
          </span>
          <motion.div
            className="w-px h-14 origin-top"
            style={{
              background:
                "linear-gradient(to bottom, rgba(147,134,119,0.5), transparent)",
            }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
