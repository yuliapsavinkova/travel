import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TRAVEL_GUIDES, SITE_STATS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { MapPinIcon, ChevronDownIcon, CompassIcon } from '../../components/Icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Guides & Nomad Destinations | Sitter Journey',
  description:
    'Explore in-depth travel guides, house sitting destinations, itineraries, and stories from across the United States.',
  alternates: {
    canonical: 'https://sitterjourney.com/travel',
  },
  openGraph: {
    title: 'Travel Guides & Nomad Destinations',
    description:
      'Explore in-depth travel guides, house sitting destinations, itineraries, and stories from across the United States.',
    url: 'https://sitterjourney.com/travel',
    type: 'website',
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
        description: 'Explore in-depth travel guides and stories across the United States.',
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
      <section className="hero-stack section-margin">
        <div className="hero-media-container media-viewport">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2400"
            alt="Travel"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay-hero" />
        </div>

        <div className="hero-content-overlay content-layer">
          <div className="sub-header hero-sub-header">Destinations</div>
          <h1 className="display-title">
            Travel <span className="shimmer-text">Guides.</span>
          </h1>
          <p className="hero-paragraph">
            Guides and stories from the {SITE_STATS.countriesCount} countries I've visited.
          </p>
          <div className="hero-button-group">
            <Link href="#guides" className="btn-gold">
              View Guides
            </Link>
            <Link href="/resources#archive" className="secondary-btn">
              Resources
            </Link>
          </div>
        </div>

        <Link href="#guides" className="scroll-trigger content-layer" aria-label="Scroll to guides">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <header className="text-center section-margin" id="guides">
          <div className="sub-header">Where to go</div>
          <h2 className="display-title display-title-md">
            My <span className="serif-italic shimmer-text">Guides.</span>
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
