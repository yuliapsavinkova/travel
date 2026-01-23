import React from 'react';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Staying healthy and refreshed while traveling full-time is a challenge. My Planet Fitness
      membership is my "home base" in every city for workouts and reliable recovery.
    </p>

    <h2>More Than Just a Gym</h2>
    <p>
      When you're traveling between sits, you need a predictable place to reset. Planet Fitness has
      thousands of locations, making it the most accessible gym for nomads in the United States.
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
);
