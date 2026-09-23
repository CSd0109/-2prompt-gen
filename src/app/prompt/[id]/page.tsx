import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SAMPLE_PROMPTS, PromptItem } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Copy, Sparkles, Tag, Eye, Heart, Share2 } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  // Pre-render the top 100 most popular prompts for ultra-fast build, rest dynamically rendered on-demand
  return SAMPLE_PROMPTS.slice(0, 100).map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const prompt = SAMPLE_PROMPTS.find((p) => p.id === id);

  if (!prompt) {
    return {
      title: "Prompt Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";
  const canonicalUrl = `${siteUrl}/prompt/${prompt.id}`;

  const cleanTitle = `${prompt.title} – Free ${prompt.model} AI Prompt`;
  const cleanDescription = `Free copy-ready prompt for ${prompt.model}: "${prompt.prompt.slice(0, 155)}...". 100% free with zero login on AI Prompt Generator.`;

  return {
    title: `${cleanTitle} | AI Prompt Generator`,
    description: cleanDescription,
    keywords: [
      `${prompt.model} prompt`,
      ...prompt.tags.map((t) => `${t} prompt`),
      "free ai prompt copy paste",
      "prompt generator free",
      "ai image prompt",
      "ai video prompt"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url: canonicalUrl,
      siteName: "AI Prompt Generator",
      images: [
        {
          url: prompt.thumbnail,
          width: 1200,
          height: 630,
          alt: prompt.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: cleanDescription,
      images: [prompt.thumbnail],
    },
  };
}

export default async function PromptDetailPage({ params }: Props) {
  const { id } = await params;
  const prompt = SAMPLE_PROMPTS.find((p) => p.id === id);

  if (!prompt) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";

  // Related prompts
  const related = SAMPLE_PROMPTS.filter(
    (p) => p.id !== prompt.id && (p.category === prompt.category || p.model === prompt.model)
  ).slice(0, 8);

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
            "name": prompt.category === "video" ? "Video Prompts" : "Image Prompts",
            "item": `${siteUrl}/${prompt.category === "video" ? "ai-video-prompts" : "ai-image-prompts"}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": prompt.title,
            "item": `${siteUrl}/prompt/${prompt.id}`
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": `${siteUrl}/prompt/${prompt.id}#work`,
        "name": prompt.title,
        "description": prompt.prompt,
        "image": prompt.thumbnail,
        "creator": {
          "@type": "Person",
          "name": prompt.creator.name
        },
        "genre": prompt.model,
        "keywords": prompt.tags.join(", ")
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNav />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
          <Link href="/" className="hover:text-purple-600 transition flex items-center gap-1 font-medium">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <span>/</span>
          <Link
            href={prompt.category === "video" ? "/ai-video-prompts" : "/ai-image-prompts"}
            className="hover:text-purple-600 transition"
          >
            {prompt.category === "video" ? "AI Video Prompts" : "AI Image Prompts"}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs">{prompt.title}</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
            {/* Visual Thumbnail */}
            <div className="relative aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={prompt.thumbnail}
                alt={`${prompt.title} - ${prompt.model}`}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold font-mono">
                {prompt.model}
              </span>
            </div>

            {/* Prompt Meta & Command Text */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {prompt.views}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-rose-500" /> {prompt.likes}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">100% Free</span>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-tight font-heading">
                  {prompt.title}
                </h1>

                {/* Prompt Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200/90 relative group shadow-inner">
                  <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-mono select-all">
                    {prompt.prompt}
                  </p>
                </div>

                {prompt.negativePrompt && (
                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 text-xs text-rose-900">
                    <span className="font-black text-rose-800 font-heading">Negative Prompt: </span>
                    <span className="font-mono text-[11px]">{prompt.negativePrompt}</span>
                  </div>
                )}
              </div>

              {/* Tags & Action */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {prompt.tags.map((t) => (
                    <Link
                      key={t}
                      href={`/tag/${encodeURIComponent(t.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}`}
                      className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-black font-heading transition border border-slate-200/60 shadow-2xs"
                    >
                      #{t}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white font-black font-heading text-sm shadow-md transition active:scale-98 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Open in AI Prompt Studio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Prompts Grid */}
        <div className="space-y-4 pt-6">
          <h2 className="text-lg font-black text-slate-900 tracking-tight">
            Related {prompt.model} Prompts
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/prompt/${item.id}`}
                className="group p-3 bg-white rounded-2xl border border-slate-200 hover:border-purple-500 transition-all flex flex-col justify-between"
              >
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 mb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-purple-600 transition">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
