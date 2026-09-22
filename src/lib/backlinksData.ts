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
      }
    ]
  },
  {
    title: "Official AI Foundation Engines",
    description: "Official generative image, video, and LLM reasoning engines supported by 2Prompt Gen",
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
  }
];
