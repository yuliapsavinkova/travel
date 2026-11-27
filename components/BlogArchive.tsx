'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { BlogPostSummary, BlogTrack } from '../types';
import { formatCardDate } from '../utils/content';
import CommonCard from './CommonCard';
import { CalendarIcon } from './Icons';

interface BlogArchiveProps {
  sitterPosts: BlogPostSummary[];
  homeownerPosts: BlogPostSummary[];
  initialTrack?: BlogTrack;
}

const TRACK_COPY: Record<
  BlogTrack,
  {
    srHeading: string;
    subtitle: string;
  }
> = {
  sitters: {
    srHeading: 'Guides for House Sitters',
    subtitle: 'House sitting tips, stories, and lessons from my own experience.',
  },
  homeowners: {
    srHeading: 'Guides for Homeowners',
    subtitle: 'Tips, checklists, and advice for finding and hosting a house sitter.',
  },
};

export default function BlogArchive({
  sitterPosts,
  homeownerPosts,
  initialTrack = 'sitters',
}: BlogArchiveProps) {
  const router = useRouter();
  const pathname = usePathname();
  const resolvedTrack: BlogTrack =
    pathname === '/homeowners-guides'
      ? 'homeowners'
      : pathname === '/sitters-guides'
        ? 'sitters'
        : initialTrack;

  const [activeTrack, setActiveTrack] = useState<BlogTrack>(resolvedTrack);

  useEffect(() => {
    setActiveTrack(resolvedTrack);
  }, [resolvedTrack]);

  useEffect(() => {
    router.prefetch('/sitters-guides');
    router.prefetch('/homeowners-guides');
  }, [router]);

  const activePosts = activeTrack === 'sitters' ? sitterPosts : homeownerPosts;

  const handleSelectTrack = (track: BlogTrack) => {
    if (track === activeTrack) return;
    setActiveTrack(track);
    router.replace(track === 'sitters' ? '/sitters-guides' : '/homeowners-guides', {
      scroll: false,
    });
  };

  const activeCopy = TRACK_COPY[activeTrack];

  return (
    <>
      <header className="text-center blog-archive-header">
        <span className="sub-header">Guides for</span>
        <h1 className="sr-only">{activeCopy.srHeading}</h1>

        <div
          className="blog-header-switcher"
          role="tablist"
          aria-label="Switch between House Sitters and Homeowners guides"
        >
          <button
            type="button"
            role="tab"
            id="tab-sitters"
            aria-selected={activeTrack === 'sitters'}
            aria-controls="blog-track-panel"
            className={`blog-header-tab blog-header-tab-left ${activeTrack === 'sitters' ? 'active' : ''}`}
            onClick={() => handleSelectTrack('sitters')}
          >
            <span className="blog-header-tab-text">House Sitters</span>
            <span className="blog-header-tab-count">
              {sitterPosts.length} {sitterPosts.length === 1 ? 'guide' : 'guides'}
            </span>
          </button>

          <span className="blog-header-divider" aria-hidden="true" />

          <button
            type="button"
            role="tab"
            id="tab-homeowners"
            aria-selected={activeTrack === 'homeowners'}
            aria-controls="blog-track-panel"
            className={`blog-header-tab blog-header-tab-right ${activeTrack === 'homeowners' ? 'active' : ''}`}
            onClick={() => handleSelectTrack('homeowners')}
          >
            <span className="blog-header-tab-text">Homeowners</span>
            <span className="blog-header-tab-count">
              {homeownerPosts.length} {homeownerPosts.length === 1 ? 'guide' : 'guides'}
            </span>
          </button>
        </div>

        <p className="hero-paragraph home-section-intro blog-archive-subtitle">
          {activeCopy.subtitle}
        </p>
      </header>

      <div className="blog-archive-section" id="archive">
        <div
          id="blog-track-panel"
          role="tabpanel"
          aria-labelledby={activeTrack === 'sitters' ? 'tab-sitters' : 'tab-homeowners'}
        >
          <div className="grid-standard">
            {activePosts.map((post) => (
              <CommonCard
                key={post.id}
                image={post.imageUrl}
                metadata={[
                  {
                    icon: <CalendarIcon size={12} />,
                    text: formatCardDate(post.date, post.updatedDate),
                  },
                ]}
                title={post.title}
                description={post.excerpt}
                slug={`/${post.slug}`}
                actionLabel="Read Guide"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
