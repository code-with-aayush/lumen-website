// src/constants/site.ts

export const SITE_NAME = "Lumen Aesthetics";
export const SITE_TAGLINE = "Medical Aesthetics · West Village";
export const SITE_DESCRIPTION =
  "A medical aesthetics studio in Manhattan's West Village. Considered treatments for skin that looks like yours.";

export const SITE_ADDRESS = {
  street: "412 Bleecker Street, Studio 3",
  city: "New York",
  state: "NY",
  zip: "10014",
  full: "412 Bleecker Street, Studio 3, New York, NY 10014",
};

export const SITE_CONTACT = {
  phone: "(212) 555-0187",
  phoneHref: "tel:+12125550187",
  email: "hello@lumenaesthetics.com",
  emailHref: "mailto:hello@lumenaesthetics.com",
};

export const SITE_HOURS = [
  { days: "Tuesday – Friday", hours: "10am – 7pm" },
  { days: "Saturday", hours: "10am – 5pm" },
  { days: "Sunday – Monday", hours: "Closed" },
];

export const NAV_LINKS = [
  { label: "Treatments", href: "/treatments" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export const CALCOM_LINK =
  process.env.NEXT_PUBLIC_CALCOM_LINK ?? "lumen-aesthetics/consultation";

export const PRESS_QUOTES = [
  {
    quote:
      "Lumen is the rare place where the treatment lives up to the interior design.",
    source: "Member since 2023",
  },
  {
    quote: "Manhattan's most considered injector. I've tried three others — this is different.",
    source: "Verified client",
  },
  {
    quote: "Finally, a med spa that isn't terrifying. The consultation alone was worth it.",
    source: "Verified client",
  },
  {
    quote: "The studio that changed how I think about aesthetics.",
    source: "Member since 2022",
  },
  {
    quote: "Where discretion meets clinical precision. I won't go anywhere else.",
    source: "Verified client",
  },
];

export const MEMBERSHIP_BENEFITS = [
  "$195/month credit toward any treatment (rolls over up to 3 months)",
  "Priority booking with 48-hour cancellation window",
  "Complimentary quarterly skin analysis with documentation",
  "15% off all retail and take-home products",
  "Members-only treatment releases before public availability",
  "No long-term commitment — cancel anytime after the first month",
];
