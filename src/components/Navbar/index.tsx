// src/components/Navbar/index.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <nav
          className="container flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          {/* Logo — left */}
          <Link
            href="/"
            className="font-serif text-xl text-bone tracking-wide hover:text-champagne transition-colors shrink-0"
            aria-label="Lumen Aesthetics — home"
          >
            Lumen
          </Link>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-xs tracking-widest uppercase font-sans transition-colors py-2",
                  pathname === link.href
                    ? "text-champagne"
                    : "text-stone hover:text-bone"
                )}
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-0.5 left-0 right-0 h-px bg-champagne origin-left transition-transform duration-500 ease-out",
                    pathname === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
            <Link
              href="/book"
              className="group/book relative text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-6 py-3 transition-colors duration-500 overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover/book:text-bone">
                Book
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink-deep transform translate-y-full group-hover/book:translate-y-0 transition-transform duration-500 ease-out"
              />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-bone p-2 -mr-2 hover:text-champagne transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
