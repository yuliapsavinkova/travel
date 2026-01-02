import { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ReferralPromo from '../components/ReferralPromo';
import '../styles.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--f-main',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '700', '900'],
  variable: '--f-serif',
  display: 'swap',
});

// A high-resolution, evocative image representing estate stewardship and travel
const OG_IMAGE_URL =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200&h=630';

export const metadata: Metadata = {
  metadataBase: new URL('https://sitterjourney.com'),
  title: 'Sitter Journey | Professional Housesitter & Global Nomad',
  description:
    'Elite housesitting portfolio and personal travel journal documenting slow living and estate stewardship across 35+ countries.',
  keywords: [
    'Professional Housesitter',
    'Solo Female Traveler',
    'Estate Stewardship',
    'Pet Care Expert',
    'Digital Nomad Portfolio',
    'Sitter Journey',
  ],
  authors: [{ name: 'Sitter Journey' }],
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
  openGraph: {
    title: 'Sitter Journey | Professional Housesitter',
    description:
      '16+ verified high-end house sits across the USA. Expert care for your home and pets.',
    url: 'https://sitterjourney.com',
    siteName: 'Sitter Journey',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey Professional Housesitting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitter Journey | Professional Housesitter',
    description: 'Expert estate stewardship and pet care for the modern nomad.',
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sitter Journey Housesitting',
    image: OG_IMAGE_URL,
    description:
      'Solo female traveler and elite housesitter providing expert estate stewardship and pet care.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Verified Homeowners',
      },
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted internal static content
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="app-root">
          <div className="studio-depth" />
          <Navigation />
          <main className="main-viewport main-top-spacing">
            {children}
            <ReferralPromo />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
