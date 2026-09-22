import json
import re

with open("src/lib/data.ts", "r") as f:
    text = f.read()

m = re.search(r'export const SAMPLE_PROMPTS: PromptItem\[\] = (\[.*?\]);\n\nexport const AI_MODELS', text, re.DOTALL)
existing = json.loads(m.group(1))

with open("prompthome_ready.json", "r") as f:
    new_vids = json.load(f)

# Put the new high-end video prompts right at index 0 and interspersed
# Let's take the first 4 to head the feed, and intersperse the rest
top_new = new_vids[:4]
rest_new = new_vids[4:]

merged = []
# Blend intelligently
merged.extend(top_new)

r_idx = 0
for i, item in enumerate(existing):
    merged.append(item)
    if (i + 1) % 6 == 0 and r_idx < len(rest_new):
        merged.append(rest_new[r_idx])
        r_idx += 1

while r_idx < len(rest_new):
    merged.append(rest_new[r_idx])
    r_idx += 1

# Brand safeguard
for p in merged:
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

export const SAMPLE_PROMPTS: PromptItem[] = {json.dumps(merged, indent=2)};

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

print(f"data.ts successfully updated with total {len(merged)} prompts (including ThePromptHome 100+ Video Prompts library)!")
