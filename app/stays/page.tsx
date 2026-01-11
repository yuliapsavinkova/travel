import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { Metadata } from 'next';
import CommonCard from '../../components/CommonCard';
import { ChevronDownIcon, MapPinIcon } from '../../components/Icons';
import { REVIEWS } from '../../constants';

export const metadata: Metadata = {
  title: 'My House Sitting Stays | Sitter Journey',
  description: 'Explore the homes and pets I have cared for across the United States.',
  alternates: {
    canonical: 'https://sitterjourney.com/stays',
  },
};

export default function StaysPage() {
  return (
    <>
      <section className="hero-stack section-margin">
        <div className="hero-media-container media-viewport">
          <Image
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=2400"
            alt="My Stays"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay-hero" />
        </div>

        <div className="hero-content-overlay content-layer">
          <div className="sub-header hero-sub-header">House Sitting</div>
          <h1 className="display-title">
            Caring for <span className="shimmer-text">Homes & Pets.</span>
          </h1>
          <p className="hero-paragraph">
            A look at the places I've stayed and the pets I've cared for while traveling.
          </p>
          <div className="hero-button-group">
            <Link href="#portfolio" className="btn-gold">
              My Stays
            </Link>
            <Link href="/blog#archive" className="secondary-btn">
              The Blog
            </Link>
          </div>
        </div>

        <Link
          href="#portfolio"
          className="scroll-trigger content-layer"
          aria-label="Scroll to portfolio"
        >
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <header className="text-center section-margin" id="portfolio">
          <div className="sub-header">Where I've Been</div>
          <h2 className="display-title display-title-md">
            My <span className="serif-italic shimmer-text">Stays.</span>
          </h2>
        </header>

        <div className="grid-standard">
          {REVIEWS.map((sit) => (
            <CommonCard
              key={sit.id}
              image={sit.imageUrl}
              badge="Stay"
              metadata={[{ icon: <MapPinIcon size={12} />, text: sit.location }]}
              title={sit.location}
              description={sit.text}
              slug={`/stays/${sit.slug}`}
              actionLabel="View Details"
            />
          ))}
        </div>
      </div>
    </>
  );
}
