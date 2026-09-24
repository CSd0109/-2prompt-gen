import asyncio
import os
import glob
import math
import subprocess
from PIL import Image, ImageDraw, ImageFont
import edge_tts

OUTPUT_DIR = "/home/dhitalsunil/Downloads/video_ads"
os.makedirs(OUTPUT_DIR, exist_ok=True)
TEMP_FRAMES_DIR = "/tmp/ad_frames"
os.makedirs(TEMP_FRAMES_DIR, exist_ok=True)

# Clean previous temp frames
for f in glob.glob(f"{TEMP_FRAMES_DIR}/*.jpg"):
    try:
        os.remove(f)
    except:
        pass

AUDIO_PATH = "/tmp/ad_voiceover.mp3"
FINAL_VIDEO_PATH = os.path.join(OUTPUT_DIR, "aipromptgenerate_viral_video_ad.mp4")

SCRIPT_VOICEOVER = (
    "Stop paying for AI prompts! What if you could get thousands of master-level prompts for free? "
    "Meet a-i-prompt-generate dot xyz — the ultimate free prompt studio for Midjourney, ChatGPT, Flux, and Claude. "
    "Create viral couple portraits from two photos, reverse-engineer prompts from any reference image in seconds, "
    "and download high-definition videos from TikTok, Reels, and Shorts with zero watermarks. "
    "Zero login. Unlimited use. 100% free forever. "
    "Visit a-i-prompt-generate dot xyz today!"
)

# 1. Generate Voiceover
print("Generating studio voiceover...")
async def generate_voice():
    communicate = edge_tts.Communicate(SCRIPT_VOICEOVER, "en-US-ChristopherNeural", rate="+6%", pitch="+0Hz")
    await communicate.save(AUDIO_PATH)

asyncio.run(generate_voice())

# Measure audio duration with ffprobe
ffprobe_cmd = [
    "ffprobe", "-v", "error", "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1", AUDIO_PATH
]
duration = float(subprocess.check_output(ffprobe_cmd).strip())
print(f"Voiceover duration: {duration:.2f} seconds")

# 2. Setup Video Parameters
WIDTH, HEIGHT = 1080, 1920
FPS = 25
TOTAL_FRAMES = int(duration * FPS) + (FPS * 1) # add 1s padding at end

FONT_BOLD_PATH = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG_PATH = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

# Available source thumbnails
THUMB_DIR = "/home/dhitalsunil/2prompt-gen/public/thumbnails"
available_thumbs = sorted(glob.glob(f"{THUMB_DIR}/*.webp") + glob.glob("/home/dhitalsunil/2prompt-gen/public/*.jpg"))

# Define 5 scenes
SCENES = [
    {
        "start_ratio": 0.0,
        "end_ratio": 0.20,
        "badge": "★ STOP PAYING FOR PROMPTS ★",
        "badge_color": (239, 68, 68), # Red
        "headline": "100% FREE AI\nPROMPT STUDIO",
        "subline": "Midjourney • ChatGPT • Flux • Claude",
        "highlight": "NO LOGIN REQUIRED",
        "thumb_idx": 1
    },
    {
        "start_ratio": 0.20,
        "end_ratio": 0.42,
        "badge": "★ MULTI-MODEL SYNTHESIZER ★",
        "badge_color": (124, 92, 252), # Purple
        "headline": "1,400+ MASTER\nPROMPT LIBRARY",
        "subline": "Photorealistic Lens & Lighting Specs",
        "highlight": "ONE-CLICK COPY READY",
        "thumb_idx": 3
    },
    {
        "start_ratio": 0.42,
        "end_ratio": 0.65,
        "badge": "★ VIRAL COUPLE & IMAGE TOOLS ★",
        "badge_color": (244, 63, 94), # Rose
        "headline": "COUPLE PROMPTS\nFROM 2 PHOTOS",
        "subline": "Reverse-Engineer Any Picture",
        "highlight": "8K CINEMATIC DETAIL",
        "thumb_idx": 0
    },
    {
        "start_ratio": 0.65,
        "end_ratio": 0.85,
        "badge": "★ FREE VIDEO UTILITY ★",
        "badge_color": (14, 165, 233), # Sky blue
        "headline": "SOCIAL MEDIA\nVIDEO DOWNLOADER",
        "subline": "TikTok • Reels • Shorts • Facebook",
        "highlight": "1080P HD • NO WATERMARK",
        "thumb_idx": 7
    },
    {
        "start_ratio": 0.85,
        "end_ratio": 1.0,
        "badge": "★ START CREATING RIGHT NOW ★",
        "badge_color": (16, 185, 129), # Emerald
        "headline": "VISIT TODAY\naipromptgenerate.xyz",
        "subline": "Free Forever • No Credit Card • Zero Limits",
        "highlight": "CLICK LINK IN BIO",
        "thumb_idx": 4
    }
]

