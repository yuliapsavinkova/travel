import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CommonCard from '../../components/CommonCard';
import { CompassIcon, MapPinIcon } from '../../components/Icons';
import { TRAVEL_GUIDES } from '../../data/travel/travel';
import { SITE_STATS } from '../../site-config';
import { DEFAULT_OG_IMAGE } from '../../utils/content';

export const metadata: Metadata = {
  title: 'Travel Guides & Slow Travel Destinations | Sitter Journey',
  description:
    'Personal travel stories, slow travel notes, and insights from places I have stayed around the world.',
  alternates: {
    canonical: 'https://sitterjourney.com/travel',
  },
  openGraph: {
    title: 'Travel Guides & Slow Travel Destinations',
    description:
      'Personal travel stories, slow travel notes, and insights from places I have stayed around the world.',
    url: 'https://sitterjourney.com/travel',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey Travel Guides & Slow Travel Destinations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Guides & Slow Travel Destinations',
    description:
      'Personal travel stories, slow travel notes, and insights from places I have stayed around the world.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function TravelPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://sitterjourney.com/travel#collection',
        url: 'https://sitterjourney.com/travel',
        name: 'Travel Guides & Destinations | Sitter Journey',
        description: 'Personal travel stories and insights from places I have stayed.',
        hasPart: TRAVEL_GUIDES.map((guide) => ({
          '@type': 'Article',
          headline: guide.title,
          url: `https://sitterjourney.com/travel/${guide.slug}`,
          description: guide.excerpt,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sitterjourney.com/travel#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://sitterjourney.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Travel Guides',
            item: 'https://sitterjourney.com/travel',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="hero-two-col section-margin">
        <div className="container">
          <div className="hero-two-col-grid">
            <div className="hero-col-text">
              <h1 className="display-title">Travel Guides.</h1>
              <p className="hero-paragraph">
                Guides and stories from the {SITE_STATS.countriesCount} countries I've visited.
              </p>
              <div className="hero-button-group">
                <Link href="#guides" className="btn-gold">
                  View Guides
                </Link>
                <Link href="/resources" className="secondary-btn">
                  Resources
                </Link>
              </div>
            </div>

            <div className="hero-col-media">
              <div className="hero-image-card">
                <Image
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200"
                  alt="Travel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container section-margin">
        <header className="text-center section-margin" id="guides">
          <h2 className="display-title display-title-md">
            My <span className="serif-italic">Guides.</span>
          </h2>
        </header>

        <div className="grid-standard">
          {TRAVEL_GUIDES.map((guide) => (
            <CommonCard
              key={guide.id}
              image={guide.imageUrl}
              badge="Guide"
              metadata={[
                { icon: <MapPinIcon size={12} />, text: guide.location },
                { icon: <CompassIcon size={12} />, text: 'Verified' },
              ]}
              title={guide.title}
              description={guide.excerpt}
              slug={`/travel/${guide.slug}`}
              actionLabel="Read Guide"
            />
          ))}
        </div>
      </div>
    </>
  );
}
