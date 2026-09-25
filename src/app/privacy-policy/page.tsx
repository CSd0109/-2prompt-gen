import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Prompt Generate',
  description: 'Privacy Policy, data protection rules, developer API compliance, and terms for AI Prompt Generate and associated services.',
  alternates: {
    canonical: 'https://www.aipromptgenerate.xyz/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            ← Back to Free AI Prompt Studio
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-full mb-3">
            Official Policy & Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Last Updated: September 25, 2026 • Effective Date: September 25, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-base leading-relaxed text-slate-300">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction & Overview</h2>
            <p>
              Welcome to <strong>AI Prompt Generate</strong> (<a href="https://www.aipromptgenerate.xyz" className="text-indigo-400 hover:underline">https://www.aipromptgenerate.xyz</a>). 
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy details how we collect, handle, 
              store, and protect information when you visit our website, utilize our free prompt engineering generators, explore our visual prompt galleries, 
              or interact with our third-party developer integrations (including Pinterest, GitHub, Google, and related platform APIs).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              We operate under a strict <strong>Zero-Mandatory-Registration</strong> framework. You are not required to provide personal identifying information, credit cards, or passwords to access our prompt repository.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Log & Analytics Data:</strong> Standard server logs, IP addresses (anonymized), browser types, referring pages, and device viewport dimensions to diagnose server issues and optimize content delivery.
              </li>
              <li>
                <strong className="text-slate-200">Cookies & Local Storage:</strong> Lightweight local browser storage used strictly to remember your UI preferences (dark/light themes, recent copy history, and liked prompt IDs).
              </li>
              <li>
                <strong className="text-slate-200">Developer & Integration Tokens:</strong> When interacting with connected partner platforms (such as Pinterest Developers API or social media feeds), tokens are handled strictly according to OAuth standards and are never sold or shared with external data brokers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Pinterest Developer API & Third-Party Platform Compliance</h2>
            <p className="mb-3">
              Our application (including <strong>AIPromptStudio</strong>, App ID: <code>1615663</code>) interfaces with the Pinterest API strictly for publishing curated, community-approved AI visual prompts, photography reference designs, and educational tutorials.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">No Scraping of Personal Profile Data:</strong> We do not harvest, store, or profile Pinterest user information or personal boards.
              </li>
              <li>
                <strong className="text-slate-200">API Scopes & Use:</strong> Scopes requested (such as <code>pins:read</code>, <code>pins:write</code>, <code>boards:read</code>, and <code>boards:write</code>) are utilized solely to publish high-resolution visual cards directly attributed to our creative repository.
              </li>
              <li>
                <strong className="text-slate-200">Data Deletion:</strong> Any API authorization credentials can be revoked by users at any time via their Pinterest Account Security Settings or by contacting our webmaster.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property & Fair Use of Prompts</h2>
            <p>
              The prompt texts, formulas, and visual synthesis guidelines made available on <strong>AI Prompt Generate</strong> are published under the 
              <strong> Creative Commons CC0 1.0 Universal Public Domain Dedication</strong> or fair use educational frameworks. Users are granted perpetual rights 
              to copy, test, modify, and utilize prompts for commercial or personal image and video production in Midjourney, ChatGPT, Flux, and Google Veo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Security & Storage</h2>
            <p>
              We implement industry-standard HTTPS encryption (SSL/TLS), secure cloud edge hosting, and strict Content Security Policies (CSP) to ensure 
              that all web interactions remain encrypted and resilient against unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Children&apos;s Online Privacy (COPPA & GDPR Compliance)</h2>
            <p>
              Our services are directed toward artists, prompt engineers, and creators. We do not knowingly solicit or collect data from children under the age of 13. If you believe any minor has provided data on our site, please contact us immediately for prompt erasure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Contact Information</h2>
            <p>
              For privacy inquiries, API compliance questions, or data removal requests, please contact our administrative team:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="font-semibold text-white">AI Prompt Generate Legal & Compliance</p>
              <p className="text-slate-400 text-sm mt-1">Website: <a href="https://www.aipromptgenerate.xyz" className="text-indigo-400 hover:underline">https://www.aipromptgenerate.xyz</a></p>
              <p className="text-slate-400 text-sm">Direct Developer Contact: <span className="text-slate-200">dhitalsunil@gmail.com</span></p>
              <p className="text-slate-400 text-sm">Kathmandu, Nepal</p>
            </div>
          </section>

        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 AI Prompt Generate. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-slate-400">Home</Link>
            <Link href="/socialmediavdodownloder" className="hover:text-slate-400">Video Downloader</Link>
            <Link href="/privacy-policy" className="text-indigo-400">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
