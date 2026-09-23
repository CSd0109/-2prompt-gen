import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aipromptgenerate.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Prompt Generator Free – Best AI Image & Video Prompts (Zero Login)",
    template: "%s | AI Prompt Generator",
  },
  description:
    "100% Free AI Prompt Generator for ChatGPT, Claude, Gemini, Grok, Nano Banana Pro, and Google Veo 3. Generate photorealistic image prompts, cinematic video prompts, and website code with zero signup and zero credit limits.",
  keywords: [
    // Real Core Search Volume Terms (Image Prompts, Video Prompts, Prompt Generator Free)
    "ai prompt generator free",
    "prompt generator free",
    "free ai prompt generator",
    "ai prompt generator",
    "image prompt generator",
    "ai image prompts",
    "free image prompts",
    "video prompt generator",
    "ai video prompts",
    "free video prompts",
    "photorealistic image prompts",
    "cinematic video prompts",
    "ai prompts free",
    "prompt generator without login",
    "no signup ai prompt generator",
    // Competitor & Alternatives High-Search Intent
    "AIPromptGenerator.app alternatives",
    "AIPromptGenerator alternatives",
    "AIPromptGenerator.app competitors",
    "Generate Prompt AI alternatives",
    "generateprompt.net alternative",
    "AI Prompt Finder",
    "AIPromptHub.org",
    "ProperPrompt",
    "PromptBase free alternative",
    "FlowGPT free unlimited alternative",
    "create better ai prompts",
    "copy-ready prompts for free",
    "ai prompt generator grok",
    "grok prompts free",
    // Global #1 Authority & Viral Search Intent
    "top 1 free website in the world",
    "top 1 free ai prompt generator in the world",
    "top 1 free ai website in the world",
    "best free ai website in the world",
    "world best free ai prompt generator",
    "100 free ai prompt generator without login",
    "unlimited free ai tool in the world",
    // 90% Core Focus: Google, ChatGPT, Gemini, Claude, and Universal AI Prompts
    "AI prompt generator",
    "prompt generator",
    "free AI prompt generator",
    "prompt generator for chatgpt",
    "chatgpt prompt generator",
    "google ai prompt generator",
    "google gemini prompt generator",
    "gemini 2.5 pro prompt generator",
    "openai o3 mini prompt generator",
    "deepseek r1 prompt generator free",
    "qwen 2.5 max prompt generator",
    "claude 3.7 sonnet prompt generator",
    "best ai prompt generator",
    "chatgpt prompt generator free",
    "gemini prompt generator",
    "chatgpt 4o prompt generator free",
    "chatgpt6astra",
    "ChatGPT 6 Astra",
    "chatgpt 6 astra prompt generator",
    "GPT 6 Astra",
    "prompt generator for claude",
    "claude prompt generator",
    "Claude Opus prompt generator",
    "free ai prompt generator for chatgpt gemini and more",
    "ai prompt writer free unlimited no sign up",
    "no login ai prompt generator",
    "unlimited free ai tool",
    "unlimited ai prompt generator 100 free",
    "chatgpt prompts copy paste",
    "google gemini 2.5 flash prompts",
    "free unlimited ai prompt generator",
    "best prompt generator for chatgpt",
    "ai prompt creator online free",
    "generative ai prompts free",
    "prompt generator ai free",
    "prompt generator online",
    "prompt maker chatgpt",
    "prompt builder for chatgpt",
    "prompt engineering tools free",
    "deepseek prompt generator free",
    // 1. High-Demand Video AI Models & Ready-Made Campaign Bundles
    "Google Veo 3 prompts",
    "google veo video prompt generator",
    "SeaDance 2.2 video prompts",
    "seadance 2.2 dynamic motion prompts",
    "Sora video prompts",
    "Kling AI 1.5 HD prompts",
    "Runway Gen-3 Alpha prompts",
    "ai video prompt bundle",
    "readymade video prompt bundle free",
    "commercial video campaign prompts ai",
    "viral tiktok video prompts ai",
    // 2. High-Converting Website, UI & Dev Prompts
    "v0 website prompts",
    "v0 by vercel prompt generator",
    "replit agent prompts free",
    "replit full stack prompts",
    "claude opus prompts",
    "claude opus 5 prompts",
    "claude 3.7 sonnet coding prompts",
    "website prompt generator free",
    // 3. Nano Banana Pro & Photorealistic Image Prompts
    "Nano Banana Pro prompts",
    "nano banana prompts free",
    "banana pro prompt generator",
    "photorealistic image prompts copy paste",
    "AI characters free download"
  ],
  authors: [{ name: "AI Prompt Generate Team", url: siteUrl }],
  creator: "AI Prompt Generate",
  publisher: "AI Prompt Generate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Prompt Generator – Free Veo 3, Nano Banana Pro, v0 & Replit Prompts Studio",
    description:
      "100% Free AI prompt generator for Google Veo 3, SeaDance 2.2, Nano Banana Pro, v0 by Vercel, Replit Agent, and Claude Opus 5. Zero login, zero credit limits.",
    url: siteUrl,
    siteName: "AI Prompt Generate",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/top1_free_ai_studio.jpg",
        width: 1200,
        height: 630,
        alt: "AI Prompt Generate AI Video, Website & Image Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Prompt Generate – Free Veo 3, Nano Banana Pro & Website Prompts",
    description:
      "Google Veo 3, SeaDance 2.2, Nano Banana Pro, v0 by Vercel, Replit & Claude Opus. 100% free unlimited prompt generation with zero login.",
    images: ["/top1_free_ai_studio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-yfvWRXWru-nI88GjH0kbcHvNF1ro1a4jKhqaXXYtUk",
    other: {
      "msvalidate.01": "C27F4F79E4C74B4814917C67B4BB6665",
    },
  },
};

