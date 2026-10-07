import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FaqList from '@/components/FaqList';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import {
  APP_OS,
  APP_SIZE,
  APP_VERSION,
  BRAND_NAME,
  LOGO_PATH,
  SITE_URL,
  SUPPORT_EMAIL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'K666 Pakistan Free Download Official APK 2026',
  description:
    'Download K666 APK for Pakistan. Play earning games, claim rewards, deposit & withdraw with JazzCash & EasyPaisa. Official site k666-app.com.pk.',
  keywords: [
    'K666',
    'K666 APK',
    'K666 download',
    'K666 Pakistan',
    'K666 game',
    'K666 earning app',
    'K666 JazzCash',
    'K666 EasyPaisa',
    'k666-app.com.pk',
    'K666 2026',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'K666 Pakistan Free Download Official APK 2026',
    description:
      "Pakistan's K666 gaming app — play, earn, JazzCash & EasyPaisa wallets.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'K666 - Official Gaming APK Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K666 Pakistan Free Download Official APK 2026',
    description: 'Download K666 APK — earn real cash with JazzCash & EasyPaisa.',
    images: [`${SITE_URL}/feature/og-image.webp`],
  },
};

const appInfo = [
  { label: 'App Name', value: 'K666' },
  { label: 'Category', value: 'Earning Games, Slots, Prediction' },
  { label: 'Size', value: APP_SIZE },
  { label: 'Latest Version', value: APP_VERSION },
  { label: 'Required OS', value: APP_OS },
  { label: 'Update', value: '2026' },
  { label: 'Downloads', value: '10K+' },
  { label: 'Language', value: 'English, Urdu' },
  { label: 'Payments', value: 'JazzCash, EasyPaisa' },
  { label: 'Price', value: 'Free' },
];

const screenshots = [
  { src: '/k666-home.webp', alt: 'K666 home page', title: 'Home' },
  { src: '/k666-signup.webp', alt: 'K666 register and signup', title: 'Register' },
  { src: '/k666-login.webp', alt: 'K666 login screen', title: 'Login' },
  { src: '/k666-deposit.webp', alt: 'K666 deposit funds', title: 'Deposit' },
  { src: '/k666-withdraw.webp', alt: 'K666 withdrawal methods', title: 'Withdraw' },
  { src: '/k666-support.webp', alt: 'K666 customer support', title: 'Support' },
];

const features = [
  {
    title: 'Play & Earn on Android',
    text: 'K666 is built for Pakistani phones — light APK, fast rounds, and a simple lobby for earning games, slots, and prediction-style play.',
  },
  {
    title: 'JazzCash & EasyPaisa',
    text: 'Deposit and withdraw with the wallets you already use. Always confirm the amount and account name shown inside the app before you send PKR.',
  },
  {
    title: 'Low Entry Deposit',
    text: 'Start small when the wallet allows — many players begin near PKR 100. Check the live Deposit screen for current minimums.',
  },
  {
    title: 'Daily Rewards & Bonuses',
    text: 'Look for welcome offers, daily rewards, and in-app promotions. Read wagering rules before you rely on any bonus.',
  },
  {
    title: 'Clear Wallet Records',
    text: 'Track deposits, gameplay, and withdrawals in your wallet history so you stay in control of every PKR.',
  },
  {
    title: 'In-App Support',
    text: 'Open customer service from the app when deposits, logins, or withdrawals need a quick hand.',
  },
];

