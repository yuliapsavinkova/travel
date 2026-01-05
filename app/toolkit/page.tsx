import React from 'react';
import Link from 'next/link';
import { ALL_REFERRALS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { ChevronDownIcon } from '../../components/Icons';

export default function ToolkitPage() {
  return (
    <>
      <section className="hero-stack section-margin">
        <div className="hero-media-container media-viewport">
          <img
            src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=2400"
            alt="Toolkit"
          />
          <div className="overlay-hero" />
        </div>

        <div className="hero-content-overlay content-layer">
          <div className="sub-header hero-sub-header">Resources</div>
          <h1 className="display-title">
            My <span className="shimmer-text">Toolkit.</span>
          </h1>
          <p className="hero-paragraph">
            The tools and services I use every day to live and work on the road.
          </p>
          <div className="hero-button-group">
            <Link href="#framework" className="btn-gold">
              View Tools
            </Link>
            <Link href="/stays#portfolio" className="secondary-btn">
              My Stays
            </Link>
          </div>
        </div>

        <Link
          href="#framework"
          className="scroll-trigger content-layer"
          aria-label="Scroll to toolkit"
        >
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <header className="text-center section-margin" id="framework">
          <div className="sub-header">Tools I Use</div>
          <h2 className="display-title display-title-md">
            My <span className="serif-italic shimmer-text">Toolkit.</span>
          </h2>
        </header>

        <div className="grid-standard">
          {ALL_REFERRALS.map((item) => (
            <CommonCard
              key={item.id}
              title={item.name}
              image={item.imageUrl}
              description={item.description}
              badge={item.discountText ? 'Promo' : 'Tool'}
              slug={`/toolkit/${item.slug}`}
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
