import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://2promptgen.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2Prompt Gen – 100% Free Unlimited AI Prompt Generator (ChatGPT-6 Astra, Claude Opus, Gemini 2.5, Flux, Sora)",
    template: "%s | 2Prompt Gen",
  },
  description:
    "100% Free & Unlimited AI Prompt Generator powered by next-gen AI giants: ChatGPT-6 Astra (chatgpt6astra), Claude 3.5 / 3.7 Opus (Cloude Opos), Google Gemini 2.5 Flash, DeepSeek-V3, Flux 1.1 Pro & Sora. Generate unlimited Image, Video, and Website UI prompts with zero login, no sign-up, and zero paywalls.",
  keywords: [
    // Next-Gen Viral Keyword Targets: ChatGPT-6 Astra & Claude Opus
    "chatgpt6astra",
    "ChatGPT 6 Astra",
    "chatgpt 6 astra prompt generator",
    "chatgpt6astra free",
    "GPT 6 Astra",
    "OpenAI ChatGPT 6 Astra",
    "Claude Opus",
    "cloude opos",
    "Claude 3.5 Opus prompt generator",
    "Claude 3.7 Opus free",
    "Anthropic Claude Opus prompts",
    "cloude opos prompt generator free",
    // Unlimited & 100% Free Top Models Search Intent
    "100% free AI prompt generator",
    "unlimited AI prompt generator",
    "free unlimited AI image generator",
    "free unlimited AI video prompts",
    "free AI website prompts",
    "ChatGPT 4o prompt generator free",
    "Claude Opus prompt generator unlimited",
    "Google Gemini 2.5 Flash prompt tool free",
    "DeepSeek V3 prompt generator",
    "Kling AI video generator free",
    "OpenAI Sora 4k prompt generator",
    "Flux 1.1 Pro photorealistic prompts",
    // Core AI Prompt Keywords & Direct Competitor Beats (QuillBot, GeneratePrompt, Feedough, PromptCowboy)
    "AI prompt generator",
    "prompt generator",
    "ai prompt generator free",
    "prompt generator chatgpt",
    "prompt generator for claude",
    "prompt generator for video",
    "prompt generator rp",
    "prompt generator writing",
    "prompt generator from image",
    "prompt generator ai",
    "free AI prompt generator for ChatGPT Gemini & More",
    "AI prompt writer free unlimited no sign up",
    "no login AI prompt generator",
    "prompt cowboy alternative free",
    "feedough ai prompt generator alternative",
    "generateprompt ai alternative",
    // Midjourney, Flux & Sora Master Keywords
    "Midjourney v6.1 prompts copy paste",
    "photorealistic Midjourney prompts",
    "Midjourney fashion prompts",
    "Flux 1.1 Pro prompts",
    "Flux AI realistic portraits",
    "Flux raw style prompts",
    "Sora video generation prompts 4k",
    "Kling AI video prompts free",
    // AI Characters & Avatars (Media.io & Character.ai Beats)
    "free AI characters",
    "save AI characters free",
    "AI character generator without login",
    "Media.io character alternative free",
    "free AI avatars download",
    "cyberpunk AI models",
    "realistic AI fashion models",
    // BananaPrompts & Trending
    "BananaPrompts gallery",
    "BananaPrompts alternatives",
    "trending AI art prompts",
    // Couple Poses & Romance
    "couple poses AI prompts",
    "romantic couple photo prompts",
    "wedding couple AI photography prompts",
    "couple selfie prompt Midjourney",
    // Top AI Models & Engines
    "Google Gemini 2.5 prompt generator",
    "ChatGPT 4o image prompts",
    "Claude 3.5 Sonnet prompt templates",
    "DeepSeek AI prompt engineering",
    "Groq fast prompt generation",
    "Kimi Moonshot AI prompts",
  ],
  authors: [{ name: "2Prompt Gen Team", url: siteUrl }],
  creator: "2Prompt Gen",
  publisher: "2Prompt Gen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "2Prompt Gen – 100% Free Unlimited AI Prompt Generator & Top AI Models",
    description:
      "Generate unlimited production-ready prompts with top AI models (ChatGPT, Claude 3.5 Sonnet, Gemini 2.5 Flash, DeepSeek, Flux, Sora). 100% free, zero login, zero credit limits.",
    url: siteUrl,
    siteName: "2Prompt Gen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "2Prompt Gen AI Prompts & Characters Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2Prompt Gen – 100% Free Unlimited AI Prompt Generator Hub",
    description:
      "Top AI Models: ChatGPT, Claude, Gemini, DeepSeek, Flux 1.1 Pro & Sora. 100% free unlimited prompt generation with zero login.",
    images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80"],
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
};

// Rich Structured Data Schema (JSON-LD) for Google Bot
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "2Prompt Gen",
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
      "name": "2Prompt Gen AI Studio",
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
          "name": "Is 2Prompt Gen 100% free and unlimited for ChatGPT, Claude, and Gemini?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 2Prompt Gen provides 100% free, unlimited prompt generation across top AI models including ChatGPT-4o, Claude 3.5 Sonnet, Google Gemini 2.5 Flash, DeepSeek-V3, Flux 1.1 Pro, and Sora with zero credit caps, no subscription fees, and no sign-up required."
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
          "name": "Which top AI models are available in the 2Prompt Gen studio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can select and run prompts directly with ChatGPT-4o, Claude 3.5 Sonnet, Google Gemini 2.5 Flash, DeepSeek-V3, Groq Llama 3.3, and Kimi Moonshot AI."
          }
        },
        {
          "@type": "Question",
          "name": "How does 2Prompt Gen compare to Media.io and BananaPrompts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike Media.io which requires paid credits and mandatory login to save or apply characters, 2Prompt Gen provides 100% free instant saves, free HD downloads, and includes all BananaPrompts gallery items verified 1-to-1."
          }
        },
        {
          "@type": "Question",
          "name": "How do I generate prompts from an image or rough idea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply enter your basic concept or theme into the 2Prompt Gen command box, choose your target AI model (ChatGPT, Gemini, Claude, DeepSeek, or Flux), and our prompt engineering system will craft an expansive, production-grade prompt with camera angles, lighting, and negative prompts."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best AI prompt generator for ChatGPT, Claude, and Midjourney?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2Prompt Gen is considered one of the top AI prompt generators because it provides model-specific prompting for ChatGPT, Midjourney v6.1, Flux 1.1 Pro, and Claude, complete with a verified 1,200+ prompt gallery and 100% free access without sign-up."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use these prompts for commercial AI art generation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all curated prompts provided in 2Prompt Gen are free to copy, modify, and use in commercial projects across Midjourney, Flux, DALL-E, Sora, and other generative AI platforms."
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
