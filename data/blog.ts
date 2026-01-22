import { BlogPost } from '../types';
import { content as firstHouseSitContent } from './articles/how-to-get-your-first-house-sit-no-reviews';
import { content as thsProfileTipsContent } from './articles/trusted-housesitters-profile-tips-how-to-secure-more-sits';
import { content as worthItContent } from './articles/is-trusted-housesitters-worth-it';
import { content as mathContent } from './articles/can-you-really-travel-for-free-house-sitting-math';
import { content as costLevelsContent } from './articles/trusted-housesitters-membership-cost-levels';
import { content as rejectionReasonsContent } from './articles/why-trusted-housesitters-applications-get-rejected';
import { content as reportingProcessContent } from './articles/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it';
import { content as vsOtherContent } from './articles/trusted-housesitters-vs-other-house-sitting-websites';
import { content as vsRoverContent } from './articles/trusted-housesitters-vs-rover-comparison';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '8',
    slug: 'trusted-housesitters-vs-other-house-sitting-websites',
    title: 'TrustedHousesitters vs Other House Sitting Websites: Which Is Actually Best?',
    excerpt: 'Comparing THS against Nomador, MindMyHouse, and others. Which one wins?',
    date: 'January 2026',
    category: 'Review',
    location: 'Comparison',
    sortOrder: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Claim 25% Off THS',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: vsOtherContent,
    prevLink: {
      label: 'Previous',
      title: 'Reporting',
      href: '/blog/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it',
    },
    nextLink: {
      label: 'Next',
      title: 'THS vs Rover',
      href: '/blog/trusted-housesitters-vs-rover-comparison',
    },
    seoTitle: 'TrustedHousesitters vs Other Sites: 2026 Comparison',
    seoDescription:
      'Is THS actually the best house sitting site? We compare it to Nomador, MindMyHouse and more.',
    seoKeywords: [
      'ths vs nomador',
      'trustedhousesitters alternatives',
      'best house sitting website',
      'mindmyhouse review',
      'housesittersamerica vs ths',
      'international house sitting platforms',
    ],
  },
  {
    id: '9',
    slug: 'trusted-housesitters-vs-rover-comparison',
    title: 'TrustedHousesitters vs Rover: What People Get Wrong When Comparing Them',
    excerpt: 'One is an exchange, the other is a transaction. Which one fits your lifestyle?',
    date: 'January 2026',
    category: 'Review',
    location: 'Comparison',
    sortOrder: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Earn with Rover',
    ctaLink: 'https://www.rover.com/ambas-refer-a-friend/Q93GankN',
    body: vsRoverContent,
    prevLink: {
      label: 'Previous',
      title: 'THS vs Others',
      href: '/blog/trusted-housesitters-vs-other-house-sitting-websites',
    },
    nextLink: {
      label: 'Next',
      title: 'Is It Worth It?',
      href: '/blog/is-trusted-housesitters-worth-it-for-sitters',
    },
    seoTitle: 'THS vs Rover: Professional Pet Care Comparison',
    seoDescription:
      'Stop comparing Rover and TrustedHousesitters. One is a job, one is a lifestyle.',
    seoKeywords: [
      'ths vs rover',
      'pet sitting exchange vs paid',
      'house sitting vs dog walking',
      'is rover better than ths',
      'free travel vs gig work',
      'professional pet care comparison',
    ],
  },
  {
    id: '3',
    slug: 'is-trusted-housesitters-worth-it-for-sitters',
    title: 'Is TrustedHousesitters Worth It for Sitters? Honest Pros, Cons, and Real Costs',
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
      title: 'THS vs Rover',
      href: '/blog/trusted-housesitters-vs-rover-comparison',
    },
    nextLink: {
      label: 'Next',
      title: 'Travel Math',
      href: '/blog/can-you-really-travel-for-free-house-sitting-math',
    },
    seoTitle: 'Is TrustedHousesitters Worth It? 2026 Sitter Review & Savings',
    seoDescription:
      'An honest review of TrustedHousesitters for sitters. Is the membership fee worth the travel savings? We break down the 2-night breakeven math.',
    seoKeywords: [
      'is trustedhousesitters worth it',
      'ths sitter review 2026',
      'house sitting pros and cons',
      'trusted housesitters legitimacy',
      'save money on travel accommodation',
      'sitter membership value',
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
      title: 'Cost Levels',
      href: '/blog/trusted-housesitters-membership-cost-levels',
    },
    seoTitle: 'Can You Really Travel for Free? House Sitting Math & Reality',
    seoDescription:
      'Discover the truth about "free travel." We break down house sitting itineraries and math for nomads.',
    seoKeywords: [
      'travel for free math',
      'house sitting cost breakdown',
      'how to travel without paying for hotels',
      'nomad budget planning',
      'trustedhousesitters savings calculator',
      'financial freedom through travel',
    ],
  },
  {
    id: '4',
    slug: 'trusted-housesitters-membership-cost-levels',
    title: 'Sitter Guide: TrustedHousesitters Membership Cost & Levels',
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
      title: 'Travel Math',
      href: '/blog/can-you-really-travel-for-free-house-sitting-math',
    },
    nextLink: {
      label: 'Next',
      title: 'Profile Tips',
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
    seoTitle: 'TrustedHousesitters Membership Cost & Tiers Explained',
    seoDescription: 'Compare Basic, Standard, and Premium sitter tiers on TrustedHousesitters.',
    seoKeywords: [
      'ths membership levels',
      'trustedhousesitters cost 2026',
      'ths basic vs standard vs premium',
      'sitter cancellation insurance',
      'trusted housesitters pricing guide',
      'is ths premium worth it',
    ],
  },
  {
    id: '2',
    slug: 'trusted-housesitters-profile-tips-how-to-secure-more-sits',
    title: 'TrustedHousesitters Profile Tips: How to Secure More Sits',
    excerpt: 'Master your profile with practical tips, including photo rules and proven examples.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Profile Strategy',
    sortOrder: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop',
    ctaLabel: 'Get 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: thsProfileTipsContent,
    faqIds: ['ths-photo-aspect', 'ths-profile-length', 'trusted-profile-tips'],
    prevLink: {
      label: 'Previous',
      title: 'Cost Levels',
      href: '/blog/trusted-housesitters-membership-cost-levels',
    },
    nextLink: {
      label: 'Next',
      title: 'First Sit Guide',
      href: '/blog/how-to-get-your-first-house-sit-no-reviews',
    },
    seoTitle: 'TrustedHousesitters Profile Tips | How to Build a 5-Star Profile',
    seoDescription: 'Master your TrustedHousesitters profile with these photo and bio tips.',
    seoKeywords: [
      'trustedhousesitters profile tips',
      'how to get more house sits',
      'house sitting bio examples',
      'ths profile photo size',
      'winning sitter application strategy',
      'trust building for sitters',
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
    sortOrder: 7,
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Offer: 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: firstHouseSitContent,
    faqIds: ['ths-beginner-difficulty', 'ths-reviews-starting', 'travel-experience-needed'],
    prevLink: {
      label: 'Previous',
      title: 'Profile Tips',
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
    nextLink: {
      label: 'Next',
      title: 'Rejections',
      href: '/blog/why-trusted-housesitters-applications-get-rejected',
    },
    seoTitle: 'How to Get Your First House Sit with No Reviews | Sitter Journey',
    seoDescription:
      'Step-by-step guide to landing your first house sit on TrustedHousesitters without reviews.',
    seoKeywords: [
      'get first house sit no reviews',
      'beginner house sitting guide',
      'how to start house sitting',
      'trustedhousesitters for beginners',
      'landing sits without experience',
      'first time sitter tips',
    ],
  },
  {
    id: '5',
    slug: 'why-trusted-housesitters-applications-get-rejected',
    title: 'Top Reasons Why TrustedHousesitters Applications Get Rejected',
    excerpt:
      'Rejections happen all the time. Learn the fixable and unfixable reasons to move on and succeed.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Strategy',
    sortOrder: 8,
    imageUrl:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2070&auto=format&fit=crop',
    ctaLabel: 'Claim 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: rejectionReasonsContent,
    faqIds: ['ths-rejection-personal', 'ths-rejection-fix', 'ths-rejection-common'],
    prevLink: {
      label: 'Previous',
      title: 'First Sit Guide',
      href: '/blog/how-to-get-your-first-house-sit-no-reviews',
    },
    nextLink: {
      label: 'Next',
      title: 'Reporting',
      href: '/blog/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it',
    },
    seoTitle: 'Why TrustedHousesitters Applications Get Rejected | Sitter Journey',
    seoDescription:
      'Discover why TrustedHousesitters applications get declined and how to beat the 5-app rule.',
    seoKeywords: [
      'trustedhousesitters rejection reasons',
      'why ths applications get declined',
      'ths 5 application rule',
      'beating house sitting competition',
      'house sitting application tips',
      'owner pet preferences',
    ],
  },
  {
    id: '7',
    slug: 'trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it',
    title: 'What Happens If a Sit Goes Wrong and How to Report It',
    excerpt:
      'Understand the reporting process, common triggers for disputes, and how to protect yourself through documentation.',
    date: 'January 2026',
    category: 'Expertise',
    location: 'Safety',
    sortOrder: 9,
    imageUrl:
      'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Claim 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: reportingProcessContent,
    faqIds: ['ths-rejection-common', 'ths-owner-priorities', 'ths-reviews-starting'],
    prevLink: {
      label: 'Previous',
      title: 'Rejections',
      href: '/blog/why-trusted-housesitters-applications-get-rejected',
    },
    nextLink: {
      label: 'Next',
      title: 'THS vs Others',
      href: '/blog/trusted-housesitters-vs-other-house-sitting-websites',
    },
    seoTitle: 'What Happens If a Sit Goes Wrong | Sitter Journey',
    seoDescription:
      'A clear guide to the TrustedHousesitters reporting process and dispute resolution.',
    seoKeywords: [
      'trustedhousesitters reporting process',
      'what if a house sit goes wrong',
      'ths dispute resolution',
      'reporting a homeowner on ths',
      'house sitting safety guide',
      'sitter protection policy',
    ],
  },
];
