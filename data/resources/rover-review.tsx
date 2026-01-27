import React from 'react';
import { ResourceItem, REFERRALS } from '../../types';

export const resource: ResourceItem = {
  id: 'rover',
  slug: 'rover-review',
  name: 'Rover Review',
  navTitle: 'Rover Review',
  subtitle: '(Written by an active sitter)',
  description: `Earn money as a pet sitter and get a ${REFERRALS.ROVER.discount} for your own pets.`,
  date: 'January 2026',
  sortOrder: 2,
  discountText: REFERRALS.ROVER.discount,
  link: REFERRALS.ROVER.link,
  icon: 'heart',
  imageUrl:
    'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200',
  faqIds: ['ths-experience-level-sits', 'travel-experience-needed', 'first-sit-easy'],
  body: (
    <>
      <p className="prose-lead">
        Rover is the ultimate side-gig for animal lovers and a vital tool for filling scheduling
        gaps in a nomadic lifestyle. It allows you to earn while you travel.
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

      <div className="prose-accent-box variant-cta">
        <span className="accent-box-label">Claim Your {REFERRALS.ROVER.discount}</span>
        <p>
          Sign up to become a sitter on Rover, start earning, or get a credit for your own pets.
        </p>
        <a
          href={REFERRALS.ROVER.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold btn-wide"
        >
          {REFERRALS.ROVER.cta}
        </a>
      </div>
    </>
  ),
};
