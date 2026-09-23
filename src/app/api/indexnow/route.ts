import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = "b8730646c9fdcfa77d34962d3ef0096c";
const HOST = "www.aipromptgenerate.xyz";

export async function POST(req: NextRequest) {
  try {
    const urlsToPing = [
      `https://${HOST}/`,
      // 1. Top Video Prompts
      `https://${HOST}/veo-video-prompts`,
      `https://${HOST}/seadance-video-prompts`,
      `https://${HOST}/video-campaign-bundles`,
      // 2. Top Website & UI Prompts
      `https://${HOST}/v0-website-prompts`,
      `https://${HOST}/replit-agent-prompts`,
      `https://${HOST}/claude-opus-prompts`,
      // 3. Top Image & Character Prompts
      `https://${HOST}/nano-banana-pro-prompts`,
      `https://${HOST}/ai-characters`,
      // 4. LLM Prompts
      `https://${HOST}/chatgpt-prompts`,
      `https://${HOST}/gemini-prompts`,
      // 5. PDF & Productivity Tools
      `https://${HOST}/image-to-pdf`,
      `https://${HOST}/pdf-to-image`,
      `https://${HOST}/pdf-editor`,
      // 6. Alternatives & Competitors
      `https://${HOST}/aipromptgenerator-alternatives`
    ];

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urlsToPing
    };

    // Ping Microsoft Bing IndexNow API
    const bingRes = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    });

    return NextResponse.json({
      success: true,
      status: bingRes.status,
      message: "IndexNow instant crawl triggered across Bing, Yahoo & Seznam",
      urls: urlsToPing
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: "IndexNow API Automation active",
    host: HOST,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`
  });
}
