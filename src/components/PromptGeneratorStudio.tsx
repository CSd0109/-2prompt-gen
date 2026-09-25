"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowUp, Sparkles, Bot, Copy, Check, ExternalLink, RefreshCw, 
  Image as ImageIcon, Video, Layout, Layers, Sliders, ChevronDown, CheckCircle2,
  Terminal, Shield, Upload, Paperclip, Camera, Wand2, X, FileText,
  SlidersHorizontal, CheckSquare, Maximize2, Zap, FileUp
} from "lucide-react";
import confetti from "canvas-confetti";
import { AI_MODELS } from "@/lib/data";

interface PromptGeneratorStudioProps {
  compact?: boolean;
  onToggleAllServices?: () => void;
  showAllServices?: boolean;
}

export function ProviderIcon({ id, className = "w-4 h-4" }: { id: string; className?: string }) {
  switch (id) {
    case "chatgpt":
      return <Bot className={`${className} text-emerald-600`} />;
    case "claude":
      return <Sparkles className={`${className} text-[#CC785C]`} />;
    case "gemini":
      return <Zap className={`${className} text-blue-600`} />;
    case "deepseek":
      return <Terminal className={`${className} text-blue-700`} />;
    default:
      return <Sparkles className={`${className} text-purple-600`} />;
  }
}

// All Suite Services definition for the dropdown
export interface ServiceItem {
  id: string;
  name: string;
  desc: string;
  category: "Vision & Reverse" | "Prompt Tools" | "Document & PDF" | "Text & AI" | "AI Models";
  iconName: string;
  actionPlaceholder: string;
  isExternalLink?: string;
  isVisionTool?: boolean;
}

export const ALL_SERVICES_CATALOG: ServiceItem[] = [
  // 1. Vision & Reverse
  {
    id: "image-to-prompt",
    name: "Image to Prompt (Reverse AI)",
    desc: "Extract Midjourney, Flux & SDXL prompts from any image",
    category: "Vision & Reverse",
    iconName: "image-to-prompt",
    actionPlaceholder: "Upload image below or type custom command (e.g. remove background)...",
    isVisionTool: true,
  },
  {
    id: "image-to-text",
    name: "Image to Text (OCR Extractor)",
    desc: "Extract clean editable text from screenshots or images",
    category: "Vision & Reverse",
    iconName: "image-to-text",
    actionPlaceholder: "Attach image to extract text from...",
    isVisionTool: true,
  },
  // 2. Prompt Tools
  {
    id: "ai-prompt-generator",
    name: "Master AI Prompt Generator",
    desc: "Build structured production prompts for any use case",
    category: "Prompt Tools",
    iconName: "ai-prompt-generator",
    actionPlaceholder: "Describe your prompt goal or idea...",
  },
  {
    id: "ai-prompt-optimizer",
    name: "AI Prompt Optimizer",
    desc: "Sharpen constraints and remove ambiguity from rough drafts",
    category: "Prompt Tools",
    iconName: "ai-prompt-optimizer",
    actionPlaceholder: "Paste your existing rough prompt to optimize...",
  },
  {
    id: "ai-prompt-checker",
    name: "AI Prompt Checker & Auditor",
    desc: "Audit prompt quality and hallucination risks",
    category: "Prompt Tools",
    iconName: "ai-prompt-checker",
    actionPlaceholder: "Paste prompt to check for weak instructions...",
  },
  {
    id: "nano-banana",
    name: "Nano Banana Image Prompt",
    desc: "8K aesthetic editorial character styling",
    category: "Prompt Tools",
    iconName: "nano-banana",
    actionPlaceholder: "Describe subject or portrait details...",
  },
  {
    id: "video-prompt-generator",
    name: "Video Prompt Generator",
    desc: "Cinematic camera motions for Veo 3, Sora & Kling",
    category: "Prompt Tools",
    iconName: "video-prompt-generator",
    actionPlaceholder: "Describe video motion (e.g. FPV drone flyover through neon city)...",
  },
  {
    id: "website-prompt-generator",
    name: "Website Prompt Generator",
    desc: "Next.js, Tailwind and full-stack app UI prompts",
    category: "Prompt Tools",
    iconName: "website-prompt-generator",
    actionPlaceholder: "Describe website UI (e.g. SaaS landing page with dark mode)...",
  },
  // 3. Document & PDF Tools
  {
    id: "image-to-pdf",
    name: "Image to PDF Converter",
    desc: "Convert JPG, PNG to clean standard PDF document",
    category: "Document & PDF",
    iconName: "image-to-pdf",
    actionPlaceholder: "Upload image to convert directly to high-quality PDF...",
    isVisionTool: true,
  },
  {
    id: "pdf-to-image",
    name: "PDF to Image Converter",
    desc: "Extract high-resolution PNG pages from PDF",
    category: "Document & PDF",
    iconName: "pdf-to-image",
    actionPlaceholder: "Upload PDF document to extract images...",
  },
  {
    id: "pdf-editor",
    name: "AI PDF Document Editor",
    desc: "Edit text, annotate, and re-export PDF documents",
    category: "Document & PDF",
    iconName: "pdf-editor",
    actionPlaceholder: "Describe changes or annotations needed in your PDF...",
  },
  // 4. Text & AI Tools
  {
    id: "ai-humanizer",
    name: "AI Humanizer",
    desc: "Convert robotic AI drafts to natural human voice",
    category: "Text & AI",
    iconName: "ai-humanizer",
    actionPlaceholder: "Paste AI generated text to make it sound 100% human...",
  },
  {
    id: "ai-text-detector",
    name: "AI Text Detector",
    desc: "Scan text for AI patterns and perplexity scores",
    category: "Text & AI",
    iconName: "ai-text-detector",
    actionPlaceholder: "Paste content to analyze for AI probability...",
  },
  // 5. Direct AI Models
  {
    id: "chatgpt",
    name: "ChatGPT (GPT-4o / o3-mini)",
    desc: "Engineered specifically for ChatGPT syntax",
    category: "AI Models",
    iconName: "chatgpt",
    actionPlaceholder: "Enter task for ChatGPT...",
  },
  {
    id: "claude",
    name: "Claude 3.7 Sonnet",
    desc: "Nuanced writing and React code artifacts",
    category: "AI Models",
    iconName: "claude",
    actionPlaceholder: "Enter task for Claude...",
  },
  {
    id: "gemini",
    name: "Google Gemini 2.5 Flash",
    desc: "Multimodal reasoning and fast processing",
    category: "AI Models",
    iconName: "gemini",
    actionPlaceholder: "Enter task for Google Gemini...",
  },
  {
    id: "deepseek",
    name: "DeepSeek R1 & V3",
    desc: "Deep technical reasoning and coding",
    category: "AI Models",
    iconName: "deepseek",
    actionPlaceholder: "Enter coding or reasoning goal for DeepSeek...",
  },
];

