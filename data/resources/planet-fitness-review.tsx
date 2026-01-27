import React from 'react';
import { ResourceItem, REFERRALS } from '../../types';

export const resource: ResourceItem = {
  id: 'pf',
  slug: 'planet-fitness-review',
  name: 'Planet Fitness Review',
  navTitle: 'PF Review',
  subtitle: '(Written by an active member)',
  description: 'Gym access across the country for workouts and showers.',
  date: 'January 2026',
  sortOrder: 4,
  discountText: REFERRALS.PF.discount,
  link: REFERRALS.PF.link,
  icon: 'award',
  imageUrl:
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200',
  faqIds: ['travel-wellness-gym', 'ths-internet-remote', 'remote-work-internet'],
  seoTitle: 'Planet Fitness Review: Essential for Full-Time Travel',
  seoDescription: `Why Planet Fitness is the best gym for travelers. Personal review by a full-time member. Join for ${REFERRALS.PF.discount} with referral code.`,
  seoKeywords: [
    'planet fitness review for travelers',
    'best gym for nomads 2026',
    'where to shower while traveling',
    'planet fitness black card benefits',
    'nomad wellness and fitness',
    'gym membership with nationwide access',
    'planet fitness promo code',
    'van life shower hacks',
  ],
  body: (
    <>
      <p className="prose-lead">
        Staying healthy and refreshed while traveling full-time is a challenge. My Planet Fitness
        membership is my "home base" in every city for workouts and reliable recovery.
      </p>

      <h2>More Than Just a Gym</h2>
      <p>
        When you're traveling between sits, you need a predictable place to reset. Planet Fitness
        has thousands of locations, making it the most accessible gym for nomads in the United
        States.
      </p>

      <div className="prose-accent-box">
        <span className="accent-box-label">Nomad Benefits:</span>
        <ul>
          <li>
            <strong>Consistency:</strong> High-quality equipment everywhere you go.
          </li>
          <li>
            <strong>Recovery:</strong> Hydromassage and tanning on the Black Card plan.
          </li>
          <li>
            <strong>The Shower Hack:</strong> A guaranteed clean shower during travel days.
          </li>
        </ul>
      </div>

      <div className="prose-accent-box variant-cta">
        <span className="accent-box-label">Claim Your {REFERRALS.PF.discount} Promo</span>
        <p>
          Stay fit and fresh on the road. Join today using my referral link for just
          {REFERRALS.PF.discount} down.
        </p>
        <a
          href={REFERRALS.PF.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold btn-wide"
        >
          {REFERRALS.PF.cta}
        </a>
      </div>
    </>
  ),
};
