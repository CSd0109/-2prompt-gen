"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { PromptCard } from "@/components/PromptCard";
import { DetailModal } from "@/components/DetailModal";
import { PromptGeneratorStudio } from "@/components/PromptGeneratorStudio";
import { CharactersGallery } from "@/components/CharactersGallery";
import { BlogsAndFaqSection } from "@/components/BlogsAndFaqSection";
import { BacklinkDirectorySection } from "@/components/BacklinkDirectorySection";
import { SAMPLE_PROMPTS, PromptItem } from "@/lib/data";
import { Dices } from "lucide-react";
import confetti from "canvas-confetti";

const PAGE_SIZE = 16;

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<"gallery" | "generator" | "characters">("gallery");
  const [selectedFilter, setSelectedFilter] = useState<string>("image");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState<PromptItem | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(PAGE_SIZE);

  // Clean, focused category chips with circular style font
  const chips = [
    { id: "image", label: "🖼️ Image Prompts" },
    { id: "characters-tab", label: "👤 AI Characters" },
    { id: "couple-poses", label: "👩‍❤️‍👨 Couple Poses" },
    { id: "banana", label: "🍌 Banana Prompts" },
    { id: "video", label: "🎥 Video Prompts" },
    { id: "flux", label: "⚡ Flux" },
    { id: "midjourney", label: "🎨 Midjourney" },
    { id: "people", label: "👤 Portraits" },
    { id: "photography", label: "📷 Photography" },
    { id: "digital-art", label: "✨ Digital Art" },
    { id: "nature", label: "🌿 Nature" },
    { id: "webpage", label: "💻 Web & UI" },
    { id: "youmind", label: "💡 YouMind" },
    { id: "slides", label: "📊 Slides" },
  ];

  // Filtered prompts
  const filteredPrompts = useMemo(() => {
    return SAMPLE_PROMPTS.filter((item) => {
      let matchesCategory = true;
      if (selectedFilter === "couple-poses") {
        matchesCategory = item.category === "image" && (
          item.tags.some(t => t.toLowerCase().includes("couple")) ||
          item.title.toLowerCase().includes("couple") ||
          item.prompt.toLowerCase().includes("couple") ||
          item.prompt.toLowerCase().includes("bride and groom") ||
          item.prompt.toLowerCase().includes("husband and wife") ||
          item.prompt.toLowerCase().includes("embracing")
        );
      } else if (selectedFilter === "banana") {
        matchesCategory = item.tags.includes("BananaPrompts") || item.creator.name === "BananaPrompts";
      } else if (selectedFilter === "image") {
        matchesCategory = item.category === "image";
      } else if (selectedFilter === "video") {
        matchesCategory = item.category === "video";
      } else if (selectedFilter === "youmind") {
        matchesCategory = item.tags.some(t => t.toLowerCase().includes("youmind"));
      } else if (selectedFilter === "slides") {
        matchesCategory = item.tags.some(t => t.toLowerCase().includes("slides")) || item.title.toLowerCase().includes("pitch") || item.title.toLowerCase().includes("presentation");
      } else if (selectedFilter === "webpage") {
        matchesCategory = item.category === "ui" || item.tags.some(t => t.toLowerCase().includes("webpage"));
      } else if (selectedFilter === "people") {
        matchesCategory = item.category === "image" && (
          item.tags.some(t => ["woman", "man", "portrait", "people", "girl"].some(k => t.toLowerCase().includes(k))) ||
          item.title.toLowerCase().includes("man") || item.title.toLowerCase().includes("woman")
        );
      } else if (selectedFilter === "photography") {
        matchesCategory = item.category === "image" && (
          item.tags.some(t => ["macro", "shot", "photography", "close"].some(k => t.toLowerCase().includes(k))) ||
          item.prompt.toLowerCase().includes("photography")
        );
      } else if (selectedFilter === "digital-art") {
        matchesCategory = item.category === "image" && item.tags.some(t => ["art", "digital", "illustration", "doll"].some(k => t.toLowerCase().includes(k)));
      } else if (selectedFilter === "nature") {
        matchesCategory = item.category === "image" && item.tags.some(t => ["nature", "mountain", "forest", "rabbit", "cat"].some(k => t.toLowerCase().includes(k)));
      } else if (selectedFilter === "flux") {
        matchesCategory = item.category === "image" && item.model.toLowerCase().includes("flux");
      } else if (selectedFilter === "midjourney") {
        matchesCategory = item.category === "image" && item.model.toLowerCase().includes("midjourney");
      }

      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  // Infinite/Fast Paginated slice for instant 60fps scrolling
  const visiblePrompts = useMemo(() => {
    return filteredPrompts.slice(0, displayCount);
  }, [filteredPrompts, displayCount]);

  const handleFilterChange = (filterId: string) => {
    if (filterId === "characters-tab") {
      setCurrentTab("characters");
      return;
    }
    if (currentTab !== "gallery") {
      setCurrentTab("gallery");
    }
    setSelectedFilter(filterId);
    setDisplayCount(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + PAGE_SIZE);
  };

  const handleRandomPrompt = () => {
    if (SAMPLE_PROMPTS.length === 0) return;
    const randomIndex = Math.floor(Math.random() * SAMPLE_PROMPTS.length);
    const randomItem = SAMPLE_PROMPTS[randomIndex];
    setActiveModalItem(randomItem);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#a855f7", "#3b82f6", "#ec4899"]
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-black selection:text-white">
      {/* 1. Official Clean Topbar */}
      <Navbar
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          setDisplayCount(PAGE_SIZE);
        }}
        onOpenGenerator={() => setCurrentTab("generator")}
        onGoHome={() => {
          setCurrentTab("gallery");
          setSelectedFilter("all");
          setSearchQuery("");
          setDisplayCount(PAGE_SIZE);
        }}
      />

      {/* Main Body */}
      <div className="flex flex-1 relative">
        <Sidebar
          currentTab={currentTab}
          setCurrentTab={(tab) => setCurrentTab(tab as any)}
          selectedFilter={selectedFilter}
          setSelectedFilter={handleFilterChange}
          isOpen={sidebarOpen}
        />

        {/* Main Feed: Generator Box at Top + Content Below */}
        <main className="flex-1 p-4 sm:p-6 w-full max-w-[1750px]">
          {/* Top Headline H1 with Semantic Hierarchy & 90% ChatGPT/Google Gemini Keywords */}
          <div className="text-center pt-2 pb-6 max-w-4xl mx-auto space-y-2.5">
            {/* World's Top #1 Free AI Platform Crown Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 border-2 border-amber-400/60 text-slate-900 text-xs font-black shadow-xs">
              <span className="text-sm">👑</span>
              <span className="bg-gradient-to-r from-amber-600 via-purple-700 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider font-extrabold">
                #1 Top Free AI Website in the World
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-700 font-bold">100% Free Forever</span>
            </div>

            {/* Clean Rounded Model Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-bold font-outfit">
              <span className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition">
                ChatGPT-4o
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition">
                o3-mini
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition">
                Gemini 2.5 Pro
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition">
                Claude 3.7
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition">
                DeepSeek R1
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition">
                Qwen 2.5 Max
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-outfit">
              Top 1 Free AI Prompt Generator for ChatGPT & Google Gemini
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium font-sans">
              The world&apos;s #1 free generative AI studio. Synthesize production-ready prompts for ChatGPT-4o, Google Gemini, and Claude with zero login, zero credit limits, and 100% free access.
            </p>
          </div>

          {/* Top Gemini-Style White Pill Command Bar */}
          <section className="mb-10 w-full flex justify-center">
            <PromptGeneratorStudio compact={true} />
          </section>

          {currentTab === "characters" ? (
            <CharactersGallery />
          ) : (
            /* Prompt Gallery Section */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    {selectedFilter === "video" ? "🎥 Video Prompts Library" : "🖼️ Curated Prompt Gallery"}
                  </h2>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 font-mono text-[11px] font-semibold">
                    {filteredPrompts.length} Prompts
                  </span>
                </div>

                {/* Surprise Me / Random Prompt Button */}
                <button
                  onClick={handleRandomPrompt}
                  title="Discover a random master prompt"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold shadow-sm hover:shadow-md transition active:scale-95 cursor-pointer"
                >
                  <Dices className="w-4 h-4 animate-spin-slow" />
                  <span className="hidden sm:inline">Surprise Me</span>
                  <span className="sm:hidden">Random</span>
                </button>
              </div>

            {/* Category Filter Chips Bar - Clean Circular Pill Styling */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {chips.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => handleFilterChange(chip.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold font-outfit whitespace-nowrap transition-all border ${
                    selectedFilter === chip.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Grid of Cards (Responsive YouTube 4 Columns) - Instant Fast Render */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-4 gap-y-9">
              {visiblePrompts.map((item) => (
                <PromptCard
                  key={item.id}
                  item={item}
                  onOpenDetail={(selected) => setActiveModalItem(selected)}
                />
              ))}
            </div>

              {/* Superfast "Load More" / Infinite button */}
              {visiblePrompts.length < filteredPrompts.length && (
                <div className="flex justify-center pt-6 pb-12">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-2.5 rounded-full bg-[#272727] hover:bg-[#3f3f3f] text-white text-sm font-semibold transition active:scale-95 shadow-md flex items-center gap-2"
                  >
                    <span>Load More Prompts</span>
                    <span className="text-xs text-[#aaaaaa]">({visiblePrompts.length} of {filteredPrompts.length})</span>
                  </button>
                </div>
              )}

              {filteredPrompts.length === 0 && (
                <div className="py-24 text-center space-y-3">
                  <h3 className="text-base font-medium text-slate-800">No matching prompts found</h3>
                  <p className="text-xs text-slate-500">
                    Try different keywords or select another category.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedFilter("image");
                      setSearchQuery("");
                      setDisplayCount(PAGE_SIZE);
                    }}
                    className="mt-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition"
                  >
                    Reset to Image Prompts
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Deep Bottom Enterprise Section: 3,000 Blogs & 10,000 FAQs (Hidden from casual glance, reached only at very bottom scroll) */}
          <BlogsAndFaqSection />

          {/* Semantic SEO Crawl & Backlink Footer */}
          <footer className="mt-16 pt-10 pb-8 border-t border-slate-200 text-slate-600 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900">AI Prompt Generate</h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  The world&apos;s fastest, 100% free AI prompt generator & AI character library. Empowering creators with high-fidelity Midjourney, Flux 1.1, and Sora prompts.
                </p>
                <div className="text-[11px] text-slate-400">
                  © {new Date().getFullYear()} AI Prompt Generate. All rights reserved.
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Top AI Categories</h4>
                <ul className="space-y-1.5 text-xs">
                  <li>
                    <button onClick={() => handleFilterChange("couple-poses")} className="hover:text-purple-600 text-left">
                      👩‍❤️‍👨 Couple Poses Prompts (85+ Prompts)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("banana")} className="hover:text-purple-600 text-left">
                      🍌 BananaPrompts Master Collection
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("characters-tab")} className="hover:text-purple-600 text-left">
                      👤 Free AI Characters & Avatars
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("flux")} className="hover:text-purple-600 text-left">
                      ⚡ Flux 1.1 Pro Photorealism
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("video")} className="hover:text-purple-600 text-left">
                      🎥 Sora & Kling 4K Video Prompts
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Supported AI Engines</h4>
                <ul className="space-y-1.5 text-xs text-slate-500">
                  <li>• OpenAI ChatGPT & Sora</li>
                  <li>• Google Gemini 2.5 Flash</li>
                  <li>• Midjourney v6.1 Photorealistic</li>
                  <li>• Black Forest Labs Flux 1.1 Pro</li>
                  <li>• Anthropic Claude 3.5 Sonnet</li>
                  <li>• DeepSeek AI & Groq Llama 3</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Why AI Prompt Generate?</h4>
                <p className="text-xs leading-relaxed text-slate-500">
                  Unlike platforms with strict paywalls and login barriers, AI Prompt Generate provides instant 1-click prompt copying, unlimited free AI character saves to your private vault, and zero-registration HD downloads.
                </p>
              </div>
            </div>

            {/* Google Ranking SEO Content & Keyword Cloud */}
            <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 space-y-4 leading-relaxed">
              <h4 className="font-bold text-slate-800 text-sm">
                100% Free & Unlimited AI AI Prompt Generate – Top AI Models (ChatGPT-4o, Claude 3.5, Gemini 2.5, DeepSeek, Flux & Sora)
              </h4>
              <p>
                Welcome to <strong>AI Prompt Generate</strong>, the world&apos;s most powerful <strong>100% free and unlimited AI prompt generator</strong>. Powered by industry-leading LLMs and diffusion vision models—including <strong>ChatGPT-4o</strong>, <strong>Claude 3.5 Sonnet</strong>, <strong>Google Gemini 2.5 Flash</strong>, <strong>DeepSeek-V3</strong>, and <strong>Groq Llama 3.3</strong>—we deliver production-grade prompt engineering for <strong>Unlimited Image</strong>, <strong>4K Video (Sora, Kling, Runway)</strong>, and <strong>Full Website UI</strong> creations with zero credit limits and no login barriers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-800 text-xs mb-1">ChatGPT-6 Astra & Claude Opus</h5>
                  <p className="text-[11px] text-slate-500">
                    Switch freely between ChatGPT-6 Astra (chatgpt6astra), Claude 3.5 / 3.7 Opus (Cloude Opos), Gemini 2.5, and DeepSeek with 1-click model dropdown. 100% free unlimited prompt synthesis.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-800 text-xs mb-1">Unlimited Image & Video</h5>
                  <p className="text-[11px] text-slate-500">
                    Engineered for Midjourney v6.1, Flux 1.1 Pro, and Sora 4K video with cinematic camera angles, lens depths, lighting, and negative prompts.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-800 text-xs mb-1">Free AI Characters Vault</h5>
                  <p className="text-[11px] text-slate-500">
                    A free alternative to Media.io and Character.ai. Save models and cyberpunk avatars to your private collection and download in 8K resolution free.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-800 text-xs mb-1">Full Website & UI Prompts</h5>
                  <p className="text-[11px] text-slate-500">
                    Generate Tailwind CSS, Next.js, and React dashboard prompts ready to paste directly into Claude Artifacts, v0, or ChatGPT Canvas.
                  </p>
                </div>
              </div>

              {/* Competitor Crushing Comparison Matrix: Dropping Competitors to 0 */}
              <div className="pt-8 border-t-2 border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <h4 className="font-black text-slate-900 text-sm sm:text-base tracking-tight uppercase">
                      Why AI Prompt Generate Outperforms Every Competitor (QuillBot, Feedough, PromptBase, Media.io)
                    </h4>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold border border-emerald-200 self-start sm:self-auto">
                    100% Free Forever • Zero Paywalls
                  </span>
                </div>

                <div className="overflow-x-auto rounded-3xl border-2 border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-900 text-white font-black text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-4">Platform Feature</th>
                        <th className="p-4 text-emerald-400">✨ AI Prompt Generate</th>
                        <th className="p-4 text-slate-300">QuillBot / Feedough</th>
                        <th className="p-4 text-slate-300">PromptBase / PromptHero</th>
                        <th className="p-4 text-slate-300">Media.io</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      <tr className="hover:bg-slate-50/80 transition">
                        <td className="p-4 font-bold text-slate-900">Pricing & Credit Limits</td>
                        <td className="p-4 font-black text-emerald-600">100% Free & Unlimited ($0)</td>
                        <td className="p-4 text-red-500">Paywalled ($9.99-$29/mo)</td>
                        <td className="p-4 text-red-500">Paid Prompts ($2-$10/each)</td>
                        <td className="p-4 text-red-500">Expensive Token Credits</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition">
                        <td className="p-4 font-bold text-slate-900">Account / Sign-Up Requirement</td>
                        <td className="p-4 font-black text-emerald-600">Zero Sign-Up (Instant Access)</td>
                        <td className="p-4 text-slate-500">Mandatory Email & Card</td>
                        <td className="p-4 text-slate-500">Mandatory Registration</td>
                        <td className="p-4 text-slate-500">Google / Phone Sign-in</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition">
                        <td className="p-4 font-bold text-slate-900">Next-Gen Models (Flux 1.1 & Sora)</td>
                        <td className="p-4 font-black text-emerald-600">Native Photorealism Synthesis</td>
                        <td className="p-4 text-slate-500">Generic ChatGPT text only</td>
                        <td className="p-4 text-slate-500">Static Old Prompts</td>
                        <td className="p-4 text-slate-500">No Custom Model Prompts</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition">
                        <td className="p-4 font-bold text-slate-900">AI Characters & 8K Downloads</td>
                        <td className="p-4 font-black text-emerald-600">Unlimited Private Vault & HD</td>
                        <td className="p-4 text-slate-400">Not Available</td>
                        <td className="p-4 text-slate-400">Not Available</td>
                        <td className="p-4 text-red-500">Watermarked & Paid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Global Multilingual Search Intent Cloud (Ranking #1 Worldwide in 12+ Languages) */}
              <div className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-black text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    🌐 Global Multilingual Indexation (Rank #1 Worldwide):
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">140+ Countries</span>
                </div>
                <div className="flex flex-wrap gap-1.5 items-center">
                  {[
                    "generador de prompts ai gratis", "generateur de prompt ia gratuit", "kostenloser ki prompt generator",
                    "ai プロンプト ジェネレーター 無料", "ai 提示词生成器 免费", "ai प्रॉम्प्ट जेनरेटर फ्री", "مولد الأوامر بالذكاء الاصطناعي مجانا",
                    "gerador de prompts ia gratis", "ai prompt generator nepali free", "ai prompt generator deutsch",
                    "midjourney prompts español", "free ai prompt no login no credit required", "top 1 free ai prompt generator in the world",
                    "unlimited flux prompts without credits", "chatgpt6astra free", "Claude Opus prompt generator", "sora 4k video generator free",
                    "flux 1.1 pro photorealism copy paste", "couple poses prompts gallery", "banana prompts master collection free"
                  ].map((term, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] font-bold hover:border-purple-400 hover:text-purple-700 transition cursor-pointer shadow-2xs">
                      #{term}
                    </span>
                  ))}
                </div>
              </div>

              {/* People Also Ask (FAQ Section for Organic Rank #1) */}
              <div className="pt-8 border-t border-slate-200/90 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
                  <h4 className="font-extrabold text-slate-900 text-sm tracking-tight uppercase">
                    Frequently Asked Questions (People Also Ask)
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 bg-white rounded-3xl border-2 border-slate-200/80 hover:border-purple-300 hover:shadow-md transition-all space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-extrabold text-[10px] uppercase">
                      Quick Guide
                    </div>
                    <h5 className="font-black text-slate-900 text-sm leading-snug">
                      How do I generate prompts from an image or rough idea?
                    </h5>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Enter any rough concept into our command studio bar, choose your target AI model (ChatGPT, Gemini, Claude, DeepSeek), and receive a high-performing production prompt with cinematic lighting, framing, and aspect ratios.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-3xl border-2 border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-[10px] uppercase">
                      Zero Cost Guarantee
                    </div>
                    <h5 className="font-black text-slate-900 text-sm leading-snug">
                      Is AI Prompt Generate free with unlimited generation & no sign-up?
                    </h5>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Yes! Unlike QuillBot, Feedough, or Prompt Cowboy, AI Prompt Generate is 100% free with unlimited copying, private character bookmarking, and HD downloading without creating an account.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-3xl border-2 border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-extrabold text-[10px] uppercase">
                      Next-Gen Video AI
                    </div>
                    <h5 className="font-black text-slate-900 text-sm leading-snug">
                      Can I generate video prompts for Sora & Kling?
                    </h5>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Yes, our library features a dedicated 4K Video Prompts gallery with camera motions, volumetric lighting, and temporal parameters tailored for Sora, Kling, Runway Gen-3, and Luma Dream Machine.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-3xl border-2 border-slate-200/80 hover:border-pink-300 hover:shadow-md transition-all space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 font-extrabold text-[10px] uppercase">
                      Free Characters Vault
                    </div>
                    <h5 className="font-black text-slate-900 text-sm leading-snug">
                      How can I save and download AI characters?
                    </h5>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Click the &quot;AI Characters&quot; tab to explore official Media.io demo models and BananaPrompts characters. Tap &quot;Save Free&quot; to bookmark them privately or click &quot;Download HD&quot; for instant zero-watermark downloads.
                    </p>
                  </div>
                </div>
              </div>

              {/* Authoritative AI Ecosystem & Competitor Backlink Hub */}
              <BacklinkDirectorySection />
            </div>
          </footer>
        </main>
      </div>

      {/* Detail Modal */}
      <DetailModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
        onSelectRelated={(item) => setActiveModalItem(item)}
      />
    </div>
  );
}
