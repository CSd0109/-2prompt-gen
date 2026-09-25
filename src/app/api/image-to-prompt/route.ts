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

    const systemPrompt = `You are a world-class AI Image Prompt Engineer and Computer Vision expert.
Analyze the provided image in granular detail (subject, artistic style, medium, composition, lighting, camera settings, color palette, rendering engine, mood).

User custom instruction: "${instruction ? instruction.trim() : "Generate ultra-accurate, high-fidelity prompts reproducing this image perfectly"}"

You MUST respond strictly with a valid JSON object matching this exact schema (no markdown formatting, no code blocks, just raw JSON):
{
  "summary": "Short 1-2 sentence aesthetic summary of the image",
  "style": "Art style or photography medium (e.g. Cinematic 35mm photograph, Unreal Engine 5 3D render, Cyberpunk Anime)",
  "lighting": "Lighting conditions (e.g. Golden hour warm volumetric rays, Neon edge lighting, Studio softbox)",
  "camera": "Camera/lens specs (e.g. 85mm f/1.4 lens, shallow depth of field, 8k resolution)",
  "colors": ["List of 3-5 dominant hex-or-color names like 'Deep Cyan', '#ff007f']",
  "tags": ["6-8 key tags describing subject and vibe"],
  "prompts": {
    "midjourney": "Complete, ready-to-copy Midjourney v6 prompt with optimal parameters (--ar, --v 6.0, --style raw, --stylize, etc.)",
    "flux": "Natural language descriptive prompt formatted specifically for Flux.1 Schnell/Dev with high visual fidelity",
    "stableDiffusion": "Detailed Stable Diffusion XL prompt with trigger words, quality tags, and art medium tokens",
    "dalle": "Vivid, imaginative prompt optimized for DALL-E 3 syntax without violating safety filters",
    "negative": "Recommended negative prompt to prevent artifacts, blurry details, distortion, or bad anatomy"
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
        temperature: 0.4,
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
      // Fallback if wrapped in codeblocks
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