# Pre-load background images
bg_cache = []
for sc in SCENES:
    path = available_thumbs[sc["thumb_idx"] % len(available_thumbs)]
    im = Image.open(path).convert("RGB")
    # Resize to slightly larger than canvas for Ken Burns zoom effect
    aspect = im.width / im.height
    target_aspect = WIDTH / HEIGHT
    if aspect > target_aspect:
        h = int(HEIGHT * 1.25)
        w = int(h * aspect)
    else:
        w = int(WIDTH * 1.25)
        h = int(w / aspect)
    im_resized = im.resize((w, h), Image.Resampling.LANCZOS)
    bg_cache.append(im_resized)

font_badge = ImageFont.truetype(FONT_BOLD_PATH, 32)
font_head = ImageFont.truetype(FONT_BOLD_PATH, 70)
font_sub = ImageFont.truetype(FONT_REG_PATH, 36)
font_hl = ImageFont.truetype(FONT_BOLD_PATH, 38)
font_brand = ImageFont.truetype(FONT_BOLD_PATH, 42)

print(f"Rendering {TOTAL_FRAMES} animated video frames...")

for frame_idx in range(TOTAL_FRAMES):
    time_sec = frame_idx / FPS
    progress = frame_idx / TOTAL_FRAMES
    
    # Identify active scene
    scene_idx = 0
    for s_i, sc in enumerate(SCENES):
        if progress >= sc["start_ratio"]:
            scene_idx = s_i
            
    sc = SCENES[scene_idx]
    scene_duration = (sc["end_ratio"] - sc["start_ratio"]) * TOTAL_FRAMES
    scene_frame = frame_idx - (sc["start_ratio"] * TOTAL_FRAMES)
    scene_prog = max(0.0, min(1.0, scene_frame / max(1, scene_duration)))
    
    # 1. Base image with smooth Ken Burns zoom
    bg_raw = bg_cache[scene_idx]
    zoom = 1.0 + (scene_prog * 0.12)
    crop_w = int(WIDTH * 1.2 / zoom)
    crop_h = int(HEIGHT * 1.2 / zoom)
    
    x1 = (bg_raw.width - crop_w) // 2
    y1 = (bg_raw.height - crop_h) // 2
    bg_cropped = bg_raw.crop((x1, y1, x1 + crop_w, y1 + crop_h))
    frame = bg_cropped.resize((WIDTH, HEIGHT), Image.Resampling.BILINEAR).convert("RGBA")
    
    # 2. Dark Cinematic Overlay
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    d_over = ImageDraw.Draw(overlay)
    
    # Top bar shadow
    for y in range(350):
        d_over.line([(0, y), (WIDTH, y)], fill=(10, 15, 30, int(220 * (1 - y / 350))))
        
    # Center dark backdrop
    for y in range(HEIGHT):
        d_over.line([(0, y), (WIDTH, y)], fill=(5, 10, 20, 130))
        
    # Bottom card heavy shadow
    for y in range(HEIGHT - 750, HEIGHT):
        prog_b = (y - (HEIGHT - 750)) / 750
        d_over.line([(0, y), (WIDTH, y)], fill=(10, 15, 30, int(240 * prog_b)))
        
    frame = Image.alpha_composite(frame, overlay)
    draw = ImageDraw.Draw(frame)
    
    # 3. Top Permanent Brand Bar
    draw.rounded_rectangle([(60, 60), (WIDTH - 60, 140)], radius=40, fill=(15, 23, 42, 230), outline=(255, 255, 255, 80), width=2)
    draw.text((WIDTH // 2, 100), "✦ aipromptgenerate.xyz ✦", font=font_brand, fill=(255, 255, 255), anchor="mm")
    
    # 4. Animated Center Card with Motion
    # Slide-up spring animation on scene transition
    offset_y = int(math.exp(-scene_prog * 5) * 80)
    card_y = 1050 + offset_y
    card_h = 720
    
    # Card background
    draw.rounded_rectangle([(50, card_y), (WIDTH - 50, card_y + card_h)], radius=50, fill=(15, 23, 42, 240), outline=(255, 255, 255, 60), width=2)
    
    # Pulsing Badge Pill
    badge_pulse = int(5 * math.sin(scene_prog * math.pi * 4))
    bx1 = 90 - badge_pulse
    bx2 = WIDTH - 90 + badge_pulse
    draw.rounded_rectangle([(bx1, card_y + 40), (bx2, card_y + 110)], radius=35, fill=sc["badge_color"])
    draw.text((WIDTH // 2, card_y + 75), sc["badge"], font=font_badge, fill=(255, 255, 255), anchor="mm")
    
    # Big Headline
    draw.text((WIDTH // 2, card_y + 210), sc["headline"], font=font_head, fill=(255, 255, 255), anchor="mm", align="center", spacing=14)
    
    # Subtitle
    draw.text((WIDTH // 2, card_y + 380), sc["subline"], font=font_sub, fill=(203, 213, 225), anchor="mm", align="center")
    
    # Highlight Action Button
    hl_y = card_y + 490
    draw.rounded_rectangle([(90, hl_y), (WIDTH - 90, hl_y + 100)], radius=50, fill=(255, 255, 255), outline=sc["badge_color"], width=4)
    draw.text((WIDTH // 2, hl_y + 50), f"»  {sc['highlight']}  «", font=font_hl, fill=(15, 23, 42), anchor="mm")
    
    # Bottom Progress Bar
    draw.rectangle([(0, HEIGHT - 16), (WIDTH, HEIGHT)], fill=(30, 41, 59))
    draw.rectangle([(0, HEIGHT - 16), (int(WIDTH * progress), HEIGHT)], fill=(124, 92, 252))
    
    # Save frame
    frame.convert("RGB").save(f"{TEMP_FRAMES_DIR}/frame_{frame_idx:05d}.jpg", "JPEG", quality=90)
    if frame_idx % 75 == 0:
        print(f"Rendered {frame_idx}/{TOTAL_FRAMES} frames ({int(progress*100)}%)...")

print("All frames rendered! Compiling final MP4 with ffmpeg...")

# 3. Compile MP4 with ffmpeg (Video + Voiceover)
ffmpeg_cmd = [
    "ffmpeg", "-y",
    "-r", str(FPS),
    "-i", f"{TEMP_FRAMES_DIR}/frame_%05d.jpg",
    "-i", AUDIO_PATH,
    "-c:v", "libx264",
    "-preset", "veryfast",
    "-pix_fmt", "yuv420p",
    "-c:a", "aac",
    "-b:a", "192k",
    "-shortest",
    FINAL_VIDEO_PATH
]

subprocess.run(ffmpeg_cmd, check=True)

# Clean temp frames
for f in glob.glob(f"{TEMP_FRAMES_DIR}/*.jpg"):
    try:
        os.remove(f)
    except:
        pass

print(f"🎉 FINAL VIDEO AD GENERATED SUCCESSFULLY: {FINAL_VIDEO_PATH}")
