// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { TREATMENTS } from "@/constants/treatments";

const BASE_URL = "https://lumenaesthetics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/treatments`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/membership`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = TREATMENTS.map((t) => ({
    url: `${BASE_URL}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
