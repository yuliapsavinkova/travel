import React from 'react';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      For a digital nomad, internet is oxygen. Visible is the single most important tool in my
      connectivity kit, providing the reliable unlimited hotspot I need for remote work.
    </p>

    <h2>The Unlimited Hotspot Hack</h2>
    <p>
      Most "unlimited" plans have a hidden hotspot cap. Visible is different. They offer unlimited
      mobile hotspot data, which has allowed me to work from rural mountain cabins, beachfronts, and
      suburban homes without a single worry about data overages.
    </p>

    <div className="prose-accent-box">
      <span className="accent-box-label">Why I use it:</span>
      <ul>
        <li>
          <strong>Truly Unlimited:</strong> No data caps on your phone or hotspot.
        </li>
        <li>
          <strong>Price:</strong> Simple, flat monthly rate (even lower with a referral).
        </li>
        <li>
          <strong>Network:</strong> Runs on Verizon’s 5G/LTE network—the best in the US.
        </li>
      </ul>
    </div>

    <div className="prose-accent-box variant-cta">
      <span className="accent-box-label">Claim Your {REFERRALS.VISIBLE.discount}</span>
      <p>
        Get your first month of service for just $5 and save {REFERRALS.VISIBLE.discount} using my
        verified referral link. It's the best investment a remote worker can make.
      </p>
      <a
        href={REFERRALS.VISIBLE.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold btn-wide"
      >
        {REFERRALS.VISIBLE.cta}
      </a>
    </div>
  </>
);
