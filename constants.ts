import { SiteStrings, REFERRALS } from './types';

export { REFERRALS };

// Explicit imports from data files
import { RESOURCES, ALL_RESOURCES } from './data/resources';
import { BLOG_POSTS } from './data/blog';
import { TRAVEL_GUIDES } from './data/travel';

export { RESOURCES, ALL_RESOURCES, BLOG_POSTS, TRAVEL_GUIDES };

const now = new Date();
export const CURRENT_YEAR = now.getFullYear();
export const ACTIVE_YEAR =
  now.getMonth() === 11 && now.getDate() >= 25 ? CURRENT_YEAR + 1 : CURRENT_YEAR;
export const NEXT_YEAR = ACTIVE_YEAR + 1;

/**
 * GLOBAL NAVIGATION CONFIGURATION
 */
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

/**
 * GLOBAL SITE STATISTICS
 * Removed hardcoded sitsCount to avoid weekly manual updates.
 */
export const SITE_STATS = {
  statesCount: '28',
  countriesCount: '37',
  clientRating: '5.0',
  satisfactionRate: '100%',
};

export const SITE_CONFIG = {
  name: 'Sitter Journey',
  tagline: 'Full-Time Traveler',
  email: 'sitterjourney@gmail.com',
  googleAnalyticsId: 'G-R0920QKYXK',
  socials: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
};

export const GLOBAL_STRINGS: SiteStrings = {
  resourcesSectionTitle: 'Resources',
  resourcesSectionDescription: 'The tools and services I use while traveling full-time.',
  travelPromoTitle: 'Join Me',
  travelPromoText: `Ready to travel? Use my verified TrustedHousesitters discount link to get ${REFERRALS.THS.discount} your membership.`,
  travelPromoLink: REFERRALS.THS.link,
  travelPromoBtn: `Get ${REFERRALS.THS.discount} Now`,
};
