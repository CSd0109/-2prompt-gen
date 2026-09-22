import json
import re

with open("src/lib/data.ts", "r") as f:
    text = f.read()

m = re.search(r'export const SAMPLE_PROMPTS: PromptItem\[\] = (\[.*?\]);\n\nexport const AI_MODELS', text, re.DOTALL)
existing_prompts = json.loads(m.group(1))

with open("generateprompt_ready.json", "r") as f:
    gen_videos = json.load(f)

# Insert the new generateprompt video cards right at the very front of video prompts
combined = gen_videos + existing_prompts

# Ensure our brand
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

with open("src/lib/data.ts", "w") as out:
    out.write(ts_content)

print(f"data.ts successfully updated with total {len(combined)} prompts (including GeneratePrompt.net video prompts)!")
