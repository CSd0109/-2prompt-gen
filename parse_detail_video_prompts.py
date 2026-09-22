import urllib.request
import re
import html
import json
import concurrent.futures

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

with open("generateprompt_videos.json", "r") as f:
    items = json.load(f)

results = []
executor = concurrent.futures.ThreadPoolExecutor(max_workers=8)

def fetch_detail(item, idx):
    url = item["url"]
    try:
        req = urllib.request.Request(url, headers=headers)
        page_html = urllib.request.urlopen(req, timeout=12).read().decode('utf-8')
        
        # Look for the exact prompt content inside pre or blockquote or prompt-text container
        pre_m = re.search(r'<pre[^>]*>(.*?)</pre>', page_html, re.DOTALL)
        if pre_m:
            full_prompt = html.unescape(pre_m.group(1).strip())
        else:
            # check textarea or code
            code_m = re.search(r'<code[^>]*>(.*?)</code>', page_html, re.DOTALL)
            full_prompt = html.unescape(code_m.group(1).strip()) if code_m else item["description"]
            
        models = ["Sora", "Runway Gen-3", "Luma Dream", "Kling AI", "Veo 2"]
        model = models[idx % len(models)]
        
        return {
            "id": f"gen-vid-{idx+1}",
            "title": item["title"],
            "category": "video",
            "model": model,
            "thumbnail": item["thumbnail"],
            "aspectRatio": "16:9",
            "prompt": full_prompt,
            "negativePrompt": "blurry, low resolution, static, jittery motion, deformed physics",
            "views": f"{92 + idx * 7.5:.1f}K",
            "likes": f"{8.4 + idx * 0.9:.1f}K",
            "timestamp": f"{(idx % 5) + 1} days ago",
            "creator": {
                "name": "2Prompt Creator",
                "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
                "verified": True
            },
            "tags": ["Video", "GeneratePrompt", "4K", model],
            "suggestedTools": ["chatgpt", "gemini"]
        }
    except Exception as e:
        print(f"Error {url}: {e}")
        return None

futures = [executor.submit(fetch_detail, item, i) for i, item in enumerate(items)]
for f in concurrent.futures.as_completed(futures):
    res = f.result()
    if res:
        results.append(res)

print(f"Transferred {len(results)} detailed video prompts from generateprompt.net!")
with open("generateprompt_ready.json", "w") as out:
    json.dump(results, out, indent=2)

