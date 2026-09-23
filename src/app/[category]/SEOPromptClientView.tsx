"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { PromptCard } from "@/components/PromptCard";
import { DetailModal } from "@/components/DetailModal";
import { PromptItem } from "@/lib/data";
import { SEOCategoryConfig, SEO_PAGES } from "@/lib/seoConfig";
import { ArrowLeft, Sparkles, HelpCircle, ChevronDown, CheckCircle2, Copy, Search } from "lucide-react";

interface Props {
  config: SEOCategoryConfig;
  initialPrompts: PromptItem[];
}

export function SEOPromptClientView({ config, initialPrompts }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState<PromptItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(24);

  const filteredPrompts = initialPrompts.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.prompt.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const visiblePrompts = filteredPrompts.slice(0, displayCount);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      <Sidebar
        isOpen={sidebarOpen}
        currentTab="gallery"
        setCurrentTab={() => {}}
        selectedFilter=""
        setSelectedFilter={() => {}}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Navbar
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenGenerator={() => {}}
          onGoHome={() => {}}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-purple-600 transition flex items-center gap-1 font-medium">
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{config.title}</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Prompt Collection</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {config.h1}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {config.introText}
              </p>

              {/* Quick Search */}
              <div className="pt-2 relative max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={`Search in ${config.title}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Cross-linking Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap mr-1">
              Explore:
            </span>
            {Object.values(SEO_PAGES).map((p) => {
              const isActive = p.slug === config.slug;
              return (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {p.title}
                </Link>
              );
            })}
          </div>

          {/* Prompt Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Showing {visiblePrompts.length} of {filteredPrompts.length} prompts</span>
              <span>100% Free • Instant 1-Click Copy</span>
            </div>

            {visiblePrompts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <p className="text-slate-500 font-medium">No prompts found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {visiblePrompts.map((item) => (
                  <PromptCard
                    key={item.id}
                    item={item}
                    onOpenDetail={() => setActiveModalItem(item)}
                  />
                ))}
              </div>
            )}

            {filteredPrompts.length > displayCount && (
              <div className="text-center pt-8">
                <button
                  onClick={() => setDisplayCount((prev) => prev + 24)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition shadow-sm"
                >
                  Load More Prompts ({filteredPrompts.length - displayCount} remaining)
                </button>
              </div>
            )}
          </div>

          {/* In-depth FAQ Section for Google Snippets & Rich Results */}
          {config.faqs && config.faqs.length > 0 && (
            <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-slate-900">
                <HelpCircle className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Frequently Asked Questions about {config.title}
                </h2>
              </div>

              <div className="divide-y divide-slate-100">
                {config.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="py-4">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left group"
                      >
                        <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-purple-600 transition">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? "rotate-180 text-purple-600" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-1">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Backlink Directory / Footer Crosslinks */}
          <footer className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500 pb-12">
            <p>© 2026 AI Prompt Generate (www.aipromptgenerate.xyz). 100% Free Unlimited AI Prompt Engineering Hub.</p>
          </footer>
        </main>
      </div>

      {activeModalItem && (
        <DetailModal
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
          onSelectRelated={(item) => setActiveModalItem(item)}
        />
      )}
    </div>
  );
}
