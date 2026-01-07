import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { CalendarIcon, MapPinIcon, ChevronDownIcon } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'The Sitter Blog: Expert Tips & House Sitting Stories | Sitter Journey',
  description:
    'Practical guides on landing your first house sit, professional pet care tips, and stories from a full-time solo female traveler.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

  return (
    <>
      <section className="hero-stack section-margin">
        <div className="hero-media-container media-viewport">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=2400"
            alt="Blog"
          />
          <div className="overlay-hero" />
        </div>

        <div className="hero-content-overlay content-layer">
          <div className="sub-header hero-sub-header">My Journey</div>
          <h1 className="display-title">
            The <span className="shimmer-text">Blog.</span>
          </h1>
          <p className="hero-paragraph">
            Writing about life on the road and what I've learned along the way.
          </p>
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
        <header className="text-center section-margin" id="archive">
          <div className="sub-header">Posts</div>
          <h2 className="display-title display-title-md">
            The <span className="serif-italic shimmer-text">Archive.</span>
          </h2>
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
