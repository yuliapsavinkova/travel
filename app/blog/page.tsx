import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../constants';
import BlogArchive from '../../components/BlogArchive';
import SocialMediaIcons from '../../components/SocialMediaIcons';
import { ChevronDownIcon } from '../../components/Icons';

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
      <section className="hero-two-col section-margin">
        <div className="container">
          <div className="hero-two-col-grid">
            <div className="hero-col-text">
              <div className="hero-socials-wrapper">
                <SocialMediaIcons className="hero-socials" iconSize={18} />
              </div>
              <h1 className="display-title">
                Lessons from My Journey as a Housesitter
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

            <div className="hero-col-media">
              <div className="hero-image-card">
                <Image
                  src="/remote-house.avif"
                  alt="Blog"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container section-margin">
        <header className="text-center section-margin" id="archive">
          <h2 className="display-title display-title-md">
            The <span className="serif-italic">Archive</span>
          </h2>
          <p className="hero-paragraph home-section-intro">
            I am currently documenting my journey. While the archive is growing, please check back
            often for new hacks, packing essentials, and stories from the road.
          </p>
        </header>

        <BlogArchive posts={sortedPosts} />
      </div>
    </>
  );
}
