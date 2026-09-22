"use client";

import React, { useState } from "react";
import { ExternalLink, Globe, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { BACKLINK_DIRECTORIES } from "@/lib/backlinksData";

export function BacklinkDirectorySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pt-12 border-t-2 border-slate-200/80 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-extrabold text-[11px] uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5 text-purple-600" />
            <span>AI Ecosystem & Partner Backlinks</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Authoritative AI Directories & Peer Prompt Engines
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-500">
            Explore peer prompt generators, AI foundation models, and top-tier AI indexes partnering with AI Prompt Generate.
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-black text-slate-900 transition shadow-xs hover:shadow-md cursor-pointer active:scale-95"
        >
          <span>{expanded ? "Show Less" : "View All Backlinks"}</span>
          {expanded ? <ChevronUp className="w-4 h-4 text-purple-600" /> : <ChevronDown className="w-4 h-4 text-purple-600" />}
        </button>
      </div>

      <div className="space-y-8">
        {BACKLINK_DIRECTORIES.map((category, idx) => {
          // If not expanded, only show first category or first 4 items of each
          const displayedLinks = expanded ? category.links : category.links.slice(0, 4);

          return (
            <div key={idx} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-slate-900 tracking-tight uppercase">
                    {category.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayedLinks.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel={link.rel || "noopener noreferrer"}
                    className="group p-5 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-black text-slate-900 group-hover:text-purple-600 transition flex items-center gap-1.5 tracking-tight">
                          {link.name}
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 transition" />
                        </span>
                        {link.badge && (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-50 group-hover:bg-purple-100 text-purple-700 font-extrabold tracking-wide border border-purple-200/60 font-mono uppercase">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {link.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400 font-mono text-[11px]">{new URL(link.url).hostname}</span>
                      <span className="text-purple-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-black">
                        Visit ↗
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Webmaster Exchange Callout - Babal Redesign */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 border-2 border-purple-800/60 shadow-xl shadow-purple-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-purple-300 font-extrabold text-[11px] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Webmaster & Creator Alliance</span>
          </div>
          <h4 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
            Are you an AI Tool Developer, Prompt Creator or Webmaster?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
            Exchange high-authority backlinks or feature your prompt directory on AI Prompt Generate for verified DoFollow SEO synergy and mutual organic search boost.
          </p>
        </div>
        <a
          href="mailto:contact@aipromptgenerate.xyz?subject=Backlink%20Exchange%20Inquiry%20-%20Prompt%20Generator"
          className="relative z-10 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-xs sm:text-sm whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95"
        >
          Submit Backlink / Exchange 🤝
        </a>
      </div>
    </div>
  );
}
