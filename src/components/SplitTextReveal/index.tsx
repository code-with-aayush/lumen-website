// src/components/SplitTextReveal/index.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}

export function SplitTextReveal({
  text,
  className,
  as = "h2",
  delay = 0,
}: SplitTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const reducedMotion = useReducedMotion();

  const Tag = motion[as];
  const words = text.split(" ");

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <div ref={ref} className="overflow-hidden">
      <Tag className={cn("flex flex-wrap", className)} aria-label={text}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-[0.12em] mr-[0.28em]"
            aria-hidden="true"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
              transition={{
                duration: 0.95,
                delay: delay + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
