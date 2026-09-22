import json
import re

with open('src/lib/data.ts') as f:
    text = f.read()

m = re.search(r'export const SAMPLE_PROMPTS: PromptItem\[\] = (\[.*?\]);\n\nexport const AI_MODELS', text, re.DOTALL)
prompts = json.loads(m.group(1))

# Dedicated High Quality Video Prompts with working 16:9 thumbnails
rich_videos = [
    {
        "id": "vid-rich-1",
        "title": "Hyperrealistic Neon FPV Drone Flight Through Cyberpunk Tokyo",
        "category": "video",
        "model": "Sora",
        "thumbnail": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
        "aspectRatio": "16:9",
        "prompt": "Dynamic high-speed FPV camera diving down between neon skyscrapers in a futuristic alleyway, swooping past steam billowing from street ramen stalls, illuminated paper lanterns shaking in the wind, seamless continuous 1-take motion, ending in a dramatic slow-motion brake at a neon cybernetic tea bar, Hollywood color grading, 4K 60fps, photorealistic fluid physics.",
        "views": "640.2K",
        "likes": "54.1K",
        "timestamp": "2 hours ago",
        "creator": {"name": "2Prompt Creator", "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", "verified": True},
        "tags": ["Video", "Sora AI", "Cyberpunk", "FPV Drone"],
        "suggestedTools": ["chatgpt", "gemini"]
    },
    {
        "id": "vid-rich-2",
        "title": "Phantom Slow-Motion Water Droplet Impact with Golden Iridescence",
        "category": "video",
        "model": "Runway Gen-3",
        "thumbnail": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&auto=format&fit=crop&q=80",
        "aspectRatio": "16:9",
        "prompt": "Ultra slow motion 1000fps phantom flex 4K macro shot: a single crystalline iridescent water droplet impacts an obsidian surface, shattering into thousands of micro liquid prisms that float weightlessly in zero gravity, studio directional rim lighting, anamorphic lens flares, ultra-realistic fluid dynamics.",
        "views": "420.5K",
        "likes": "38.2K",
        "timestamp": "5 hours ago",
        "creator": {"name": "2Prompt Creator", "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", "verified": True},
        "tags": ["Video", "Slow Motion", "Runway Gen-3", "Physics"],
        "suggestedTools": ["chatgpt", "gemini"]
    },
    {
        "id": "vid-rich-3",
        "title": "Cinematic Electric Hypercar Drifting on Snowy Alpine Hairpins",
        "category": "video",
        "model": "Luma Dream",
        "thumbnail": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&auto=format&fit=crop&q=80",
        "aspectRatio": "16:9",
        "prompt": "Tracking shot chasing a matte-black electric hypercar winding through snowy Swiss Alps pass, active aerodynamic wings extending seamlessly as car drifts around hairpin curve, sun glare flashing through pine trees, tire smoke blending with alpine mist, cinematic motion blur, 8K 24fps filmic shutter.",
        "views": "310.8K",
        "likes": "28.9K",
        "timestamp": "12 hours ago",
        "creator": {"name": "2Prompt Creator", "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", "verified": True},
        "tags": ["Video", "Automotive", "Luma Dream", "Action"],
        "suggestedTools": ["chatgpt", "gemini"]
    },
    {
        "id": "vid-rich-4",
        "title": "Ancient Roman Colosseum Marketplace Steadicam One-Take",
        "category": "video",
        "model": "Kling AI",
        "thumbnail": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&auto=format&fit=crop&q=80",
        "aspectRatio": "16:9",
        "prompt": "Smooth Steadicam documentary tracking shot moving through the bustling Forum Romanum at peak Roman Empire, merchants bargaining with gold coins, toga-clad citizens walking past marble columns adorned with crimson banners, dusty warm Mediterranean morning sunlight, authentic period accurate costumes, lifelike crowd simulation.",
        "views": "195.4K",
        "likes": "16.3K",
        "timestamp": "1 day ago",
        "creator": {"name": "2Prompt Creator", "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", "verified": True},
        "tags": ["Video", "Kling AI", "Historical", "Cinema"],
        "suggestedTools": ["chatgpt", "gemini"]
    },
    {
        "id": "vid-rich-5",
        "title": "Commercial Coca-Cola Refreshment Splash in Summer Manhattan",
        "category": "video",
        "model": "Sora",
        "thumbnail": "https://cdn.gooo.ai/assets/youhome-v1/made-with-youmind/page-02/04-creative-cola-ads-v2.webp",
        "aspectRatio": "16:9",
        "prompt": "Cinematic 4K 60fps commercial advertisement: Condensation beads run down a chilled glass bottle of cola, cap pops off with crisp vapor release, slow-motion liquid splash reflecting Manhattan skyline sunset, Kodak 2383 film LUT, crisp acoustic sound design.",
        "views": "520.1K",
        "likes": "46.7K",
        "timestamp": "1 day ago",
        "creator": {"name": "2Prompt Creator", "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", "verified": True},
        "tags": ["Video", "Commercial", "Sora", "Product"],
        "suggestedTools": ["chatgpt", "gemini"]
    },
    {
        "id": "vid-rich-6",
        "title": "Origami Paper Craft Animals Coming to Life in Enchanted Forest",
        "category": "video",
        "model": "Runway Gen-3",
        "thumbnail": "https://cdn.youmindassets.com/web-images/7d44164acff18255fe4c5675584bc0783a88ca519c8aa53b4d95e398419cc326@medium",
        "aspectRatio": "16:9",
        "prompt": "Stop-motion inspired paper-craft video: Miniature folded origami deer and birds unfold and leap through a layered watercolor paper forest, warm ambient rim lighting, tactile paper texture, smooth 30fps stop-motion physics.",
        "views": "280.9K",
        "likes": "24.5K",
        "timestamp": "2 days ago",
        "creator": {"name": "2Prompt Creator", "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", "verified": True},
        "tags": ["Video", "Paper Art", "Animation", "Runway"],
        "suggestedTools": ["chatgpt", "gemini"]
    },
    {
        "id": "vid-rich-7",
        "title": "Golden Retriever Puppy Beat-Sync Dance in Pastel Living Room",
        "category": "video",
        "model": "Kling AI",
        "thumbnail": "https://cdn.youmindassets.com/user-files/64a2bd74a33866d4421416f4785a8d3c515bbd62d710ef48a16efbc323bfb931@medium",
        "aspectRatio": "16:9",
        "prompt": "Viral TikTok style video: An adorable fluffy golden retriever puppy bobbing head in perfect rhythmic beat-sync to music, warm sunny Scandinavian living room, high frame rate, joyful expressions, photorealistic fur physics.",
        "views": "890.3K",
        "likes": "94.2K",
        "timestamp": "3 days ago",
        "creator": {"name": "2Prompt Creator", "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", "verified": True},
        "tags": ["Video", "Pet", "Beat Sync", "Viral"],
        "suggestedTools": ["chatgpt", "gemini"]
    },
    {
        "id": "vid-rich-8",
        "title": "Breathtaking Aurora Borealis Dancing over Glacier Lagoons",
        "category": "video",
        "model": "Sora",
        "thumbnail": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&auto=format&fit=crop&q=80",
        "aspectRatio": "16:9",
        "prompt": "Timelapse 4K 60fps tracking camera gliding over frozen Jokulsarlon lagoon in Iceland, vibrant green and violet Northern lights undulating across starry cosmos, crystalline icebergs glowing with natural turquoise reflections, Hasselblad optics.",
        "views": "450.7K",
        "likes": "41.9K",
        "timestamp": "3 days ago",
        "creator": {"name": "2Prompt Creator", "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", "verified": True},
        "tags": ["Video", "Aurora", "Iceland", "Sora"],
        "suggestedTools": ["chatgpt", "gemini"]
    }
]

# Filter out broken video links (.mp4 or raw video as image src)
cleaned_prompts = []
for p in prompts:
    # replace raw video URLs with proper posters
    if "gen-videos" in p.get("thumbnail", ""):
        continue
    cleaned_prompts.append(p)

final_prompts = rich_videos + cleaned_prompts

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

export const SAMPLE_PROMPTS: PromptItem[] = {json.dumps(final_prompts, indent=2)};

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

print(f"data.ts updated with {len(final_prompts)} prompts including {len(rich_videos)} verified video cards!")
