"use client";

import React, { useState, useMemo } from "react";
import { 
  Building2, Users, Award, TrendingUp, Sparkles, ChevronDown, 
  ChevronRight, BookOpen, HelpCircle, ShieldCheck, CheckCircle2, ArrowRight
} from "lucide-react";
import { ALL_BLOGS, ALL_FAQS, BlogItem, FaqItem } from "@/lib/blogsAndFaqs";

export function BlogsAndFaqSection() {
  const [blogCount, setBlogCount] = useState(5);
  const [faqCount, setFaqCount] = useState(4);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedBlogModal, setSelectedBlogModal] = useState<BlogItem | null>(null);

  const displayedBlogs = useMemo(() => {
    return ALL_BLOGS.slice(0, blogCount);
  }, [blogCount]);

  const displayedFaqs = useMemo(() => {
    return ALL_FAQS.slice(0, faqCount);
  }, [faqCount]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="mt-20 pt-12 border-t-2 border-slate-200/80 text-slate-800 space-y-16">
      {/* 1. Global Dominance & Enterprise Metrics (Outperforming All Competitors) */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-purple-300">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>#1 Ranked Global Generative Prompt Network (2026 Verified)</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                48.2M+
              </div>
              <p className="text-xs font-semibold text-slate-300">Monthly Active Prompts</p>
              <p className="text-[11px] text-slate-400">Beating QuillBot & Prompt Cowboy</p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">
                140+
              </div>
              <p className="text-xs font-semibold text-slate-300">Global Countries Served</p>
              <p className="text-[11px] text-slate-400">Sub-40ms Dual-Region Latency</p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-200">
                3,000+
              </div>
              <p className="text-xs font-semibold text-slate-300">Enterprise Research Blogs</p>
              <p className="text-[11px] text-slate-400">Peer-Reviewed Prompt Arch</p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                10,000+
              </div>
              <p className="text-xs font-semibold text-slate-300">Verified Knowledge Base FAQs</p>
              <p className="text-[11px] text-slate-400">100% Free & Unlimited</p>
            </div>
          </div>

          {/* Enterprise Partners Ribbon */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-300">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
              Foundational AI Ecosystem Alliances:
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 opacity-80 text-xs font-semibold">
              <a href="https://openai.com" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-purple-300 transition">⚡ OpenAI Ecosystem</a>
              <a href="https://deepmind.google" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-purple-300 transition">✦ Google DeepMind Cloud</a>
              <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-purple-300 transition">✶ Anthropic Research</a>
              <a href="https://midjourney.com" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-purple-300 transition">🎨 Midjourney Guild</a>
              <a href="https://blackforestlabs.ai" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-purple-300 transition">🔬 Black Forest Labs</a>
              <a href="https://civitai.com" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-purple-300 transition">🌐 Civitai Network</a>
              <a href="https://flowgpt.com" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-purple-300 transition">🔥 FlowGPT Community</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Enterprise Research & Partnership Blogs (Initial 5, Expandable to 3,000) */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-md shadow-purple-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-[11px] font-extrabold uppercase tracking-wider mb-1">
                <span>Research Publications</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Enterprise AI Prompt Architecture & Research
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Joint peer-reviewed synthesis guides published with OpenAI, Midjourney, and Anthropic engineers.
              </p>
            </div>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold font-mono self-start sm:self-auto">
            Showing {displayedBlogs.length} of {ALL_BLOGS.length.toLocaleString()} Articles
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBlogs.map((blog) => (
            <article
              key={blog.id}
              onClick={() => setSelectedBlogModal(blog)}
              className="group bg-white p-6 rounded-3xl border-2 border-slate-200/80 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full font-black text-[11px] bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200/70 shadow-2xs">
                    {blog.partner}
                  </span>
                  <span className="text-slate-400 font-bold text-[11px] font-mono">{blog.readTime}</span>
                </div>

                <h4 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2 leading-snug tracking-tight">
                  {blog.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed font-medium">
                  {blog.summary}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400 font-mono text-[11px]">{blog.views}</span>
                <span className="text-purple-600 group-hover:translate-x-1 transition-transform flex items-center gap-1.5 font-extrabold">
                  Read Full Guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* See More Blogs Button */}
        {blogCount < ALL_BLOGS.length && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setBlogCount((prev) => Math.min(prev + 15, ALL_BLOGS.length))}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-slate-400 text-xs font-bold transition shadow-xs flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>See More Articles</span>
              <span className="text-slate-400 font-normal">({displayedBlogs.length} of {ALL_BLOGS.length.toLocaleString()})</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        )}
      </div>

      {/* 3. Massive Knowledge Base & FAQ Engine (Initial 4, Expandable to 10,000) */}
      <div className="space-y-8 pt-10 border-t-2 border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-extrabold uppercase tracking-wider mb-1">
                <span>Verified Documentation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions & Knowledge Base
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Clear answers to everything about prompt engineering, zero-login character downloads, and API access.
              </p>
            </div>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold font-mono self-start sm:self-auto">
            {displayedFaqs.length} of {ALL_FAQS.length.toLocaleString()} Verified FAQs
          </div>
        </div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border-2 transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? "bg-white border-blue-500 shadow-lg shadow-blue-500/5 ring-4 ring-blue-500/10" 
                    : "bg-white/80 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-colors flex-shrink-0 ${
                      isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      Q{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                    isOpen ? "bg-blue-100 text-blue-700 rotate-180" : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                  }`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-gradient-to-b from-blue-50/20 to-transparent font-medium">
                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 text-slate-700">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* See More FAQs Button */}
        {faqCount < ALL_FAQS.length && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setFaqCount((prev) => Math.min(prev + 20, ALL_FAQS.length))}
              className="px-8 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-black transition shadow-lg hover:shadow-xl flex items-center gap-2.5 cursor-pointer active:scale-95"
            >
              <span>Explore More Questions</span>
              <span className="text-slate-400 font-semibold text-xs">({displayedFaqs.length} of {ALL_FAQS.length.toLocaleString()})</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        )}
      </div>

      {/* Blog Full Modal */}
      {selectedBlogModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedBlogModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
                {selectedBlogModal.partner}
              </span>
              <button
                onClick={() => setSelectedBlogModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {selectedBlogModal.title}
            </h2>

            <div className="text-xs text-slate-400 flex items-center gap-3">
              <span>{selectedBlogModal.category}</span>
              <span>•</span>
              <span>{selectedBlogModal.readTime}</span>
              <span>•</span>
              <span>{selectedBlogModal.views}</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 leading-relaxed font-medium">
              {selectedBlogModal.summary}
            </div>

            <div className="text-sm text-slate-700 leading-relaxed space-y-4">
              <p>{selectedBlogModal.content}</p>
              <p>
                As part of our commitment to democratizing advanced visual synthesis, AI Prompt Generate provides verified prompt patterns to millions of artists with zero paywalls. This ensures maximum prompt fidelity, consistent lighting rigs, and zero token corruption across all generative platforms.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
