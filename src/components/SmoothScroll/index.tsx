// src/components/SmoothScroll/index.tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Lenis inertia-scroll, wired site-wide through the root layout.
 * Reduced-motion users get a near-instant duration so native feel is
 * preserved without disabling the instance (disabling was causing the
 * smoother to silently noop on systems that falsely report reduce).
 * Touch devices keep native momentum — Lenis's own touch path fights
 * iOS/Android gestures.
 */
export function SmoothScroll() {
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      duration: reducedMotion ? 0.4 : 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
