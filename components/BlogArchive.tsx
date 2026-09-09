'use client';

import React, { useState, useMemo } from 'react';
import type { BlogPost, BlogAudience } from '../types';
import CommonCard from './CommonCard';
import { CalendarIcon, MapPinIcon } from './Icons';
import { formatCardDate } from '../utils/content';

interface BlogArchiveProps {
  posts: BlogPost[];
}

type FilterOption = 'All' | 'Sitter Guides' | 'Pet Parent Guides';

export default function BlogArchive({ posts }: BlogArchiveProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  const filterCounts = useMemo(() => {
    const sittersCount = posts.filter(
      (p) => !p.audience || p.audience.includes('Sitters')
    ).length;
    const petParentsCount = posts.filter(
      (p) => p.audience && p.audience.includes('Pet Parents')
    ).length;

    return {
      All: posts.length,
      'Sitter Guides': sittersCount,
      'Pet Parent Guides': petParentsCount,
    };
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'All') return posts;
    if (activeFilter === 'Sitter Guides') {
      return posts.filter((p) => !p.audience || p.audience.includes('Sitters'));
    }
    if (activeFilter === 'Pet Parent Guides') {
      return posts.filter((p) => p.audience && p.audience.includes('Pet Parents'));
    }
    return posts;
  }, [posts, activeFilter]);

  const filters: FilterOption[] = ['All', 'Sitter Guides', 'Pet Parent Guides'];

  return (
    <div className="blog-archive-section">
      {/* Interactive Category Filter Pills */}
      <nav
        className="filter-tabs-container"
        role="tablist"
        aria-label="Filter blog posts by audience"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          const count = filterCounts[filter];
          const tabId = `filter-tab-${filter.toLowerCase().replace(/\s+/g, '-')}`;

          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="blog-archive-grid"
              id={tabId}
              className={`filter-tab-pill ${isActive ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              <span>{filter}</span>
              <span className="filter-tab-count" aria-label={`${count} articles`}>
                {count}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Grid of Articles */}
      <div
        id="blog-archive-grid"
        role="tabpanel"
        aria-labelledby={`filter-tab-${activeFilter.toLowerCase().replace(/\s+/g, '-')}`}
        className="grid-standard"
      >
        {filteredPosts.map((post) => {
          const isPetParent = post.audience?.includes('Pet Parents');
          const badgeLabel = isPetParent ? 'Pet Parent Guide' : 'Sitter Guide';

          return (
            <CommonCard
              key={post.id}
              image={post.imageUrl}
              badge={badgeLabel}
              metadata={[
                { icon: <CalendarIcon size={12} />, text: formatCardDate(post.date) },
                { icon: <MapPinIcon size={12} />, text: post.location },
              ]}
              title={post.title}
              description={post.excerpt}
              slug={`/blog/${post.slug}`}
              actionLabel="Read Post"
            />
          );
        })}
      </div>
    </div>
  );
}
