import urllib.request
import re
import json
import html
import concurrent.futures
import time

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

categories = [
    '/prompts/animals', '/prompts/food', '/prompts/illustration', '/prompts/people', 
    '/prompts/cyberpunk', '/prompts/surreal', '/prompts/sci-fi', '/prompts/vintage', 
    '/prompts/nature', '/prompts/architecture', '/prompts/digital-art', '/prompts/couple', 
    '/prompts/editorial', '/prompts/product-photography', '/prompts/selfie', 
    '/prompts/black-and-white', '/prompts/traditional-art', '/prompts/fitness-and-sports', 
    '/prompts/wedding', '/prompts/fashion', '/prompts/vehicles', '/prompts/interiors', 
    '/prompts/travel', '/prompts/anime', '/prompts/portrait', '/prompts/3d', '/prompts/cinematic'
]

discovered_cards = {} # link -> (thumb, alt, category)

print("Scraping all category pages...")
for cat in categories:
    url = f"https://promptdexter.com{cat}"
    try:
        req = urllib.request.Request(url, headers=headers)
        page_html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        cards = re.findall(r'<a[^>]*href="(/prompt/[^"]+)"[^>]*>.*?<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"', page_html, re.DOTALL)
        cat_name = cat.replace('/prompts/', '').capitalize()
        for link, thumb, alt in cards:
            if link not in discovered_cards:
                discovered_cards[link] = (thumb, alt, cat_name)
    except Exception as e:
        print(f"Error fetching {cat}: {e}")

print(f"Discovered total unique cards across ALL categories: {len(discovered_cards)}")

# Fetch detailed prompts using thread pool
results = []
executor = concurrent.futures.ThreadPoolExecutor(max_workers=24)

def fetch_prompt_detail(item_tuple, idx):
    link, (thumb, alt, cat_name) = item_tuple
    full_url = f"https://promptdexter.com{link}"
    try:
        req = urllib.request.Request(full_url, headers=headers)
        p_html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        pre_m = re.search(r'<pre[^>]*>(.*?)</pre>', p_html, re.DOTALL)
        prompt_text = html.unescape(pre_m.group(1).strip()) if pre_m else alt
        
        t_m = re.search(r'<title>(.*?)</title>', p_html)
        title = t_m.group(1).replace(" - AI Image Prompt", "").replace(" | PromptDexter", "").strip() if t_m else alt
        
        models = ["Midjourney v6.1", "Flux 1.1 Pro", "DALL-E 3"]
        model = models[idx % len(models)]
        
        if thumb.startswith('/'):
            thumb = f"https://promptdexter.com{thumb}"
            
        slug = link.replace("/prompt/", "")
        tags = [cat_name] + [w.capitalize() for w in slug.split('-')[:3] if len(w) > 3]
        
        return {
            "id": f"prompt-full-{idx+1}",
            "title": title,
            "category": "image",
            "model": model,
            "thumbnail": thumb,
            "aspectRatio": "16:9",
            "prompt": prompt_text,
            "negativePrompt": "blurry, deformed, oversaturated, bad anatomy, artificial artifacts, extra limbs",
            "views": f"{18 + (idx % 95) * 3.1:.1f}K",
            "likes": f"{1.9 + (idx % 45) * 0.5:.1f}K",
            "timestamp": f"{(idx % 7) + 1} days ago",
            "creator": {
                "name": "2Prompt Creator",
                "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
                "verified": True
            },
            "tags": list(set(tags)),
            "suggestedTools": ["chatgpt", "gemini"]
        }
    except Exception:
        return None

futures = [executor.submit(fetch_prompt_detail, item, i) for i, item in enumerate(discovered_cards.items())]

for f in concurrent.futures.as_completed(futures):
    res = f.result()
    if res:
        results.append(res)
        if len(results) % 50 == 0:
            print(f"Processed {len(results)} / {len(discovered_cards)} complete category prompts...")

print(f"DONE! Total complete prompts scraped: {len(results)}")

with open("all_category_prompts.json", "w") as out:
    json.dump(results, out, indent=2)

