import { NextRequest, NextResponse } from "next/server";

// Fallback user-agent
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Please provide a valid video URL from TikTok, Facebook, Instagram, YouTube, or Twitter." },
        { status: 400 }
      );
    }

    const trimmedUrl = url.trim();

    // Dynamically require btch-downloader to ensure node environment compatibility
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const btch = require("btch-downloader");

    let platform = "Universal Video";
    let platformIcon = "video";
    let title = "High Quality Social Video";
    let thumbnail = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80";
    let duration = "00:45";
    const downloadOptions: {
      quality: string;
      format: string;
      size: string;
      downloadUrl: string;
      type: "video" | "audio";
    }[] = [];

    // 1. TIKTOK
    if (trimmedUrl.includes("tiktok.com")) {
      platform = "TikTok";
      platformIcon = "tiktok";

      // Method A: TikWM direct API (fastest, no watermark, raw MP4 streams)
      try {
        const tikwmRes = await fetch(`https://tikwm.com/api/?url=${encodeURIComponent(trimmedUrl)}`, {
          headers: { "User-Agent": USER_AGENT },
        });
        const tikwmData = await tikwmRes.json();

        if (tikwmData && tikwmData.data) {
          const d = tikwmData.data;
          title = d.title || "TikTok Viral Video (HD No Watermark)";
          thumbnail = d.cover || thumbnail;
          duration = d.duration ? `${d.duration}s` : "00:30";

          // HD/Clean No Watermark video
          const cleanPlayUrl = d.play ? (d.play.startsWith("http") ? d.play : `https://www.tikwm.com${d.play}`) : null;
          const hdPlayUrl = d.hdplay ? (d.hdplay.startsWith("http") ? d.hdplay : `https://www.tikwm.com${d.hdplay}`) : null;
          const wmPlayUrl = d.wmplay ? (d.wmplay.startsWith("http") ? d.wmplay : `https://www.tikwm.com${d.wmplay}`) : null;
          const musicUrl = d.music ? (d.music.startsWith("http") ? d.music : `https://www.tikwm.com${d.music}`) : null;

          if (hdPlayUrl) {
            downloadOptions.push({
              quality: "1080p Ultra HD (No Watermark)",
              format: "MP4",
              size: "HD Stream",
              downloadUrl: hdPlayUrl,
              type: "video",
            });
          }

          if (cleanPlayUrl) {
            downloadOptions.push({
              quality: "Original HD (No Watermark)",
              format: "MP4",
              size: "Direct MP4",
              downloadUrl: cleanPlayUrl,
              type: "video",
            });
          }

          if (wmPlayUrl) {
            downloadOptions.push({
              quality: "Standard Watermark Video",
              format: "MP4",
              size: "Fast MP4",
              downloadUrl: wmPlayUrl,
              type: "video",
            });
          }

          if (musicUrl) {
            downloadOptions.push({
              quality: "Original Audio Sound",
              format: "MP3",
              size: "Audio 320kbps",
              downloadUrl: musicUrl,
              type: "audio",
            });
          }
        }
      } catch (e: any) {
        console.error("TikWM failed, trying fallback:", e.message);
      }

      // Method B Fallback: btch.ttdl
      if (downloadOptions.length === 0 && btch.ttdl) {
        try {
          const res = await btch.ttdl(trimmedUrl);
          if (res && res.status) {
            title = res.title || title;
            thumbnail = res.thumbnail || thumbnail;
            if (Array.isArray(res.video) && res.video[0]) {
              downloadOptions.push({
                quality: "HD Video (No Watermark)",
                format: "MP4",
                size: "High Speed",
                downloadUrl: res.video[0],
                type: "video",
              });
            }
            if (Array.isArray(res.audio) && res.audio[0]) {
              downloadOptions.push({
                quality: "Original Audio (MP3)",
                format: "MP3",
                size: "320kbps",
                downloadUrl: res.audio[0],
                type: "audio",
              });
            }
          }
        } catch (e: any) {
          console.error("ttdl fallback error:", e.message);
        }
      }
    }

    // 2. FACEBOOK
    else if (trimmedUrl.includes("facebook.com") || trimmedUrl.includes("fb.watch") || trimmedUrl.includes("fb.com")) {
      platform = "Facebook";
      platformIcon = "facebook";

      // Method A: fb-downloader-scrapper (direct cdn extractor)
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { getFbVideoInfo } = require("fb-downloader-scrapper");
        const fbInfo = await getFbVideoInfo(trimmedUrl);
        if (fbInfo && (fbInfo.hd || fbInfo.sd)) {
          title = fbInfo.title || "Facebook Watch Video (High Quality)";
          if (fbInfo.thumbnail) thumbnail = fbInfo.thumbnail;

          if (fbInfo.hd) {
            downloadOptions.push({
              quality: "1080p / 720p HD Quality",
              format: "MP4",
              size: "High Definition",
              downloadUrl: fbInfo.hd,
              type: "video",
            });
          }
          if (fbInfo.sd) {
            downloadOptions.push({
              quality: "Standard Quality (Fast)",
              format: "MP4",
              size: "SD MP4",
              downloadUrl: fbInfo.sd,
              type: "video",
            });
          }
        }
      } catch (e: any) {
        console.error("getFbVideoInfo failed, trying fbdown fallback:", e.message);
      }

      // Method B Fallback: btch.fbdown
      if (downloadOptions.length === 0 && btch.fbdown) {
        try {
          const res = await btch.fbdown(trimmedUrl);
          if (res && res.status) {
            if (res.HD) {
              downloadOptions.push({
                quality: "HD 1080p Video",
                format: "MP4",
                size: "High Def",
                downloadUrl: res.HD,
                type: "video",
              });
            }
            if (res.Normal_video) {
              downloadOptions.push({
                quality: "Standard Quality (SD)",
                format: "MP4",
                size: "Normal MP4",
                downloadUrl: res.Normal_video,
                type: "video",
              });
            }
          }
        } catch (e: any) {
          console.error("fbdown fallback error:", e.message);
        }
      }
    }

    // 3. YOUTUBE / SHORTS
    else if (trimmedUrl.includes("youtube.com") || trimmedUrl.includes("youtu.be")) {
      platform = "YouTube";
      platformIcon = "youtube";

      if (btch.youtube) {
        try {
          const res = await btch.youtube(trimmedUrl);
          if (res && res.status) {
            title = res.title || "YouTube Video / Short (HD)";
            thumbnail = res.thumbnail || thumbnail;

            if (res.mp4) {
              downloadOptions.push({
                quality: "720p / 1080p MP4 Video",
                format: "MP4",
                size: "Direct Video",
                downloadUrl: res.mp4,
                type: "video",
              });
            }
            if (res.mp3) {
              downloadOptions.push({
                quality: "Audio Track (MP3)",
                format: "MP3",
                size: "320kbps",
                downloadUrl: res.mp3,
                type: "audio",
              });
            }
          }
        } catch (e: any) {
          console.error("btch.youtube error:", e.message);
        }
      }
    }

    // 4. TWITTER / X
    else if (trimmedUrl.includes("twitter.com") || trimmedUrl.includes("x.com")) {
      platform = "X (Twitter)";
      platformIcon = "twitter";

      if (btch.twitter) {
        try {
          const res = await btch.twitter(trimmedUrl);
          if (res && res.status) {
            title = res.title || "X (Twitter) Video Clip";
            if (Array.isArray(res.url)) {
              for (const u of res.url) {
                if (u.hd) {
                  downloadOptions.push({
                    quality: "HD 720p / 1080p Clip",
                    format: "MP4",
                    size: "High Definition",
                    downloadUrl: u.hd,
                    type: "video",
                  });
                }
                if (u.sd) {
                  downloadOptions.push({
                    quality: "Standard SD Clip",
                    format: "MP4",
                    size: "Normal Speed",
                    downloadUrl: u.sd,
                    type: "video",
                  });
                }
              }
            } else if (typeof res.url === "string") {
              downloadOptions.push({
                quality: "Direct MP4 Video",
                format: "MP4",
                size: "Direct Stream",
                downloadUrl: res.url,
                type: "video",
              });
            }
          }
        } catch (e: any) {
          console.error("btch.twitter error:", e.message);
        }
      }
    }

    // 5. INSTAGRAM
    else if (trimmedUrl.includes("instagram.com")) {
      platform = "Instagram";
      platformIcon = "instagram";

      // Method A: btch.igdl
      if (btch.igdl) {
        try {
          const res = await btch.igdl(trimmedUrl);
          if (res && res.status && Array.isArray(res.result)) {
            title = "Instagram Reel / Video";
            for (const item of res.result) {
              if (item.url) {
                if (item.thumbnail && !thumbnail) thumbnail = item.thumbnail;
                downloadOptions.push({
                  quality: "HD 1080p Video / Media",
                  format: "MP4",
                  size: "Direct Stream",
                  downloadUrl: item.url,
                  type: "video",
                });
              }
            }
          }
        } catch (e: any) {
          console.error("btch.igdl error:", e.message);
        }
      }
    }

    // If still no download options found
    if (downloadOptions.length === 0) {
      return NextResponse.json(
        {
          error:
            "Could not fetch downloadable video streams for this link. Please ensure the post/account is PUBLIC, or try another video link from Facebook, TikTok, Instagram or YouTube.",
        },
        { status: 422 }
      );
    }

    return NextResponse.json({
      success: true,
      platform,
      platformIcon,
      title,
      duration,
      originalUrl: trimmedUrl,
      thumbnail,
      downloadOptions,
    });
  } catch (err: any) {
    console.error("Download-video API error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to process video link. Please verify URL." },
      { status: 500 }
    );
  }
}
