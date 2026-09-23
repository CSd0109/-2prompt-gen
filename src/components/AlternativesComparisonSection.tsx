import React from "react";
import { Check, X, Shield, Zap, Sparkles, Star, Award, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Competitor {
  name: string;
  category: string;
  status: "UP" | "ERROR / BROKEN" | "PAID / LIMITED";
  rating: string;
  pricing: string;
  loginRequired: boolean;
  creditCaps: string;
  keyFeatures: string;
  errorNote?: string;
  isUs?: boolean;
}

const ALL_COMPETITORS: Competitor[] = [
  {
    name: "AI Prompt Generate (Our Platform)",
    category: "Full Multi-Modal AI Suite",
    status: "UP",
    rating: "5.0 / 5 (Community Choice)",
    pricing: "100% Free Forever",
    loginRequired: false,
    creditCaps: "Unlimited (Zero caps)",
    keyFeatures: "Instant 1-Click Copy, Zero Registration Required, No Error 4.22.2, Full Multi-Model Parity (ChatGPT-4o, Claude Opus, Gemini 2.5, Nano Banana Pro, Google Veo 3, SeaDance 2.2, v0, Replit)",
    isUs: true,
  },
  {
    name: "ProperPrompt",
    category: "Prompt Rewrite",
    status: "ERROR / BROKEN",
    rating: "3.2 / 5",
    pricing: "Freemium ($15/mo)",
    loginRequired: true,
    creditCaps: "Registration Blocked",
    keyFeatures: "Per-platform rewrites, Prompt Organization, Version Control",
    errorNote: "Registration Broken: Users receive 'We can't support your registration right now. Please try again later. (Error 4.22.2)'.",
  },
  {
    name: "PromptProGen",
    category: "Prompt Generation",
    status: "PAID / LIMITED",
    rating: "4.1 / 5",
    pricing: "$19 / Month",
    loginRequired: true,
    creditCaps: "Restricted free tier",
    keyFeatures: "Streamlined prompt creation, Beginner friendly, Output scoring",
  },
  {
    name: "AIPromptGenerator.app",
    category: "Prompt Tools",
    status: "PAID / LIMITED",
    rating: "4.1 / 5",
    pricing: "$9 - $19 / Month",
    loginRequired: true,
    creditCaps: "10-20 daily uses then paywall",
    keyFeatures: "Ease of Use, Time-Saving, Versatility, Inspiration for Creativity",
  },
  {
    name: "BestPromptGen",
    category: "Prompt Builder",
    status: "PAID / LIMITED",
    rating: "3.9 / 5",
    pricing: "$12.99 / Month",
    loginRequired: true,
    creditCaps: "Subscription mandatory",
    keyFeatures: "Specialized Prompt Generation, JSON prompts, Guided structure",
  },
  {
    name: "Generate Prompt AI (generateprompt.net)",
    category: "Gallery & Prompts",
    status: "PAID / LIMITED",
    rating: "4.2 / 5",
    pricing: "Freemium ($12/mo)",
    loginRequired: true,
    creditCaps: "Shared IP limits (10/day)",
    keyFeatures: "Text and image prompt dashboard, OCR text tool",
  },
  {
    name: "PromptGenerator.org",
    category: "Multi-Model Prompts",
    status: "UP",
    rating: "4.0 / 5",
    pricing: "Freemium",
    loginRequired: true,
    creditCaps: "Daily credit allowance",
    keyFeatures: "ChatGPT, Flux AI, Veo3 templates, Video prompts",
  },
  {
    name: "Prompt-Genie.app",
    category: "Prompt Optimizer",
    status: "PAID / LIMITED",
    rating: "3.8 / 5",
    pricing: "Freemium",
    loginRequired: true,
    creditCaps: "Token limitations",
    keyFeatures: "Prompt Optimization, Ease of Use, Time Saving",
  },
  {
    name: "PromptMuse.net",
    category: "Image Prompts",
    status: "UP",
    rating: "3.9 / 5",
    pricing: "Ad-supported",
    loginRequired: false,
    creditCaps: "Search quota limit",
    keyFeatures: "Stable Diffusion, ChatGPT prompt generator",
  },
  {
    name: "PromptPerfect",
    category: "Prompt Engineering",
    status: "PAID / LIMITED",
    rating: "4.3 / 5",
    pricing: "Usage-based tokens ($9.99+)",
    loginRequired: true,
    creditCaps: "Credits consumed per prompt",
    keyFeatures: "Multi-Model Compatibility, Performance Analytics, Debugging",
  },
  {
    name: "Promptify.pro",
    category: "AI Workflows",
    status: "PAID / LIMITED",
    rating: "3.7 / 5",
    pricing: "Paid subscription",
    loginRequired: true,
    creditCaps: "No free tier",
    keyFeatures: "Enhance workflow with AI prompts",
  },
  {
    name: "PromptsGenii",
    category: "Visual Prompts",
    status: "UP",
    rating: "3.8 / 5",
    pricing: "Freemium",
    loginRequired: true,
    creditCaps: "Daily limit",
    keyFeatures: "Visual prompt crafting, Community public prompts",
  },
  {
    name: "TrustPrompt by Futurion Solutions",
    category: "Enterprise Compliance",
    status: "PAID / LIMITED",
    rating: "4.0 / 5",
    pricing: "Enterprise quote",
    loginRequired: true,
    creditCaps: "Enterprise licensing",
    keyFeatures: "GDPR, EU AI Act, ISO 27001, SOC 2 compliance boundary",
  },
  {
    name: "No Prompt Injections",
    category: "AI Security",
    status: "UP",
    rating: "4.2 / 5",
    pricing: "Freemium developer API",
    loginRequired: true,
    creditCaps: "API request tiers",
    keyFeatures: "Security guardrails against prompt injection attacks",
  },
  {
    name: "AI Prompt Finder",
    category: "Prompt Directory",
    status: "UP",
    rating: "3.9 / 5",
    pricing: "Free with ads",
    loginRequired: false,
    creditCaps: "Limited search quota",
    keyFeatures: "Searchable prompt directory",
  },
  {
    name: "AIPromptHub.org",
    category: "Prompt Marketplace",
    status: "PAID / LIMITED",
    rating: "4.0 / 5",
    pricing: "Freemium with subscriptions",
    loginRequired: true,
    creditCaps: "15 credits then paywall",
    keyFeatures: "ChatGPT & Midjourney text prompts",
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
            <span>Competitive Intelligence & Alternatives Directory • Latest update: 2026-09-23</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight font-outfit">
            ProperPrompt & AIPromptGenerator.app Alternatives & Top Competitors
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Looking for working <strong>ProperPrompt alternatives</strong> and <strong>AIPromptGenerator.app competitors</strong>? Tired of registration barriers, paywalls, and signup failures like <em>&quot;We can&apos;t support your registration right now. Please try again later. (Error 4.22.2)&quot;</em>?
          </p>

          {/* Alert box highlighting registration issues of competitors */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">ProperPrompt & Competitor Signup Outages:</p>
              <p className="text-xs text-amber-800 mt-0.5">
                Users attempting to create accounts on ProperPrompt and similar SaaS tools frequently encounter: 
                <code className="mx-1 px-1.5 py-0.5 bg-amber-100/80 rounded font-mono font-bold text-amber-950">&quot;We can&apos;t support your registration right now. Please try again later. (Error 4.22.2)&quot;</code>.
                <strong>AI Prompt Generate</strong> bypasses registration completely—100% of our prompt generation, OCR vision tools, and PDF utilities are open immediately with zero login.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium space-y-2">
            <p>
              <strong>Top features & benefits:</strong> Prompt Organization, Improved Workflow Efficiency, Collaboration Features, Version Control, Centralized Repository, and Zero-Login Multi-Platform Prompt Rewriting for Claude, ChatGPT, Gemini, Grok, Nano Banana Pro, and Google Veo 3.
            </p>
            <p className="text-slate-500 text-xs">
              We evaluated more than 15 alternatives to ProperPrompt and AIPromptGenerator.app: <em>PromptProGen, AI Prompt Generator, BestPromptGen, Prompt-Genie.app, PromptGenerator.org, PromptMuse.net, PromptPerfect, TrustPrompt, PromptsGenii, AIPromptHub.org, No Prompt Injections</em>, and <em>FlowGPT</em>.
            </p>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-slate-900 font-outfit tracking-tight">
              15+ Prompt Tool Competitors Feature & Status Matrix
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Verified availability, registration status, and pricing transparency (Sept 2026)
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold font-mono">
            Zero-Login Guaranteed
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-outfit font-extrabold uppercase text-[11px] tracking-wider">
                <th className="p-4 pl-6">Platform</th>
                <th className="p-4">Category</th>
                <th className="p-4">Pricing</th>
                <th className="p-4">Login Required?</th>
                <th className="p-4">Registration Status</th>
                <th className="p-4 pr-6">Platform Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ALL_COMPETITORS.map((item, idx) => (
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
                        {item.errorNote && (
                          <p className="text-[11px] text-red-600 font-semibold mt-0.5">{item.errorNote}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">
                    {item.category}
                  </td>
                  <td className="p-4">
                    <span className={item.isUs ? "text-emerald-700 font-black" : "text-slate-700 font-semibold"}>
                      {item.pricing}
                    </span>
                  </td>
                  <td className="p-4">
                    {item.loginRequired ? (
                      <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                        <X className="w-4 h-4 text-slate-500" /> Mandatory
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                        <Check className="w-4 h-4 text-emerald-600" /> No Signup Needed
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    {item.status === "ERROR / BROKEN" ? (
                      <span className="inline-flex items-center gap-1 text-red-700 font-bold text-[11px] px-2 py-0.5 rounded-full bg-red-100 border border-red-200">
                        Error 4.22.2 (Signup Failed)
                      </span>
                    ) : item.isUs ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-200">
                        Instant Access (No Wall)
                      </span>
                    ) : (
                      <span className="text-slate-600 text-xs">Standard Form</span>
                    )}
                  </td>
                  <td className="p-4 pr-6">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      item.status === "UP" 
                        ? "bg-emerald-100 text-emerald-800" 
                        : item.status === "ERROR / BROKEN"
                        ? "bg-red-100 text-red-800"
                        : "bg-slate-100 text-slate-700"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        item.status === "UP" ? "bg-emerald-500" : item.status === "ERROR / BROKEN" ? "bg-red-500" : "bg-slate-400"
                      }`} />
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
            No Registration Errors (Zero Login)
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            ProperPrompt fails with <em>&quot;We can&apos;t support your registration right now. Please try again later. (Error 4.22.2)&quot;</em>, while PromptProGen and BestPromptGen charge $12.99 - $19/mo. Our platform never requires signup, email verification, or credit cards.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <h4 className="text-base font-black text-slate-900 font-outfit">
            Prompt Organization & Versioning
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Enjoy the core benefits of ProperPrompt—prompt organization, improved workflow efficiency, centralized repository, and structured rewrites—across Claude, ChatGPT, Gemini, Grok, Nano Banana Pro, and Google Veo 3.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Star className="w-5 h-5" />
          </div>
          <h4 className="text-base font-black text-slate-900 font-outfit">
            Complete Multi-Modal Power
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Go beyond simple text rewrites. Generate cinematic 4K video with Google Veo 3 &amp; SeaDance 2.2, build full-stack web applications with v0 &amp; Replit Agent, and convert images to PDF without software installation.
          </p>
        </div>
      </div>
    </section>
  );
}
