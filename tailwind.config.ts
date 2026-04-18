// D:\Freelance Projects\Lumen\tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-deep": "var(--ink-deep)",
        charcoal: "var(--charcoal)",
        "charcoal-soft": "var(--charcoal-soft)",
        bone: "var(--bone)",
        "bone-soft": "var(--bone-soft)",
        stone: "var(--stone)",
        "stone-soft": "var(--stone-soft)",
        champagne: "var(--champagne)",
        "champagne-deep": "var(--champagne-deep)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "surface-ink": "var(--surface-ink)",
        "surface-stone": "var(--surface-stone)",
        feature: "var(--feature)",
        "feature-ink": "var(--feature-ink)",
        "feature-stone": "var(--feature-stone)",
        "feature-rule": "var(--feature-rule)",
        "surface-rule": "var(--surface-rule)",
        "champagne-dim": "var(--champagne-dim)",
        rule: "var(--rule)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        quizIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        revealUp: "revealUp 0.7s ease forwards",
        quizIn: "quizIn 0.4s ease forwards",
        fadeIn: "fadeIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
