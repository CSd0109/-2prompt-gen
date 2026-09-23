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

  return (
    <div
      onClick={() => onOpenDetail(item)}
      className="group relative cursor-pointer flex flex-col w-full bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-500 transition-all duration-200 active:scale-[0.98]"
    >
      {/* 1. Visual Image Container: Uniform 4:5 Portrait Ratio on Mobile for clean alignment, 16:9 on desktop */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] bg-slate-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbnail}
          alt={item.title}
          title={item.title}
          decoding="async"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== fallbackThumbnail) {
              target.src = fallbackThumbnail;
            }
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Video Overlay Indicator */}
        {item.category === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 pointer-events-none">
            <div className="w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-xs">
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Floating Top AI Model Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 text-slate-900 shadow-sm backdrop-blur-md font-outfit border border-slate-200/80">
            {item.model.replace("-preview", "").replace(" Pro", "")}
          </span>
        </div>

        {/* Floating 1-Click Copy Button */}
        <button
          onClick={handleCopy}
          title="Copy Prompt"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/95 text-slate-800 shadow-md flex items-center justify-center hover:bg-white active:scale-90 transition cursor-pointer"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-slate-700" />
          )}
        </button>

        {/* Subtle Bottom Gradient for clean visual transition */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* 2. Compact, Ultra-Clean Card Info */}
      <div className="p-2.5 flex flex-col justify-between flex-1 bg-white">
        <h3 className="font-extrabold text-[12px] sm:text-[13px] leading-snug text-slate-900 line-clamp-2 font-outfit group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mt-2 pt-1.5 border-t border-slate-100 font-mono">
          <span className="truncate max-w-[80px] sm:max-w-[120px] font-sans font-bold text-slate-600">
            {item.creator.name}
          </span>
          <span className="text-emerald-600 font-bold flex-shrink-0">
            {item.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}
