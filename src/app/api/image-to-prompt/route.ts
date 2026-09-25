import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60; // 60 seconds max

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType = "image/jpeg", instruction = "" } = await req.json();

    if (!imageBase64) {
      return NextResponse.json(
        { error: "Image data is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is not configured" },
        { status: 500 }
      );
    }

    const systemPrompt = `You are Nano Banana Pro & Master Reverse Prompt Engineer with surgical visual accuracy.
Your mission: Given an uploaded image, reverse-engineer the EXACT prompt needed to reproduce this image with 100% fidelity using modern diffusion models (Midjourney v6.1, Flux.1, Stable Diffusion XL, DALL-E 3).

CRITICAL NANO BANANA VISION PROTOCOLS:
1. SUBJECT RECONSTRUCTION:
   - Identify precise subject type, demographic, ethnic features, age, expressions, micro-emotions.
   - Exact clothing (fabrics, textures, stitches, folds, exact colors, jewelry, accessories).
   - Pose & Gestures (exact head tilt, hand placement, eye gaze line, body posture).
2. ENVIRONMENT & CINEMATOGRAPHY:
   - Setting: exact indoor/outdoor location, architecture, background props, foreground bokeh.
   - Camera & Optics: exact focal length (e.g. 85mm f/1.2 lens, 35mm street lens, 24mm wide angle), sensor format (35mm film grain / medium format Hasselblad 100MP), aperture, framing (rule of thirds, center symmetry, tight macro).
3. LIGHTING DYNAMICS:
   - Key light, fill light, rim light, ambient bounce, light temperature (e.g. 3200K tungsten vs 5600K daylight, golden hour sunlight, neon cyans/magentas).
4. AESTHETIC MEDIUM:
   - Identify exact medium: Ultra-realistic award-winning photography / 3D Unreal Engine 5 render / Octane CGI / Fashion editorial / Analog 90s film scan.

USER COMMAND / MODIFICATION:
"${instruction ? instruction.trim() : "None - achieve 100% exact reproduction of this image"}"
(If the user command specifies e.g. "remove background", "make it anime", or "turn into neon cyberpunk", honor their command while keeping the original subject composition identical!).

Respond strictly in valid JSON matching this exact schema (no markdown code blocks, just raw JSON):
{
  "summary": "1-sentence crystal clear description of the exact image scene",
  "style": "Exact medium & render engine (e.g. Photorealistic Hasselblad 100MP medium format / 3D Octane Render / Fashion Editorial)",
  "lighting": "Precise lighting setup (e.g. Warm 50mm softbox key light with rim lighting and moody vignette)",
  "camera": "Lens and focal specs (e.g. 85mm f/1.4 lens, shallow depth of field, razor-sharp focus)",
  "colors": ["#hex1", "#hex2", "#hex3", "#hex4"],
  "tags": ["6-8 highly relevant prompt tags"],
  "prompts": {
    "midjourney": "Comprehensive Midjourney v6 prompt with all visual cues, camera, lighting, textures, aspect ratio --v 6.1 --style raw",
    "flux": "Detailed natural language sentence prompt for Flux.1 with exhaustive texture, skin, lighting, and composition details",
    "stableDiffusion": "Masterpiece, high-fidelity SDXL prompt starting with subject, lighting, 8k uhd, cinematic lighting, sharp focus",
    "dalle": "Detailed, highly visual scene description formatted for DALL-E 3",
    "negative": "blurry, low quality, distorted anatomy, duplicate, deformed hands, extra fingers, cartoonish, oversaturated, watermark, signature"
  }
}`;

    const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z+]+;base64,/, "");

    const payload = {
      contents: [
        {
          parts: [
            { text: systemPrompt },
            {
              inline_data: {
                mime_type: mimeType,
                data: cleanBase64,
              },
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.2, // Lower temperature for maximum precision and fidelity
      },
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini Vision API error:", errText);
      return NextResponse.json(
        { error: "Failed to analyze image with AI" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return NextResponse.json(
        { error: "No response received from AI model" },
        { status: 500 }
      );
    }

    let parsedResult;
    try {
      parsedResult = JSON.parse(rawText);
    } catch {
      const cleaned = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
      parsedResult = JSON.parse(cleaned);
    }

    return NextResponse.json({ success: true, data: parsedResult });
  } catch (error: any) {
    console.error("Error processing image to prompt:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
