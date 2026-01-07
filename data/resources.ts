import { ResourceCategory, ResourceItem } from '../types';
import { content as thsContent } from './articles/trusted-housesitters-review';
import { content as roverContent } from './articles/rover-review';
import { content as visibleContent } from './articles/visible-review';
import { content as planetFitnessContent } from './articles/planet-fitness-review';

export const RESOURCES: ResourceCategory[] = [
  {
    title: 'My Resources',
    items: [
      {
        id: 'ths',
        slug: 'trusted-housesitters-review',
        name: 'TrustedHousesitters',
        description: 'Where I find almost all of my house sits. Use my link for a 25% discount.',
        date: 'January 2026',
        body: thsContent,
        discountText: '25% Off',
        link: 'https://trustedhousesitters.com/refer/raf943607',
        icon: 'home',
        imageUrl:
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
        faqIds: ['ths-beginner-difficulty', 'trusted-profile-tips', 'ths-internet-remote'],
        prevLink: {
          label: 'Previous',
          title: 'Planet Fitness',
          href: '/resources/planet-fitness-review',
        },
        nextLink: { label: 'Next', title: 'Rover', href: '/resources/rover-review' },
        seoTitle: 'TrustedHousesitters Discount Code 2026: 25% Off Membership',
        seoDescription:
          'Verified TrustedHousesitters promo code for 2026. Save 25% on your annual membership with this referral link.',
        seoKeywords: [
          'trusted-housesitters discount code',
          'trusted-housesitters promo code',
          'house sitting discount',
        ],
      },
      {
        id: 'rover',
        slug: 'rover-review',
        name: 'Rover',
        description: 'For finding local pet care or filling gaps between sits.',
        date: 'January 2026',
        body: roverContent,
        discountText: '$20 Off',
        link: 'https://www.rover.com/sit/yulias92191',
        icon: 'heart',
        imageUrl:
          'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200',
        faqIds: ['best-platform-travel', 'ths-internet-remote', 'ths-beginner-difficulty'],
        prevLink: {
          label: 'Previous',
          title: 'TrustedHousesitters',
          href: '/resources/trusted-housesitters-review',
        },
        nextLink: { label: 'Next', title: 'Visible', href: '/resources/visible-review' },
        seoTitle: 'Rover Promo Code 2026: Get $20 Off Your First Pet Stay',
        seoDescription:
          'Use this Rover referral link to get a $20 credit towards your first pet sitting or dog walking booking.',
        seoKeywords: [
          'rover promo code',
          'rover discount',
          'rover referral link',
          'pet sitting discount',
        ],
      },
      {
        id: 'visible',
        slug: 'visible-review',
        name: 'Visible',
        description: 'The phone plan I use for unlimited data and hotspot.',
        date: 'January 2026',
        body: visibleContent,
        discountText: '$20 First Month',
        link: 'https://www.visible.com/get/?66LWM29',
        icon: 'smartphone',
        imageUrl:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
        faqIds: ['ths-internet-remote', 'travel-wellness-gym', 'best-platform-travel'],
        prevLink: { label: 'Previous', title: 'Rover', href: '/resources/rover-review' },
        nextLink: {
          label: 'Next',
          title: 'Planet Fitness',
          href: '/resources/planet-fitness-review',
        },
        seoTitle: 'Visible Wireless Referral Code: Get Your First Month for $20',
        seoDescription:
          'Switch to Visible Wireless using my referral code and get your first month of unlimited data and hotspot for just $20.',
        seoKeywords: [
          'visible referral code',
          'visible wireless promo',
          'unlimited data hotspot',
          'visible mobile discount',
        ],
      },
      {
        id: 'planet-fitness',
        slug: 'planet-fitness-review',
        name: 'Planet Fitness',
        description: 'Gym access across the country for workouts and showers.',
        date: 'January 2026',
        body: planetFitnessContent,
        discountText: '$1 Down',
        link: 'https://www.planetfitness.com/referrals?referralCode=LVX9KEAQ',
        icon: 'award',
        imageUrl:
          'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200',
        faqIds: ['travel-wellness-gym', 'best-platform-travel', 'remote-work-internet'],
        prevLink: { label: 'Previous', title: 'Visible', href: '/resources/visible-review' },
        nextLink: {
          label: 'Next',
          title: 'TrustedHousesitters',
          href: '/resources/trusted-housesitters-review',
        },
        seoTitle: 'Planet Fitness Referral Link: Join for $1 Down Payment',
        seoDescription:
          'Use my Planet Fitness referral code to join any location for only $1 down. Perfect for travelers needing showers and gyms.',
        seoKeywords: [
          'planet-fitness referral link',
          'planet fitness promo',
          'gym membership discount',
          'travel fitness tips',
        ],
      },
    ],
  },
];

export const ALL_RESOURCES: ResourceItem[] = RESOURCES.flatMap((category) => category.items);
