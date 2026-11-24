import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  skipTrailingSlashRedirect: true,
  trailingSlash: false,
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
  // Temporary legacy redirects -> /:slug for Google re-indexing (safe to remove after ~1 month)
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/sitters-guides',
        permanent: true,
      },
      {
        source: '/sitter-guides',
        destination: '/sitters-guides',
        permanent: true,
      },
      {
        source: '/sitters',
        destination: '/sitters-guides',
        permanent: true,
      },
      {
        source: '/homeowners',
        destination: '/homeowners-guides',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/resources/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
