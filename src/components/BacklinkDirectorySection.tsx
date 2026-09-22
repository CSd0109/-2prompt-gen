"use client";

import React, { useState } from "react";
import { ExternalLink, Globe, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { BACKLINK_DIRECTORIES } from "@/lib/backlinksData";

export function BacklinkDirectorySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pt-10 border-t border-slate-200/80 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-purple-600 font-bold text-xs uppercase tracking-wider mb-1">
            <Globe className="w-3.5 h-3.5" />
            <span>AI Ecosystem & Partner Backlinks</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Featured AI Prompt Networks & Authoritative Resources
          </h3>
          <p className="text-xs text-slate-500">
            Explore peer prompt generators, AI foundation models, and top-tier AI indexes partnering with 2Prompt Gen.
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition shadow-sm"
        >
          <span>{expanded ? "Show Less" : "View All Backlinks"}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className="space-y-8">
        {BACKLINK_DIRECTORIES.map((category, idx) => {
          // If not expanded, only show first category or first 4 items of each
          const displayedLinks = expanded ? category.links : category.links.slice(0, 4);

          return (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    {category.title}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {displayedLinks.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel={link.rel || "noopener noreferrer"}
                    className="group p-3 rounded-xl bg-white border border-slate-200/90 hover:border-purple-300 hover:shadow-sm transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-slate-800 group-hover:text-purple-600 transition flex items-center gap-1">
                          {link.name}
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-purple-600 transition" />
                        </span>
                        {link.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 group-hover:bg-purple-50 group-hover:text-purple-700 text-slate-500 font-medium">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {link.description}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>{new URL(link.url).hostname}</span>
                      <span className="text-purple-500 opacity-0 group-hover:opacity-100 transition">Visit ↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Webmaster Exchange Callout */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-0.5">
          <div className="font-bold text-slate-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Are you an AI Tool Developer, Prompt Creator or Webmaster?</span>
          </div>
          <p className="text-slate-600 text-[11px]">
            Exchange backlinks or get your AI prompt directory listed on 2Prompt Gen with high-authority dofollow SEO synergy.
          </p>
        </div>
        <a
          href="mailto:contact@2promptgen.com?subject=Backlink%20Exchange%20Inquiry%20-%202Prompt%20Gen"
          className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs whitespace-nowrap shadow-sm transition"
        >
          Submit Backlink / Exchange
        </a>
      </div>
    </div>
  );
}
