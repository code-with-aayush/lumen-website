// src/app/membership/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Label } from "@/components/ui/Label";
import { FooterCTA } from "@/components/FooterCTA";
import { MEMBERSHIP_BENEFITS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Membership — Lumen, on a rhythm",
  description:
    "The Lumen Membership: $195/month toward treatments, priority booking, quarterly skin analysis, and 15% off retail. Cancel anytime.",
  alternates: {
    canonical: "https://lumenaesthetics.com/membership",
  },
};

export default function MembershipPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container">
          <RevealOnScroll>
            <Label className="mb-6 block">Membership</Label>
            <h1 className="font-serif text-5xl md:text-7xl text-bone font-light leading-tight mb-6">
              Lumen, on a rhythm.
            </h1>
            <p className="text-stone text-base md:text-lg font-sans max-w-xl">
              For clients who&rsquo;ve stopped thinking of aesthetic care as
              occasional — and started treating it as maintenance.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">
            {/* Left: description */}
            <RevealOnScroll>
              <div>
                <h2 className="font-serif text-3xl text-bone font-light mb-6">
                  Who it&rsquo;s for
                </h2>
                <p className="text-stone font-sans text-base leading-relaxed mb-8">
                  You come in every 3–4 months for Botox, twice a year for a
                  laser, and once a month for a facial. You&rsquo;re done
                  deciding whether to book. You&rsquo;d rather just have a
                  studio that knows you.
                </p>
                <p className="text-stone font-sans text-base leading-relaxed mb-12">
                  The Lumen Membership is designed for this: a standing
                  relationship, not a transactional one. Your credit carries
                  over, your preferences are documented, and your next
                  appointment is always 48 hours away at most.
                </p>

                <h2 className="font-serif text-3xl text-bone font-light mb-6">
                  What&rsquo;s included
                </h2>
                <ul className="flex flex-col gap-4">
                  {MEMBERSHIP_BENEFITS.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-stone font-sans text-sm leading-relaxed pb-4 border-b border-white/5 last:border-0"
                    >
                      <span className="text-champagne mt-0.5 shrink-0">—</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* Right: pricing card */}
            <RevealOnScroll direction="right">
              <div className="border border-white/10 p-10 sticky top-28">
                <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-2">
                  Monthly membership
                </p>
                <p className="font-serif text-6xl text-bone font-light mb-2">
                  $195
                </p>
                <p className="text-stone text-sm font-sans mb-8">
                  per month · cancel anytime
                </p>

                <div className="flex flex-col gap-3 mb-10">
                  {[
                    "$195 treatment credit (rolls over 3 months)",
                    "Priority booking, always",
                    "Quarterly skin analysis",
                    "15% off all retail",
                    "Early access to new treatments",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-champagne shrink-0" />
                      <p className="text-stone text-sm font-sans">{item}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className="block text-center text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-8 py-4 hover:bg-champagne-deep transition-colors mb-4"
                >
                  Enroll in membership
                </Link>
                <p className="text-stone text-[11px] text-center font-sans">
                  Questions? <Link href="/contact" className="text-champagne hover:text-champagne-deep">Talk to us first</Link>
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container max-w-3xl">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-surface-ink font-light mb-12">
              Common questions
            </h2>
          </RevealOnScroll>
          {[
            {
              q: "Can I pause my membership?",
              a: "We don't offer a formal pause — but your credits roll over for up to 3 months, so if life gets busy, you won't lose what you've paid for.",
            },
            {
              q: "When can I cancel?",
              a: "After your first month, you can cancel anytime. Just give us 30 days notice before your next billing date.",
            },
            {
              q: "Can my credit cover any treatment?",
              a: "Yes — your monthly credit applies to any treatment we offer. It's not locked to a specific service.",
            },
            {
              q: "What if I spend more than $195 in a month?",
              a: "You pay the difference at your regular appointment rate. Members also receive 15% off retail products.",
            },
          ].map(({ q, a }, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div className="border-t border-surface-rule py-8 last:border-b">
                <h3 className="font-serif text-lg text-surface-ink font-light mb-3">
                  {q}
                </h3>
                <p className="text-surface-stone font-sans text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <FooterCTA
        headline="Start your Lumen rhythm."
        primaryCta={{ label: "Enroll in membership", href: "/book" }}
        secondaryCta={{ label: "Learn about treatments", href: "/treatments" }}
      />
    </>
  );
}
