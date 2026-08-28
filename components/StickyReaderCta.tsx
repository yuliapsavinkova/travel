'use client';

import React, { useState, useEffect } from 'react';
import { REFERRALS } from '../constants';
import { ArrowUpRightIcon, XIcon } from './Icons';

interface StickyReaderCtaProps {
  promoLink?: string;
  text?: string;
  buttonLabel?: string;
  showAfterScroll?: number;
}

export default function StickyReaderCta({
  promoLink = REFERRALS.THS.link,
  text = 'Get 25% off TrustedHousesitters',
  buttonLabel = 'Claim 25% Off',
  showAfterScroll = 350,
}: StickyReaderCtaProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Reset state on mount or route changes
    setIsDismissed(false);

    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfterScroll]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed) return null;

  return (
    <aside
      id="sticky-reader-cta"
      className={`sticky-reader-cta ${isVisible ? 'is-visible' : ''}`}
      aria-label="Reader discount offer"
    >
      <div className="sticky-cta-inner">
        <div className="sticky-cta-left">
          <span className="sticky-cta-icon" aria-hidden="true">✨</span>
          <span className="sticky-cta-text">{text}</span>
        </div>

        <div className="sticky-cta-right">
          <a
            href={promoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold sticky-cta-btn"
            id="sticky-cta-claim-btn"
          >
            <span>{buttonLabel}</span>
            <ArrowUpRightIcon size={13} className="sticky-btn-icon" />
          </a>

          <button
            type="button"
            onClick={handleDismiss}
            className="sticky-cta-dismiss-btn"
            aria-label="Close offer"
            title="Close"
          >
            <XIcon size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}

