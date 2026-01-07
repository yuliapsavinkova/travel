import { BlogPost } from '../types';
import { firstHouseSitContent } from './articles/ths/first-house-sit';
import { thsProfileTipsContent } from './articles/ths/profile-tips';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'get-your-first-house-sit',
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
    nextLink: {
      label: 'Next',
      title: 'Profile Tips',
      href: '/blog/stellar-trustedhousesitters-profile-tips',
    },
  },
  {
    id: '2',
    slug: 'stellar-trustedhousesitters-profile-tips',
    title: 'TrustedHousesitters Profile Tips: How Sitters Get More Invites',
    excerpt:
      'Learn how to create a trusted TrustedHousesitters sitter profile that gets more invites. Photo rules, profile tips, reviews, and what owners actually look for.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Profile Strategy',
    sortOrder: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop',
    ctaLabel: 'Get 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: thsProfileTipsContent,
    faqIds: [
      'ths-photo-aspect',
      'ths-reviews-starting',
      'ths-profile-length',
      'ths-owner-priorities',
      'ths-cleanliness-mention',
      'ths-long-term-preference',
    ],
    prevLink: {
      label: 'Previous',
      title: 'Your First Sit',
      href: '/blog/get-your-first-house-sit',
    },
  },
];
