import { MetadataRoute } from "next";
import { SEO_PAGES } from "@/lib/seoConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";
  const currentDate = new Date().toISOString().split("T")[0];

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  const seoCategoryPages: MetadataRoute.Sitemap = Object.values(SEO_PAGES).map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  return [...mainPages, ...seoCategoryPages];
}
