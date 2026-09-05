import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import Script from 'next/script';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import AnalyticsTracker from '../components/AnalyticsTracker';
import { SITE_CONFIG } from '../constants';
import '../styles.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

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

const OG_IMAGE_URL =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200&h=630';

export const metadata: Metadata = {
  metadataBase: new URL('https://sitterjourney.com'),
  title: {
    default: 'Sitter Journey | Professional House Sitting & Full-Time Travel',
    template: '%s | Sitter Journey',
  },
  description:
    'Practical guides, real budget math, and expert tips for full-time travel, professional house sitting, and pet care by Yulia.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  keywords: [
    'House Sitting',
    'Professional Housesitter',
    'TrustedHousesitters',
    'TrustedHousesitters Review',
    'Solo Female Travel',
    'Nomad Travel',
    'Pet Sitting',
    'Free Travel Accommodation',
    'Sitter Journey',
    'Full Time Travel',
  ],
  authors: [{ name: 'Yulia', url: 'https://sitterjourney.com/about' }],
  creator: 'Yulia',
  publisher: 'Sitter Journey',
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
    title: 'Sitter Journey | Professional House Sitting & Full-Time Travel',
    description:
      'Practical guides, real budget math, and expert tips for full-time travel, professional house sitting, and pet care by Yulia.',
    url: 'https://sitterjourney.com',
    siteName: 'Sitter Journey',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey - Full-Time Travel & House Sitting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitter Journey | Professional House Sitting & Full-Time Travel',
    description:
      'Practical guides, real budget math, and expert tips for full-time travel, professional house sitting, and pet care by Yulia.',
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://sitterjourney.com/#website',
        url: 'https://sitterjourney.com',
        name: 'Sitter Journey',
        description: 'Professional house sitting, pet care, and full-time travel blog by Yulia.',
        publisher: {
          '@id': 'https://sitterjourney.com/#author',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://sitterjourney.com/#author',
        name: 'Yulia',
        url: 'https://sitterjourney.com/about',
        jobTitle: 'Professional House Sitter & Travel Writer',
        description:
          'Solo traveler and professional house sitter sharing real-world advice, budgeting, and strategies for long-term travel.',
        sameAs: [
          SITE_CONFIG.socials.instagram,
          SITE_CONFIG.socials.facebook,
          SITE_CONFIG.socials.tiktok,
          SITE_CONFIG.socials.pinterest,
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://sitterjourney.com/#organization',
        name: 'Sitter Journey',
        url: 'https://sitterjourney.com',
        logo: 'https://sitterjourney.com/icon.svg',
        founder: {
          '@id': 'https://sitterjourney.com/#author',
        },
        sameAs: [
          SITE_CONFIG.socials.instagram,
          SITE_CONFIG.socials.facebook,
          SITE_CONFIG.socials.tiktok,
          SITE_CONFIG.socials.pinterest,
        ],
      },
    ],
  };

  const gaId = SITE_CONFIG.googleAnalyticsId;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <div className="app-root">
          <AnalyticsTracker />
          <div className="studio-depth" />
          <Navigation />
          <main className="main-viewport">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
