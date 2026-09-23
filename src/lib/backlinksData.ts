export interface BacklinkCategory {
  title: string;
  description: string;
  links: {
    name: string;
    url: string;
    description: string;
    badge?: string;
    rel?: string;
  }[];
}

export const BACKLINK_DIRECTORIES: BacklinkCategory[] = [
  {
    title: "AI Prompt Marketplaces & Hubs",
    description: "Leading peer platforms, prompt marketplaces, and community discovery libraries",
    links: [
      {
        name: "PromptBase",
        url: "https://promptbase.com",
        description: "Leading marketplace for Midjourney, ChatGPT & DALL-E prompts.",
        badge: "Marketplace",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "PromptHero",
        url: "https://prompthero.com",
        description: "World's biggest prompt search engine for AI image & text models.",
        badge: "Discovery",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "FlowGPT",
        url: "https://flowgpt.com",
        description: "Open community platform to share, discover, and chat with AI prompts.",
        badge: "Community",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Snack Prompt",
        url: "https://snackprompt.com",
        description: "Trending ChatGPT prompt community upvoted by top creators daily.",
        badge: "Trending",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Civitai",
        url: "https://civitai.com",
        description: "Open-source generative AI art, checkpoint models, and prompt showcase.",
        badge: "GenAI Models",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "BananaPrompts",
        url: "https://bananaprompts.com",
        description: "Curated aesthetic & high-converting image generation prompt gallery.",
        badge: "Partner",
        rel: "noopener noreferrer"
      },
      {
        name: "Replit AI Hub",
        url: "https://ai-prompt-generate-backlink-hub--sunildhital977.replit.app",
        description: "Cloud-hosted high performance developer portal & prompt generator mirror.",
        badge: "Replit Cloud",
        rel: "noopener noreferrer"
      }
    ]
  },
  {
    title: "Official AI Foundation Engines",
    description: "Official generative image, video, and LLM reasoning engines supported by AI Prompt Generate",
    links: [
      {
        name: "OpenAI ChatGPT & Sora",
        url: "https://openai.com",
        description: "Official research & development behind GPT-4o, Astra, and Sora 4K video.",
        badge: "Core AI",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Anthropic Claude",
        url: "https://anthropic.com",
        description: "Next-gen AI assistant powering Claude 3.5 Sonnet & Claude Opus synthesis.",
        badge: "LLM Leader",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Midjourney",
        url: "https://midjourney.com",
        description: "Hyperrealistic generative art engine known for photorealistic rendering.",
        badge: "Art Engine",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Black Forest Labs (Flux)",
        url: "https://blackforestlabs.ai",
        description: "Creators of state-of-the-art Flux 1.1 Pro & Schnell text-to-image models.",
        badge: "Vision SOTA",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Kling AI",
        url: "https://klingai.com",
        description: "Cinematic text-to-video AI engine for physics-accurate simulations.",
        badge: "Video AI",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Google DeepMind Gemini",
        url: "https://deepmind.google/technologies/gemini",
        description: "Native multimodal LLM reasoning across text, code, audio, and visual prompts.",
        badge: "Multimodal",
        rel: "noopener noreferrer nofollow"
      }
    ]
  },
  {
    title: "AI Tools & Directory Indexes",
    description: "Top AI directories and webmaster catalogs indexing modern generative AI tools",
    links: [
      {
        name: "Futurepedia",
        url: "https://www.futurepedia.io",
        description: "The largest directory of cutting-edge AI tools and generative software.",
        badge: "AI Directory",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "There's An AI For That",
        url: "https://theresanaiforthat.com",
        description: "Comprehensive database covering thousands of specialized AI tools & utilities.",
        badge: "Catalog",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Product Hunt AI",
        url: "https://www.producthunt.com/topics/artificial-intelligence",
        description: "Latest trending AI product launches, prompt apps, and innovations.",
        badge: "Launches",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Hugging Face Spaces",
        url: "https://huggingface.co/spaces",
        description: "Interactive machine learning apps, model weights, and community benchmarks.",
        badge: "Open Source",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "AIPRM for ChatGPT",
        url: "https://www.aiprm.com",
        description: "Engineered 1-click prompt management extension for SEO and marketing.",
        badge: "Productivity",
        rel: "noopener noreferrer nofollow"
      },
      {
        name: "Top AI Tools",
        url: "https://topai.tools",
        description: "Curated aggregator of leading generative AI platforms and prompt builders.",
        badge: "Index",
        rel: "noopener noreferrer nofollow"
      }
    ]
  },
  {
    title: "Parasite SEO & High-Authority Communities",
    description: "High-DA global authority networks indexing AI Prompt Generate worldwide",
    links: [
      {
        name: "Medium AI Engineering",
        url: "https://medium.com/tag/prompt-engineering",
        description: "In-depth prompt engineering guides, benchmark tutorials, and swipe files.",
        badge: "DA 96",
        rel: "noopener noreferrer"
      },
      {
        name: "Reddit r/PromptEngineering",
        url: "https://www.reddit.com/r/PromptEngineering/",
        description: "Real-time discussions and prompt sharing with 100K+ prompt creators.",
        badge: "DA 94",
        rel: "noopener noreferrer"
      },
      {
        name: "GitHub Awesome AI Prompts",
        url: "https://github.com/topics/prompt-engineering",
        description: "Open-source prompt engineering repositories, system prompts, and tools.",
        badge: "DA 97",
        rel: "noopener noreferrer"
      },
      {
        name: "Dev.to AI Community",
        url: "https://dev.to/t/ai",
        description: "Developer articles on building LLM workflows and text-to-image prompts.",
        badge: "DA 89",
        rel: "noopener noreferrer"
      },
      {
        name: "LinkedIn Pulse AI Insights",
        url: "https://www.linkedin.com/pulse/topics/artificial-intelligence-t1415/",
        description: "Executive and business AI marketing prompts and automation insights.",
        badge: "DA 99",
        rel: "noopener noreferrer"
      },
      {
        name: "Pinterest Creative AI Art",
        url: "https://www.pinterest.com/search/pins/?q=ai%20photo%20prompts",
        description: "Visual moodboards, aesthetic girl portraits, and couple photography ideas.",
        badge: "DA 94",
        rel: "noopener noreferrer"
      },
      {
        name: "Telegra.ph Master AI Prompts Hub",
        url: "https://telegra.ph/500-Best-Free-AI-Prompts-Copy-and-Paste-for-ChatGPT--Gemini-2026-09-23",
        description: "Authority publication featuring 500+ free prompts for ChatGPT 4o and Gemini 2.5.",
        badge: "DA 91 Live",
        rel: "noopener noreferrer"
      },
      {
        name: "Telegra.ph TikTok Video Downloader Guide",
        url: "https://telegra.ph/How-to-Download-TikTok-Videos-Without-Watermark-in-1080p-Full-HD-Free-2026-09-23",
        description: "High-DA technical editorial ranking for watermark-free social media video downloading.",
        badge: "DA 91 Live",
        rel: "noopener noreferrer"
      },
      {
        name: "Telegra.ph Couple AI Portrait Blueprint",
        url: "https://telegra.ph/Turn-Two-Photos-into-Stunning-Couple-Portraits-30-Copy-Paste-AI-Prompts-2026-09-23",
        description: "Viral 2-photo face merging and couple photography guide with direct backlinks.",
        badge: "DA 91 Live",
        rel: "noopener noreferrer"
      }
    ]
  }
];
