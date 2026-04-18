// src/components/TiltCard/index.tsx
"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className, maxTilt = 5 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * maxTilt;
    const ry = (px - 0.5) * maxTilt;
    ref.current.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    ref.current.style.setProperty("--mx", `${px * 100}%`);
    ref.current.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]",
        className
      )}
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%" }}
    >
      {children}
    </div>
  );
}
