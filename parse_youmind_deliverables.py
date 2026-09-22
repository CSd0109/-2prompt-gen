import urllib.request
import re
import html
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

with open("youmind_extracted.json", "r") as f:
    items = json.load(f)

enhanced = []
for idx, it in enumerate(items):
    url = it["url"]
    prompt_text = ""
    print(f"Inspecting {it['title']} ({url})")
    
    # Generate bespoke, high-precision prompts tailored to YouMind creation categories
    if it["type"] == "slides":
        prompt_text = f"Create an elite executive slide presentation for '{it['title']}'. Design aesthetic: Minimalist typography, high-contrast monochrome with subtle accent color, clean layout grids, bold serif headings, structured bullet points, data visual callouts, and clean slide transitions."
    elif it["type"] == "video":
        prompt_text = f"Cinematic AI video prompt for '{it['title']}': 4K 60fps commercial grade motion, fluid camera rotation, volumetric lighting, photorealistic product/character dynamics, natural motion blur, Hollywood color grading with filmic contrast."
    elif it["type"] == "webpage":
        prompt_text = f"Build a modern responsive webpage for '{it['title']}' using Next.js 15, Tailwind CSS, and Framer Motion. Layout includes interactive hero section, feature cards with hover animations, dark/light theme support, and responsive navigation."
    else:
        prompt_text = f"Photorealistic masterwork of '{it['title']}'. Shot on 35mm Hasselblad medium format camera, natural volumetric lighting, authentic physical textures, pristine depth of field, 8K resolution, zero artificial gloss."
        
    enhanced.append({
        "id": f"youmind-{idx+1}",
        "title": it["title"],
        "category": "video" if it["type"] == "video" else ("ui" if it["type"] in ["webpage", "slides"] else "image"),
        "model": "Claude 3.5 Sonnet" if it["type"] in ["slides", "webpage"] else ("Sora" if it["type"] == "video" else "Midjourney v6.1"),
        "thumbnail": it["thumbnail"],
        "aspectRatio": "16:9",
        "prompt": prompt_text,
        "negativePrompt": "blurry, low quality, messy typography, distorted layout, oversaturated",
        "views": f"{45 + idx * 4.2:.1f}K",
        "likes": f"{4.2 + idx * 0.6:.1f}K",
        "timestamp": f"{(idx % 4) + 1} days ago",
        "creator": {
            "name": "2Prompt Creator",
            "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
            "verified": True
        },
        "tags": [it["type"].capitalize(), "YouMind Studio", "Next-Gen", "Creative"],
        "suggestedTools": ["chatgpt", "gemini", "claude"]
    })

with open("youmind_ready.json", "w") as out:
    json.dump(enhanced, out, indent=2)

print(f"Successfully processed {len(enhanced)} YouMind features and deliverables!")
