import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import SocialMediaIcons from '../../components/SocialMediaIcons';
import { CalendarIcon, MapPinIcon, ChevronDownIcon } from '../../components/Icons';
import { formatCardDate } from '../../utils/content';

export const metadata: Metadata = {
  title: 'The Sitter Blog: Expert Tips & House Sitting Stories | Sitter Journey',
  description:
    'Practical guides, real budget math, and strategies on landing your first house sit, beating competition, and living full-time on the road.',
  alternates: {
    canonical: 'https://sitterjourney.com/blog',
  },
  openGraph: {
    title: 'The Sitter Blog: Expert Tips & House Sitting Stories',
    description:
      'Practical guides, real budget math, and strategies on landing your first house sit, beating competition, and living full-time on the road.',
    url: 'https://sitterjourney.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://sitterjourney.com/blog#collection',
        url: 'https://sitterjourney.com/blog',
        name: 'Sitter Journey Blog',
        description: 'Practical guides and stories about full-time travel and house sitting.',
        blogPost: sortedPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `https://sitterjourney.com/blog/${post.slug}`,
          datePublished: post.date,
          description: post.excerpt,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sitterjourney.com/blog#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://sitterjourney.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://sitterjourney.com/blog',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="hero-stack section-margin">
        <div className="hero-media-container media-viewport">
          <Image
            src="/remote-house.avif"
            alt="Blog"
            fill
            priority
            unoptimized
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay-hero" />
        </div>

        <div className="hero-content-overlay content-layer">
          <div className="hero-socials-wrapper">
            <SocialMediaIcons className="hero-socials" iconSize={18} />
          </div>
          <div className="sub-header hero-sub-header">House Sitting</div>
          <h1 className="display-title">
            Lessons from<span className="shimmer-text">My Journey as a Housesitter</span>
          </h1>
          <p className="hero-paragraph">I share how to travel sustainably through housesitting.</p>
          <div className="hero-button-group">
            <Link href="#archive" className="btn-gold">
              Read Blog
            </Link>
            <Link href="/resources#archive" className="secondary-btn">
              Resources
            </Link>
          </div>
        </div>

        <Link
          href="#archive"
          className="scroll-trigger content-layer"
          aria-label="Scroll to archive"
        >
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <header
          className="text-center section-margin"
          id="archive"
          style={{ maxWidth: '800px', margin: '0 auto var(--s-8) auto' }}
        >
          <div className="sub-header">Lessons Learned</div>
          <h2 className="display-title display-title-md">
            The <span className="serif-italic shimmer-text">Archive</span>
          </h2>
          <p
            className="hero-paragraph"
            style={{ fontSize: '1rem', opacity: 0.8, marginTop: 'var(--s-3)' }}
          >
            I am currently documenting my journey. While the archive is growing, please check back
            often for new hacks, packing essentials, and stories from the road.
          </p>
        </header>

        <div className="grid-standard">
          {sortedPosts.map((post) => (
            <CommonCard
              key={post.id}
              image={post.imageUrl}
              badge="Post"
              metadata={[
                { icon: <CalendarIcon size={12} />, text: formatCardDate(post.date) },
                { icon: <MapPinIcon size={12} />, text: post.location },
              ]}
              title={post.title}
              description={post.excerpt}
              slug={`/blog/${post.slug}`}
              actionLabel="Read Post"
            />
          ))}
        </div>
      </div>
    </>
  );
}
