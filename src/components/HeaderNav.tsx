import React from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-white border border-slate-200 shadow-xs flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-icon.png"
              alt="aipromptgenerate logo"
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          <span className="font-extrabold text-base text-slate-900 tracking-tight">
            aiprompt<span className="text-blue-600">generate</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
            100% Free
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/tools/image-to-prompt"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-xs font-bold border border-cyan-200 transition"
          >
            <span>Image to Prompt</span>
            <span className="px-1 py-0.2 rounded bg-cyan-600 text-white text-[9px]">AI</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Generate Prompts</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