// Rich Structured Data Schema (JSON-LD) for Google Bot
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "AI Prompt Generate",
      "description": "World's Best Free AI Prompts & Characters Generator Hub",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      "name": "AI Prompt Generate AI Studio",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "100% Free Unlimited AI Prompt Generation with Zero Paywalls",
        "Top AI Models Supported: ChatGPT-4o, Claude 3.5 Sonnet, Google Gemini 2.5 Flash, DeepSeek-V3, Flux 1.1 Pro, Sora",
        "Unlimited Image, Video & Website UI Prompts",
        "1,200+ Master Photorealistic Prompts Library",
        "30+ Free AI Characters to Save and 8K Download",
        "85+ Dedicated Couple Poses Prompts Gallery",
        "1-Click Copy and Live Flux Image Preview",
        "Zero Login, No Sign-up Required"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is AI Prompt Generate 100% free and unlimited for ChatGPT, Claude, and Gemini?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, AI Prompt Generate provides 100% free, unlimited prompt generation across top AI models including ChatGPT-4o, Claude 3.5 Sonnet, Google Gemini 2.5 Flash, DeepSeek-V3, Flux 1.1 Pro, and Sora with zero credit caps, no subscription fees, and no sign-up required."
          }
        },
        {
          "@type": "Question",
          "name": "Can I generate unlimited Image, Video, and Website prompts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. You can generate unlimited prompts for text-to-image (Midjourney, Flux, DALL-E), text-to-video (Sora, Kling, Runway Gen-3), and complete website UI/UX components with full code snippets."
          }
        },
        {
          "@type": "Question",
          "name": "Which top AI models are available in the AI Prompt Generate studio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can select and run prompts directly with ChatGPT-4o, Claude Opus & 3.7 Sonnet, Google Gemini 2.5 Flash, DeepSeek-V3, Grok, Google Veo 3, SeaDance 2.2, and Nano Banana Pro."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best AIPromptGenerator.app alternatives and competitors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The top alternatives to AIPromptGenerator.app are AI Prompt Generate (100% free with zero login and no credit caps), Generate Prompt AI (generateprompt.net), AI Prompt Finder, AIPromptHub.org, ProperPrompt, and PromptBase. AI Prompt Generate ranks #1 for Ease of Use, Time-Saving, Versatility, and multi-model support across ChatGPT, Claude, Gemini, Grok, Nano Banana, and Veo."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI Prompt Generate compare to Media.io and BananaPrompts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike Media.io which requires paid credits and mandatory login to save or apply characters, AI Prompt Generate provides 100% free instant saves, free HD downloads, and includes all BananaPrompts gallery items verified 1-to-1."
          }
        },
        {
          "@type": "Question",
          "name": "How do I generate prompts from an image or rough idea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply enter your basic concept or theme into the AI Prompt Generate command box, choose your target AI model (ChatGPT, Gemini, Claude, DeepSeek, or Flux), and our prompt engineering system will craft an expansive, production-grade prompt with camera angles, lighting, and negative prompts."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best AI prompt generator for ChatGPT, Claude, and Midjourney?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI Prompt Generate is considered one of the top AI prompt generators because it provides model-specific prompting for ChatGPT, Midjourney v6.1, Flux 1.1 Pro, and Claude, complete with a verified 1,200+ prompt gallery and 100% free access without sign-up."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use these prompts for commercial AI art generation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all curated prompts provided in AI Prompt Generate are free to copy, modify, and use in commercial projects across Midjourney, Flux, DALL-E, Sora, and other generative AI platforms."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
