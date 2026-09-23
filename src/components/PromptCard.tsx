"use client";

import React, { useState } from "react";
import { Copy, Check, MoreVertical, Play, CheckCircle2, ExternalLink, Bot } from "lucide-react";
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
      colors: ["#ffffff", "#ff0000", "#3ea6ff"],
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fallbackThumbnail = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80";

  return (
    <div
      onClick={() => onOpenDetail(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col w-full"
    >
      {/* 1. YouTube Standard 16:9 Thumbnail (Stable background, crisp hover zoom) */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group-hover:shadow-md transition-all">
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
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`w-11 h-11 rounded-full bg-black/70 text-white flex items-center justify-center transition-transform ${
              isHovered ? "scale-110 bg-red-600" : "scale-100"
            }`}>
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Exact YouTube Timestamp / Tag Pill (Bottom Right) */}
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[11px] font-bold bg-black/80 text-white backdrop-blur-xs font-mono">
          {item.category === "video" ? "04:12" : item.category === "ui" ? "TSX 15" : "8K UHD"}
        </div>

        {/* Floating Model Badge (Top Left) */}
        <div className="absolute top-2.5 left-2.5">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-white/95 text-slate-900 border border-slate-200/90 shadow-xs backdrop-blur-xs">
            {item.model}
          </span>
        </div>

        {/* Quick Actions (Top Right) */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(item.prompt);
              window.open(`https://chatgpt.com/?q=${encodeURIComponent(item.prompt)}`, "_blank");
            }}
            title="Run on ChatGPT"
            className={`px-2.5 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-extrabold shadow-md transition-opacity duration-200 flex items-center gap-1 cursor-pointer ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Bot className="w-3 h-3" />
            <span>Run</span>
          </button>

          <button
            onClick={handleCopy}
            title="Copy Prompt"
            className={`p-1.5 rounded-full bg-white/95 text-slate-800 shadow-md transition-opacity duration-200 cursor-pointer ${
              isHovered ? "opacity-100" : "opacity-0"
            } hover:bg-slate-100`}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 2. Video Details Row */}
      <div className="flex gap-3 pt-3.5 px-0.5 items-start">
        {/* Channel Avatar */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.creator.avatar}
          alt={item.creator.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-0.5 border-2 border-slate-200 shadow-2xs"
        />

        {/* Video Title & Meta */}
        <div className="flex flex-col flex-1 min-w-0 pr-1">
          <h3 className="font-extrabold text-[14px] sm:text-[15px] leading-snug text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors tracking-tight">
            {item.title}
          </h3>

          {/* Channel Name with Verified Tick */}
          <div className="flex items-center gap-1 text-[13px] text-slate-500 mt-1 hover:text-slate-800 font-semibold">
            <span className="truncate">{item.creator.name}</span>
            {item.creator.verified && (
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 fill-blue-600 text-white" />
            )}
          </div>

          {/* Views and Upload Time */}
          <div className="flex items-center gap-1 text-[12px] text-slate-400 leading-4 mt-0.5 font-bold font-mono">
            <span>{item.views} views</span>
            <span>•</span>
            <span>{item.timestamp}</span>
          </div>
        </div>

        {/* 3-dots Menu Button */}
        <button
          title="Action menu"
          onClick={(e) => {
            e.stopPropagation();
            handleCopy(e);
          }}
          className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 opacity-0 group-hover:opacity-100 transition"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
