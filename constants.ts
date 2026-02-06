import { SiteStrings, REFERRALS } from './types';

// Domain registries
import { BLOG_POSTS } from './data/blog/blog';
import { TRAVEL_GUIDES } from './data/travel/travel';
import { ALL_RESOURCES, RESOURCES } from './data/resources/resources';

export { REFERRALS, BLOG_POSTS, TRAVEL_GUIDES, ALL_RESOURCES, RESOURCES };

export const IS_DEV = process.env.NODE_ENV === 'development';

const now = new Date();
export const CURRENT_YEAR = now.getFullYear();
export const ACTIVE_YEAR =
  now.getMonth() === 11 && now.getDate() >= 25 ? CURRENT_YEAR + 1 : CURRENT_YEAR;
export const NEXT_YEAR = ACTIVE_YEAR + 1;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  ...(IS_DEV
    ? [
        { label: 'Map', href: '/roadmap' },
        { label: 'Pins', href: '/pinterest' },
        { label: 'Expenses', href: '/blog/can-you-really-travel-for-free-house-sitting-math' },
      ]
    : []),
  { label: 'About', href: '/about' },
];

/**
 * GLOBAL SITE STATISTICS
 */
export const SITE_STATS = {
  statesCount: '28',
  countriesCount: '42',
  clientRating: '5.0',
  satisfactionRate: '100%',
};

export const SITE_CONFIG = {
  name: 'Sitter Journey',
  tagline: 'Full-Time Traveler',
  missionStart: 'May 2025',
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
