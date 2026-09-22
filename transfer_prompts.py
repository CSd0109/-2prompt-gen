import urllib.request
import re
import json
import html
import time
import os

headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64)'}

print("Fetching homepage...")
req = urllib.request.Request("https://promptdexter.com/", headers=headers)
home_html = urllib.request.urlopen(req).read().decode('utf-8')

# Find all prompt links and thumbnail pairs
cards_raw = re.findall(r'<a[^>]*href="(/prompt/[^"]+)"[^>]*>.*?<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"', home_html, re.DOTALL)
print(f"Found {len(cards_raw)} prompt cards on homepage.")

items = []
count = 0

for link, thumb, alt in cards_raw[:30]:
    prompt_url = "https://promptdexter.com" + link
    thumb_url = "https://promptdexter.com" + thumb if thumb.startswith('/') else thumb
    
    print(f"Scraping [{count+1}/30]: {link}")
    try:
        req_p = urllib.request.Request(prompt_url, headers=headers)
        p_html = urllib.request.urlopen(req_p, timeout=10).read().decode('utf-8')
        
        # Extract pre tag prompt
        m = re.search(r'<pre[^>]*>(.*?)</pre>', p_html, re.DOTALL)
        full_prompt = html.unescape(m.group(1).strip()) if m else alt
        
        # Title
        t_m = re.search(r'<title>(.*?)</title>', p_html)
        title = t_m.group(1).replace(" - AI Image Prompt", "").replace(" | PromptDexter", "").strip() if t_m else alt
        
        # Tags / keywords from URL
        slug = link.replace("/prompt/", "")
        tags = [w.capitalize() for w in slug.split('-')[:4] if len(w) > 3]
        if not tags:
            tags = ["PromptDexter", "AI Art", "Photography"]
            
        items.append({
            "id": f"pd-{count+1}",
            "title": title,
            "category": "image",
            "model": "Flux 1.1 Pro" if count % 2 == 0 else "Midjourney v6.1",
            "thumbnail": thumb_url,
            "aspectRatio": "16:9",
            "prompt": full_prompt,
            "negativePrompt": "blurry, low quality, oversaturated, deformed proportions, plastic skin, distorted anatomy",
            "views": f"{12 + (count*3.4):.1f}K",
            "likes": f"{1.2 + (count*0.3):.1f}K",
            "timestamp": f"{(count%5)+1} days ago",
            "creator": {
                "name": "PromptDexter Verified",
                "avatar": "https://promptdexter.com/android-chrome-512x512.png",
                "verified": True
            },
            "tags": tags,
            "suggestedTools": ["chatgpt", "gemini"]
        })
        count += 1
        time.sleep(0.2)
    except Exception as e:
        print(f"Error scraping {link}: {e}")

with open("promptdexter_transferred.json", "w") as f:
    json.dump(items, f, indent=2)

print(f"Successfully scraped and saved {len(items)} prompts!")
