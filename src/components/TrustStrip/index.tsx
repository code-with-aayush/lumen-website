// src/components/TrustStrip/index.tsx
import { RevealOnScroll } from "@/components/RevealOnScroll";

const CREDENTIALS = [
  { label: "Board-certified", detail: "Medical director" },
  { label: "FDA-cleared", detail: "Devices & protocols" },
  { label: "Physician-led", detail: "On-site every treatment" },
  { label: "HIPAA-compliant", detail: "Records & intake" },
];

const NUMBERS = [
  { value: "5,200+", label: "Treatments delivered" },
  { value: "96%", label: "Member retention" },
  { value: "4.9", label: "Verified client rating" },
];

export function TrustStrip() {
  return (
    <section
      className="py-20 md:py-24 border-y border-white/5 bg-ink-deep/40 relative"
      aria-label="Credentials and outcomes"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
          <RevealOnScroll>
            <p className="text-[10px] tracking-[0.35em] uppercase text-champagne/60 font-sans mb-8">
              Credentials
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {CREDENTIALS.map((c) => (
                <div key={c.label} className="flex flex-col gap-1">
                  <span className="font-serif text-xl text-bone font-light">
                    {c.label}
                  </span>
                  <span className="text-stone/80 text-xs font-sans tracking-wide">
                    {c.detail}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-[10px] tracking-[0.35em] uppercase text-champagne/60 font-sans mb-8">
              By the numbers
            </p>
            <div className="flex flex-col divide-y divide-white/5">
              {NUMBERS.map((n) => (
                <div
                  key={n.label}
                  className="flex items-baseline justify-between py-5 first:pt-0 last:pb-0"
                >
                  <span className="font-serif text-4xl md:text-5xl text-champagne font-light tracking-[-0.02em]">
                    {n.value}
                  </span>
                  <span className="text-stone text-xs font-sans tracking-[0.2em] uppercase">
                    {n.label}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
