import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
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
  title: 'Sitter Journey | Full-Time Traveler & Professional Steward',
  description:
    'Chronicling the solo female travel journey of Sitter Journey. Exploring global destinations through slow living and intentional stewardship.',
  keywords: [
    'Full-Time Traveler',
    'Solo Female Traveler',
    'Stewardship Portfolio',
    'Slow Travel Journey',
    'Pet Care Expert',
    'Digital Nomad Portfolio',
    'Professional Housesitter',
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
    title: 'Sitter Journey | Full-Time Traveler',
    description: 'Expert stewardship for the intentional traveler.',
    url: 'https://sitterjourney.com',
    siteName: 'Sitter Journey',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey Full-Time Traveler Professional Housesitting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitter Journey | Full-Time Traveler | Professional Housesitting',
    description: 'A solo female journey lived between destinations and stewardship.',
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sitter Journey Travel',
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
          <main className="main-viewport">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
