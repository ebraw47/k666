import { NextResponse } from 'next/server';

const baseUrl = 'https://k666-app.com.pk';

const blogSlugs = [
  'k666-app-review-2026',
  'how-to-download-install-k666-apk-pakistan',
  'create-k666-account-and-login',
  'k666-deposit-jazzcash-easypaisa-guide',
  'k666-withdraw-money-guide',
  'is-k666-safe-legal-pakistan',
  'how-to-use-k666-app-pakistan-guide',
  'k666-login-otp-not-working',
  'k666-jazzcash-deposit-not-showing',
  'k666-vip-rebate-invite-guide',
];

export async function GET() {
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{ loc: string; title: string; caption: string }>;
  };

  const now = new Date().toISOString();

  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: now,
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/k666-logo.webp',
          title: 'K666 Hero Image',
          caption: 'K666 gaming platform showcase',
        },
      ],
    },
    {
      url: '/download-k666',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/k666-logo.webp',
          title: 'Download K666',
          caption: 'Download K666 APK for Android',
        },
      ],
    },
    { url: '/deposit-money-in-k666', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    { url: '/withdraw-money-from-k666', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    {
      url: '/k666-for-pc',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/k666-logo.webp',
          title: 'K666 for PC',
          caption: 'Play K666 on PC using Android Emulator',
        },
      ],
    },
    {
      url: '/about-us',
      lastMod: now,
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/k666-logo.webp',
          title: 'About K666',
          caption: 'Learn about K666 gaming platform',
        },
      ],
    },
    {
      url: '/blog',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/k666-logo.webp',
          title: 'K666 Blog',
          caption: 'Guides and tutorials for K666',
        },
      ],
    },
    { url: '/contact-us', lastMod: now, changeFreq: 'monthly', priority: 0.7 },
    { url: '/privacy', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
    { url: '/disclaimer', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
  ];

  const blogPosts: PageType[] = blogSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    lastMod: now,
    changeFreq: 'monthly',
    priority: 0.8,
  }));

  const allPages = [...mainPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${
      page.images
        ?.map(
          (img) => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
        )
        .join('') || ''
    }
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
