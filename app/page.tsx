import Image from 'next/image';
import Link from 'next/link';
import { ContactTrigger } from '../components/ClientTriggers';
import { ChevronDownIcon, GlobeIcon, CompassIcon, MapPinIcon } from '../components/Icons';
import { SITE_STATS } from '../constants';

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
          <div className="sub-header">Life on the road</div>
          <h1 className="display-title">
            Chronicles of a <span className="shimmer-text">Traveler.</span>
          </h1>
          <p className="hero-paragraph">
            I travel full time. From the United States to the far reaches of the globe.
          </p>
          <div className="hero-button-group">
            <Link href="/travel#guides" className="btn-gold">
              Travel Guides
            </Link>
            <Link href="/stays#portfolio" className="secondary-btn">
              My Stays
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
            I've visited {SITE_STATS.countriesCount} countries and {SITE_STATS.statesCount} states.
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
              <div key={i} className="glass-card stat-card">
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
            ))}
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
            <Link href="/stays#portfolio" className="secondary-btn">
              My Stays
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
