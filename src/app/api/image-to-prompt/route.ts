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

    const systemPrompt = `You are an elite Reverse Prompt Engineer. Your objective is 100% VISUAL CLONING FIDELITY.
When a diffusion model (Midjourney v6, Flux.1, SDXL, DALL-E 3) receives your prompt, it must generate an image that is virtually indistinguishable from this exact reference image.

CRITICAL INSTRUCTIONS FOR 100% REPRODUCTION:
1. SUBJECT & POSE: Describe the primary subjects with surgical precision (exact posture, facial expression, clothing fabric, gaze direction, hands, objects).
2. COMPOSITION & FRAMING: Exact camera angle (e.g. eye-level close-up, low-angle wide shot, macro), depth of field (e.g. f/1.8 bokeh background), framing rule.
3. LIGHTING & ENVIRONMENT: Exact light sources (e.g. rim light from top right, soft volumetric golden hour, cyberpunk blue & magenta neon, rim lighting, specular highlights).
4. COLOR PALETTE & RENDER MEDIUM: Exact color tones (teal and orange, muted pastel, high contrast monochrome), rendering medium (photograph taken on Sony A7R V, 3D Octane render, watercolor, vector graphic).
5. DO NOT be abstract or poetic. Use direct, descriptive, high-density visual keywords and scene descriptions that diffusion models understand.

User Special Command / Modification: "${instruction ? instruction.trim() : "None - achieve 100% exact reproduction of this image"}"
(If the user command specifies e.g. "remove background", modify the background accordingly while keeping the subject 100% identical).

Respond strictly with a valid JSON object matching this exact schema (no markdown formatting, no code blocks, just raw JSON):
{
  "summary": "1-sentence precise description of the exact scene",
  "style": "Exact medium & render engine (e.g. Photorealistic 35mm photograph / Octane 3D render / Digital anime illustration)",
  "lighting": "Precise lighting setup (e.g. Soft studio key light with cyan rim light and dark gradient background)",
  "camera": "Lens and focal length (e.g. 85mm f/1.4 lens, eye-level portrait framing, sharp focus)",
  "colors": ["List 4 specific dominant colors with hex codes"],
  "tags": ["6-8 specific searchable visual tags"],
  "prompts": {
    "midjourney": "A complete, hyper-detailed Midjourney v6 prompt describing the exact scene elements, lighting, materials, and camera, followed by --ar [matching aspect ratio] --v 6.0 --style raw",
    "flux": "A natural language, sentence-based descriptive prompt for Flux.1 describing every visual detail of subject, lighting, colors, and textures in depth",
    "stableDiffusion": "A comma-separated, high-weight SDXL prompt starting with subject, style, lighting, camera settings, (masterpiece, best quality, 8k:1.2)",
    "dalle": "A highly detailed, visual paragraph formatted specifically for DALL-E 3 without banned keywords",
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
