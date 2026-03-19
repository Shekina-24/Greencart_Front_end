import type { MetadataRoute } from "next";

const BASE_URL = "https://greencartfrontend-six.vercel.app";
const LAST_MOD = "2026-03-19";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ─── Page d'accueil ───────────────────────────────────────────
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MOD,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // ─── Pages principales ────────────────────────────────────────
    {
      url: `${BASE_URL}/catalogue`,
      lastModified: LAST_MOD,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/producteurs`,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
    url: `${BASE_URL}/devenir-producteur`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly",
    priority: 0.8,
    },
    {
      url: `${BASE_URL}/valeurs`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/aide`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ─── Pages légales ────────────────────────────────────────────
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cgv`,
      lastModified: LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}