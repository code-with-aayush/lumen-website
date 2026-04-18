// src/types/treatment.ts

export interface TreatmentFaq {
  question: string;
  answer: string;
}

export interface Treatment {
  slug: string;
  name: string;
  tagline: string;
  category: "injectables" | "skin" | "laser-device";
  categoryLabel: string;
  typeLabel: string;
  price: string;
  priceUnit?: string;
  pricePackage?: string;
  heroDescription: string;
  whatItIs: string;
  howWeApproach: string;
  whoItsFor: string[];
  whatItIsnt: string;
  session: string;
  downtime: string;
  onset: string;
  duration: string;
  provider: string;
  faq: TreatmentFaq[];
  relatedSlugs: string[];
  image: string;
}
