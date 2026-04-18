// src/components/TeamGrid/index.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TEAM_MEMBERS } from "@/constants/team";

export function TeamGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32" aria-label="Our team">
      <div className="container">
        <RevealOnScroll>
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-4">
              Practitioners
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-bone font-light">
              The team behind the work.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <RevealOnScroll key={member.name} delay={i * 0.1}>
              <article
                className="group cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div className="relative h-80 mb-6 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Lumen Aesthetics`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-bone font-light">
                    {member.name}, <span className="text-stone">{member.title}</span>
                  </h3>
                  <p className="text-champagne text-[11px] tracking-[0.15em] uppercase font-sans mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-stone text-sm font-sans leading-relaxed">
                    {activeIndex === i ? member.longBio : member.bio}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
