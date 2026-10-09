import type { NextConfig } from "next";

/**
 * K666 - Next.js Configuration
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  turbopack: {},
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "k666-app.com.pk",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      // Legacy 777DX → K666
      { source: "/download-777dx", destination: "/download-k666", permanent: true },
      { source: "/deposit-money-in-777dx", destination: "/deposit-money-in-k666", permanent: true },
      { source: "/withdraw-money-from-777dx", destination: "/withdraw-money-from-k666", permanent: true },
      { source: "/777dx-for-pc", destination: "/k666-for-pc", permanent: true },
      { source: "/777dx-logo.webp", destination: "/k666-logo.webp", permanent: true },
      { source: "/blog/777dx-app-review-2026", destination: "/blog/k666-app-review-2026", permanent: true },
      { source: "/blog/how-to-download-install-777dx-apk-pakistan", destination: "/blog/how-to-download-install-k666-apk-pakistan", permanent: true },
      { source: "/blog/create-777dx-account-and-login", destination: "/blog/create-k666-account-and-login", permanent: true },
      { source: "/blog/777dx-deposit-jazzcash-easypaisa-guide", destination: "/blog/k666-deposit-jazzcash-easypaisa-guide", permanent: true },
      { source: "/blog/777dx-withdraw-money-guide", destination: "/blog/k666-withdraw-money-guide", permanent: true },
      { source: "/blog/777dx-vip-rebate-invite-guide", destination: "/blog", permanent: true },
      { source: "/blog/is-777dx-safe-legal-pakistan", destination: "/blog/is-k666-safe-legal-pakistan", permanent: true },
      { source: "/blog/how-to-use-777dx-app-pakistan-guide", destination: "/blog/how-to-use-k666-app-pakistan-guide", permanent: true },
      // Legacy SK777 → K666
      { source: "/download-sk777", destination: "/download-k666", permanent: true },
      { source: "/deposit-money-in-sk777", destination: "/deposit-money-in-k666", permanent: true },
      { source: "/withdraw-money-from-sk777", destination: "/withdraw-money-from-k666", permanent: true },
      { source: "/sk777-for-pc", destination: "/k666-for-pc", permanent: true },
      { source: "/SK777-Game-Icon.png", destination: "/k666-logo.webp", permanent: true },
      { source: "/SK777-Game-Icon.webp", destination: "/k666-logo.webp", permanent: true },
      { source: "/blog/sk777-app-review-2026", destination: "/blog/k666-app-review-2026", permanent: true },
      { source: "/blog/how-to-download-install-sk777-apk-pakistan", destination: "/blog/how-to-download-install-k666-apk-pakistan", permanent: true },
      { source: "/blog/create-sk777-account-and-login", destination: "/blog/create-k666-account-and-login", permanent: true },
      { source: "/blog/sk777-deposit-jazzcash-easypaisa-guide", destination: "/blog/k666-deposit-jazzcash-easypaisa-guide", permanent: true },
      { source: "/blog/sk777-withdraw-money-guide", destination: "/blog/k666-withdraw-money-guide", permanent: true },
      { source: "/blog/is-sk777-safe-legal-pakistan", destination: "/blog/is-k666-safe-legal-pakistan", permanent: true },
      { source: "/blog/how-to-use-sk777-app-pakistan-guide", destination: "/blog/how-to-use-k666-app-pakistan-guide", permanent: true },
      // Legacy JZ666 → K666
      { source: "/download-jz666", destination: "/download-k666", permanent: true },
      { source: "/deposit-money-in-jz666", destination: "/deposit-money-in-k666", permanent: true },
      { source: "/withdraw-money-from-jz666", destination: "/withdraw-money-from-k666", permanent: true },
      { source: "/jz666-for-pc", destination: "/k666-for-pc", permanent: true },
      { source: "/JZ666-Game-Icon.png", destination: "/k666-logo.webp", permanent: true },
      { source: "/JZ666-Game-Icon.webp", destination: "/k666-logo.webp", permanent: true },
      { source: "/blog/jz666-app-review-2026", destination: "/blog/k666-app-review-2026", permanent: true },
      { source: "/blog/how-to-download-install-jz666-apk-pakistan", destination: "/blog/how-to-download-install-k666-apk-pakistan", permanent: true },
      { source: "/blog/create-jz666-account-and-login", destination: "/blog/create-k666-account-and-login", permanent: true },
      { source: "/blog/jz666-deposit-jazzcash-easypaisa-guide", destination: "/blog/k666-deposit-jazzcash-easypaisa-guide", permanent: true },
      { source: "/blog/jz666-withdraw-money-guide", destination: "/blog/k666-withdraw-money-guide", permanent: true },
      { source: "/blog/jz666-vip-rebate-bonus-guide", destination: "/blog", permanent: true },
      { source: "/blog/is-jz666-safe-legal-pakistan", destination: "/blog/is-k666-safe-legal-pakistan", permanent: true },
      { source: "/blog/how-to-use-jz666-app-pakistan-guide", destination: "/blog/how-to-use-k666-app-pakistan-guide", permanent: true },
      { source: "/blog/k666-vip-rebate-invite-guide", destination: "/blog", permanent: true },
      // Older brand routes → K666
      { source: "/download-pk365", destination: "/download-k666", permanent: true },
      { source: "/deposit-money-in-pk365", destination: "/deposit-money-in-k666", permanent: true },
      { source: "/withdraw-money-from-pk365", destination: "/withdraw-money-from-k666", permanent: true },
      { source: "/pk365-for-pc", destination: "/k666-for-pc", permanent: true },
      { source: "/download-bn55", destination: "/download-k666", permanent: true },
      { source: "/deposit-money-in-bn55", destination: "/deposit-money-in-k666", permanent: true },
      { source: "/withdraw-money-from-bn55", destination: "/withdraw-money-from-k666", permanent: true },
      { source: "/bn55-for-pc", destination: "/k666-for-pc", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "/.well-known/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
      {
        source: "/favicon-:size(\\d+).png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
      {
        source: "/favicon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
      {
        source: "/apple-touch-icon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
      {
        source: "/icon-:size(\\d+).png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      config.target = ["web", "es2022"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      };
    }
    return config;
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: false,
    optimizePackageImports: ["react-icons"],
  },

  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
};

export default nextConfig;
