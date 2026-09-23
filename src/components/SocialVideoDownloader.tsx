"use client";

import React, { useState } from "react";
import { Download, Sparkles, CheckCircle2, Film, Music, Shield, Play, RefreshCw, Copy, Check, ExternalLink } from "lucide-react";
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
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#ec4899", "#8b5cf6", "#3b82f6"]
      });
    } catch (err: any) {
      setError(err.message || "Failed to process video link. Please verify the URL.");
    } finally {
      setLoading(false);
    }
  };

  const triggerDirectDownload = (opt: DownloadOption, idx: number) => {
    setDownloadingIdx(idx);
    
    // Create direct client download anchor
    const link = document.createElement("a");
    link.href = opt.downloadUrl;
    link.target = "_blank";
    link.download = `social-video-${Date.now()}.${opt.type === "audio" ? "mp3" : "mp4"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingIdx(null);
    }, 1500);
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-12 bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200/90 shadow-xl relative overflow-hidden font-sans" id="social-video-downloader">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-200 text-purple-700 text-xs font-bold font-outfit uppercase tracking-wider">
          <Film className="w-3.5 h-3.5 text-pink-600" />
          <span>Universal Social Video Downloader (100% Free • No Watermark)</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-outfit tracking-tight leading-tight">
            Download Facebook, TikTok &amp; Instagram Videos in 1-Click
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            Paste any public video link from <strong>TikTok, Facebook Watch, Instagram Reels, YouTube Shorts, or X</strong>. Fast HD MP4 downloads with zero watermarks and zero registration.
          </p>
        </div>

        {/* Platform Icons Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 flex items-center gap-1.5">
            🎵 TikTok (No Watermark)
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 flex items-center gap-1.5">
            📷 Instagram Reels
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 flex items-center gap-1.5">
            📘 Facebook Video
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 flex items-center gap-1.5">
            ▶️ YouTube Shorts
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 flex items-center gap-1.5">
            🐦 X / Twitter Clips
          </span>
        </div>

        {/* Input Form */}
        <form onSubmit={handleDownloadCheck} className="max-w-2xl mx-auto pt-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-slate-50 border-2 border-slate-200 rounded-2xl focus-within:border-purple-600 focus-within:ring-4 focus-within:ring-purple-500/10 transition shadow-inner">
            <input
              type="url"
              required
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste Facebook, TikTok, Instagram or Shorts link here..."
              className="w-full px-4 py-3 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Get Video</span>
                </>
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold max-w-xl mx-auto">
            {error}
          </div>
        )}

        {/* Download Result Card */}
        {result && (
          <div className="mt-8 p-6 bg-slate-50 border-2 border-purple-200 rounded-3xl max-w-2xl mx-auto text-left space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-extrabold text-xs uppercase tracking-wider text-purple-700 font-mono">
                  {result.platform} Video Ready
                </span>
              </div>
              <span className="text-[11px] font-bold text-slate-400 font-mono">
                Duration: {result.duration}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative aspect-video w-full sm:w-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={result.thumbnail} alt={result.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/80 text-slate-900 flex items-center justify-center shadow">
                    <Play className="w-4 h-4 fill-slate-900 ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="space-y-1 w-full">
                <h3 className="font-black text-sm text-slate-900 font-outfit line-clamp-2">
                  {result.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Verified clean audio/video streams ready for instant download.
                </p>
              </div>
            </div>

            {/* Quality & Download Buttons */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                Select Quality &amp; Download:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {result.downloadOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => triggerDirectDownload(opt, idx)}
                    className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-purple-600 hover:shadow-md transition text-left cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-black text-slate-900 group-hover:text-purple-600">
                        <span>{opt.format}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">{opt.size}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 font-medium">{opt.quality}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600">
                      <span>{downloadingIdx === idx ? "Downloading..." : "Download"}</span>
                      <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
