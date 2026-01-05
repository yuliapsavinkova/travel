import { ReferralCategory, ReferralItem } from '../types';
import { txt } from '../utils/content';

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
        body: txt(`TrustedHousesitters is the main platform I use to travel. I look after someone’s home and pets, and in return, I stay for free. It’s built on trust and reviews, which makes it much safer than trying to find sits on social media.

I've used it to stay in many states across the country. It's perfect if you work remotely and love animals. If you're interested, my link gets you 25% off your first year.`),
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
        body: txt(
          `Rover is great for finding shorter pet sitting jobs or when you need someone to look after a pet for just a few hours. I use it to stay busy between longer house sits.`
        ),
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
        body: txt(
          `Working remotely requires good internet. Visible gives me unlimited data and a hotspot that actually works, which is essential when I'm on the road or staying in places with spotty WiFi.`
        ),
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
        body: txt(
          `A gym membership is a must for full-time travelers. I use it for the workouts, but also for a reliable place to shower when I'm driving between states.`
        ),
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
