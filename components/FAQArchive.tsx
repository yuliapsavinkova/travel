'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { type BlogTrack, type FAQItem, REFERRALS } from '../types';
import { ChevronDownIcon, SearchIcon, XIcon } from './Icons';

interface FAQArchiveProps {
  sitterFaqs: FAQItem[];
  homeownerFaqs: FAQItem[];
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
    srHeading: 'Common Questions for House Sitters',
    subtitle: 'My insights on getting started, profile tips, memberships, and more.',
    searchPlaceholder: 'Search sitter questions...',
  },
  homeowners: {
    srHeading: 'Common Questions for Homeowners',
    subtitle:
      'My insights on preparing your home, writing a welcome guide, vetting sitters, and comparing options.',
    searchPlaceholder: 'Search homeowner questions...',
  },
};

function matchesSearch(item: FAQItem, query: string): boolean {
  if (!query) return true;

  const haystack = [item.question, item.answer, item.link?.label]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(query);
}

export default function FAQArchive({
  sitterFaqs,
  homeownerFaqs,
  initialTrack = 'sitters',
}: FAQArchiveProps) {
  const [activeTrack, setActiveTrack] = useState<BlogTrack>(initialTrack);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab === 'homeowners' || tab === 'sitters') {
      setActiveTrack(tab);
    }
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredSitters = useMemo(
    () => sitterFaqs.filter((item) => matchesSearch(item, normalizedQuery)),
    [sitterFaqs, normalizedQuery]
  );

  const filteredHomeowners = useMemo(
    () => homeownerFaqs.filter((item) => matchesSearch(item, normalizedQuery)),
    [homeownerFaqs, normalizedQuery]
  );

  const activeFaqs = activeTrack === 'sitters' ? filteredSitters : filteredHomeowners;
  const otherTrack: BlogTrack = activeTrack === 'sitters' ? 'homeowners' : 'sitters';
  const otherFaqsCount =
    otherTrack === 'sitters' ? filteredSitters.length : filteredHomeowners.length;

  const handleSelectTrack = (track: BlogTrack) => {
    if (track === activeTrack) return;
    setActiveTrack(track);
    const nextUrl = track === 'homeowners' ? '/faq?tab=homeowners' : '/faq';
    window.history.replaceState(null, '', nextUrl);
  };

  const activeCopy = TRACK_COPY[activeTrack];

  return (
    <>
      <header className="text-center blog-archive-header">
        <span className="sub-header">Common Questions for</span>
        <h1 className="sr-only">{activeCopy.srHeading}</h1>

        <div
          className="blog-header-switcher"
          role="tablist"
          aria-label="Switch between House Sitters and Homeowners questions"
        >
          <button
            type="button"
            role="tab"
            id="tab-faq-sitters"
            aria-selected={activeTrack === 'sitters'}
            aria-controls="faq-track-panel"
            className={`blog-header-tab blog-header-tab-left ${activeTrack === 'sitters' ? 'active' : ''}`}
            onClick={() => handleSelectTrack('sitters')}
          >
            <span className="blog-header-tab-text">House Sitters</span>
            <span className="blog-header-tab-count">
              {sitterFaqs.length} {sitterFaqs.length === 1 ? 'question' : 'questions'}
            </span>
          </button>

          <span className="blog-header-divider" aria-hidden="true" />

          <button
            type="button"
            role="tab"
            id="tab-faq-homeowners"
            aria-selected={activeTrack === 'homeowners'}
            aria-controls="faq-track-panel"
            className={`blog-header-tab blog-header-tab-right ${activeTrack === 'homeowners' ? 'active' : ''}`}
            onClick={() => handleSelectTrack('homeowners')}
          >
            <span className="blog-header-tab-text">Homeowners</span>
            <span className="blog-header-tab-count">
              {homeownerFaqs.length} {homeownerFaqs.length === 1 ? 'question' : 'questions'}
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
              aria-label="Search common questions"
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

      <div className="blog-archive-section" id="faq-archive">
        <div className="faq-archive-panel">
          <div
            id="faq-track-panel"
            role="tabpanel"
            aria-labelledby={activeTrack === 'sitters' ? 'tab-faq-sitters' : 'tab-faq-homeowners'}
          >
            {activeFaqs.length > 0 ? (
              <section className="prose-faq" aria-label={activeCopy.srHeading}>
                <div className="faq-list">
                  {activeFaqs.map((item) => (
                    <details key={item.id} className="faq-row">
                      <summary className="faq-question">
                        <span>{item.question}</span>
                        <ChevronDownIcon size={16} className="faq-chevron" aria-hidden="true" />
                      </summary>
                      <div className="faq-answer-wrap">
                        <p className="faq-answer">{item.answer}</p>
                        {item.link && (
                          <Link
                            href={item.link.href}
                            className="faq-action-link"
                            aria-label={`Read guide: ${item.link.label}`}
                          >
                            <span>{item.link.label}</span>
                            <span aria-hidden="true">&rarr;</span>
                          </Link>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ) : (
              <div className="home-feature-card text-center">
                <p className="hero-paragraph home-feature-paragraph">
                  No {activeTrack === 'sitters' ? 'sitter' : 'homeowner'} questions matched &ldquo;
                  {searchQuery}&rdquo;.
                </p>
                <div className="blog-empty-actions">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </button>
                  {otherFaqsCount > 0 && (
                    <button
                      type="button"
                      className="btn-gold"
                      onClick={() => handleSelectTrack(otherTrack)}
                    >
                      See {otherFaqsCount} {otherTrack === 'sitters' ? 'Sitter' : 'Homeowner'}{' '}
                      {otherFaqsCount === 1 ? 'Match' : 'Matches'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="prose-accent-box variant-cta">
            <span className="accent-box-label">Get {REFERRALS.THS.discount} Membership</span>
            <p>
              Ready to get started on TrustedHousesitters? Use my verified referral link to get{' '}
              {REFERRALS.THS.discount} your annual membership.
            </p>
            <a
              href={REFERRALS.THS.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-wide"
            >
              Discount: {REFERRALS.THS.discount}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
