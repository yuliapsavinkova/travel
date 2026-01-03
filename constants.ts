import { SiteStrings } from './types';
import { REFERRALS } from './data/referrals';

export * from './data/referrals';
export * from './data/reviews';
export * from './data/blog';
export * from './data/travel';

const now = new Date();
export const CURRENT_YEAR = now.getFullYear();
export const ACTIVE_YEAR =
  now.getMonth() === 11 && now.getDate() >= 25 ? CURRENT_YEAR + 1 : CURRENT_YEAR;
export const NEXT_YEAR = ACTIVE_YEAR + 1;

/**
 * GLOBAL SITE STATISTICS
 */
export const SITE_STATS = {
  sitsCount: '32',
  statesCount: '28',
  countriesCount: '37',
  clientRating: '5.0',
  satisfactionRate: '100%',
};

export const SITE_CONFIG = {
  name: 'Sitter Journey',
  tagline: 'Full-Time Traveler & Professional Steward',
  email: 'sitterjourney@gmail.com',
  socials: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
};

const thsReferral = REFERRALS[0].items[0];

export const GLOBAL_STRINGS: SiteStrings = {
  toolkitSectionTitle: 'Travel Essentials',
  toolkitSectionDescription:
    'The exact tools, connectivity, and memberships I rely on to maintain a professional standard while traveling full-time.',
  travelPromoTitle: 'Start Your Own Journey',
  travelPromoText: `Inspired to explore? Use my vetted link to join the TrustedHousesitters community. Claim your ${thsReferral.discountText} and start your own adventure.`,
  travelPromoLink: thsReferral.link,
  travelPromoBtn: thsReferral.discountText || 'Claim Discount',
};
