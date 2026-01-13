import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ContactTrigger } from '../components/ClientTriggers';
import { ChevronDownIcon, GlobeIcon, CompassIcon, MapPinIcon, StarIcon } from '../components/Icons';
import { SITE_STATS } from '../constants';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://sitterjourney.com/',
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero-stack section-margin">
        <div className="hero-media-container media-viewport">
          <Image
            src="/home-hero.jpg"
            alt="Yulia on the road"
            fill
            priority
            unoptimized
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay-hero" />
        </div>

        <div className="hero-content-overlay content-layer">
          <h1 className="display-title">
            <span
              className="sub-header"
              style={{
                display: 'block',
                marginBottom: 'var(--s-2)',
                color: 'var(--c-white)',
                opacity: 0.8,
              }}
            >
              Life on the road
            </span>
            Chronicles of a <span className="shimmer-text">Traveler.</span>
          </h1>
          <p className="hero-paragraph">
            I travel full time. I share my personal journey as a house sitter and solo traveler.
          </p>
          <div className="hero-button-group">
            <Link href="/blog#archive" className="btn-gold">
              Sitter Blog
            </Link>
            <Link href="/resources#archive" className="secondary-btn">
              Resources
            </Link>
          </div>
        </div>

        <Link href="#perspective" className="scroll-trigger content-layer" aria-label="Scroll down">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <section className="section-margin text-center" id="perspective">
          <div className="sub-header">My Journey</div>
          <h2 className="display-title display-title-md">
            Travel <span className="serif-italic shimmer-text">& Life.</span>
          </h2>
          <p className="hero-paragraph" style={{ marginBottom: 'var(--s-6)' }}>
            I have visited {SITE_STATS.countriesCount} countries and {SITE_STATS.statesCount} states
            while house sitting professionally.
          </p>

          <div className="grid-standard">
            {[
              {
                label: 'Countries',
                value: SITE_STATS.countriesCount,
                icon: <GlobeIcon size={28} />,
                img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
              },
              {
                label: 'States',
                value: SITE_STATS.statesCount,
                icon: <MapPinIcon size={28} />,
                img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
              },
              {
                label: 'Experience',
                value: '100%',
                icon: <CompassIcon size={28} />,
                img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
              },
            ].map((stat, i) => (
              <div key={i} className="card-wrapper">
                <div className="glass-card stat-card">
                  <div className="card-image-viewport media-viewport">
                    <Image
                      src={stat.img}
                      alt={stat.label}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="overlay-layer" />
                    <div
                      className="stat-icon-overlay content-layer"
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        color: 'var(--c-gold)',
                      }}
                    >
                      {stat.icon}
                    </div>
                  </div>
                  <div className="content-layer">
                    <div
                      className="display-title-md"
                      style={{ color: 'var(--c-gold)', marginBottom: 'var(--s-1)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="sub-header">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-margin text-center">
          <div
            className="glass-card"
            style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--s-7)' }}
          >
            <div className="sub-header">Growth Roadmap</div>
            <h2 className="display-title display-title-md">
              The Road <span className="serif-italic shimmer-text">Ahead.</span>
            </h2>
            <p
              className="hero-paragraph"
              style={{ fontSize: '1.1rem', marginBottom: 'var(--s-5)' }}
            >
              I am just starting this chronicle. Please check back often as the content grows. I
              will be sharing packing hacks, budget breakdowns, and the technical secrets of
              professional house sitting.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--s-4)',
                flexWrap: 'wrap',
                opacity: 0.6,
              }}
            >
              <span className="metadata-item">
                <StarIcon size={14} /> Packing Lists
              </span>
              <span className="metadata-item">
                <StarIcon size={14} /> Sitter Hacks
              </span>
              <span className="metadata-item">
                <StarIcon size={14} /> Safety Tips
              </span>
            </div>
          </div>
        </section>

        <section className="section-margin text-center">
          <div className="sub-header">Get in Touch</div>
          <h2 className="display-title display-title-md">
            Let's <span className="serif-italic shimmer-text">Connect.</span>
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--s-4)',
              marginTop: 'var(--s-5)',
            }}
          >
            <ContactTrigger label="Contact" className="btn-gold" />
            <Link href="/blog#archive" className="secondary-btn">
              Read the Blog
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
