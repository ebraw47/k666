import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

/** Closest match to in-game K666 wordmark (bold italic geometric) */
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-logo",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0d3a14",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://k666-app.com.pk'),
  title: {
    default: "K666 Pakistan Free Download Official APK 2026",
    template: "%s | K666"
  },
  description: "K666 2026 - Download K666 APK for Android. Play & earn real cash with JazzCash & EasyPaisa. Official Pakistan site k666-app.com.pk.",
  keywords: [
    "K666",
    "K666 APK",
    "K666 download",
    "K666 Pakistan",
    "K666 game",
    "K666 app",
    "K666 earning game",
    "K666 JazzCash",
    "K666 2026",
    "k666-app.com.pk"
  ],
  authors: [{ name: "K666 Team" }],
  creator: "K666",
  publisher: "K666",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/k666-logo.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    shortcut: '/favicon-32.png'
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://k666-app.com.pk",
  },
  openGraph: {
    title: "K666 Pakistan Free Download Official APK 2026",
    description: "K666 2026 - Download K666 APK. Play & earn real cash with JazzCash & EasyPaisa withdrawals.",
    url: "https://k666-app.com.pk",
    siteName: "K666",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://k666-app.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "K666 - Real-Money Gaming App",
      },
      {
        url: "https://k666-app.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "K666 - Real-Money Gaming App",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K666 Pakistan Free Download Official APK 2026",
    description: "K666 2026 - Download K666 APK. Play & earn real cash with JazzCash & EasyPaisa.",
    creator: "@k666app",
    images: [
      {
        url: "https://k666-app.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "K666 - Real-Money Gaming App",
      }
    ],
  },
  applicationName: "K666",
  category: "Gaming",
  classification: "Real-Money Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${chakraPetch.variable}`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/k666-logo.webp" type="image/webp" sizes="512x512" />
        <link rel="shortcut icon" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col game-theme`}
        suppressHydrationWarning
      >
        <div className="game-bg fixed inset-0 z-0" aria-hidden="true">
          <span className="game-bg-mesh" />
          <span className="game-bg-ribbon game-bg-ribbon-a" />
          <span className="game-bg-ribbon game-bg-ribbon-b" />
          <span className="game-bg-ribbon game-bg-ribbon-c" />
          <span className="game-bg-glass game-bg-glass-a" />
          <span className="game-bg-glass game-bg-glass-b" />
          <span className="game-bg-glass game-bg-glass-c" />
          <span className="game-bg-orb game-bg-orb-a" />
          <span className="game-bg-orb game-bg-orb-b" />
          <span className="game-bg-orb game-bg-orb-c" />
          <span className="game-bg-orb game-bg-orb-d" />
          <span className="game-bg-vignette" />
        </div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://k666-app.com.pk/#organization",
              "name": "K666",
              "url": "https://k666-app.com.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://k666-app.com.pk/k666-logo.webp",
                "width": 512,
                "height": 512
              },
              "description": "K666 is Pakistan's real-money gaming platform. Download APK, JazzCash and EasyPaisa deposits and withdrawals.",
              "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@k666-app.com.pk",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
