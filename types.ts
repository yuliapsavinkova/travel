import type { ReactNode } from 'react';

/**
 * SINGLE SOURCE OF TRUTH FOR REFERRALS & PROMOTIONS
 * Update THS_DISCOUNT_PERCENT here (e.g., 25, 30, 35) to update all CTA bars,
 * articles, FAQs, and price break-down math across the entire site in one place.
 */
export const THS_DISCOUNT_PERCENT = 30;
export const sits_completed = 41;

export const REFERRALS = {
  THS: {
    link: 'https://trustedhousesitters.com/refer/raf943607',
    rate: THS_DISCOUNT_PERCENT,
    ratePercent: `${THS_DISCOUNT_PERCENT}%`,
    discount: `${THS_DISCOUNT_PERCENT}% Off`,
    label: `Claim ${THS_DISCOUNT_PERCENT}% Off Membership`,
    cta: `${THS_DISCOUNT_PERCENT}% Off Membership`,
    stickyText: `Get ${THS_DISCOUNT_PERCENT}% off TrustedHousesitters Membership`,
  },

  ROVER: {
    link: 'https://www.rover.com/ambas-refer-a-friend/Q93GankN',
    discount: '$20 Credit',
    label: 'Claim $20 Rover Credit',
    cta: '$20 Sitter Credit',
  },
  VISIBLE: {
    link: 'https://www.visible.com/get/?66LWM29',
    discount: 'Save $20',
    label: 'Save $20 on Mobile Service',
    cta: 'Save $20 Now',
  },
  PF: {
    link: 'https://www.planetfitness.com/referrals?referralCode=LVX9KEAQ',
    discount: '$1 Down',
    label: 'Join for $1 Down',
    cta: '$1 Down Promo',
  },
};

/**
 * PROFESSIONAL HOUSESITTING SERVICES LINK
 */
export const YULIA_SITTER_JOURNEY = {
  link: 'https://yulia.sitterjourney.com/',
  display: 'yulia.sitterjourney.com',
};
export const YULIA_SITTER_JOURNEY_URL = YULIA_SITTER_JOURNEY.link;
export const YULIA_SITTER_JOURNEY_DISPLAY = YULIA_SITTER_JOURNEY.display;

export interface NavLink {
  label: string;
  title: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  link?: {
    label: string;
    href: string;
  };
}

export interface Review {
  id: string;
  ownerName: string;
  location: string;
  petNames: string;
  date: string;
  rating: number;
  content: string;
  imageUrl?: string;
}

type BlogAudience = 'Sitters' | 'Pet Parents' | 'Homeowners';

export type BlogTrack = 'sitters' | 'homeowners';

type BlogPillar = 'House Sitting' | 'Minimalism' | 'Destinations' | 'Freedom' | (string & {});

type MonthName =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

/** Standard human-readable date format (e.g., "November 23, 2026") */
type ContentDate = `${MonthName} ${number}, ${number}`;

export interface BlogPost {
  id: string;
  slug: string;
  track?: BlogTrack;
  pillar?: BlogPillar;
  topic?: string;
  title: string;
  navTitle?: string;
  subtitle?: string;
  excerpt: string;
  body: string | ReactNode;
  date?: ContentDate;
  updatedDate?: ContentDate;
  category: string;
  imageUrl: string;
  location: string;
  sortOrder?: number;
  ctaLink?: string;
  ctaLabel?: string;
  isAffiliate?: boolean;
  showStickyCta?: boolean;
  stickyCtaText?: string;
  prevLink?: NavLink;
  nextLink?: NavLink;
  faqIds?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  audience?: BlogAudience[];
  relatedSlugs?: string[];
}

export interface RelatedArticleItem {
  slug: string;
  title: string;
  imageUrl: string;
  href: string;
  category?: string;
}

export type BlogPostSummary = Omit<BlogPost, 'body'>;

export interface TravelGuide {
  id: string;
  slug: string;
  title: string;
  navTitle?: string;
  location: string;
  excerpt: string;
  body: string | ReactNode;
  imageUrl: string;
  date?: ContentDate;
  updatedDate?: ContentDate;
  sortOrder?: number;
  prevLink?: NavLink;
  nextLink?: NavLink;
  faqIds?: string[];
  relatedSlugs?: string[];
}

export interface ResourceItem {
  id: string;
  slug: string;
  name: string;
  navTitle?: string;
  subtitle?: string;
  description: string;
  body: string | ReactNode;
  date?: ContentDate;
  updatedDate?: ContentDate;
  discountText?: string;
  ctaLabel?: string;
  link: string;
  icon: string;
  imageUrl?: string;
  promoNote?: string;
  sortOrder?: number;
  prevLink?: NavLink;
  nextLink?: NavLink;
  faqIds?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  relatedSlugs?: string[];
}

export interface ResourceCategory {
  title: string;
  items: ResourceItem[];
}
