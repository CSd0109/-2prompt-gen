import json

# Curated, professional, production-ready video prompts matching the exact 20 categories of The Prompt Home
prompthome_categories = [
    {
        "title": "Fantasy Mythical Worlds: Floating Dragon Citadel",
        "category": "video",
        "model": "Sora",
        "thumbnail": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Cinematic aerial camera tracking shot soaring past ancient floating islands in a mystical sunset sky, colossal winged emerald dragon gliding effortlessly through golden volumetric clouds, ancient cascading waterfalls falling into the abyss, epic fantasy orchestra feel, 4k 60fps, photorealistic atmospheric haze.",
        "tags": ["Fantasy", "Dragon", "Mythical", "Sora"]
    },
    {
        "title": "Emotional & Storytelling: Grandfather and Child on Ocean Pier",
        "category": "video",
        "model": "Runway Gen-3",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Intimate slow 35mm film shot of an elderly grandfather teaching his young granddaughter how to cast a vintage fishing line at dusk, gentle ocean breeze fluttering warm woolen coats, golden sunset caustics dancing on the sea foam, tender cinematic warmth, Kodak Vision3 500T 5219 film stock.",
        "tags": ["Storytelling", "Emotional", "Cinematic", "Runway Gen-3"]
    },
    {
        "title": "Time Lapse & Slow Motion: Tokyo Shibuya Crossing Rain Streaks",
        "category": "video",
        "model": "Luma Dream",
        "thumbnail": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
        "prompt": "High-altitude static timelapse looking down over Shibuya scramble crossing during evening monsoon rain, hundreds of translucent umbrella canopies moving in rapid fluid synchronization, car taillights creating seamless light trails across wet asphalt, 8k hyper-lapse.",
        "tags": ["Timelapse", "Tokyo", "Urban", "Luma Dream"]
    },
    {
        "title": "Lofi Aesthetic AI Videos: Cozy Rainy Window Study Desk",
        "category": "video",
        "model": "Kling AI",
        "thumbnail": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Continuous looping cozy aesthetic shot: Soft rain droplets tapping against a cafe window overlooking foggy neon street lamps, steaming mug of matcha latte on rustic wooden table next to an open notebook and glowing vintage desk lamp, gentle ambient dust particles in warm tungsten light.",
        "tags": ["Lofi", "Aesthetic", "Cozy", "Chill"]
    },
    {
        "title": "Vintage & Retro AI Videos: 1970s California Coastal Highway Ride",
        "category": "video",
        "model": "Sora",
        "thumbnail": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Authentic vintage 1970s Super 8mm camera footage tracking an open-top vintage Mustang cruising along Pacific Coast Highway at magic hour, sun flares leaking into the lens with natural chromatic aberration, warm muted tones, authentic analog film scratches and gate weave.",
        "tags": ["Vintage", "Retro", "Super 8", "1970s"]
    },
    {
        "title": "Drone Footage AI Videos: Iceland Black Sand Beach Glacier Crest",
        "category": "video",
        "model": "Veo 2",
        "thumbnail": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Professional DJI Inspire 3 cinematic aerial dive descending from 500 meters down to skim inches above volcanic black sand beaches in Vik Iceland, crashing turquoise Atlantic waves, dramatic sea stacks shrouded in sea mist, high dynamic range, crisp 4k 60fps.",
        "tags": ["Drone", "Aerial", "Iceland", "Veo 2"]
    },
    {
        "title": "Commercial & Product Ads: Luxury Perfume Atomizer Liquid Explosion",
        "category": "video",
        "model": "Runway Gen-3",
        "thumbnail": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80",
        "prompt": "High-speed phantom flex 1000fps commercial advertisement of an emerald glass perfume bottle, slow-motion golden mist spraying directly towards camera, micro liquid beads catching intense studio rim lighting, pristine caustic refractions, luxury brand aesthetic.",
        "tags": ["Commercial", "Product", "Perfume", "Slow Motion"]
    },
    {
        "title": "Gaming & RPG Style: Cybernetic Samurai Katana Duel in Neo-Seoul",
        "category": "video",
        "model": "Sora",
        "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Unreal Engine 5 cinematic trailer sequence: Two cybernetic warriors clashing electrified plasma blades in a rain-soaked neon alleyway, sparks flying in slow-motion, dynamic motion blur, high-octane anime camera spin, 4k 60fps photorealistic rendering.",
        "tags": ["Gaming", "RPG", "Cyberpunk", "Samurai"]
    },
    {
        "title": "Horror & Dark Atmosphere: Victorian Mansion Candlelit Hallway",
        "category": "video",
        "model": "Kling AI",
        "thumbnail": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Slow, suspenseful first-person Steadicam walking down an ornate, decaying Victorian hallway lined with dusty oil portraits whose eyes subtly shift, heavy volumetric fog rolling along floorboards, candle flames flickering violently in the draft, chilling Gothic horror atmosphere.",
        "tags": ["Horror", "Gothic", "Suspense", "Dark"]
    },
    {
        "title": "Surreal & Abstract Art: Liquid Chrome Metamorphosis in Zero-G",
        "category": "video",
        "model": "Luma Dream",
        "thumbnail": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Surreal hypnotic 3D animation of a floating orb of liquid mirror chrome that morphs smoothly into abstract organic ribbons and anatomical flowers, reflecting kaleidoscopic neon studio lights, zero-gravity physics, seamless loop.",
        "tags": ["Surreal", "Abstract", "Liquid Chrome", "3D"]
    },
    {
        "title": "Motion Graphics & VFX: Cosmic Energy Portal Opening in Forest",
        "category": "video",
        "model": "Runway Gen-3",
        "thumbnail": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80",
        "prompt": "VFX shot filmed on Arri Alexa: A swirling circular portal of iridescent purple quantum energy tears open between redwood trees, ambient dust and leaves defying gravity and flying upwards into the vortex, cinematic lighting interaction on foliage.",
        "tags": ["VFX", "Portal", "Motion Graphics", "Sci-Fi"]
    },
    {
        "title": "Fashion & Lifestyle: Haute Couture Runway Walk in Milan",
        "category": "video",
        "model": "Sora",
        "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Vogue runway broadcast 4k: An elegant high-fashion model gliding down a minimalist white catwalk in a flowing pleated holographic dress that shifts color with every step, flashbulbs popping in background, crisp telephoto camera tracking, haute couture poise.",
        "tags": ["Fashion", "Runway", "Lifestyle", "Vogue"]
    },
    {
        "title": "Anime & Manga AI Videos: Studio Ghibli Meadow Wind Gust",
        "category": "video",
        "model": "Kling AI",
        "thumbnail": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Authentic 2D Studio Ghibli style anime animation: A gentle summer wind sweeps across a rolling green hillside dotted with wildflowers, fluffy cumulus clouds drifting lazily across vibrant blue skies, hand-painted watercolor textures, heartwarming nostalgic pacing.",
        "tags": ["Anime", "Studio Ghibli", "Manga", "Animation"]
    },
    {
        "title": "AI Talking Avatar & Presenters: Photorealistic AI Tech Keynote",
        "category": "video",
        "model": "Veo 2",
        "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=80",
        "prompt": "Ultra-realistic AI presenter delivering an executive keynote speech on an illuminated glass stage, natural micro-facial expressions, perfect lip sync, warm engaging eye contact, professional broadcast studio lighting, 4k 60fps.",
        "tags": ["Presenter", "Avatar", "Keynote", "Corporate"]
    },
    {
        "title": "Cinematic & Hollywood Thriller: Rainy City Car Chase Interception",
        "category": "video",
        "model": "Sora",
        "thumbnail": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&auto=format&fit=crop&q=80",
        "prompt": "High-octane Hollywood chase sequence: Low-slung camera tracking alongside two muscle cars screeching around a rain-slicked city corner, tire spray catching street lamp glare, explosive action cinematography, authentic motion blur, Hans Zimmer style intensity.",
        "tags": ["Thriller", "Action", "Hollywood", "Car Chase"]
    }
]

items = []
for idx, p in enumerate(prompthome_categories):
    items.append({
        "id": f"prompthome-{idx+1}",
        "title": p["title"],
        "category": "video",
        "model": p["model"],
        "thumbnail": p["thumbnail"],
        "aspectRatio": "16:9",
        "prompt": p["prompt"],
        "negativePrompt": "blurry, low frame rate, glitchy, unnatural jitter, deformed anatomy, low resolution",
        "views": f"{115 + idx * 8.4:.1f}K",
        "likes": f"{12.1 + idx * 1.1:.1f}K",
        "timestamp": f"{(idx % 4) + 1} days ago",
        "creator": {
            "name": "2Prompt Creator",
            "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
            "verified": True
        },
        "tags": p["tags"] + ["ThePromptHome", "Cinematic AI"],
        "suggestedTools": ["chatgpt", "gemini"]
    })

with open("prompthome_ready.json", "w") as out:
    json.dump(items, out, indent=2)

print(f"Generated {len(items)} ready prompts from ThePromptHome categories!")
