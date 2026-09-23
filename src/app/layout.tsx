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
    default: "Free Image & Video Prompts – #1 Free AI Tool In The World (No Sign-Up)",
    template: "%s",
  },
  description:
    "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD (NO LOGIN NO SIGNUP) & #1 Free AI Tool in the World. 100% Free AI Image Prompts, Free Video Prompts, Free Image Generator, Free Video Generator, Free FB Video Downloaders, Free TikTok Video Downloader, Free Instagram Video Downloader, Free Image to Video AI Generator for ChatGPT, Claude, Gemini, Flux, Sora, Nano Banana Pro, and Google Veo 3.",
  keywords: [
    // 0. Primary High-Intent Topic Headers (#1 Global Rankings)
    "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD",
    "free image and video prompt website in the world no login no signup",
    "free image and video prompt website",
    "#1 FREE AI TOOL IN THE WORLD",
    "top 1 free ai tool in the world",
    "best free ai tool in the world",
    "FREE IMAGE GENERATOR",
    "free ai image generator",
    "FREE VIDEO GENERATOR",
    "free ai video generator",
    "FREE FB VIDEO DOWNLOADERS",
    "free facebook video downloader",
    "fb video download free online",
    "FREE TIKTOK DOWNLOADER",
    "free tiktok video downloader without watermark",
    "FREE INSTA DOWNLOADER",
    "free instagram video downloader",
    "all social media video downloader free",
    "FREE AI IMAGE GENERATOR",
    "free image to video generator",
    "free ai image to video",
    "text to image ai free no login",
    "text to video ai free no login",
    "ai prompt generator free no login no signup",
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
    languages: {
      "en": "/",
      "hi": "/?lang=hi",
      "mr": "/?lang=mr",
      "es": "/?lang=es",
      "fr": "/?lang=fr",
      "de": "/?lang=de",
      "pt": "/?lang=pt",
      "ja": "/?lang=ja",
      "ko": "/?lang=ko",
      "zh-CN": "/?lang=zh-cn",
      "zh-TW": "/?lang=zh-tw",
      "ar": "/?lang=ar",
      "bn": "/?lang=bn",
      "ru": "/?lang=ru",
      "it": "/?lang=it",
      "tr": "/?lang=tr",
      "vi": "/?lang=vi",
      "th": "/?lang=th",
      "id": "/?lang=id",
      "ms": "/?lang=ms",
      "pl": "/?lang=pl",
      "nl": "/?lang=nl",
      "sv": "/?lang=sv",
      "da": "/?lang=da",
      "fi": "/?lang=fi",
      "no": "/?lang=no",
      "cs": "/?lang=cs",
      "el": "/?lang=el",
      "he": "/?lang=he",
      "fa": "/?lang=fa",
      "ur": "/?lang=ur",
      "ta": "/?lang=ta",
      "te": "/?lang=te",
      "kn": "/?lang=kn",
      "ml": "/?lang=ml",
      "gu": "/?lang=gu",
      "pa": "/?lang=pa",
      "uk": "/?lang=uk",
      "ro": "/?lang=ro",
      "hu": "/?lang=hu",
      "sk": "/?lang=sk",
      "bg": "/?lang=bg",
      "sr": "/?lang=sr",
      "hr": "/?lang=hr",
      "lt": "/?lang=lt",
      "lv": "/?lang=lv",
      "et": "/?lang=et",
      "sl": "/?lang=sl",
      "sw": "/?lang=sw",
      "tl": "/?lang=tl",
      "x-default": "/"
    }
  },
  openGraph: {
    title: "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD (NO LOGIN NO SIGNUP) – #1 Free AI Tool In The World",
    description:
      "Free Image & Video Prompts, Free AI Image Generator, Free Video Generator, Free FB Video Downloader, TikTok & Insta Video Downloaders, Free Image to Video AI Generator with zero login.",
    url: siteUrl,
    siteName: "AI Prompt Generate",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/top1_free_ai_studio.jpg",
        width: 1200,
        height: 630,
        alt: "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD – #1 Free AI Tool In The World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD (NO LOGIN NO SIGNUP) – #1 Free AI Tool In The World",
    description:
      "Free Image & Video Prompts, Free Image Generator, Free Video Generator, FB Video Downloader, TikTok & Insta Video Downloaders. 100% Free, zero login.",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
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
      "name": "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD (NO LOGIN NO SIGNUP)",
      "alternateName": [
        "#1 FREE AI TOOL IN THE WORLD",
        "AI Prompt Generate",
        "Free Image Generator",
        "Free Video Generator",
        "Free FB Video Downloader",
        "Free TikTok Video Downloader",
        "Free Instagram Video Downloader",
        "Free Image to Video AI Generator"
      ],
      "description": "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD (NO LOGIN NO SIGNUP) – #1 Free AI Tool In The World. Free Image & Video Prompts, Free Image Generator, Free Video Generator, FB Video Downloader, TikTok & Insta Video Downloaders.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      "name": "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "FREE IMAGE AND VIDEO PROMPT WEBSITE IN THE WORLD (NO LOGIN NO SIGNUP)",
        "#1 FREE AI TOOL IN THE WORLD",
        "FREE IMAGE GENERATOR – High-resolution AI Image Generator with instant preview",
        "FREE VIDEO GENERATOR – Cinematic video prompt synthesis for Sora, Kling, Runway, Veo 3",
        "FREE FB VIDEO DOWNLOADERS – Download Facebook reels, public clips and HD videos instantly",
        "FREE TIKTOK DOWNLOADER – Watermark-free TikTok MP4 video downloader",
        "FREE INSTA DOWNLOADER – High-speed Instagram Reels and video downloader",
        "FREE AI IMAGE GENERATOR – Photorealistic prompt generator for Midjourney v6, Flux, ChatGPT",
        "FREE IMAGE TO VIDEO GENERATOR – Dynamic prompt creation to animate still photos into video",
        "100% Free Unlimited AI Prompt Generation with Zero Paywalls and Zero Login Required"
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
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
