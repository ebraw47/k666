import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K666 Blog - Guides, Tips, Reviews & Tutorials 2026',
  description:
    'K666 blog for Pakistan: app review, APK install, JazzCash & EasyPaisa deposits, withdrawals, safety, and beginner guides based on real search demand.',
  keywords: [
    'K666 blog',
    'K666 guide',
    'K666 review',
    'K666 APK',
    'K666 deposit',
    'K666 withdraw',
    'K666 Pakistan 2026',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'K666 Blog - Guides, Tips & Reviews 2026',
    description: 'Official K666 guides for download, payments, and safe play in Pakistan.',
    url: `${SITE_URL}/blog`,
    siteName: 'K666',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/k666-logo.webp`,
        width: 1200,
        height: 630,
        alt: 'K666 Blog',
      },
    ],
  },
};

/** SERP-matched K666 topics only (download, review, login, deposit, withdraw, safety, beginner) */
const posts = [
  {
    slug: 'k666-app-review-2026',
    title: 'K666 App Review 2026',
    description:
      'Honest review: earning games, JazzCash & EasyPaisa, pros, cons, and payout notes for Pakistan.',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'how-to-download-install-k666-apk-pakistan',
    title: 'How to Download & Install K666 APK in Pakistan',
    description: 'Step-by-step Android install: official APK, unknown sources, and troubleshooting.',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'create-k666-account-and-login',
    title: 'How to Create a K666 Account and Login',
    description: 'Register, set credentials, and log in safely on your Pakistani number.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'k666-deposit-jazzcash-easypaisa-guide',
    title: 'K666 Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add balance with local wallets, fix delayed credits, and avoid common mistakes.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'k666-withdraw-money-guide',
    title: 'K666 Withdraw Money Guide',
    description: 'Cash out to JazzCash or EasyPaisa — and fix failed requests.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'is-k666-safe-legal-pakistan',
    title: 'Is K666 Safe and Legal in Pakistan?',
    description: 'Real or fake? Official download tips, scam warnings, and responsible play.',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'how-to-use-k666-app-pakistan-guide',
    title: 'How to Use K666 App in Pakistan: Beginner Guide',
    description: 'End-to-end: download, register, deposit, play, withdraw, and stay in control.',
    readTime: '14 min read',
    featured: false,
  },
  {
    slug: 'k666-login-otp-not-working',
    title: 'K666 Login & OTP Not Working: Fix Guide',
    description: 'Fix OTP delays, login errors, locked accounts, and password reset issues.',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'k666-jazzcash-deposit-not-showing',
    title: 'K666 JazzCash Deposit Not Showing: Fix Guide',
    description: 'Paid but balance missing? Check amount, TID, and how to report delayed credit.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'k666-vip-rebate-invite-guide',
    title: 'K666 VIP, Rebate & Invite Guide 2026',
    description: 'How VIP levels, rebates, and referral rewards work — plus bonus safety tips.',
    readTime: '9 min read',
    featured: false,
  },
] as const;

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">K666 Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">
        Guides, payment help, and responsible gaming for K666 players in Pakistan
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
              post.featured ? 'border-accent' : 'border-gray-700 hover:border-accent'
            }`}
          >
            {post.featured && (
              <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>November 2026</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read {post.title} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
