import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Prompt Generator & Photo Prompt Tools (No Sign-Up) | AIPromptGenerate",
  description:
    "Free AI prompt generator with no sign-up. Get ready-to-use AI couple prompts from two photos, plus a video saver for your own TikTok clips. Fast, simple, mobile-friendly.",
  alternates: {
    canonical: "https://www.aipromptgenerate.xyz/free-ai-prompts-tools",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "website",
    title: "Free AI Prompt Generator & Photo Prompt Tools (No Sign-Up)",
    description: "Turn simple ideas into detailed AI prompts. Couple photo prompts and video tools, all free.",
    url: "https://www.aipromptgenerate.xyz/free-ai-prompts-tools",
    siteName: "AI Prompt Generate",
    images: [
      {
        url: "/top1_free_ai_studio.jpg",
        width: 1200,
        height: 630,
        alt: "Free AI Prompt Generator & Photo Prompt Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Prompt Generator & Photo Prompt Tools (No Sign-Up)",
    description: "Turn simple ideas into detailed AI prompts. Couple photo prompts and video tools, all free.",
    images: ["/top1_free_ai_studio.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "AIPromptGenerate",
      "url": "https://www.aipromptgenerate.xyz"
    },
    {
      "@type": "WebPage",
      "name": "Free AI Prompt Generator & Photo Prompt Tools",
      "url": "https://www.aipromptgenerate.xyz/free-ai-prompts-tools",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://www.aipromptgenerate.xyz"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the AI prompt generator really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can use it without creating an account. Check the tool page for any current usage limits."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to sign up?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Open the tool, describe your idea, and copy the prompt."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI models can I use the prompts with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The prompts are written in plain descriptive language, so they work with most popular image and text AI models."
          }
        },
        {
          "@type": "Question",
          "name": "Can I download any TikTok video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only download videos you own or have permission to use. Respect creators' rights and TikTok's terms."
          }
        }
      ]
    }
  ]
};

