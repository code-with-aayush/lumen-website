// src/lib/utm.ts
// UTM capture/persistence. First-landing UTMs are stored in sessionStorage
// so downstream form submissions can attribute the lead to its source.
export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "lumen:utm";

export function captureUtmFromLocation(): UtmParams | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const captured: UtmParams = {};
  for (const key of UTM_KEYS) {
    const v = params.get(key);
    if (v) captured[key] = v.slice(0, 100);
  }
  if (Object.keys(captured).length === 0) return null;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  } catch {
    // sessionStorage disabled (private mode) — non-fatal.
  }
  return captured;
}

export function readUtm(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    const out: UtmParams = {};
    for (const key of UTM_KEYS) {
      const v = (parsed as Record<string, unknown>)[key];
      if (typeof v === "string") out[key] = v.slice(0, 100);
    }
    return out;
  } catch {
    return {};
  }
}
