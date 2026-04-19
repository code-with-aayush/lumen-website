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
                className="group/btn relative inline-flex items-center gap-3 text-xs tracking-widest uppercase font-sans text-surface-ink border border-surface-rule px-8 py-4 overflow-hidden transition-colors duration-500"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-surface">
                  Learn more
                </span>
                <span
                  aria-hidden="true"
                  className="relative z-10 inline-block w-4 h-px bg-current transition-all duration-500 group-hover/btn:w-8 group-hover/btn:text-surface"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-surface-ink transform translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out"
                />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <ul className="flex flex-col gap-4" aria-label="Membership benefits">
              {MEMBERSHIP_BENEFITS.map((benefit, i) => (
                <li
                  key={i}
                  className="group/benefit flex items-start gap-4 text-surface-stone font-sans text-sm leading-relaxed pb-4 border-b border-surface-rule last:border-0 hover:text-surface-ink transition-colors duration-300"
                >
                  <span
                    className="text-champagne mt-0.5 shrink-0 transition-all duration-500 group-hover/benefit:w-8"
                    aria-hidden="true"
                    style={{ display: "inline-block", width: "1rem" }}
                  >
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
