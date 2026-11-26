import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '../components/HomeHero';
import { StarIcon } from '../components/Icons';
import SectionDivider from '../components/SectionDivider';
import { SITE_STATS } from '../site-config';
import { DEFAULT_OG_IMAGE } from '../utils/content';

export const metadata: Metadata = {
  title: 'Sitter Journey | Professional House Sitting & Slow Travel Across America',
  description:
    'Follow my full-time journey as a solo female traveler and professional house sitter. Discover how to travel the USA, save on accommodation, and care for pets.',
  alternates: {
    canonical: 'https://sitterjourney.com',
  },
  openGraph: {
    title: 'Sitter Journey | Professional House Sitting & Slow Travel Across America',
    description:
      'Follow my full-time journey as a solo female traveler and professional house sitter. Discover how to travel the USA, save on accommodation, and care for pets.',
    url: 'https://sitterjourney.com',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey - Full-Time Travel & House Sitting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitter Journey | Professional House Sitting & Slow Travel Across America',
    description:
      'Follow my full-time journey as a solo female traveler and professional house sitter. Discover how to travel the USA, save on accommodation, and care for pets.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sitter Journey | Slow Travel & House Sitting Across The World',
    url: 'https://sitterjourney.com',
    description:
      'Follow my full-time journey as a solo female traveler and professional house sitter across America.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://sitterjourney.com',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomeHero>
        <SectionDivider overlap="above" />
      </HomeHero>

      <div className="container">
        {/* SECTION: MISSION / TOP ARTICLES */}
        <section className="home-section-wrap text-center" id="mission">
          <h2 className="display-title display-title-md">
            How to start <span className="serif-italic">your journey</span>
          </h2>
          <p className="hero-paragraph home-section-intro">
            Top 3 Articles to Get You Started on Your Own Journey
          </p>

          <div className="grid-standard">
            {[
              {
                label: 'Lifestyle',
                title: 'Is it really worth it?',
                desc: 'What I Expected vs. What Happened',
                img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=800',
                link: '/is-trusted-housesitters-worth-it-for-sitters',
              },
              {
                label: 'Strategy',
                title: 'How can I do this too?',
                desc: 'My Strategies That Made It Possible',
                img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
                link: '/how-to-get-your-first-house-sit-no-reviews',
              },
              {
                label: 'Financials',
                title: 'How much do I need to save?',
                desc: 'What I Budgeted vs. What I Needed',
                img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
                link: '/can-you-really-travel-for-free-house-sitting-math',
              },
            ].map((pillar) => (
              <Link key={pillar.link} href={pillar.link} className="card-wrapper card-wrapper-link">
                <div className="glass-card">
                  <div className="home-pillar-media media-viewport">
                    <Image
                      src={pillar.img}
                      alt={pillar.title}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="card-image-overlay" />
                  </div>
                  <div className="content-layer home-pillar-content">
                    <div className="sub-header">{pillar.label}</div>
                    <h3 className="serif-italic home-pillar-title">{pillar.title}</h3>
                    <p className="home-pillar-desc">{pillar.desc}</p>
                    <span className="home-pillar-action">Read Article &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-section-footer">
            <Link href="/sitters-guides" className="home-footer-link">
              <span>or explore all </span>
              <span className="serif-italic">sitter guides &rarr;</span>
            </Link>
          </div>
        </section>
      </div>

      <SectionDivider />

      {/* SECTION: LESSONS / DOCUMENTATION */}
      <div className="container">
        <section className="home-section-wrap text-center">
          <div className="glass-card home-feature-card">
            <h2 className="display-title display-title-md">
              Lessons <span className="serif-italic">from My Journey</span>
            </h2>
            <p className="hero-paragraph home-feature-paragraph">
              I am documenting every lesson, success, and technical detail here. Whether you want to
              travel for a few days, a month, or a year, hope my insights from experience as a solo
              female traveler will help you plan yours.
            </p>
            <div className="home-metadata-group">
              <span className="metadata-item">
                <StarIcon size={14} /> {SITE_STATS.clientRating} Sitter Rating
              </span>
              <span className="metadata-item">
                <StarIcon size={14} /> {SITE_STATS.sitsCompleted} Sits Completed
              </span>
              <span className="metadata-item">
                <StarIcon size={14} /> Solo Safety Guides
              </span>
            </div>
          </div>
        </section>
      </div>

      <SectionDivider />

      {/* SECTION: PERSPECTIVE / STATS */}
      <div className="container">
        <section className="home-section-wrap text-center" id="perspective">
          <h2 className="display-title display-title-md">
            Travel <span className="serif-italic">& Life</span>
          </h2>
          <p className="hero-paragraph home-section-intro">
            I Have Visited {SITE_STATS.countriesCount} Countries, {SITE_STATS.statesCount} States,
            and Completed {SITE_STATS.sitsCompleted} House Sits
          </p>

          <div className="grid-standard">
            {[
              {
                label: 'Countries',
                value: SITE_STATS.countriesCount,
                img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
              },
              {
                label: 'States',
                value: SITE_STATS.statesCount,
                img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
              },
              {
                label: 'Sits Completed',
                value: SITE_STATS.sitsCompleted,
                img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
              },
            ].map((stat) => (
              <div key={stat.label} className="card-wrapper">
                <div className="glass-card">
                  <div className="card-image-viewport media-viewport home-stat-media">
                    <Image
                      src={stat.img}
                      alt={stat.label}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="card-image-overlay" />
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

      <SectionDivider />

      {/* SECTION: ROADMAP */}
      <div className="container">
        <section className="home-section-wrap text-center">
          <div className="glass-card home-feature-card">
            <h2 className="display-title display-title-md">
              What Comes <span className="serif-italic">Next</span>
            </h2>
            <p className="hero-paragraph home-feature-paragraph">
              I’m just getting started here, so check back as the site grows. I’ll be sharing
              packing hacks, real budget breakdowns, and the technical details of traveling full
              time efficiently and sustainably.
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
