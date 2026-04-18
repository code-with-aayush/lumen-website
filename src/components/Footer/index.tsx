// src/components/Footer/index.tsx
import Link from "next/link";
import { NAV_LINKS, SITE_ADDRESS, SITE_CONTACT, SITE_HOURS, SITE_NAME } from "@/constants/site";

export function Footer() {
  return (
    <footer
      className="bg-ink-deep border-t border-white/5 pt-16 pb-10"
      aria-label="Site footer"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl text-bone hover:text-champagne transition-colors block mb-4"
            >
              Lumen
            </Link>
            <p className="text-stone text-sm leading-relaxed max-w-[240px]">
              A medical aesthetics studio in Manhattan&rsquo;s West Village.
              Considered treatments for skin that looks like yours.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-6">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-bone-soft text-sm hover:text-champagne transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/book"
                    className="text-champagne text-sm hover:text-champagne-deep transition-colors"
                  >
                    Book a consultation
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-6">
              Hours
            </p>
            <ul className="flex flex-col gap-3">
              {SITE_HOURS.map(({ days, hours }) => (
                <li key={days} className="text-sm">
                  <span className="text-stone">{days}</span>
                  <br />
                  <span className="text-bone-soft">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-6">
              Find Us
            </p>
            <address className="not-italic text-sm flex flex-col gap-3">
              <p className="text-bone-soft leading-relaxed">
                {SITE_ADDRESS.street}
                <br />
                {SITE_ADDRESS.city}, {SITE_ADDRESS.state} {SITE_ADDRESS.zip}
              </p>
              <a
                href={SITE_CONTACT.phoneHref}
                className="text-bone-soft hover:text-champagne transition-colors"
              >
                {SITE_CONTACT.phone}
              </a>
              <a
                href={SITE_CONTACT.emailHref}
                className="text-bone-soft hover:text-champagne transition-colors"
              >
                {SITE_CONTACT.email}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone text-xs">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-stone text-xs">
            Portfolio project — fictional studio for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
