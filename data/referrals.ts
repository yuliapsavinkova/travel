import { ReferralCategory, ReferralItem } from '../types';
import { txt } from '../utils/content';

export const REFERRALS: ReferralCategory[] = [
  {
    title: 'Traveler Framework',
    items: [
      {
        id: 'ths',
        slug: 'trustedhousesitters-referral',
        name: 'TrustedHousesitters',
        description: 'The global gold standard for house and pet sitting. Claim your 25% discount.',
        date: 'January 2026',
        body: txt(`TrustedHousesitters is a global platform that connects homeowners with travelers who exchange pet care for a place to stay. At its core, it’s simple: you look after someone’s home and pets, and in return you live rent-free. In practice, it’s one of the safest, most structured ways to travel long-term without burning through savings.

What sets TrustedHousesitters apart is the scale and trust layer. It’s a large, established community with identity verification, secure messaging, and—most importantly—detailed reviews from both homeowners and sitters. Those reviews are everything. They tell you exactly what kind of home, pets, and expectations you’re walking into, so you’re not guessing or gambling.

Using TrustedHousesitters, I traveled through 30 U.S. states on a very low budget and lived like a local the entire time. No short-term rentals, no inflated nightly rates, no constant moving around. I stayed in real neighborhoods, worked remotely, cooked my own meals, and actually settled into places instead of passing through them.

That said, this lifestyle is not for everyone. You must genuinely love animals. Pet care isn’t an add-on—it’s the responsibility. You’re committing to feeding schedules, walks, medications if needed, and being present. If the idea of planning your day around a dog or cat feels like a burden, this isn’t a good fit. If it feels natural, you’ll thrive.

If you’re ready to try it yourself, you can use my vetted referral link to get 25% off your annual TrustedHousesitters membership. I receive the same discount—it’s a win-win, and an easy way to start without paying full price.

This isn’t a hack or a loophole. It’s a fair exchange, built on trust, and it works exceptionally well if you approach it responsibly.`),
        discountText: '25% Off Membership',
        link: 'https://trustedhousesitters.com/refer/raf943607',
        icon: 'home',
        imageUrl:
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'Claim your 25% discount via my vetted link!',
      },
      {
        id: 'rover',
        slug: 'rover-pet-care',
        name: 'Rover',
        description: 'Vetted localized care and backup for transitional periods.',
        date: 'January 2026',
        body: txt(
          `Rover is a critical tool for travelers who need reliable, localized support with the backing of the Rover Guarantee for peace of mind. I use it as my bridge between long-term stays when I am moving between states.`
        ),
        discountText: '$20 First Booking',
        link: 'https://www.rover.com/sit/yulias92191',
        icon: 'heart',
        imageUrl:
          'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'A vital backup for professional standards.',
      },
      {
        id: 'visible',
        slug: 'visible-connectivity',
        name: 'Visible',
        description: 'Unlimited 5G/4G data with hotspot for reliable remote work on the road.',
        date: 'January 2026',
        body: txt(
          `Consistent connectivity is the backbone of my journey. I work remotely while moving between cities. Visible’s unlimited hotspot is what makes this possible — whether I’m working from a rental, a client’s home, or on the road.`
        ),
        discountText: '$20 First Month',
        link: 'https://www.visible.com/get/?66LWM29',
        icon: 'smartphone',
        imageUrl:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'The foundation of my communication standard.',
      },
      {
        id: 'planet-fitness',
        slug: 'planet-fitness-wellness',
        name: 'Planet Fitness',
        description: 'Nationwide access to wellness and amenities while traveling.',
        date: 'January 2026',
        body: txt(
          `This membership is my "home base" for wellness and practical needs on travel days between stays. With a Black Card membership, I always have a clean, safe place to recharge while navigating the country solo.`
        ),
        discountText: '$1 Down Deal',
        link: 'https://www.planetfitness.com/referrals?referralCode=LVX9KEAQ',
        icon: 'award',
        imageUrl:
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'My mobile home base for wellness and amenities.',
      },
    ],
  },
];

/**
 * Pre-flattened and explicitly typed list of all referral items.
 * This prevents type inference issues in components that need to search the entire catalog.
 */
export const ALL_REFERRALS: ReferralItem[] = REFERRALS.flatMap((category) => category.items);
