// src/components/MembershipTeaser/index.tsx
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MEMBERSHIP_BENEFITS } from "@/constants/site";

export function MembershipTeaser() {
  return (
    <section className="py-24 md:py-32 bg-surface" aria-label="Membership">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-surface-stone font-sans mb-6">
                The Lumen Membership
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-surface-ink font-light leading-tight mb-6">
                For the long view.
              </h2>
              <p className="text-surface-stone font-sans text-base leading-relaxed mb-8">
                Members receive priority booking, treatment credits that roll
                over, complimentary quarterly skin analysis, and 15% off all
                retail. $195/month. Cancel anytime.
              </p>
              <Link
                href="/membership"
                className="inline-block text-xs tracking-widest uppercase font-sans text-surface-ink border border-surface-rule px-8 py-4 hover:bg-surface-ink hover:text-surface transition-colors"
              >
                Learn more
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <ul className="flex flex-col gap-4" aria-label="Membership benefits">
              {MEMBERSHIP_BENEFITS.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-surface-stone font-sans text-sm leading-relaxed pb-4 border-b border-surface-rule last:border-0"
                >
                  <span className="text-champagne mt-0.5 shrink-0" aria-hidden="true">
                    —
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
