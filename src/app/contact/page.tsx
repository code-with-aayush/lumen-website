// src/app/contact/page.tsx
import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Label } from "@/components/ui/Label";
import { SITE_ADDRESS, SITE_CONTACT, SITE_HOURS } from "@/constants/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — 412 Bleecker Street, West Village",
  description:
    "Get in touch with Lumen Aesthetics. 412 Bleecker Street, Studio 3, New York, NY 10014. Open Tuesday–Friday 10am–7pm, Saturday 10am–5pm.",
  alternates: {
    canonical: "https://lumenaesthetics.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container">
          <RevealOnScroll>
            <Label className="mb-6 block">Contact</Label>
            <h1 className="font-serif text-5xl md:text-6xl text-bone font-light leading-tight mb-6">
              Let&rsquo;s talk.
            </h1>
            <p className="text-stone text-base font-sans max-w-md">
              Have a question before booking? Send us a message and we&rsquo;ll
              respond within one business day.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Content */}
      <section className="pb-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact info */}
            <RevealOnScroll>
              <div className="flex flex-col gap-12">
                {/* Address */}
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-4">
                    Location
                  </p>
                  <address className="not-italic text-bone font-sans text-base leading-relaxed">
                    {SITE_ADDRESS.street}
                    <br />
                    {SITE_ADDRESS.city}, {SITE_ADDRESS.state} {SITE_ADDRESS.zip}
                  </address>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-4">
                    Hours
                  </p>
                  <ul className="flex flex-col gap-3">
                    {SITE_HOURS.map(({ days, hours }) => (
                      <li key={days} className="flex justify-between gap-4 text-sm font-sans border-b border-white/5 pb-3 last:border-0">
                        <span className="text-stone">{days}</span>
                        <span className="text-bone">{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct contact */}
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-4">
                    Direct
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="text-bone font-sans text-base hover:text-champagne transition-colors"
                    >
                      {SITE_CONTACT.phone}
                    </a>
                    <a
                      href={SITE_CONTACT.emailHref}
                      className="text-bone font-sans text-base hover:text-champagne transition-colors"
                    >
                      {SITE_CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-charcoal h-48 flex items-center justify-center text-stone text-sm font-sans">
                  412 Bleecker St, West Village
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact form */}
            <RevealOnScroll direction="right">
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
