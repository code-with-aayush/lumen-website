// src/app/quiz/page.tsx
import type { Metadata } from "next";
import { QuizClient } from "./QuizClient";

export const metadata: Metadata = {
  title: "Treatment Finder Quiz — Find your treatment",
  description:
    "Answer 5 questions to get personalized treatment recommendations from Lumen Aesthetics. Free, no obligation.",
  alternates: {
    canonical: "https://lumenaesthetics.com/quiz",
  },
};

export default function QuizPage() {
  return <QuizClient />;
}
