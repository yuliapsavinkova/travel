import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import Script from 'next/script';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { SITE_CONFIG } from '../constants';
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

const OG_IMAGE_URL =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200&h=630';

export const metadata: Metadata = {
  metadataBase: new URL('https://sitterjourney.com'),
  title: 'Sitter Journey | Professional House Sitter & Traveler',
  description: 'A blog about full-time travel, professional house sitting, and pet care by Yulia.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/icon',
    apple: '/icon',
  },
  keywords: [
    'Traveler',
    'Solo Female Travel',
    'House Sitting',
    'Pet Care',
    'Professional Housesitter',
    'Travel Blog',
    'Sitter Journey',
  ],
  authors: [{ name: 'Sitter Journey' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Sitter Journey',
    description: 'Professional house sitting, pet care, and travel blog.',
    url: 'https://sitterjourney.com',
    siteName: 'Sitter Journey',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitter Journey',
    description: 'Professional house sitting, pet care, and travel blog.',
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Sitter Journey',
    url: 'https://sitterjourney.com',
  };

  const gaId = SITE_CONFIG.googleAnalyticsId;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
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
          <div className="studio-depth" />
          <Navigation />
          <main className="main-viewport">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
