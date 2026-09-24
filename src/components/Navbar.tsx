"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface NavbarProps {
  onToggleSidebar?: () => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  onOpenGenerator: () => void;
  onGoHome: () => void;
  onSelectCategory?: (cat: string) => void;
}

export function Navbar({ onOpenGenerator, onGoHome, onSelectCategory }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-white/90 backdrop-blur-md border-b border-slate-100/80 px-4 sm:px-8 md:px-12 flex items-center justify-between select-none transition-all">
      {/* 1. Left: Brand Logo matching image.jpg */}
      <div 
        onClick={onGoHome} 
        className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
      >
        {/* Soft Purple Gradient AI Wavemark Symbol */}
        <div className="w-8 h-8 flex items-center justify-center text-[#7c5cfc]">
          <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
            <path
              d="M7 6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V22C13 23.6569 11.6569 25 10 25C8.34315 25 7 23.6569 7 22V6Z"
              fill="currentColor"
            />
            <path
              d="M15 9C15 7.34315 16.3431 6 18 6C19.6569 6 21 7.34315 21 9V19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19V9Z"
              fill="currentColor"
              fillOpacity="0.75"
            />
            <path
              d="M23 12C23 10.8954 23.8954 10 25 10C26.1046 10 27 10.8954 27 12V16C27 17.1046 26.1046 18 25 18C23.8954 18 23 17.1046 23 16V12Z"
              fill="currentColor"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <span className="text-[#101828] font-bold tracking-tight text-xl font-heading">
          aipromptgenerate
        </span>
      </div>

      {/* 2. Center: Clean Navigation Links with Active Indicator Dot */}
      <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
        <button 
          onClick={onGoHome}
          className="relative text-[#101828] font-semibold transition hover:text-[#7c5cfc] cursor-pointer flex flex-col items-center"
        >
          <span>Home</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cfc] mt-1" />
        </button>
        <button 
          onClick={() => {
            const el = document.getElementById("prompt-categories");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-[#101828] transition cursor-pointer"
        >
          Categories
        </button>
        <button 
          onClick={() => {
            const el = document.getElementById("prompt-gallery-feed");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-[#101828] transition cursor-pointer"
        >
          Examples
        </button>
        <button 
          onClick={onOpenGenerator}
          className="hover:text-[#101828] transition cursor-pointer"
        >
          Pricing
        </button>
        <button 
          onClick={() => {
            const el = document.getElementById("seo-blogs-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-[#101828] transition cursor-pointer"
        >
          Blog
        </button>
      </nav>

      {/* 3. Right: "No Login Required" + "Create Prompt ->" Button */}
      <div className="flex items-center gap-3.5 flex-shrink-0">
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200/90 text-slate-700 text-sm font-medium bg-white/80 shadow-2xs">
          <CheckCircle2 className="w-4 h-4 text-slate-600 stroke-[2]" />
          <span>No Login Required</span>
        </div>

        <button
          onClick={onOpenGenerator}
          className="flex items-center gap-2 h-11 px-5 sm:px-6 rounded-xl bg-[#8054ff] hover:bg-[#6f42f5] text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 cursor-pointer font-heading"
        >
          <span>Create Prompt</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
