import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEO_PAGES } from "@/lib/seoConfig";
import { SAMPLE_PROMPTS } from "@/lib/data";
import { SEOPromptClientView } from "./SEOPromptClientView";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SEO_PAGES).map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const config = SEO_PAGES[category];

  if (!config) {
    return {
      title: "Category Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";
  const canonicalUrl = `${siteUrl}/${config.slug}`;

  return {
    title: `${config.metaTitle} | AI Prompt Generate`,
    description: config.metaDescription,
    keywords: config.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${config.metaTitle} | AI Prompt Generate`,
      description: config.metaDescription,
      url: canonicalUrl,
      siteName: "AI Prompt Generate",
      images: [
        {
          url: "/top1_free_ai_studio.jpg",
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
      images: ["/top1_free_ai_studio.jpg"],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const config = SEO_PAGES[category];

  if (!config) {
    notFound();
  }

  // Filter prompts based on config
  const initialPrompts = SAMPLE_PROMPTS.filter((item) => {
    if (config.filterValue === "chatgpt") {
      return (
        item.suggestedTools?.some((t) => t.toLowerCase().includes("chatgpt")) ||
        item.tags.some((t) => t.toLowerCase().includes("chatgpt")) ||
        item.prompt.toLowerCase().includes("chatgpt") ||
        item.category === "image"
      );
    }
    if (config.filterValue === "gemini") {
      return (
        item.suggestedTools?.some((t) => t.toLowerCase().includes("gemini")) ||
        item.tags.some((t) => t.toLowerCase().includes("gemini")) ||
        item.prompt.toLowerCase().includes("gemini") ||
        item.category === "image"
      );
    }
    if (config.filterValue === "claude") {
      return (
        item.suggestedTools?.some((t) => t.toLowerCase().includes("claude")) ||
        item.tags.some((t) => t.toLowerCase().includes("claude")) ||
        item.category === "image"
      );
    }
    if (config.filterValue === "deepseek") {
      return (
        item.suggestedTools?.some((t) => t.toLowerCase().includes("deepseek")) ||
        item.tags.some((t) => t.toLowerCase().includes("deepseek")) ||
        item.category === "image"
      );
    }
    if (config.filterValue === "midjourney") {
      return (
        item.model.toLowerCase().includes("midjourney") ||
        item.tags.some((t) => t.toLowerCase().includes("midjourney")) ||
        item.category === "image"
      );
    }
    if (config.filterValue === "flux") {
      return (
        item.model.toLowerCase().includes("flux") ||
        item.tags.some((t) => t.toLowerCase().includes("flux")) ||
        item.category === "image"
      );
    }
    if (config.filterValue === "video") {
      return item.category === "video";
    }
    if (config.filterValue === "couple") {
      return (
        item.category === "image" &&
        (item.tags.some((t) => t.toLowerCase().includes("couple")) ||
          item.title.toLowerCase().includes("couple") ||
          item.prompt.toLowerCase().includes("couple") ||
          item.prompt.toLowerCase().includes("bride and groom") ||
          item.prompt.toLowerCase().includes("husband and wife") ||
          item.prompt.toLowerCase().includes("embracing"))
      );
    }
    if (config.filterValue === "characters") {
      return (
        item.tags.some((t) => t.toLowerCase().includes("character") || t.toLowerCase().includes("people")) ||
        item.category === "image"
      );
    }
    return true;
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";

  // Breadcrumb and CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": config.title,
            "item": `${siteUrl}/${config.slug}`
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/${config.slug}/#webpage`,
        "url": `${siteUrl}/${config.slug}`,
        "name": config.metaTitle,
        "description": config.metaDescription,
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "url": siteUrl,
          "name": "AI Prompt Generate"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/${config.slug}/#faq`,
        "mainEntity": config.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SEOPromptClientView config={config} initialPrompts={initialPrompts} />
    </>
  );
}
