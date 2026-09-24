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
import { Dices, Sparkles, Flame, Search } from "lucide-react";
import confetti from "canvas-confetti";

const PAGE_SIZE = 32;

const TRENDING_KEYWORDS = [
  { label: "AI prompt generator free", query: "prompt generator free" },
  { label: "best free ai prompts and tools with no sign up", query: "free" },
  { label: "AI prompt text generator", query: "prompt text generator" },
  { label: "AI prompt text to image", query: "text to image" },
  { label: "Prompt generator from image", query: "image" },
  { label: "generatepromptai", query: "generateprompt" },
  { label: "AI prompt website free", query: "free" },
  { label: "generate prompt ai english", query: "english" },
  { label: "Free prompt text", query: "text" },
  { label: "Best AI prompts free", query: "best" },
  { label: "Free prompt templates", query: "template" },
];

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

        {/* Main Feed: Full-width matching image.jpg */}
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-6">
          
          {/* ============================================================== */}
          {/* HERO SECTION: 1000% Pixel-perfect matching image.jpg */}
          {/* ============================================================== */}
          <section className="relative w-full pt-4 sm:pt-8 pb-12 flex flex-col items-center text-center">
            
            {/* Background Subtle Glow matching image.jpg */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/30 via-pink-100/20 to-blue-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />

            {/* 1. Large Powerful Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-[54px] font-bold text-[#101828] tracking-tight leading-[1.15] max-w-4xl font-heading">
              Generate <span className="text-[#8054ff]">Perfect</span> AI Prompts <br className="hidden sm:inline" /> in Seconds
            </h1>

            {/* 2. Subheadline matching image.jpg */}
            <p className="text-sm sm:text-base text-slate-500 font-normal max-w-2xl mt-4 leading-relaxed">
              Powerful AI prompt generation tool for stunning results. <br className="hidden sm:inline" /> 100% Free. No login. No watermark.
            </p>

            {/* 3. Hero Center Area with Left & Right Floating Rotated Cards */}
            <div className="relative w-full max-w-5xl mt-8 sm:mt-10 flex items-center justify-center">
              
              {/* Left Floating Card: Portrait Example (Rotated -6deg) */}
              <div className="hidden xl:block absolute -left-12 top-2 z-10 w-52 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-purple-500/10 border border-slate-100 -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://res-a.aipromptgenerator.app/prompt/image/thumb/community-461be74e-6df5-4901-b966-b72f2c919be0-composition-framing-vertical-portrait-orientat.webp"
                    alt="Portrait Example"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 z-20">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/95 text-[#101828] shadow-sm backdrop-blur-md border border-slate-200/80 font-sans">
                      Portrait Example
                    </span>
                  </div>
                </div>
              </div>

              {/* Center: Command Prompt Studio Box matching image.jpg */}
              <div className="w-full max-w-2xl z-20">
                <PromptGeneratorStudio 
                  compact={true} 
                  showAllServices={showAllServices}
                  onToggleAllServices={() => setShowAllServices((prev) => !prev)}
                />
              </div>

              {/* Right Floating Card: Landscape Example (Rotated +6deg) */}
              <div className="hidden xl:block absolute -right-12 top-2 z-10 w-52 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-purple-500/10 border border-slate-100 rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80"
                    alt="Landscape Example"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 z-20">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/95 text-[#101828] shadow-sm backdrop-blur-md border border-slate-200/80 font-sans">
                      Landscape Example
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Center Pill Trust Badge underneath prompt box */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-slate-600 text-xs font-medium shadow-2xs">
              <span>100% Free</span>
              <span className="w-1 h-1 rounded-full bg-purple-500" />
              <span>Zero Login</span>
              <span className="w-1 h-1 rounded-full bg-purple-500" />
              <span>No Watermark</span>
            </div>

            {/* 5. Clean Horizontal Category Pills Bar matching image.jpg */}
            <div id="prompt-categories" className="flex items-center justify-center gap-2.5 flex-wrap mt-7 max-w-4xl px-2">
              {[
                { id: "people", label: "Portrait", icon: "👤" },
                { id: "nature", label: "Landscape", icon: "🏔️" },
                { id: "digital-art", label: "Illustration", icon: "🎨" },
                { id: "product", label: "Product", icon: "📦" },
                { id: "marketing", label: "Marketing", icon: "📈" },
                { id: "fantasy", label: "Fantasy", icon: "✨" },
                { id: "all", label: "More", icon: "•••" }
              ].map((cat) => {
                const isActive = selectedFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleFilterChange(cat.id === "all" ? "image" : cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer active:scale-95 ${
                      isActive
                        ? "bg-[#101828] text-white border-[#101828] shadow-sm"
                        : "bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Social Video Downloader (Spacious, prominent and clean) */}
          <div className="mb-6 flex flex-col items-center">
            <SocialVideoDownloader />
            <div className="mt-1 flex items-center gap-2">
              <Link
                href="/socialmediavdodownloder"
                className="text-[12px] font-medium text-slate-400 hover:text-[#8054ff] transition inline-flex items-center gap-1"
              >
                <span>Open dedicated page:</span>
                <span className="underline underline-offset-2 font-mono">aipromptgenerate.xyz/socialmediavdodownloder</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Babal ALL SERVICES Dashboard */}
          {showAllServices && (
            <section className="w-full flex justify-center mb-10">
              <AllServicesDashboard 
                onClose={() => setShowAllServices(false)} 
              />
            </section>
          )}

          {/* ============================================================== */}
          {/* CURATED PROMPT GALLERY matching image.jpg */}
          {/* ============================================================== */}
          {currentTab === "characters" ? (
            <CharactersGallery />
          ) : (
            <div id="prompt-gallery-feed" className="space-y-5 pt-4">
              
              {/* Gallery Header matching image.jpg */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#101828] tracking-tight font-heading">
                    Beautiful Prompts. Stunning Results.
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                    Explore AI generated prompts crafted for creativity and impact.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedFilter("image");
                      setDisplayCount(PAGE_SIZE);
                    }}
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8054ff] hover:text-[#6f42f5] transition cursor-pointer"
                  >
                    <span>View all examples</span>
                    <span className="text-base">→</span>
                  </button>
                </div>
              </div>

            {/* Masonry Columns: Fluid, seamless, natural Pinterest/GeneratePrompt.net layout */}
            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3.5 sm:gap-5 w-full">
              {visiblePrompts.map((item, idx) => (
                <PromptCard
                  key={item.id}
                  item={item}
                  priority={idx < 8}
                  onOpenDetail={(selected) => setActiveModalItem(selected)}
                />
              ))}
            </div>

              {/* Superfast "Load More" / Infinite button */}
              {visiblePrompts.length < filteredPrompts.length && (
                <div className="flex flex-col items-center justify-center pt-8 pb-14 gap-3">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white text-sm font-bold transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg flex items-center gap-3 cursor-pointer font-heading"
                  >
                    <span>Load More Prompts (+32)</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-mono">
                      {visiblePrompts.length} / {filteredPrompts.length}
                    </span>
                  </button>
                  <p className="text-xs text-slate-500 font-medium">
                    Showing {visiblePrompts.length} of {filteredPrompts.length.toLocaleString()} curated prompts • 100% Free Forever
                  </p>
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
                    <Link href="/free-ai-prompts-tools" className="hover:text-purple-600 font-bold transition block text-purple-700">
                      ⭐ Free AI Prompts &amp; Tools Directory
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
                    <Link href="/trending-nano-banana-prompts" className="flex items-center gap-1.5 hover:text-purple-600 transition font-bold text-amber-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      <span>Trending Nano Banana Prompts 🔥</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nano-banana-prompts-xyz" className="flex items-center gap-1.5 hover:text-purple-600 transition font-bold text-indigo-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span>Nano Banana Prompts XYZ ⭐</span>
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

            {/* Core SEO Keyword Index Pillar (Google Ranking Booster) */}
            <div className="pt-6 border-t border-slate-200/80">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3 font-heading">
                🔥 Free AI Prompts &amp; Engineering Hub
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {TRENDING_KEYWORDS.map((kw) => (
                  <button
                    key={kw.label}
                    type="button"
                    onClick={() => {
                      setSearchQuery(kw.query);
                      setDisplayCount(PAGE_SIZE);
                      window.scrollTo({ top: 400, behavior: "smooth" });
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 text-slate-700 font-bold transition border border-slate-200/80 cursor-pointer font-heading"
                    title={`Explore ${kw.label}`}
                  >
                    {kw.label}
                  </button>
                ))}
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
