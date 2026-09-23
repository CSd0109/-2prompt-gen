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
      "chatgpt prompts for writing",
      "chatgpt prompts for coding",
      "chatgpt 6 astra prompts"
    ],
    filterType: "custom",
    filterValue: "chatgpt",
    introText: "Discover the world's most comprehensive library of free ChatGPT prompts. Carefully engineered for GPT-4o, GPT-5, and OpenAI reasoning models to give you instant, photorealistic and high-accuracy outputs without any subscription fees.",
    faqs: [
      {
        q: "How do I use these ChatGPT prompts?",
        a: "Simply click the 'Copy Prompt' button on any prompt card, paste it directly into ChatGPT (Free or Plus), and replace any bracketed variables with your specific topic."
      },
      {
        q: "Are these ChatGPT prompts 100% free for commercial use?",
        a: "Yes! Every single prompt in our library is free to copy, adapt, and use in your personal or commercial projects without attribution."
      },
      {
        q: "Do these prompts work on ChatGPT-4o and o3-mini?",
        a: "Yes, all prompts are tested and optimized for ChatGPT-4o, OpenAI o1/o3-mini, and legacy GPT-3.5/GPT-4 models."
      }
    ]
  },
  "gemini-prompts": {
    slug: "gemini-prompts",
    title: "Google Gemini Prompts",
    h1: "Google Gemini Prompts – Free Prompts for Gemini 2.5 Pro & Flash",
    metaTitle: "Google Gemini Prompts – Best Free Prompts for Gemini 2.5 Flash & Pro",
    metaDescription: "Supercharge Google Gemini with 1,000+ free master prompts. Engineered for multimodal reasoning, coding, web analysis, and image synthesis with zero login.",
    keywords: [
      "google gemini prompts",
      "gemini prompt generator",
      "gemini 2.5 flash prompts",
      "gemini 2.5 pro prompts",
      "best prompts for google gemini",
      "free gemini prompts copy paste",
      "gemini image prompts"
    ],
    filterType: "custom",
    filterValue: "gemini",
    introText: "Unlock the full multimodal reasoning power of Google Gemini 2.5 Flash and Pro. Our curated collection includes advanced system instructions, research synthesis, and creative prompts designed specifically for Google DeepMind architecture.",
    faqs: [
      {
        q: "Why use dedicated Google Gemini prompts?",
        a: "Google Gemini excels at large context windows, code interpretation, and multimodal reasoning. Model-specific prompts trigger Gemini's unique strengths for superior formatting and deep factual accuracy."
      },
      {
        q: "Can I use these prompts on the free Google Gemini web app?",
        a: "Yes, all prompts are fully compatible with the free version of Google Gemini, Gemini Advanced, and Google AI Studio."
      }
    ]
  },
  "claude-prompts": {
    slug: "claude-prompts",
    title: "Claude Prompts",
    h1: "Claude AI Prompts – Master Prompts for Claude 3.7 Sonnet & Opus",
    metaTitle: "Claude AI Prompts – Master Prompts for Claude 3.7 Sonnet & Opus",
    metaDescription: "Elevate your writing and coding with free master prompts for Anthropic Claude 3.7 Sonnet and Opus. Nuanced thinking, high-context prompts, 100% free.",
    keywords: [
      "claude ai prompts",
      "claude 3.7 sonnet prompts",
      "best claude prompts",
      "claude prompt generator",
      "anthropic claude prompts free",
      "claude artifacts prompts",
      "claude coding prompts"
    ],
    filterType: "custom",
    filterValue: "claude",
    introText: "Experience unmatched literary nuance and complex logic reasoning with our collection of master prompts for Anthropic Claude 3.7 Sonnet, Claude 3.5 Haiku, and Claude Opus.",
    faqs: [
      {
        q: "What makes Claude prompts unique?",
        a: "Claude excels at natural human-like prose, empathetic voice, and massive document analysis. Our prompts guide Claude to avoid robotic cliches and produce authentic, publication-grade results."
      }
    ]
  },
  "deepseek-prompts": {
    slug: "deepseek-prompts",
    title: "DeepSeek Prompts",
    h1: "DeepSeek Prompts – Free Prompts for DeepSeek-V3 & DeepSeek-R1",
    metaTitle: "DeepSeek Prompts – Free Prompts for DeepSeek-V3 & DeepSeek-R1",
    metaDescription: "Best free prompts engineered for DeepSeek-R1 reasoning and DeepSeek-V3 coding. Step-by-step chain of thought, math, and software architecture prompts.",
    keywords: [
      "deepseek prompts",
      "deepseek r1 prompts",
      "deepseek v3 prompts",
      "deepseek prompt generator free",
      "best prompts for deepseek",
      "deepseek coding prompts"
    ],
    filterType: "custom",
    filterValue: "deepseek",
    introText: "Harness open-weight AI leadership with prompts crafted specifically for DeepSeek-R1 and DeepSeek-V3. Perfect for deep technical reasoning, code refactoring, and logical deduction.",
    faqs: [
      {
        q: "How to trigger DeepSeek-R1 deep reasoning?",
        a: "DeepSeek-R1 responds exceptionally well to structured chain-of-thought instructions. Our prompts explicitly scaffold logical premises to ensure verifiable, bug-free output."
      }
    ]
  },
  "midjourney-prompts": {
    slug: "midjourney-prompts",
    title: "Midjourney Prompts",
    h1: "Midjourney Prompts – 8K Photorealistic & Artistic Prompts (v6.1)",
    metaTitle: "Midjourney Prompts – 8K Photorealistic & Artistic Prompts (v6.1)",
    metaDescription: "Browse 1,000+ verified Midjourney v6.1 prompts with aspect ratios, camera parameters (--ar 16:9, --style raw, --v 6.1), and instant copy.",
    keywords: [
      "midjourney prompts",
      "midjourney v6 prompts",
      "photorealistic midjourney prompts",
      "midjourney prompt generator free",
      "best midjourney prompts 2026",
      "midjourney portrait prompts"
    ],
    filterType: "custom",
    filterValue: "midjourney",
    introText: "Level up your generative art with production-grade Midjourney v6.1 prompts. Complete with lighting setups, camera lens specifications, artist stylizations, and verified parameter flags.",
    faqs: [
      {
        q: "Do these prompts include Midjourney parameters?",
        a: "Yes, our Midjourney prompts include recommended parameters such as aspect ratio (--ar 16:9 or --ar 9:16), stylize (--s), and raw mode (--style raw) for instant photorealism."
      }
    ]
  },
  "flux-prompts": {
    slug: "flux-prompts",
    title: "Flux 1.1 Pro Prompts",
    h1: "Flux Prompts – Photorealistic Prompts for Flux 1.1 Pro & Schnell",
    metaTitle: "Flux Prompts – Photorealistic Prompts for Flux 1.1 Pro & Schnell",
    metaDescription: "Master Flux 1.1 Pro and Flux Schnell with free photorealistic text-to-image prompts. Perfect hands, realistic skin textures, cinematic lighting.",
    keywords: [
      "flux prompts",
      "flux 1.1 pro prompts",
      "flux ai prompt generator",
      "flux schnell prompts free",
      "photorealistic flux prompts",
      "black forest labs flux prompts"
    ],
    filterType: "custom",
    filterValue: "flux",
    introText: "Flux 1.1 Pro from Black Forest Labs represents the cutting edge of photorealistic AI imagery. Our prompts are tailored to Flux's natural language understanding and anatomical perfection.",
    faqs: [
      {
        q: "Why do Flux prompts use natural language?",
        a: "Unlike older generators that rely on comma-separated tag soup, Flux's T5-based text encoder understands rich descriptive sentences, spatial relations, and complex lighting descriptions."
      }
    ]
  },
  "video-prompts": {
    slug: "video-prompts",
    title: "AI Video Prompts",
    h1: "AI Video Prompts – Cinematic Prompts for Sora, Kling, Runway & Luma",
    metaTitle: "AI Video Prompts – Cinematic Prompts for Sora, Kling & Runway Gen-3",
    metaDescription: "Free cinematic video prompts for OpenAI Sora, Kling AI, Runway Gen-3 Alpha, and Luma Dream Machine. Camera motion, drone flyovers, dynamic pacing.",
    keywords: [
      "ai video prompts",
      "sora prompts",
      "kling ai prompts",
      "runway gen 3 prompts",
      "luma dream machine prompts",
      "text to video prompts free",
      "cinematic ai video prompts"
    ],
    filterType: "category",
    filterValue: "video",
    introText: "Create breathtaking video sequences with motion-engineered prompts for OpenAI Sora, Kling AI 1.5, Runway Gen-3, and Luma Dream Machine. Features camera crane motions, dolly zooms, and dynamic subject movements.",
    faqs: [
      {
        q: "How to describe camera motion in video prompts?",
        a: "Specify exact camera techniques such as 'fpv drone shot', 'slow push-in tracking shot', or 'cinematic 360 orbit' at the start of your prompt to guide the AI video generator."
      }
    ]
  },
  "couple-poses-prompts": {
    slug: "couple-poses-prompts",
    title: "Couple Poses Prompts",
    h1: "Couple Poses Prompts – Romantic, Wedding & Portrait AI Prompts",
    metaTitle: "Couple Poses Prompts – Romantic, Wedding & Cinematic AI Prompts",
    metaDescription: "85+ photorealistic couple poses prompts. Romantic sunset walks, editorial fashion couples, candid indoor moments, and Indian/Western wedding photography.",
    keywords: [
      "couple poses prompts",
      "ai couple photo prompt",
      "romantic couple prompts midjourney",
      "wedding photography ai prompts",
      "couple portrait prompts flux",
      "indian couple ai prompt"
    ],
    filterType: "custom",
    filterValue: "couple",
    introText: "Capture intimate, authentic emotion with our dedicated couple poses prompt collection. Designed for stunning couple portraits, cinematic romance, and wedding editorials across Flux and Midjourney.",
    faqs: [
      {
        q: "How to achieve realistic face consistency for two people?",
        a: "Use detailed descriptive prompts specifying distinct clothing, hairstyle, and gaze direction for both partners to prevent face blending in generative models."
      }
    ]
  },
  "ai-characters": {
    slug: "ai-characters",
    title: "AI Characters Prompts",
    h1: "Free AI Characters – Consistent Character Prompts & 8K Visuals",
    metaTitle: "Free AI Characters – Consistent Character Prompts & 8K Visuals",
    metaDescription: "30+ free photorealistic AI characters with copyable master prompt templates. Maintain consistent faces, avatars, and digital influencers for free.",
    keywords: [
      "ai characters free",
      "ai influencer prompt",
      "consistent ai character prompt",
      "free ai avatar prompts",
      "photorealistic ai character generator",
      "banana prompts character alternative"
    ],
    filterType: "custom",
    filterValue: "characters",
    introText: "Discover high-fidelity digital personas and AI character blueprints. Perfect for virtual influencers, gaming avatars, and continuous storytelling with consistent aesthetic styling.",
    faqs: [
      {
        q: "Can I download and use these AI characters?",
        a: "Yes! You can view full-resolution visuals, copy their facial and styling prompt templates, and download them with zero sign-up required."
      }
    ]
  }
};
