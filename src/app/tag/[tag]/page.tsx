import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SAMPLE_PROMPTS } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Tag, Sparkles } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { PromptCard } from "@/components/PromptCard";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const uniqueTags = new Set<string>();
  SAMPLE_PROMPTS.forEach((p) => {
    (p.tags || []).forEach((t) => {
      const sanitized = t.toLowerCase().trim().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-");
      if (sanitized && sanitized.length > 2) {
        uniqueTags.add(sanitized);
      }
    });
  });

  // Pre-render top 50 tags, rest dynamic
  return Array.from(uniqueTags).slice(0, 50).map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag).replace(/-/g, " ");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";
  const canonicalUrl = `${siteUrl}/tag/${tag}`;

  const cleanTitle = `Best #${decodedTag} AI Prompts (100% Free Copy & Paste)`;
  const cleanDescription = `Browse free curated #${decodedTag} AI prompts for ChatGPT, Nano Banana Pro, Midjourney, and Veo 3. 1-click copy with zero login.`;

  return {
    title: `${cleanTitle} | AI Prompt Generator`,
    description: cleanDescription,
    keywords: [
      `${decodedTag} prompts`,
      `ai ${decodedTag} prompt`,
      `${decodedTag} prompt generator`,
      "free ai prompts",
      "copy-ready prompts"
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
          url: "/top1_free_ai_studio.jpg",
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
      type: "website",
    },
  };
}

export default async function TagArchivePage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag).replace(/-/g, " ").toLowerCase();

  const matchingPrompts = SAMPLE_PROMPTS.filter((p) =>
    (p.tags || []).some(
      (t) =>
        t.toLowerCase().includes(decodedTag) ||
        t.toLowerCase().replace(/[^a-z0-9]/g, "").includes(decodedTag.replace(/[^a-z0-9]/g, ""))
    )
  );

  if (matchingPrompts.length === 0) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <HeaderNav />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
          <Link href="/" className="hover:text-purple-600 transition flex items-center gap-1 font-medium">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <span>/</span>
          <span>Tags</span>
          <span>/</span>
          <span className="text-slate-900 font-semibold uppercase">#{decodedTag}</span>
        </nav>

        {/* Tag Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Keyword Topic Archive</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Best #{decodedTag} AI Prompts
          </h1>

          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Explore {matchingPrompts.length} copy-ready prompts tagged with <strong>#{decodedTag}</strong>. Optimized for photorealism, high visual fidelity, and multi-model generation.
          </p>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {matchingPrompts.map((item) => (
            <Link key={item.id} href={`/prompt/${item.id}`} className="group block">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-purple-500 hover:shadow-md transition-all p-3 space-y-3">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 font-mono">
                    {item.model}
                  </span>
                  <h2 className="text-xs font-bold text-slate-900 line-clamp-2 mt-0.5 group-hover:text-purple-600 transition">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
