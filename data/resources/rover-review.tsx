import React from 'react';
import { REFERRALS, ResourceItem } from '../../types';

export const resource: ResourceItem = {
  id: 'rover',
  slug: 'rover-review',
  name: 'Rover Review',
  navTitle: 'Rover Review',
  description: `Earn money as a pet sitter and get a ${REFERRALS.ROVER.discount.toLowerCase()} for your own pets.`,
  date: 'January 9, 2026',
  sortOrder: 2,
  discountText: REFERRALS.ROVER.discount,
  ctaLabel: REFERRALS.ROVER.discount,
  link: REFERRALS.ROVER.link,
  icon: 'heart',
  imageUrl:
    'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200',
  faqIds: ['rover-between-sits'],
  relatedSlugs: [
    'trusted-housesitters-vs-rover-comparison',
    'trusted-housesitters-vs-other-house-sitting-websites',
    'how-to-get-your-first-house-sit-no-reviews',
  ],
  body: (
    <>
      <p className="prose-lead">
        Rover is a great option for animal lovers and a practical way to fill scheduling gaps
        between house sits. It lets you earn extra income while staying in a new city.
      </p>

      <h2>Turning Animal Care into Income</h2>
      <p>
        Unlike house sitting exchanges, Rover is a marketplace for paid pet services. I use it
        primarily for overnight house sitting and drop-in visits. It’s an excellent way to monetize
        your skills as a responsible sitter while you move between long-term sits.
      </p>

      <h2>Why it works for travelers:</h2>
      <ul>
        <li>
          <strong>Flexibility:</strong> Set your own rates and availability.
        </li>
        <li>
          <strong>Demand:</strong> High demand in almost every US city.
        </li>
        <li>
          <strong>Safety:</strong> The Rover Guarantee and 24/7 support.
        </li>
      </ul>
    </>
  ),
};
