"use client";

import React, { useState } from "react";
import { 
  ArrowUp, Sparkles, Bot, Copy, Check, ExternalLink, RefreshCw, 
  Image, Video, Layout, Layers, Sliders, ChevronDown, CheckCircle2,
  Terminal, Shield, Upload, Paperclip, Camera, Wand2
} from "lucide-react";
import confetti from "canvas-confetti";
import { AI_MODELS } from "@/lib/data";

interface PromptGeneratorStudioProps {
  compact?: boolean;
  onToggleAllServices?: () => void;
  showAllServices?: boolean;
}

// Official authentic SVG logos for real AI providers
export function ProviderIcon({ id, className = "w-4 h-4" }: { id: string; className?: string }) {
  switch (id) {
    case "chatgpt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1638a.0804.0804 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.686zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.407 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813l-.0048 6.7227zm1.145-2.006l2.55-1.4716 2.5453 1.4716v2.9432l-2.5453 1.4716-2.55-1.4716v-2.9432z" />
        </svg>
      );
    case "gemini":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24Z" fill="url(#gemini-grad)" />
          <defs>
            <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1B6EF3" />
              <stop offset="0.5" stopColor="#7C3AED" />
              <stop offset="1" stopColor="#EA4335" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "claude":
      // Authentic Anthropic Claude Sunburst Ray Star
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#CC785C">
          <path d="M4.773 14.966l3.856-2.193L7.14 8.78l3.96 1.83 2.193-3.857 1.83 3.96 3.96-1.83-1.488 3.993 3.856 2.193-3.993 1.488 1.488 3.993-3.856-2.193-1.83 3.96-2.193-3.857-3.96 1.83 1.488-3.993-3.856-2.193 3.993-1.488z" />
        </svg>
      );
    case "deepseek":
      // Authentic DeepSeek Blue Whale Icon
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0D53FF">
          <path d="M21.84 9.4c-.45-1.12-1.25-2.07-2.31-2.73-1.84-1.15-4.2-.95-5.83.47l-1.39 1.21-1.39-1.21c-1.63-1.42-3.99-1.62-5.83-.47-1.06.66-1.86 1.61-2.31 2.73-.55 1.38-.45 2.92.27 4.23.63 1.15 1.65 2.04 2.87 2.51l5.96 2.31c.32.12.67.12.99 0l5.96-2.31c1.22-.47 2.24-1.36 2.87-2.51.72-1.31.82-2.85.27-4.23zM8.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      );
    case "kimi":
      // Authentic Kimi Moonshot AI Crescent Moon Star
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#8B5CF6" />
          <circle cx="15.5" cy="7.5" r="1.5" fill="#C084FC" />
        </svg>
      );
    case "o3-mini":
      // Official OpenAI Green Logo
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#10A37F">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1638a.0804.0804 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.686zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.407 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813l-.0048 6.7227zm1.145-2.006l2.55-1.4716 2.5453 1.4716v2.9432l-2.5453 1.4716-2.55-1.4716v-2.9432z" />
        </svg>
      );
    case "qwen":
      // Official Alibaba Qwen Aurora Blue Hexagon
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#6366F1">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.9 3.8-3.4 1.9-6.9-3.8 3.4-1.9zm-8 4.6l6.9 3.8v7.6l-6.9-3.8V8.8zm9.1 11.4v-7.6l6.9-3.8v7.6l-6.9 3.8z" />
        </svg>
      );
    case "groq":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F97316">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    default:
      return <Sparkles className={`${className} text-purple-600`} />;
  }
}

