'use client';

import React, { useState, useEffect } from 'react';
import { REFERRALS } from '../constants';
import { ArrowUpRightIcon, ChevronDownIcon, ChevronUpIcon } from './Icons';

interface StickyReaderCtaProps {
  promoLink?: string;
  text?: string;
  showAfterScroll?: number;
}

export default function StickyReaderCta({
  promoLink = REFERRALS.THS.link,
  text = 'Get 25% off TrustedHousesitters',
  showAfterScroll = 350,
}: StickyReaderCtaProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isNearFooter, setIsNearFooter] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    // Reset state on mount
    setIsCollapsed(false);

    const checkVisibility = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if scrolled enough from top
      const shouldShow = scrollY > showAfterScroll;
      setIsVisible(shouldShow);

      // Check if near bottom / footer
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);
      if (distanceFromBottom < 180) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };

    // IntersectionObserver for the footer
    const footerEl = document.getElementById('site-footer');
    let observer: IntersectionObserver | null = null;

    if (footerEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsNearFooter(entry.isIntersecting);
        },
        { rootMargin: '60px 0px 0px 0px', threshold: 0 }
      );
      observer.observe(footerEl);
    }

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      if (observer && footerEl) {
        observer.unobserve(footerEl);
      }
    };
  }, [showAfterScroll]);

  const handleToggleCollapse = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCollapsed((prev) => !prev);
  };

  // If not scrolled enough or if user has scrolled all the way to the footer, hide it smoothly
  const shouldRender = isVisible && !isNearFooter;

  return (
    <aside
      id="sticky-reader-cta"
      className={`sticky-reader-cta ${shouldRender ? 'is-visible' : ''} ${
        isCollapsed ? 'is-collapsed' : 'is-expanded'
      }`}
      aria-label="Reader discount offer"
    >
      {isCollapsed ? (
        /* Collapsed Floating Corner Badge with direct promo link and separate expand button */
        <div className="sticky-cta-collapsed-badge">
          <a
            href={promoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-collapsed-link"
            id="sticky-collapsed-link"
            aria-label="Get 25% off TrustedHousesitters"
            title="Get 25% off TrustedHousesitters"
          >
            <span className="sticky-collapsed-sparkle" aria-hidden="true">
              ✨
            </span>
            <span className="sticky-collapsed-label">25% off</span>
          </a>

          <div className="sticky-collapsed-divider" aria-hidden="true" />

          <button
            type="button"
            onClick={handleToggleCollapse}
            className="sticky-collapsed-expand-btn"
            aria-label="Expand discount details"
            title="Expand discount details"
          >
            <ChevronUpIcon size={15} className="sticky-collapsed-chevron" />
          </button>
        </div>
      ) : (
        /* Expanded Floating Pill anchored in bottom right */
        <div className="sticky-cta-inner">
          <a
            href={promoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-cta-link"
            id="sticky-cta-link"
          >
            <span className="sticky-cta-icon" aria-hidden="true">
              ✨
            </span>
            <span className="sticky-cta-text">{text}</span>
            <ArrowUpRightIcon size={14} className="sticky-link-icon" />
          </a>

          <div className="sticky-cta-divider" aria-hidden="true" />

          <button
            type="button"
            onClick={handleToggleCollapse}
            className="sticky-cta-toggle-btn"
            aria-label="Collapse offer"
            title="Collapse offer"
          >
            <ChevronDownIcon size={16} className="sticky-toggle-icon" />
          </button>
        </div>
      )}
    </aside>
  );
}
