import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year — screenshots are static
    // Next 16 rejects any quality not listed here. 55 is for the hero field, which
    // sits behind a 66% black overlay where the lost detail is invisible.
    qualities: [55, 75],
  },
  async redirects() {
    return [
      {
        // Consolidated into the longer post on the same topic — the two were
        // competing for the same query. This URL is already indexed, so it
        // redirects rather than 404s.
        source: "/blog/5-ways-before-after-photos-get-more-customers",
        destination: "/blog/top-5-ways-to-get-customers-from-before-after-images",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // 'unsafe-eval' is only needed by the dev server's hot reload. Shipping it
              // to production widened script execution for no benefit.
              `script-src 'self' 'unsafe-inline'${
                isDev ? " 'unsafe-eval'" : ''
              } https://static.cloudflareinsights.com https://us-assets.i.posthog.com`,
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self'",
              "img-src 'self' data: blob:",
              "connect-src 'self' https://us.i.posthog.com https://us-assets.i.posthog.com",
              // Nothing here embeds, posts, or loads plugins anywhere else.
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
