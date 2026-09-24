"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Home, Compass, PlaySquare, Sparkles, Image as ImageIcon, Video, Layout, Settings, Heart, UserCheck, Download
} from "lucide-react";
import { AI_MODELS } from "@/lib/data";
import { ProviderIcon } from "@/components/PromptGeneratorStudio";

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  isOpen: boolean;
}

export function Sidebar({ currentTab, setCurrentTab, selectedFilter, setSelectedFilter, isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed lg:sticky top-20 left-0 z-40 h-[calc(100vh-5rem)] w-60 bg-white border-r border-slate-200 flex flex-col px-3 py-2 transition-transform duration-200 overflow-y-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      {/* 1. Primary Feeds */}
      <div className="space-y-0.5 pb-3 border-b border-slate-200">
        <button
          onClick={() => {
            setCurrentTab("gallery");
            setSelectedFilter("image");
          }}
          className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition ${
            currentTab === "gallery" && selectedFilter === "image"
              ? "bg-slate-100 text-slate-900 font-bold shadow-xs"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <ImageIcon className="w-5 h-5 flex-shrink-0 text-purple-600" />
          <span>Image Prompts</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab("generator");
          }}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition ${
            currentTab === "generator"
              ? "bg-slate-100 text-slate-900 font-bold shadow-xs"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <Sparkles className="w-5 h-5 flex-shrink-0 text-amber-500" />
            <span>AI Prompt Generate</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">AI</span>
        </button>
        <button
          onClick={() => {
            setCurrentTab("characters");
          }}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition ${
            currentTab === "characters"
              ? "bg-purple-50 text-purple-700 font-bold shadow-xs"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <UserCheck className="w-5 h-5 flex-shrink-0 text-indigo-600" />
            <span>AI Characters</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white">NEW</span>
        </button>

        <Link
          href="/socialmediavdodownloder"
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition text-slate-600 hover:bg-purple-50 hover:text-purple-700 group"
        >
          <div className="flex items-center gap-3.5">
            <Download className="w-5 h-5 flex-shrink-0 text-purple-600 group-hover:scale-110 transition-transform" />
            <span>Video Downloader</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800">FREE</span>
        </Link>
      </div>

      {/* 2. Real Dedicated Prompt Galleries */}
      <div className="py-3 border-b border-slate-200 space-y-1">
        <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          Prompt Galleries
        </div>

        <button
          onClick={() => {
            setCurrentTab("gallery");
            setSelectedFilter("image");
          }}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition ${
            currentTab === "gallery" && selectedFilter === "image"
               ? "bg-slate-100 text-slate-900 font-bold"
               : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <ImageIcon className="w-4 h-4 text-purple-600" />
          <span>Image Prompts</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab("gallery");
            setSelectedFilter("couple-poses");
          }}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition ${
            currentTab === "gallery" && selectedFilter === "couple-poses"
              ? "bg-rose-50 text-rose-700 font-bold"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
          <span>Couple Poses</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab("gallery");
            setSelectedFilter("video");
          }}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition ${
            currentTab === "gallery" && selectedFilter === "video"
              ? "bg-slate-100 text-slate-900 font-bold"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <Video className="w-4 h-4 text-rose-600" />
          <span>Video Prompts</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab("gallery");
            setSelectedFilter("ui");
          }}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition ${
            currentTab === "gallery" && selectedFilter === "ui"
              ? "bg-slate-100 text-slate-900 font-bold"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <Layout className="w-4 h-4 text-cyan-600" />
          <span>Website UI</span>
        </button>
      </div>

      {/* 3. Clean All Models Dropdown Option (replaces blurry list) */}
      <div className="py-3 border-b border-slate-200">
        <SidebarModelsDropdown onSelectModel={() => setCurrentTab("generator")} />
      </div>

      {/* 4. Bottom System Status */}
      <div className="mt-auto pt-3 text-xs text-slate-500 px-3 space-y-1">
        <div className="flex items-center justify-between font-medium">
          <span>Engine Status:</span>
          <span className="text-emerald-600 font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Active 2.0
          </span>
        </div>
        <p className="text-[11px] text-slate-400 pt-0.5">
          AI Prompt Generate • High Performance
        </p>
      </div>
    </aside>
  );
}

function SidebarModelsDropdown({ onSelectModel }: { onSelectModel: () => void }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-1 relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-outfit font-extrabold bg-gradient-to-r from-blue-50/80 to-indigo-50/80 hover:from-blue-100/90 hover:to-indigo-100/90 text-blue-900 border-2 border-blue-200/80 transition-all duration-200 shadow-xs active:scale-[0.98]"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="font-extrabold tracking-tight text-slate-900 text-xs">All Models</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-700">
          <span className="px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-extrabold">8 Live</span>
          <span className={`text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▼</span>
        </div>
      </button>

      {open && (
        <div className="mt-1.5 p-2 rounded-2xl bg-white border-2 border-slate-200 shadow-xl space-y-1 max-h-72 overflow-y-auto z-30 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
            Choose AI Engine
          </div>
          {AI_MODELS.map((model) => (
            <div
              key={model.id}
              onClick={() => {
                onSelectModel();
                setOpen(false);
              }}
              className="flex items-center justify-between px-2.5 py-2 rounded-xl text-xs hover:bg-blue-50/70 hover:text-blue-900 cursor-pointer transition active:scale-[0.98] font-outfit"
            >
              <div className="flex items-center gap-2.5">
                <ProviderIcon id={model.id} className="w-4 h-4 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-xs tracking-tight">{model.name}</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
