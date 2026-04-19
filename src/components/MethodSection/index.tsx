// src/components/MethodSection/index.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MethodSection() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.02, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-surface relative overflow-hidden"
      aria-label="Our approach"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image with parallax */}
          <RevealOnScroll direction="left">
            <div className="relative h-[500px] lg:h-[620px] overflow-hidden">
              <motion.div
                style={
                  reducedMotion
                    ? {}
                    : { y: imageY, scale: imageScale }
                }
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop"
                  alt="Lumen consultation room — warm light, considered space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-surface-ink/20 to-transparent"
              />
            </div>
          </RevealOnScroll>

          {/* Copy with parallax */}
          <RevealOnScroll direction="right">
            <motion.div style={reducedMotion ? {} : { y: textY }}>
              <p className="text-[11px] tracking-[0.2em] uppercase text-surface-stone font-sans mb-6">
                Our Approach
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-surface-ink font-light leading-tight mb-8">
                We start with your face,
                <br />
                not a price list.
              </h2>
              <div className="flex flex-col gap-5 text-surface-stone font-sans text-base leading-relaxed mb-10">
                <p>
                  Every new client begins with a 45-minute consultation. No
                  sales deck, no package upsell. We assess your concerns, your
                  anatomy, your lifestyle — and build a plan that works for the
                  next five years, not the next five minutes.
                </p>
                <p>
                  Some of our best consultations end with us recommending
                  nothing at all.
                </p>
              </div>
              <Link
                href="/book"
                className="inline-block text-xs tracking-widest uppercase font-sans text-surface-ink border border-surface-rule px-8 py-4 hover:bg-surface-ink hover:text-surface transition-colors"
              >
                Book your consultation
              </Link>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
