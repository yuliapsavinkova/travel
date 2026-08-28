'use client';

import React, { useState, useEffect } from 'react';
import { REFERRALS } from '../constants';
import { TagIcon, ArrowUpRightIcon, XIcon, ShieldCheckIcon } from './Icons';

interface StickyReaderCtaProps {
  promoLink?: string;
  discountText?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  badge?: string;
  showAfterScroll?: number;
}

export default function StickyReaderCta({
  promoLink = REFERRALS.THS.link,
  discountText = REFERRALS.THS.discount,
  title = 'Claim 25% Off TrustedHousesitters',
  subtitle = 'Verified Reader Perk • Applied Automatically',
  buttonLabel = 'Claim 25% Off',
  badge = '25% OFF',
  showAfterScroll = 350,
}: StickyReaderCtaProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Check if previously dismissed in this session
    const storageKey = `sj_dismiss_cta_${encodeURIComponent(promoLink)}`;
    try {
      if (sessionStorage.getItem(storageKey) === 'true') {
        setIsDismissed(true);
        return;
      }
    } catch {
      // Ignore if sessionStorage is unavailable in iframe/sandbox
    }

    const handleScroll = () => {
      if (isDismissed) return;
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfterScroll, isDismissed, promoLink]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    try {
      const storageKey = `sj_dismiss_cta_${encodeURIComponent(promoLink)}`;
      sessionStorage.setItem(storageKey, 'true');
    } catch {
      // Ignore sessionStorage error
    }
  };

  if (isDismissed) return null;

  return (
    <aside
      id="sticky-reader-cta"
      className={`sticky-reader-cta ${isVisible ? 'is-visible' : ''}`}
      aria-label="Exclusive Reader Discount"
    >
      <div className="sticky-cta-inner">
        {/* Left Section: Badge & Value Prop */}
        <div className="sticky-cta-content">
          <div className="sticky-cta-badge">
            <TagIcon size={13} className="sticky-badge-icon" />
            <span>{badge || discountText}</span>
          </div>

          <div className="sticky-cta-text-group">
            <div className="sticky-cta-title">
              {title}
              <span className="sticky-cta-verified">
                <ShieldCheckIcon size={12} /> Verified
              </span>
            </div>
            <p className="sticky-cta-subtitle">{subtitle}</p>
          </div>
        </div>

        {/* Right Section: Action Button & Dismiss */}
        <div className="sticky-cta-actions">
          <a
            href={promoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold sticky-cta-btn"
            id="sticky-cta-claim-btn"
          >
            <span>{buttonLabel}</span>
            <ArrowUpRightIcon size={14} className="sticky-btn-icon" />
          </a>

          <button
            type="button"
            onClick={handleDismiss}
            className="sticky-cta-dismiss-btn"
            aria-label="Dismiss discount notification"
            title="Dismiss"
          >
            <XIcon size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
