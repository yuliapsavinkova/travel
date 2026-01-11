import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ALL_RESOURCES } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { ChevronDownIcon } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Travel Resources & Discounts: My Trusted Toolkit | Sitter Journey',
  description:
    'A curated list of the tools, memberships, and services I use for full-time travel and house sitting. Includes verified discounts.',
  alternates: {
    canonical: 'https://sitterjourney.com/resources',
  },
};

export default function ResourcesPage() {
  return (
    <>
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
            <Link href="/stays#portfolio" className="secondary-btn">
              My Stays
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
              ctaLabel={item.discountText ? `Get: ${item.discountText}` : 'Visit'}
            />
          ))}
        </div>
      </div>
    </>
  );
}
