"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Upload,
  Sparkles,
  Copy,
  Check,
  Wand2,
  Image as ImageIcon,
  Zap,
  Layers,
  Camera,
  RefreshCw,
  Sliders,
  HelpCircle,
  FileCheck,
  Share2,
  Download,
} from "lucide-react";

interface PromptResult {
  summary: string;
  style: string;
  lighting: string;
  camera: string;
  colors: string[];
  tags: string[];
  prompts: {
    midjourney: string;
    flux: string;
    stableDiffusion: string;
    dalle: string;
    negative: string;
  };
}

export default function ImageToPromptPage() {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [customCommand, setCustomCommand] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const [result, setResult] = useState<PromptResult | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "midjourney" | "flux" | "sd" | "dalle">("all");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const processFile = (selectedFile: File) => {
    if (!selectedFile.type.startsWith("image/")) {
      alert("Please upload a valid image file (PNG, JPG, WEBP).");
      return;
    }
    if (selectedFile.size > 15 * 1024 * 1024) {
      alert("Image size should be less than 15MB.");
      return;
    }

    setFile(selectedFile);
    setResult(null);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const triggerAnalysis = async (overrideCommand?: string) => {
    if (!imagePreview) return;

    setLoading(true);
    setProgress(5);
    setStatusMessage("Scanning image structure...");

    // Smooth real-time progress simulation while API processes
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 30) {
          setStatusMessage("Analyzing visual composition, lighting & depth...");
          return prev + 5;
        } else if (prev < 65) {
          setStatusMessage("Detecting artistic medium, art style & textures...");
          return prev + 4;
        } else if (prev < 90) {
          setStatusMessage("Synthesizing Midjourney, Flux & SDXL parameters...");
          return prev + 2;
        }
        return prev;
      });
    }, 180);

    try {
      const instructionText = overrideCommand !== undefined ? overrideCommand : customCommand;

      const res = await fetch("/api/image-to-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: imagePreview,
          mimeType: file?.type || "image/jpeg",
          instruction: instructionText,
        }),
      });

      clearInterval(progressInterval);

      if (!res.ok) {
        throw new Error("Failed to generate prompts. Please try again.");
      }

      const json = await res.json();
      if (!json.success || !json.data) {
        throw new Error(json.error || "Could not analyze image.");
      }

      // Complete to 100%
      setProgress(100);
      setStatusMessage("100% Complete! Prompts Generated.");

      setTimeout(() => {
        setResult(json.data);
        setLoading(false);
        setProgress(0);
      }, 400);
    } catch (err: any) {
      clearInterval(progressInterval);
      setLoading(false);
      setProgress(0);
      alert(err.message || "An error occurred while generating prompt.");
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Badge */}
      <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-300 font-medium">Tools</span>
          <span>/</span>
          <span className="text-cyan-400 font-medium">Image to Prompt</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5" /> 100% Free & Unlimited
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
          AI Image to Prompt Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          Upload or drag any image. Get exact, high-precision reverse prompts for{" "}
          <span className="text-cyan-300 font-semibold">Midjourney v6</span>,{" "}
          <span className="text-purple-300 font-semibold">Flux.1</span>, and{" "}
          <span className="text-pink-300 font-semibold">Stable Diffusion</span> in seconds.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Drag & Drop + Command Box */}
        <div className="lg:col-span-5 space-y-5">
          {/* Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-2xl p-6 transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer min-h-[300px] overflow-hidden ${
              isDragging
                ? "border-cyan-400 bg-cyan-950/20 scale-[1.01]"
                : imagePreview
                ? "border-slate-700 bg-slate-900/60 hover:border-slate-600"
                : "border-slate-800 bg-slate-900/30 hover:border-cyan-500/50 hover:bg-slate-900/50"
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*"
              className="hidden"
            />

            {imagePreview ? (
              <div className="relative w-full h-full flex flex-col items-center">
                <img
                  src={imagePreview}
                  alt="Uploaded target"
                  className="max-h-64 object-contain rounded-xl shadow-lg border border-slate-700/50"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/90 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Change Image
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400">
                  <Upload className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-200">
                    Drag & Drop image here
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Supports JPG, PNG, WEBP up to 15MB
                  </p>
                </div>
                <div className="inline-block px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition">
                  Browse Files
                </div>
              </div>
            )}
          </div>

          {/* Custom Instruction Command Box */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Optional Instruction / Command:
            </label>
            <div className="relative">
              <input
                type="text"
                value={customCommand}
                onChange={(e) => setCustomCommand(e.target.value)}
                placeholder="e.g. Remove background and make it cinematic anime style..."
                className="w-full bg-slate-950 border border-slate-700/70 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition"
              />
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {[
                "Exact replica prompt",
                "Remove background",
                "Convert to Cyberpunk",
                "Make it 3D Pixar style",
              ].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => setCustomCommand(cmd)}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition"
                >
                  + {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button & Progress Line */}
          <div>
            <button
              onClick={() => triggerAnalysis()}
              disabled={!imagePreview || loading}
              className={`w-full py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2.5 shadow-lg transition-all text-sm sm:text-base ${
                !imagePreview
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50"
                  : loading
                  ? "bg-cyan-600/70 text-white cursor-wait"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.99]"
              }`}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating Prompts...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Prompts Now
                </>
              )}
            </button>

            {/* Real-time Progress Bar (1%, 2%, ... 100%) */}
            {loading && (
              <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30">
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-cyan-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    {statusMessage}
                  </span>
                  <span className="text-cyan-300 font-mono text-sm">{progress}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 h-full rounded-full transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Prompts Output & Specifications */}
        <div className="lg:col-span-7">
          {result ? (
            <div className="space-y-6">
              {/* Image Visual Breakdown Badges */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                    Aesthetic Analysis
                  </h3>
                  <p className="mt-1 text-sm text-slate-200 italic">
                    "{result.summary}"
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" /> Art Style
                    </span>
                    <p className="text-xs font-medium text-slate-200 mt-1 truncate">
                      {result.style}
                    </p>
                  </div>

                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> Lighting
                    </span>
                    <p className="text-xs font-medium text-slate-200 mt-1 truncate">
                      {result.lighting}
                    </p>
                  </div>

                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5 text-purple-400" /> Optics / Cam
                    </span>
                    <p className="text-xs font-medium text-slate-200 mt-1 truncate">
                      {result.camera}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                {result.tags && result.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {result.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Live AI Clone Preview using FLUX.1 Engine */}
              {result.prompts && (
                <div className="bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-slate-900 border border-cyan-500/30 rounded-2xl p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-bold text-white tracking-wide">
                        Live AI Clone Preview (FLUX.1 Engine)
                      </span>
                    </div>
                    <a
                      href={`https://image.pollinations.ai/prompt/${encodeURIComponent((result.prompts.flux || result.prompts.midjourney || "").slice(0, 400))}?width=1024&height=1024&model=flux-realism&nologo=true&enhance=true`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition"
                    >
                      <Download className="w-3.5 h-3.5" /> Download High-Res
                    </a>
                  </div>
                  <div className="relative rounded-xl overflow-hidden bg-black/60 aspect-video max-h-[340px] flex items-center justify-center border border-slate-800">
                    <img
                      src={`https://image.pollinations.ai/prompt/${encodeURIComponent((result.prompts.flux || result.prompts.midjourney || "").slice(0, 400))}?width=1024&height=1024&model=flux-realism&nologo=true&enhance=true`}
                      alt="AI Generated Visual Clone"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* Model Cards */}
              <div className="space-y-4">
                {/* 1. Midjourney v6 */}
                <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 transition">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      <span className="text-sm font-bold text-white tracking-wide">
                        Midjourney v6.0 Prompt
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(result.prompts.midjourney, "mj")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold transition"
                    >
                      {copiedKey === "mj" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Prompt
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800/90 font-mono text-xs text-slate-300 leading-relaxed select-all">
                    {result.prompts.midjourney}
                  </div>
                </div>

                {/* 2. Flux.1 */}
                <div className="bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-5 transition">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                      <span className="text-sm font-bold text-white tracking-wide">
                        Flux.1 Schnell / Dev Prompt
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(result.prompts.flux, "flux")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-semibold transition"
                    >
                      {copiedKey === "flux" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Prompt
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800/90 font-mono text-xs text-slate-300 leading-relaxed select-all">
                    {result.prompts.flux}
                  </div>
                </div>

                {/* 3. Stable Diffusion XL */}
                <div className="bg-slate-900/80 border border-slate-800 hover:border-pink-500/40 rounded-2xl p-5 transition">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                      <span className="text-sm font-bold text-white tracking-wide">
                        Stable Diffusion XL (SDXL)
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(result.prompts.stableDiffusion, "sd")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 text-xs font-semibold transition"
                    >
                      {copiedKey === "sd" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Prompt
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800/90 font-mono text-xs text-slate-300 leading-relaxed select-all">
                    {result.prompts.stableDiffusion}
                  </div>
                </div>

                {/* 4. Negative Prompt */}
                {result.prompts.negative && (
                  <div className="bg-slate-900/60 border border-rose-900/30 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                        Negative Prompt (To avoid flaws & blur)
                      </span>
                      <button
                        onClick={() => handleCopy(result.prompts.negative, "neg")}
                        className="text-xs text-rose-400 hover:text-rose-300 transition"
                      >
                        {copiedKey === "neg" ? "Copied!" : "Copy Negative"}
                      </button>
                    </div>
                    <div className="bg-slate-950/80 rounded-lg p-2.5 border border-rose-950 text-xs font-mono text-slate-400 select-all">
                      {result.prompts.negative}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="border border-slate-800/80 bg-slate-900/30 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[460px]">
              <div className="w-16 h-16 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 mb-4">
                <Wand2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-200">
                Ready to extract AI prompts
              </h3>
              <p className="text-sm text-slate-400 max-w-sm mt-1.5">
                Drop your image on the left, type any specific modification request if needed, and hit Generate.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-left w-full max-w-md">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  ✨ <strong>4 Models at once</strong> (Midjourney, Flux, SDXL, DALL-E)
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  ⚡ <strong>Lens & Lighting detection</strong> (Aesthetic tags)
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SEO Content & FAQ Section (For Google Search #1 Ranking) */}
      <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-slate-800 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-white">
            What is Image to Prompt Generator?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            The AI Image to Prompt Generator is a high-speed reverse engineering tool that converts any uploaded picture, digital illustration, 3D render, or photograph into comprehensive, fine-tuned text prompts. Using next-generation Computer Vision models, it inspects every pixel to extract lighting setups, camera lenses, artistic genres, and composition styles for seamless reproduction in Midjourney, Flux.1, and Stable Diffusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-base font-semibold text-cyan-400">1. Upload Image</h3>
            <p className="text-xs text-slate-400 mt-2">
              Drag and drop any JPG, PNG or WEBP image. No account or signup required.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-base font-semibold text-purple-400">2. Real-time Analysis</h3>
            <p className="text-xs text-slate-400 mt-2">
              Watch real-time percentage loading as the vision model extracts aesthetics and parameters.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-base font-semibold text-pink-400">3. 1-Click Copy</h3>
            <p className="text-xs text-slate-400 mt-2">
              Copy fully optimized prompts formatted for Midjourney v6, Flux, or SDXL directly.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-sm font-semibold text-slate-200">
                Is this Image to Prompt tool 100% free?
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Yes! You can convert unlimited images into prompts without any subscriptions, tokens, or paywalls.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-sm font-semibold text-slate-200">
                Can I give custom commands like "remove background"?
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Absolutely. You can type any command in the instruction box, such as "remove background", "make it cyberpunk anime style", or "convert to oil painting", and the prompt will be generated according to your instructions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-sm font-semibold text-slate-200">
                Which AI image generators are supported?
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                The generated prompts work seamlessly with Midjourney v5/v6, Flux.1 (Schnell & Dev), Stable Diffusion XL, DALL-E 3, Leonardo AI, and Adobe Firefly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
