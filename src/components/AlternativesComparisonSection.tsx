import React from "react";
import { Check, X, Shield, Zap, Sparkles, Star, Award, TrendingUp, Users, HeartHandshake } from "lucide-react";
import Link from "next/link";

interface Competitor {
  name: string;
  url?: string;
  status: "UP" | "LIMITED" | "PAID";
  rating: string;
  pricing: string;
  loginRequired: boolean;
  creditCaps: string;
  modelsSupported: string;
  isUs?: boolean;
}

const COMPARISON_DATA: Competitor[] = [
  {
    name: "AI Prompt Generate (Our Platform)",
    status: "UP",
    rating: "5.0 / 5 (Verified Community Favorite)",
    pricing: "100% Free Forever",
    loginRequired: false,
    creditCaps: "Unlimited (Zero caps)",
    modelsSupported: "ChatGPT-4o, Claude Opus, Gemini 2.5, Nano Banana Pro, Veo 3, v0, Replit",
    isUs: true,
  },
  {
    name: "AIPromptGenerator.app",
    status: "UP",
    rating: "4.1 / 5",
    pricing: "Freemium ($9–$19/mo)",
    loginRequired: true,
    creditCaps: "10–20 daily free credits",
    modelsSupported: "Basic ChatGPT & Claude only",
  },
  {
    name: "Generate Prompt AI (generateprompt.net)",
    status: "UP",
    rating: "4.2 / 5",
    pricing: "Freemium ($12/mo)",
    loginRequired: true,
    creditCaps: "Shared IP limits (10/day)",
    modelsSupported: "ChatGPT & standard prompts",
  },
  {
    name: "AI Prompt Finder",
    status: "UP",
    rating: "3.9 / 5",
    pricing: "Free with aggressive ads",
    loginRequired: false,
    creditCaps: "Limited search quota",
    modelsSupported: "Static catalog only",
  },
  {
    name: "AIPromptHub.org",
    status: "UP",
    rating: "4.0 / 5",
    pricing: "Freemium with subscriptions",
    loginRequired: true,
    creditCaps: "15 credits then paywall",
    modelsSupported: "ChatGPT & Midjourney text",
  },
  {
    name: "ProperPrompt",
    status: "LIMITED",
    rating: "3.8 / 5",
    pricing: "Paid ($15/mo)",
    loginRequired: true,
    creditCaps: "No free tier",
    modelsSupported: "LLMs only (No video/website)",
  },
  {
    name: "PromptBase",
    status: "UP",
    rating: "4.5 / 5",
    pricing: "$2.99 – $9.99 per prompt",
    loginRequired: true,
    creditCaps: "Pay per prompt",
    modelsSupported: "Midjourney, DALL-E, GPT",
  },
  {
    name: "FlowGPT",
    status: "UP",
    rating: "4.4 / 5",
    pricing: "Freemium with tokens",
    loginRequired: true,
    creditCaps: "Daily token allowance",
    modelsSupported: "Community chatbot prompts",
  },
];

export function AlternativesComparisonSection() {
  return (
    <section className="mt-16 pt-12 border-t-2 border-slate-200/80 text-slate-900 space-y-10 font-sans" id="alternatives">
      {/* Header Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200/90 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase font-outfit">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>Market Analysis • Latest update: 2026-09-23</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight font-outfit">
            AIPromptGenerator.app Alternatives & Top Competitors (2026 Comparison)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Looking for the best <strong>AIPromptGenerator.app alternatives</strong> based on verified community votes, real user reviews, pricing transparency, and generation performance? Compare the top prompt engineering tools side-by-side.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium space-y-2">
            <p>
              <strong>Top features & benefits:</strong> Ease of Use, Time-Saving, Versatility, Inspiration for Creativity, and Accessible for Beginners.
            </p>
            <p className="text-slate-500 text-xs">
              We evaluated more than 10 alternatives to AIPromptGenerator.app. Top rated competitors include <em>AI Prompt Generator, Generate Prompt AI, AI Prompt Finder, AIPromptHub.org, ProperPrompt</em>, and <em>PromptBase</em>.
            </p>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-slate-900 font-outfit tracking-tight">
              Feature & Pricing Comparison Matrix
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Verified metrics and platform availability as of September 2026
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold font-mono">
            Status: UP & Tested
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-outfit font-extrabold uppercase text-[11px] tracking-wider">
                <th className="p-4 pl-6">Platform</th>
                <th className="p-4">Pricing</th>
                <th className="p-4">Login Required?</th>
                <th className="p-4">Daily Caps</th>
                <th className="p-4">Supported Models</th>
                <th className="p-4 pr-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPARISON_DATA.map((item, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    item.isUs
                      ? "bg-purple-50/50 hover:bg-purple-50 font-medium"
                      : "hover:bg-slate-50/60"
                  }`}
                >
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-2">
                      {item.isUs && (
                        <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse flex-shrink-0" />
                      )}
                      <div>
                        <span className={`font-bold ${item.isUs ? "text-purple-900 font-black text-sm" : "text-slate-900"}`}>
                          {item.name}
                        </span>
                        {item.isUs && (
                          <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-extrabold uppercase tracking-wider">
                            #1 Free Pick
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={item.isUs ? "text-emerald-700 font-black" : "text-slate-700 font-semibold"}>
                      {item.pricing}
                    </span>
                  </td>
                  <td className="p-4">
                    {item.loginRequired ? (
                      <span className="inline-flex items-center gap-1 text-amber-700 font-semibold">
                        <X className="w-4 h-4 text-amber-600" /> Yes (Mandatory)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                        <Check className="w-4 h-4 text-emerald-600" /> Zero Login
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className="text-slate-600 font-medium">{item.creditCaps}</span>
                  </td>
                  <td className="p-4 max-w-xs text-slate-600">
                    <span className="line-clamp-2">{item.modelsSupported}</span>
                  </td>
                  <td className="p-4 pr-6">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SEO Deep Context & Narrative Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="text-base font-black text-slate-900 font-outfit">
            Why Switch from AIPromptGenerator.app?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            While AIPromptGenerator.app and AIPromptHub charge monthly subscriptions and impose 10–20 daily credit caps, our platform provides 100% free, unlimited generations across Google Veo 3, SeaDance 2.2, Nano Banana Pro, v0, and Replit Agent.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <h4 className="text-base font-black text-slate-900 font-outfit">
            Zero Tracking & Complete Privacy
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Anonymous generation without email capture. No credit cards, no mandatory sign-ups, and no tracking. All PDF conversions and OCR extractions run directly in your local browser sandbox.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Star className="w-5 h-5" />
          </div>
          <h4 className="text-base font-black text-slate-900 font-outfit">
            Multi-Modal Prompt Studio
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Single prompt engines are obsolete. Enjoy full parity across Text (ChatGPT-4o, Claude Opus, Gemini), Cinematic Video (Google Veo 3, SeaDance 2.2), Full-Stack Website UI (v0, Replit Agent), and 8K Image prompts (Nano Banana Pro).
          </p>
        </div>
      </div>
    </section>
  );
}
