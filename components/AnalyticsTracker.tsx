'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import {
  detectReferralPartner,
  detectSocialNetwork,
  trackInArticleReferralClick,
  trackPageView,
  trackPortfolioVisit,
  trackSocialClick,
} from '../utils/analytics';

/**
 * Global client-side analytics listener.
 * Tracks Next.js App Router soft navigations and automatically monitors clicks
 * on referral, affiliate, portfolio, and social links.
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString() ?? '';
  const previousUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const currentUrl = search ? `${pathname}?${search}` : pathname;
    if (!currentUrl) return;

    // Initial load is tracked by gtag('config', ...) in app/layout.tsx
    if (previousUrlRef.current === null) {
      previousUrlRef.current = currentUrl;
      return;
    }

    if (previousUrlRef.current === currentUrl) return;
    previousUrlRef.current = currentUrl;

    const timer = window.setTimeout(() => {
      trackPageView({
        pagePath: currentUrl,
        pageLocation: window.location.href,
        pageTitle: document.title,
      });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [pathname, search]);

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // Only process trusted user clicks (ignore synthetic / script triggers)
      if (event && !event.isTrusted) return;

      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Find the closest anchor element
      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor || !anchor.href) return;

      const href = anchor.href;

      if (anchor.id === 'mobile-referral-cta' || anchor.closest('#mobile-referral-bar')) {
        return;
      }

      // Extract article title from page heading or document title
      const headingEl = document.querySelector('h1.detail-title-text, h1');
      const articleTitle =
        headingEl?.textContent?.trim() || document.title.replace(/\s*\|.*$/, '').trim();

      // Check if this link points to Yulia's Professional Portfolio
      if (href.includes('yulia.sitterjourney.com')) {
        const isFooter = Boolean(anchor.closest('#site-footer, footer'));
        const isAboutPage = window.location.pathname === '/about';
        const isProse = Boolean(anchor.closest('.prose-content, .detail-rich-content, article'));
        const linkPlacement = isFooter
          ? 'footer'
          : isAboutPage
            ? 'about_page'
            : isProse
              ? 'in_article'
              : 'general';
        const linkText =
          anchor.textContent?.trim() ||
          anchor.getAttribute('aria-label') ||
          'House & Pet Sitting Services';

        trackPortfolioVisit({
          linkUrl: href,
          linkText,
          linkPlacement,
          articleTitle,
        });
        return;
      }

      // Check if this link is a social profile link
      const { network, isSocial } = detectSocialNetwork(href);
      if (isSocial) {
        const isFooter = Boolean(anchor.closest('#site-footer, footer'));
        const isHero = Boolean(anchor.closest('.hero-socials-wrapper, header'));
        const isAboutPage = window.location.pathname === '/about';
        const isProse = Boolean(anchor.closest('.prose-content, .detail-rich-content, article'));
        const placement = isFooter
          ? 'footer'
          : isHero
            ? 'hero'
            : isAboutPage
              ? 'about_page'
              : isProse
                ? 'in_article'
                : 'general';

        trackSocialClick({
          network,
          linkUrl: href,
          placement,
        });
        return;
      }

      // Check if this link points to a known referral or partner program
      const { partner, isReferral } = detectReferralPartner(href);
      if (!isReferral) return;

      // Determine placement context
      const isFooter = Boolean(anchor.closest('#site-footer, footer'));
      const isResourceCard = Boolean(anchor.closest('.card-internal-cta, .card-wrapper'));
      const isSidebarCallout = Boolean(anchor.closest('.detail-sidebar .sidebar-callout-card'));
      const isFaqCallout = Boolean(anchor.closest('.faq-archive-panel .sidebar-callout-card'));
      const isProseCallout = Boolean(anchor.closest('.prose-accent-box'));
      const isInsideProse = Boolean(
        anchor.closest('.prose-content, .detail-rich-content, article')
      );

      const linkPlacement = isFooter
        ? 'footer'
        : isResourceCard
          ? 'resource_card'
          : isSidebarCallout
            ? 'sidebar_callout'
            : isFaqCallout
              ? 'faq_callout'
              : isProseCallout
                ? 'resource_callout'
                : isInsideProse
                  ? 'in_article'
                  : 'general';

      const contextTitle = isResourceCard
        ? anchor.closest('.card-wrapper')?.querySelector('.card-title')?.textContent?.trim() ||
          articleTitle
        : articleTitle;

      // Link text or label
      const linkText =
        anchor.textContent?.trim() ||
        anchor.getAttribute('aria-label') ||
        anchor.getAttribute('title') ||
        partner;

      trackInArticleReferralClick({
        linkUrl: href,
        linkText,
        partner,
        articleTitle: contextTitle,
        linkPlacement,
      });
    };

    // Use capturing phase so we intercept before external tab triggers
    document.addEventListener('click', handleGlobalClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
