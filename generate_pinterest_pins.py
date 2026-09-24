import os
import glob
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUTPUT_DIR = "/home/dhitalsunil/Downloads/pinterest_pins"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Find system fonts
FONT_BOLD_PATH = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
if not os.path.exists(FONT_BOLD_PATH):
    FONT_BOLD_PATH = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

FONT_REG_PATH = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
if not os.path.exists(FONT_REG_PATH):
    FONT_REG_PATH = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"

# Available source thumbnails
THUMB_DIR = "/home/dhitalsunil/2prompt-gen/public/thumbnails"
available_thumbs = glob.glob(f"{THUMB_DIR}/*.webp") + glob.glob("/home/dhitalsunil/2prompt-gen/public/*.jpg")

PINS_CONFIG = [
    {
        "badge": "★ VIRAL AI TREND 2026 ★",
        "title": "AI Couple Prompts",
        "subtitle": "Turn 2 Photos into 1 Cinematic Portrait",
        "cta": "GET FREE PROMPTS • NO LOGIN",
        "color": (244, 63, 94), # Rose
        "thumb_idx": 0
    },
    {
        "badge": "★ #1 FREE AI STUDIO ★",
        "title": "Free AI Prompt\nGenerator",
        "subtitle": "Craft Perfect Prompts in 3 Seconds",
        "cta": "Midjourney • ChatGPT • Flux • Claude",
        "color": (124, 92, 252), # Purple
        "thumb_idx": 1
    },
    {
        "badge": "★ 1080P HD • NO WATERMARK ★",
        "title": "Social Media Video\nDownloader",
        "subtitle": "Save TikTok, Reels & Shorts Fast",
        "cta": "100% Free • Unlimited MP4 Saver",
        "color": (59, 130, 246), # Blue
        "thumb_idx": 2
    },
    {
        "badge": "★ MIDJOURNEY V6.1 ★",
        "title": "Ultra-Realistic\nPortrait Prompts",
        "subtitle": "8K Studio Lighting & 85mm Lens Specs",
        "cta": "Copy-Paste Prompts Ready",
        "color": (236, 72, 153), # Pink
        "thumb_idx": 3
    },
    {
        "badge": "★ FLUX 1.1 PRO ★",
        "title": "Master Flux AI\nPrompts Cheat Sheet",
        "subtitle": "Negative Prompts + Hyperreal Textures",
        "cta": "Zero Subscription • Zero Limits",
        "color": (16, 185, 129), # Emerald
        "thumb_idx": 4
    },
    {
        "badge": "★ SORA & VEO 3 ★",
        "title": "Cinematic AI Video\nPrompt Formulas",
        "subtitle": "Dynamic Camera Movements & Pan Shots",
        "cta": "Viral TikTok & Reels Video Prompts",
        "color": (245, 158, 11), # Amber
        "thumb_idx": 5
    },
    {
        "badge": "★ FASHION & EDITORIAL ★",
        "title": "Luxury Fashion\nPhotoshoot Prompts",
        "subtitle": "Vogue Style Aesthetic & Haute Couture",
        "cta": "1,400+ Curated Community Prompts",
        "color": (168, 85, 247), # Violet
        "thumb_idx": 6
    },
    {
        "badge": "★ WATERMARK REMOVER ★",
        "title": "Download TikTok\nWithout Watermark",
        "subtitle": "High-Speed Direct MP4 Video Downloader",
        "cta": "Works on iPhone & Android Instantly",
        "color": (14, 165, 233), # Sky Blue
        "thumb_idx": 7
    },
    {
        "badge": "★ CHATGPT-4O & CLAUDE ★",
        "title": "Master Prompt\nEngineering Guide",
        "subtitle": "10x Better AI Outputs in Seconds",
        "cta": "100% Free Web Studio",
        "color": (99, 102, 241), # Indigo
        "thumb_idx": 8
    },
    {
        "badge": "★ 100% FREE FOREVER ★",
        "title": "World's Best AI\nPrompt Studio",
        "subtitle": "Reverse-Engineer Prompts from Any Image",
        "cta": "No Signup • Unlimited Access",
        "color": (139, 92, 246), # Purple
        "thumb_idx": 9
    }
]

WIDTH, HEIGHT = 1000, 1500

