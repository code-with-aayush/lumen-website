// src/components/PressMarquee/index.tsx
import { PRESS_QUOTES } from "@/constants/site";

export function PressMarquee() {
  // Double the array for seamless loop
  const doubled = [...PRESS_QUOTES, ...PRESS_QUOTES];

  return (
    <section
      className="py-16 border-t border-b border-white/5 overflow-hidden"
      aria-label="Press mentions"
    >
      <div className="relative">
        {/* Screen reader accessible static version */}
        <ul className="sr-only">
          {PRESS_QUOTES.map((q, i) => (
            <li key={i}>
              <blockquote>
                <p>&ldquo;{q.quote}&rdquo;</p>
                <footer>— {q.source}</footer>
              </blockquote>
            </li>
          ))}
        </ul>

        {/* Visual marquee (aria-hidden) */}
        <div
          className="flex animate-marquee gap-16 whitespace-nowrap"
          aria-hidden="true"
          style={{ width: "max-content" }}
        >
          {doubled.map((q, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-bone/70 text-sm italic">
                  &ldquo;{q.quote}&rdquo;
                </span>
                <span className="text-stone text-[11px] tracking-widest uppercase font-sans shrink-0">
                  — {q.source}
                </span>
              </div>
              <span className="text-champagne/30 text-lg" aria-hidden="true">
                ·
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
