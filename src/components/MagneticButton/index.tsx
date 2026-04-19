// src/components/MagneticButton/index.tsx
"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Pure wrapper. Does not render an anchor or button itself —
 * consumer supplies the real interactive element (Link / button) as child.
 * This avoids nested-anchor hydration errors.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.25,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "inline-block transition-transform duration-500 ease-out will-change-transform",
        className
      )}
    >
      {children}
    </span>
  );
}
