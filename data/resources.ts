import {
  ResourceCategory,
  ResourceItem,
  THS_DISCOUNT,
  VISIBLE_DISCOUNT,
  PF_DISCOUNT,
  ROVER_DISCOUNT,
} from '../types';
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
        name: 'TrustedHousesitters Review',
        subtitle: '(Written by an active sitter)',
        description:
          'Where I find almost all of my house sits. Use my link for a membership discount.',
        date: 'January 2026',
        body: thsContent,
        discountText: `${THS_DISCOUNT} Off`,
        link: 'https://trustedhousesitters.com/refer/raf943607',
        icon: 'home',
        imageUrl:
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
        faqIds: [
          'ths-membership-worth-it',
          'ths-membership-discounts',
          'ths-experience-level-sits',
        ],
        prevLink: {
          label: 'Previous',
          title: 'Planet Fitness',
          href: '/resources/planet-fitness-review',
        },
        nextLink: { label: 'Next', title: 'Rover', href: '/resources/rover-review' },
        seoTitle: `TrustedHousesitters Review 2026: ${THS_DISCOUNT} Membership Discount Code`,
        seoDescription: `Verified TrustedHousesitters review for 2026 by an active sitter. Save ${THS_DISCOUNT} on your annual membership with this referral link.`,
        seoKeywords: [
          'trusted-housesitters review',
          'trusted-housesitters discount code',
          'free accommodation travel',
          'pet sitting world',
          'housesitting app review',
          'how to travel for free',
          'nomad housing hacks',
        ],
      },
      {
        id: 'rover',
        slug: 'rover-review',
        name: 'Rover Review',
        subtitle: '(Written by an active sitter)',
        description: `Earn money as a pet sitter and get a ${ROVER_DISCOUNT} credit for your own pets.`,
        date: 'January 2026',
        body: roverContent,
        discountText: `${ROVER_DISCOUNT} Credit`,
        link: 'https://www.rover.com/ambas-refer-a-friend/Q93GankN',
        icon: 'heart',
        imageUrl:
          'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200',
        faqIds: ['ths-experience-level-sits', 'travel-experience-needed', 'first-sit-easy'],
        prevLink: {
          label: 'Previous',
          title: 'TrustedHousesitters',
          href: '/resources/trusted-housesitters-review',
        },
        nextLink: { label: 'Next', title: 'Visible', href: '/resources/visible-review' },
        seoTitle: `Rover Review 2026: Claim Your ${ROVER_DISCOUNT} Credit Today`,
        seoDescription: `Honest Rover review by an active sitter. Sign up to earn money as a sitter and get a ${ROVER_DISCOUNT} credit for your own pet care.`,
        seoKeywords: [
          'rover app review',
          'pet sitting promo code',
          'dog walking services',
          'rover referral link',
          'earn money housesitting',
          'rover sitter credit',
          'how to become a pet sitter',
        ],
      },
      {
        id: 'visible',
        slug: 'visible-review',
        name: 'Visible Review',
        subtitle: '(Written by an active user)',
        description: 'The phone plan I use for unlimited data and hotspot.',
        date: 'January 2026',
        body: visibleContent,
        discountText: `${VISIBLE_DISCOUNT} First Month`,
        link: 'https://www.visible.com/get/?66LWM29',
        icon: 'smartphone',
        imageUrl:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
        faqIds: ['ths-internet-remote', 'remote-work-internet', 'travel-wellness-gym'],
        prevLink: { label: 'Previous', title: 'Rover', href: '/resources/rover-review' },
        nextLink: {
          label: 'Next',
          title: 'Planet Fitness',
          href: '/resources/planet-fitness-review',
        },
        seoTitle: 'Visible Wireless Review: Best Unlimited Plan for Travelers',
        seoDescription: `Personal review of Visible Wireless for nomadic life. Get your first month of unlimited data for just ${VISIBLE_DISCOUNT} with referral code.`,
        seoKeywords: [
          'visible wireless nomad review',
          'unlimited hotspot for travelers',
          'best nomad phone plan',
          'visible mobile discount',
          'remote work internet',
          'mobile hotspot for digital nomads',
          'travel data hacks',
        ],
      },
      {
        id: 'planet-fitness',
        slug: 'planet-fitness-review',
        name: 'Planet Fitness Review',
        subtitle: '(Written by an active member)',
        description: 'Gym access across the country for workouts and showers.',
        date: 'January 2026',
        body: planetFitnessContent,
        discountText: `${PF_DISCOUNT} Down`,
        link: 'https://www.planetfitness.com/referrals?referralCode=LVX9KEAQ',
        icon: 'award',
        imageUrl:
          'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200',
        faqIds: ['travel-wellness-gym', 'ths-internet-remote', 'remote-work-internet'],
        prevLink: { label: 'Previous', title: 'Visible', href: '/resources/visible-review' },
        nextLink: {
          label: 'Next',
          title: 'TrustedHousesitters',
          href: '/resources/trusted-housesitters-review',
        },
        seoTitle: 'Planet Fitness Review: Essential for Full-Time Travel',
        seoDescription: `Why Planet Fitness is the best gym for travelers. Personal review by a full-time member. Join for ${PF_DISCOUNT} down with referral code.`,
        seoKeywords: [
          'planet fitness traveler review',
          'gym membership for nomads',
          'planet fitness showers',
          'travel health and fitness',
          'gym discount code',
          'cross-country gym access',
          'nomad wellness',
        ],
      },
    ],
  },
];

export const ALL_RESOURCES: ResourceItem[] = RESOURCES.flatMap((category) => category.items);
