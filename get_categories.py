import urllib.request
import re

req = urllib.request.Request('https://promptdexter.com/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
cats = re.findall(r'href="(/prompts/[^"]+)"', html)
print('Total category links found:', len(cats))
print('Categories:', list(set(cats)))
