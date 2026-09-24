import asyncio
import os
import glob
import math
import subprocess
from PIL import Image, ImageDraw, ImageFont
import edge_tts

OUTPUT_DIR = "/home/dhitalsunil/Downloads/video_ads"
os.makedirs(OUTPUT_DIR, exist_ok=True)
TEMP_FRAMES_DIR = "/tmp/demo_ad_frames"
os.makedirs(TEMP_FRAMES_DIR, exist_ok=True)

# Clean temp frames
for f in glob.glob(f"{TEMP_FRAMES_DIR}/*.jpg"):
    try:
        os.remove(f)
    except:
        pass

AUDIO_PATH = "/tmp/demo_voiceover.mp3"
FINAL_VIDEO_PATH = os.path.join(OUTPUT_DIR, "aipromptgenerate_interactive_product_ad.mp4")

SCRIPT = (
    "Stop struggling with AI prompts! Look how easy this is. "
    "I just go to a-i-prompt-generate dot xyz, type in my idea, "
    "like a cinematic couple laughing in a cozy coffee shop, and click Create Prompt. "
    "In literally two seconds, boom! It builds this insane, photorealistic prompt "
    "with camera angles, lighting, and negative prompts. Copy it with one tap! "
    "You get trending daily life aesthetics, film photography, viral couple portraits, "
    "and even a free watermark-free video downloader for TikTok and Reels. "
    "It's totally free, unlimited, and zero login required. "
    "Go try it right now at a-i-prompt-generate dot xyz!"
)

print("1. Generating energetic English creator voiceover...")
async def get_voice():
    communicate = edge_tts.Communicate(SCRIPT, "en-US-GuyNeural", rate="+8%", pitch="+1Hz")
    await communicate.save(AUDIO_PATH)

asyncio.run(get_voice())

# Measure duration
ffprobe_cmd = [
    "ffprobe", "-v", "error", "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1", AUDIO_PATH
]
duration = float(subprocess.check_output(ffprobe_cmd).strip())
print(f"Voiceover duration: {duration:.2f} seconds")

WIDTH, HEIGHT = 1080, 1920
FPS = 25
TOTAL_FRAMES = int(duration * FPS) + (FPS * 1) # pad 1 sec

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

font_logo = ImageFont.truetype(FONT_BOLD, 36)
font_badge = ImageFont.truetype(FONT_BOLD, 28)
font_h1 = ImageFont.truetype(FONT_BOLD, 54)
font_sub = ImageFont.truetype(FONT_REG, 32)
font_mono = ImageFont.truetype(FONT_REG, 28)
font_btn = ImageFont.truetype(FONT_BOLD, 36)

# Load real high-res trending images
THUMB_DIR = "/home/dhitalsunil/2prompt-gen/public/thumbnails"
available_thumbs = sorted(glob.glob(f"{THUMB_DIR}/*.webp") + glob.glob("/home/dhitalsunil/2prompt-gen/public/*.jpg"))

# Best picks for trending daily life & couples
img_couple = Image.open(available_thumbs[0]).convert("RGB") # Couple / pet
img_lifestyle = Image.open(available_thumbs[3]).convert("RGB") # Flash portrait
img_street = Image.open(available_thumbs[11]).convert("RGB") # Street portrait
img_fashion = Image.open(available_thumbs[14]).convert("RGB") # Editorial

def fit_crop(im, tw, th):
    a = im.width / im.height
    ta = tw / th
    if a > ta:
        nh = th
        nw = int(nh * a)
    else:
        nw = tw
        nh = int(nw / a)
    im_r = im.resize((nw, nh), Image.Resampling.LANCZOS)
    x = (nw - tw) // 2
    y = (nh - th) // 2
    return im_r.crop((x, y, x + tw, y + th))

crop_couple = fit_crop(img_couple, WIDTH, 850)
crop_lifestyle = fit_crop(img_lifestyle, WIDTH, 850)
crop_street = fit_crop(img_street, WIDTH, 850)
crop_fashion = fit_crop(img_fashion, WIDTH, 850)

