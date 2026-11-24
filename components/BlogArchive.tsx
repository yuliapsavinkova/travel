'use client';

import { useMemo, useState } from 'react';
import type { BlogPostSummary, BlogTrack } from '../types';
import { formatCardDate } from '../utils/content';
import CommonCard from './CommonCard';
import { CalendarIcon, SearchIcon, XIcon } from './Icons';

interface BlogArchiveProps {
  sitterPosts: BlogPostSummary[];
  homeownerPosts: BlogPostSummary[];
  initialTrack?: BlogTrack;
  variant?: 'blog' | 'track';
}

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
  variant = 'blog',
}: BlogArchiveProps) {
  const [activeTrack, setActiveTrack] = useState<BlogTrack>(initialTrack);
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    setActiveTrack(track);
    if (variant === 'track' && typeof window !== 'undefined') {
      window.history.replaceState(null, '', track === 'sitters' ? '/sitters' : '/homeowners');
    }
  };

  const staticIntro = 'Guides for sitters and homeowners from the perspective of a sitter.';

  return (
    <>
      <header className="text-center blog-archive-header">
        <h1 className="display-title display-title-md">
          {variant === 'blog' ? (
            <>
              The <span className="serif-italic">Blog.</span>
            </>
          ) : activeTrack === 'sitters' ? (
            <>
              Sitter <span className="serif-italic">Guides.</span>
            </>
          ) : (
            <>
              Homeowner <span className="serif-italic">Guides.</span>
            </>
          )}
        </h1>
        <p className="hero-paragraph home-section-intro">{staticIntro}</p>
      </header>

      <div className="blog-archive-section" id="archive">
        <div className="blog-toolbar">
          <div
            className="track-segmented-control"
            role="tablist"
            aria-label="Switch between Sitter and Homeowner guides"
          >
            <button
              type="button"
              role="tab"
              id="tab-sitters"
              aria-selected={activeTrack === 'sitters'}
              aria-controls="blog-track-panel"
              className={`track-segment ${activeTrack === 'sitters' ? 'active' : ''}`}
              onClick={() => handleSelectTrack('sitters')}
            >
              <span>For Sitters</span>
              <span className="track-segment-count">{sitterPosts.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="tab-homeowners"
              aria-selected={activeTrack === 'homeowners'}
              aria-controls="blog-track-panel"
              className={`track-segment ${activeTrack === 'homeowners' ? 'active' : ''}`}
              onClick={() => handleSelectTrack('homeowners')}
            >
              <span>For Homeowners</span>
              <span className="track-segment-count">{homeownerPosts.length}</span>
            </button>
          </div>

          <div className="archive-search-wrap">
            <SearchIcon size={15} className="archive-search-icon" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                activeTrack === 'sitters' ? 'Search sitter guides...' : 'Search homeowner guides...'
              }
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
