import { MetadataRoute } from "next";
import { SEO_PAGES } from "@/lib/seoConfig";
import { SAMPLE_PROMPTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";
  const currentDate = new Date().toISOString().split("T")[0];

  // 1. Homepage
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // 2. High-Intent Categorical & Tool Landing Pages
  const seoCategoryPages: MetadataRoute.Sitemap = Object.values(SEO_PAGES).map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.95,
  }));

  // 3. Dynamic Unique Tag Pages extracted from library (over 600+ tags for long-tail SEO)
  const uniqueTags = new Set<string>();
  SAMPLE_PROMPTS.forEach((p) => {
    (p.tags || []).forEach((t) => {
      const sanitized = t.toLowerCase().trim().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-");
      if (sanitized && sanitized.length > 2) {
        uniqueTags.add(sanitized);
      }
    });
  });

  const tagPages: MetadataRoute.Sitemap = Array.from(uniqueTags).map((tag) => ({
    url: `${baseUrl}/tag/${encodeURIComponent(tag)}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 4. All 1,297+ Individual Prompt Detail URLs
  const promptPages: MetadataRoute.Sitemap = SAMPLE_PROMPTS.map((p) => ({
    url: `${baseUrl}/prompt/${p.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...mainPages, ...seoCategoryPages, ...tagPages, ...promptPages];
}
