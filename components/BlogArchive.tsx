'use client';

import { useMemo, useState } from 'react';
import type { BlogPost } from '../types';
import { formatCardDate } from '../utils/content';
import CommonCard from './CommonCard';
import { CalendarIcon, SearchIcon, XIcon } from './Icons';

interface BlogArchiveProps {
  posts: BlogPost[];
}

const PILLAR_ORDER = ['House Sitting', 'Minimalism', 'Destinations', 'Freedom'];
const AUDIENCE_FILTERS = ['For Sitters', 'For Homeowners'] as const;

function getPostPillar(post: BlogPost): string {
  return post.pillar || 'House Sitting';
}

function isHomeownerPost(post: BlogPost): boolean {
  return Boolean(post.audience?.some((a) => /pet parent|homeowner/i.test(a)));
}

function getAudienceFilterLabel(post: BlogPost): 'For Sitters' | 'For Homeowners' {
  return isHomeownerPost(post) ? 'For Homeowners' : 'For Sitters';
}

function getAudienceBadge(post: BlogPost): 'Sitter' | 'Homeowner' {
  return isHomeownerPost(post) ? 'Homeowner' : 'Sitter';
}

export default function BlogArchive({ posts }: BlogArchiveProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Detect distinct top-level pillars present across published posts
  const activePillars = useMemo(() => {
    const present = new Set(posts.map(getPostPillar));
    const ordered = PILLAR_ORDER.filter((p) => present.has(p));
    for (const p of present) {
      if (!ordered.includes(p)) ordered.push(p);
    }
    return ordered;
  }, [posts]);

  const isMultiPillarMode = activePillars.length > 1;

  // Build filter tabs dynamically:
  // - Multi-pillar mode (once Minimalism / Destinations / Freedom posts exist): filter by Pillar
  // - Single-pillar mode (today: House Sitting only): filter by For Sitters vs. For Homeowners
  const filterTabs = useMemo(() => {
    if (isMultiPillarMode) {
      return [
        { label: 'All', count: posts.length },
        ...activePillars.map((pillar) => ({
          label: pillar,
          count: posts.filter((p) => getPostPillar(p) === pillar).length,
        })),
      ];
    }

    const audienceTabs = AUDIENCE_FILTERS.map((audience) => ({
      label: audience,
      count: posts.filter((p) => getAudienceFilterLabel(p) === audience).length,
    })).filter((tab) => tab.count > 0);

    return [{ label: 'All', count: posts.length }, ...audienceTabs];
  }, [posts, activePillars, isMultiPillarMode]);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesTab =
        activeFilter === 'All'
          ? true
          : isMultiPillarMode
            ? getPostPillar(post) === activeFilter
            : getAudienceFilterLabel(post) === activeFilter;

      if (!matchesTab) return false;
      if (!query) return true;

      const haystack = [
        post.title,
        post.excerpt,
        post.topic,
        post.category,
        ...(post.audience ?? []),
        getAudienceFilterLabel(post),
        getAudienceBadge(post),
        getPostPillar(post),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [posts, activeFilter, searchQuery, isMultiPillarMode]);

  const handleReset = () => {
    setActiveFilter('All');
    setSearchQuery('');
  };

  return (
    <div className="blog-archive-section">
      <div className="archive-toolbar">
        {/* Dynamic Filter Pills */}
        <nav
          className="filter-tabs-container"
          role="tablist"
          aria-label={
            isMultiPillarMode ? 'Filter blog posts by topic' : 'Filter blog posts by audience'
          }
        >
          {filterTabs.map(({ label, count }) => {
            const isActive = activeFilter === label;
            const tabId = `filter-tab-${label.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="blog-archive-grid"
                id={tabId}
                className={`filter-tab-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveFilter(label)}
              >
                <span>{label}</span>
                <span className="filter-tab-count" aria-label={`${count} articles`}>
                  {count}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Integrated Search Input */}
        <div className="archive-search-wrap">
          <SearchIcon size={15} className="archive-search-icon" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search blog articles"
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

      {/* Grid of Articles */}
      {filteredPosts.length > 0 ? (
        <div
          id="blog-archive-grid"
          role="tabpanel"
          aria-labelledby={`filter-tab-${activeFilter.toLowerCase().replace(/\s+/g, '-')}`}
          className="grid-standard"
        >
          {filteredPosts.map((post) => {
            const pillar = getPostPillar(post);
            const badgeLabel =
              isMultiPillarMode && pillar !== 'House Sitting' ? pillar : getAudienceBadge(post);

            return (
              <CommonCard
                key={post.id}
                image={post.imageUrl}
                badge={badgeLabel}
                metadata={[
                  { icon: <CalendarIcon size={12} />, text: formatCardDate(post.date, post.updatedDate) },
                ]}
                title={post.title}
                description={post.excerpt}
                slug={`/blog/${post.slug}`}
                actionLabel="Read Post"
              />
            );
          })}
        </div>
      ) : (
        <div className="home-feature-card text-center" id="blog-archive-grid">
          <p className="hero-paragraph home-feature-paragraph">
            No articles matched &ldquo;{searchQuery || activeFilter}&rdquo;.
          </p>
          <button type="button" className="secondary-btn" onClick={handleReset}>
            Show All Articles
          </button>
        </div>
      )}
    </div>
  );
}
