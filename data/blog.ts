import { BlogPost } from '../types';
import { content as firstHouseSitContent } from './articles/how-to-get-your-first-house-sit-no-reviews';
import { content as thsProfileTipsContent } from './articles/trusted-housesitters-profile-tips-how-to-secure-more-sits';
import { content as worthItContent } from './articles/is-trusted-housesitters-worth-it';
import { content as mathContent } from './articles/can-you-really-travel-for-free-house-sitting-math';
import { content as costLevelsContent } from './articles/trusted-housesitters-membership-cost-levels';
import { content as rejectionReasonsContent } from './articles/why-trusted-housesitters-applications-get-rejected';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '5',
    slug: 'why-trusted-housesitters-applications-get-rejected',
    title: 'Top Reasons Why Trusted-Housesitters Applications Get Rejected',
    excerpt:
      'Rejections happen all the time. Learn the fixable and unfixable reasons to move on and succeed.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Strategy',
    sortOrder: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2070&auto=format&fit=crop',
    ctaLabel: 'Claim 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: rejectionReasonsContent,
    faqIds: ['ths-rejection-personal', 'ths-rejection-fix', 'ths-rejection-common'],
    prevLink: {
      label: 'Previous',
      title: 'Membership Costs',
      href: '/blog/trusted-housesitters-membership-cost-levels',
    },
    nextLink: {
      label: 'Next',
      title: 'Your First Sit',
      href: '/blog/how-to-get-your-first-house-sit-no-reviews',
    },
    seoTitle: 'Why Trusted-Housesitters Applications Get Rejected | Rejection Tips',
    seoDescription:
      'Discover why Trusted-Housesitters applications get declined. Learn the psychological reasons owners pick sitters and how to beat the 5-app rule.',
    seoKeywords: [
      'ths rejection reasons',
      'trustedhousesitters 5 app rule',
      'house sitting competition',
      'sitter application tips',
      'how to get a house sit',
      'trusted housesitters review 2026',
      'nomad lifestyle strategy',
    ],
  },
  {
    id: '1',
    slug: 'how-to-get-your-first-house-sit-no-reviews',
    title: 'How to Get Your First House Sit (Even With No Reviews)',
    excerpt: 'Proven tips on how to go from zero reviews to getting accepted for your first sit',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Strategy',
    sortOrder: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Offer: 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: firstHouseSitContent,
    faqIds: ['ths-beginner-difficulty', 'ths-reviews-starting', 'travel-experience-needed'],
    prevLink: {
      label: 'Previous',
      title: 'Handling Rejections',
      href: '/blog/why-trusted-housesitters-applications-get-rejected',
    },
    nextLink: {
      label: 'Next',
      title: 'Profile Tips',
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
    seoTitle: 'How to Get Your First House Sit with No Reviews | Sitter Journey',
    seoDescription:
      'Step-by-step guide to landing your first house sit on TrustedHousesitters without reviews. Learn how to choose locations and cats over dogs.',
    seoKeywords: [
      'first house sit tips',
      'trustedhousesitters no reviews',
      'solo female travel hacks',
      'how to build a housesitting profile',
      'nomad lifestyle for beginners',
      'cat sitting travel',
      'house sitting strategies',
    ],
  },
  {
    id: '2',
    slug: 'trusted-housesitters-profile-tips-how-to-secure-more-sits',
    title: 'Trusted-Housesitters Profile Tips: How to Secure More Sits',
    excerpt: 'Master your profile with practical tips, including photo rules and proven examples.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Profile Strategy',
    sortOrder: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop',
    ctaLabel: 'Get 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: thsProfileTipsContent,
    faqIds: ['ths-photo-aspect', 'ths-profile-length', 'trusted-profile-tips'],
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
    seoTitle: 'TrustedHousesitters Profile Tips | How to Build a 5-Star Profile',
    seoDescription:
      'Master your TrustedHousesitters profile with these photo and bio tips. Learn about the 3:2 photo aspect ratio and trust-building language.',
    seoKeywords: [
      'ths profile photos',
      'house sitting bio examples',
      'trust building tips',
      'housesitting for digital nomads',
      'professional housesitter profile',
      'trusted housesitters review',
      'sitter profile guide',
    ],
  },
  {
    id: '3',
    slug: 'is-trusted-housesitters-worth-it-for-sitters',
    title: 'Is Trusted-Housesitters Worth It for Sitters? Honest Pros, Cons, and Real Costs',
    excerpt:
      'A deep dive into the costs, real savings, and pros/cons of house sitting while traveling.',
    date: 'January 2026',
    category: 'Review',
    location: 'Financial',
    sortOrder: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop',
    ctaLabel: 'Claim 25% Off Code',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: worthItContent,
    faqIds: ['ths-membership-worth-it', 'travel-savings', 'best-platform-travel'],
    prevLink: {
      label: 'Previous',
      title: 'Profile Strategy',
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
    nextLink: {
      label: 'Next',
      title: 'Free Travel Math',
      href: '/blog/can-you-really-travel-for-free-house-sitting-math',
    },
    seoTitle: 'Is TrustedHousesitters Worth It? 2026 Sitter Review & Savings',
    seoDescription:
      'An honest review of TrustedHousesitters for sitters. Is the membership fee worth the travel savings? We break down the 2-night breakeven math.',
    seoKeywords: [
      'trustedhousesitters pros and cons',
      'house sitting review 2026',
      'is ths membership worth it',
      'free travel accommodation',
      'sitter experience review',
      'trusted housesitters legit',
      'long term travel housing',
    ],
  },
  {
    id: '6',
    slug: 'can-you-really-travel-for-free-house-sitting-math',
    title: 'Can You Really Travel for Free with House Sitting? Real Examples & Math',
    excerpt:
      'Is "free travel" a scam? We look at real numbers, and the hidden costs of house sitting.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Financial',
    sortOrder: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    ctaLabel: 'Claim 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: mathContent,
    faqIds: ['travel-savings', 'travel-hidden-costs', 'ths-membership-worth-it'],
    prevLink: {
      label: 'Previous',
      title: 'Is It Worth It?',
      href: '/blog/is-trusted-housesitters-worth-it-for-sitters',
    },
    nextLink: {
      label: 'Next',
      title: 'Membership Costs',
      href: '/blog/trusted-housesitters-membership-cost-levels',
    },
    seoTitle: 'Can You Really Travel for Free? House Sitting Math & Reality',
    seoDescription:
      'Discover the truth about "free travel." We break down house sitting itineraries and math for nomads saving over $30k per year.',
    seoKeywords: [
      'free travel math',
      'house sitting costs',
      'trustedhousesitters worth it',
      'nomad budget breakdown',
      'how to travel for free',
      'financial independence travel',
      'save on accommodation',
    ],
  },
  {
    id: '4',
    slug: 'trusted-housesitters-membership-cost-levels',
    title: 'Sitter Guide: Trusted-Housesitters Membership Cost & Levels',
    excerpt:
      'Breaking down Basic, Standard, and Premium sitter memberships to find the right fit for you.',
    date: 'January 2026',
    category: 'Sitter Guide',
    location: 'Financial',
    sortOrder: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Claim 25% Off Code',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: costLevelsContent,
    faqIds: ['ths-membership-worth-it', 'ths-experience-level-sits', 'ths-membership-try'],
    prevLink: {
      label: 'Previous',
      title: 'Free Travel Math',
      href: '/blog/can-you-really-travel-for-free-house-sitting-math',
    },
    nextLink: {
      label: 'Next',
      title: 'Handling Rejections',
      href: '/blog/why-trusted-housesitters-applications-get-rejected',
    },
    seoTitle: 'TrustedHousesitters Membership Cost & Tiers Explained',
    seoDescription:
      'Compare Basic, Standard, and Premium sitter tiers on TrustedHousesitters. Learn about accident protection and cancellation insurance.',
    seoKeywords: [
      'ths membership tiers',
      'house sitting cancellation insurance',
      'standard vs premium sitter',
      'trusted housesitters price',
      'sitter insurance coverage',
      'discount for trusted housesitters',
      'ths cost breakdown',
    ],
  },
];
