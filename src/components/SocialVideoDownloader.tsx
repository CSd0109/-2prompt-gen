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

    // Smart link extraction (handles mobile share text like "Check this out: https://vt.tiktok.com/...")
    let cleanUrl = videoUrl.trim();
    const extracted = cleanUrl.match(/https?:\/\/[^\s]+/i);
    if (extracted) {
      cleanUrl = extracted[0];
    } else if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      cleanUrl = "https://" + cleanUrl;
    }

    try {
      const res = await fetch("/api/download-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: cleanUrl }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Unable to parse video link. Please verify the URL is public.");
      }

      setResult(data);
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.5 },
        colors: ["#2563eb", "#ec4899", "#8b5cf6"],
      });
    } catch (err: any) {
      setError(err.message || "Failed to process video link. Please verify the URL is a public video.");
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
    <section className="w-full max-w-4xl mx-auto my-6 px-3 sm:px-0" id="social-video-downloader">
      {/* Clean, Prominent & Spacious Video Link Input Box */}
      <form onSubmit={handleDownloadCheck} className="w-full">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2 sm:p-2.5 bg-white border-2 border-slate-200/90 rounded-2xl sm:rounded-full shadow-md hover:border-purple-300 focus-within:border-[#8054ff] focus-within:ring-4 focus-within:ring-purple-500/15 transition-all duration-200">
          <div className="flex items-center flex-1 min-w-0 px-4 py-1 sm:py-1.5">
            <Film className="w-5 h-5 text-slate-400 mr-3.5 flex-shrink-0" />
            <input
              type="text"
              inputMode="url"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
              required
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste video link (TikTok, Instagram, YouTube, Facebook, Twitter)..."
              className="w-full py-2 bg-transparent text-sm sm:text-base text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none"
            />
            {/* One-click Paste Button */}
            {!videoUrl && (
              <button
                type="button"
                onClick={handlePaste}
                title="Paste from clipboard"
                className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold border border-slate-200 transition active:scale-95 flex-shrink-0 mr-1 cursor-pointer"
              >
                Paste
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-12 sm:h-13 px-8 sm:px-10 rounded-full bg-[#8054ff] hover:bg-[#6f42f5] text-white font-bold text-sm sm:text-base transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2.5 cursor-pointer flex-shrink-0 font-sans disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 stroke-[2.4]" />
                <span>Download</span>
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-3 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium flex items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
            <span className="truncate">{error}</span>
          </div>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-rose-500 hover:text-rose-700 text-xs font-bold px-2 py-0.5"
          >
            ✕
          </button>
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
    </section>
  );
}
