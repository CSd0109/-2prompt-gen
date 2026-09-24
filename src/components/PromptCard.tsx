"use client";

import React, { useState } from "react";
import { Copy, Check, Play } from "lucide-react";
import confetti from "canvas-confetti";
import { PromptItem } from "@/lib/data";

interface PromptCardProps {
  item: PromptItem;
  onOpenDetail: (item: PromptItem) => void;
}

export function PromptCard({ item, onOpenDetail }: PromptCardProps) {
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

  return (
    <div
      onClick={() => onOpenDetail(item)}
      className="group relative cursor-pointer flex flex-col w-full bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all duration-200 active:scale-[0.99]"
    >
      {/* 1. Dynamic True Aspect Ratio Image Container */}
      <div className={`relative w-full ${getAspectRatioClass(item.aspectRatio)} bg-slate-100 overflow-hidden`}>
        {/* Shimmer loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" />
        )}

        {/* Single high-speed optimized image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbnail}
          alt={item.title}
          title={item.title}
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
          className={`w-full h-full object-cover group-hover:scale-103 transition-all duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Video Overlay Indicator */}
        {item.category === "video" && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 pointer-events-none">
            <div className="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-xs shadow-md">
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Floating Top AI Model Badge */}
        <div className="absolute top-2 left-2 z-20">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/95 text-slate-700 shadow-sm backdrop-blur-md border border-slate-200/80 font-heading">
            {item.model.replace("-preview", "").replace(" Pro", "")}
          </span>
        </div>

        {/* Floating Aspect Ratio Badge */}
        <div className="absolute bottom-2 right-2 z-20">
          <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-medium bg-black/60 text-white/90 backdrop-blur-xs">
            {item.aspectRatio || "16:9"}
          </span>
        </div>

        {/* Floating 1-Click Copy Button */}
        <button
          onClick={handleCopy}
          title="Copy Prompt"
          className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-white/95 text-slate-700 shadow-sm flex items-center justify-center hover:bg-white hover:text-blue-600 active:scale-90 transition cursor-pointer border border-slate-200/80"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* 2. Modern Bahamas-style Rounded Sans Typography (Readable, Elegant, Non-harsh) */}
      <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 bg-white">
        <h3 className="font-bold text-[14px] sm:text-[15px] leading-snug text-slate-800 line-clamp-2 font-heading tracking-tight group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>

        <div className="flex items-center justify-between text-xs text-slate-500 mt-2.5 pt-2 border-t border-slate-100">
          <span className="truncate max-w-[110px] sm:max-w-[140px] font-medium text-slate-600 font-sans">
            {item.creator.name}
          </span>
          <span className="inline-flex items-center gap-1 text-slate-600 font-medium text-[11px] bg-slate-100 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {item.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}