// Helper to render authentic icon for service
function ServiceBadgeIcon({ id, className = "w-4 h-4" }: { id: string; className?: string }) {
  switch (id) {
    case "image-to-prompt":
      return <Maximize2 className={`${className} text-amber-500`} />;
    case "image-to-text":
      return <FileText className={`${className} text-blue-500`} />;
    case "image-to-pdf":
    case "pdf-to-image":
    case "pdf-editor":
      return <FileUp className={`${className} text-rose-500`} />;
    case "ai-humanizer":
      return <span className="text-xs">🍃</span>;
    case "ai-text-detector":
      return <Shield className={`${className} text-teal-500`} />;
    case "video-prompt-generator":
      return <Video className={`${className} text-purple-500`} />;
    case "website-prompt-generator":
      return <Layout className={`${className} text-orange-500`} />;
    case "chatgpt":
      return <Bot className={`${className} text-emerald-600`} />;
    case "claude":
      return <Sparkles className={`${className} text-[#CC785C]`} />;
    case "gemini":
      return <Zap className={`${className} text-blue-600`} />;
    case "deepseek":
      return <Terminal className={`${className} text-blue-700`} />;
    default:
      return <Sparkles className={`${className} text-purple-600`} />;
  }
}

export function PromptGeneratorStudio({ compact = false, onToggleAllServices, showAllServices }: PromptGeneratorStudioProps) {
  const [inputTopic, setInputTopic] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceItem>(ALL_SERVICES_CATALOG[0]); // default Image to Prompt
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeResultTab, setActiveResultTab] = useState<"all" | "midjourney" | "flux" | "sd">("all");

  // Output container
  const [resultData, setResultData] = useState<{
    prompt: string;
    negative?: string;
    specs?: string;
    previewImage?: string;
    // Multi-model support when image-to-prompt is used
    multiPrompts?: {
      midjourney?: string;
      flux?: string;
      stableDiffusion?: string;
      dalle?: string;
      negative?: string;
      style?: string;
      lighting?: string;
      camera?: string;
      summary?: string;
    };
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }
    setUploadedFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result as string);
      // Auto-switch to Image to Prompt if not already
      if (selectedService.id !== "image-to-prompt" && selectedService.id !== "image-to-text" && selectedService.id !== "image-to-pdf") {
        setSelectedService(ALL_SERVICES_CATALOG[0]); // Image to Prompt
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageFile(file);
  };

  // Drag and drop directly onto the textarea/command box
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputTopic.trim() && !uploadedImage) return;

    setIsLoading(true);
    setProgress(5);
    setResultData(null);

    // Realistic smooth 1% -> 100% progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + Math.floor(Math.random() * 8) + 4;
        return prev;
      });
    }, 120);

    try {
      // 1. If Image is uploaded OR service is Image-to-Prompt, route to Gemini 2.5 Vision API
      if (uploadedImage || selectedService.id === "image-to-prompt") {
        const res = await fetch("/api/image-to-prompt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            imageBase64: uploadedImage || "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
            instruction: inputTopic || "Generate ultra-accurate, high-fidelity prompts reproducing this image perfectly",
          }),
        });

        clearInterval(progressInterval);
        setProgress(100);

        if (!res.ok) throw new Error("Failed to process image with AI");
        const json = await res.json();
        
        if (json.success && json.data) {
          const d = json.data;
          setResultData({
            prompt: d.prompts.midjourney || d.prompts.flux || "Prompt generated successfully",
            negative: d.prompts.negative,
            multiPrompts: {
              midjourney: d.prompts.midjourney,
              flux: d.prompts.flux,
              stableDiffusion: d.prompts.stableDiffusion,
              dalle: d.prompts.dalle,
              negative: d.prompts.negative,
              style: d.style,
              lighting: d.lighting,
              camera: d.camera,
              summary: d.summary,
            }
          });
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#8054ff", "#00d2ff", "#10b981"],
          });
        }
      } else {
        // Standard Text to Prompt / Model Prompt via /api/generate
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: inputTopic,
            model: selectedService.category === "AI Models" ? selectedService.id : "chatgpt",
            category: selectedService.id === "video-prompt-generator" ? "video" : selectedService.id === "website-prompt-generator" ? "ui" : "image",
            aspectRatio,
            serviceId: selectedService.id,
          }),
        });

        clearInterval(progressInterval);
        setProgress(100);

        const data = await res.json();
        if (data.success) {
          setResultData({
            prompt: data.result,
            negative: data.negativePrompt,
            specs: data.technicalSpecs,
            previewImage: data.previewImage,
          });
          confetti({
            particleCount: 45,
            spread: 55,
            origin: { y: 0.8 },
            colors: ["#10a37f", "#3ea6ff", "#8054ff"],
          });
        }
      }
    } catch (err: any) {
      console.error(err);
      clearInterval(progressInterval);
      alert(err.message || "Failed to generate prompt. Please try again.");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 400);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`w-full mx-auto flex flex-col items-center ${compact ? "pt-1 pb-3 max-w-5xl" : "pt-4 sm:pt-8 max-w-5xl"}`}>
      {/* 1. Quick Category Pills Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
        <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-slate-200 shadow-2xs font-sans">
          <button
            type="button"
            onClick={() => {
              setSelectedService(ALL_SERVICES_CATALOG[0]); // Image to Prompt
              if (!uploadedImage) fileInputRef.current?.click();
            }}
            className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedService.id === "image-to-prompt"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Image to Prompt</span>
            <span className="px-1 py-0.2 rounded bg-cyan-500 text-white text-[9px] font-bold">AI</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedService(ALL_SERVICES_CATALOG[2])} // Text Prompt Generator
            className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedService.id === "ai-prompt-generator"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Text to Image</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedService(ALL_SERVICES_CATALOG[6])} // Video Prompt
            className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedService.id === "video-prompt-generator"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Text to Video</span>
          </button>

          <div className="hidden sm:flex items-center gap-1 pl-2 pr-1 border-l border-slate-200 font-mono">
            {["16:9", "9:16", "1:1"].map((ar) => (
              <button
                key={ar}
                type="button"
                onClick={() => setAspectRatio(ar)}
                className={`px-2 py-0.5 rounded-md text-[11px] transition font-medium ${
                  aspectRatio === ar ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {ar}
              </button>
            ))}
          </div>
        </div>

        {/* 100% Free • No Login Trust Badge */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-medium">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% Free • Unlimited</span>
        </div>
      </div>

      {/* 2. PROMPT COMMAND BOX WITH INTEGRATED ATTACH IMAGE & SERVICES DROPDOWN */}
      <form 
        onSubmit={handleGenerate} 
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="w-full relative"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        <div className="relative w-full rounded-3xl bg-white text-slate-800 shadow-[0_10px_40px_-10px_rgba(124,92,252,0.12)] p-5 sm:p-7 flex flex-col border border-purple-100/80 focus-within:border-[#8054ff] focus-within:ring-4 focus-within:ring-purple-500/10 transition-all">
          
          {/* Active Image Thumbnail Pill (If uploaded) */}
          {uploadedImage && (
            <div className="relative inline-flex items-center gap-2.5 mb-3 p-1.5 pr-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200/90 text-slate-900 text-xs font-semibold w-fit animate-in fade-in">
              <img
                src={uploadedImage}
                alt="Uploaded reference"
                className="w-10 h-10 rounded-xl object-cover border border-cyan-300 shadow-xs"
              />
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-cyan-800 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-600" /> Image Attached
                </span>
                <span className="text-[10px] text-slate-500 truncate max-w-[200px]">
                  {uploadedFileName || "Reference Image"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setUploadedImage(null);
                  setUploadedFileName(null);
                }}
                className="ml-2 w-5 h-5 rounded-full bg-slate-200/80 hover:bg-rose-500 hover:text-white flex items-center justify-center text-slate-500 font-bold transition cursor-pointer"
                title="Remove image"
              >
                ✕
              </button>
            </div>
          )}

          {/* Input Area with Sparkles Icon, Image Upload Button & Character Counter */}
          <div className="flex items-start gap-3 w-full">
            <div className="flex flex-col gap-2 flex-shrink-0 mt-0.5">
              {/* Image Upload Camera/Attachment Icon inside prompt box */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Attach or Drag Image (Image to Prompt)"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 flex items-center justify-center transition border border-slate-200 cursor-pointer shadow-2xs group"
              >
                <Camera className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="flex-1 relative">
              <textarea
                rows={2}
                value={inputTopic}
                maxLength={400}
                onChange={(e) => setInputTopic(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleGenerate();
                  }
                }}
                placeholder={
                  uploadedImage 
                    ? "Type command (e.g. 'remove background and generate same style prompt')..."
                    : selectedService.actionPlaceholder
                }
                className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-base sm:text-lg focus:outline-none resize-none leading-relaxed font-normal min-h-[60px]"
              />
            </div>

            <span className="text-xs text-slate-400 font-mono mt-1 flex-shrink-0 select-none">
              {inputTopic.length}/400
            </span>
          </div>

          {/* Divider line */}
          <div className="w-full h-px bg-slate-100 my-3" />

          {/* Bottom Bar: All-in-One Services Dropdown on Left + Create Prompt on Right */}
          <div className="flex items-center justify-between pt-1 relative">
            
            {/* Left: BABAL ALL SERVICES DROPDOWN (Replacing simple model dropdown) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-2 text-slate-800 hover:text-[#8054ff] font-semibold text-xs sm:text-sm transition py-1.5 px-2.5 rounded-xl hover:bg-slate-50 border border-slate-200/60 cursor-pointer"
              >
                <ServiceBadgeIcon id={selectedService.id} className="w-4 h-4" />
                <span className="max-w-[150px] sm:max-w-[200px] truncate">
                  {selectedService.name}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Dropdown Menu with all services categorized */}
              {servicesDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setServicesDropdownOpen(false)}
                  />
                  <div className="absolute left-0 bottom-full mb-2 sm:bottom-auto sm:top-full sm:mt-2 w-[320px] sm:w-[380px] rounded-3xl bg-white border border-slate-200 shadow-2xl p-3 z-50 animate-in fade-in duration-150 max-h-[420px] overflow-y-auto">
                    <div className="px-2.5 py-1.5 text-xs font-black text-slate-500 border-b border-slate-100 mb-2 flex items-center justify-between">
                      <span className="uppercase tracking-wider">Select AI Service / Tool</span>
                      <span className="text-[10px] text-emerald-600 font-bold">● All 100% Free</span>
                    </div>

                    {/* Group by category */}
                    {["Vision & Reverse", "Prompt Tools", "Document & PDF", "Text & AI", "AI Models"].map((catName) => {
                      const toolsInCat = ALL_SERVICES_CATALOG.filter((s) => s.category === catName);
                      if (toolsInCat.length === 0) return null;

                      return (
                        <div key={catName} className="mb-3">
                          <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            {catName}
                          </div>
                          <div className="space-y-1">
                            {toolsInCat.map((tool) => {
                              const isSelected = selectedService.id === tool.id;
                              return (
                                <button
                                  key={tool.id}
                                  type="button"
                                  onClick={() => {
                                    setSelectedService(tool);
                                    setServicesDropdownOpen(false);
                                    if (tool.isVisionTool && !uploadedImage) {
                                      fileInputRef.current?.click();
                                    }
                                  }}
                                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition cursor-pointer ${
                                    isSelected
                                      ? "bg-purple-50 text-[#8054ff] font-bold border border-purple-200/80"
                                      : "text-slate-700 hover:bg-slate-50"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                                      <ServiceBadgeIcon id={tool.id} className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-xs font-bold leading-tight">
                                        {tool.name}
                                      </span>
                                      <span className="text-[10px] text-slate-400 line-clamp-1">
                                        {tool.desc}
                                      </span>
                                    </div>
                                  </div>
                                  {isSelected && (
                                    <span className="w-2 h-2 rounded-full bg-[#8054ff] flex-shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    {/* Footer link to dedicated full page */}
                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <Link
                        href="/tools/image-to-prompt"
                        className="text-cyan-600 hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>Open Full Image-to-Prompt Page</span>
                        <ArrowUp className="w-3 h-3 rotate-45" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right: Purple "Create Prompt ->" Action Button */}
            <button
              type="submit"
              disabled={isLoading || (!inputTopic.trim() && !uploadedImage)}
              className={`h-11 px-6 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-200 ${
                isLoading
                  ? "bg-[#8054ff] text-white shadow-md opacity-90 cursor-wait"
                  : !inputTopic.trim() && !uploadedImage
                  ? "bg-[#8054ff]/60 text-white/80 cursor-not-allowed"
                  : "bg-[#8054ff] hover:bg-[#6f42f5] text-white shadow-md hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 cursor-pointer font-heading"
              }`}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Processing ({progress}%)...</span>
                </>
              ) : (
                <>
                  <span>Generate Prompt</span>
                  <ArrowUp className="w-4 h-4 rotate-45 stroke-[2.5]" />
                </>
              )}
            </button>
          </div>

          {/* 1% to 100% Progress Bar */}
          {isLoading && (
            <div className="w-full mt-3 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs font-semibold text-purple-600 mb-1.5 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                  Analyzing {selectedService.name}...
                </span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden p-0.5">
                <div 
                  className="bg-gradient-to-r from-[#8054ff] via-indigo-500 to-cyan-500 h-full rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </form>

      {/* 3. RESULT DISPLAY (Supports Both Multi-Model Vision and Single Model Prompt) */}
      {resultData && (
        <div className="w-full mt-6 rounded-3xl bg-white border-2 border-slate-200 p-5 sm:p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700 font-heading">
                {selectedService.name} Generated Successfully
              </span>
            </div>

            {/* Quick Copy Main Button */}
            <button
              onClick={() => handleCopy(resultData.prompt)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#8054ff] text-xs font-bold transition border border-purple-200/80 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>

          {/* If Multi-Model from Image Analysis */}
          {resultData.multiPrompts ? (
            <div className="space-y-4">
              {resultData.multiPrompts.summary && (
                <p className="text-xs text-slate-500 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  "{resultData.multiPrompts.summary}"
                </p>
              )}

              {/* Tabs for Midjourney, Flux, SDXL */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {resultData.multiPrompts.midjourney && (
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-bold text-slate-800">Midjourney v6</span>
                      <button
                        onClick={() => handleCopy(resultData.multiPrompts?.midjourney || "")}
                        className="text-[11px] text-purple-600 hover:underline font-semibold"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="text-xs font-mono text-slate-600 line-clamp-4 select-all">
                      {resultData.multiPrompts.midjourney}
                    </p>
                  </div>
                )}

                {resultData.multiPrompts.flux && (
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-bold text-slate-800">Flux.1 Schnell/Dev</span>
                      <button
                        onClick={() => handleCopy(resultData.multiPrompts?.flux || "")}
                        className="text-[11px] text-purple-600 hover:underline font-semibold"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="text-xs font-mono text-slate-600 line-clamp-4 select-all">
                      {resultData.multiPrompts.flux}
                    </p>
                  </div>
                )}

                {resultData.multiPrompts.stableDiffusion && (
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-bold text-slate-800">Stable Diffusion XL</span>
                      <button
                        onClick={() => handleCopy(resultData.multiPrompts?.stableDiffusion || "")}
                        className="text-[11px] text-purple-600 hover:underline font-semibold"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="text-xs font-mono text-slate-600 line-clamp-4 select-all">
                      {resultData.multiPrompts.stableDiffusion}
                    </p>
                  </div>
                )}
              </div>

              {resultData.multiPrompts.negative && (
                <div className="p-2.5 rounded-xl bg-rose-50/60 border border-rose-200/80 text-xs font-mono text-rose-800">
                  <span className="font-bold text-rose-900 block mb-0.5">Negative Prompt:</span>
                  {resultData.multiPrompts.negative}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed select-all">
              {resultData.prompt}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
