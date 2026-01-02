import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CommonCard from '../../components/CommonCard';
import { ChevronDownIcon, MapPinIcon } from '../../components/Icons';
import { REVIEWS } from '../../constants';

export default function StaysPage() {
  return (
    <>
      <section className="hero-stack section-margin">
        <div className="media-viewport">
          <Image
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=2400"
            alt="Estate Stewardship Portfolio"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="hero-content-overlay">
          <div className="sub-header hero-sub-header">Verified Stewardship</div>
          <h1 className="display-title">
            Attentive Care for your <span className="champagne-text">Home and Pets.</span>
          </h1>
          <p className="hero-paragraph">
            Providing professional stewardship and consistent companionship for properties and their
            furry residents while I travel full-time.
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

      <div className="container">
        <header className="text-center section-margin" id="portfolio">
          <div className="sub-header">Professional History</div>
          <h2 className="display-title display-title-md">
            My <span className="serif-italic champagne-text">Stays.</span>
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
    </>
  );
}
