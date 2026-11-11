import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K666 JazzCash Deposit Not Showing: Fix Guide',
  description:
    'What to do when a K666 JazzCash or EasyPaisa deposit is paid but balance is not credited yet.',
  keywords: [
    'K666 deposit not showing',
    'K666 JazzCash not credited',
    'K666 EasyPaisa deposit pending',
    'K666 balance not updated',
    'K666 deposit delay',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k666-jazzcash-deposit-not-showing` },
  openGraph: {
    title: 'K666 JazzCash Deposit Not Showing: Fix Guide',
    description:
      'What to do when a K666 JazzCash or EasyPaisa deposit is paid but balance is not credited yet.',
    url: `${SITE_URL}/blog/k666-jazzcash-deposit-not-showing`,
    siteName: 'K666',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k666-deposit.webp`,
        width: 1200,
        height: 630,
        alt: 'K666 JazzCash Deposit Not Showing: Fix Guide',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K666 JazzCash Deposit Not Showing: Fix Guide"
        description="What to do when a K666 JazzCash or EasyPaisa deposit is paid but balance is not credited yet."
        slug="k666-jazzcash-deposit-not-showing"
        datePublished="2026-11-11"
        image={`${SITE_URL}/k666-deposit.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">K666 JazzCash Deposit Not Showing</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        K666 JazzCash Deposit Not Showing: Fix Guide
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · K666 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/k666-deposit.webp"
          alt="K666 deposit screen when JazzCash payment is pending credit"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Paid via JazzCash or EasyPaisa but the <strong>K666 balance did not update</strong>? Most
          delays come from mismatched amount, expired deposit details, or a missing transaction ID —
          not a lost payment.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Quick checks (do these first)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open K666 → Wallet / Deposit history and pull to refresh.</li>
          <li>Confirm you paid the <strong>exact amount</strong> shown for that deposit order.</li>
          <li>
            Confirm recipient name/number matched the <strong>live in-app details</strong> (never an
            old chat or Facebook number).
          </li>
          <li>Submit the JazzCash / EasyPaisa transaction ID if the app asks for it.</li>
          <li>Wait a few minutes during peak hours; keep the payment screenshot.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-8">Common reasons credit is delayed</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Paid a previous/expired account number after starting a new deposit request.</li>
          <li>Sent a different amount than the one selected in K666.</li>
          <li>Paid from someone else’s wallet (name mismatch can slow review).</li>
          <li>Network lag between the wallet SMS and the app wallet sync.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">How to report a missing deposit</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open in-app customer service.</li>
          <li>Share: amount, time, JazzCash/EasyPaisa TID, and a clear screenshot.</li>
          <li>Do not send a second payment until support confirms the first one.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-8">Avoid this next time</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always create a fresh deposit order inside K666 before paying.</li>
          <li>Copy details from the app only — never from third-party “agents.”</li>
          <li>Use your own JazzCash or EasyPaisa account for smoother withdrawals later.</li>
        </ul>

        <p>
          Full flow:{' '}
          <Link href="/deposit-money-in-k666" className="text-accent hover:underline">
            Deposit money in K666
          </Link>{' '}
          · Blog version:{' '}
          <Link
            href="/blog/k666-deposit-jazzcash-easypaisa-guide"
            className="text-accent hover:underline"
          >
            JazzCash &amp; EasyPaisa deposit guide
          </Link>
          . Next:{' '}
          <Link href="/blog/k666-withdraw-money-guide" className="text-accent hover:underline">
            withdraw money guide
          </Link>
          .
        </p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD K666 APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · 18+ only
        </p>
      </div>
    </article>
  );
}
