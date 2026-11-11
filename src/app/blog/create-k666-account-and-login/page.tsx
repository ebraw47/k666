import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Create a K666 Account and Login',
  description: 'Register on K666 with your Pakistani number, set a password, verify OTP, and log in safely.',
  keywords: ['K666 login', 'K666 register', 'K666 account', 'K666 signup'],
  alternates: { canonical: `${SITE_URL}/blog/create-k666-account-and-login` },
  openGraph: {
    title: 'How to Create a K666 Account and Login',
    description: 'Register on K666 with your Pakistani number, set a password, verify OTP, and log in safely.',
    url: `${SITE_URL}/blog/create-k666-account-and-login`,
    siteName: 'K666',
    type: 'article',
    images: [{ url: `${SITE_URL}/k666-signup.webp`, width: 1200, height: 630, alt: 'How to Create a K666 Account and Login' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='How to Create a K666 Account and Login'
        description='Register on K666 with your Pakistani number, set a password, verify OTP, and log in safely.'
        slug="create-k666-account-and-login"
        datePublished="2026-10-07"
        image={`${SITE_URL}/k666-signup.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Create a K666 Account and Login</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Create a K666 Account and Login</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · K666 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/k666-signup.webp" alt='How to Create a K666 Account and Login' width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>After installing the APK, open K666 and choose <strong>Register / Signup</strong>. Pakistani players typically use a mobile number, password, and OTP.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Signup steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Tap Register on the welcome screen.</li>
          <li>Enter your Pakistani (+92) mobile number and create a strong password.</li>
          <li>Enter the OTP sent to your phone.</li>
          <li>Add a referral code only if you trust the source (optional).</li>
          <li>Complete any security PIN if the app asks for one.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Login steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open K666 and tap Login / Sign In.</li>
          <li>Enter the same mobile number and password.</li>
          <li>Complete OTP if prompted.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Safety tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Never share OTP, password, or withdrawal PIN with anyone claiming to be support.</li>
          <li>Use the same name as your JazzCash / EasyPaisa account for smoother withdrawals later.</li>
          <li>If login fails, use Forgot Password via OTP — not a third-party &quot;agent.&quot;</li>
        </ul>
        <p>
          Login stuck? See{' '}
          <Link href="/blog/k666-login-otp-not-working" className="text-accent hover:underline">
            K666 login &amp; OTP fix guide
          </Link>
          . Next:{' '}
          <Link href="/blog/k666-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">
            deposit with JazzCash / EasyPaisa
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