const faqs = [
  {
    q: 'Is K666 free to download?',
    a: 'Yes. The APK is free from k666-app.com.pk. Always use the official download button so you avoid modified copies.',
  },
  {
    q: 'Which games can I play on K666?',
    a: 'K666 focuses on mobile earning games popular in Pakistan — including slots, prediction-style games, and other short rounds listed in the lobby. Categories may update over time.',
  },
  {
    q: 'How do I deposit money?',
    a: 'Open Deposit, pick JazzCash or EasyPaisa, enter the amount, follow on-screen steps, then confirm. See our deposit guide for details.',
  },
  {
    q: 'How do I withdraw winnings?',
    a: 'Open Withdraw, set your withdrawal PIN if required, bind JazzCash or EasyPaisa in your name, meet any turnover rules, then submit.',
  },
  {
    q: 'Is K666 available on iPhone?',
    a: 'The primary install path is Android APK. Some players use a mobile browser lobby; for PC, use an Android emulator — see our PC guide.',
  },
  {
    q: 'Is there a risk of losing money?',
    a: 'Yes. Real-money play always carries risk. Only use money you can afford to lose and play responsibly (18+).',
  },
];

export default function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}${LOGO_PATH}`,
        description:
          'K666 official Pakistan site — earning games, JazzCash & EasyPaisa.',
        areaServed: { '@type': 'Country', name: 'Pakistan', alternateName: 'PK' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SUPPORT_EMAIL,
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: ['en', 'ur'],
      },
      {
        '@type': 'SoftwareApplication',
        name: BRAND_NAME,
        operatingSystem: APP_OS,
        applicationCategory: 'GameApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.5',
          ratingCount: '10000',
          bestRating: '5',
        },
        downloadUrl: `${SITE_URL}/download-k666`,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        image: `${SITE_URL}${LOGO_PATH}`,
        author: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="dx-hero relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="dx-hero-bg" aria-hidden="true">
          <Image
            src="/k666-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="dx-hero-banner-img"
          />
          <span className="dx-hero-orb dx-hero-orb-a" />
          <span className="dx-hero-orb dx-hero-orb-b" />
          <span className="dx-hero-orb dx-hero-orb-c" />
          <span className="dx-hero-grid" />
          <span className="dx-hero-fade" />
        </div>
        <div className="container mx-auto relative z-[1]">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-4 flex justify-center lg:justify-start">
                <span className="sr-only">K666</span>
                <span
                  className="dx-wordmark font-logo italic font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-[0_4px_0_#0d3a14,0_8px_24px_rgba(0,0,0,0.45)]"
                  aria-hidden="true"
                >
                  <span className="dx-wordmark-orange">K</span>
                  <span className="dx-wordmark-white">666</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-6 text-cyan">
                Pakistan&apos;s Real-Money Gaming App 2026
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Download the official K666 APK — play earning games, claim rewards, and use JazzCash
                &amp; EasyPaisa for deposits and withdrawals. Get the APK only from the button below.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-8">
                <DownloadButton size="lg" label="DOWNLOAD K666" animated />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { n: '10K+', l: 'Downloads' },
                  { n: APP_SIZE, l: 'App Size' },
                  { n: '18+', l: 'Players Only' },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-accent">{s.n}</div>
                    <div className="text-sm text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">*Available for Android devices</p>
            </div>
            <div className="flex-shrink-0">
              <div className="dx-main-logo relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src={LOGO_PATH}
                  alt="K666 Official Logo"
                  width={512}
                  height={512}
                  className="relative z-[1] object-contain p-6 w-full h-full"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App info — matches official K666 lobby card */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            K666 Download Info
          </h2>

          <div className="k666-info-card mx-auto">
            <div className="k666-info-top">
              <div className="k666-info-brand">
                <div className="k666-info-logo">
                  <Image
                    src={LOGO_PATH}
                    alt="K666"
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <p className="k666-info-title">
                    <span className="text-accent">k</span>666
                  </p>
                  <p className="k666-info-sub">Official Pakistan APK</p>
                </div>
              </div>
              <span className="k666-info-badge">HOT</span>
            </div>

            <div className="k666-info-wallet">
              <span className="k666-info-wallet-label">App Status</span>
              <span className="k666-info-wallet-value">Online · Free</span>
              <span className="k666-info-deposit">APK</span>
            </div>

            <ul className="k666-info-list">
              {appInfo.map((row) => (
                <li key={row.label} className="k666-info-row">
                  <span className="k666-info-key">{row.label}</span>
                  <span className="k666-info-val">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-8">
            <DownloadButton size="md" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is K666?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <Link href="/" className="text-accent hover:underline font-semibold">
                K666
              </Link>{' '}
              is a Pakistan-focused real-money gaming app for players who want simple Android games,
              local JazzCash and EasyPaisa wallets, and clear deposit/withdraw flows.
            </p>
            <p>
              New players can register, explore offers, then deposit when ready. Keep sessions light,
              track your wallet, and use in-app support when you need help across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Why popular */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why K666 is Searched in Pakistan
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            {[
              'Local payments: JazzCash & EasyPaisa when shown on Deposit / Withdraw.',
              'Lightweight APK suited to mid-range Android phones.',
              'Earning-game style rounds with daily rewards and welcome offers.',
              'Clear wallet history for deposits and cash-outs.',
              'Guides for download, deposit, and withdraw on k666-app.com.pk.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to start — glass steps matching download info */}
      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="k666-start-panel">
            <div className="k666-start-head">
              <span className="k666-start-badge">Player Guide · 2026</span>
              <h2 className="k666-start-title">
                How to Start with <span>K666</span>
              </h2>
              <p className="k666-start-sub">
                Six clear moves from download to your first cash-out — built for Pakistan players.
              </p>
            </div>

            <ol className="k666-start-grid">
              {[
                {
                  title: 'Get the Official APK',
                  detail:
                    'Open k666-app.com.pk and tap Download. Use only the official button so you avoid modified copies.',
                },
                {
                  title: 'Install on Android',
                  detail:
                    'Allow install from unknown sources, open the APK file, and finish setup on Android 5.0+.',
                },
                {
                  title: 'Sign Up or Sign In',
                  detail:
                    'Launch K666, register with your mobile number and OTP, or log in if you already have an account.',
                },
                {
                  title: 'Claim Offers',
                  detail:
                    'Check welcome bonuses, daily rewards, missions, and VIP promos — always read wagering rules first.',
                },
                {
                  title: 'Deposit & Play',
                  detail:
                    'Optional: add funds with JazzCash or EasyPaisa, then pick a game from the lobby and start small.',
                },
                {
                  title: 'Withdraw Safely',
                  detail:
                    'Play responsibly (18+). When ready, withdraw to your wallet after PIN and turnover rules are met.',
                },
              ].map((step, i) => (
                <li key={step.title} className="k666-start-card">
                  <span className="k666-start-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>

            <div className="k666-start-cta">
              <p className="k666-start-note">Official APK · JazzCash &amp; EasyPaisa · 18+ only</p>
              <DownloadButton size="md" label="DOWNLOAD K666 NOW" />
            </div>
          </div>
        </div>
      </section>

      {/* Account / Login / Wallet / Cash out — glass flow + glossy phones */}
      {[
        {
          id: 'signup',
          badge: 'Account',
          title: (
            <>
              K666 Signup — Create Your <span>Account</span>
            </>
          ),
          body: (
            <>
              New to K666? Open the app and tap <strong>Register / Signup</strong>. Enter your Pakistani
              mobile number, set a strong password, and verify the OTP sent to your phone. You can also
              add an invite code if a friend shared one.
            </>
          ),
          steps: [
            'Tap Register on the welcome screen',
            'Enter mobile number + password',
            'Verify OTP and set security PIN if asked',
            'Start exploring the lobby and offers',
          ],
          stepsOrdered: true,
          href: '/blog/create-k666-account-and-login',
          linkLabel: 'Full signup & login guide →',
          img: '/k666-signup.webp',
          imgAlt: 'K666 signup and register screen',
          reverse: false,
        },
        {
          id: 'signin',
          badge: 'Login',
          title: (
            <>
              K666 Sign In — Access Your <span>Account</span>
            </>
          ),
          body: (
            <>
              Already registered? Open K666 and choose <strong>Login / Sign In</strong>. Use the same
              mobile number and password you created at signup. Never share your OTP or withdrawal PIN
              with anyone claiming to be support.
            </>
          ),
          steps: [
            'Enter your registered phone number',
            'Type your password carefully',
            'Complete any OTP check if prompted',
            'If login fails, reset password or contact in-app support',
          ],
          stepsOrdered: false,
          href: '/blog/create-k666-account-and-login',
          linkLabel: 'Troubleshoot login issues →',
          img: '/k666-login.webp',
          imgAlt: 'K666 sign in and login screen',
          reverse: true,
        },
        {
          id: 'deposit',
          badge: 'Wallet',
          title: (
            <>
              K666 Deposit — <span>JazzCash</span> &amp; EasyPaisa
            </>
          ),
          body: (
            <>
              Add balance from the <strong>Deposit / Funds</strong> screen. Pick JazzCash or EasyPaisa when
              listed, enter the amount, and pay only to the recipient details shown inside the app — never
              reuse old numbers from chats.
            </>
          ),
          steps: [
            'Open Deposit and choose a payment method',
            'Enter amount and note any minimum shown',
            'Copy exact recipient details from the app',
            'Pay in your wallet app and save the transaction ID',
          ],
          stepsOrdered: true,
          href: '/deposit-money-in-k666',
          linkLabel: 'Full deposit guide →',
          img: '/k666-deposit.webp',
          imgAlt: 'K666 deposit funds screen with JazzCash and EasyPaisa',
          reverse: false,
        },
        {
          id: 'withdraw',
          badge: 'Cash out',
          title: (
            <>
              K666 Withdrawal — Get Your <span>Winnings</span>
            </>
          ),
          body: (
            <>
              When you are ready to cash out, open <strong>Withdraw</strong>. Bind a JazzCash or EasyPaisa
              wallet in your own name, meet any turnover rules, enter the amount, and confirm with your PIN
              or OTP. Processing is often minutes to a few hours.
            </>
          ),
          steps: [
            'Bind your wallet account (name must match)',
            'Enter amount within the shown min / max',
            'Complete PIN or OTP verification',
            'Save the request ID until funds arrive',
          ],
          stepsOrdered: false,
          href: '/withdraw-money-from-k666',
          linkLabel: 'Full withdrawal guide →',
          img: '/k666-withdraw.webp',
          imgAlt: 'K666 withdrawal methods screen',
          reverse: true,
        },
      ].map((block) => {
        const ListTag = block.stepsOrdered ? 'ol' : 'ul';
        return (
          <section key={block.id} id={block.id} className="py-10 md:py-14 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className={`k666-flow-panel${block.reverse ? ' k666-flow-panel--reverse' : ''}`}>
                <div className="k666-flow-copy">
                  <span className="k666-flow-badge">{block.badge}</span>
                  <h2 className="k666-flow-title">{block.title}</h2>
                  <p className="k666-flow-body">{block.body}</p>
                  <ListTag className="k666-flow-steps">
                    {block.steps.map((step, i) => (
                      <li key={step}>
                        <span className="k666-flow-step-mark" aria-hidden="true">
                          {block.stepsOrdered ? String(i + 1) : '✓'}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ListTag>
                  <Link href={block.href} className="k666-flow-link">
                    {block.linkLabel}
                  </Link>
                </div>
                <div className="k666-flow-media">
                  <div className="k666-gloss-phone">
                    <span className="k666-gloss-phone-shine" aria-hidden="true" />
                    <span className="k666-gloss-phone-notch" aria-hidden="true" />
                    <Image
                      src={block.img}
                      alt={block.imgAlt}
                      width={720}
                      height={1280}
                      className="k666-gloss-phone-img"
                      sizes="260px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Screenshots gallery */}
      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto px-4 mb-8 md:mb-10">
          <p className="text-center text-accent font-semibold tracking-wide uppercase text-sm mb-3">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            K666 App Screenshots
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Browse every screen — signup, login, deposit, withdraw, and support.
          </p>
        </div>
        <ScreenshotCarousel screenshots={screenshots} />
      </section>

      {/* Features — glass panel matching start / download info */}
      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="k666-features-panel">
            <div className="k666-features-head">
              <span className="k666-features-badge">Why Players Choose Us</span>
              <h2 className="k666-features-title">
                Top Features of <span>K666</span>
              </h2>
              <p className="k666-features-sub">
                Built for Pakistan phones — wallets, rewards, and support in one glass-clear lobby.
              </p>
            </div>
            <ul className="k666-features-grid">
              {features.map((f, i) => (
                <li key={f.title} className="k666-features-card">
                  <span className="k666-features-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Guides — glass panel matching features / start */}
      <section className="py-14 md:py-20 px-4 overflow-visible">
        <div className="container mx-auto max-w-6xl overflow-visible">
          <div className="k666-guides-panel">
            <div className="k666-guides-head">
              <span className="k666-guides-badge">Player Tutorials</span>
              <h2 className="k666-guides-title">
                K666 <span>Guides</span>
              </h2>
              <p className="k666-guides-sub">
                Download, deposit, and withdraw — three clear paths for Pakistan players.
              </p>
            </div>
            <ul className="k666-guides-grid">
              {[
                {
                  href: '/download-k666',
                  title: 'Download APK',
                  text: 'Install the latest K666 build safely on Android.',
                  img: '/k666-home.webp',
                  num: '01',
                },
                {
                  href: '/deposit-money-in-k666',
                  title: 'Deposit Guide',
                  text: 'Add funds with JazzCash or EasyPaisa step by step.',
                  img: '/k666-deposit.webp',
                  num: '02',
                },
                {
                  href: '/withdraw-money-from-k666',
                  title: 'Withdraw Guide',
                  text: 'Cash out winnings to your local wallet.',
                  img: '/k666-withdraw.webp',
                  num: '03',
                },
              ].map((g) => (
                <li key={g.href} className="k666-guides-item">
                  <Link href={g.href} className="k666-guides-linkwrap">
                    <span className="k666-guides-media k666-gloss-phone">
                      <span className="k666-gloss-phone-shine" aria-hidden="true" />
                      <Image
                        src={g.img}
                        alt={g.title}
                        width={720}
                        height={1280}
                        sizes="(max-width: 768px) 160px, 180px"
                        className="k666-guides-img"
                      />
                    </span>
                    <span className="k666-guides-card">
                      <span className="k666-guides-num" aria-hidden="true">
                        {g.num}
                      </span>
                      <h3>{g.title}</h3>
                      <p>{g.text}</p>
                      <span className="k666-guides-cta">Open guide →</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — glossy glass accordion */}
      <section className="py-14 md:py-20 px-4 overflow-visible">
        <div className="container mx-auto max-w-3xl overflow-visible">
          <div className="k666-faq-shell">
            <div className="k666-faq-shell-shine" aria-hidden="true" />
            <div className="k666-faq-head">
              <span className="k666-faq-badge">Help Desk</span>
              <h2 className="k666-faq-title">
                Frequently Asked <span>Questions</span>
              </h2>
              <p className="k666-faq-sub">
                Quick answers on download, wallets, deposits, and play — tap a row to open.
              </p>
            </div>
            <FaqList faqs={faqs} />
            <p className="k666-faq-foot">
              Need help? Visit{' '}
              <Link href="/contact-us">Contact Us</Link> or email {SUPPORT_EMAIL}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Play K666?</h2>
          <p className="text-gray-300 mb-8">
            Get the official APK from k666-app.com.pk — play responsibly, 18+ only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <DownloadButton size="lg" label="DOWNLOAD K666 APK" />
          </div>
        </div>
      </section>
    </>
  );
}
