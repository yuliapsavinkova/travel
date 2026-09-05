'use client';

import { useEffect } from 'react';
import {
  detectReferralPartner,
  detectSocialNetwork,
  trackInArticleReferralClick,
  trackPortfolioVisit,
  trackSocialClick,
} from '../utils/analytics';

/**
 * Global client-side analytics listener.
 * Automatically monitors clicks on in-article referral, affiliate, portfolio, and social links
 * without needing manual tracking code in every content file.
 */
export default function AnalyticsTracker() {
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

      // Skip the floating reader CTA (it has its own dedicated handler)
      if (anchor.id === 'sticky-cta-link' || anchor.closest('#sticky-reader-cta')) {
        return;
      }

      // Extract article title from page heading or document title
      const headingEl = document.querySelector('h1.detail-title-text, h1');
      const articleTitle =
        headingEl?.textContent?.trim() ||
        document.title.replace(/\s*\|.*$/, '').trim();

      // Check if this link points to Yulia's Professional Portfolio
      if (href.includes('yulia.sitterjourney.com')) {
        const isFooter = Boolean(anchor.closest('#site-footer, footer'));
        const isProse = Boolean(anchor.closest('.prose-content, .detail-rich-content, article'));
        const linkPlacement = isFooter ? 'footer' : isProse ? 'about_page' : 'general';
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

      // Check if this link is a social profile link outside the standard SocialMediaIcons
      const { network, isSocial } = detectSocialNetwork(href);
      if (isSocial) {
        const isFooter = Boolean(anchor.closest('#site-footer, footer'));
        const isHero = Boolean(anchor.closest('.hero-socials-wrapper, header'));
        const isProse = Boolean(anchor.closest('.prose-content, .detail-rich-content, article'));
        const placement = isFooter ? 'footer' : isHero ? 'hero' : isProse ? 'in_article' : 'general';

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
      const isInsideProse = Boolean(anchor.closest('.prose-content, .detail-rich-content, article'));
      const isInsideCallout = Boolean(anchor.closest('.prose-accent-box, .hero-disclosure-bar'));
      const linkPlacement = isInsideCallout
        ? 'resource_callout'
        : isInsideProse
          ? 'in_article'
          : 'general';

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
        articleTitle,
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
