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
    default: "AI Prompt Generator – Top 1 Free AI Website in the World",
    template: "%s | AI Prompt Generate",
  },
  description:
    "Top 1 free AI prompt generator in the world for ChatGPT, Google Gemini & Claude. Unlimited free AI prompt synthesis, zero login, zero credit caps & 100% free.",
  keywords: [
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
    "top 1 free ai prompt generator in the world",
    "quillbot prompt generator alternative 100 free",
    "feedough ai prompt generator alternative",
    "promptbase free alternative",
    "flowgpt free unlimited alternative",
    // Multilingual Google Search Intent (Dominating Worldwide Searches for Free AI Prompt Generator)
    "generador de prompts ai gratis",
    "generateur de prompt ia gratuit",
    "kostenloser ki prompt generator",
    "ai プロンプト ジェネレーター 無料",
    "ai 提示词生成器 免费",
    "ai प्रॉम्प्ट जेनरेटर फ्री",
    "مولد الأوامر بالذكاء الاصطनाعي مجانا",
    "ai prompt generator nepali free",
    // High-Demand Video AI Models & Ready-Made Campaign Bundles
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
    title: "AI Prompt Generator – Free Google Veo 3, SeaDance 2.2, ChatGPT & AI Video Studio",
    description:
      "100% Free AI prompt generator for Google Veo 3, SeaDance 2.2, ChatGPT, Google Gemini, and video campaign bundles. Zero login, zero credit limits.",
    url: siteUrl,
    siteName: "AI Prompt Generate",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/top1_free_ai_studio.jpg",
        width: 1200,
        height: 630,
        alt: "AI Prompt Generate AI Video & Prompts Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Prompt Generate – Free Google Veo 3, SeaDance 2.2 & AI Video Prompts",
    description:
      "Google Veo 3, SeaDance 2.2, Sora, Kling, ChatGPT & Gemini. 100% free unlimited video prompt generation with zero login.",
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
            "text": "You can select and run prompts directly with ChatGPT-4o, Claude 3.5 Sonnet, Google Gemini 2.5 Flash, DeepSeek-V3, Groq Llama 3.3, and Kimi Moonshot AI."
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
