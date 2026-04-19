// src/components/TrustStrip/index.tsx
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CountUp } from "@/components/CountUp";
import { EditorialMarquee } from "@/components/EditorialMarquee";

const CREDENTIAL_TICKER = [
  "Board-certified medical director",
  "FDA-cleared devices",
  "Physician-led protocols",
  "HIPAA-compliant records",
  "Established 2019",
  "West Village, NYC",
  "In-house pharmacy",
  "Cosmetic pharmacology specialists",
];

const STATS = [
  {
    value: 5200,
    decimals: 0,
    suffix: "+",
    label: "Treatments delivered",
    caption: "Across injectables, skin, and devices — every one documented.",
  },
  {
    value: 96,
    decimals: 0,
    suffix: "%",
    label: "Member retention",
    caption: "Clients who renew their membership year over year.",
  },
  {
    value: 4.9,
    decimals: 1,
    suffix: "",
    label: "Verified client rating",
    caption: "Averaged across 1,200+ verified post-treatment reviews.",
  },
];

export function TrustStrip() {
  return (
    <section
      className="relative bg-ink-deep border-y border-white/5"
      aria-label="Credentials and outcomes"
    >
      {/* Ambient side glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(212,177,115,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Credential ticker */}
      <div className="border-b border-white/5">
        <EditorialMarquee
          items={CREDENTIAL_TICKER}
          speed="slow"
          className="py-5"
        />
      </div>

      <div className="container py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-16 lg:gap-24">
          {/* Left column — label + quote */}
          <RevealOnScroll>
            <div className="flex flex-col gap-8 lg:sticky lg:top-32">
              <div className="flex items-center gap-4">
                <span className="w-10 h-px bg-champagne/50" />
                <p className="text-[10px] tracking-[0.35em] uppercase text-champagne/70 font-sans">
                  The record
                </p>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bone font-light leading-[1.1] tracking-[-0.02em]">
                Outcomes we&rsquo;re willing to
                <br />
                <em className="text-champagne not-italic">put in print.</em>
              </h2>
              <p className="text-stone text-sm md:text-base font-sans leading-relaxed max-w-sm">
                Every number below is auditable — drawn from our EMR and post-treatment
                surveys. If you&rsquo;d like to see the methodology, we&rsquo;ll send it.
              </p>
            </div>
          </RevealOnScroll>

          {/* Right column — stacked stat cards */}
          <div className="flex flex-col gap-6">
            {STATS.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i * 0.1}>
                <div className="group relative flex flex-col md:flex-row md:items-end gap-6 md:gap-12 p-8 md:p-10 border border-white/5 bg-charcoal/40 hover:bg-charcoal hover:border-champagne/30 transition-all duration-500 overflow-hidden">
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 0% 100%, rgba(212,177,115,0.08) 0%, transparent 60%)",
                    }}
                  />

                  <div className="flex items-baseline gap-3 md:min-w-[280px] relative z-10">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-stone/50 font-sans">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <CountUp
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      className="font-serif text-6xl md:text-7xl lg:text-[96px] text-champagne font-light tracking-[-0.04em] leading-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-1 relative z-10">
                    <p className="text-bone text-sm md:text-base font-sans tracking-[0.15em] uppercase">
                      {stat.label}
                    </p>
                    <p className="text-stone text-sm font-sans leading-relaxed max-w-md">
                      {stat.caption}
                    </p>
                  </div>

                  {/* Bottom sweep line */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-champagne/50 transition-all duration-700 group-hover:w-full"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
