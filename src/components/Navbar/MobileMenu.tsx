// src/components/Navbar/MobileMenu.tsx
"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-50 bg-ink flex flex-col pt-24 pb-12 px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "block font-serif text-4xl font-light transition-colors",
                    pathname === link.href
                      ? "text-champagne"
                      : "text-bone hover:text-champagne"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-auto"
          >
            <Link
              href="/book"
              onClick={onClose}
              className="inline-block w-full text-center text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-8 py-5 hover:bg-champagne-deep transition-colors"
            >
              Book a consultation
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
