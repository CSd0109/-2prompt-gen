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

        {/* Main Feed: Clean Command Box Directly at Top */}
        <main className="flex-1 p-4 sm:p-6 w-full max-w-[1750px]">
          {/* Top Gemini-Style White Pill Command Bar */}
          <section className="mb-8 w-full flex justify-center pt-2">
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

          {/* Clean, Modern, Organized 4-Column Footer */}
          <footer className="mt-20 pt-12 pb-10 border-t border-slate-200 text-slate-600 bg-white/50 rounded-3xl p-6 sm:p-10 border shadow-xs space-y-8 font-outfit">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Col 1: Brand & Bio */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                    AI
                  </div>
                  <span className="font-extrabold text-base text-slate-900 tracking-tight">
                    AI Prompt Generate
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                  The world&apos;s #1 free AI prompt synthesis studio and character library. 100% Free forever, no login required.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>100% Free Forever</span>
                </div>
              </div>

              {/* Col 2: Quick Links */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-xs font-medium text-slate-600 font-sans">
                  <li>
                    <button
                      onClick={() => {
                        setCurrentTab("generator");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="hover:text-purple-600 transition"
                    >
                      AI Command Studio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setCurrentTab("characters");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="hover:text-purple-600 transition"
                    >
                      AI Characters Vault
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setCurrentTab("gallery");
                        setSelectedFilter("image");
                      }}
                      className="hover:text-purple-600 transition"
                    >
                      Master Prompt Gallery
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleRandomPrompt}
                      className="hover:text-purple-600 transition flex items-center gap-1"
                    >
                      <span>Surprise Me</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-100 text-purple-700 font-bold">Random</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Col 3: Prompt Galleries */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Prompt Galleries
                </h4>
                <ul className="space-y-2 text-xs font-medium text-slate-600 font-sans">
                  <li>
                    <button onClick={() => handleFilterChange("couple-poses")} className="hover:text-purple-600 transition">
                      Couple Poses
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("banana")} className="hover:text-purple-600 transition">
                      Banana Prompts
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("video")} className="hover:text-purple-600 transition">
                      Video Prompts (Sora / Kling)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("flux")} className="hover:text-purple-600 transition">
                      Flux 1.1 Pro Photorealism
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFilterChange("midjourney")} className="hover:text-purple-600 transition">
                      Midjourney v6.1 Art
                    </button>
                  </li>
                </ul>
              </div>

              {/* Col 4: Supported AI Engines */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Supported AI Engines
                </h4>
                <ul className="space-y-2 text-xs font-medium text-slate-600 font-sans">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>ChatGPT-4o & o3-mini</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>Google Gemini 2.5 Pro</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>Claude 3.7 Sonnet</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    <span>DeepSeek R1 Reasoner</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    <span>Qwen 2.5 Max (Alibaba)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Copyright & Semantic SEO Microdata Bar */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-sans">
              <p>
                © {new Date().getFullYear()} <strong className="text-slate-700">AI Prompt Generate</strong>. All rights reserved. Zero Login • 100% Free Forever.
              </p>
              <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-500 font-outfit">
                <span>Top 1 Free AI Website in the World</span>
                <span>•</span>
                <span>Privacy First</span>
                <span>•</span>
                <span>Global Free Access</span>
              </div>
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
