"use client";

import React, { useState } from "react";
import { Globe2, ChevronDown, ChevronUp, Search, Sparkles } from "lucide-react";
import { TOP_LANGUAGES } from "@/lib/multilingualSeo";
import { SEARCH_INTENT_CLUSTERS } from "@/lib/multilingualKeywordsData";

export function MultilingualSeoSection() {
  const [expanded, setExpanded] = useState(false);
  const [showAllKeywords, setShowAllKeywords] = useState(false);

  const displayedLanguages = expanded ? TOP_LANGUAGES : TOP_LANGUAGES.slice(0, 16);
  const displayedClusters = showAllKeywords ? SEARCH_INTENT_CLUSTERS : SEARCH_INTENT_CLUSTERS.slice(0, 6);

  return (
    <section className="mt-16 pt-12 border-t-2 border-slate-200/80 text-slate-800 space-y-10 font-sans">
      {/* 1. Global Multi-Language Network */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-extrabold text-[11px] uppercase tracking-wider mb-2 font-outfit">
              <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Global Multi-Language AI Prompt Network</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-outfit">
              Free AI Prompt Generator Worldwide (50+ Languages)
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-3xl">
              Access copy-ready prompts for ChatGPT, Claude, Gemini, Grok, Nano Banana Pro, and Veo 3 in your native language. 100% free with zero login.
            </p>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 transition shadow-xs cursor-pointer active:scale-95"
          >
            <span>{expanded ? "Show Fewer Languages" : `View All ${TOP_LANGUAGES.length} Languages`}</span>
            {expanded ? <ChevronUp className="w-4 h-4 text-indigo-600" /> : <ChevronDown className="w-4 h-4 text-indigo-600" />}
          </button>
        </div>

        {/* Grid of Global Languages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
          {displayedLanguages.map((lang) => (
            <div
              key={lang.code}
              className="p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-500 hover:shadow-xs transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>{lang.name}</span>
                  <span className="text-[10px] font-mono text-indigo-600 uppercase px-1.5 py-0.5 rounded bg-indigo-50">
                    {lang.code}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-indigo-950 line-clamp-1">
                  {lang.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                  {lang.desc}
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[10px] font-semibold text-slate-600">
                <span className="px-1.5 py-0.5 rounded bg-slate-100">{lang.imagePrompt}</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100">{lang.videoPrompt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Massive 10,000+ Search Query Intent Index (Capturing Every Global Search Query) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[11px] font-extrabold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5" />
              <span>Global Search Intent Directory</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-outfit tracking-tight">
              How Millions Search for Free AI Prompts Worldwide
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Every international variation, slang, phrasing, and tool query mapped to AI Prompt Generate.
            </p>
          </div>

          <button
            onClick={() => setShowAllKeywords(!showAllKeywords)}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs cursor-pointer active:scale-95"
          >
            <span>{showAllKeywords ? "Show Less" : "Explore All Search Queries"}</span>
            {showAllKeywords ? <ChevronUp className="w-3.5 h-3.5 text-purple-300" /> : <ChevronDown className="w-3.5 h-3.5 text-purple-300" />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedClusters.map((cluster, idx) => (
            <div key={idx} className="space-y-2 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider font-outfit flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                {cluster.topic}
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cluster.globalQueries.map((query, qIdx) => (
                  <span
                    key={qIdx}
                    className="px-2 py-0.5 rounded-md bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 hover:border-purple-400 hover:text-purple-700 transition"
                  >
                    {query}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
