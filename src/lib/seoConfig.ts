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
  "veo-video-prompts": {
    slug: "veo-video-prompts",
    title: "Google Veo 3 Prompts",
    h1: "Google Veo 3 Video Prompts – Cinematic 4K/8K AI Video Prompts (Free)",
    metaTitle: "Google Veo 3 Video Prompts – Best Free 4K Cinematic AI Prompts",
    metaDescription: "Master Google Veo 3 with 100% free cinematic text-to-video prompts. Drone flyovers, photorealistic human motion, high-definition camera physics, and zero login.",
    keywords: [
      "google veo 3 prompts",
      "google veo prompts",
      "veo 3 video prompt generator",
      "google deepmind veo prompts",
      "free veo 3 prompts copy paste",
      "google veo cinematic prompts",
      "google veo text to video prompts"
    ],
    filterType: "custom",
    filterValue: "veo",
    introText: "Unlock the cutting-edge power of Google DeepMind Veo 3. Our master prompt templates feature advanced camera direction, photorealistic lighting, physics accuracy, and high-frame-rate cinematic motions.",
    faqs: [
      {
        q: "How to prompt Google Veo 3 for photorealistic videos?",
        a: "Google Veo 3 excels at understanding natural cinematic terminology. Always specify lens types (e.g. 35mm anamorphic), camera movements (e.g. slow crane push-in), and precise lighting conditions."
      },
      {
        q: "Are these Google Veo 3 prompts free for commercial campaigns?",
        a: "Yes! All Veo 3 prompts are 100% free to copy, tweak, and use in commercial video ads and digital content."
      }
    ]
  },
  "seadance-video-prompts": {
    slug: "seadance-video-prompts",
    title: "SeaDance 2.2 Prompts",
    h1: "SeaDance 2.2 Video Prompts – Fluid Motion & VFX Video Prompts",
    metaTitle: "SeaDance 2.2 Video Prompts – Dynamic Motion & Physics Prompts Free",
    metaDescription: "Explore curated SeaDance 2.2 AI video prompts. Engineered for fluid human motions, martial arts, complex water physics, and dynamic camera angles with zero login.",
    keywords: [
      "seadance 2.2 prompts",
      "seadance video prompts",
      "seadance 2.2 ai video generator",
      "seadance prompt generator free",
      "dynamic physics video prompts",
      "fluid motion ai video prompts"
    ],
    filterType: "custom",
    filterValue: "seadance",
    introText: "Harness SeaDance 2.2's industry-leading motion dynamics. These prompts are crafted to eliminate video warping, giving you smooth anatomical movement, choreography, and high-energy cinematic pacing.",
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
      "readymade video prompt bundle free",
      "reels hook ai video prompts"
    ],
    filterType: "custom",
    filterValue: "bundles",
    introText: "Production-ready, multi-scene AI video campaign bundles designed for creators and marketing agencies. Complete with 3-part storyboard prompts (Hook, Body, CTA) optimized for high viewer retention.",
    faqs: [
      {
        q: "How do I use a ready-made video campaign bundle?",
        a: "Each bundle contains coordinated prompts for Scene 1 (The Hook), Scene 2 (Product/Concept Reveal), and Scene 3 (Resolution). Generate each scene sequentially for a seamless commercial video."
      }
    ]
  },
  "video-prompts": {
    slug: "video-prompts",
    title: "AI Video Prompts (Sora & Kling)",
    h1: "AI Video Prompts – Cinematic Prompts for OpenAI Sora, Kling & Runway Gen-3",
    metaTitle: "AI Video Prompts – Cinematic Prompts for Sora, Kling & Runway Gen-3",
    metaDescription: "Free cinematic video prompts for OpenAI Sora, Kling AI 1.5, Runway Gen-3 Alpha, and Luma Dream Machine. Camera motion, drone flyovers, dynamic pacing.",
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
    introText: "Discover the world's most comprehensive library of free ChatGPT prompts. Carefully engineered for GPT-4o, GPT-5, and OpenAI reasoning models to give you instant, high-accuracy outputs without any subscription fees.",
    faqs: [
      {
        q: "How do I use these ChatGPT prompts?",
        a: "Simply click the 'Copy Prompt' button on any prompt card, paste it directly into ChatGPT (Free or Plus), and replace any bracketed variables with your specific topic."
      },
      {
        q: "Are these ChatGPT prompts 100% free for commercial use?",
        a: "Yes! Every single prompt in our library is free to copy, adapt, and use in your personal or commercial projects without attribution."
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
      "gemini video and text prompts"
    ],
    filterType: "custom",
    filterValue: "gemini",
    introText: "Unlock the full multimodal reasoning power of Google Gemini 2.5 Flash and Pro. Our curated collection includes advanced system instructions, research synthesis, and creative prompts designed specifically for Google DeepMind architecture.",
    faqs: [
      {
        q: "Why use dedicated Google Gemini prompts?",
        a: "Google Gemini excels at large context windows, code interpretation, and multimodal reasoning. Model-specific prompts trigger Gemini's unique strengths for superior formatting and deep factual accuracy."
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
      "photorealistic ai character generator"
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
