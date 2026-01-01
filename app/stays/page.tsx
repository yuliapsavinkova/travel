import React from 'react';
import Link from 'next/link';
import { REVIEWS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { MapPinIcon, ChevronDownIcon } from '../../components/Icons';

export default function StaysPage() {
  return (
    <div className="container">
      <section className="hero-stack section-margin">
        <div className="media-viewport">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=2400"
            alt="Estate Stewardship"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="hero-content-overlay">
          <div className="sub-header hero-sub-header">Verified Stewardship</div>
          <h1 className="display-title">
            Stewardship for <br />
            Homes and <span className="champagne-text">Furry Friends.</span>
          </h1>
          <p className="hero-paragraph">
            Providing high-end care and consistent companionship for elite properties and their
            beloved animal residents.
          </p>
          <div className="hero-button-group">
            <Link href="#portfolio" className="btn-gold">
              The Portfolio
            </Link>
            <Link href="/journal" className="secondary-btn">
              The Journal
            </Link>
          </div>
        </div>

        <Link href="#portfolio" className="scroll-trigger" aria-label="Scroll to portfolio">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <header className="text-center section-margin" id="portfolio">
        <div className="sub-header">The Portfolio</div>
        <h2 className="display-title display-title-md">
          Verified <span className="serif-italic champagne-text">History.</span>
        </h2>
      </header>

      <div className="grid-standard">
        {REVIEWS.map((sit) => (
          <CommonCard
            key={sit.id}
            image={sit.imageUrl}
            badge="Verified Stay"
            metadata={[{ icon: <MapPinIcon size={12} />, text: sit.location }]}
            title={sit.location}
            description={sit.text}
            slug={`/stays/${sit.slug}`}
            actionLabel="View Details"
          />
        ))}
      </div>
    </div>
  );
}
