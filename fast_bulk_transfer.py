import urllib.request
import re
import json
import html
import concurrent.futures
import time
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

print("Reading sitemap...")
req = urllib.request.Request("https://promptdexter.com/sitemap.xml", headers=headers)
xml = urllib.request.urlopen(req, timeout=15).read().decode('utf-8')
urls = [u for u in re.findall(r'<loc>(.*?)</loc>', xml) if '/prompt/' in u]

print(f"Total prompt URLs discovered: {len(urls)}")
# Select top 200 diverse prompts across categories
target_urls = urls[:200]

items = []
lock = concurrent.futures.ThreadPoolExecutor(max_workers=16)

def fetch_single(url, index):
    try:
        req_p = urllib.request.Request(url, headers=headers)
        html_text = urllib.request.urlopen(req_p, timeout=12).read().decode('utf-8')
        
        # Extract pre tag prompt
        pre_m = re.search(r'<pre[^>]*>(.*?)</pre>', html_text, re.DOTALL)
        if not pre_m:
            return None
        full_prompt = html.unescape(pre_m.group(1).strip())
        
        # Extract Thumbnail
        img_m = re.search(r'<img[^>]*src="([^"]*explore-thumbnails[^"]*)"', html_text)
        if not img_m:
            return None
        thumb = img_m.group(1)
        if thumb.startswith('/'):
            thumb = "https://promptdexter.com" + thumb
            
        # Title
        t_m = re.search(r'<title>(.*?)</title>', html_text)
        title = t_m.group(1).replace(" - AI Image Prompt", "").replace(" | PromptDexter", "").strip() if t_m else "Creative Concept"
        
        # Tags from slug
        slug = url.split('/prompt/')[-1]
        tags = [w.capitalize() for w in slug.split('-')[:4] if len(w) > 3]
        if not tags:
            tags = ["Photography", "Photoreal", "8K"]
            
        models = ["Midjourney v6.1", "Flux 1.1 Pro", "DALL-E 3"]
        model = models[index % len(models)]
        
        return {
            "id": f"prompt-{index+1}",
            "title": title,
            "category": "image",
            "model": model,
            "thumbnail": thumb,
            "aspectRatio": "16:9",
            "prompt": full_prompt,
            "negativePrompt": "blurry, deformed, oversaturated, bad anatomy, artificial artifacts, extra limbs",
            "views": f"{14 + (index % 80) * 2.3:.1f}K",
            "likes": f"{1.5 + (index % 40) * 0.4:.1f}K",
            "timestamp": f"{(index % 6) + 1} days ago",
            "creator": {
                "name": "2Prompt Creator",
                "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
                "verified": True
            },
            "tags": tags,
            "suggestedTools": ["chatgpt", "gemini"]
        }
    except Exception as e:
        return None

futures = [lock.submit(fetch_single, url, i) for i, url in enumerate(target_urls)]

for f in concurrent.futures.as_completed(futures):
    res = f.result()
    if res:
        items.append(res)
        if len(items) % 25 == 0:
            print(f"Downloaded and processed {len(items)} prompts...")

print(f"Bulk transfer complete! Total valid prompts transferred: {len(items)}")

with open("bulk_prompts_transferred.json", "w") as out:
    json.dump(items, out, indent=2)

