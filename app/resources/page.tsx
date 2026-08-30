import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ALL_RESOURCES } from '../../constants';
import CommonCard from '../../components/CommonCard';
import SocialMediaIcons from '../../components/SocialMediaIcons';
import { ChevronDownIcon } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Travel Resources & Discounts: My Trusted Toolkit | Sitter Journey',
  description:
    'A curated list of the tools, memberships, and services I use for full-time travel and house sitting. Includes verified discounts.',
  alternates: {
    canonical: 'https://sitterjourney.com/resources',
  },
  openGraph: {
    title: 'Travel Resources & Discounts: My Trusted Toolkit',
    description:
      'A curated list of the tools, memberships, and services I use for full-time travel and house sitting. Includes verified discounts.',
    url: 'https://sitterjourney.com/resources',
    type: 'website',
  },
};

export default function ResourcesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://sitterjourney.com/resources#collection',
        url: 'https://sitterjourney.com/resources',
        name: 'Travel Resources & Discounts | Sitter Journey',
        description: 'A curated list of tools, memberships, and services for nomadic travel and house sitting.',
        hasPart: ALL_RESOURCES.map((item) => ({
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Product',
            name: item.name,
            description: item.description,
          },
          url: `https://sitterjourney.com/resources/${item.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sitterjourney.com/resources#breadcrumb',
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
            name: 'Travel Resources',
            item: 'https://sitterjourney.com/resources',
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
            src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=2400"
            alt="Resources"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay-hero" />
        </div>

        <div className="hero-content-overlay content-layer">
          <div className="hero-socials-wrapper">
            <SocialMediaIcons className="hero-socials" iconSize={18} />
          </div>
          <div className="sub-header hero-sub-header">Tools & Services</div>
          <h1 className="display-title">
            Travel <span className="shimmer-text">Resources.</span>
          </h1>
          <p className="hero-paragraph">
            The tools and services I use every day to live and work on the road.
          </p>
          <div className="hero-button-group">
            <Link href="#archive" className="btn-gold">
              View Resources
            </Link>
            <Link href="/blog#archive" className="secondary-btn">
              Read Blog
            </Link>
          </div>
        </div>

        <Link
          href="#archive"
          className="scroll-trigger content-layer"
          aria-label="Scroll to resources"
        >
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <header className="text-center section-margin" id="archive">
          <div className="sub-header">My Resources</div>
          <h2 className="display-title display-title-md">
            The <span className="serif-italic shimmer-text">Resources.</span>
          </h2>
        </header>

        <div className="grid-standard">
          {ALL_RESOURCES.map((item) => (
            <CommonCard
              key={item.id}
              title={item.name}
              image={item.imageUrl}
              description={item.description}
              badge={item.discountText ? 'Promo' : 'Tool'}
              slug={`/resources/${item.slug}`}
              actionLabel="Details"
              ctaLink={item.link}
              ctaLabel={item.discountText ? `Discount: ${item.discountText}` : 'Visit'}
            />
          ))}
        </div>
      </div>
    </>
  );
}