for i, conf in enumerate(PINS_CONFIG):
    canvas = Image.new("RGBA", (WIDTH, HEIGHT), (16, 24, 40, 255))
    
    # Load background image
    if available_thumbs:
        thumb_path = available_thumbs[conf["thumb_idx"] % len(available_thumbs)]
        try:
            bg_img = Image.open(thumb_path).convert("RGBA")
            # Resize and crop to fill
            bg_ratio = bg_img.width / bg_img.height
            target_ratio = WIDTH / HEIGHT
            if bg_ratio > target_ratio:
                new_h = HEIGHT
                new_w = int(new_h * bg_ratio)
            else:
                new_w = WIDTH
                new_h = int(new_w / bg_ratio)
            
            bg_img = bg_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            x_offset = (new_w - WIDTH) // 2
            y_offset = (new_h - HEIGHT) // 2
            bg_crop = bg_img.crop((x_offset, y_offset, x_offset + WIDTH, y_offset + HEIGHT))
            canvas.paste(bg_crop, (0, 0))
        except Exception as e:
            print("Error loading bg:", e)

    # Dark cinematic gradient overlay
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw_overlay = ImageDraw.Draw(overlay)
    
    # Top gradient
    for y in range(400):
        alpha = int(220 * (1 - y / 400))
        draw_overlay.line([(0, y), (WIDTH, y)], fill=(10, 15, 30, alpha))
        
    # Bottom heavy dark gradient for text readability
    for y in range(600, HEIGHT):
        prog = (y - 600) / (HEIGHT - 600)
        alpha = int(245 * prog)
        draw_overlay.line([(0, y), (WIDTH, y)], fill=(10, 15, 30, alpha))
        
    canvas = Image.alpha_composite(canvas, overlay)
    draw = ImageDraw.Draw(canvas)
    
    # Load fonts
    font_badge = ImageFont.truetype(FONT_BOLD_PATH, 28)
    font_title = ImageFont.truetype(FONT_BOLD_PATH, 66)
    font_subtitle = ImageFont.truetype(FONT_REG_PATH, 34)
    font_cta = ImageFont.truetype(FONT_BOLD_PATH, 30)
    font_brand = ImageFont.truetype(FONT_BOLD_PATH, 36)

    # 1. Top Glowing Brand Header
    draw.rounded_rectangle([(60, 60), (WIDTH - 60, 130)], radius=35, fill=(15, 23, 42, 220), outline=(255, 255, 255, 60), width=2)
    brand_text = "✦ aipromptgenerate.xyz ✦"
    draw.text((WIDTH // 2, 95), brand_text, font=font_brand, fill=(255, 255, 255), anchor="mm")

    # 2. Hero Center Card
    card_top = 800
    card_bottom = 1420
    draw.rounded_rectangle([(50, card_top), (WIDTH - 50, card_bottom)], radius=45, fill=(15, 23, 42, 235), outline=(255, 255, 255, 45), width=2)
    
    # Badge Pill
    badge_color = conf["color"]
    draw.rounded_rectangle([(90, card_top + 45), (WIDTH - 90, card_top + 105)], radius=30, fill=badge_color)
    draw.text((WIDTH // 2, card_top + 75), conf["badge"], font=font_badge, fill=(255, 255, 255), anchor="mm")
    
    # Title
    draw.text((WIDTH // 2, card_top + 185), conf["title"], font=font_title, fill=(255, 255, 255), anchor="mm", align="center", spacing=12)
    
    # Subtitle
    draw.text((WIDTH // 2, card_top + 345), conf["subtitle"], font=font_subtitle, fill=(203, 213, 225), anchor="mm", align="center")
    
    # CTA Button
    cta_btn_y = card_top + 430
    draw.rounded_rectangle([(90, cta_btn_y), (WIDTH - 90, cta_btn_y + 80)], radius=40, fill=(255, 255, 255), outline=badge_color, width=3)
    draw.text((WIDTH // 2, cta_btn_y + 40), f"{conf['cta']}  »", font=font_cta, fill=(15, 23, 42), anchor="mm")

    # Save output
    out_path = os.path.join(OUTPUT_DIR, f"pinterest_pin_{i+1:02d}.png")
    canvas.convert("RGB").save(out_path, "PNG", quality=95)
    print(f"Generated: {out_path}")

print("All 10 Pinterest Pins successfully created!")
