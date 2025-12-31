
export type PetType = 'Dog' | 'Cat' | 'Farm' | 'Reptile';

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
  body?: string; // MDX content will live here
  tags: string[];
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
}

export interface TravelGuide {
  id: string;
  slug: string;
  title: string;
  location: string;
  excerpt: string;
  body: string;
  imageUrl: string;
  tags: string[];
}

export interface ReferralCategory {
  title: string;
  items: ReferralItem[];
}

export interface ReferralItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  body: string;
  discountText?: string;
  link: string;
  icon: string;
  imageUrl?: string;
  promoNote?: string; // Configurable referral message
}

export interface SiteStrings {
  toolkitSectionTitle: string;
  toolkitSectionDescription: string;
  travelPromoTitle: string;
  travelPromoText: string;
  travelPromoLink: string;
  travelPromoBtn: string;
}
