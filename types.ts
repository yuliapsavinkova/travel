import { ReactNode } from 'react';

export type PetType = 'Dog' | 'Cat' | 'Farm' | 'Reptile';

/**
 * ROADMAP METADATA
 * Used for internal content tracking and the technical dictionary.
 */
export interface RoadmapMetadata {
  clusterId: 'ths-core' | 'operational-strategy' | 'safety-support' | 'nomad-toolkit' | 'legal';
  linksTo?: string[]; // Slugs this article links to
  backbone?: string; // Internal notes on purpose/goal of this piece
  status?: 'published' | 'draft' | 'needs-update';
}

/**
 * SINGLE SOURCE OF TRUTH FOR REFERRALS
 */
export const REFERRALS = {
  THS: {
    link: 'https://trustedhousesitters.com/refer/raf943607',
    discount: '25% Off',
    label: 'Claim 25% Off Membership',
    cta: '25% Off Membership',
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

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  navTitle?: string;
  subtitle?: string;
  excerpt: string;
  body: string | ReactNode;
  date: string;
  category: string;
  imageUrl: string;
  location: string;
  sortOrder?: number;
  ctaLink?: string;
  ctaLabel?: string;
  prevLink?: NavLink;
  nextLink?: NavLink;
  faqIds?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  roadmap?: RoadmapMetadata; // Technical dictionary info
}

export interface TravelGuide {
  id: string;
  slug: string;
  title: string;
  navTitle?: string;
  location: string;
  excerpt: string;
  body: string | ReactNode;
  imageUrl: string;
  date?: string;
  sortOrder?: number;
  prevLink?: NavLink;
  nextLink?: NavLink;
  faqIds?: string[];
  roadmap?: RoadmapMetadata;
}

export interface ResourceItem {
  id: string;
  slug: string;
  name: string;
  navTitle?: string;
  subtitle?: string;
  description: string;
  body: string | ReactNode;
  date?: string;
  discountText?: string;
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
  roadmap?: RoadmapMetadata;
}

export interface ResourceCategory {
  title: string;
  items: ResourceItem[];
}

export interface SiteStrings {
  resourcesSectionTitle: string;
  resourcesSectionDescription: string;
  travelPromoTitle: string;
  travelPromoText: string;
  travelPromoLink: string;
  travelPromoBtn: string;
}
