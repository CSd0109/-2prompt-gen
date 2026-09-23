"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Wand2, Sparkles, Image, Video, Layout, Bot, FileText, CheckCircle2, 
  Search, ArrowRight, ChevronDown, ChevronUp, SlidersHorizontal, 
  HelpCircle, Shield, Copy, Check, Eye, ExternalLink, Cpu, Layers
} from "lucide-react";

interface AllServicesDashboardProps {
  onClose?: () => void;
  onSelectService?: (serviceName: string, category: string) => void;
}

export function AllServicesDashboard({ onClose, onSelectService }: AllServicesDashboardProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleToolClick = (name: string, cat: string) => {
    if (onSelectService) {
      onSelectService(name, cat);
    }
  };

  return (
    <div className="w-full bg-[#fcfcfd] border-2 border-slate-200/90 rounded-3xl p-5 sm:p-10 shadow-xl space-y-16 text-slate-800 font-sans my-8 animate-in fade-in zoom-in-95 duration-200">
      {/* 1. Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-outfit uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete 100% Free AI Tool Suite</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-outfit tracking-tight">
          Free AI Tools
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          Generate prompts for ChatGPT, Claude, Gemini, image, video, and website-building models; optimize or check existing instructions; humanize and analyze text; create images; or extract content from a reference image.
        </p>
      </div>

      {/* 2. Interactive Tool Grids (Exact replica of GeneratePrompt.net) */}
      <div className="space-y-10 max-w-6xl mx-auto">
        {/* A. Prompt Tools */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-outfit">
            Prompt Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { title: "AI Prompt Generator", icon: "✨", color: "text-purple-600", bg: "bg-purple-50", link: "/chatgpt-prompts" },
              { title: "AI Prompt Optimizer", icon: "⚡", color: "text-blue-600", bg: "bg-blue-50", link: "/gemini-prompts" },
              { title: "AI Image Prompt Generator", icon: "🖼️", color: "text-rose-600", bg: "bg-rose-50", link: "/nano-banana-pro-prompts" },
              { title: "AI Prompt Checker", icon: "🎯", color: "text-indigo-600", bg: "bg-indigo-50", link: "/chatgpt-prompts" },
              { title: "Image to Prompt Generator", icon: "📷", color: "text-amber-600", bg: "bg-amber-50", link: "/nano-banana-pro-prompts" },
            ].map((tool, idx) => (
              <Link
                key={idx}
                href={tool.link}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{tool.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {tool.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* B. Text Tools */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-outfit">
            Text Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { title: "AI Humanizer", icon: "🍃", color: "text-emerald-600", bg: "bg-emerald-50", link: "/chatgpt-prompts" },
              { title: "AI Text Detector", icon: "🛡️", color: "text-blue-600", bg: "bg-blue-50", link: "/chatgpt-prompts" },
            ].map((tool, idx) => (
              <Link
                key={idx}
                href={tool.link}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{tool.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {tool.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* C. Image Tools */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-outfit">
            Image Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "AI Image Generator", icon: "🎨", link: "/nano-banana-pro-prompts" },
              { title: "Nano Banana Image to Prompt", icon: "🍌", link: "/nano-banana-pro-prompts" },
              { title: "Image to Text Converter", icon: "📄", link: "/nano-banana-pro-prompts" },
            ].map((tool, idx) => (
              <Link
                key={idx}
                href={tool.link}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{tool.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {tool.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* D. Video Tools */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-outfit">
            Video Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "Google Veo 3 Video Generator", icon: "🎥", link: "/veo-video-prompts" },
              { title: "SeaDance 2.2 Fluid Physics", icon: "🌊", link: "/seadance-video-prompts" },
              { title: "Ready-Made Video Campaign Bundles", icon: "📦", link: "/video-campaign-bundles" },
            ].map((tool, idx) => (
              <Link
                key={idx}
                href={tool.link}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{tool.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {tool.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* E. Website Tools */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-outfit">
            Website Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "v0 by Vercel Website Prompts", icon: "💻", link: "/v0-website-prompts" },
              { title: "Replit Agent Full-Stack Prompts", icon: "⚡", link: "/replit-agent-prompts" },
              { title: "Claude Opus 5 UI Artifacts", icon: "📐", link: "/claude-opus-prompts" },
            ].map((tool, idx) => (
              <Link
                key={idx}
                href={tool.link}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{tool.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {tool.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* F. Model Tools */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-outfit">
            Model Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { title: "ChatGPT Prompt Generator", icon: "🟢", link: "/chatgpt-prompts" },
              { title: "DeepSeek Prompt Generator", icon: "🔵", link: "/chatgpt-prompts" },
              { title: "Claude Prompt Generator", icon: "🟠", link: "/claude-opus-prompts" },
              { title: "Gemini Prompt Generator", icon: "🟣", link: "/gemini-prompts" },
            ].map((tool, idx) => (
              <Link
                key={idx}
                href={tool.link}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{tool.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {tool.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Create, Check, and Transform AI Content Section */}
      <div className="border-t border-slate-200/80 pt-12 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit">
            Create, Check, and Transform AI Content
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl mx-auto">
            Use focused tools to build stronger prompts, generate visuals, review AI writing, improve natural language, and turn images into editable text or reusable prompt ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Generate Prompts and Images
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Turn a rough goal into a structured ChatGPT, Claude, Gemini, Nano Banana Pro, Veo 3, Runway, Kling, or website-building prompt, or create an AI image directly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              Review and Improve Prompts
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Identify missing context, ambiguous instructions, conflicting rules, weak constraints, and undefined output formats before you run a prompt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              Rewrite and Analyze Text
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Rewrite AI-assisted drafts with a more natural voice, or review text for common AI-writing patterns with an uncertainty-aware score.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              Extract Prompts or Text from Images
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Upload a screenshot, photo, scan, or visual reference to extract editable OCR text or create a detailed image prompt.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Why Use AI Prompt Generator Tools? Section */}
      <div className="border-t border-slate-200/80 pt-12 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit">
            Why Use AI Prompt Generator Tools?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl mx-auto">
            Each tool handles one defined job, helping you move from an idea, draft, or source image to a practical result with less setup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h4 className="font-bold text-sm text-slate-900">A Focused Workflow for Every Task</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Open the generator, optimizer, checker, detector, humanizer, or image utility that matches the task instead of configuring a generic workspace.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h4 className="font-bold text-sm text-slate-900">Text, Image, and Video Support</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Work with written ideas, finished drafts, screenshots, scans, and reference images across text, image, and video AI workflows.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h4 className="font-bold text-sm text-slate-900">100% Free Forever</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Zero credit caps, no subscription fees, no sign-up required. Unlimited prompt generation across all models.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h4 className="font-bold text-sm text-slate-900">Private & Anonymous</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Zero tracking, private local generation, and no personal data stored. 100% privacy-first design.
            </p>
          </div>
        </div>
      </div>

      {/* 5. How to Use These AI Tools (3 Steps) */}
      <div className="border-t border-slate-200/80 pt-12 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit">
            How to Use These AI Tools
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Match the tool to your goal, provide useful source material, and turn the result into a model-ready or publication-ready draft in three steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-black text-sm flex items-center justify-center mx-auto">
              1
            </div>
            <h4 className="font-extrabold text-base text-slate-900">1. Choose a Tool</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Choose a prompt generator, optimizer, checker, text analyzer, humanizer, AI image generator, or image extraction workflow.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-black text-sm flex items-center justify-center mx-auto">
              2
            </div>
            <h4 className="font-extrabold text-base text-slate-900">2. Add Your Text or Image</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Describe the goal and constraints, paste the draft you want to process, or upload a supported JPEG or PNG reference image.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-black text-sm flex items-center justify-center mx-auto">
              3
            </div>
            <h4 className="font-extrabold text-base text-slate-900">3. Review and Reuse the Result</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Verify the generated output against your source, copy it, and adapt any facts, constraints, or formatting before the next step.
            </p>
          </div>
        </div>
      </div>

      {/* 6. AI Tool Questions and Answers (Accordion FAQ) */}
      <div className="border-t border-slate-200/80 pt-12 max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit">
            AI Tool Questions and Answers
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Get direct answers about included AI tools, supported files, free usage, compatible models, customization, and private history.
          </p>
        </div>

        <div className="divide-y divide-slate-200 bg-white rounded-2xl border border-slate-200/80 px-6 py-2 shadow-xs">
          {[
            {
              q: "Which AI tools are included?",
              a: "Our suite includes AI Prompt Generator, Prompt Optimizer, Prompt Checker, AI Humanizer, AI Text Detector, AI Image Generator, Nano Banana Image to Prompt, Image to Text Converter, Video Prompt Generator, Website UI Generator, and model-specific generators for ChatGPT, Claude, DeepSeek, and Gemini."
            },
            {
              q: "Is this AI tool free?",
              a: "Yes, 100% completely free forever with zero login, zero credit limits, and no subscription paywalls."
            },
            {
              q: "Which input formats are supported?",
              a: "You can input raw text, system prompts, draft code, or upload JPG, PNG, and WebP reference images for reverse prompt engineering."
            },
            {
              q: "Which AI models can use these results?",
              a: "The outputs work seamlessly across ChatGPT-4o, Google Gemini 2.5 Flash/Pro, Claude 3.7 Sonnet, DeepSeek-R1, Google Veo 3, SeaDance 2.2, v0 by Vercel, and Nano Banana Pro."
            },
            {
              q: "Are my inputs and results saved or tracked?",
              a: "No. All prompt engineering runs locally and anonymously. We do not store your private prompts or require user accounts."
            },
            {
              q: "Can I edit the generated result?",
              a: "Yes, you can edit, tweak parameters, adapt variables, and 1-click copy the prompt directly to your clipboard."
            }
          ].map((item, idx) => (
            <div key={idx} className="py-4">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {item.q}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180 text-blue-600" : ""}`} />
              </button>
              {openFaq === idx && (
                <p className="mt-3 text-xs sm:text-sm text-slate-600 pl-9 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
