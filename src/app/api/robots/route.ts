import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://k666-app.com.pk';

  const robotsTxt = `# robots.txt for k666-app.com.pk

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Allow: /download-k666
Allow: /deposit-money-in-k666
Allow: /withdraw-money-from-k666
Allow: /k666-for-pc
Allow: /about-us
Allow: /blog
Allow: /contact-us
Allow: /privacy
Allow: /disclaimer

Allow: /blog/k666-app-review-2026
Allow: /blog/how-to-download-install-k666-apk-pakistan
Allow: /blog/create-k666-account-and-login
Allow: /blog/k666-deposit-jazzcash-easypaisa-guide
Allow: /blog/k666-withdraw-money-guide
Allow: /blog/is-k666-safe-legal-pakistan
Allow: /blog/how-to-use-k666-app-pakistan-guide
Allow: /blog/k666-login-otp-not-working
Allow: /blog/k666-jazzcash-deposit-not-showing
Allow: /blog/k666-vip-rebate-invite-guide

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${baseUrl}/sitemap-index.xml
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/image-sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
