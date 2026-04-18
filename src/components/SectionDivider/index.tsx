// src/components/SectionDivider/index.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const reducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative h-px w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(212,177,115,0.45) 50%, transparent 100%)",
        }}
        initial={{ width: reducedMotion ? "70%" : 0 }}
        animate={inView ? { width: "70%" } : {}}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
