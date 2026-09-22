"use client";

import React, { useState } from "react";
import { 
  Menu, Search, Mic, Plus, Bell, Video, Sparkles, X, ArrowLeft, ShieldCheck
} from "lucide-react";

interface NavbarProps {
  onToggleSidebar: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenGenerator: () => void;
  onGoHome: () => void;
}

export function Navbar({ onToggleSidebar, searchQuery, setSearchQuery, onOpenGenerator, onGoHome }: NavbarProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-14 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 flex items-center justify-between gap-4 select-none shadow-xs">
      {/* Left: Guide Hamburger & Official YouTube Style Logo */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition"
          aria-label="Guide"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div onClick={onGoHome} className="flex items-center gap-1.5 cursor-pointer">
          {/* YouTube Official Red Badge with Play Triangle */}
          <div className="w-7 h-5 bg-red-600 rounded-lg flex items-center justify-center relative shadow-xs">
            <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[7px] border-l-white ml-0.5" />
          </div>
          <div className="flex items-center">
            <span className="text-slate-900 font-extrabold tracking-tight text-lg font-sans">
              2Prompt
            </span>
            <span className="text-slate-500 text-[10px] font-bold ml-1 tracking-wider uppercase">
              GEN
            </span>
          </div>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-[620px] mx-4 hidden sm:flex items-center justify-center">
        <div className="flex w-full items-center">
          <div className="relative flex-1 flex items-center h-10 bg-slate-50 border border-slate-300 rounded-l-full focus-within:border-blue-500 focus-within:bg-white px-4 transition">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts (Midjourney, Sora, Next.js, Cyberpunk)..."
              className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            title="Search"
            className="h-10 px-6 bg-slate-100 hover:bg-slate-200 border border-l-0 border-slate-300 rounded-r-full flex items-center justify-center text-slate-700 transition"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        <button
          title="Search with your voice"
          className="ml-3 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 flex-shrink-0 transition"
        >
          <Mic className="w-4 h-4" />
        </button>
      </div>

      {/* Right: Quick buttons & No Login Badge */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        {/* Visible "No Login • No Sign-Up" Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>No Login Required</span>
        </div>

        <button
          onClick={onOpenGenerator}
          className="flex items-center gap-2 h-9 px-4 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-bold transition shadow-sm active:scale-95 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden md:inline">Create Prompt</span>
        </button>

        {/* Free Unlimited Badge */}
        <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xs">
          100% FREE
        </span>
      </div>
    </header>
  );
}
