"use client";

import React, { useState } from "react";
import { Copy, Check, MoreVertical, Play, CheckCircle2, Bot } from "lucide-react";
import confetti from "canvas-confetti";
import { PromptItem } from "@/lib/data";

interface PromptCardProps {
  item: PromptItem;
  onOpenDetail: (item: PromptItem) => void;
}

export function PromptCard({ item, onOpenDetail }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.prompt);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.7 },
      colors: ["#a855f7", "#3b82f6", "#ec4899"],
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fallbackThumbnail = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80";

  // Dynamic aspect ratio calculation
  // 9:16 (vertical mobile/tiktok/reels), 16:9 (horizontal cinema/youtube), 1:1 (square instagram)
  const isVertical = item.aspectRatio === "9:16" || item.prompt.toLowerCase().includes("9:16") || item.tags.some(t => t.toLowerCase().includes("portrait") || t.toLowerCase().includes("story"));
  const isSquare = item.aspectRatio === "1:1";
  
  const aspectRatioClass = isVertical 
    ? "aspect-[9/16] max-h-[480px]" 
    : isSquare 
    ? "aspect-square" 
    : "aspect-[16/9]";

  return (
    <div
      onClick={() => onOpenDetail(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col w-full h-full bg-white rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 border border-slate-200/90 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
    >
      {/* 1. Dynamic Responsive Image Box (Full view without crop) */}
      <div className={`relative w-full ${aspectRatioClass} rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-900/10`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbnail}
          alt={`${item.title} - Free AI Prompt for ${item.model}`}
          title={`${item.title} - AI Prompt Generator`}
          itemProp="image"
          decoding="async"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== fallbackThumbnail) {
              target.src = fallbackThumbnail;
            }
          }}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
        />

        {/* Video Play Overlay */}
        {item.category === "video" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20">
            <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/75 text-white flex items-center justify-center transition-transform ${
              isHovered ? "scale-110 bg-red-600 shadow-lg" : "scale-100"
            }`}>
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Aspect Ratio Badge & Quality Pill */}
        <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-full text-[9px] sm:text-[10px] font-black bg-black/80 text-white backdrop-blur-md font-mono border border-white/20 tracking-wider">
          {item.category === "video" ? "4K VEO" : isVertical ? "9:16" : "16:9"}
        </div>

        {/* Floating Model Badge (Top Left) */}
        <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5">
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-full text-[9px] sm:text-[10px] font-black tracking-wider uppercase bg-white/95 text-slate-900 border border-slate-200/90 shadow-xs backdrop-blur-md font-outfit">
            {item.model}
          </span>
        </div>

        {/* Quick Copy Action (Top Right) */}
        <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 flex items-center gap-1">
          <button
            onClick={handleCopy}
            title="Copy Prompt"
            className="p-1.5 rounded-full bg-white/95 text-slate-800 shadow-sm hover:bg-slate-100 active:scale-90 transition cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 2. Enhanced Typography & Metadata Section */}
      <div className="flex gap-2 pt-2 sm:pt-3 px-0.5 items-start flex-1 justify-between">
        {/* Channel Avatar (Desktop Only) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.creator.avatar}
          alt={item.creator.name}
          className="hidden sm:block w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5 border border-slate-200 shadow-2xs"
        />

        {/* Title, Channel, & Stats */}
        <div className="flex flex-col flex-1 min-w-0 pr-0.5">
          <h3 className="font-extrabold text-[12px] sm:text-[14px] leading-tight sm:leading-snug text-slate-900 line-clamp-2 group-hover:text-purple-600 transition-colors font-outfit tracking-tight">
            {item.title}
          </h3>

          {/* Channel Name with Verified Tick */}
          <div className="flex items-center gap-1 text-[10px] sm:text-[12px] text-slate-500 mt-1 font-semibold font-sans truncate">
            <span className="truncate">{item.creator.name}</span>
            {item.creator.verified && (
              <CheckCircle2 className="w-3 h-3 text-blue-600 fill-blue-600 text-white flex-shrink-0" />
            )}
          </div>

          {/* Views and Upload Time */}
          <div className="flex items-center gap-1 text-[9px] sm:text-[11px] text-slate-400 mt-0.5 font-bold font-mono">
            <span>{item.views} views</span>
            <span>•</span>
            <span className="text-emerald-600 font-bold">{item.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
