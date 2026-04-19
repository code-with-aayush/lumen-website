// src/components/EditorialMarquee/index.tsx
import { cn } from "@/lib/cn";

interface EditorialMarqueeProps {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  variant?: "default" | "bordered" | "large";
  direction?: "left" | "right";
}

// Pure CSS keyframes defined in globals.css (editorial-marquee-left/right).
// Durations chosen so 1 full cycle (0 → -50%) takes this many seconds.
const DURATION_SECONDS = {
  slow: 60,
  normal: 40,
  fast: 25,
};

export function EditorialMarquee({
  items,
  className,
  speed = "normal",
  variant = "default",
  direction = "left",
}: EditorialMarqueeProps) {
  // Duplicate the list so the -50% translate produces a seamless loop.
  const doubled = [...items, ...items];
  const animName =
    direction === "left" ? "editorial-marquee-left" : "editorial-marquee-right";

  const sizeClass =
    variant === "large" ? "text-3xl md:text-5xl" : "text-sm md:text-base";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full overflow-hidden",
        variant === "bordered" && "border-y border-white/5 py-5",
        className
      )}
    >
      <div
        className={cn(
          "flex gap-12 md:gap-16 whitespace-nowrap will-change-transform",
          sizeClass
        )}
        style={{
          width: "max-content",
          animation: `${animName} ${DURATION_SECONDS[speed]}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 md:gap-16 shrink-0"
          >
            <span
              className={cn(
                "font-light",
                variant === "large"
                  ? "font-serif italic text-bone/90"
                  : "text-stone/70 tracking-[0.15em] uppercase text-[11px] font-sans"
              )}
            >
              {item}
            </span>
            <span
              className={cn(
                "text-champagne/40 shrink-0",
                variant === "large" ? "text-4xl" : "text-lg"
              )}
            >
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
