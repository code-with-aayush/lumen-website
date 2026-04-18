// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Label } from "@/components/ui/Label";
import { FooterCTA } from "@/components/FooterCTA";
import { TEAM_MEMBERS } from "@/constants/team";

export const metadata: Metadata = {
  title: "About — A studio built on a simple idea",
  description:
    "Lumen Aesthetics was founded on one idea: do less, better. One location, one team, treatments we'd do on ourselves. Learn our story and philosophy.",
  alternates: {
    canonical: "https://lumenaesthetics.com/about",
  },
};

const PHILOSOPHY_POINTS = [
  {
    title: "Subtlety is the highest form of skill.",
    body: "The best injectable work is the work you don't notice. If your friends can tell you had something done, it wasn't done well.",
  },
  {
    title: "Less is almost always more.",
    body: "We will regularly recommend you come in less often, use fewer products, and spend less money than you expect to.",
  },
  {
    title: "Your face is not a project.",
    body: "It's the face you'll carry for the rest of your life. We treat it like it belongs to someone we care about.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container">
          <RevealOnScroll>
            <Label className="mb-6 block">About</Label>
            <h1 className="font-serif text-5xl md:text-7xl text-bone font-light leading-tight max-w-3xl">
              A studio built on a simple idea: do less, better.
            </h1>
          </RevealOnScroll>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <RevealOnScroll direction="left">
              <div className="relative h-[500px] lg:h-[640px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop"
                  alt="Lumen Aesthetics studio interior — considered space, West Village"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="flex flex-col gap-6 text-stone font-sans text-base leading-relaxed max-w-prose pt-4">
                <p>
                  We opened Lumen in 2021 because we were tired of two kinds of places.
                </p>
                <p>
                  The first was the dermatologist&rsquo;s office — clinical, cold,
                  transactional. You left with a treatment but no relationship.
                </p>
                <p>
                  The second was the chain med spa — menus 80 items deep, injectors
                  rotating every six months, treatments upsold from a commission sheet.
                </p>
                <p>
                  We wanted a third option. A studio where the medical rigor of a
                  dermatology practice met the thoughtfulness of a neighborhood
                  restaurant — where you&rsquo;re a regular, your preferences are
                  remembered, and every decision is made by someone who knows your
                  face.
                </p>
                <p className="text-bone">
                  Four years in, we&rsquo;re still that. One location. One team.
                  Treatments we&rsquo;d do on ourselves. Nothing we wouldn&rsquo;t.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container">
          <RevealOnScroll>
            <Label variant="surface" className="mb-6 block">
              Philosophy
            </Label>
            <h2 className="font-serif text-4xl md:text-5xl text-surface-ink font-light mb-16">
              We believe:
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PHILOSOPHY_POINTS.map((point, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-xl text-surface-ink font-light italic">
                    {point.title}
                  </h3>
                  <p className="text-surface-stone font-sans text-sm leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container">
          <RevealOnScroll>
            <Label className="mb-6 block">Practitioners</Label>
            <h2 className="font-serif text-4xl md:text-5xl text-bone font-light mb-16">
              The team.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member, i) => (
              <RevealOnScroll key={member.name} delay={i * 0.1}>
                <article>
                  <div className="relative h-96 mb-6 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-bone font-light">
                    {member.name},{" "}
                    <span className="text-stone">{member.title}</span>
                  </h3>
                  <p className="text-champagne text-[11px] tracking-[0.15em] uppercase font-sans mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-stone text-sm font-sans leading-relaxed">
                    {member.longBio}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        headline="Meet the team in person."
        primaryCta={{ label: "Book a consultation", href: "/book" }}
        secondaryCta={{ label: "View treatments", href: "/treatments" }}
      />
    </>
  );
}
