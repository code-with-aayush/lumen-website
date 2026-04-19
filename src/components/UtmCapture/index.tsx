// src/components/UtmCapture/index.tsx
"use client";

import { useEffect } from "react";
import { captureUtmFromLocation } from "@/lib/utm";

/**
 * Captures utm_* params from the initial URL into sessionStorage on mount.
 * Mounted once in the root layout — every form reads back from storage.
 */
export function UtmCapture() {
  useEffect(() => {
    captureUtmFromLocation();
  }, []);
  return null;
}
