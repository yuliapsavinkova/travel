import { REFERRALS, sits_completed } from './types';

export const TRUSTED_HOUSESITTERS_REF_LINK = REFERRALS.THS.link;

export const CURRENT_YEAR = new Date().getFullYear();

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/sitters-guides' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Resources', href: '/resources' },
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
  emailParts: {
    user: 'sitterjourney',
    domain: 'gmail.com',
  },
  googleAnalyticsId: 'G-R0920QKYXK',
  socials: {
    instagram: 'https://instagram.com/sitterjourney',
    facebook: 'https://facebook.com/sitterjourney',
    tiktok: 'https://tiktok.com/@sitterjourney',
    pinterest: 'https://pinterest.com/sitterjourney',
  },
};
