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

  return (
    <section className="w-full max-w-4xl mx-auto my-2 sm:my-8" id="social-video-downloader">
      {/* Mobile ultra-clean card & desktop card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden font-sans">
        
        {/* Title Bar: Mobile clean "Video Link to Download" */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight font-outfit">
              Video link to download
            </h2>
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Free HD
          </span>
        </div>

        {/* Input Form: Zero extra buttons or distracting labels */}
        <form onSubmit={handleDownloadCheck} className="w-full">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1 sm:p-1.5 bg-slate-50 border-2 border-slate-200 rounded-xl sm:rounded-2xl focus-within:border-blue-600 focus-within:bg-white transition">
            <input
              type="url"
              required
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste Facebook, TikTok, Instagram or Shorts link here..."
              className="w-full px-3 py-2.5 sm:py-2.5 bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Fetching...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </>
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-2.5 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
            {error}
          </div>
        )}

        {/* Download Result Card */}
        {result && (
          <div className="mt-4 p-3.5 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="font-extrabold text-[11px] uppercase tracking-wider text-blue-700 font-mono">
                ✓ {result.platform} Video Ready
              </span>
              <span className="text-[10px] font-bold text-slate-400 font-mono">
                {result.duration}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative aspect-video w-20 sm:w-32 rounded-lg overflow-hidden bg-slate-900 border border-slate-200 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={result.thumbnail} alt={result.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white text-white drop-shadow" />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-black text-xs sm:text-sm text-slate-900 font-outfit line-clamp-2">
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
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-600 transition text-left cursor-pointer flex items-center justify-between group active:scale-95"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-xs font-bold text-slate-900 block truncate">{opt.quality}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{opt.format} • {opt.size}</span>
                  </div>
                  <Download className="w-4 h-4 text-blue-600 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
