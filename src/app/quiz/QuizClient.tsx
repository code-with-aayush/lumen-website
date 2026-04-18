// src/app/quiz/QuizClient.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getTreatmentBySlug } from "@/constants/treatments";

interface QuizAnswer {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
}

type AnswerKey = keyof QuizAnswer;

interface Question {
  id: AnswerKey;
  question: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    id: "q1",
    question: "What brought you here today?",
    options: [
      "Fine lines or wrinkles",
      "Skin texture or tone",
      "Volume loss or sagging",
      "Sun damage or pigmentation",
      "Acne scarring",
      "I'm not sure — I want to explore",
    ],
  },
  {
    id: "q2",
    question: "Where are you in your aesthetic journey?",
    options: [
      "Never had anything done",
      "I've had basics (Botox, facials)",
      "I'm experienced and looking for what's next",
    ],
  },
  {
    id: "q3",
    question: "How much downtime can you tolerate?",
    options: [
      "None — I have events, I need to be back tomorrow",
      "A few days — I can manage light redness",
      "A week — if the result is worth it",
    ],
  },
  {
    id: "q4",
    question: "What's your rough budget for your first treatment?",
    options: [
      "Under $500",
      "$500–$1,500",
      "$1,500+",
      "Not a primary concern",
    ],
  },
  {
    id: "q5",
    question: "When would you want to start?",
    options: ["This week", "This month", "Just researching for now"],
  },
];

interface Recommendation {
  slugs: string[];
  summary: string;
}

function getRecommendation(answers: QuizAnswer): Recommendation {
  const { q1, q3, q4 } = answers;

  const isAcneScarring = q1 === "Acne scarring";
  const isVolumeLoss = q1 === "Volume loss or sagging";
  const isTexture = q1 === "Skin texture or tone" || q1 === "Sun damage or pigmentation";
  const isFineLines = q1 === "Fine lines or wrinkles";
  const isNotSure = q1 === "I'm not sure — I want to explore";

  const hasDowntime = q3 === "A week — if the result is worth it";
  const someDowntime = q3 === "A few days — I can manage light redness";
  const noDowntime = q3 === "None — I have events, I need to be back tomorrow";

  const highBudget = q4 === "$1,500+" || q4 === "Not a primary concern";
  const midBudget = q4 === "$500–$1,500";
  const lowBudget = q4 === "Under $500";

  if (isNotSure) {
    return {
      slugs: ["botox-dysport", "hydrafacial"],
      summary:
        "Your face, your priorities — let us build the plan together. We'd start with a complimentary consultation to understand your concerns before recommending anything specific.",
    };
  }

  if (isAcneScarring) {
    if (hasDowntime) {
      return {
        slugs: ["morpheus8", "coolpeel-co2"],
        summary:
          "The two treatments we'd choose for this ourselves. Morpheus8 remodels collagen at depth; CoolPeel resurfaces with precision. Both produce real, lasting change in acne scarring.",
      };
    }
    return {
      slugs: ["morpheus8", "skinpen-microneedling"],
      summary:
        "Morpheus8 is our most powerful option for scarring. If you need less downtime, SkinPen microneedling with an exosome boost is a strong starting point.",
    };
  }

  if (isVolumeLoss && highBudget && (hasDowntime || someDowntime)) {
    return {
      slugs: ["sculptra", "dermal-filler"],
      summary:
        "For clients ready to invest in results that build over months. Sculptra stimulates your own collagen for gradual, natural-looking volume. Filler offers more immediate correction.",
    };
  }

  if (isVolumeLoss) {
    return {
      slugs: ["dermal-filler", "sculptra"],
      summary:
        "Volume restoration is about choosing the right product for the anatomy. Filler works immediately; Sculptra builds over time. We'd assess the right approach at your consultation.",
    };
  }

  if ((isTexture || isAcneScarring) && (highBudget || midBudget) && (hasDowntime || someDowntime)) {
    return {
      slugs: ["halo-laser", "bbl-photofacial"],
      summary:
        "Resurfacing treatments that transform skin quality over 3–6 months. Halo is the gold standard for comprehensive correction; BBL is exceptional for pigmentation and tone.",
    };
  }

  if (isTexture && someDowntime) {
    return {
      slugs: ["skinpen-microneedling", "bbl-photofacial"],
      summary:
        "SkinPen builds collagen for texture; BBL clears pigmentation and redness. Together, they address most tone and texture concerns.",
    };
  }

  if (isFineLines && noDowntime && lowBudget) {
    return {
      slugs: ["botox-dysport", "hydrafacial"],
      summary:
        "A gentle introduction that softens what bothers you without recovery. Botox addresses dynamic lines; Hydrafacial improves overall skin quality with zero downtime.",
    };
  }

  if (isFineLines && hasDowntime && highBudget) {
    return {
      slugs: ["halo-laser", "morpheus8"],
      summary:
        "For significant fine line improvement with lasting results. Halo resurfacing and Morpheus8 collagen remodeling are the most impactful non-surgical options available.",
    };
  }

  if (isFineLines) {
    return {
      slugs: ["botox-dysport", "morpheus8"],
      summary:
        "Botox softens dynamic lines in 20 minutes. For deeper, more structural improvement, Morpheus8 builds new collagen over 3–6 months.",
    };
  }

  // Fallback
  return {
    slugs: ["hydrafacial", "botox-dysport"],
    summary:
      "Based on what you told us, we'd start here — but every face is different. A complimentary consultation will let us build a plan specific to your anatomy and goals.",
  };
}

