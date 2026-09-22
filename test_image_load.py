import urllib.request

test_urls = [
    "https://promptdexter.com/images/explore-thumbnails/97401366.webp",
    "https://promptdexter.com/images/explore-thumbnails/59145928.webp"
]

for u in test_urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=5)
        print(f"Status {res.status} for {u}, size: {len(res.read())} bytes")
    except Exception as e:
        print(f"Error {u}: {e}")
