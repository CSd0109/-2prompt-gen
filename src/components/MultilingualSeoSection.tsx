"use client";

import React, { useState } from "react";
import { Globe2, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { TOP_LANGUAGES } from "@/lib/multilingualSeo";

export function MultilingualSeoSection() {
  const [expanded, setExpanded] = useState(false);

  const displayedLanguages = expanded ? TOP_LANGUAGES : TOP_LANGUAGES.slice(0, 16);

  return (
    <section className="mt-16 pt-12 border-t-2 border-slate-200/80 text-slate-800 space-y-6 font-sans">
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

      {/* Grid of Global Languages for International Search Engine Crawlers */}
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
    </section>
  );
}
