// src/components/ValueStrip/index.tsx
import { RevealOnScroll } from "@/components/RevealOnScroll";

const VALUE_PROPS = [
  {
    number: "01",
    title: "Physician-led",
    body: "Every treatment is protocoled, reviewed, and overseen by our medical director, Dr. Elena Reyes, MD.",
  },
  {
    number: "02",
    title: "Results, measured",
    body: "We document your baseline and track change over time. You see the work, not just the promise.",
  },
  {
    number: "03",
    title: "Studio, not chain",
    body: "One location, one team. No franchise template, no rotating injectors.",
  },
];

export function ValueStrip() {
  return (
    <section
      className="py-28 md:py-36 border-t border-white/5 relative"
      aria-label="Our values"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
          {VALUE_PROPS.map((item, i) => (
            <RevealOnScroll key={item.number} delay={i * 0.12}>
              <div className="flex flex-col gap-5 group">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-4xl text-champagne/20 font-light leading-none">
                    {item.number}
                  </span>
                  <div className="h-px flex-1 bg-white/5 group-hover:bg-champagne/20 transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl text-bone font-light">
                  {item.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed font-sans">
                  {item.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
