// src/components/RevealOnScroll/index.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const hidden = {
    opacity: 0,
    y: direction === "up" ? 36 : 0,
    x: direction === "left" ? -36 : direction === "right" ? 36 : 0,
    filter: "blur(8px)",
  };

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