export default function FreeAiPromptsToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-[#f7f5f0] dark:bg-[#12141c] text-[#1d2433] dark:text-[#eceef5] font-sans antialiased transition-colors">
        {/* Top Navigation */}
        <nav className="border-b border-[#dcd8cc] dark:border-[#2c3040] bg-white/70 dark:bg-[#1a1d28]/70 backdrop-blur-md sticky top-0 z-50 py-3.5 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-extrabold text-lg tracking-tight flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              AIPromptGenerate
            </Link>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/ai-couple-prompts-two-photos" className="hover:text-blue-600 transition">Couple Prompts</Link>
              <Link href="/tiktok-video-downloader" className="hover:text-blue-600 transition">Downloader</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="py-16 md:py-20 border-b border-[#dcd8cc] dark:border-[#2c3040]">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white leading-[1.15]">
              Free AI prompts and tools, with no sign-up
            </h1>
            <p className="text-lg md:text-xl text-[#5b6478] dark:text-[#a3a9bb] max-w-2xl mb-8 leading-relaxed">
              Type a rough idea and get a detailed prompt you can paste into your favorite AI model. Then use the photo and video tools built for creators. Everything opens in your browser.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-sm hover:bg-blue-700 transition"
              >
                Open the AI Prompt Generator Free
              </Link>
              <a
                href="#compare"
                className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold text-base hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
              >
                Compare the tools
              </a>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          {/* Section: Tools */}
          <section id="tools" className="border-b border-[#dcd8cc] dark:border-[#2c3040] pb-14 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Three tools, one workflow
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-[#1a1d28] p-6 sm:p-8 rounded-2xl border border-[#dcd8cc] dark:border-[#2c3040] shadow-xs">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  Turn any idea into a strong prompt
                </h3>
                <p className="text-[#5b6478] dark:text-[#a3a9bb] leading-relaxed mb-3">
                  Good AI results start with specific wording: subject, style, lighting, mood, and camera angle. The{" "}
                  <Link href="/" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                    AI Prompt Generator Free
                  </Link>{" "}
                  adds those details for you, so a short idea like &quot;a cabin in the snow&quot; becomes a full prompt you can copy in one tap.
                </p>
                <p className="text-sm font-medium text-slate-500">
                  It suits beginners who don&apos;t know what to write, and experienced users who want a faster first draft.
                </p>
              </div>

              <div className="bg-white dark:bg-[#1a1d28] p-6 sm:p-8 rounded-2xl border border-[#dcd8cc] dark:border-[#2c3040] shadow-xs">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  Make couple portraits from your own photos
                </h3>
                <p className="text-[#5b6478] dark:text-[#a3a9bb] leading-relaxed mb-3">
                  Anniversary gifts, wedding-style scenes, and cinematic portraits are among the most popular AI art requests. The{" "}
                  <Link href="/ai-couple-prompts-two-photos" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                    AI Couple Prompts from Two Photos
                  </Link>{" "}
                  page gives you prompt structures built for exactly this, so the result stays true to both people while adding a theme you choose.
                </p>
                <p className="text-sm font-medium text-slate-500">
                  Use clear, well-lit photos and pick one theme at a time: romantic, cinematic, vintage, or playful.
                </p>
              </div>

              <div className="bg-white dark:bg-[#1a1d28] p-6 sm:p-8 rounded-2xl border border-[#dcd8cc] dark:border-[#2c3040] shadow-xs">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  Save your own video clips
                </h3>
                <p className="text-[#5b6478] dark:text-[#a3a9bb] leading-relaxed mb-3">
                  Creators often keep offline copies of their own uploads for editing and reference. A{" "}
                  <Link href="/tiktok-video-downloader" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                    TikTok Video Downloader Without Watermark
                  </Link>{" "}
                  helps you save clips you own or have permission to use.
                </p>
                <div className="bg-[#ebe8f7] dark:bg-[#23263a] border-l-4 border-blue-600 p-4 rounded-r-xl text-sm text-[#1d2433] dark:text-[#eceef5]">
                  Only download and share content you own or have clear permission to use. Respect creators&apos; rights and platform terms.
                </div>
              </div>
            </div>
          </section>

          {/* Section: Compare */}
          <section id="compare" className="border-b border-[#dcd8cc] dark:border-[#2c3040] pb-14 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Which tool should you use?
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-[#dcd8cc] dark:border-[#2c3040]">
              <table className="w-full text-left border-collapse bg-white dark:bg-[#1a1d28] text-sm">
                <thead>
                  <tr className="bg-[#ebe8f7] dark:bg-[#23263a] border-b border-[#dcd8cc] dark:border-[#2c3040]">
                    <th className="p-4 font-bold">Tool</th>
                    <th className="p-4 font-bold">What it does</th>
                    <th className="p-4 font-bold">Best for</th>
                    <th className="p-4 font-bold">Sign-up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dcd8cc] dark:divide-[#2c3040]">
                  <tr>
                    <td className="p-4 font-semibold text-blue-600 dark:text-blue-400">
                      <Link href="/">AI Prompt Generator</Link>
                    </td>
                    <td className="p-4">Expands a simple idea into a detailed prompt</td>
                    <td className="p-4">Images, video ideas, writing starters</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">Not required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-blue-600 dark:text-blue-400">
                      <Link href="/ai-couple-prompts-two-photos">Couple Prompts from Two Photos</Link>
                    </td>
                    <td className="p-4">Gives themed prompt structures for two-person portraits</td>
                    <td className="p-4">Gifts, anniversaries, social posts</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">Not required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-blue-600 dark:text-blue-400">
                      <Link href="/tiktok-video-downloader">Video Downloader</Link>
                    </td>
                    <td className="p-4">Saves clips for offline use</td>
                    <td className="p-4">Your own videos and permitted content</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">Not required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: 5 Steps */}
          <section id="how" className="border-b border-[#dcd8cc] dark:border-[#2c3040] pb-14 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              How to get better results in five steps
            </h2>
            <ol className="space-y-4 list-decimal pl-6 text-[#5b6478] dark:text-[#a3a9bb] leading-relaxed">
              <li className="pl-2">Write one plain sentence about what you want to create.</li>
              <li className="pl-2">
                Paste it into the{" "}
                <Link href="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  free AI prompt generator
                </Link>{" "}
                and copy the result.
              </li>
              <li className="pl-2">Run the prompt in your AI model and compare two or three versions.</li>
              <li className="pl-2">Change one detail at a time, such as mood, color, or angle, so you learn what works.</li>
              <li className="pl-2">Save your best prompts in a note for reuse.</li>
            </ol>
          </section>

          {/* Section: FAQ */}
          <section id="faq" className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              <details className="bg-white dark:bg-[#1a1d28] border border-[#dcd8cc] dark:border-[#2c3040] rounded-xl p-5 cursor-pointer">
                <summary className="font-bold text-slate-900 dark:text-white">Is the AI prompt generator really free?</summary>
                <p className="mt-3 text-[#5b6478] dark:text-[#a3a9bb] text-sm leading-relaxed">
                  Yes. You can use it without creating an account. Check the tool page for any current usage limits.
                </p>
              </details>
              <details className="bg-white dark:bg-[#1a1d28] border border-[#dcd8cc] dark:border-[#2c3040] rounded-xl p-5 cursor-pointer">
                <summary className="font-bold text-slate-900 dark:text-white">Do I need to sign up?</summary>
                <p className="mt-3 text-[#5b6478] dark:text-[#a3a9bb] text-sm leading-relaxed">
                  No. Open the tool, describe your idea, and copy the prompt.
                </p>
              </details>
              <details className="bg-white dark:bg-[#1a1d28] border border-[#dcd8cc] dark:border-[#2c3040] rounded-xl p-5 cursor-pointer">
                <summary className="font-bold text-slate-900 dark:text-white">Which AI models can I use the prompts with?</summary>
                <p className="mt-3 text-[#5b6478] dark:text-[#a3a9bb] text-sm leading-relaxed">
                  The prompts are written in plain descriptive language, so they work with most popular image and text AI models.
                </p>
              </details>
              <details className="bg-white dark:bg-[#1a1d28] border border-[#dcd8cc] dark:border-[#2c3040] rounded-xl p-5 cursor-pointer">
                <summary className="font-bold text-slate-900 dark:text-white">Can I download any TikTok video?</summary>
                <p className="mt-3 text-[#5b6478] dark:text-[#a3a9bb] text-sm leading-relaxed">
                  Only download videos you own or have permission to use. Respect creators&apos; rights and TikTok&apos;s terms.
                </p>
              </details>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#dcd8cc] dark:border-[#2c3040] py-10 px-6 text-center text-sm text-[#5b6478] dark:text-[#a3a9bb]">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3">
            <span>Explore more:</span>
            <Link href="/" className="hover:text-blue-600 underline">AIPromptGenerate home</Link>
            <span>·</span>
            <Link href="/ai-couple-prompts-two-photos" className="hover:text-blue-600 underline">Couple prompts</Link>
            <span>·</span>
            <Link href="/tiktok-video-downloader" className="hover:text-blue-600 underline">Video downloader</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
