import { NextRequest, NextResponse } from "next/server";

async function generateWithGemini(apiKey: string, prompt: string, model: string, category: string, aspectRatio: string, style: string) {
  const systemInstruction = `You are a world-class Prompt Engineer for AI models including Midjourney v6.1, Flux 1.1 Pro, OpenAI Sora, Runway Gen-3, Claude 3.7, and ChatGPT-4o.
The user wants a prompt for: "${prompt}".
Category: ${category}
Aspect Ratio: ${aspectRatio || "16:9"}
Style Preset: ${style || "photoreal"}
Target AI Model: ${model}

Your response must be formatted in valid JSON with exactly these fields:
{
  "result": "The expanded, ultra-detailed, production-ready master prompt (include specific lighting, lenses, camera movement, composition, aspect ratio tags like --ar ${aspectRatio || "16:9"} where applicable)",
  "negativePrompt": "Comma-separated list of quality degradation terms, unwanted artifacts, or things to avoid (if applicable, else empty string)",
  "technicalSpecs": "Key technical settings (e.g., Aspect Ratio, Lens, Render Engine, Color Palette)"
}
Return ONLY JSON. Do not include markdown code block backticks.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: systemInstruction }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error("Empty response from Gemini API");

  return JSON.parse(rawText);
}

async function generateWithGroq(apiKey: string, prompt: string, model: string, category: string, aspectRatio: string, style: string) {
  const systemInstruction = `You are a world-class Prompt Engineer for AI models including Midjourney v6.1, Flux 1.1 Pro, OpenAI Sora, Runway Gen-3, Claude 3.7, and ChatGPT-4o.
The user wants a prompt for: "${prompt}".
Category: ${category}
Aspect Ratio: ${aspectRatio || "16:9"}
Style Preset: ${style || "photoreal"}
Target AI Model: ${model}

Respond in pure valid JSON without markdown wrapping:
{
  "result": "The expanded, ultra-detailed, production-ready master prompt (include lighting, lens, camera motion, composition, tags like --ar ${aspectRatio || "16:9"})",
  "negativePrompt": "Comma-separated unwanted artifacts or quality degradation terms",
  "technicalSpecs": "Key technical settings (Aspect Ratio, Lens, Render Engine, Color Palette)"
}`;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: `Generate master prompt for: ${prompt}` },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  const rawText = data?.choices?.[0]?.message?.content;
  if (!rawText) throw new Error("Empty response from Groq API");

  return JSON.parse(rawText);
}

export async function POST(req: NextRequest) {
  try {
    const { prompt, model, category, style, aspectRatio, strength, camera, lighting } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt topic is required" }, { status: 400 });
    }

    const trimmed = prompt.trim();
    const ar = aspectRatio || "16:9";

    const geminiKey = process.env.GEMINI_API_KEY;
    const groqKey = process.env.GROQ_API_KEY;
    const pollinationsKey = process.env.POLLINATIONS_API_KEY;

    // Helper for Pollinations image URL
    const getPreviewUrl = (promptText: string) => {
      const encoded = encodeURIComponent(promptText.slice(0, 300));
      const keyParam = pollinationsKey ? `&key=${pollinationsKey}` : "";
      return `https://image.pollinations.ai/prompt/${encoded}?model=flux&width=1024&height=576&nologo=true${keyParam}`;
    };

    // 1. Try Gemini 2.5 Flash first
    if (geminiKey) {
      try {
        const liveResult = await generateWithGemini(geminiKey, trimmed, model, category, ar, style);
        if (liveResult?.result) {
          const previewImage = category === "image" ? getPreviewUrl(liveResult.result) : undefined;
          return NextResponse.json({
            success: true,
            result: liveResult.result,
            negativePrompt: liveResult.negativePrompt || "",
            technicalSpecs: liveResult.technicalSpecs || `Engine: Gemini 2.5 Flash | Aspect: ${ar}`,
            previewImage,
            engine: "Gemini 2.5 Flash",
            model,
            category,
            aiPowered: true,
            timestamp: new Date().toISOString(),
          });
        }
      } catch (geminiError) {
        console.warn("Gemini call failed, checking Groq:", geminiError);
      }
    }

    // 2. Try Groq (Ultra-Fast 120B) as second intelligent engine
    if (groqKey) {
      try {
        const groqResult = await generateWithGroq(groqKey, trimmed, model, category, ar, style);
        if (groqResult?.result) {
          const previewImage = category === "image" ? getPreviewUrl(groqResult.result) : undefined;
          return NextResponse.json({
            success: true,
            result: groqResult.result,
            negativePrompt: groqResult.negativePrompt || "",
            technicalSpecs: groqResult.technicalSpecs || `Engine: Groq 120B | Aspect: ${ar}`,
            previewImage,
            engine: "Groq 120B",
            model,
            category,
            aiPowered: true,
            timestamp: new Date().toISOString(),
          });
        }
      } catch (groqError) {
        console.warn("Groq call failed, falling back to smart template engine:", groqError);
      }
    }

    let generatedPrompt = "";
    let negativePrompt = "";
    let systemInstruction = "";
    let technicalSpecs = "";

    // 1. IMAGE PROMPTS (High-end Midjourney, Flux 1.1 Pro, DALL-E 3, SDXL)
    if (category === "image") {
      switch (model) {
        case "chatgpt":
          // DALL-E 3 & ChatGPT-4o Vision Prompt Engineering
          generatedPrompt = `A high-end editorial photograph of ${trimmed}. The scene features ultra-realistic textures, precise depth of field, and immaculate material rendering. Lighting is designed with diffused softbox keys and subtle rim illumination to accent micro-details without harsh shadows. Captured on Hasselblad H6D-100c with 85mm f/1.4 lens, natural skin and material pores, zero plastic shine, pristine color science, realistic cinematic atmosphere, 8k resolution masterwork.`;
          negativePrompt = `blurry, out of focus, distorted anatomy, duplicate elements, oversaturated, deformed hands, plastic skin, CGI cartoonish, signature, watermark`;
          technicalSpecs = `Aspect: ${ar} | Sensor: 100MP Medium Format | Lens: 85mm f/1.4 | Render: Photoreal Raw`;
          break;

        case "gemini":
          // Google Imagen 3 & Gemini Ultra prompt format
          generatedPrompt = `Ultra-detailed photorealistic photography: ${trimmed}. Visual composition strictly following golden ratio balance. Volumetric natural daylight with subtle atmospheric particles, realistic caustic light scattering. Color palette graded like 35mm Kodak Portra film with deep organic shadows and restrained highlights. Captured with Arri Master Prime lens, crisp optical sharpness, authentic environmental reflections. --ar ${ar} --style raw --v 6.1`;
          negativePrompt = `lowres, worst quality, bad anatomy, deformed facial features, oversaturated neon, plastic 3D rendering, AI glow, mutated limbs`;
          technicalSpecs = `Optics: 35mm Arri Cine | Aspect: ${ar} | Color: Kodak Portra 400 LUT`;
          break;

        case "claude":
          // Anthropic prompt design: highly structured, zero hallucination
          generatedPrompt = `[Visual Concept]: ${trimmed}\n[Optics & Lens]: 50mm f/1.2 prime lens, razor-sharp subject isolation, creamy bokeh falloff\n[Lighting Setup]: Chiaroscuro studio contrast, subtle rim glow, organic ambient bounce\n[Material Fidelity]: Tactile cloth weave, tangible skin pores, accurate physical reflectivity\n[Grading & Mood]: High dynamic range, filmic neutral tonal curve with natural shadows\n[Midjourney/Flux Parameters]: --ar ${ar} --stylize 250 --chaos 5 --style raw`;
          negativePrompt = `airbrushed, cartoon, CGI, deformed, bad proportions, unnatural symmetry, duplicate subjects`;
          technicalSpecs = `Prompt Architecture: Anthropic Structured | Tuning: Stylize 250 | Lens: 50mm f/1.2`;
          break;

        case "kimi":
        case "deepseek":
          // Deep reasoning models (Kimi K1 / DeepSeek R1) prompt design
          generatedPrompt = `Masterwork cinematic shot of ${trimmed}. Incorporate deep cultural authenticity, environmental storytelling, raytraced atmospheric occlusion, and intricate micro-elements in both foreground and background. Physically accurate subsurface scattering, realistic dynamic range, subtle natural lens distortion. --ar ${ar} --quality 2`;
          negativePrompt = `ugly, deformed, mutated, extra fingers, cartoonish, low-poly, text, signature`;
          technicalSpecs = `DeepSeek Reasoning Architecture | Aspect: ${ar} | Raytracing: Enabled`;
          break;

        default: // Groq / LLaMA
          generatedPrompt = `Cinematic master photograph of ${trimmed}, 35mm Leica M11, f/1.8 aperture, natural volumetric lighting, photorealistic textures, 8k resolution, authentic film grain --ar ${ar} --style raw`;
          negativePrompt = `blurry, deformed, oversaturated, generic 3d`;
          technicalSpecs = `Aspect: ${ar} | Camera: Leica M11 | Shutter: Filmic`;
      }
    } 
    // 2. VIDEO PROMPTS (Sora, Runway Gen-3 Alpha, Kling AI, Luma Dream Machine)
    else if (category === "video") {
      switch (model) {
        case "chatgpt":
          generatedPrompt = `Cinematic 4K 60fps single-take tracking shot: The camera begins with an intimate macro close-up of ${trimmed}, slowly rotating and dollying back into a sweeping panoramic view of the active environment. Motion features realistic momentum and gravity, natural fluid wind effects, accurate physical collisions, and realistic motion blur. Mastered in Hollywood color space with natural 35mm film grain.`;
          technicalSpecs = `Engine: OpenAI Sora / Gen-3 | FPS: 60 | Resolution: 4K UHD | Movement: Continuous Steadicam Dolly`;
          break;

        case "gemini":
          generatedPrompt = `Sora / Gen-3 Motion Directive:
[Shot Type]: Dynamic FPV low-angle camera tracking ${trimmed} in motion.
[Camera Movement]: Fluid sweep from eye-level to wide overhead orbit without cuts.
[Lighting & Atmosphere]: Dramatic golden hour backlighting with natural lens flare and volumetric mist.
[Pacing & Physics]: Hyper-realistic speed transitions, authentic momentum, dust particles swirling in response to motion.
[Audio Cue]: Realistic ambient spatial audio with deep environmental reverberation.`;
          technicalSpecs = `Engine: Google Veo / Sora | Movement: FPV Low-Angle Sweep | Physics: Fluid Dynamics`;
          break;

        case "claude":
          generatedPrompt = `[Action & Progression]: In a continuous 8-second take, ${trimmed} transitions naturally across the scene with lifelike cadence.\n[Cinematography]: 24fps anamorphic lens, realistic optical distortion, subtle Steadicam shake to simulate an authentic documentary feel.\n[Atmospheric FX]: Volumetric illumination interacting with dust motes and micro-mist.\n[Color Science]: Filmic ARRI Alexa tonal balance with natural shadow roll-off.`;
          technicalSpecs = `Cinematography: 24fps Anamorphic | Sensor: Arri Alexa 65 | Grade: Film Roll-Off`;
          break;

        default:
          generatedPrompt = `Ultra-smooth cinematic tracking shot of ${trimmed}, 4K 60fps, natural motion blur, volumetric atmospheric lighting, photorealistic physics.`;
          technicalSpecs = `Resolution: 4K 60fps | Lens: Anamorphic | Color: Hollywood Filmic`;
      }
    } 
    // 3. WEBSITE & UI PROMPTS (v0.dev, Bolt.new, Cursor, Next.js 15)
    else if (category === "ui") {
      switch (model) {
        case "chatgpt":
          generatedPrompt = `You are a Principal Frontend Architect. Build a production-ready, pixel-perfect web app for: "${trimmed}".
Tech Stack Requirements:
- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, Lucide React icons.
- Modern dark theme palette (Obsidian #0b0f17 base, slate borders, emerald/blue micro-accents).
- Sticky responsive navigation with desktop links and mobile drawer.
- Hero Section: High-converting headline, live interactive preview widget, dual CTA with glowing borders.
- Bento Grid Features: 4 cards with micro-interactions, live metrics, and copy-to-clipboard functionality.
- Deliver 100% complete, working TSX code without ellipsis or placeholder shortcuts.`;
          technicalSpecs = `Stack: Next.js 15 + React 19 + Tailwind v4 + TypeScript | Style: Bento Grid Glassmorphism`;
          break;

        case "gemini":
          generatedPrompt = `Prompt for v0.dev / Bolt.new / Lovable:
Create an ultra-responsive, modern application interface for: "${trimmed}".
Aesthetic & UI Specifications:
1. Clean Swiss-style layout inspired by Linear, Stripe, and Apple design systems.
2. High-contrast typography with clear visual hierarchy and balanced whitespace.
3. Interactive state: Real-time search filter, modal inspection sheet, and animated toast feedback.
4. Accessible semantic HTML5 with keyboard navigation support (Esc to close, Enter to submit).
Output the full single-file Next.js page.tsx ready to run.`;
          technicalSpecs = `Target: v0.dev / Cursor / Bolt.new | Framework: Next.js 15 Tailwind`;
          break;

        case "claude":
          generatedPrompt = `<system_role>Elite Creative Developer specializing in Framer Motion, Tailwind CSS, and Next.js</system_role>
<objective>
Generate an enterprise-grade web application for: "${trimmed}"
</objective>
<specifications>
- Zero placeholders; all interactive elements (search, filter, preview dialog) must function.
- Fluid responsive design from mobile (375px) to 4K desktop (2560px).
- Refined micro-animations: Hover zooms, glowing borders, active state indicator.
- Return production-ready TSX code adhering to best modular component standards.
</specifications>`;
          technicalSpecs = `Anthropic Code Generator | Target: Next.js 15 + Framer Motion`;
          break;

        default:
          generatedPrompt = `Build a high-performance modern web app for "${trimmed}" using Next.js 15, Tailwind CSS, and Lucide React. Complete code with zero mock ellipsis.`;
          technicalSpecs = `Framework: Next.js 15 | Styling: Tailwind CSS`;
      }
    } 
    // 4. UNIVERSAL / ADVANCED GENERAL PROMPT
    else {
      generatedPrompt = `Act as a world-class prompt engineer specializing in ${model.toUpperCase()}.
Task: Transform "${trimmed}" into an ultra-high-precision executive prompt.

[OBJECTIVE & PERSONA]
- You are a recognized authority in this field with zero tolerance for generic fluff.
- Execute directly on: ${trimmed}.

[STEP-BY-STEP DELIVERABLES]
1. Core Strategy & Actionable Implementation.
2. Production code / exact command syntax where applicable.
3. Edge cases, safety verification, and performance benchmarks.
4. Output format: Markdown with code blocks and bulleted checklists.`;
      technicalSpecs = `Engine: ${model.toUpperCase()} Executive Framework`;
    }

    return NextResponse.json({
      success: true,
      result: generatedPrompt,
      negativePrompt,
      technicalSpecs,
      model,
      category,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
  }
}
