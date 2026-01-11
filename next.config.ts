import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // --- Individual page redirects ---
      {
        source: '/blog/ths-reporting-process',
        destination:
          '/blog/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it',
        permanent: true,
      },
      {
        source: '/resources/toolkit-planet-fitness',
        destination: '/resources/planet-fitness-review',
        permanent: true,
      },
      {
        source: '/blog/is-trusted-housesitters-worth-it',
        destination: '/blog/is-trusted-housesitters-worth-it-for-sitters',
        permanent: true,
      },
      {
        source: '/resources/ths-review',
        destination: '/resources/trusted-housesitters-review',
        permanent: true,
      },
      {
        source: '/resources/planet-fitness',
        destination: '/resources/planet-fitness-review',
        permanent: true,
      },
      {
        source: '/resources/ths',
        destination: '/resources/trusted-housesitters-review',
        permanent: true,
      },
      {
        source: '/blog/ths-rejection-reasons',
        destination: '/blog/why-trusted-housesitters-applications-get-rejected',
        permanent: true,
      },
      {
        source: '/toolkit/trustedhousesitters-referral',
        destination: '/resources/trusted-housesitters-review',
        permanent: true,
      },

      // --- Folder-level redirects ---
      {
        source: '/journal/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/toolkit/:path*',
        destination: '/resources/:path*',
        permanent: true,
      },

      // --- Homepage / root normalization ---
      // redirect www variants to canonical HTTPS non-www for clean Analytics data
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sitterjourney.com',
          },
        ],
        destination: 'https://sitterjourney.com/:path*',
        permanent: true,
      },
      // redirect HTTP to HTTPS specifically for the main domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sitterjourney.com',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://sitterjourney.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
