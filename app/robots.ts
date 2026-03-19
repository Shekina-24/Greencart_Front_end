import type { MetadataRoute } from "next";

const BASE_URL = "https://greencartfrontend-six.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/account/",
          "/cart/",
          "/checkout/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}