"use client";

import React from "react";
import { 
  Home, Compass, PlaySquare, Sparkles, Image as ImageIcon, Video, Layout, Settings, Heart, UserCheck
} from "lucide-react";
import { AI_MODELS } from "@/lib/data";

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
      className={`fixed lg:sticky top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-60 bg-white border-r border-slate-200 flex flex-col px-3 py-2 transition-transform duration-200 overflow-y-auto ${
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
            <span>Prompt Generator</span>
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
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition ${
            currentTab === "gallery" && selectedFilter === "image"
               ? "bg-slate-100 text-slate-900 font-bold"
               : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <div className="flex items-center gap-3">
            <ImageIcon className="w-4 h-4 text-purple-600" />
            <span>Image Prompts</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Flux/MJ</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab("gallery");
            setSelectedFilter("couple-poses");
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition ${
            currentTab === "gallery" && selectedFilter === "couple-poses"
              ? "bg-rose-50 text-rose-700 font-bold"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <div className="flex items-center gap-3">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
            <span>Couple Poses</span>
          </div>
          <span className="text-[11px] text-rose-500 font-bold font-mono">HOT</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab("gallery");
            setSelectedFilter("video");
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition ${
            currentTab === "gallery" && selectedFilter === "video"
              ? "bg-slate-100 text-slate-900 font-bold"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <div className="flex items-center gap-3">
            <Video className="w-4 h-4 text-rose-600" />
            <span>Video Prompts</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Sora</span>
        </button>

        <button
          onClick={() => {
            setCurrentTab("gallery");
            setSelectedFilter("ui");
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition ${
            currentTab === "gallery" && selectedFilter === "ui"
              ? "bg-slate-100 text-slate-900 font-bold"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <div className="flex items-center gap-3">
            <Layout className="w-4 h-4 text-cyan-600" />
            <span>Website UI</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Next.js</span>
        </button>
      </div>

      {/* 3. AI Models Quick Engine Select */}
      <div className="py-3 border-b border-slate-200 space-y-1">
        <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          Available Models
        </div>

        {AI_MODELS.map((model) => (
          <div
            key={model.id}
            onClick={() => {
              setCurrentTab("generator");
            }}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-[#cccccc] hover:text-white hover:bg-[#272727] cursor-pointer transition"
          >
            <div className="flex items-center gap-2.5">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${model.color}`} />
              <span className="font-medium text-[13px]">{model.name}</span>
            </div>
            <span className="text-[10px] font-mono text-[#888888]">{model.badge}</span>
          </div>
        ))}
      </div>

      {/* 4. Bottom System Status */}
      <div className="mt-auto pt-3 text-xs text-[#717171] px-3 space-y-1">
        <div className="flex items-center justify-between">
          <span>Engine:</span>
          <span className="text-green-500 font-mono font-bold">● Active 2.0</span>
        </div>
        <p className="text-[11px] text-[#555555] pt-1">
          Prompt Generator • High Performance
        </p>
      </div>
    </aside>
  );
}
