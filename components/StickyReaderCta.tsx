'use client';

import React, { useState, useEffect } from 'react';
import { REFERRALS } from '../constants';
import { ArrowUpRightIcon } from './Icons';

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

  useEffect(() => {
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

  // If not scrolled enough or if user has scrolled all the way to the footer, hide it smoothly
  const shouldRender = isVisible && !isNearFooter;

  return (
    <aside
      id="sticky-reader-cta"
      className={`sticky-reader-cta ${shouldRender ? 'is-visible' : ''}`}
      aria-label="Reader discount offer"
    >
      <div className="sticky-cta-inner">
        <a
          href={promoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-cta-link"
          id="sticky-cta-link"
        >
          <span className="sticky-cta-text">{text}</span>
          <ArrowUpRightIcon size={14} className="sticky-link-icon" />
        </a>
      </div>
    </aside>
  );
}
