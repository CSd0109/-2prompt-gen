"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { PromptCard } from "@/components/PromptCard";
import { DetailModal } from "@/components/DetailModal";
import { PromptGeneratorStudio } from "@/components/PromptGeneratorStudio";
import { CharactersGallery } from "@/components/CharactersGallery";
import { AllServicesDashboard } from "@/components/AllServicesDashboard";
import { BlogsAndFaqSection } from "@/components/BlogsAndFaqSection";
import { BacklinkDirectorySection } from "@/components/BacklinkDirectorySection";
import { AlternativesComparisonSection } from "@/components/AlternativesComparisonSection";
import { MultilingualSeoSection } from "@/components/MultilingualSeoSection";
import { SocialVideoDownloader } from "@/components/SocialVideoDownloader";
import { SAMPLE_PROMPTS, PromptItem } from "@/lib/data";
import { Dices } from "lucide-react";
import confetti from "canvas-confetti";

const PAGE_SIZE = 16;

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<"gallery" | "generator" | "characters">("gallery");
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("image");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState<PromptItem | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(PAGE_SIZE);

  // Typewriter effect states for punchy 1-line headline
  const phrases = useMemo(() => [
    "ChatGPT & Gemini",
    "Midjourney & Flux",
    "Claude & DeepSeek",
    "Sora & Video AI",
    "100% Free Forever"
  ], []);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause when fully typed
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Switch phrase when fully erased
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      // Typing or erasing speed
      const speed = isDeleting ? 45 : 90;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases]);

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
        <main className="flex-1 p-2.5 sm:p-6 w-full max-w-[1750px]">
          {/* Header Intro: Desktop Only (Hidden on phone for clean zero-distraction experience) */}
          <div className="hidden sm:block w-full text-center pt-2 pb-1 sm:pt-3 sm:pb-2 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-black uppercase tracking-wider mb-2 font-outfit">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>#1 FREE AI TOOL IN THE WORLD • 100% UNLIMITED NO LOGIN NO SIGNUP</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-outfit text-black tracking-tight leading-tight">
              FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD
            </h1>
            <p className="text-sm sm:text-base font-bold text-indigo-700 mt-1 font-outfit">
              #1 Free AI Tool In The World: Free Image & Video Generator, FB Video Downloader, TikTok & Insta Downloaders, Free AI Image Generator, Free Image to Video Generator
            </p>
            <p className="text-xs sm:text-sm font-extrabold text-slate-500 mt-1 flex items-center justify-center gap-2 font-outfit">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Prompting for: </span>
              <span className="inline-flex items-center text-blue-600 underline decoration-indigo-500/30 underline-offset-4 font-black">
                {displayText}
                <span className="w-0.5 h-4 sm:h-5 bg-blue-600 ml-1 inline-block animate-pulse" />
              </span>
              <span>• Zero Login • Instant Copy</span>
            </p>
          </div>

          {/* 1. Universal Social Media Video Downloader (Top Section on Mobile) */}
          <SocialVideoDownloader />

          {/* 2. Command Box (Professional Clean Box, Model Chooser Only, Zero Clutter) */}
          <section className="mb-4 sm:mb-6 w-full flex justify-center pt-1 sm:pt-2">
            <PromptGeneratorStudio 
              compact={true} 
              showAllServices={showAllServices}
              onToggleAllServices={() => setShowAllServices((prev) => !prev)}
            />
          </section>

          {/* Babal ALL SERVICES Dashboard */}
          {showAllServices && (
            <section className="w-full flex justify-center mb-10">
              <AllServicesDashboard 
                onClose={() => setShowAllServices(false)} 
              />
            </section>
          )}

          {/* 3. Prompt Image Gallery (Directly below Command Box) */}
          {currentTab === "characters" ? (
            <CharactersGallery />
          ) : (
            /* Prompt Gallery Section */
            <div className="space-y-4 sm:space-y-6 pt-1">
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
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
              {chips.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => handleFilterChange(chip.id)}
                  className={`px-4 py-2 rounded-full text-xs font-black font-heading whitespace-nowrap transition-all border cursor-pointer active:scale-95 ${
                    selectedFilter === chip.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10"
                      : "bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:text-slate-950 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Responsive Visual Grid: 2 clean columns on phone, 3-4 columns on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2.5 sm:gap-5">
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

          {/* Desktop-Only Deep SEO Sections (Hidden on mobile so phone is 100% clean, fast, and clutter-free) */}
          <div className="hidden sm:block">
            {/* AIPromptGenerator.app Alternatives & Competitors 2026 Comparison Matrix */}
            <AlternativesComparisonSection />

            {/* Deep Bottom Enterprise Section: 3,000 Blogs & 10,000 FAQs */}
            <BlogsAndFaqSection />

            {/* AI Backlink Directory & Ecosystem Directory */}
            <BacklinkDirectorySection />

            {/* Global Multi-Language International SEO Section (50+ Languages) */}
            <MultilingualSeoSection />
          </div>

          {/* Clean, Modern, Organized 4-Column Footer */}
          <footer className="mt-20 pt-12 pb-10 border-t border-slate-200 text-slate-600 bg-white/50 rounded-3xl p-6 sm:p-10 border shadow-xs space-y-8 font-outfit">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Col 1: Brand & Bio */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white border border-slate-200 shadow-xs flex items-center justify-center flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo-icon.png"
                      alt="aipromptgenerate logo"
                      className="w-full h-full object-contain p-0.5"
                    />
                  </div>
                  <span className="font-extrabold text-base text-slate-900 tracking-tight">
                    aiprompt<span className="text-blue-600">generate</span>
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

              {/* Col 2: Website & UI Prompts */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Website & UI Prompts
                </h4>
                <ul className="space-y-2 text-xs font-medium text-slate-600 font-sans">
                  <li>
                    <Link href="/v0-website-prompts" className="hover:text-purple-600 transition block">
                      v0 by Vercel Web Prompts
                    </Link>
                  </li>
                  <li>
                    <Link href="/replit-agent-prompts" className="hover:text-purple-600 transition block">
                      Replit Agent Full-Stack
                    </Link>
                  </li>
                  <li>
                    <Link href="/claude-opus-prompts" className="hover:text-purple-600 transition block">
                      Claude Opus 5 & Sonnet
                    </Link>
                  </li>
                  <li>
                    <Link href="/chatgpt-prompts" className="hover:text-purple-600 transition block">
                      ChatGPT-4o & Astra Code
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 3: Video AI & Free Downloaders */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Video AI & Free Downloaders
                </h4>
                <ul className="space-y-2 text-xs font-medium text-slate-600 font-sans">
                  <li>
                    <Link href="/#video-downloader" className="hover:text-blue-600 font-bold transition block text-blue-700">
                      ⚡ Free FB Video Downloaders
                    </Link>
                  </li>
                  <li>
                    <Link href="/#video-downloader" className="hover:text-pink-600 font-bold transition block text-pink-700">
                      ⚡ Free TikTok & Insta Downloaders
                    </Link>
                  </li>
                  <li>
                    <Link href="/veo-video-prompts" className="hover:text-purple-600 transition block">
                      Google Veo 3 Prompts (4K)
                    </Link>
                  </li>
                  <li>
                    <Link href="/seadance-video-prompts" className="hover:text-purple-600 transition block">
                      SeaDance 2.2 Fluid Physics
                    </Link>
                  </li>
                  <li>
                    <Link href="/video-campaign-bundles" className="hover:text-purple-600 transition block">
                      Viral Video Campaign Bundles
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 4: Photorealistic Image & Video Prompts */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Image & Character AI
                </h4>
                <ul className="space-y-2 text-xs font-medium text-slate-600 font-sans">
                  <li>
                    <Link href="/#generator" className="flex items-center gap-1.5 hover:text-purple-600 transition font-bold text-purple-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                      <span>Free AI Image Generator</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#generator" className="flex items-center gap-1.5 hover:text-emerald-600 transition font-bold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span>Free Image to Video Generator</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nano-banana-pro-prompts" className="flex items-center gap-1.5 hover:text-purple-600 transition">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>Nano Banana Pro 8K</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-characters" className="flex items-center gap-1.5 hover:text-purple-600 transition">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <span>Consistent AI Characters</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/deepseek-prompts" className="flex items-center gap-1.5 hover:text-purple-600 transition">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <span>DeepSeek R1 Reasoner</span>
                    </Link>
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
