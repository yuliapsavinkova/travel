declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export interface AnalyticsEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}

/**
 * Dispatches a custom event to Google Analytics (gtag.js) and dataLayer.
 * Safe to call in browser environments, does nothing during SSR.
 */
export function trackEvent(eventName: string, params?: AnalyticsEventParams): void {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Analytics] Failed to track event:', error);
    }
  }
}

export interface ReferralPartnerInfo {
  partner: string;
  isReferral: boolean;
}

/**
 * Detects if a URL is a known referral or partner link and returns its brand name.
 */
export function detectReferralPartner(url: string): ReferralPartnerInfo {
  if (!url) return { partner: 'Unknown', isReferral: false };
  const lower = url.toLowerCase();

  if (lower.includes('trustedhousesitters.com')) {
    return { partner: 'TrustedHousesitters', isReferral: true };
  }
  if (lower.includes('rover.com')) {
    return { partner: 'Rover', isReferral: true };
  }
  if (lower.includes('visible.com')) {
    return { partner: 'Visible Wireless', isReferral: true };
  }
  if (lower.includes('planetfitness.com')) {
    return { partner: 'Planet Fitness', isReferral: true };
  }
  if (lower.includes('yulia.sitterjourney.com')) {
    return { partner: 'Yulia Portfolio', isReferral: true };
  }

  // General check for referral/affiliate URL patterns
  if (
    lower.includes('/refer/') ||
    lower.includes('referralcode=') ||
    lower.includes('refer-a-friend') ||
    lower.includes('ref=')
  ) {
    return { partner: 'Affiliate Partner', isReferral: true };
  }

  return { partner: 'External', isReferral: false };
}

/**
 * Dedicated tracker for floating / sticky CTA button clicks.
 * Includes the article title and slug so you can see exactly which article generated the click.
 */
