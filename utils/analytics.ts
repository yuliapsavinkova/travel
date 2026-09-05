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

// In-memory cache to prevent rapid duplicate events within 800ms (e.g. accidental double-clicks)
const recentEvents = new Map<string, number>();

/**
 * Dispatches a single canonical event to Google Analytics (gtag.js) and dataLayer.
 * Safe to call in browser environments; no-ops during SSR.
 */
export function trackEvent(eventName: string, params?: AnalyticsEventParams): void {
  if (typeof window === 'undefined') return;

  // Deduplicate identical events triggered in rapid succession (< 800ms)
  const dedupeKey = `${eventName}:${params?.link_url || params?.form_name || params?.event_label || ''}`;
  const now = Date.now();
  const lastTime = recentEvents.get(dedupeKey);
  if (lastTime && now - lastTime < 800) {
    return;
  }
  recentEvents.set(dedupeKey, now);

  // Prune cache if it grows
  if (recentEvents.size > 40) {
    for (const [key, timestamp] of recentEvents.entries()) {
      if (now - timestamp > 4000) {
        recentEvents.delete(key);
      }
    }
  }

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
 * Detects if a URL is a known referral or partner program and returns its brand name.
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

  // General check for referral / affiliate URL query patterns
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

export interface SocialNetworkInfo {
  network: string;
  isSocial: boolean;
}

/**
 * Detects if a URL points to a social network profile or email link.
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
 * 1. FLOATING READER CTA CLICK
 * Triggered when a reader clicks the sticky discount bar at the bottom of articles.
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

  trackEvent('floating_cta_click', {
    event_category: 'conversion',
    event_label: `${cleanArticleTitle} — Floating CTA: ${options.text}`,
    cta_text: options.text,
    link_url: options.promoLink,
    link_id: options.ctaId || 'sticky-cta-link',
    link_placement: 'floating_reader_bar',
    article_title: cleanArticleTitle,
    article_slug: slug,
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
    outbound: true,
  });
}

/**
 * 2. IN-ARTICLE REFERRAL CLICK
 * Triggered when a reader clicks a referral or affiliate partner link inside an article or review.
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

  trackEvent('in_article_referral_click', {
    event_category: 'referral',
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
    outbound: true,
  });
}

/**
 * 3. CONTACT FORM SUBMISSION
 * Triggered when a visitor submits the contact message modal.
 */
export function trackContactFormSubmit(options?: {
  formName?: string;
  pagePath?: string;
  pageTitle?: string;
}): void {
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : options?.pagePath || '';
  const currentTitle =
    typeof document !== 'undefined' ? document.title : options?.pageTitle || '';
  const currentHref = typeof window !== 'undefined' ? window.location.href : '';
  const formName = options?.formName || 'Global Contact Modal';

  trackEvent('contact_form_submit', {
    event_category: 'lead',
    event_label: `Contact Form Submit on ${currentPath || 'Site'}`,
    form_name: formName,
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
    value: 1,
  });
}

/**
 * 4. PROFESSIONAL PORTFOLIO VISIT
 * Triggered when a reader clicks out to Yulia's Pet Sitting Portfolio (yulia.sitterjourney.com).
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

  trackEvent('portfolio_visit', {
    event_category: 'portfolio',
    event_label: `Portfolio Visit: ${cleanLinkText} (${placement}) from ${cleanArticleTitle}`,
    destination_url: options.linkUrl,
    link_url: options.linkUrl,
    link_text: cleanLinkText,
    link_placement: placement,
    referring_page: cleanArticleTitle,
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
    outbound: true,
  });
}

/**
 * 5. SOCIAL PROFILE CLICK
 * Triggered when a reader clicks an Instagram, Facebook, TikTok, or Email link.
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

  trackEvent('social_profile_click', {
    event_category: 'social',
    event_label: `Social Click: ${options.network} (${placement}) from ${currentPath || 'Site'}`,
    social_network: options.network,
    link_url: options.linkUrl,
    link_placement: placement,
    page_location: currentHref,
    page_path: currentPath,
    page_title: currentTitle,
    outbound: true,
  });
}
