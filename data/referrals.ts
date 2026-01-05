import { ReferralCategory, ReferralItem } from '../types';
import { thsContent } from './articles/toolkit/ths';
import { roverContent } from './articles/toolkit/rover';
import { visibleContent } from './articles/toolkit/visible';
import { planetFitnessContent } from './articles/toolkit/planet-fitness';

export const REFERRALS: ReferralCategory[] = [
  {
    title: 'My Toolkit',
    items: [
      {
        id: 'ths',
        slug: 'trustedhousesitters-referral',
        name: 'TrustedHousesitters',
        description: 'Where I find almost all of my house sits. Use my link for a 25% discount.',
        date: 'January 2026',
        body: thsContent,
        discountText: '25% Off',
        link: 'https://trustedhousesitters.com/refer/raf943607',
        icon: 'home',
        imageUrl:
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
        promoNote: '25% discount link.',
      },
      {
        id: 'rover',
        slug: 'rover-pet-care',
        name: 'Rover',
        description: 'For finding local pet care or filling gaps between sits.',
        date: 'January 2026',
        body: roverContent,
        discountText: '$20 Off',
        link: 'https://www.rover.com/sit/yulias92191',
        icon: 'heart',
        imageUrl:
          'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'Useful for shorter stays.',
      },
      {
        id: 'visible',
        slug: 'visible-connectivity',
        name: 'Visible',
        description: 'The phone plan I use for unlimited data and hotspot.',
        date: 'January 2026',
        body: visibleContent,
        discountText: '$20 First Month',
        link: 'https://www.visible.com/get/?66LWM29',
        icon: 'smartphone',
        imageUrl:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'Great for remote work.',
      },
      {
        id: 'planet-fitness',
        slug: 'planet-fitness-wellness',
        name: 'Planet Fitness',
        description: 'Gym access across the country for workouts and showers.',
        date: 'January 2026',
        body: planetFitnessContent,
        discountText: '$1 Down',
        link: 'https://www.planetfitness.com/referrals?referralCode=LVX9KEAQ',
        icon: 'award',
        imageUrl:
          'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'Good for travel days.',
      },
    ],
  },
];

export const ALL_REFERRALS: ReferralItem[] = REFERRALS.flatMap((category) => category.items);
