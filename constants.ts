import { SiteStrings, THS_DISCOUNT } from './types';
import { RESOURCES } from './data/resources';

export * from './data/resources';
export * from './data/reviews';
export * from './data/blog';
export * from './data/travel';

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
  // { label: 'Stays', href: '/stays' },
  // { label: 'Travel', href: '/travel' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

/**
 * GLOBAL SITE STATISTICS
 */
export const SITE_STATS = {
  sitsCount: '16',
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

const thsResource = RESOURCES[0].items[0];

export const GLOBAL_STRINGS: SiteStrings = {
  resourcesSectionTitle: 'Resources',
  resourcesSectionDescription: 'The tools and services I use while traveling full-time.',
  travelPromoTitle: 'Join Me',
  travelPromoText: `Ready to travel? Use my verified TrustedHousesitters discount code to get ${THS_DISCOUNT} off your membership.`,
  travelPromoLink: thsResource.link,
  travelPromoBtn: `Get ${THS_DISCOUNT} Discount`,
};
