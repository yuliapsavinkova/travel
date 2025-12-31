
import React from 'react';
import { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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

export const metadata: Metadata = {
  title: 'Girl Travels | Professional Housesitter & Global Nomad',
  description: 'Elite housesitting portfolio and personal travel journal documenting slow living and estate stewardship across 35+ countries.',
  keywords: ['Professional Housesitter', 'Solo Female Traveler', 'Estate Stewardship', 'Pet Care Expert', 'Digital Nomad Portfolio'],
  authors: [{ name: 'Girl Travels' }],
  openGraph: {
    title: 'Girl Travels | Professional Housesitter',
    description: '16+ verified high-end house sits across the USA. Expert care for your home and pets.',
    url: 'https://girltravels.com',
    siteName: 'Girl Travels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girl Travels | Professional Housesitter',
    description: 'Expert estate stewardship and pet care for the modern nomad.',
    images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Girl Travels Housesitting",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    "description": "Solo female traveler and elite housesitter providing expert estate stewardship and pet care.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Homeowners"
      }
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
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
