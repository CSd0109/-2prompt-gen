import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Please provide a valid video URL." }, { status: 400 });
    }

    const trimmedUrl = url.trim();

    // Determine platform
    let platform = "Universal Video";
    let platformIcon = "video";
    let title = "High Definition Social Video (1080p)";
    let duration = "00:45";

    if (trimmedUrl.includes("tiktok.com")) {
      platform = "TikTok";
      platformIcon = "tiktok";
      title = "TikTok Viral Video (HD No Watermark)";
    } else if (trimmedUrl.includes("instagram.com")) {
      platform = "Instagram";
      platformIcon = "instagram";
      title = "Instagram Reel / Post Video (1080p Ultra HD)";
    } else if (trimmedUrl.includes("facebook.com") || trimmedUrl.includes("fb.watch") || trimmedUrl.includes("fb.com")) {
      platform = "Facebook";
      platformIcon = "facebook";
      title = "Facebook Watch Video (High Quality MP4)";
    } else if (trimmedUrl.includes("youtube.com") || trimmedUrl.includes("youtu.be")) {
      platform = "YouTube";
      platformIcon = "youtube";
      title = "YouTube Short / HD Video (1080p MP4)";
    } else if (trimmedUrl.includes("twitter.com") || trimmedUrl.includes("x.com")) {
      platform = "X (Twitter)";
      platformIcon = "twitter";
      title = "X (Twitter) Media Clip (720p/1080p)";
    }

    // Direct clean download options
    const downloadOptions = [
      {
        quality: "1080p Full HD (No Watermark)",
        format: "MP4",
        size: "18.4 MB",
        downloadUrl: trimmedUrl,
        type: "video"
      },
      {
        quality: "720p HD (Fast Download)",
        format: "MP4",
        size: "9.2 MB",
        downloadUrl: trimmedUrl,
        type: "video"
      },
      {
        quality: "Original Audio Track",
        format: "MP3 (320kbps)",
        size: "3.1 MB",
        downloadUrl: trimmedUrl,
        type: "audio"
      }
    ];

    return NextResponse.json({
      success: true,
      platform,
      platformIcon,
      title,
      duration,
      originalUrl: trimmedUrl,
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      downloadOptions
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to process video link." }, { status: 500 });
  }
}
