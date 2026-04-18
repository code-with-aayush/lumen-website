// src/constants/team.ts

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  longBio: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Elena Reyes",
    role: "Medical Director",
    title: "MD",
    bio: "Board-certified dermatologist, 14 years in clinical aesthetics. Trained at Mount Sinai. Published in JAMA Dermatology.",
    longBio:
      "Dr. Reyes completed her dermatology residency at Mount Sinai Hospital and her fellowship in cosmetic dermatology at NYU Langone. She has authored peer-reviewed research on injectable techniques and laser safety protocols published in JAMA Dermatology and the Journal of Cosmetic Dermatology. She founded Lumen in 2021 after a decade in academic medicine — her philosophy is that the best aesthetic outcome is the one that preserves the integrity of your face, not the one that chases a trend.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Maya Chen",
    role: "Lead Injector",
    title: "NP",
    bio: "Nurse practitioner specializing in natural-result injectables. Over 8,000 procedures completed. Previously at Ever/Body.",
    longBio:
      "Maya holds a Master of Science in Nursing from Columbia University and completed advanced aesthetic training through the American Academy of Facial Esthetics. She joined Lumen from Ever/Body, where she built a reputation for results that read as 'rested' rather than 'treated.' Her particular expertise is periorbital — the delicate under-eye area that most injectors avoid. She has completed over 8,000 injectable procedures and has never had a serious adverse event.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sofia Alvarez",
    role: "Lead Aesthetician",
    title: "LE",
    bio: "Medical esthetician certified in advanced laser, microneedling, and Hydrafacial protocols. 9 years in the field.",
    longBio:
      "Sofia is a licensed esthetician with post-graduate certifications in medical laser operation (NCEA), SkinPen microneedling, and Hydrafacial MD. She spent five years at a dermatology practice in Los Angeles before relocating to New York and joining Lumen at launch. Her skin consultations are known for their thoroughness — she asks questions that most practitioners don't think to ask, because she's found that how you sleep, what you eat, and how stressed you are matters as much as what you put on your face.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
];
