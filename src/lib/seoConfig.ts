import { MetadataRoute } from "next";

export interface SEOCategoryConfig {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  filterType: "model" | "category" | "tag" | "custom";
  filterValue: string;
  introText: string;
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: Record<string, SEOCategoryConfig> = {
  // 1. TOP VIDEO PROMPTS (Veo 3, SeaDance 2.2, Video Bundles, Sora)
  "veo-video-prompts": {
    slug: "veo-video-prompts",
    title: "Google Veo 3 Video Prompts",
    h1: "Google Veo 3 Video Prompts – Cinematic 4K/8K AI Video Prompts (100% Free)",
    metaTitle: "Google Veo 3 Video Prompts – Free 4K Cinematic AI Video Prompts",
    metaDescription: "Master Google Veo 3 with 100% free cinematic text-to-video prompts. FPV drone flyovers, photorealistic human physics, 4K camera direction, zero login.",
    keywords: [
      "google veo 3 prompts",
      "google veo prompts",
      "veo 3 video prompt generator",
      "google deepmind veo prompts",
      "free veo 3 prompts copy paste",
      "google veo cinematic prompts"
    ],
    filterType: "custom",
    filterValue: "veo",
    introText: "Unlock the cutting-edge power of Google DeepMind Veo 3. Master prompt templates featuring advanced camera direction, photorealistic lighting, physics accuracy, and high-frame-rate cinematic motions.",
    faqs: [
      {
        q: "How to prompt Google Veo 3 for photorealistic videos?",
        a: "Specify exact camera lenses (e.g. 35mm anamorphic), movements (e.g. slow crane push-in), and natural lighting conditions."
      }
    ]
  },
  "seadance-video-prompts": {
    slug: "seadance-video-prompts",
    title: "SeaDance 2.2 Video Prompts",
    h1: "SeaDance 2.2 Video Prompts – Fluid Motion & VFX Video Prompts",
    metaTitle: "SeaDance 2.2 Video Prompts – Dynamic Motion & Physics Prompts Free",
    metaDescription: "Explore curated SeaDance 2.2 AI video prompts. Engineered for fluid human motions, martial arts, complex water physics, and dynamic camera angles with zero login.",
    keywords: [
      "seadance 2.2 prompts",
      "seadance video prompts",
      "seadance 2.2 ai video generator",
      "seadance prompt generator free",
      "dynamic physics video prompts"
    ],
    filterType: "custom",
    filterValue: "seadance",
    introText: "Harness SeaDance 2.2's industry-leading motion dynamics. Eliminates video warping with smooth anatomical movement, choreography, and high-energy cinematic pacing.",
    faqs: [
      {
        q: "What makes SeaDance 2.2 prompts special?",
        a: "SeaDance 2.2 specializes in high-velocity physics, athletic movements, and natural character expressions without frame tearing."
      }
    ]
  },
  "video-campaign-bundles": {
    slug: "video-campaign-bundles",
    title: "Video Campaign Bundles",
    h1: "Ready-Made AI Video Campaign Bundles – Viral TikTok, Reels & Brand Ads",
    metaTitle: "Ready-Made AI Video Campaign Bundles – Viral Shorts & Commercial Ads",
    metaDescription: "Copy ready-to-use AI video prompt bundles for commercial brand campaigns, 10s viral TikTok/Reels hooks, and product launches across Veo, Sora, and Kling AI.",
    keywords: [
      "ai video prompt bundle",
      "commercial ai video prompts",
      "viral tiktok video prompts ai",
      "ai video advertising campaign prompts",
      "readymade video prompt bundle free"
    ],
    filterType: "custom",
    filterValue: "bundles",
    introText: "Production-ready, multi-scene AI video campaign bundles designed for creators and marketing agencies. Complete with 3-part storyboard prompts (Hook, Body, CTA).",
    faqs: [
      {
        q: "How do I use a ready-made video campaign bundle?",
        a: "Generate Scene 1 (Hook), Scene 2 (Concept/Product), and Scene 3 (CTA) sequentially for a seamless commercial video."
      }
    ]
  },

  // 2. TOP WEBSITE & UI/DEV PROMPTS (v0, Replit Agent, Claude 3.7 / Opus 5, Websim)
  "v0-website-prompts": {
    slug: "v0-website-prompts",
    title: "v0 by Vercel Website Prompts",
    h1: "v0 Website Prompts – Production Next.js, React & Tailwind UI Prompts",
    metaTitle: "v0 Website Prompts – Best Free Next.js & Tailwind UI Prompts",
    metaDescription: "Generate stunning web applications with free v0 by Vercel prompts. Complete Next.js, Tailwind CSS, Lucide icons, and responsive UI components with zero login.",
    keywords: [
      "v0 prompts",
      "v0 by vercel prompts",
      "v0 website prompt generator",
      "nextjs prompt generator v0",
      "tailwind ui prompts v0",
      "best v0 dev prompts free"
    ],
    filterType: "custom",
    filterValue: "website",
    introText: "Accelerate your frontend workflow with master prompts crafted specifically for v0 by Vercel. Generate complete SaaS dashboards, modern landing pages, and animated UI components.",
    faqs: [
      {
        q: "How to prompt v0 for full-stack Next.js components?",
        a: "Provide structured layouts, exact component hierarchies, Shadcn UI references, and responsive Tailwind styling guidelines."
      }
    ]
  },
  "replit-agent-prompts": {
    slug: "replit-agent-prompts",
    title: "Replit Agent Prompts",
    h1: "Replit Agent Prompts – Full-Stack App & Backend Architecture Prompts",
    metaTitle: "Replit Agent Prompts – Free Full-Stack AI Software Engineering Prompts",
    metaDescription: "Build complete web apps from scratch with free Replit Agent prompts. Database schemas, API endpoints, authentication flows, and full-stack deployment instructions.",
    keywords: [
      "replit agent prompts",
      "replit prompt generator",
      "full stack replit prompts",
      "replit ai coding prompts free",
      "replit agent autonomous prompts"
    ],
    filterType: "custom",
    filterValue: "website",
    introText: "Deploy full-stack web applications autonomously with Replit Agent. Prompts designed to specify database models, API routes, authentication logic, and frontend layouts.",
    faqs: [
      {
        q: "What makes Replit Agent prompts unique?",
        a: "Replit Agent executes shell commands and manages databases. Prompts must clearly structure environment variables, packages, and architecture."
      }
    ]
  },
  "claude-opus-prompts": {
    slug: "claude-opus-prompts",
    title: "Claude Opus & Sonnet Prompts",
    h1: "Claude Opus & 3.7 Sonnet Prompts – Deep Coding, Architecture & Artifacts",
    metaTitle: "Claude Opus & 3.7 Sonnet Prompts – Master Coding & Architecture Prompts",
    metaDescription: "Supercharge Anthropic Claude Opus and Claude 3.7 Sonnet with master prompts for system architecture, Next.js artifacts, clean code, and zero fluff.",
    keywords: [
      "claude opus prompts",
      "claude opus 5 prompts",
      "claude 3.7 sonnet prompts",
      "claude coding prompts",
      "claude artifacts prompts free",
      "anthropic claude prompt generator"
    ],
    filterType: "custom",
    filterValue: "claude",
    introText: "Harness unmatched reasoning, deep refactoring, and interactive React artifacts with master prompts designed for Claude Opus and Claude 3.7 Sonnet.",
    faqs: [
      {
        q: "How do Claude Opus prompts improve coding output?",
        a: "They eliminate speculative chatter and enforce modular clean architecture, comprehensive TypeScript types, and unit test coverage."
      }
    ]
  },

  // 0. BROAD GLOBAL HIGH-VOLUME TARGET PAGES (Prompt Generator Free, Image Prompts, Video Prompts)
  "ai-prompt-generator-free": {
    slug: "ai-prompt-generator-free",
    title: "AI Prompt Generator Free – Top 1 Free Prompt Generator Online",
    h1: "Free AI Prompt Generator – Unlimited AI Prompts for Image, Video & Text (Zero Login)",
    metaTitle: "AI Prompt Generator Free – Best Free AI Prompt Generator 2026",
    metaDescription: "Generate 100% free copy-ready AI prompts for ChatGPT, Claude, Gemini, Grok, Nano Banana Pro, and Google Veo 3. Zero signup, zero credit limits, and instant 1-click copy.",
    keywords: [
      "ai prompt generator free",
      "prompt generator free",
      "free ai prompt generator",
      "ai prompt generator without login",
      "unlimited free ai prompt generator",
      "best free prompt generator",
      "prompt maker online free"
    ],
    filterType: "custom",
    filterValue: "chatgpt",
    introText: "Welcome to the world's #1 free AI prompt generator. Create, optimize, and synthesize production-grade instructions for image models, video generators, code assistants, and reasoning LLMs—completely free with zero login.",
    faqs: [
      {
        q: "Is this AI Prompt Generator really 100% free with no limits?",
        a: "Yes. Unlike other tools that cap you at 10 daily generations or force paid subscriptions, our AI Prompt Generator is 100% free forever with zero login required."
      },
      {
        q: "Which AI models can I generate prompts for?",
        a: "You can generate prompts for ChatGPT-4o/Astra, Claude Opus & 3.7 Sonnet, Google Gemini 2.5, Grok, Nano Banana Pro, Google Veo 3, SeaDance 2.2, and Midjourney."
      }
    ]
  },
  "ai-image-prompts": {
    slug: "ai-image-prompts",
    title: "AI Image Prompts – 100% Free Copy-Ready Image Prompts Library",
    h1: "Free AI Image Prompts – Photorealistic, 8K Portraits, Cinematic & Aesthetic Prompts",
    metaTitle: "AI Image Prompts – 1,000+ Free Copy & Paste Image Prompts (8K)",
    metaDescription: "Copy 1,000+ verified AI image prompts for free. Ultra-photorealistic portraits, camera lighting, cinematic angles, Nano Banana Pro, and Midjourney aesthetics with zero login.",
    keywords: [
      "ai image prompts",
      "image prompt generator",
      "free image prompts",
      "ai image prompt copy paste",
      "photorealistic image prompts",
      "image prompts for ai art",
      "best ai image prompts free"
    ],
    filterType: "custom",
    filterValue: "nano-banana",
    introText: "Browse and copy over 1,000+ meticulously engineered AI image prompts. Complete with negative prompts, aspect ratios, lighting parameters, and lens specs for photorealistic output.",
    faqs: [
      {
        q: "How to use these AI image prompts?",
        a: "Click 'Copy Prompt' on any card and paste it directly into your AI image generator such as Nano Banana Pro, Midjourney, or DALL-E."
      }
    ]
  },
  "ai-video-prompts": {
    slug: "ai-video-prompts",
    title: "AI Video Prompts – Cinematic 4K/8K Video Prompt Generator",
    h1: "Free AI Video Prompts – Cinematic Camera Moves, Drone Shots & Viral Hooks",
    metaTitle: "AI Video Prompts – Best Free Video AI Prompts (Veo 3 & SeaDance)",
    metaDescription: "Supercharge text-to-video with free AI video prompts. Engineered for Google Veo 3, SeaDance 2.2, Sora, and Kling AI with cinematic camera directions and fluid physics.",
    keywords: [
      "ai video prompts",
      "video prompt generator",
      "free video prompts ai",
      "cinematic video prompts",
      "text to video prompt copy paste",
      "ai video camera prompts"
    ],
    filterType: "custom",
    filterValue: "veo",
    introText: "Generate high-converting cinematic video prompts. Features precise camera pans, crane pushes, drone flyovers, fluid character physics, and multi-scene commercial storyboards.",
    faqs: [
      {
        q: "What video AI models do these prompts support?",
        a: "They are optimized for Google Veo 3, SeaDance 2.2, Sora, Runway Gen-3 Alpha, and Kling AI."
      }
    ]
  },

  // 3. TOP IMAGE PROMPTS (Nano Banana Pro, BananaPrompts, Photorealistic AI)
  "nano-banana-pro-prompts": {
    slug: "nano-banana-pro-prompts",
    title: "Nano Banana Pro Prompts",
    h1: "Nano Banana Pro Prompts – 8K Photorealistic & Aesthetic Image Prompts",
    metaTitle: "Nano Banana Pro Prompts – Best Free Photorealistic AI Prompts Library",
    metaDescription: "Explore 500+ verified Nano Banana Pro prompts. Ultra-photorealistic portraits, cinema lighting, 8K textures, aesthetic editorial poses, 100% free.",
    keywords: [
      "nano banana pro prompts",
      "nano banana prompts",
      "banana pro ai prompt generator",
      "nano banana photorealistic prompts",
      "free nano banana pro prompt copy paste"
    ],
    filterType: "custom",
    filterValue: "nano-banana",
    introText: "Discover the elite collection of Nano Banana Pro prompts. Engineered for pure photorealism, lifelike human skin textures, analog grain, and breathtaking visual aesthetics.",
    faqs: [
      {
        q: "What is Nano Banana Pro prompting style?",
        a: "It combines editorial fashion photography, natural skin pores, cinematic volumetric lighting, and precise camera focal lengths."
      }
    ]
  },

  // 4. FOUNDATIONAL LLM PROMPTS (ChatGPT-4o/Astra & Google Gemini)
  "chatgpt-prompts": {
    slug: "chatgpt-prompts",
    title: "ChatGPT Prompts",
    h1: "ChatGPT Prompts – Best Free AI Prompts Library (GPT-4o, GPT-5 & Astra)",
    metaTitle: "ChatGPT Prompts – Best Free Unlimited Prompts Library (GPT-4o & Astra)",
    metaDescription: "Copy 1,000+ top ChatGPT prompts for free. Production-ready prompts for coding, marketing, creative writing, GPT-4o, and GPT-5 Astra with zero login.",
    keywords: [
      "chatgpt prompts",
      "best chatgpt prompts",
      "chatgpt prompt generator",
      "free chatgpt prompts copy paste",
      "chatgpt 4o prompts",
      "chatgpt 6 astra prompts"
    ],
    filterType: "custom",
    filterValue: "chatgpt",
    introText: "Discover the world's most comprehensive library of free ChatGPT prompts. Carefully engineered for GPT-4o, GPT-5 Astra, and OpenAI reasoning models.",
    faqs: [
      {
        q: "Are these ChatGPT prompts 100% free?",
        a: "Yes, every single prompt is free to copy and use commercially with zero login."
      }
    ]
  },
  "gemini-prompts": {
    slug: "gemini-prompts",
    title: "Google Gemini Prompts",
    h1: "Google Gemini Prompts – Free Prompts for Gemini 2.5 Pro & Flash",
    metaTitle: "Google Gemini Prompts – Best Free Prompts for Gemini 2.5 Flash & Pro",
    metaDescription: "Supercharge Google Gemini with 1,000+ free master prompts. Multimodal reasoning, coding, web analysis, and video synthesis with zero login.",
    keywords: [
      "google gemini prompts",
      "gemini prompt generator",
      "gemini 2.5 flash prompts",
      "gemini 2.5 pro prompts",
      "best prompts for google gemini"
    ],
    filterType: "custom",
    filterValue: "gemini",
    introText: "Unlock the multimodal reasoning power of Google Gemini 2.5 Flash and Pro. System instructions, research synthesis, and creative prompts.",
    faqs: [
      {
        q: "Can I use these prompts on the free Google Gemini web app?",
        a: "Yes, all prompts are fully compatible with the free version of Google Gemini and Google AI Studio."
      }
    ]
  },

  // 5. PDF & IMAGE PRODUCTIVITY TOOLS (Image to PDF, PDF to Image, PDF Editor)
  "image-to-pdf": {
    slug: "image-to-pdf",
    title: "Free Image to PDF Converter Online",
    h1: "Free Image to PDF Converter – Convert PNG & JPG to PDF Instantly",
    metaTitle: "Free Image to PDF Converter Online – 100% Free, Secure & Fast",
    metaDescription: "Convert JPG, PNG, and WebP images to high-resolution PDF documents online. 100% free, unlimited client-side conversion, zero watermark and no login required.",
    keywords: [
      "image to pdf",
      "convert image to pdf",
      "jpg to pdf free",
      "png to pdf converter",
      "free image to pdf online",
      "photo to pdf"
    ],
    filterType: "custom",
    filterValue: "image",
    introText: "Instantly turn images, photos, and scans into professional high-resolution PDF documents right in your browser. Complete privacy with zero server uploads.",
    faqs: [
      {
        q: "Is the Image to PDF converter completely free?",
        a: "Yes! There are no file limits, no signups, and no hidden subscriptions. Everything is processed instantly and securely in your browser."
      },
      {
        q: "Are my uploaded photos or documents stored on any server?",
        a: "No. The conversion happens entirely locally in your client's web browser, guaranteeing 100% data privacy."
      }
    ]
  },
  "pdf-to-image": {
    slug: "pdf-to-image",
    title: "Free PDF to Image Converter Online",
    h1: "Free PDF to Image Converter – Extract High-Res JPG & PNG from PDF",
    metaTitle: "PDF to Image Converter Free – Extract JPG/PNG from PDF Online",
    metaDescription: "Convert PDF pages to crystal-clear JPG and PNG images online. Free, fast, private, and compatible with all mobile and desktop browsers.",
    keywords: [
      "pdf to image",
      "convert pdf to jpg",
      "pdf to png free",
      "extract images from pdf",
      "pdf to picture converter online"
    ],
    filterType: "custom",
    filterValue: "image",
    introText: "Effortlessly convert your PDF documents and invoices into crisp JPG or PNG images. High-fidelity rendering with zero software installation.",
    faqs: [
      {
        q: "How fast is the PDF to image conversion?",
        a: "Conversion is near-instantaneous using modern web rendering technology."
      }
    ]
  },
  "pdf-editor": {
    slug: "pdf-editor",
    title: "Free Online PDF Editor",
    h1: "Free Online PDF Editor – Annotate, Merge, Compress & Edit PDFs",
    metaTitle: "Free Online PDF Editor – Edit, Annotate & Sign PDFs Without Login",
    metaDescription: "Edit PDFs directly in your web browser. Annotate, add text, sign documents, and highlight content without software downloads or subscriptions.",
    keywords: [
      "free pdf editor",
      "pdf editor online",
      "edit pdf without signup",
      "annotate pdf free",
      "online pdf signer"
    ],
    filterType: "custom",
    filterValue: "website",
    introText: "Take full control of your PDF files with our suite of free browser-based PDF editing tools. Annotate, sign, highlight, and adjust your files effortlessly.",
    faqs: [
      {
        q: "Do I need Adobe Acrobat to edit PDFs?",
        a: "No! Our online PDF editor runs directly in your browser with zero installations required."
      }
    ]
  },

  // 6. COMPETITOR & ALTERNATIVES TARGETING
  "aipromptgenerator-alternatives": {
    slug: "aipromptgenerator-alternatives",
    title: "AIPromptGenerator.app Alternatives & Top Competitors (2026)",
    h1: "Best AIPromptGenerator.app Alternatives & Competitors – 100% Free & Unlimited",
    metaTitle: "AIPromptGenerator.app Alternatives & Competitors – Best Free Tools 2026",
    metaDescription: "Discover the best AIPromptGenerator.app alternatives based on verified products, community votes and reviews. Create better AI prompts for ChatGPT, Claude, Gemini, Grok, Nano Banana & Veo for free.",
    keywords: [
      "AIPromptGenerator.app alternatives",
      "AIPromptGenerator alternatives",
      "AIPromptGenerator.app competitors",
      "Generate Prompt AI",
      "AI Prompt Finder",
      "AIPromptHub.org",
      "ProperPrompt",
      "create better ai prompts",
      "copy-ready prompts for free",
      "free ai prompt generator without login"
    ],
    filterType: "custom",
    filterValue: "chatgpt",
    introText: "Looking for the top AIPromptGenerator.app alternatives? Top benefits are Ease of Use, Time-Saving, Versatility, Inspiration for Creativity, and Accessible for Beginners. Discover copy-ready prompts for ChatGPT, Claude, Gemini, Grok, Nano Banana, and Veo with zero login and zero credit caps.",
    faqs: [
      {
        q: "What are the top features of AIPromptGenerator.app?",
        a: "Some of the top features or benefits of AIPromptGenerator.app are: Ease of Use, Time-Saving, Versatility, Inspiration for Creativity, and Accessible for Beginners."
      },
      {
        q: "What are the best alternatives to AIPromptGenerator.app?",
        a: "The top competitors and alternatives are AI Prompt Generate (100% free with unlimited generations), Generate Prompt AI, AI Prompt Finder, AIPromptHub.org, ProperPrompt, and PromptBase."
      },
      {
        q: "Is there a completely free alternative to AIPromptGenerator.app without login?",
        a: "Yes! AI Prompt Generate (www.aipromptgenerate.xyz) is 100% free forever with no credit limits, no subscription fees, and no sign-up required."
      }
    ]
  },
  "properprompt-alternatives": {
    slug: "properprompt-alternatives",
    title: "ProperPrompt Alternatives & Competitors (100% Free, Zero Signup)",
    h1: "Best ProperPrompt Alternatives – Fix Error 4.22.2 & Get Unlimited Free Prompts",
    metaTitle: "ProperPrompt Alternatives & Competitors – 100% Free AI Prompts 2026",
    metaDescription: "Looking for ProperPrompt alternatives? Fix signup Error 4.22.2 with AI Prompt Generate. Free per-platform AI prompts tailored for Claude, ChatGPT, Gemini, Grok, and Veo without registration.",
    keywords: [
      "ProperPrompt alternatives",
      "ProperPrompt competitors",
      "ProperPrompt error 4.22.2",
      "ProperPrompt signup error",
      "PromptProGen alternatives",
      "BestPromptGen alternatives",
      "per-platform ai prompts free",
      "paste messy prompt get structured rewrite",
      "prompt organization tool free"
    ],
    filterType: "custom",
    filterValue: "claude",
    introText: "Getting 'We can't support your registration right now. Please try again later. (Error 4.22.2)' on ProperPrompt? Switch to AI Prompt Generate. Get structured prompt rewrites tailored to Claude, ChatGPT, Gemini, Grok, Nano Banana Pro, and Google Veo 3 with zero login and no credit caps.",
    faqs: [
      {
        q: "Why does ProperPrompt show 'Error 4.22.2: We can't support your registration right now'?",
        a: "Error 4.22.2 occurs when a SaaS platform restricts account signups due to geographic filters, auth service outages, or aggressive spam defenses. AI Prompt Generate eliminates registration entirely so you never encounter signup barriers."
      },
      {
        q: "What are the top features of ProperPrompt?",
        a: "ProperPrompt features include Prompt Organization, Improved Workflow Efficiency, Collaboration Features, Version Control, and Centralized Repository."
      },
      {
        q: "What are the top competitors to ProperPrompt?",
        a: "Top alternatives include AI Prompt Generate (#1 free pick), PromptProGen, BestPromptGen, Prompt-Genie.app, PromptGenerator.org, and PromptMuse.net."
      }
    ]
  },

  // 7. SOCIAL VIDEO DOWNLOADER (Facebook, TikTok, Instagram, Shorts)
  "social-video-downloader": {
    slug: "social-video-downloader",
    title: "Free Social Media Video Downloader (TikTok, FB, Insta)",
    h1: "Free Social Video Downloader – Download TikTok, Facebook & Instagram Videos Online",
    metaTitle: "Social Video Downloader – Download TikTok, FB & Instagram HD Videos",
    metaDescription: "Download TikTok videos without watermark, Facebook Watch videos, and Instagram Reels in 1080p Full HD MP4. 100% free with zero login and unlimited downloads.",
    keywords: [
      "social video downloader",
      "download tiktok video without watermark",
      "facebook video downloader",
      "instagram reels downloader free",
      "download fb video",
      "insta video download",
      "youtube shorts downloader",
      "online video downloader free"
    ],
    filterType: "custom",
    filterValue: "video",
    introText: "Download public videos from TikTok, Instagram, Facebook, and YouTube Shorts in original 1080p Full HD without watermarks. Free, fast, and completely anonymous.",
    faqs: [
      {
        q: "Can I download TikTok videos without watermark?",
        a: "Yes! Our downloader strips watermarks and exports crisp original HD MP4 files directly to your device."
      },
      {
        q: "Does it support Facebook and Instagram Reels?",
        a: "Yes. Simply paste the link from Facebook Watch or Instagram Reels to generate instant download links."
      },
      {
        q: "Do I need to create an account or install an app?",
        a: "No. Everything runs 100% free in your browser with zero registration or app installation required."
      }
    ]
  }
};