export function trackFloatingCtaClick(options: {
  text: string;
  promoLink: string;
  ctaId?: string;
  articleTitle?: string;
  articleSlug?: string;
}): void {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentTitle = typeof document !== 'undefined' ? document.title : '';
  const currentHref = typeof window !== 'undefined' ? window.location.href : '';

  const cleanArticleTitle =
    options.articleTitle ||
    (typeof document !== 'undefined'
      ? document.querySelector('h1.detail-title-text, h1')?.textContent?.trim() ||
        document.title.replace(/\s*\|.*$/, '').trim()
      : 'Unknown Article');

  const slug =
    options.articleSlug ||
    currentPath.replace(/^\/(blog|travel|resources)\//, '').replace(/\/$/, '') ||
    'unknown';

  const eventPayload = {
    event_category: 'engagement',
    // Include the article title in event_label for immediate visibility in standard GA4 reports
    event_label: `${cleanArticleTitle} — Floating CTA: ${options.text}`,
    article_title: cleanArticleTitle,
    article_slug: slug,
    link_url: options.promoLink,
    link_id: options.ctaId || 'sticky-cta-link',
    cta_position: 'floating_bottom',
    cta_type: 'floating_reader_bar',
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
  };

  // Primary custom event for floating CTA
  trackEvent('floating_cta_click', eventPayload);

  // Standard CTA conversion event
  trackEvent('cta_click', {
    ...eventPayload,
    event_category: 'conversion',
  });
}

/**
 * Dedicated tracker for in-article referral link clicks.
 * Records the exact article, partner, clicked text, and destination URL.
 */
export function trackInArticleReferralClick(options: {
  linkUrl: string;
  linkText: string;
  partner?: string;
  articleTitle?: string;
  articleSlug?: string;
  linkPlacement?: 'in_article' | 'resource_callout' | 'general';
}): void {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentTitle = typeof document !== 'undefined' ? document.title : '';
  const currentHref = typeof window !== 'undefined' ? window.location.href : '';

  const cleanArticleTitle =
    options.articleTitle ||
    (typeof document !== 'undefined'
      ? document.querySelector('h1.detail-title-text, h1')?.textContent?.trim() ||
        document.title.replace(/\s*\|.*$/, '').trim()
      : 'Unknown Article');

  const slug =
    options.articleSlug ||
    currentPath.replace(/^\/(blog|travel|resources)\//, '').replace(/\/$/, '') ||
    'unknown';

  const partnerName = options.partner || detectReferralPartner(options.linkUrl).partner;
  const cleanLinkText = (options.linkText || 'Referral Link').trim().slice(0, 80);

  const eventPayload = {
    event_category: 'referral',
    // Event label with article title and partner for clear visibility in GA4
    event_label: `${cleanArticleTitle} — In-Article: ${partnerName} ("${cleanLinkText}")`,
    partner: partnerName,
    link_text: cleanLinkText,
    link_url: options.linkUrl,
    link_placement: options.linkPlacement || 'in_article',
    article_title: cleanArticleTitle,
    article_slug: slug,
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
  };

  // Dedicated in-article referral event
  trackEvent('in_article_referral_click', eventPayload);

  // General referral conversion event
  trackEvent('referral_click', {
    ...eventPayload,
    event_category: 'conversion',
  });
}

/**
 * Dedicated tracker for contact form submissions.
 * Fires `contact_form_submit` as requested, plus GA4 recommended `generate_lead`.
 */
export function trackContactFormSubmit(options?: {
  formName?: string;
  pagePath?: string;
  pageTitle?: string;
}): void {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : (options?.pagePath || '');
  const currentTitle = typeof document !== 'undefined' ? document.title : (options?.pageTitle || '');
  const currentHref = typeof window !== 'undefined' ? window.location.href : '';
  const formName = options?.formName || 'Global Contact Modal';

  const eventPayload = {
    event_category: 'lead',
    event_label: `Contact Form Submit on ${currentPath || 'Site'}`,
    form_name: formName,
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
  };

  // Primary custom event
  trackEvent('contact_form_submit', eventPayload);

  // Standard recommended GA4 event for conversions and lead generation
  trackEvent('generate_lead', {
    ...eventPayload,
    event_category: 'conversion',
    value: 1,
  });
}

/**
 * Dedicated tracker for visits out to the Professional Pet Sitting Portfolio (yulia.sitterjourney.com).
 * Fires `portfolio_visit` and `professional_portfolio_click`.
 */
export function trackPortfolioVisit(options: {
  linkUrl: string;
  linkText?: string;
  linkPlacement?: 'footer' | 'about_page' | 'in_article' | 'general';
  articleTitle?: string;
}): void {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentTitle = typeof document !== 'undefined' ? document.title : '';
  const currentHref = typeof window !== 'undefined' ? window.location.href : '';

  const cleanArticleTitle =
    options.articleTitle ||
    (typeof document !== 'undefined'
      ? document.querySelector('h1.detail-title-text, h1')?.textContent?.trim() ||
        document.title.replace(/\s*\|.*$/, '').trim()
      : 'General Site');

  const placement = options.linkPlacement || 'general';
  const cleanLinkText = (options.linkText || 'Professional Portfolio').trim().slice(0, 80);

  const eventPayload = {
    event_category: 'portfolio',
    event_label: `Professional Portfolio Visit: ${cleanLinkText} (${placement}) from ${cleanArticleTitle}`,
    destination_url: options.linkUrl,
    link_text: cleanLinkText,
    link_placement: placement,
    referring_page: cleanArticleTitle,
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
  };

  // Primary event for portfolio visits
  trackEvent('portfolio_visit', eventPayload);

  // Descriptive event alias
  trackEvent('professional_portfolio_click', {
    ...eventPayload,
    event_category: 'conversion',
  });
}

export interface SocialNetworkInfo {
  network: string;
  isSocial: boolean;
}

/**
 * Detects if a URL points to a social network profile or email action.
 */
export function detectSocialNetwork(url: string): SocialNetworkInfo {
  if (!url) return { network: 'Unknown', isSocial: false };
  const lower = url.toLowerCase();

  if (lower.includes('instagram.com')) {
    return { network: 'Instagram', isSocial: true };
  }
  if (lower.includes('facebook.com') || lower.includes('fb.com')) {
    return { network: 'Facebook', isSocial: true };
  }
  if (lower.includes('tiktok.com')) {
    return { network: 'TikTok', isSocial: true };
  }
  if (lower.includes('twitter.com') || lower.includes('x.com')) {
    return { network: 'X / Twitter', isSocial: true };
  }
  if (lower.includes('youtube.com') || lower.includes('youtu.be')) {
    return { network: 'YouTube', isSocial: true };
  }
  if (lower.includes('pinterest.com')) {
    return { network: 'Pinterest', isSocial: true };
  }
  if (lower.startsWith('mailto:')) {
    return { network: 'Email', isSocial: true };
  }

  return { network: 'External', isSocial: false };
}

/**
 * Dedicated tracker for social profile clicks.
 * Fires `social_profile_click` and standard `social_click`.
 */
export function trackSocialClick(options: {
  network: string;
  linkUrl: string;
  placement?: 'hero' | 'footer' | 'in_article' | 'about_page' | 'general' | string;
  pagePath?: string;
  pageTitle?: string;
}): void {
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : options.pagePath || '';
  const currentTitle =
    typeof document !== 'undefined' ? document.title : options.pageTitle || '';
  const currentHref = typeof window !== 'undefined' ? window.location.href : '';
  const placement = options.placement || 'general';

  const eventPayload = {
    event_category: 'social',
    // High-visibility label for GA4 reports
    event_label: `Social Profile Click: ${options.network} (${placement}) from ${currentPath || 'Site'}`,
    social_network: options.network,
    link_url: options.linkUrl,
    link_placement: placement,
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
  };

  // Primary event name as requested
  trackEvent('social_profile_click', eventPayload);

  // Standard recommended/engagement event
  trackEvent('social_click', {
    ...eventPayload,
    event_category: 'engagement',
  });
}


