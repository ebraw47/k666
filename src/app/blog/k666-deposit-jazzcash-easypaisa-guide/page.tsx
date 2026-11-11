import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K666 Deposit Guide: JazzCash & EasyPaisa',
  description: 'Add K666 balance with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes in Pakistan.',
  keywords: ['K666 deposit', 'K666 JazzCash', 'K666 EasyPaisa', 'K666 recharge'],
  alternates: { canonical: `${SITE_URL}/blog/k666-deposit-jazzcash-easypaisa-guide` },
  openGraph: {
    title: 'K666 Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add K666 balance with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes in Pakistan.',
    url: `${SITE_URL}/blog/k666-deposit-jazzcash-easypaisa-guide`,
    siteName: 'K666',
    type: 'article',
    images: [{ url: `${SITE_URL}/k666-deposit.webp`, width: 1200, height: 630, alt: 'K666 Deposit Guide: JazzCash & EasyPaisa' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='K666 Deposit Guide: JazzCash & EasyPaisa'
        description='Add K666 balance with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes in Pakistan.'
        slug="k666-deposit-jazzcash-easypaisa-guide"
        datePublished="2026-10-07"
        image={`${SITE_URL}/k666-deposit.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">K666 Deposit Guide: JazzCash & EasyPaisa</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">K666 Deposit Guide: JazzCash & EasyPaisa</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · K666 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/k666-deposit.webp" alt='K666 Deposit Guide: JazzCash & EasyPaisa' width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>People searching <strong>K666 deposit</strong> want a clear JazzCash and EasyPaisa flow. Always pay only to the recipient details shown inside the live app.</p>
        <h2 className="text-2xl font-bold text-white mt-8">How to deposit</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log in and open <strong>Deposit / Wallet / Funds</strong>.</li>
          <li>Choose JazzCash or EasyPaisa when listed.</li>
          <li>Enter an amount (minimum is often near PKR 100 — confirm on screen).</li>
          <li>Copy the exact account name and number shown in K666.</li>
          <li>Pay from your own wallet app, then return and submit any required transaction ID.</li>
          <li>Wait for the balance to refresh; keep a screenshot of the payment.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">If credit is delayed</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm you paid the current in-app details (not an old chat number).</li>
          <li>Match the exact amount selected in the deposit screen.</li>
          <li>Contact in-app support with the transaction ID and time.</li>
        </ul>
        <p>
          Paid but balance missing?{' '}
          <Link href="/blog/k666-jazzcash-deposit-not-showing" className="text-accent hover:underline">
            K666 JazzCash deposit not showing
          </Link>
          . Full page:{' '}
          <Link href="/deposit-money-in-k666" className="text-accent hover:underline">
            Deposit money in K666
          </Link>
          . Next:{' '}
          <Link href="/blog/k666-withdraw-money-guide" className="text-accent hover:underline">
            withdraw guide
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
