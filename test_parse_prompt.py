import urllib.request
import re
import html

# Test parsing one slug
slug = "young-woman-in-white-anarkali-gown-seated-near-cherry-blossoms"
url = f"https://promptdexter.com/prompt/{slug}"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
content = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')

# Find thumbnail img
img_m = re.search(r'<img[^>]*src="([^"]*explore-thumbnails[^"]*)"', content)
thumb = img_m.group(1) if img_m else ""
# Find pre prompt
pre_m = re.search(r'<pre[^>]*>(.*?)</pre>', content, re.DOTALL)
prompt = html.unescape(pre_m.group(1).strip()) if pre_m else ""

print("Thumb:", thumb)
print("Prompt len:", len(prompt))
print("Prompt snippet:", prompt[:100])
