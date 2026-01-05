import React from 'react';
import Link from 'next/link';
import { ALL_REFERRALS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { ChevronDownIcon } from '../../components/Icons';

export default function ToolkitPage() {
  return (
    <>
      <section className="hero-stack section-margin">
        <div className="media-viewport">
          <img
            src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=2400"
            alt="Traveler Framework"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="hero-content-overlay">
          <div className="sub-header hero-sub-header">Traveler Framework</div>
          <h1 className="display-title">
            The Traveler's <span className="shimmer-text">Toolkit.</span>
          </h1>
          <p className="hero-paragraph">
            The reliable tools and resources that make a life of full-time travel possible.
          </p>
          <div className="hero-button-group">
            <Link href="#framework" className="btn-gold">
              Explore Tools
            </Link>
            <Link href="/stays#portfolio" className="secondary-btn">
              My Stays
            </Link>
          </div>
        </div>

        <Link href="#framework" className="scroll-trigger" aria-label="Scroll to framework">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <header className="text-center section-margin" id="framework">
          <div className="sub-header">The Journey Kit</div>
          <h2 className="display-title display-title-md">
            Reliable <span className="serif-italic shimmer-text">Essentials.</span>
          </h2>
        </header>

        <div className="grid-standard">
          {ALL_REFERRALS.map((item) => (
            <CommonCard
              key={item.id}
              title={item.name}
              image={item.imageUrl}
              description={item.description}
              badge={item.discountText ? 'Recommended' : 'Essential'}
              slug={`/toolkit/${item.slug}`}
              actionLabel="View Details"
              ctaLink={item.link}
              ctaLabel={item.discountText ? `Get: ${item.discountText}` : 'Visit Site'}
            />
          ))}
        </div>
      </div>
    </>
  );
}
