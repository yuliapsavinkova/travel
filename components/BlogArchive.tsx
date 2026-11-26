'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import type { BlogPostSummary, BlogTrack } from '../types';
import { formatCardDate } from '../utils/content';
import CommonCard from './CommonCard';
import { CalendarIcon, SearchIcon, XIcon } from './Icons';

let pendingTrackSwitchQuery: string | null = null;

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
    searchPlaceholder: string;
  }
> = {
  sitters: {
    srHeading: 'Guides for House Sitters',
    subtitle: 'House sitting tips, real numbers, and honest lessons from my own experience.',
    searchPlaceholder: 'Search sitter guides...',
  },
  homeowners: {
    srHeading: 'Guides for Homeowners',
    subtitle: 'Checklists, questions to ask, and advice from my perspective as a sitter.',
    searchPlaceholder: 'Search homeowner guides...',
  },
};

function matchesSearch(post: BlogPostSummary, query: string): boolean {
  if (!query) return true;

  const haystack = [post.title, post.excerpt, post.topic, post.category, ...(post.audience ?? [])]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(query);
}

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
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setActiveTrack(resolvedTrack);
  }, [resolvedTrack]);

  useEffect(() => {
    if (pendingTrackSwitchQuery !== null) {
      setSearchQuery(pendingTrackSwitchQuery);
      pendingTrackSwitchQuery = null;
    }
  }, []);

  useEffect(() => {
    router.prefetch('/sitters-guides');
    router.prefetch('/homeowners-guides');
  }, [router]);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredSitters = useMemo(
    () => sitterPosts.filter((post) => matchesSearch(post, normalizedQuery)),
    [sitterPosts, normalizedQuery]
  );

  const filteredHomeowners = useMemo(
    () => homeownerPosts.filter((post) => matchesSearch(post, normalizedQuery)),
    [homeownerPosts, normalizedQuery]
  );

  const activePosts = activeTrack === 'sitters' ? filteredSitters : filteredHomeowners;
  const otherTrack: BlogTrack = activeTrack === 'sitters' ? 'homeowners' : 'sitters';
  const otherPostsCount =
    otherTrack === 'sitters' ? filteredSitters.length : filteredHomeowners.length;

  const handleSelectTrack = (track: BlogTrack) => {
    if (track === activeTrack) return;
    setActiveTrack(track);
    pendingTrackSwitchQuery = searchQuery;
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

        <div className="blog-search-row">
          <div className="archive-search-wrap">
            <SearchIcon size={15} className="archive-search-icon" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activeCopy.searchPlaceholder}
              aria-label="Search guides"
              className="archive-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="archive-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <XIcon size={13} />
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="blog-archive-section" id="archive">
        <div
          id="blog-track-panel"
          role="tabpanel"
          aria-labelledby={activeTrack === 'sitters' ? 'tab-sitters' : 'tab-homeowners'}
        >
          {activePosts.length > 0 ? (
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
          ) : (
            <div className="home-feature-card text-center">
              <p className="hero-paragraph home-feature-paragraph">
                No {activeTrack === 'sitters' ? 'sitter' : 'homeowner'} guides matched &ldquo;
                {searchQuery}&rdquo;.
              </p>
              <div className="blog-empty-actions">
                <button type="button" className="secondary-btn" onClick={() => setSearchQuery('')}>
                  Clear Search
                </button>
                {otherPostsCount > 0 && (
                  <button
                    type="button"
                    className="btn-gold"
                    onClick={() => handleSelectTrack(otherTrack)}
                  >
                    See {otherPostsCount} {otherTrack === 'sitters' ? 'Sitter' : 'Homeowner'}{' '}
                    {otherPostsCount === 1 ? 'Match' : 'Matches'}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
