import json

with open('promptdexter_transferred.json', 'r') as f:
    pd_prompts = json.load(f)

# Existing curated video and website UI prompts to keep rich variety
existing_videos_ui = [
  {
    "id": "vid-1",
    "title": "FPV Drone Dive Through Dense Cyberpunk Alleyway into Night Market",
    "category": "video",
    "model": "Sora",
    "thumbnail": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "aspectRatio": "16:9",
    "prompt": "Dynamic high-speed FPV camera diving down between neon skyscrapers in a futuristic Tokyo-style alleyway, swooping past steam billowing from street ramen stalls, illuminated paper lanterns shaking in the wind, seamless continuous 1-take motion, ending in a dramatic slow-motion brake at a neon cybernetic tea bar, Hollywood color grading, 4K 60fps, photorealistic fluid physics.",
    "views": "512.8K",
    "likes": "48.6K",
    "timestamp": "3 hours ago",
    "creator": {
      "name": "Sora Filmworks",
      "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      "verified": True
    },
    "tags": ["FPV Drone", "Cinematic", "Sora AI", "One Take"],
    "suggestedTools": ["chatgpt", "gemini"]
  },
  {
    "id": "vid-2",
    "title": "Cinematic Slow-Mo Water Droplet Explosion with Holographic Glitter",
    "category": "video",
    "model": "Runway Gen-3",
    "thumbnail": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&auto=format&fit=crop&q=80",
    "aspectRatio": "16:9",
    "prompt": "Ultra slow motion 1000fps phantom flex 4K macro shot: a single crystalline iridescent water droplet impacts an obsidian surface, shattering into thousands of micro liquid prisms that float weightlessly in zero gravity, studio directional rim lighting, anamorphic lens flares, ultra-realistic fluid dynamics.",
    "views": "340.2K",
    "likes": "29.4K",
    "timestamp": "6 hours ago",
    "creator": {
      "name": "Motion Lab Gen3",
      "avatar": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
      "verified": True
    },
    "tags": ["Slow Motion", "Macro", "Physics", "VFX"],
    "suggestedTools": ["chatgpt", "gemini"]
  },
  {
    "id": "vid-3",
    "title": "Futuristic Hypercar Transforming on Alpine Mountain Passes",
    "category": "video",
    "model": "Luma Dream",
    "thumbnail": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&auto=format&fit=crop&q=80",
    "aspectRatio": "16:9",
    "prompt": "Tracking shot chasing a matte-black electric hypercar winding through snowy Swiss Alps pass, active aerodynamic wings extending seamlessly as car drifts around hairpin curve, sun glare flashing through pine trees, tire smoke blending with alpine mist, cinematic motion blur, 8K 24fps filmic shutter.",
    "views": "185.0K",
    "likes": "15.7K",
    "timestamp": "18 hours ago",
    "creator": {
      "name": "Apex Automotive AI",
      "avatar": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80",
      "verified": True
    },
    "tags": ["Automotive", "Hypercar", "Drift", "Alps"],
    "suggestedTools": ["chatgpt", "gemini"]
  },
  {
    "id": "vid-4",
    "title": "Historical Ancient Rome Marketplace Alive in 4K Documentary Style",
    "category": "video",
    "model": "Kling AI",
    "thumbnail": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&auto=format&fit=crop&q=80",
    "aspectRatio": "16:9",
    "prompt": "Smooth Steadicam documentary tracking shot moving through the bustling Forum Romanum at peak Roman Empire, merchants bargaining with gold coins, toga-clad citizens walking past marble columns adorned with crimson banners, dusty warm Mediterranean morning sunlight, authentic period accurate costumes, lifelike crowd simulation.",
    "views": "98.4K",
    "likes": "8.3K",
    "timestamp": "1 day ago",
    "creator": {
      "name": "HistoryReborn",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      "verified": False
    },
    "tags": ["Documentary", "Ancient Rome", "Crowd Simulation"],
    "suggestedTools": ["chatgpt", "gemini"]
  },
  {
    "id": "ui-1",
    "title": "Dark Futuristic AI SaaS Landing Page with 3D Globe & Interactive Terminal",
    "category": "ui",
    "model": "v0 / Next.js",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    "aspectRatio": "16:9",
    "prompt": "Create a cutting-edge, high-converting SaaS landing page for an autonomous AI agents platform called 'Synthetix AI'. Tech Stack: Next.js 15 App Router, TypeScript, Tailwind CSS, Lucide React icons. Bento Grid layout featuring 4 interactive cards with micro-animations.",
    "views": "410.5K",
    "likes": "37.2K",
    "timestamp": "4 hours ago",
    "creator": {
      "name": "UI Mastermind",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "verified": True
    },
    "tags": ["SaaS", "Next.js 15", "Bento Grid", "Dark Mode"],
    "suggestedTools": ["chatgpt", "gemini", "claude"]
  },
  {
    "id": "ui-2",
    "title": "Minimalist E-Commerce Storefront for Luxury Mechanical Keyboards",
    "category": "ui",
    "model": "Bolt.new",
    "thumbnail": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&auto=format&fit=crop&q=80",
    "aspectRatio": "16:9",
    "prompt": "Build an ultra-luxurious, Swiss-style minimalist storefront for bespoke artisan mechanical keyboards. Design Philosophy: Clean brutalism meets organic warmth, monochromatic off-black (#121212) and warm cream (#F7F4EE), high typography contrast with Neue Montreal / Inter.",
    "views": "172.9K",
    "likes": "14.8K",
    "timestamp": "12 hours ago",
    "creator": {
      "name": "Swiss Pixel",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      "verified": True
    },
    "tags": ["E-Commerce", "Brutalism", "Swiss Design"],
    "suggestedTools": ["chatgpt", "gemini", "claude"]
  }
]

all_prompts = pd_prompts + existing_videos_ui

ts_content = f'''export interface PromptItem {{
  id: string;
  title: string;
  category: "image" | "video" | "ui";
  model: string;
  thumbnail: string;
  aspectRatio: string;
  prompt: string;
  negativePrompt?: string;
  systemPrompt?: string;
  views: string;
  likes: string;
  timestamp: string;
  creator: {{
    name: string;
    avatar: string;
    verified: boolean;
  }};
  tags: string[];
  suggestedTools: string[];
}}

export const SAMPLE_PROMPTS: PromptItem[] = {json.dumps(all_prompts, indent=2)};

export const AI_MODELS = [
  {{ id: "chatgpt", name: "ChatGPT-4o", provider: "OpenAI", badge: "GPT-4o", color: "from-emerald-500 to-teal-600" }},
  {{ id: "gemini", name: "Gemini 2.0 Flash", provider: "Google DeepMind", badge: "Gemini Pro", color: "from-blue-500 to-indigo-600" }},
  {{ id: "claude", name: "Claude 3.5 Sonnet", provider: "Anthropic", badge: "Claude 3.5", color: "from-amber-500 to-orange-600" }},
  {{ id: "kimi", name: "Kimi / Kivi AI", provider: "Moonshot", badge: "Kimi K1", color: "from-purple-500 to-pink-600" }},
  {{ id: "deepseek", name: "DeepSeek R1", provider: "DeepSeek", badge: "R1 Reasoner", color: "from-cyan-500 to-blue-600" }},
  {{ id: "groq", name: "Groq LLaMA 3.3", provider: "Meta / Groq", badge: "Ultra Fast", color: "from-orange-500 to-red-600" }},
];
'''

with open('src/lib/data.ts', 'w') as f:
    f.write(ts_content)

print(f"data.ts successfully updated with {len(all_prompts)} prompts ({len(pd_prompts)} from PromptDexter)!")
