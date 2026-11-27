'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { type BlogTrack, type FAQItem, REFERRALS } from '../types';
import { ChevronDownIcon } from './Icons';
import ReferralPromoCard from './ReferralPromoCard';

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
    promoDescription: string;
  }
> = {
  sitters: {
    srHeading: 'Common Questions for House Sitters',
    subtitle: 'My insights on getting started, profile tips, memberships, and more.',
    promoDescription: REFERRALS.THS.sitterInviteText,
  },
  homeowners: {
    srHeading: 'Common Questions for Homeowners',
    subtitle:
      'My insights on preparing your home, writing a welcome guide, vetting sitters, and comparing options.',
    promoDescription: REFERRALS.THS.homeownerInviteText,
  },
};

export default function FAQArchive({
  sitterFaqs,
  homeownerFaqs,
  initialTrack = 'sitters',
}: FAQArchiveProps) {
  const [activeTrack, setActiveTrack] = useState<BlogTrack>(initialTrack);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab === 'homeowners' || tab === 'sitters') {
      setActiveTrack(tab);
    }
  }, []);

  const activeFaqs = activeTrack === 'sitters' ? sitterFaqs : homeownerFaqs;

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
      </header>

      <div className="blog-archive-section" id="faq-archive">
        <div className="faq-archive-panel">
          <div
            id="faq-track-panel"
            role="tabpanel"
            aria-labelledby={activeTrack === 'sitters' ? 'tab-faq-sitters' : 'tab-faq-homeowners'}
          >
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
          </div>

          <ReferralPromoCard description={activeCopy.promoDescription} />
        </div>
      </div>
    </>
  );
}
