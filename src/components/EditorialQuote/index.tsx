// src/components/EditorialQuote/index.tsx
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function EditorialQuote() {
  return (
    <section
      className="relative py-32 md:py-48 bg-feature overflow-hidden"
      aria-label="Editorial quote"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,177,115,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <RevealOnScroll>
          <div
            aria-hidden="true"
            className="w-px h-12 bg-gradient-to-b from-transparent via-champagne/30 to-transparent mx-auto mb-12"
          />
          <blockquote>
            <p className="font-serif text-3xl md:text-[52px] text-feature-ink font-light leading-[1.2] italic mb-10 tracking-[-0.02em]">
              &ldquo;The best work you&rsquo;ve ever had should be the work
              no&nbsp;one can tell you&rsquo;ve&nbsp;had.&rdquo;
            </p>
            <footer>
              <cite className="text-champagne/70 text-sm font-sans tracking-[0.15em] uppercase not-italic">
                Dr. Elena Reyes — Founder
              </cite>
            </footer>
          </blockquote>
          <div
            aria-hidden="true"
            className="w-px h-12 bg-gradient-to-b from-transparent via-champagne/30 to-transparent mx-auto mt-12"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
