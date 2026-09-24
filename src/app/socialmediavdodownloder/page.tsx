import { Metadata } from "next";
import Link from "next/link";
import { SocialVideoDownloader } from "@/components/SocialVideoDownloader";
import { 
  ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, Zap, 
  Download, Film, HelpCircle, ChevronRight, Smartphone, Laptop, Lock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Social Media Video Downloader (HD, No Watermark, No Login) | AIPromptGenerate",
  description:
    "Fast, 100% free social media video downloader for TikTok, Instagram Reels, YouTube Shorts, Facebook, Twitter/X, and Pinterest. Save HD MP4 videos without watermarks or login.",
  alternates: {
    canonical: "https://www.aipromptgenerate.xyz/socialmediavdodownloder",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "website",
    title: "Free Social Media Video Downloader - No Watermark & 100% Free",
    description: "Download TikTok, Instagram Reels, Shorts, and Twitter videos in 1080p HD without login or watermarks.",
    url: "https://www.aipromptgenerate.xyz/socialmediavdodownloder",
    siteName: "AI Prompt Generate",
    images: [
      {
        url: "/top1_free_ai_studio.jpg",
        width: 1200,
        height: 630,
        alt: "Free Social Media Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Social Media Video Downloader - No Watermark & 100% Free",
    description: "Download TikTok, Instagram Reels, Shorts, and Twitter videos in 1080p HD without login or watermarks.",
    images: ["/top1_free_ai_studio.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://www.aipromptgenerate.xyz/socialmediavdodownloder#app",
      "name": "Social Media Video Downloader",
      "url": "https://www.aipromptgenerate.xyz/socialmediavdodownloder",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "TikTok Video Downloader Without Watermark",
        "Instagram Reels HD MP4 Downloader",
        "YouTube Shorts Free Downloader",
        "Facebook Public Video Downloader",
        "Twitter / X Clip Downloader",
        "100% Free with No Login and No Account Required"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.aipromptgenerate.xyz/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Video Downloader",
          "item": "https://www.aipromptgenerate.xyz/socialmediavdodownloder"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aipromptgenerate.xyz/socialmediavdodownloder#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is this social media video downloader completely free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our video downloader is 100% free with unlimited downloads. There are no subscriptions, credits, or hidden charges."
          }
        },
        {
          "@type": "Question",
          "name": "Does the downloader remove TikTok and Instagram watermarks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it extracts the direct clean MP4 stream without platform watermarks or logos whenever available."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to install any app or extension?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It runs entirely inside your browser on iPhone, Android, Mac, Windows, and Linux without installing any third-party apps."
          }
        },
        {
          "@type": "Question",
          "name": "Can I download private videos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, only publicly accessible videos and posts can be processed to respect user privacy and platform guidelines."
          }
        }
      ]
    }
  ]
};

export default function SocialMediaVdoDownloaderPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top minimal header */}
      <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#8054ff] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-600 font-mono">100% Free • No Login</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#8054ff] text-xs font-semibold mb-6 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>HD Video Downloader Studio</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101828] tracking-tight leading-tight font-heading max-w-2xl">
          Social Media <span className="text-[#8054ff]">Video Downloader</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl font-normal leading-relaxed">
          Save high-quality MP4 videos from TikTok, Instagram Reels, YouTube Shorts, Facebook, and Twitter/X with zero watermarks.
        </p>

        {/* Large Prominent Downloader Box */}
        <div className="w-full mt-8 sm:mt-10">
          <SocialVideoDownloader />
        </div>

        {/* Features Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 hover:border-purple-200 transition">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#8054ff] flex items-center justify-center font-bold">
              <Zap className="w-4.5 h-4.5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 font-heading">High-Speed Engine</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Instant video stream extraction and direct CDN high-speed downloads without lag.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 hover:border-emerald-200 transition">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4.5 h-4.5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 font-heading">No Watermarks</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Download clean original MP4 clips without platform logos, handles, or watermarks.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 hover:border-blue-200 transition">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 font-heading">Zero Login Required</h3>
            <p className="text-xs text-slate-500 leading-relaxed">100% private, anonymous, and no account or signup needed forever.</p>
          </div>
        </div>

        {/* 3 Step Guide */}
        <section className="mt-16 w-full text-left space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-[#101828] font-heading">How to Download Any Social Video</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Follow these 3 simple steps to save your favorite clips in seconds.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs relative">
              <div className="w-7 h-7 rounded-full bg-purple-100 text-[#8054ff] font-bold text-xs flex items-center justify-center mb-3">1</div>
              <h4 className="font-bold text-sm text-slate-800 mb-1">Copy Link</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Open TikTok, Instagram, or YouTube and copy the share link of the video.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs relative">
              <div className="w-7 h-7 rounded-full bg-purple-100 text-[#8054ff] font-bold text-xs flex items-center justify-center mb-3">2</div>
              <h4 className="font-bold text-sm text-slate-800 mb-1">Paste & Process</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Paste the URL into our downloader box above and click the Download button.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs relative">
              <div className="w-7 h-7 rounded-full bg-purple-100 text-[#8054ff] font-bold text-xs flex items-center justify-center mb-3">3</div>
              <h4 className="font-bold text-sm text-slate-800 mb-1">Save MP4</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Choose your preferred video quality (1080p, 720p, or Audio) to save directly.</p>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 w-full text-center space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Supported Social Media Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-slate-600">
            {["TikTok", "Instagram Reels", "YouTube Shorts", "Twitter / X", "Facebook Watch", "Pinterest", "Threads"].map(
              (platform) => (
                <span
                  key={platform}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs hover:border-purple-300 transition"
                >
                  {platform}
                </span>
              )
            )}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <section className="mt-16 w-full text-left space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-[#101828] font-heading">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Everything you need to know about our free video downloading utility.</p>
          </div>

          <div className="space-y-3">
            <details className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs open:border-purple-300 transition-all">
              <summary className="font-semibold text-sm sm:text-base text-slate-800 cursor-pointer list-none flex items-center justify-between">
                <span>Is this video downloader 100% free forever?</span>
                <span className="text-slate-400 group-open:rotate-90 transition-transform duration-200">›</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Yes, it is 100% free with unlimited downloads. There are no credit limitations, no subscription charges, and no hidden fees.
              </p>
            </details>

            <details className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs open:border-purple-300 transition-all">
              <summary className="font-semibold text-sm sm:text-base text-slate-800 cursor-pointer list-none flex items-center justify-between">
                <span>Can I download TikTok videos without watermark?</span>
                <summary className="sr-only">Toggle</summary>
                <span className="text-slate-400 group-open:rotate-90 transition-transform duration-200">›</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Yes! Our high-speed parser fetches the direct source video stream from TikTok servers without adding any watermarks or overlays.
              </p>
            </details>

            <details className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs open:border-purple-300 transition-all">
              <summary className="font-semibold text-sm sm:text-base text-slate-800 cursor-pointer list-none flex items-center justify-between">
                <span>Does it work on mobile phones (iPhone & Android)?</span>
                <span className="text-slate-400 group-open:rotate-90 transition-transform duration-200">›</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Yes, our downloader is fully web-based and responsive. On iOS (Safari) and Android (Chrome), simply tap download and the MP4 file saves straight to your device.
              </p>
            </details>

            <details className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs open:border-purple-300 transition-all">
              <summary className="font-semibold text-sm sm:text-base text-slate-800 cursor-pointer list-none flex items-center justify-between">
                <span>Can I download private social media videos?</span>
                <span className="text-slate-400 group-open:rotate-90 transition-transform duration-200">›</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                No. To respect creator privacy and platform terms of service, only public videos can be retrieved and downloaded.
              </p>
            </details>
          </div>
        </section>

        {/* Backlinks & Related AI Tools */}
        <section className="mt-16 pt-10 border-t border-slate-200/80 w-full text-center space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Explore More Free AI Prompts & Tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-[#8054ff] underline underline-offset-4">
              AI Prompt Generator
            </Link>
            <span>•</span>
            <Link href="/ai-image-prompts" className="hover:text-[#8054ff] underline underline-offset-4">
              AI Image Prompts
            </Link>
            <span>•</span>
            <Link href="/ai-video-prompts" className="hover:text-[#8054ff] underline underline-offset-4">
              AI Video Prompts
            </Link>
            <span>•</span>
            <Link href="/free-ai-prompts-tools" className="hover:text-[#8054ff] underline underline-offset-4">
              Free AI Tools Hub
            </Link>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-slate-200/70 text-center text-xs text-slate-400 font-medium">
        © 2026 AIPromptGenerate.xyz • Free Online Video Utility • Respect Content Creators&apos; Rights
      </footer>
    </div>
  );
}
