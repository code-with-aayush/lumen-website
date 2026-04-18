// src/components/JsonLd/index.tsx
import { SITE_ADDRESS, SITE_CONTACT, SITE_HOURS, SITE_NAME } from "@/constants/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: SITE_NAME,
    description:
      "A premium medical aesthetics studio in Manhattan's West Village. Considered treatments for skin that looks like yours.",
    url: "https://lumenaesthetics.com",
    telephone: SITE_CONTACT.phone,
    email: SITE_CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.street,
      addressLocality: SITE_ADDRESS.city,
      addressRegion: SITE_ADDRESS.state,
      postalCode: SITE_ADDRESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7315,
      longitude: -74.0044,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$$",
    medicalSpecialty: "Dermatology",
    image: "https://lumenaesthetics.com/og-image.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
