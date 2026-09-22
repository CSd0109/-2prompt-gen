import urllib.request
import re
import json
import html

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request("https://generateprompt.net/video-prompts", headers=headers)
page_html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8')

# Search for article tags or video prompt cards
# Format: <article id="prompt-video-..."><a ... href="(/video-prompts/[^"]+)"><img src="([^"]+)" alt="([^"]+)" ... <span class="... text-sm font-semibold ...">([^<]+)</span> ... <span class="... text-xs ... text-white/80">([^<]+)</span>
cards = re.findall(r'<a[^>]*href="(/video-prompts/[^"]+)".*?<img[^>]*src="([^"]+)".*?alt="([^"]*)".*?<span[^>]*font-semibold[^>]*>([^<]+)</span>.*?<span[^>]*text-white/80[^>]*>([^<]+)</span>', page_html, re.DOTALL)
print(f"Discovered generateprompt video cards: {len(cards)}")

items = []
for href, img, alt, title, desc in cards:
    items.append({
        "url": f"https://generateprompt.net{href}",
        "thumbnail": img,
        "title": html.unescape(title.strip()),
        "description": html.unescape(desc.strip())
    })

print("Sample parsed:")
for it in items[:5]:
    print(it)

with open("generateprompt_videos.json", "w") as out:
    json.dump(items, out, indent=2)

