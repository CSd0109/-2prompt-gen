"use client";

import React, { useState } from "react";
import { Download, Film, Play, RefreshCw, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface DownloadOption {
  quality: string;
  format: string;
  size: string;
  downloadUrl: string;
  type: string;
}

export function SocialVideoDownloader() {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    platform: string;
    platformIcon: string;
    title: string;
    duration: string;
    thumbnail: string;
    downloadOptions: DownloadOption[];
  } | null>(null);

  const [downloadingIdx, setDownloadingIdx] = useState<number | null>(null);

  const handleDownloadCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/download-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: videoUrl.trim() }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Unable to parse video link.");
      }

      setResult(data);
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.5 },
        colors: ["#2563eb", "#ec4899", "#8b5cf6"],
      });
    } catch (err: any) {
      setError(err.message || "Failed to process video link. Please verify the URL.");
    } finally {
      setLoading(false);
    }
  };

  const triggerDirectDownload = (opt: DownloadOption, idx: number) => {
    setDownloadingIdx(idx);

    const link = document.createElement("a");
    link.href = opt.downloadUrl;
    link.target = "_blank";
    link.download = `video-${Date.now()}.${opt.type === "audio" ? "mp3" : "mp4"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingIdx(null);
    }, 1500);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setVideoUrl(text.trim());
    } catch {
      // fallback if clipboard permission denied
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-3 px-2 sm:px-0" id="social-video-downloader">
      {/* Spacious, modern, and highly professional Downloader Studio Box */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm sm:shadow-[0_10px_35px_-8px_rgba(0,0,0,0.06)] font-sans transition-all">
        
        {/* Professional Header & Supported Platforms */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
              <Download className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight font-heading flex items-center gap-2">
                <span>Social Video Downloader</span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" /> No Watermark
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                Download TikTok, Facebook Reels, Instagram & YouTube Shorts in HD 1080p
              </p>
            </div>
          </div>

          {/* Social Platform Badges */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200/80 transition flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]" /> TikTok
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200/80 transition flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1877f2]" /> Facebook
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200/80 transition flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E1306C]" /> Instagram
            </span>
            <span className="hidden md:inline-flex px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-[11px] font-medium border border-slate-200/80 items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" /> Shorts
            </span>
          </div>
        </div>

        {/* Input Form: Large, Spacious, Clean & Ergonomic */}
        <form onSubmit={handleDownloadCheck} className="w-full">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 sm:p-2 bg-slate-50/90 border-2 border-slate-200/90 rounded-2xl focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 transition-all duration-200 shadow-2xs">
            <div className="flex items-center flex-1 min-w-0 px-2 sm:px-3">
              <Film className="w-4 h-4 text-slate-400 mr-2.5 flex-shrink-0" />
              <input
                type="url"
                required
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Paste video link here (e.g. https://www.tiktok.com/@user/video/...)"
                className="w-full py-2 bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 font-normal focus:outline-none"
              />
              {/* One-click Paste Button */}
              {!videoUrl && (
                <button
                  type="button"
                  onClick={handlePaste}
                  title="Paste from clipboard"
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200 shadow-2xs transition active:scale-95 flex-shrink-0 mr-1 cursor-pointer"
                >
                  Paste
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-11 sm:h-12 px-6 sm:px-8 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 font-heading"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Processing HD Video...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 stroke-[2.2]" />
                  <span>Download Video</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Free & No Login Subtitle Pill */}
        <div className="flex items-center justify-between pt-2.5 px-1 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            100% Free • Unlimited Downloads • Zero Ads Watermark
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-slate-400">
            MP4 (1080p, 720p, 480p) + MP3 Audio
          </span>
        </div>

        {error && (
          <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Download Result Card */}
        {result && (
          <div className="mt-4 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-3 shadow-2xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="font-bold text-xs text-blue-600 flex items-center gap-1.5 font-heading">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{result.platform} Video Ready for Download</span>
              </span>
              <span className="text-[11px] text-slate-500 font-mono font-medium">
                Duration: {result.duration}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative aspect-video w-20 sm:w-28 rounded-lg overflow-hidden bg-slate-900 border border-slate-200 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={result.thumbnail} alt={result.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white text-white drop-shadow" />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-xs sm:text-sm text-slate-800 line-clamp-2">
                  {result.title}
                </h3>
              </div>
            </div>

            {/* Quality & Download Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              {result.downloadOptions.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => triggerDirectDownload(opt, idx)}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-500 transition text-left cursor-pointer flex items-center justify-between group active:scale-95"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-xs font-medium text-slate-800 block truncate">{opt.quality}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{opt.format} • {opt.size}</span>
                  </div>
                  <Download className="w-4 h-4 text-blue-500 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
