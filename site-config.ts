import { REFERRALS, type SiteStrings, sits_completed } from './types';

export const TRUSTED_HOUSESITTERS_REF_LINK = REFERRALS.THS.link;

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
  { label: 'About', href: '/about' },
];

export const SITE_STATS = {
  statesCount: '28',
  countriesCount: '42',
  sitsCompleted: String(sits_completed),
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
    instagram: 'https://instagram.com/sitterjourney',
    facebook: 'https://facebook.com/sitterjourney',
    tiktok: 'https://tiktok.com/@sitterjourney',
    pinterest: 'https://pinterest.com/sitterjourney',
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