PROMPT_TEXT_TO_TYPE = "Cinematic candid 35mm photo of a cute couple laughing in a cozy cafe, warm golden hour..."

print(f"2. Rendering {TOTAL_FRAMES} frames of interactive UI & trending lifestyle showcase...")

for f_i in range(TOTAL_FRAMES):
    time_s = f_i / FPS
    progress = f_i / TOTAL_FRAMES
    
    # Background Canvas: Clean Apple/Linear Dark Slate
    frame = Image.new("RGBA", (WIDTH, HEIGHT), (11, 15, 25, 255))
    draw = ImageDraw.Draw(frame)
    
    # Top Global Navbar Bar
    draw.rectangle([(0, 0), (WIDTH, 140)], fill=(17, 24, 39, 255))
    draw.line([(0, 140), (WIDTH, 140)], fill=(31, 41, 55), width=2)
    # Brand
    draw.text((70, 70), "✦ aipromptgenerate.xyz", font=font_logo, fill=(255, 255, 255), anchor="lm")
    # Live Pill
    draw.rounded_rectangle([(WIDTH - 240, 50), (WIDTH - 60, 95)], radius=20, fill=(34, 197, 94, 30), outline=(34, 197, 94), width=2)
    draw.text((WIDTH - 150, 72), "● 100% FREE", font=font_badge, fill=(34, 197, 94), anchor="mm")
    
    # Timeline Breakdown:
    # Phase 1: 0.0s - 6.5s -> Interactive Typing & Generation in Studio
    # Phase 2: 6.5s - 14.0s -> Instant Master Prompt Result & Couple Aesthetic
    # Phase 3: 14.0s - 20.0s -> Trending Daily Life & 35mm Film Showcase
    # Phase 4: 20.0s - 24.5s -> HD Video Downloader Tool Simulation
    # Phase 5: 24.5s - End   -> High-Converting Call to Action
    
    if time_s < 6.5:
        # Phase 1: Studio Prompt Command Box Simulation
        p1_prog = time_s / 6.5
        
        # Section Headline
        draw.text((WIDTH // 2, 210), "Step 1: Type Your Idea", font=font_h1, fill=(255, 255, 255), anchor="mm")
        draw.text((WIDTH // 2, 280), "Our AI builds complete camera & lighting specs in seconds", font=font_sub, fill=(156, 163, 175), anchor="mm")
        
        # Studio Card
        card_box = [(60, 360), (WIDTH - 60, 950)]
        draw.rounded_rectangle(card_box, radius=40, fill=(255, 255, 255), outline=(124, 92, 252), width=3)
        
        # Category Switcher inside card
        draw.rounded_rectangle([(90, 390), (360, 445)], radius=25, fill=(124, 92, 252))
        draw.text((225, 417), "★ Text to Image", font=font_badge, fill=(255, 255, 255), anchor="mm")
        
        draw.rounded_rectangle([(380, 390), (620, 445)], radius=25, fill=(243, 244, 246))
        draw.text((500, 417), "Text to Video", font=font_badge, fill=(107, 114, 128), anchor="mm")
        
        draw.rounded_rectangle([(640, 390), (840, 445)], radius=25, fill=(243, 244, 246))
        draw.text((740, 417), "Website UI", font=font_badge, fill=(107, 114, 128), anchor="mm")
        
        # Typing Animation
        type_len = int(min(len(PROMPT_TEXT_TO_TYPE), max(0, (time_s - 1.0) * 22)))
        curr_typed = PROMPT_TEXT_TO_TYPE[:type_len]
        
        # Textarea box
        draw.rounded_rectangle([(90, 470), (WIDTH - 90, 750)], radius=25, fill=(248, 250, 252), outline=(226, 232, 240), width=2)
        # Wrap text manually
        words = curr_typed.split(" ")
        lines = []
        cur_l = ""
        for w in words:
            if len(cur_l + " " + w) < 32:
                cur_l += (" " if cur_l else "") + w
            else:
                lines.append(cur_l)
                cur_l = w
        if cur_l:
            lines.append(cur_l)
            
        cursor = " |" if (int(time_s * 4) % 2 == 0) and (type_len < len(PROMPT_TEXT_TO_TYPE)) else ""
        for l_idx, line in enumerate(lines[:4]):
            draw.text((120, 520 + l_idx * 50), line + (cursor if l_idx == len(lines)-1 else ""), font=font_sub, fill=(30, 41, 59))
            
        # Create Prompt CTA Button inside Studio
        btn_clicked = time_s > 4.5
        btn_color = (109, 40, 217) if btn_clicked else (124, 92, 252)
        draw.rounded_rectangle([(90, 790), (WIDTH - 90, 890)], radius=35, fill=btn_color)
        
        if btn_clicked:
            draw.text((WIDTH // 2, 840), "Generating Master Prompt... (100%)", font=font_btn, fill=(255, 255, 255), anchor="mm")
        else:
            draw.text((WIDTH // 2, 840), "Create Prompt  »", font=font_btn, fill=(255, 255, 255), anchor="mm")
            
        # Below Card: Trust Badges
        draw.text((WIDTH // 2, 1030), "Zero Login Required • No Credit Caps • 100% Free Forever", font=font_sub, fill=(148, 163, 184), anchor="mm")
        
        # Bottom Image Preview Banner peek
        frame.paste(crop_couple.crop((0, 0, WIDTH, 750)), (0, 1140))
        
    elif time_s < 14.0:
        # Phase 2: Instant Master Prompt Result + Couple Aesthetic
        p2_prog = (time_s - 6.5) / 7.5
        
        draw.text((WIDTH // 2, 190), "Step 2: Instant Master Prompt", font=font_h1, fill=(255, 255, 255), anchor="mm")
        
        # Prompt Result Card (Glassmorphism look)
        draw.rounded_rectangle([(60, 250), (WIDTH - 60, 680)], radius=35, fill=(255, 255, 255), outline=(34, 197, 94), width=3)
        
        # Green copied badge
        draw.rounded_rectangle([(90, 280), (380, 335)], radius=20, fill=(34, 197, 94))
        draw.text((235, 307), "✓ COPIED TO CLIPBOARD", font=font_badge, fill=(255, 255, 255), anchor="mm")
        
        draw.text((WIDTH - 250, 307), "Midjourney v6.1 & Flux", font=font_badge, fill=(100, 116, 139), anchor="mm")
        
        # Formatted Result Text
        res_text = (
            "\"Cinematic 35mm film photography of a young couple laughing in a sun-drenched\n"
            "vintage coffee shop, golden hour backlighting, 85mm f/1.4 portrait lens,\n"
            "shallow depth of field, photorealistic skin pores and natural textures,\n"
            "candid emotion, atmospheric dust motes --ar 16:9 --v 6.1 --stylize 250\""
        )
        draw.text((90, 370), res_text, font=font_sub, fill=(15, 23, 42), spacing=12)
        
        # Bottom Visual: High-res Couple Photo Result (Dynamic Zoom)
        zoom_sc = 1.0 + (p2_prog * 0.08)
        zw = int(WIDTH * zoom_sc)
        zh = int(1050 * zoom_sc)
        cp_resized = crop_couple.resize((zw, zh), Image.Resampling.BILINEAR)
        cx = (zw - WIDTH) // 2
        cy = (zh - 1050) // 2
        frame.paste(cp_resized.crop((cx, cy, cx + WIDTH, cy + 1050)), (0, 750))
        
        # Overlay Pill on image
        draw.rounded_rectangle([(70, 770), (450, 835)], radius=25, fill=(15, 23, 42, 230), outline=(244, 63, 94), width=2)
        draw.text((260, 802), "★ AI COUPLE TREND 2026", font=font_badge, fill=(244, 63, 94), anchor="mm")

    elif time_s < 20.0:
        # Phase 3: Trending Daily Life, Street & Film Aesthetics
        p3_prog = (time_s - 14.0) / 6.0
        
        draw.text((WIDTH // 2, 190), "Trending Daily Life Aesthetics", font=font_h1, fill=(255, 255, 255), anchor="mm")
        draw.text((WIDTH // 2, 260), "1,400+ Curated Prompts for High-Fashion, Street & Film Grain", font=font_sub, fill=(203, 213, 225), anchor="mm")
        
        # 2-Grid Display of Trending Realities
        # Top image: Street / Lifestyle
        frame.paste(fit_crop(img_lifestyle, WIDTH - 120, 680), (60, 310))
        draw.rounded_rectangle([(60, 310), (WIDTH - 60, 990)], radius=35, outline=(255, 255, 255, 80), width=3)
        draw.rounded_rectangle([(90, 340), (460, 400)], radius=20, fill=(15, 23, 42, 220))
        draw.text((275, 370), "★ Cottagecore Night Flash", font=font_badge, fill=(255, 255, 255), anchor="mm")
        
        # Bottom image: Fashion / Editorial
        frame.paste(fit_crop(img_fashion, WIDTH - 120, 720), (60, 1040))
        draw.rounded_rectangle([(60, 1040), (WIDTH - 60, 1760)], radius=35, outline=(255, 255, 255, 80), width=3)
        draw.rounded_rectangle([(90, 1070), (480, 1130)], radius=20, fill=(15, 23, 42, 220))
        draw.text((285, 1100), "★ South Asian Editorial 8K", font=font_badge, fill=(255, 255, 255), anchor="mm")

    elif time_s < 24.5:
        # Phase 4: Free Social Media Video Downloader Tool
        p4_prog = (time_s - 20.0) / 4.5
        
        draw.text((WIDTH // 2, 210), "Bonus Tool: Video Downloader", font=font_h1, fill=(255, 255, 255), anchor="mm")
        draw.text((WIDTH // 2, 280), "Save TikTok, Reels & Shorts Without Watermark", font=font_sub, fill=(203, 213, 225), anchor="mm")
        
        # Downloader Box Card
        draw.rounded_rectangle([(60, 370), (WIDTH - 60, 850)], radius=40, fill=(255, 255, 255), outline=(14, 165, 233), width=4)
        
        draw.text((100, 430), "Paste Video Link (TikTok, Reels, Shorts):", font=font_sub, fill=(30, 41, 59))
        draw.rounded_rectangle([(90, 480), (WIDTH - 90, 580)], radius=30, fill=(241, 245, 249), outline=(203, 213, 225), width=2)
        draw.text((120, 530), "https://www.tiktok.com/@creator/video/74839...", font=font_mono, fill=(100, 116, 139), anchor="lm")
        
        # Download Button
        draw.rounded_rectangle([(90, 620), (WIDTH - 90, 720)], radius=35, fill=(14, 165, 233))
        draw.text((WIDTH // 2, 670), "⬇  Download 1080p MP4 (No Watermark)", font=font_btn, fill=(255, 255, 255), anchor="mm")
        
        # Supported Badges
        platforms = ["TikTok", "Instagram Reels", "YouTube Shorts", "Facebook"]
        for p_i, p_name in enumerate(platforms):
            px = 110 + p_i * 215
            draw.rounded_rectangle([(px, 755), (px + 195, 805)], radius=15, fill=(241, 245, 249))
            draw.text((px + 97, 780), f"✓ {p_name}", font=font_badge, fill=(30, 41, 59), anchor="mm")
            
        # Below: Video Preview
        frame.paste(crop_street.crop((0, 0, WIDTH, 850)), (0, 950))
        
    else:
        # Phase 5: Grand Finale Call To Action (Viral Conversion)
        p5_prog = (time_s - 24.5) / max(0.1, duration + 1.0 - 24.5)
        
        # Background zoom
        frame.paste(crop_couple, (0, 300))
        
        # Dark Gradient Overlay
        ov_end = Image.new("RGBA", (WIDTH, HEIGHT), (10, 15, 30, 210))
        frame = Image.alpha_composite(frame, ov_end)
        draw = ImageDraw.Draw(frame)
        
        # Redraw top bar
        draw.rectangle([(0, 0), (WIDTH, 140)], fill=(17, 24, 39, 255))
        draw.text((70, 70), "✦ aipromptgenerate.xyz", font=font_logo, fill=(255, 255, 255), anchor="lm")
        
        # Center Massive Announcement
        draw.text((WIDTH // 2, 480), "100% FREE FOREVER", font=font_badge, fill=(244, 63, 94), anchor="mm")
        draw.text((WIDTH // 2, 590), "Generate Perfect\nAI Prompts in 2 Sec", font=font_h1, fill=(255, 255, 255), anchor="mm", align="center", spacing=14)
        
        draw.text((WIDTH // 2, 770), "Zero Login • No Watermark • Unlimited Use", font=font_sub, fill=(203, 213, 225), anchor="mm")
        
        # Pulsing Giant CTA Button
        btn_w = int(760 + 20 * math.sin(p5_prog * math.pi * 6))
        bx1 = (WIDTH - btn_w) // 2
        bx2 = bx1 + btn_w
        by1 = 900
        by2 = 1040
        draw.rounded_rectangle([(bx1, by1), (bx2, by2)], radius=50, fill=(124, 92, 252), outline=(255, 255, 255), width=4)
        draw.text((WIDTH // 2, (by1 + by2) // 2), "VISIT aipromptgenerate.xyz  »", font=font_h1, fill=(255, 255, 255), anchor="mm")
        
        # Subtitle callout
        draw.text((WIDTH // 2, 1140), "★  LINK IN BIO / DESCRIPTION  ★", font=font_btn, fill=(34, 197, 94), anchor="mm")

    # Bottom Progress Bar
    draw.rectangle([(0, HEIGHT - 18), (WIDTH, HEIGHT)], fill=(30, 41, 59))
    draw.rectangle([(0, HEIGHT - 18), (int(WIDTH * progress), HEIGHT)], fill=(124, 92, 252))

    # Save frame
    frame.convert("RGB").save(f"{TEMP_FRAMES_DIR}/frame_{f_i:05d}.jpg", "JPEG", quality=92)
    if f_i % 75 == 0:
        print(f"Rendered {f_i}/{TOTAL_FRAMES} frames ({int(progress*100)}%)...")

print("3. Compiling final MP4 with Pinterest & Mobile compatibility flags...")

# Critical ffmpeg flags: +faststart, stereo 44.1kHz, yuv420p for 100% Pinterest drag & drop support
ffmpeg_cmd = [
    "ffmpeg", "-y",
    "-r", str(FPS),
    "-i", f"{TEMP_FRAMES_DIR}/frame_%05d.jpg",
    "-i", AUDIO_PATH,
    "-c:v", "libx264",
    "-preset", "medium",
    "-profile:v", "high",
    "-level", "4.1",
    "-pix_fmt", "yuv420p",
    "-c:a", "aac",
    "-b:a", "192k",
    "-ar", "44100",
    "-ac", "2",
    "-movflags", "+faststart",
    "-shortest",
    FINAL_VIDEO_PATH
]

subprocess.run(ffmpeg_cmd, check=True)

# Cleanup
for f in glob.glob(f"{TEMP_FRAMES_DIR}/*.jpg"):
    try:
        os.remove(f)
    except:
        pass

print(f"🎉 INTERACTIVE DEMO VIDEO AD GENERATED: {FINAL_VIDEO_PATH}")
