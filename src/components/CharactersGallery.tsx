"use client";

import React, { useState, useMemo } from "react";
import { 
  Download, Bookmark, BookmarkCheck, Copy, Check, Sparkles, 
  Search, ShieldCheck, Share2, Eye, Filter
} from "lucide-react";
import confetti from "canvas-confetti";
import { ALL_CHARACTERS, AICharacter } from "@/lib/charactersData";

export function CharactersGallery() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("saved_characters");
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedChar, setSelectedChar] = useState<AICharacter | null>(null);

  // Toggle Save to Collection (100% Free, no login required)
  const toggleSave = (char: AICharacter, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    if (savedIds.includes(char.id)) {
      updated = savedIds.filter(id => id !== char.id);
    } else {
      updated = [...savedIds, char.id];
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#ec4899", "#8b5cf6", "#3b82f6"]
      });
    }
    setSavedIds(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("saved_characters", JSON.stringify(updated));
    }
  };

  // Direct Free HD Download
  const handleDownload = async (char: AICharacter, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(char.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${char.name.toLowerCase().replace(/\s+/g, "_")}_character.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      window.open(char.image, "_blank");
    }
  };

  // Copy Prompt
  const handleCopy = (char: AICharacter, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(char.prompt);
    setCopiedId(char.id);
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filters & Search
  const filteredList = useMemo(() => {
    return ALL_CHARACTERS.filter(item => {
      const matchesTag = 
        selectedTag === "all" ? true :
        selectedTag === "saved" ? savedIds.includes(item.id) :
        selectedTag === "official" ? item.isOfficial :
        item.gender.toLowerCase() === selectedTag || item.tags.some(t => t.toLowerCase() === selectedTag);

      const matchesSearch = 
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.prompt.toLowerCase().includes(search.toLowerCase());

      return matchesTag && matchesSearch;
    });
  }, [selectedTag, search, savedIds]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-fadeIn">
      {/* 1. SEO Head Banner & Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Character Universe • 100% Free Save & Download</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Explore & Save Top <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 bg-clip-text text-transparent">AI Characters</span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Free high-fidelity AI characters from Media.io and BananaPrompts. Save any character to your private collection, copy 8K master prompts, or download directly without paywalls or login barriers.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-slate-300">
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> No Login Needed
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
              <Download className="w-4 h-4 text-blue-400" /> Free 1-Click HD Download
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
              <Bookmark className="w-4 h-4 text-pink-400" /> {savedIds.length} Saved in Mine
            </span>
          </div>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search characters, styles, aesthetics..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {[
            { id: "all", label: "🌟 All Characters" },
            { id: "saved", label: `❤️ Saved (${savedIds.length})` },
            { id: "official", label: "💎 Official Demo" },
            { id: "female", label: "👩 Female" },
            { id: "male", label: "👨 Male" },
            { id: "couple", label: "👩‍❤️‍👨 Couple" },
          ].map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Characters Grid */}
      {filteredList.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <p className="text-slate-500 font-medium">No characters found matching your filter.</p>
          <button 
            onClick={() => { setSelectedTag("all"); setSearch(""); }} 
            className="mt-3 text-sm text-purple-600 font-semibold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredList.map((char) => {
            const isSaved = savedIds.includes(char.id);
            const isCopied = copiedId === char.id;

            return (
              <div
                key={char.id}
                onClick={() => setSelectedChar(char)}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image Box */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={char.image}
                    alt={char.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {char.isOfficial && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide bg-purple-600 text-white shadow-md">
                        Official Demo
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide bg-white/90 text-slate-800 backdrop-blur-md shadow-sm">
                      {char.style}
                    </span>
                  </div>

                  {/* Quick Action Top-Right: Save to Mine */}
                  <button
                    onClick={(e) => toggleSave(char, e)}
                    title={isSaved ? "Saved in Mine" : "Save Character Free"}
                    className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-transform duration-200 ${
                      isSaved 
                        ? "bg-rose-500 text-white scale-110 shadow-lg" 
                        : "bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500 shadow-md"
                    }`}
                  >
                    {isSaved ? (
                      <BookmarkCheck className="w-4 h-4 fill-white" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>

                  {/* Hover Bottom Quick Actions */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={(e) => handleCopy(char, e)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-md hover:bg-white transition"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? "Copied!" : "Prompt"}</span>
                    </button>

                    <button
                      onClick={(e) => handleDownload(char, e)}
                      title="Download Free HD Image"
                      className="p-2 rounded-xl bg-white/95 text-slate-900 hover:bg-white shadow-md transition"
                    >
                      <Download className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-4 flex flex-col flex-1 justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {char.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {char.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. Character Full Detail Modal */}
      {selectedChar && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedChar(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="w-full md:w-1/2 bg-slate-950 flex items-center justify-center relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedChar.image}
                alt={selectedChar.name}
                className="w-full h-full max-h-[50vh] md:max-h-[80vh] object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div>
                <div className="flex items-center justify-between pb-2">
                  <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">
                    {selectedChar.style}
                  </span>
                  <button
                    onClick={() => setSelectedChar(null)}
                    className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold"
                  >
                    ✕
                  </button>
                </div>

                <h2 className="text-2xl font-black text-slate-900">{selectedChar.name}</h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{selectedChar.description}</p>

                {/* Prompt Box */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Generation Master Prompt</span>
                    <button
                      onClick={(e) => handleCopy(selectedChar, e)}
                      className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-1"
                    >
                      {copiedId === selectedChar.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedId === selectedChar.id ? "Copied!" : "Copy Prompt"}
                    </button>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 font-mono leading-relaxed max-h-40 overflow-y-auto">
                    {selectedChar.prompt}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {selectedChar.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTAs */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={(e) => toggleSave(selectedChar, e)}
                  className={`flex-1 py-3 px-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition ${
                    savedIds.includes(selectedChar.id)
                      ? "bg-rose-50 text-rose-600 border border-rose-200"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  <span>{savedIds.includes(selectedChar.id) ? "Saved in Mine" : "Save Free"}</span>
                </button>

                <button
                  onClick={(e) => handleDownload(selectedChar, e)}
                  className="flex-1 py-3 px-4 rounded-2xl text-sm font-bold bg-purple-600 text-white hover:bg-purple-700 flex items-center justify-center gap-2 shadow-md transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download HD</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