export function PromptGeneratorStudio({ compact = false, onToggleAllServices, showAllServices }: PromptGeneratorStudioProps) {
  const [inputTopic, setInputTopic] = useState("");
  const [selectedModel, setSelectedModel] = useState("chatgpt");
  const [selectedCategory, setSelectedCategory] = useState<"image" | "video" | "ui">("image");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [stylePreset, setStylePreset] = useState("photoreal");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    prompt: string;
    negative?: string;
    specs?: string;
    previewImage?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        if (!inputTopic) {
          setInputTopic("Analyze this reference image and reverse-engineer a master prompt matching its exact lighting, art style, subject composition, and color grading");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputTopic.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: inputTopic,
          model: selectedModel,
          category: selectedCategory,
          aspectRatio,
          style: stylePreset,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setResult({
          prompt: data.result,
          negative: data.negativePrompt,
          specs: data.technicalSpecs,
          previewImage: data.previewImage,
        });
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ["#10a37f", "#3ea6ff", "#ffffff"],
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunchChatGPT = () => {
    if (!result?.prompt) return;
    navigator.clipboard.writeText(result.prompt);
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(result.prompt)}`, "_blank");
  };

  const handleLaunchGemini = () => {
    if (!result?.prompt) return;
    navigator.clipboard.writeText(result.prompt);
    window.open(`https://gemini.google.com/app?prompt=${encodeURIComponent(result.prompt)}`, "_blank");
  };

  const handleLaunchClaude = () => {
    if (!result?.prompt) return;
    navigator.clipboard.writeText(result.prompt);
    if (selectedCategory === "ui") {
      window.open("https://v0.dev", "_blank");
    } else {
      window.open("https://claude.ai/new", "_blank");
    }
  };

  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const activeModelObj = AI_MODELS.find((m) => m.id === selectedModel) || AI_MODELS[0];

  return (
    <div className={`w-full mx-auto flex flex-col items-center ${compact ? "pt-0 pb-2 max-w-4xl" : "pt-4 sm:pt-8 max-w-4xl"}`}>
      {/* 1. Category Switcher Pills - Desktop Only to keep Mobile 100% clean and clutter-free */}
      <div className="hidden sm:flex flex-wrap items-center justify-center gap-2.5 mb-3">
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-slate-300 shadow-xs font-outfit">
          <button
            type="button"
            onClick={() => setSelectedCategory("image")}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === "image"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Image Prompt</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("video")}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === "video"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video Prompt</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("ui")}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === "ui"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Website UI</span>
          </button>

          {selectedCategory !== "ui" && (
            <div className="flex items-center gap-1 pl-2 pr-1 border-l border-slate-200 font-mono">
              {["16:9", "9:16", "1:1"].map((ar) => (
                <button
                  key={ar}
                  type="button"
                  onClick={() => setAspectRatio(ar)}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] transition font-bold ${
                    aspectRatio === ar ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {ar}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 100% Free • No Login • No Sign-Up Trust Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold shadow-2xs font-outfit">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% Free • Zero Login</span>
        </div>
      </div>

      {/* 2. GEMINI OFFICIAL BOLD WHITE COMMAND BOX (Drop-DOWNward Menu with Real AI Logos) */}
      <form onSubmit={handleGenerate} className="w-full relative">
        <div className="relative w-full rounded-3xl bg-white text-slate-900 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.12)] p-4 sm:p-5 flex flex-col border-2 border-slate-300 focus-within:border-blue-600 focus-within:shadow-[0_12px_45px_-5px_rgba(37,99,235,0.2)] transition-all">
          {/* Uploaded Reference Image Preview Pill */}
          {uploadedImage && (
            <div className="relative inline-flex items-center gap-2 mb-2 p-1.5 pr-3 rounded-2xl bg-purple-50 border border-purple-200 text-purple-900 text-xs font-semibold w-fit">
              <img
                src={uploadedImage}
                alt="Reference Thumbnail"
                className="w-8 h-8 rounded-xl object-cover border border-purple-300"
              />
              <span className="text-[11px] font-bold">Image Attached (Reverse Prompt Active)</span>
              <button
                type="button"
                onClick={() => setUploadedImage(null)}
                className="ml-1 text-purple-400 hover:text-purple-700 font-bold"
              >
                ✕
              </button>
            </div>
          )}

          <textarea
            rows={2}
            value={inputTopic}
            onChange={(e) => setInputTopic(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleGenerate();
              }
            }}
            placeholder={
              selectedCategory === "image"
                ? `✨ Ask ${activeModelObj.name} or upload image for prompt reverse-engineering...`
                : selectedCategory === "video"
                ? `🎥 Describe your video motion with ${activeModelObj.name} (e.g., FPV drone racing through neon night streets, 4k 60fps)...`
                : `💻 Describe your webpage with ${activeModelObj.name} (e.g., Dark minimalist SaaS dashboard with charts and billing)...`
            }
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none resize-none leading-relaxed font-medium"
          />

          {/* Bottom Bar inside the White Box */}
          <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-100 relative">
            {/* Left Corner: Clean Circular Pill Model Dropdown (Opens DOWNWARD) */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition active:scale-95 border border-slate-200 shadow-2xs font-outfit"
                >
                  <ProviderIcon id={activeModelObj.id} className="w-4 h-4 flex-shrink-0" />
                  <span className="font-extrabold text-slate-900 tracking-tight">{activeModelObj.name}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-600 transition-transform duration-200 ${modelDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Model Dropdown Menu (OPENS DOWNWARDS) */}
                {modelDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setModelDropdownOpen(false)}
                    />
                    <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-white border-2 border-slate-200 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1 flex items-center justify-between">
                        <span>Select AI Model</span>
                        <span className="text-[10px] text-emerald-600 font-bold">● Active Engine</span>
                      </div>
                      <div className="space-y-1">
                        {AI_MODELS.map((m) => {
                          const isSelected = selectedModel === m.id;
                          return (
                            <button
                              key={m.id}
                              type="button"
                              onClick={() => {
                                setSelectedModel(m.id);
                                setModelDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-outfit transition ${
                                isSelected
                                  ? "bg-blue-50 text-blue-700 font-extrabold border border-blue-200 shadow-2xs"
                                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-bold"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <ProviderIcon id={m.id} className="w-5 h-5 flex-shrink-0" />
                                <span className="font-extrabold tracking-tight">{m.name}</span>
                              </div>
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-blue-600 shadow-xs" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* ALL SERVICES BABAL BUTTON (Desktop Only) */}
              {onToggleAllServices && (
                <button
                  type="button"
                  onClick={onToggleAllServices}
                  className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black transition-all active:scale-95 shadow-sm font-outfit border ${
                    showAllServices
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-500 shadow-md ring-2 ring-purple-300"
                      : "bg-gradient-to-r from-slate-900 to-indigo-950 hover:from-purple-700 hover:to-indigo-700 text-white border-slate-800 hover:shadow-md"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  <span>ALL SERVICES</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-extrabold ml-0.5 uppercase tracking-wider">
                    {showAllServices ? "Close" : "Open"}
                  </span>
                </button>
              )}
            </div>

            {/* Right: Upload Image + Round Send/Arrow Button like Gemini */}
            <div className="flex items-center gap-2">
              <label
                title="Upload image to reverse-engineer prompt"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center cursor-pointer transition active:scale-95 border border-slate-200"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Camera className="w-4 h-4" />
              </label>

              <button
                type="submit"
                disabled={isLoading || !inputTopic.trim()}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isLoading || !inputTopic.trim()
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                    : "bg-slate-900 text-white hover:bg-black shadow-md active:scale-95 hover:shadow-lg cursor-pointer"
                }`}
                title="Generate Prompt"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <ArrowUp className="w-5 h-5 stroke-[2.5]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* 4. RESULT DASHBOARD (Clean Light/White Theme with Bold Accents) */}
      {result && (
        <div className="w-full mt-6 rounded-3xl bg-white border-2 border-slate-200 p-5 sm:p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                {selectedModel.toUpperCase()} Master Prompt Generated
              </span>
            </div>

            <button
              onClick={() => handleCopy(result.prompt)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-black transition active:scale-95 shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied Prompt!" : "Copy Prompt"}</span>
            </button>
          </div>

          {/* Prompt Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm text-slate-900 leading-relaxed whitespace-pre-wrap select-all shadow-inner">
            {result.prompt}
          </div>

          {/* Live AI Generated Preview Image (Pollinations.ai) */}
          {result.previewImage && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 font-bold text-slate-800">
                  <Sparkles className="w-4 h-4 text-purple-600" /> Instant AI Render (Flux Photoreal Engine)
                </span>
                <a
                  href={result.previewImage}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-100 text-[11px] text-slate-700 font-bold transition border border-slate-200 shadow-2xs"
                >
                  <span>Open Full HD</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-200 border border-slate-300 group/img shadow-md">
                <img
                  src={result.previewImage}
                  alt="Live AI Generated Preview"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover/img:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          )}

          {/* Negative prompt */}
          {result.negative && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 font-mono text-xs text-red-700">
              <span className="font-bold text-red-900">Negative Prompt: </span>
              {result.negative}
            </div>
          )}

          {/* Technical Specs */}
          {result.specs && (
            <div className="text-[11px] font-mono text-slate-500">
              {result.specs}
            </div>
          )}

          {/* Action Launchers */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-bold mr-1">Direct Execution:</span>
            <button
              onClick={handleLaunchChatGPT}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs"
            >
              <ProviderIcon id="chatgpt" className="w-4 h-4" />
              <span>Launch ChatGPT</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </button>

            <button
              onClick={handleLaunchGemini}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-xs"
            >
              <ProviderIcon id="gemini" className="w-4 h-4" />
              <span>Launch Gemini</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </button>

            <button
              onClick={handleLaunchClaude}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs"
            >
              <ProviderIcon id="claude" className="w-4 h-4" />
              <span>{selectedCategory === "ui" ? "Build on v0.dev" : "Launch Claude"}</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
