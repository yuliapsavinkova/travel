import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { CalendarIcon, MapPinIcon, ChevronDownIcon } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'The Sitter Blog: Expert Tips & House Sitting Stories | Sitter Journey',
  description: 'Practical guides on landing your first house sit and solo travel tips.',
  alternates: {
    canonical: 'https://sitterjourney.com/blog',
  },
};

export default function BlogPage() {
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

  return (
    <>
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
          <div className="sub-header hero-sub-header">House Sitting</div>
          <h1 className="display-title">
            My <span className="shimmer-text">Experiences</span>
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
                { icon: <CalendarIcon size={12} />, text: post.date },
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
