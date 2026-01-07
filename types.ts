export type PetType = 'Dog' | 'Cat' | 'Farm' | 'Reptile';

export interface NavLink {
  label: string; // e.g. "Previous Guide" or "Next Step"
  title: string; // e.g. "Landing Your First Sit"
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
  body?: string;
  sortOrder?: number;
  prevLink?: NavLink;
  nextLink?: NavLink;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
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
}

export interface TravelGuide {
  id: string;
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  body: string;
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
  description: string;
  body: string;
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
}

export interface ResourceCategory {
  title: string;
  items: ResourceItem[];
}

export interface SiteStrings {
  toolkitSectionTitle: string;
  toolkitSectionDescription: string;
  travelPromoTitle: string;
  travelPromoText: string;
  travelPromoLink: string;
  travelPromoBtn: string;
}
