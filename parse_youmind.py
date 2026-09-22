import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request("https://youmind.com/", headers=headers)
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8')

# Search for recommendations, images, videos, deliverables
items = []

# 1. Made with youmind deliverables
articles = re.findall(r'<article>.*?<a[^>]*href="([^"]+)".*?<img[^>]*src="([^"]+)".*?<h3>([^<]+)</h3>.*?<p>([^<]+)</p>', html, re.DOTALL)
print(f"Found deliverables: {len(articles)}")
for href, img, title, cat in articles:
    items.append({
        "type": cat.strip().lower(),
        "title": title.strip(),
        "thumbnail": img.strip(),
        "url": href.strip()
    })

# 2. Ready example cards (slides, video, image)
examples = re.findall(r'<button class="ready-example-card[^"]*"[^>]*>.*?<(img|video)[^>]*src="([^"]+)".*?<p[^>]*class="ready-example-title"[^>]*>([^<]+)</p>', html, re.DOTALL)
print(f"Found ready examples: {len(examples)}")
for tag, src, title in examples:
    cat = "video" if tag == "video" else "image"
    items.append({
        "type": cat,
        "title": title.strip(),
        "thumbnail": src.strip(),
        "url": "https://youmind.com"
    })

print(f"Total YouMind features & items extracted: {len(items)}")
for it in items[:10]:
    print(it)

with open("youmind_extracted.json", "w") as f:
    json.dump(items, f, indent=2)

