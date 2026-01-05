import React from 'react';
import Link from 'next/link';
import { TRAVEL_GUIDES, SITE_STATS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { MapPinIcon, ChevronDownIcon, CompassIcon } from '../../components/Icons';

export default function TravelPage() {
  return (
    <>
      <section className="hero-stack section-margin">
        <div className="media-viewport">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2400"
            alt="Travel Chronicles"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="hero-content-overlay">
          <div className="sub-header hero-sub-header">Travel Chronicles</div>
          <h1 className="display-title">
            Global <span className="shimmer-text">Footprints.</span>
          </h1>
          <p className="hero-paragraph">
            Exploring the intersection of architectural heritage and local rhythms. A curated
            collection of guides from {SITE_STATS.countriesCount} countries.
          </p>
          <div className="hero-button-group">
            <Link href="#guides" className="btn-gold">
              Explore Guides
            </Link>
            <Link href="/journal#archive" className="secondary-btn">
              The Journal
            </Link>
          </div>
        </div>

        <Link href="#guides" className="scroll-trigger" aria-label="Scroll to guides">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <header className="text-center section-margin" id="guides">
          <div className="sub-header">The Archive</div>
          <h2 className="display-title display-title-md">
            Curated <span className="serif-italic shimmer-text">Guides.</span>
          </h2>
        </header>

        <div className="grid-standard">
          {TRAVEL_GUIDES.map((guide) => (
            <CommonCard
              key={guide.id}
              image={guide.imageUrl}
              badge="Destination"
              metadata={[
                { icon: <MapPinIcon size={12} />, text: guide.location },
                { icon: <CompassIcon size={12} />, text: 'Verified Experience' },
              ]}
              title={guide.title}
              description={guide.excerpt}
              slug={`/travel/${guide.slug}`}
              actionLabel="View Guide"
            />
          ))}
        </div>
      </div>
    </>
  );
}
