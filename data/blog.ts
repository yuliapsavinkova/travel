import { BlogPost } from '../types';
import { content as firstHouseSitContent } from './articles/how-to-get-your-first-house-sit-no-reviews';
import { content as thsProfileTipsContent } from './articles/trusted-housesitters-profile-tips-how-to-secure-more-sits';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-get-your-first-house-sit-no-reviews',
    title: 'How to Get Your First House Sit (Even With No Reviews)',
    excerpt:
      'The exact framework I used to go from zero reviews to a professional portfolio of ' +
      'verified stays.',
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
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
    seoTitle: 'How to Get Your First House Sit with No Reviews | Sitter Journey',
    seoDescription:
      'Proven strategy to land your first house sitting job on TrustedHousesitters ' +
      'without previous reviews. Step-by-step guide for beginners.',
    seoKeywords: [
      'how to get first house sit',
      'trusted-housesitters no reviews',
      'house sitting for beginners',
      'professional house sitter',
    ],
  },
  {
    id: '2',
    slug: 'trusted-housesitters-profile-tips-how-to-secure-more-sits',
    title: 'TrustedHousesitters Profile Tips: How to Secure More Sits',
    excerpt:
      'Master your TrustedHousesitters profile with expert guidance. Learn photo rules, ' +
      'strategy, and how to build immediate trust with homeowners.',
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
      href: '/blog/how-to-get-your-first-house-sit-no-reviews',
    },
    seoTitle: 'TrustedHousesitters Profile Tips: How to Secure More Sits | Sitter Journey',
    seoDescription:
      'Master your TrustedHousesitters profile with these expert tips. Learn ' +
      'photo requirements, writing strategies, and how to build trust with owners.',
    seoKeywords: [
      'trusted-housesitters profile tips',
      'secure more house sits',
      'trusted-housesitters photos',
      'house sitter profile guide',
    ],
  },
];
