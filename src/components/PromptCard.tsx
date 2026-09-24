"use client";

import React, { useState } from "react";
import { Copy, Check, Play } from "lucide-react";
import confetti from "canvas-confetti";
import { PromptItem } from "@/lib/data";

interface PromptCardProps {
  item: PromptItem;
  onOpenDetail: (item: PromptItem) => void;
  priority?: boolean;
}

export function PromptCard({ item, onOpenDetail, priority = false }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.prompt);
    confetti({
      particleCount: 20,
      spread: 35,
      origin: { y: 0.7 },
      colors: ["#2563eb", "#ec4899", "#8b5cf6"],
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fallbackThumbnail =
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80";

  const getAspectRatioClass = (ratio?: string) => {
    if (ratio === "9:16") return "aspect-[9/16]";
    if (ratio === "1:1") return "aspect-square";
    if (ratio === "4:5") return "aspect-[4/5]";
    if (ratio === "3:2") return "aspect-[3/2]";
    return "aspect-[16/9]";
  };

  // Normalize category badge text matching image.jpg
  const getCategoryBadge = () => {
    const t = (item.title + " " + item.tags.join(" ")).toLowerCase();
    if (t.includes("portrait") || t.includes("woman") || t.includes("man") || t.includes("flash")) return "Portrait";
    if (t.includes("fantasy") || t.includes("goddess") || t.includes("chibi")) return "Fantasy";
    if (t.includes("landscape") || t.includes("sky") || t.includes("nature") || t.includes("garden")) return "Landscape";
    if (t.includes("product") || t.includes("perfume") || t.includes("brand") || t.includes("commercial")) return "Product";
    return "Illustration";
  };

  return (
    <div
      onClick={() => onOpenDetail(item)}
      className="group relative cursor-pointer flex flex-col w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/15 transition-all duration-300 active:scale-[0.98] border border-slate-100"
    >
      {/* 1. Dynamic True Aspect Ratio Image Container */}
      <div className={`relative w-full ${getAspectRatioClass(item.aspectRatio)} bg-slate-100 overflow-hidden`}>
        {/* Shimmer loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse pointer-events-none" />
        )}

        {/* Single high-speed optimized image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbnail}
          alt={item.title}
          title={item.title}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== fallbackThumbnail) {
              target.src = fallbackThumbnail;
            }
            setIsLoaded(true);
          }}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
            isLoaded ? "opacity-100" : "opacity-90"
          }`}
        />

        {/* Subtle Dark Bottom Gradient Overlay matching image.jpg */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

        {/* Video Indicator */}
        {item.category === "video" && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-xs shadow-md">
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Floating 1-Click Copy Button on Top Right */}
        <button
          onClick={handleCopy}
          title="Copy Prompt"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white shadow-sm flex items-center justify-center active:scale-90 transition cursor-pointer backdrop-blur-md border border-white/20"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-white/90" />
          )}
        </button>

        {/* Bottom Content Overlay: Title + Purple Category Pill matching image.jpg */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex flex-col items-start gap-1.5 text-left">
          <h3 className="font-bold text-white text-[15px] sm:text-base leading-snug drop-shadow-sm font-heading tracking-tight line-clamp-1 group-hover:text-purple-200 transition-colors">
            {item.title}
          </h3>

          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#7c5cfc] text-white shadow-xs font-sans">
            {getCategoryBadge()}
          </span>
        </div>
      </div>
    </div>
  );
}
