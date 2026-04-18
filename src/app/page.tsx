// src/app/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ValueStrip } from "@/components/ValueStrip";
import { TrustStrip } from "@/components/TrustStrip";
import { TreatmentsBento } from "@/components/TreatmentsBento";
import { MethodSection } from "@/components/MethodSection";
import { TeamGrid } from "@/components/TeamGrid";
import { EditorialQuote } from "@/components/EditorialQuote";
import { MembershipTeaser } from "@/components/MembershipTeaser";
import { PressMarquee } from "@/components/PressMarquee";
import { FooterCTA } from "@/components/FooterCTA";
import { SectionDivider } from "@/components/SectionDivider";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Lumen Aesthetics — Medical Aesthetics Studio, West Village NYC",
  description:
    "A medical aesthetics studio in Manhattan's West Village. Considered treatments for skin that looks like yours. Botox, filler, Morpheus8, Halo laser, and more.",
  alternates: {
    canonical: "https://lumenaesthetics.com",
  },
  openGraph: {
    url: "https://lumenaesthetics.com",
    title: "Lumen Aesthetics — Medical Aesthetics Studio, West Village NYC",
    description:
      "A medical aesthetics studio in Manhattan's West Village. Physician-led, results-driven treatments in a considered environment.",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <ValueStrip />
      <TrustStrip />
      <TreatmentsBento />
      <SectionDivider />
      <MethodSection />
      <TeamGrid />
      <EditorialQuote />
      <MembershipTeaser />
      <PressMarquee />
      <FooterCTA />
    </>
  );
}
