import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Crucial for preview environments to prevent hangs
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
    ];
  },
};

export default nextConfig;
