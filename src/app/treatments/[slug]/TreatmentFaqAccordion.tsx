// src/app/treatments/[slug]/TreatmentFaqAccordion.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { TreatmentFaq } from "@/types/treatment";

interface Props {
  faq: TreatmentFaq[];
}

export function TreatmentFaqAccordion({ faq }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="flex flex-col"
      role="list"
      aria-label="Frequently asked questions"
    >
      {faq.map((item, i) => {
        const isOpen = openIndex === i;
        const id = `faq-answer-${i}`;

        return (
          <div
            key={i}
            className="border-t border-white/5 last:border-b"
            role="listitem"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              aria-expanded={isOpen}
              aria-controls={id}
            >
              <span className="font-serif text-lg text-bone font-light group-hover:text-champagne transition-colors">
                {item.question}
              </span>
              <span className="text-stone group-hover:text-champagne transition-colors shrink-0">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  role="region"
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-stone font-sans text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
