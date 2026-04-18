// src/app/thank-you/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Label } from "@/components/ui/Label";

export const metadata: Metadata = {
  title: "You're booked — See you soon",
  description: "Your consultation at Lumen Aesthetics is confirmed. Here's what to expect next.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-28">
      <div className="container max-w-2xl">
        <RevealOnScroll>
          <Label className="mb-8 block text-champagne">Confirmation</Label>
          <h1 className="font-serif text-5xl md:text-6xl text-bone font-light leading-tight mb-8">
            You&rsquo;re in.<br />
            We&rsquo;ll see you{" "}
            <em className="text-champagne not-italic">soon.</em>
          </h1>
          <p className="text-stone font-sans text-base leading-relaxed mb-12 max-w-md">
            Your consultation is confirmed. You should receive a calendar
            invite and confirmation email within the next few minutes.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-col gap-px bg-white/5 mb-14">
            {[
              {
                label: "What happens next",
                value:
                  "A confirmation email is on its way. We'll also send a reminder 24 hours before your appointment.",
              },
              {
                label: "Where to go",
                value:
                  "412 Bleecker Street, Studio 3. Ring the bell marked 'L.A.' and take the stairs to the second floor. We'll be expecting you.",
              },
              {
                label: "What to bring",
                value:
                  "Nothing specific. Come as you are — no makeup required, though we'll ask you to arrive with a clean face if treatment is planned on the day.",
              },
              {
                label: "Cancellations",
                value:
                  "If you need to reschedule, we ask for 24 hours' notice. Use the link in your confirmation email, or call (212) 555-0187.",
              },
            ].map(({ label, value }) => (
              <div key={label} className="bg-charcoal px-8 py-6">
                <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-2">
                  {label}
                </p>
                <p className="text-bone-soft font-sans text-sm leading-relaxed">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/treatments"
              className="text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-8 py-4 hover:bg-champagne-deep transition-colors"
            >
              Browse treatments
            </Link>
            <Link
              href="/"
              className="text-xs tracking-widest uppercase font-sans text-champagne border border-champagne/30 px-8 py-4 hover:border-champagne transition-colors"
            >
              Back to home
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
