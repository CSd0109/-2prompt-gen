import json

with open("all_category_prompts.json", "r") as f:
    dexter_prompts = json.load(f)

with open("youmind_ready.json", "r") as f:
    youmind_prompts = json.load(f)

# Keep the original core video and web prompts too
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
      "name": "2Prompt Studio",
      "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      "verified": True
    },
    "tags": ["FPV Drone", "Cinematic", "Sora AI", "One Take"],
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
      "name": "2Prompt Dev",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      "verified": True
    },
    "tags": ["SaaS", "Next.js 15", "Bento Grid", "Dark Mode"],
    "suggestedTools": ["chatgpt", "gemini", "claude"]
  }
]

# Put YouMind at the top so user can see them immediately!
combined = youmind_prompts + dexter_prompts + existing_videos_ui

# Ensure 2Prompt branding everywhere
for p in combined:
    p["creator"]["name"] = "2Prompt Creator"
    p["creator"]["avatar"] = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
    p["creator"]["verified"] = True

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

export const SAMPLE_PROMPTS: PromptItem[] = {json.dumps(combined, indent=2)};

export const AI_MODELS = [
  {{ id: "chatgpt", name: "ChatGPT-4o", provider: "OpenAI", badge: "GPT-4o", color: "from-emerald-500 to-teal-600" }},
  {{ id: "gemini", name: "Gemini 2.0 Flash", provider: "Google DeepMind", badge: "Gemini Pro", color: "from-blue-500 to-indigo-600" }},
  {{ id: "claude", name: "Claude 3.5 Sonnet", provider: "Anthropic", badge: "Claude 3.5", color: "from-amber-500 to-orange-600" }},
  {{ id: "kimi", name: "Kimi / Kivi AI", provider: "Moonshot", badge: "Kimi K1", color: "from-purple-500 to-pink-600" }},
  {{ id: "deepseek", name: "DeepSeek R1", provider: "DeepSeek", badge: "R1 Reasoner", color: "from-cyan-500 to-blue-600" }},
  {{ id: "groq", name: "Groq LLaMA 3.3", provider: "Meta / Groq", badge: "Ultra Fast", color: "from-orange-500 to-red-600" }},
];
'''

with open("src/lib/data.ts", "w") as f:
    f.write(ts_content)

print(f"data.ts successfully updated with {len(combined)} prompts (including YouMind studio deliverables + PromptDexter complete library)!")
