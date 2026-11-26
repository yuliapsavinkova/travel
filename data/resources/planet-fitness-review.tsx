import React from 'react';
import { REFERRALS, ResourceItem } from '../../types';

export const resource: ResourceItem = {
  id: 'pf',
  slug: 'planet-fitness-review',
  name: 'Planet Fitness Review',
  navTitle: 'PF Review',
  description: 'Gym access across the country for workouts and showers.',
  date: 'January 9, 2026',
  sortOrder: 4,
  discountText: REFERRALS.PF.discount,
  ctaLabel: REFERRALS.PF.label,
  link: REFERRALS.PF.link,
  icon: 'award',
  imageUrl:
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200',
  faqIds: ['travel-wellness-gym', 'ths-internet-remote', 'remote-work-internet'],
  relatedSlugs: [
    'can-you-really-travel-for-free-house-sitting-math',
    'hidden-perks-of-house-sitting',
    'visible-review',
  ],
  seoTitle: 'Planet Fitness Review: Essential for Full-Time Travel',
  seoDescription: `Why Planet Fitness is the best gym for travelers. Personal review by a full-time member. Join for ${REFERRALS.PF.discount} with referral code.`,
  seoKeywords: [
    'planet fitness review for travelers',
    'best gym for travelers 2026',
    'where to shower while traveling',
    'planet fitness black card benefits',
    'travel wellness and fitness',
    'gym membership with nationwide access',
    'planet fitness promo code',
    'gym access while traveling',
  ],
  body: (
    <>
      <p className="prose-lead">
        Staying healthy while moving between house sits takes a bit of planning. My Planet Fitness
        membership gives me a familiar place to work out and reset in almost any city.
      </p>

      <h2>More Than Just a Gym</h2>
      <p>
        When you are driving between sits, it helps to have a reliable stop along the way. Planet
        Fitness has thousands of locations across the United States, so there is almost always one
        nearby.
      </p>

      <div className="prose-accent-box">
        <span className="accent-box-label">Travel Benefits:</span>
        <ul>
          <li>
            <strong>Consistency:</strong> Familiar equipment wherever your next sit takes you.
          </li>
          <li>
            <strong>Recovery:</strong> Hydromassage and tanning on the Black Card plan.
          </li>
          <li>
            <strong>Easy Showers:</strong> A clean, private shower during long travel days between
            homes.
          </li>
        </ul>
      </div>
    </>
  ),
};
