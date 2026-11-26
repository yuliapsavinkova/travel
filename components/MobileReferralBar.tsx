'use client';

import { type MouseEvent, useEffect, useRef, useState } from 'react';
import { REFERRALS } from '../types';
import { trackFloatingCtaClick } from '../utils/analytics';
import { ArrowUpRightIcon } from './Icons';

interface MobileReferralBarProps {
  badge?: string;
  title?: string;
  promoLink?: string;
  ctaLabel?: string;
  showAfterScroll?: number;
  articleTitle?: string;
  articleSlug?: string;
}

export default function MobileReferralBar({
  badge = 'Referral Offer',
  title = 'TrustedHousesitters',
  promoLink = REFERRALS.THS.link,
  ctaLabel = `Get ${REFERRALS.THS.discount}`,
  showAfterScroll = 280,
  articleTitle,
  articleSlug,
}: MobileReferralBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const lastClickRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    const checkVisibility = () => {
      if (!mediaQuery.matches) {
        setIsVisible(false);
        return;
      }

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsVisible(scrollY > showAfterScroll);

      const distanceFromBottom = documentHeight - (scrollY + windowHeight);
      setIsNearFooter(distanceFromBottom < 140);
    };

    const footerEl = document.getElementById('site-footer');
    let observer: IntersectionObserver | null = null;

    if (footerEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry) {
            setIsNearFooter(entry.isIntersecting);
          }
        },
        { rootMargin: '40px 0px 0px 0px', threshold: 0 }
      );
      observer.observe(footerEl);
    }

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    mediaQuery.addEventListener('change', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      mediaQuery.removeEventListener('change', checkVisibility);
      if (observer && footerEl) {
        observer.unobserve(footerEl);
      }
    };
  }, [showAfterScroll]);

  const shouldRender = isVisible && !isNearFooter;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event && !event.isTrusted) return;

    const now = Date.now();
    if (now - lastClickRef.current < 1500) return;
    lastClickRef.current = now;

    trackFloatingCtaClick({
      text: `${title}: ${ctaLabel}`,
      promoLink,
      ctaId: 'mobile-referral-cta',
      articleTitle,
      articleSlug,
    });
  };

  return (
    <aside
      id="mobile-referral-bar"
      className={`mobile-referral-bar ${shouldRender ? 'is-visible' : ''}`}
      aria-label="Referral offer"
    >
      <a
        id="mobile-referral-cta"
        href={promoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-referral-bar-link"
        onClick={handleClick}
        aria-label={`${title}, ${ctaLabel} (opens in a new tab)`}
      >
        <div className="mobile-referral-bar-inner">
          <div className="mobile-referral-meta">
            <span className="mobile-referral-badge">{badge}</span>
            <span className="mobile-referral-title">{title}</span>
          </div>

          <span className="btn-gold mobile-referral-cta" aria-hidden="true">
            <span>{ctaLabel}</span>
            <ArrowUpRightIcon size={12} />
          </span>
        </div>
      </a>
    </aside>
  );
}
