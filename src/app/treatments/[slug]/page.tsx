// src/app/treatments/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TREATMENTS, getTreatmentBySlug } from "@/constants/treatments";
import { FooterCTA } from "@/components/FooterCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Label } from "@/components/ui/Label";
import { TreatmentFaqAccordion } from "./TreatmentFaqAccordion";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug);
  if (!treatment) return {};

  return {
    title: `${treatment.name} in NYC — ${treatment.price}`,
    description: `${treatment.heroDescription} ${treatment.typeLabel} treatment at Lumen Aesthetics, West Village NYC.`,
    alternates: {
      canonical: `https://lumenaesthetics.com/treatments/${treatment.slug}`,
    },
    openGraph: {
      title: `${treatment.name} | Lumen Aesthetics`,
      description: treatment.heroDescription,
      images: [{ url: treatment.image, width: 1200, height: 630, alt: treatment.name }],
    },
  };
}

export default function TreatmentPage({ params }: PageProps) {
  const treatment = getTreatmentBySlug(params.slug);
  if (!treatment) notFound();

  const related = treatment.relatedSlugs
    .map((slug) => TREATMENTS.find((t) => t.slug === slug))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: treatment.name,
    description: treatment.heroDescription,
    provider: {
      "@type": "MedicalBusiness",
      name: "Lumen Aesthetics",
    },
    offers: {
      "@type": "Offer",
      priceRange: treatment.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        className="pt-28 pb-0"
        aria-label="Breadcrumb"
      >
        <div className="container">
          <ol className="flex items-center gap-2 text-[11px] tracking-wide uppercase font-sans text-stone">
            <li>
              <Link href="/treatments" className="hover:text-champagne transition-colors">
                Treatments
              </Link>
            </li>
            <li aria-hidden="true">·</li>
            <li className="text-bone">{treatment.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-10 pb-20 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <RevealOnScroll>
              <div>
                <Label className="mb-4 block">{treatment.categoryLabel} · {treatment.typeLabel}</Label>
                <h1 className="font-serif text-5xl md:text-6xl text-bone font-light leading-tight mb-6">
                  {treatment.name}
                </h1>
                <p className="text-stone text-base md:text-lg font-sans leading-relaxed mb-8 max-w-lg">
                  {treatment.heroDescription}
                </p>
                <div className="flex items-center gap-6 mb-10">
                  <div>
                    <p className="text-champagne text-xl font-serif">{treatment.price}</p>
                    {treatment.pricePackage && (
                      <p className="text-stone text-xs font-sans mt-1">{treatment.pricePackage}</p>
                    )}
                  </div>
                </div>
                <Link
                  href="/book"
                  className="inline-block text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-10 py-4 hover:bg-champagne-deep transition-colors"
                >
                  Book {treatment.name} →
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="relative h-[400px] md:h-[520px] overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={`${treatment.name} at Lumen Aesthetics`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Detail section */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
            {/* Prose */}
            <div className="flex flex-col gap-12">
              <RevealOnScroll>
                <div>
                  <h2 className="font-serif text-2xl text-bone font-light mb-5">
                    What it is
                  </h2>
                  <p className="text-stone font-sans text-base leading-relaxed">
                    {treatment.whatItIs}
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div>
                  <h2 className="font-serif text-2xl text-bone font-light mb-5">
                    How we approach it
                  </h2>
                  <p className="text-stone font-sans text-base leading-relaxed">
                    {treatment.howWeApproach}
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div>
                  <h2 className="font-serif text-2xl text-bone font-light mb-5">
                    Who it&rsquo;s for
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {treatment.whoItsFor.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-stone font-sans text-sm leading-relaxed"
                      >
                        <span className="text-champagne mt-0.5 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div>
                  <h2 className="font-serif text-2xl text-bone font-light mb-5">
                    What it isn&rsquo;t
                  </h2>
                  <p className="text-stone font-sans text-base leading-relaxed">
                    {treatment.whatItIsnt}
                  </p>
                </div>
              </RevealOnScroll>

              {/* Before/after note */}
              <RevealOnScroll>
                <div className="border border-white/5 p-6">
                  <p className="text-stone font-sans text-sm leading-relaxed italic">
                    We don&rsquo;t post before-and-after photos publicly. We
                    believe in privacy. If you&rsquo;d like to see examples
                    relevant to your concern, ask during your consultation —
                    Dr. Reyes keeps a private portfolio.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:sticky lg:top-28 h-fit">
              <RevealOnScroll direction="right">
                <div className="border border-white/5 p-8 flex flex-col gap-6">
                  <h3 className="font-serif text-lg text-bone font-light">
                    Treatment details
                  </h3>
                  {[
                    { label: "Session time", value: treatment.session },
                    { label: "Downtime", value: treatment.downtime },
                    { label: "Onset", value: treatment.onset },
                    { label: "Duration", value: treatment.duration },
                    { label: "Provider", value: treatment.provider },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-t border-white/5 pt-4">
                      <p className="text-[11px] tracking-[0.15em] uppercase text-stone font-sans mb-1">
                        {label}
                      </p>
                      <p className="text-bone-soft text-sm font-sans leading-relaxed">
                        {value}
                      </p>
                    </div>
                  ))}
                  <Link
                    href="/book"
                    className="block text-center text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-6 py-4 hover:bg-champagne-deep transition-colors mt-4"
                  >
                    Book now
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {treatment.faq.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <RevealOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl text-bone font-light mb-12">
                Common questions
              </h2>
            </RevealOnScroll>
            <TreatmentFaqAccordion faq={treatment.faq} />
          </div>
        </section>
      )}

      {/* Related treatments */}
      {related.length > 0 && (
        <section className="py-20 md:py-28 bg-charcoal">
          <div className="container">
            <RevealOnScroll>
              <h2 className="font-serif text-3xl text-bone font-light mb-12">
                Related treatments
              </h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
              {related.map((rel) => {
                if (!rel) return null;
                return (
                  <RevealOnScroll key={rel.slug}>
                    <Link
                      href={`/treatments/${rel.slug}`}
                      className="group block bg-charcoal p-8 hover:bg-charcoal-soft transition-colors"
                    >
                      <div className="relative h-40 mb-6 overflow-hidden">
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-stone font-sans mb-2">
                        {rel.typeLabel}
                      </p>
                      <h3 className="font-serif text-xl text-bone font-light mb-1">
                        {rel.name}
                      </h3>
                      <p className="text-champagne text-xs font-sans">{rel.price}</p>
                    </Link>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-ink border-t border-white/10 p-4">
        <Link
          href="/book"
          className="block text-center text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne py-4 hover:bg-champagne-deep transition-colors"
        >
          Book {treatment.name} →
        </Link>
      </div>

      <FooterCTA
        headline={`Ready to start with ${treatment.name}?`}
        primaryCta={{ label: "Book a consultation", href: "/book" }}
        secondaryCta={{ label: "See all treatments", href: "/treatments" }}
      />
    </>
  );
}