export function QuizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();

  const isComplete = step === QUESTIONS.length;
  const recommendation = isComplete
    ? getRecommendation(answers as QuizAnswer)
    : null;

  const handleAnswer = (value: string) => {
    const question = QUESTIONS[step];
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setDirection(1);
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const variants = {
    enter: (dir: number) => ({
      x: reducedMotion ? 0 : dir * 30,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: reducedMotion ? 0 : dir * -30,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen pt-28 pb-20 flex flex-col">
      {/* Progress bar */}
      {!isComplete && (
        <div className="fixed top-0 left-0 right-0 h-0.5 bg-charcoal z-50">
          <motion.div
            className="h-full bg-champagne"
            animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      <div className="container flex-1 flex flex-col justify-center max-w-2xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          {!isComplete ? (
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Step indicator */}
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-6">
                Question {step + 1} of {QUESTIONS.length}
              </p>

              <h1 className="font-serif text-3xl md:text-4xl text-bone font-light mb-10">
                {QUESTIONS[step].question}
              </h1>

              <div className="flex flex-col gap-3">
                {QUESTIONS[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="text-left px-6 py-5 border border-white/10 text-bone font-sans text-sm hover:border-champagne/50 hover:bg-charcoal transition-all group"
                  >
                    <span className="flex items-center justify-between gap-4">
                      {option}
                      <span className="text-stone group-hover:text-champagne transition-colors shrink-0">
                        →
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-8 text-xs tracking-widest uppercase text-stone font-sans hover:text-bone transition-colors"
                >
                  ← Back
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-champagne font-sans mb-4">
                Your personalized recommendation
              </p>
              <h1 className="font-serif text-3xl md:text-5xl text-bone font-light mb-6">
                Based on what you told us.
              </h1>
              <p className="text-stone font-sans text-base leading-relaxed mb-12 max-w-xl">
                {recommendation?.summary}
              </p>
              <p className="text-stone/60 text-xs font-sans mb-12 italic">
                Every face is different — we&rsquo;d want to confirm in person.
              </p>

              {/* Recommended treatment cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {recommendation?.slugs.map((slug) => {
                  const treatment = getTreatmentBySlug(slug);
                  if (!treatment) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/treatments/${slug}`}
                      className="group block border border-white/10 hover:border-champagne/30 transition-colors overflow-hidden"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={treatment.image}
                          alt={treatment.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-stone font-sans mb-1">
                          {treatment.typeLabel}
                        </p>
                        <h3 className="font-serif text-lg text-bone font-light mb-1">
                          {treatment.name}
                        </h3>
                        <p className="text-champagne text-xs font-sans">
                          {treatment.price}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-block text-center text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-10 py-4 hover:bg-champagne-deep transition-colors"
                >
                  Book a consultation
                </Link>
                <button
                  onClick={() => {
                    setStep(0);
                    setAnswers({});
                  }}
                  className="inline-block text-center text-xs tracking-widest uppercase font-sans text-stone border border-white/10 px-10 py-4 hover:text-bone hover:border-white/20 transition-colors"
                >
                  Start over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
