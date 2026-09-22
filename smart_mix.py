import json
import re
import random

with open("src/lib/data.ts", "r") as f:
    text = f.read()

m = re.search(r'export const SAMPLE_PROMPTS: PromptItem\[\] = (\[.*?\]);\n\nexport const AI_MODELS', text, re.DOTALL)
prompts = json.loads(m.group(1))

print(f"Total prompts before mixing: {len(prompts)}")

# Group by category
videos = [p for p in prompts if p.get("category") == "video"]
uis = [p for p in prompts if p.get("category") == "ui"]
images = [p for p in prompts if p.get("category") == "image"]

print(f"Videos: {len(videos)}, UI/Web: {len(uis)}, Images: {len(images)}")

# We want a rich, YouTube-style organic mix:
# E.g. Pattern: Image, Video, Image, UI, Image, Video, Image, UI...
# This ensures on the very top row and throughout the feed, the user sees an exciting mix of video, UI, and images!

mixed = []
v_idx = 0
u_idx = 0
i_idx = 0

total_len = len(prompts)
random.seed(42) # deterministic pleasant mix

# First 40 slots: carefully orchestrated so the top 10 rows are 100% beautifully balanced
top_pattern = [
    "image", "video", "ui", "image",
    "video", "image", "ui", "image",
    "image", "video", "image", "ui",
    "video", "image", "image", "video",
    "ui", "image", "video", "image",
    "image", "ui", "video", "image"
]

for slot in top_pattern:
    if slot == "video" and v_idx < len(videos):
        mixed.append(videos[v_idx])
        v_idx += 1
    elif slot == "ui" and u_idx < len(uis):
        mixed.append(uis[u_idx])
        u_idx += 1
    elif i_idx < len(images):
        mixed.append(images[i_idx])
        i_idx += 1

# For the remaining, intersperse any remaining videos and UIs evenly among images
while v_idx < len(videos) or u_idx < len(uis) or i_idx < len(images):
    # Add 4 images
    for _ in range(4):
        if i_idx < len(images):
            mixed.append(images[i_idx])
            i_idx += 1
    # Add 1 video if available
    if v_idx < len(videos):
        mixed.append(videos[v_idx])
        v_idx += 1
    # Add 1 UI if available
    if u_idx < len(uis):
        mixed.append(uis[u_idx])
        u_idx += 1

print(f"Total prompts after smart mix: {len(mixed)}")
assert len(mixed) == len(prompts), "Count mismatch!"

# Ensure brand consistency
for p in mixed:
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

export const SAMPLE_PROMPTS: PromptItem[] = {json.dumps(mixed, indent=2)};

export const AI_MODELS = [
  {{ id: "chatgpt", name: "ChatGPT-4o", provider: "OpenAI", badge: "GPT-4o", color: "from-emerald-500 to-teal-600" }},
  {{ id: "gemini", name: "Gemini 2.0 Flash", provider: "Google DeepMind", badge: "Gemini Pro", color: "from-blue-500 to-indigo-600" }},
  {{ id: "claude", name: "Claude 3.5 Sonnet", provider: "Anthropic", badge: "Claude 3.5", color: "from-amber-500 to-orange-600" }},
  {{ id: "kimi", name: "Kimi / Kivi AI", provider: "Moonshot", badge: "Kimi K1", color: "from-purple-500 to-pink-600" }},
  {{ id: "deepseek", name: "DeepSeek R1", provider: "DeepSeek", badge: "R1 Reasoner", color: "from-cyan-500 to-blue-600" }},
  {{ id: "groq", name: "Groq LLaMA 3.3", provider: "Meta / Groq", badge: "Ultra Fast", color: "from-orange-500 to-red-600" }},
];
'''

with open("src/lib/data.ts", "w") as out:
    out.write(ts_content)

print("Smart organic mix applied to data.ts successfully!")
