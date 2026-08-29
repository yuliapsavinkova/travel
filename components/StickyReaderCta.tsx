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
  text = 'Get 25% off TrustedHousesitters Membership',
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
        /* Collapsed Floating Corner Badge */
        <button
          type="button"
          onClick={handleToggleCollapse}
          className="sticky-cta-collapsed-badge"
          aria-label="Show 25% discount offer"
          title="Show discount offer"
        >
          <span className="sticky-collapsed-sparkle" aria-hidden="true">
            ✨
          </span>
          <span className="sticky-collapsed-label">25% Off THS</span>
          <ChevronUpIcon size={14} className="sticky-collapsed-chevron" />
        </button>
      ) : (
        /* Expanded Full Floating Pill */
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
            aria-label="Hide offer"
            title="Hide offer"
          >
            <span className="sticky-cta-toggle-text">Hide</span>
            <ChevronDownIcon size={14} />
          </button>
        </div>
      )}
    </aside>
  );
}

