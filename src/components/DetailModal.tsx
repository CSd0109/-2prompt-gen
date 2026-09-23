"use client";

import React, { useState, useEffect } from "react";
import { 
  X, Copy, Check, ExternalLink, Bot, Sparkles, CheckCircle2, 
  Terminal, ShieldCheck, Layers, Share2, Eye
} from "lucide-react";
import confetti from "canvas-confetti";
import { PromptItem, SAMPLE_PROMPTS } from "@/lib/data";

interface DetailModalProps {
  item: PromptItem | null;
  onClose: () => void;
  onSelectRelated: (item: PromptItem) => void;
}

export function DetailModal({ item, onClose, onSelectRelated }: DetailModalProps) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedNegative, setCopiedNegative] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.75 },
      colors: ["#3ea6ff", "#10a37f", "#ffffff", "#f59e0b"],
    });
  };

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    triggerConfetti();
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyNegative = (text: string) => {
    navigator.clipboard.writeText(text);
    triggerConfetti();
    setCopiedNegative(true);
    setTimeout(() => setCopiedNegative(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  // Direct 1-Click Launchers with preloaded prompt
  const handleTryChatGPT = () => {
    navigator.clipboard.writeText(item.prompt);
    triggerConfetti();
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(item.prompt)}`, "_blank");
  };

  const handleTryGemini = () => {
    navigator.clipboard.writeText(item.prompt);
    triggerConfetti();
    window.open(`https://gemini.google.com/app?prompt=${encodeURIComponent(item.prompt)}`, "_blank");
  };

  const handleTryClaudeOrDev = () => {
    navigator.clipboard.writeText(item.prompt);
    triggerConfetti();
    if (item.category === "ui") {
      window.open("https://v0.dev", "_blank");
    } else {
      window.open("https://claude.ai/new", "_blank");
    }
  };

  const relatedPrompts = SAMPLE_PROMPTS.filter((p) => p.id !== item.id).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black/85 backdrop-blur-sm overflow-y-auto p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main YouTube Theater Watch Window */}
      <div className="relative z-10 w-full max-w-6xl bg-[#0f0f0f] border border-[#272727] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[95vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#272727] bg-[#141414]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#aaaaaa]">
              Prompt Dashboard • {item.model}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#aaaaaa] hover:text-white rounded-full hover:bg-[#272727] transition"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main 2-Column Section */}
          <div className="lg:col-span-2 space-y-4">
            {/* 1. Large 16:9 Cinema Preview */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-lg border border-[#272727]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 yt-timestamp">
                {item.aspectRatio} Aspect
              </div>
            </div>

            {/* 2. Prompt Title */}
            <h1 className="text-xl sm:text-2xl font-black text-white leading-tight font-heading tracking-tight">
              {item.title}
            </h1>

            {/* 3. Creator & Action Bar (Clean, NO fake youtube subscribe button) */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#272727]">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.creator.avatar}
                  alt={item.creator.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#333333]"
                />
                <div>
                  <div className="flex items-center gap-1 font-black text-sm text-white font-heading tracking-tight">
                    <span>{item.creator.name}</span>
                    {item.creator.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3ea6ff]" />
                    )}
                  </div>
                  <div className="text-xs text-[#aaaaaa] flex items-center gap-2 font-sans font-medium">
                    <span>{item.views} uses</span>
                    <span>•</span>
                    <span>{item.timestamp}</span>
                  </div>
                </div>
              </div>

              {/* Utility Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyPrompt(item.prompt)}
                  className="px-4 py-2 rounded-full text-xs font-black font-heading transition active:scale-95 flex items-center gap-2 bg-[#3ea6ff]/15 hover:bg-[#3ea6ff]/25 text-[#3ea6ff] border border-[#3ea6ff]/30 shadow-xs cursor-pointer"
                >
                  {copiedPrompt ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPrompt ? "Copied!" : "Copy Prompt"}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-full text-xs font-black font-heading transition active:scale-95 flex items-center gap-2 bg-[#272727] hover:bg-[#383838] text-white border border-[#383838] shadow-xs cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{shareCopied ? "Link Copied!" : "Share"}</span>
                </button>
              </div>
            </div>

            {/* 4. 🔥 1-CLICK GENERATOR BUTTONS (ChatGPT, Gemini, Claude/v0) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#181818] border border-[#2d2d2d] space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-200 flex items-center gap-1.5 font-heading">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Direct 1-Click Execution (Auto-Paste & Open):
                </span>
                <span className="text-[11px] text-[#aaaaaa] font-medium font-sans">Zero login required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Try with ChatGPT */}
                <button
                  onClick={handleTryChatGPT}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-[#10a37f] hover:bg-[#0e8e6e] text-white text-xs sm:text-sm font-black font-heading transition active:scale-95 shadow-md cursor-pointer border border-[#14b88a]/30"
                >
                  <Bot className="w-4 h-4" />
                  <span>Try with ChatGPT</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>

                {/* Try with Gemini */}
                <button
                  onClick={handleTryGemini}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-black font-heading transition active:scale-95 shadow-md cursor-pointer border border-[#4285f4]/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Try with Gemini</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>

                {/* Try with Claude / v0 */}
                <button
                  onClick={handleTryClaudeOrDev}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-[#d97706] hover:bg-[#b45309] text-white text-xs sm:text-sm font-black font-heading transition active:scale-95 shadow-md cursor-pointer border border-[#f59e0b]/30"
                >
                  <Terminal className="w-4 h-4" />
                  <span>{item.category === "ui" ? "Build on v0.dev" : "Try with Claude"}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </button>
              </div>
            </div>

            {/* 5. Full Prompt Code Block Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#1c1c1c] border border-[#2d2d2d] space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#3ea6ff] font-heading flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3ea6ff]" />
                  Optimized Command Prompt:
                </span>
                <span className="px-3 py-1 rounded-full bg-[#2a2a2a] text-white font-mono text-[11px] font-bold border border-[#3a3a3a]">
                  Target: {item.model}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] border border-[#262626] font-mono text-xs sm:text-sm leading-relaxed text-slate-200 select-all shadow-inner">
                {item.prompt}
              </div>

              {/* Negative Prompt if exists */}
              {item.negativePrompt && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                      Negative Prompt (Exclusions):
                    </span>
                    <button
                      onClick={() => handleCopyNegative(item.negativePrompt!)}
                      className="text-[11px] text-rose-400 hover:underline"
                    >
                      {copiedNegative ? "Copied Negative!" : "Copy Negative"}
                    </button>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-rose-950/40 font-mono text-xs text-rose-200 select-all">
                    {item.negativePrompt}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs text-[#3ea6ff] hover:underline cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Related Prompts */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white px-1">More Prompts in this Style</h3>
            <div className="space-y-3">
              {relatedPrompts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectRelated(rel)}
                  className="flex gap-2.5 p-1.5 rounded-xl hover:bg-[#272727] cursor-pointer transition group"
                >
                  <div className="relative w-36 aspect-video rounded-lg overflow-hidden bg-[#272727] flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rel.thumbnail}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <span className="yt-timestamp text-[10px]">
                      {rel.category === "video" ? "4K Video" : "8K"}
                    </span>
                  </div>

                  <div className="flex flex-col min-w-0 justify-between py-0.5">
                    <h4 className="text-xs font-medium text-[#f1f1f1] line-clamp-2 leading-snug group-hover:text-[#3ea6ff]">
                      {rel.title}
                    </h4>
                    <div className="text-[11px] text-[#aaaaaa]">
                      <p className="truncate">{rel.creator.name}</p>
                      <p>{rel.views} views</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
