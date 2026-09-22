import re
import json

with open('bananaprompts_gallery.html', 'r', encoding='utf-8') as f:
    text = f.read()

delimiter = '{\\"id\\":\\"'
chunks = text.split(delimiter)
print(f"Total chunks found: {len(chunks)}")

items = []
seen_imgs = set()

for c in chunks[1:]:
    chunk_id = c.split('\\"')[0]
    
    title_m = re.search(r'\\"title\\":\\"(.*?)\\"', c)
    title = title_m.group(1) if title_m else ''
    
    prompt_m = re.search(r'\\"prompt\\":\\"(.*?)\\"', c)
    prompt = prompt_m.group(1) if prompt_m else ''
    
    img_m = re.search(r'\\"imageUrl\\":\\"(.*?)\\"', c)
    img = img_m.group(1) if img_m else ''
    
    if img and prompt:
        clean_img = img.replace('\\', '').strip()
        if clean_img in seen_imgs:
            continue
        seen_imgs.add(clean_img)
        
        # Clean up text
        clean_prompt = prompt.replace('\\r\\n', ' ').replace('\\n', ' ').replace('\\"', '"').strip()
        clean_title = title.replace('\\"', '"').strip()
        
        # Determine model
        model = "Flux 1.1 Pro" if "flux" in clean_prompt.lower() else "Midjourney v6.1"
        
        items.append({
            "id": f"banana-{chunk_id}",
            "title": clean_title or "BananaPrompts Master Art",
            "category": "image",
            "model": model,
            "thumbnail": clean_img,
            "aspectRatio": "16:9",
            "prompt": clean_prompt,
            "negativePrompt": "blurry, low quality, distorted, extra limbs, bad anatomy, watermark",
            "views": f"{30 + len(items) % 50}.{len(items) % 9}K",
            "likes": f"{5 + len(items) % 15}.{len(items) % 9}K",
            "timestamp": "Just now",
            "creator": {
                "name": "BananaPrompts",
                "avatar": "https://bananaprompts.org/logo.png",
                "verified": True
            },
            "tags": ["BananaPrompts", "Trending", "Photorealistic", "Aesthetic"],
            "suggestedTools": ["chatgpt", "gemini"]
        })

print(f"Extracted {len(items)} unique prompt items from bananaprompts.org")

with open('bananaprompts_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(items, f, indent=2, ensure_ascii=False)

print("Saved to bananaprompts_extracted.json")
