// src/components/CountUp/index.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

interface CountUpProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }
    mv.set(value);
  }, [inView, reducedMotion, value, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(v);
    });
    return () => unsub();
  }, [spring]);

  const formatted = display.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
