import { ReactNode } from 'react';

export type PetType = 'Dog' | 'Cat' | 'Farm' | 'Reptile';

/**
 * GLOBAL CONFIGURATION CONSTANTS
 */
export const THS_DISCOUNT = '25%';
export const VISIBLE_DISCOUNT = '$20';
export const PF_DISCOUNT = '$1';
export const ROVER_DISCOUNT = '$20';

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
  slug: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  petType: PetType[];
  imageUrl?: string;
  sitDescription: string;
  body?: string | ReactNode;
  sortOrder?: number;
  prevLink?: NavLink;
  nextLink?: NavLink;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
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
}

export interface TravelGuide {
  id: string;
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  body: string | ReactNode;
  imageUrl: string;
  date?: string;
  sortOrder?: number;
  prevLink?: NavLink;
  nextLink?: NavLink;
  faqIds?: string[];
}

export interface ResourceItem {
  id: string;
  slug: string;
  name: string;
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
