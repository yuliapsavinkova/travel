import Image from 'next/image';
import Link from 'next/link';
import { InquiryTrigger } from '../components/ClientTriggers';
import { ChevronDownIcon, GlobeIcon, CompassIcon, MapPinIcon } from '../components/Icons';
import { SITE_STATS } from '../constants';

export default function HomePage() {
  return (
    <>
      <section className="hero-stack section-margin">
        <div className="media-viewport">
          <Image
            src="/home-hero.jpg"
            alt="Solo Female Traveler"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-gradient-overlay" />
        </div>
        <div className="hero-content-overlay">
          <div className="sub-header hero-sub-header">A Solo Female Journey</div>
          <h1 className="display-title">
            Chronicles of a <span className="champagne-text">Traveler.</span>
          </h1>
          <p className="hero-paragraph">
            I travel full time. From the hidden corners of the United States to the far reaches of
            the globe.
          </p>
          <div className="hero-button-group">
            <Link href="/travel#guides" className="btn-gold">
              Destinations
            </Link>
            <Link href="/stays#portfolio" className="secondary-btn">
              My Stays
            </Link>
          </div>
        </div>

        <Link href="#perspective" className="scroll-trigger" aria-label="Scroll down">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <section className="section-margin text-center" id="perspective">
          <div className="sub-header">Global Narrative</div>
          <h2 className="display-title display-title-md">
            Unbound <span className="serif-italic champagne-text">& Intentional.</span>
          </h2>
          <p className="hero-paragraph" style={{ marginBottom: 'var(--s-6)' }}>
            Across {SITE_STATS.countriesCount} countries and {SITE_STATS.statesCount} states, my
            travels have taught me to slow down and pay attention - to spaces, to people, and to the
            moments in between.
          </p>

          <div className="grid-standard grid-stats">
            {[
              {
                label: 'Countries Explored',
                value: SITE_STATS.countriesCount,
                icon: <GlobeIcon size={28} />,
                img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
              },
              {
                label: 'States Navigated',
                value: SITE_STATS.statesCount,
                icon: <MapPinIcon size={28} />,
                img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
              },
              {
                label: 'Slow Travel Expertise',
                value: '100%',
                icon: <CompassIcon size={28} />,
                img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
              },
            ].map((stat, i) => (
              <div key={i} className="stat-card-glass">
                <div className="stat-background media-viewport">
                  <Image
                    src={stat.img}
                    alt={stat.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    style={{ objectFit: 'cover', opacity: 0.4 }}
                  />
                  <div className="stat-image-overlay" />
                </div>
                <div className="stat-content">
                  <div className="stat-icon-circle">{stat.icon}</div>
                  <div className="gold-stat-number">{stat.value}</div>
                  <div className="sub-header no-margin opacity-90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-margin text-center">
          <div className="section-divider">
            <div className="sub-header">Collaborations</div>
            <h2 className="display-title display-title-md">
              The <span className="serif-italic champagne-text">Connection.</span>
            </h2>
            <p className="hero-paragraph" style={{ margin: 'var(--s-4) auto' }}>
              My full-time travel is supported by a foundation of professional stewardship. If you
              are seeking a trusted traveler to care for your home while you are away, I’d love to
              connect.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--s-4)' }}>
              <InquiryTrigger label="Start An Inquiry" className="btn-gold" />
              <Link href="/stays#portfolio" className="secondary-btn">
                Explore Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
