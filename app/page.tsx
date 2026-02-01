import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ContactTrigger } from '../components/ClientTriggers';
import {
  ChevronDownIcon,
  GlobeIcon,
  CompassIcon,
  MapPinIcon,
  CreditCardIcon,
  ZapIcon,
  HomeIcon,
  StarIcon,
} from '../components/Icons';
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
            <span className="sub-header home-hero-sub-header">Sitter Journey</span>
            One Year <span className="shimmer-text">Across The United States.</span>
          </h1>
          <p className="hero-paragraph">
            I am embarking on a one-year adventure using housesitting to slow-travel through every
            state and see the country through local eyes.
          </p>
          <div className="hero-button-group">
            <Link href="/blog#archive" className="btn-gold">
              Read My Blog
            </Link>
            <Link href="/resources#archive" className="secondary-btn">
              My Resources
            </Link>
          </div>
        </div>

        <Link href="#mission" className="scroll-trigger content-layer" aria-label="Scroll down">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        {/* SECTION: MISSION / TOP ARTICLES */}
        <section className="home-section-wrap text-center" id="mission">
          <div className="sub-header">The Mission Started May 2025</div>
          <h2 className="display-title display-title-md">
            Seeing the U.S. through <span className="serif-italic shimmer-text">Local Eyes.</span>
          </h2>
          <p className="hero-paragraph home-section-intro">
            Top 3 articles to get you started on your own journey
          </p>

          <div className="grid-standard">
            {[
              {
                label: 'The Math',
                title: 'Expense Breakdowns',
                desc: 'Real numbers on food, gas, and hidden costs of living on the road.',
                icon: <CreditCardIcon size={28} />,
                link: '/blog/can-you-really-travel-for-free-house-sitting-math',
              },
              {
                label: 'The Strategy',
                title: 'How to do this too',
                desc: 'Everything I’ve learned about landing sits and managing life on the move.',
                icon: <ZapIcon size={28} />,
                link: '/blog/how-to-get-your-first-house-sit-no-reviews',
              },
              {
                label: 'The Stays',
                title: 'Local Living',
                desc: `Stories from ${SITE_STATS.statesCount} states and the pets who made them home.`,
                icon: <HomeIcon size={28} />,
                link: '/blog',
              },
            ].map((pillar, i) => (
              <div key={i} className="card-wrapper">
                <div className="glass-card stat-card">
                  <div className="content-layer home-pillar-content">
                    <div className="home-pillar-icon">{pillar.icon}</div>
                    <div className="sub-header">{pillar.label}</div>
                    <h3 className="serif-italic home-pillar-title">{pillar.title}</h3>
                    <p className="home-pillar-desc">{pillar.desc}</p>
                    <Link href={pillar.link} className="btn-nav" style={{ padding: 0 }}>
                      Coming Soon &rarr;{/* Explore &rarr; */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: LESSONS / DOCUMENTATION */}
        <section className="home-section-wrap text-center">
          <div className="glass-card home-feature-card">
            <div className="sub-header">Ongoing Documentation</div>
            <h2 className="display-title display-title-md">
              Lessons <span className="serif-italic shimmer-text">from the Road.</span>
            </h2>
            <p className="hero-paragraph home-feature-paragraph">
              I am documenting every mishap, success, and technical detail here. Whether you want to
              travel for a month or a year, these guides are built from the real-world experience of
              a solo female traveler.
            </p>
            <div className="home-metadata-group">
              <span className="metadata-item">
                <StarIcon size={14} /> 5.0 Sitter Rating
              </span>
              <span className="metadata-item">
                <StarIcon size={14} /> Full Expense Transparency
              </span>
              <span className="metadata-item">
                <StarIcon size={14} /> Solo Safety Guides
              </span>
            </div>
          </div>
        </section>

        {/* SECTION: QUESTIONS / CONNECT */}
        <section className="home-section-wrap text-center">
          <div className="sub-header">Have Questions?</div>
          <h2 className="display-title display-title-md">
            Connect <span className="serif-italic shimmer-text">With Me</span>
          </h2>
          <div className="home-cta-group">
            <ContactTrigger label="Contact" className="btn-gold" />
            <Link href="/blog#archive" className="secondary-btn">
              Read Blog
            </Link>
          </div>
        </section>
      </div>

      {/* SECTION: PERSPECTIVE / STATS (TINTED) */}
      <div className="home-section-tinted">
        <div className="container">
          <section className="home-section-wrap text-center" id="perspective">
            <div className="sub-header">My Journey</div>
            <h2 className="display-title display-title-md">
              Travel <span className="serif-italic shimmer-text">& Life</span>
            </h2>
            <p className="hero-paragraph home-section-intro">
              I have visited {SITE_STATS.countriesCount} countries and {SITE_STATS.statesCount}{' '}
              states while working remote
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
                    <div className="card-image-viewport media-viewport home-stat-media">
                      <Image
                        src={stat.img}
                        alt={stat.label}
                        fill
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="home-stat-overlay" />
                      <div className="home-stat-icon-overlay content-layer">{stat.icon}</div>
                    </div>
                    <div className="content-layer">
                      <div className="display-title-md home-stat-value">{stat.value}</div>
                      <div className="sub-header">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="container">
        {/* SECTION: ROADMAP */}
        <section className="home-section-wrap text-center">
          <div className="glass-card home-feature-card-compact">
            <div className="sub-header">Growth Roadmap</div>
            <h2 className="display-title display-title-md">
              The Road <span className="serif-italic shimmer-text">Ahead</span>
            </h2>
            <p className="hero-paragraph home-feature-paragraph">
              I’m just getting started here, so check back as the site grows. I’ll be sharing
              packing hacks, real budget breakdowns, and the technical details of traveling full
              time efficiently and sustainably
            </p>
            <div className="home-metadata-group-dim">
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
      </div>
    </>
  );
}
