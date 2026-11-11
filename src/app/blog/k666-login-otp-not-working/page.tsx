import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K666 Login & OTP Not Working: Fix Guide',
  description:
    'Fix K666 login errors, OTP not received, wrong password, and account lock issues for Pakistani numbers.',
  keywords: [
    'K666 login not working',
    'K666 OTP not received',
    'K666 OTP problem',
    'K666 cannot login',
    'K666 forgot password',
  ],
  alternates: { canonical: `${SITE_URL}/blog/k666-login-otp-not-working` },
  openGraph: {
    title: 'K666 Login & OTP Not Working: Fix Guide',
    description:
      'Fix K666 login errors, OTP not received, wrong password, and account lock issues for Pakistani numbers.',
    url: `${SITE_URL}/blog/k666-login-otp-not-working`,
    siteName: 'K666',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/k666-login.webp`,
        width: 1200,
        height: 630,
        alt: 'K666 Login & OTP Not Working: Fix Guide',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="K666 Login & OTP Not Working: Fix Guide"
        description="Fix K666 login errors, OTP not received, wrong password, and account lock issues for Pakistani numbers."
        slug="k666-login-otp-not-working"
        datePublished="2026-11-11"
        image={`${SITE_URL}/k666-login.webp`}
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
        <span className="text-gray-300">K666 Login & OTP Not Working</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        K666 Login & OTP Not Working: Fix Guide
      </h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · K666 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/k666-login.webp"
          alt="K666 login screen for OTP and sign-in troubleshooting"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          If <strong>K666 login</strong> fails or the <strong>OTP never arrives</strong>, most issues
          are network, number format, or SMS delay — not a broken account. Use this checklist before
          contacting support.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">OTP not received</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Confirm you entered a Pakistani mobile number in the correct format (+92 / 03xx).</li>
          <li>Wait 60–90 seconds; tap Resend OTP only once after the timer ends.</li>
          <li>Check SMS inbox and spam/blocked messages.</li>
          <li>Switch between Wi‑Fi and mobile data, then reopen the app.</li>
          <li>Make sure your SIM can receive SMS (balance/network active).</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-8">Cannot log in</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the same number you registered with — not a new SIM alias.</li>
          <li>Reset the password via Forgot Password + OTP instead of guessing repeatedly.</li>
          <li>Clear app cache or reinstall only from the{' '}
            <Link href="/download-k666" className="text-accent hover:underline">
              official download page
            </Link>
            .
          </li>
          <li>Update to the latest APK if the login screen looks outdated or stuck.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Account locked or “too many attempts”</h2>
        <p>
          Wait 15–30 minutes, then try again with the correct password. Do not share OTP or PIN with
          anyone claiming to be “agent support.” Real help is inside the app or on our{' '}
          <Link href="/contact-us" className="text-accent hover:underline">
            contact page
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Still stuck?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Screenshot the exact error message and time.</li>
          <li>Note the mobile number ending digits and device model.</li>
          <li>Open in-app customer service with those details.</li>
        </ul>

        <p>
          New to K666? Start with{' '}
          <Link href="/blog/create-k666-account-and-login" className="text-accent hover:underline">
            create account &amp; login
          </Link>
          , then{' '}
          <Link
            href="/blog/k666-deposit-jazzcash-easypaisa-guide"
            className="text-accent hover:underline"
          >
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
