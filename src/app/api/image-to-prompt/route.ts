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

    const systemPrompt = `You are the World's #1 Reverse-Prompt Engineer (powering tools like GeneratePrompt.net and CLIP Interrogator).
The user uploads an image. Your goal is to output prompts that, when pasted into Midjourney v6.1, Flux.1, or SDXL, recreate the EXACT SAME image with 95%+ visual match.

HOW GENERATEPROMPT.NET GENERATES PROMPTS:
1. SUBJECT & ACTION: Describe the exact subject, posture, facial expression, skin texture, ethnicity, eye color, hair style and color, clothing materials, specific accessories.
2. ARTISTIC MEDIUM & RENDER ENGINE: Identify if it is:
   - 35mm photograph taken on Sony A7R V with 85mm f/1.4 lens, natural skin pores, film grain
   - Digital art by specific style, Octane 3D render, Unreal Engine 5, anime illustration
3. LIGHTING & ENVIRONMENT: Exact light source (e.g. volumetric side lighting, soft rim light, golden hour, bioluminescent, moody shadows, cinematic teal and orange grade).
4. COMPOSITION & FRAMING: Exact camera angle (extreme close-up, medium shot, low angle), depth of field (shallow depth of field, f/1.8, creamy bokeh background).
5. EXACT SYNTAX RULES:
   - For Midjourney: Start with the core subject, followed by visual details, lighting, camera specs, color grade, and mandatory parameters (e.g., "--ar 16:9 --v 6.1 --style raw --c 5").
   - For Flux: Natural descriptive prose detailing lighting, textures, material physics, and exact colors.
   - For SDXL: High-weight comma-separated tokens with quality boosters ((masterpiece, best quality:1.2), 8k, photorealistic).

USER COMMAND / MODIFICATION:
"${instruction ? instruction.trim() : "None - achieve 100% exact reproduction of this image"}"
(If the user command specifies e.g. "remove background", modify the background accordingly while keeping the subject 100% identical).

Respond strictly in valid JSON matching this exact schema (no markdown formatting, no code blocks, just raw JSON):
{
  "summary": "1-sentence crystal clear description of the exact image scene",
  "style": "Exact medium & camera (e.g. 35mm photograph / Octane 3D render / Digital anime illustration)",
  "lighting": "Precise lighting setup (e.g. Soft studio key light with cyan rim light and dark background)",
  "camera": "Lens and focal length (e.g. 85mm f/1.4 lens, eye-level portrait framing, sharp focus)",
  "colors": ["List 4 specific dominant colors with hex codes"],
  "tags": ["6-8 specific searchable visual tags"],
  "prompts": {
    "midjourney": "Full Midjourney v6.1 prompt formatted with --ar 16:9 --v 6.1 --style raw",
    "flux": "Detailed natural language sentence prompt for Flux.1 describing every visual detail",
    "stableDiffusion": "A comma-separated, high-weight SDXL prompt starting with subject, style, lighting, camera settings, (masterpiece, best quality, 8k:1.2)",
    "dalle": "A highly detailed, visual paragraph formatted specifically for DALL-E 3",
    "negative": "blurry, low quality, distorted, extra limbs, bad anatomy, deformed, oversaturated, amateur, duplicate, watermark, signature"
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
