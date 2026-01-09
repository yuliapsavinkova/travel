import { BlogPost } from '../types';
import { content as firstHouseSitContent } from './articles/how-to-get-your-first-house-sit-no-reviews';
import { content as thsProfileTipsContent } from './articles/trusted-housesitters-profile-tips-how-to-secure-more-sits';
import { content as worthItContent } from './articles/is-trusted-housesitters-worth-it';
import { content as costLevelsContent } from './articles/trusted-housesitters-membership-cost-levels';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-get-your-first-house-sit-no-reviews',
    title: 'How to Get Your First House Sit (Even With No Reviews)',
    excerpt:
      'The exact framework I used to go from zero reviews to a professional portfolio of verified stays.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Strategy',
    sortOrder: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Offer: 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: firstHouseSitContent,
    faqIds: ['ths-beginner-difficulty', 'ths-reviews-starting', 'ths-internet-remote'],
    prevLink: {
      label: 'Previous',
      title: 'Membership Costs',
      href: '/blog/trusted-housesitters-membership-cost-levels',
    },
    nextLink: {
      label: 'Next',
      title: 'Profile Tips',
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
    seoTitle: 'How to Get Your First House Sit with No Reviews | Sitter Journey',
    seoDescription:
      'Land your first house sitting job on TrustedHousesitters without previous reviews. Step-by-step guide for beginners.',
  },
  {
    id: '2',
    slug: 'trusted-housesitters-profile-tips-how-to-secure-more-sits',
    title: 'TrustedHousesitters Profile Tips: How to Secure More Sits',
    excerpt:
      'Master your profile with expert guidance. Learn photo rules, strategy, and how to build immediate trust with homeowners.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Profile Strategy',
    sortOrder: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop',
    ctaLabel: 'Get 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: thsProfileTipsContent,
    faqIds: ['ths-photo-aspect', 'ths-cleanliness-mention', 'ths-profile-length'],
    prevLink: {
      label: 'Previous',
      title: 'Your First Sit',
      href: '/blog/how-to-get-your-first-house-sit-no-reviews',
    },
    nextLink: {
      label: 'Next',
      title: 'Is It Worth It?',
      href: '/blog/is-trusted-housesitters-worth-it-for-sitters',
    },
    seoTitle: 'TrustedHousesitters Profile Tips: How to Secure More Sits | Sitter Journey',
    seoDescription:
      'Master your TrustedHousesitters profile with these expert tips. Learn photo requirements and writing strategies.',
  },
  {
    id: '3',
    slug: 'is-trusted-housesitters-worth-it-for-sitters',
    title: 'Is TrustedHousesitters Worth It for Sitters? Honest Pros, Cons, and Real Costs',
    excerpt:
      'A deep dive into the costs, real savings, and pros/cons of being a professional house sitter.',
    date: 'January 2026',
    category: 'Review',
    location: 'Financial',
    sortOrder: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop',
    ctaLabel: 'Claim 25% Off Code',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: worthItContent,
    faqIds: ['best-platform-travel', 'ths-beginner-difficulty', 'ths-owner-priorities'],
    prevLink: {
      label: 'Previous',
      title: 'Profile Strategy',
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
    nextLink: {
      label: 'Next',
      title: 'Membership Costs',
      href: '/blog/trusted-housesitters-membership-cost-levels',
    },
    seoTitle: 'Is TrustedHousesitters Worth It for Sitters? Pros, Cons & Costs',
    seoDescription:
      'Is TrustedHousesitters worth it for sitters? We break down the math of how 2 nights pay for your annual membership plus real-world savings data.',
  },
  {
    id: '4',
    slug: 'trusted-housesitters-membership-cost-levels',
    title: 'Sitter Guide: TrustedHousesitters Membership Cost & Levels',
    excerpt:
      'Breaking down Basic, Standard, and Premium sitter memberships to find the right fit for your travel needs.',
    date: 'January 2026',
    category: 'Sitter Guide',
    location: 'Financial',
    sortOrder: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Claim 25% Off Code',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: costLevelsContent,
    faqIds: ['ths-long-term-preference', 'ths-owner-priorities', 'ths-internet-remote'],
    prevLink: {
      label: 'Previous',
      title: 'Is It Worth It?',
      href: '/blog/is-trusted-housesitters-worth-it-for-sitters',
    },
    nextLink: {
      label: 'Next',
      title: 'Your First Sit',
      href: '/blog/how-to-get-your-first-house-sit-no-reviews',
    },
    seoTitle: 'Sitter Membership Cost and Tiers | TrustedHousesitters Guide',
    seoDescription:
      'Comparing the different membership levels of TrustedHousesitters specifically for sitters. Find out which sitter plan is best for you.',
  },
];
