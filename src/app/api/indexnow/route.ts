import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = "b8730646c9fdcfa77d34962d3ef0096c";
const HOST = "www.aipromptgenerate.xyz";

export async function POST(req: NextRequest) {
  try {
    const urlsToPing = [
      `https://${HOST}/`,
      `https://${HOST}/#characters`,
      `https://${HOST}/#couple-poses`,
      `https://${HOST}/#flux`,
      `https://${HOST}/#video-prompts-sora`,
      `https://${HOST}/#banana-prompts`
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
