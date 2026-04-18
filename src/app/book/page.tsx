// src/app/book/page.tsx
import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Label } from "@/components/ui/Label";
import { CALCOM_LINK } from "@/constants/site";

export const metadata: Metadata = {
  title: "Book a Consultation — Complimentary · 45 Minutes",
  description:
    "Book your complimentary 45-minute consultation at Lumen Aesthetics, 412 Bleecker Street, West Village NYC. No obligation. No sales pitch.",
  alternates: {
    canonical: "https://lumenaesthetics.com/book",
  },
};

export default function BookPage() {
  const calLink = CALCOM_LINK;

  return (
    <>
      {/* Header */}
      <div className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="container">
          <RevealOnScroll>
            <Label className="mb-6 block">Book a Consultation</Label>
            <h1 className="font-serif text-5xl md:text-7xl text-bone font-light leading-[0.98] tracking-[-0.025em] mb-6">
              Your first visit begins<br />
              with a{" "}
              <em className="text-champagne not-italic">conversation.</em>
            </h1>
            <p className="text-stone text-base font-sans max-w-lg mt-8">
              Every new client starts with a complimentary 45-minute
              consultation. No sales deck, no package upsell. We assess your
              concerns, your anatomy, and your goals — and build a plan that
              makes sense for you.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 mt-14">
            {[
              { label: "Duration", value: "45 minutes" },
              { label: "Cost", value: "Complimentary" },
              { label: "Commitment", value: "None required" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-ink px-8 py-6">
                <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-2">
                  {label}
                </p>
                <p className="font-serif text-xl text-bone font-light">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking embed */}
      <section className="pb-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
            {/* Cal.com iframe */}
            <div className="min-h-[700px] bg-charcoal">
              <iframe
                src={`https://cal.com/${calLink}?embed=true&theme=dark&brandColor=D4B173`}
                className="w-full h-[700px] border-0"
                title="Book a consultation at Lumen Aesthetics"
                loading="lazy"
              />
            </div>

            {/* What to expect */}
            <RevealOnScroll direction="right">
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="font-serif text-2xl text-bone font-light mb-6">
                    What to expect
                  </h2>
                  <ul className="flex flex-col gap-6">
                    {[
                      {
                        step: "01",
                        title: "The conversation",
                        desc: "We talk. About what brought you in, what you've noticed, what you're hoping for — and what you're not.",
                      },
                      {
                        step: "02",
                        title: "The assessment",
                        desc: "Dr. Reyes or Maya will assess your facial anatomy, skin quality, and muscle activity in good light.",
                      },
                      {
                        step: "03",
                        title: "The recommendation",
                        desc: "We'll outline what we think makes sense, what can wait, and what isn't right for you. If that's nothing, we'll say so.",
                      },
                      {
                        step: "04",
                        title: "Your decision",
                        desc: "You leave with a plan — or with questions. Either is fine. There's no pressure to book treatment on the day.",
                      },
                    ].map(({ step, title, desc }) => (
                      <li key={step} className="flex gap-5">
                        <span className="font-serif text-champagne text-sm italic shrink-0 mt-0.5">
                          {step}
                        </span>
                        <div>
                          <p className="font-sans text-bone text-sm font-medium mb-1">
                            {title}
                          </p>
                          <p className="font-sans text-stone text-sm leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-white/5 p-6">
                  <p className="text-stone font-sans text-sm leading-relaxed">
                    Prefer to reach us directly?{" "}
                    <a
                      href="tel:+12125550187"
                      className="text-champagne hover:opacity-70 transition-opacity"
                    >
                      (212) 555-0187
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:hello@lumenaesthetics.com"
                      className="text-champagne hover:opacity-70 transition-opacity"
                    >
                      hello@lumenaesthetics.com
                    </a>
                    . We respond within one business day.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
