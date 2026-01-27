import React from 'react';
import { ResourceItem, REFERRALS } from '../../types';

export const resource: ResourceItem = {
  id: 'visible',
  slug: 'visible-review',
  name: 'Visible Review',
  navTitle: 'Visible Review',
  subtitle: '(Written by an active user)',
  description: 'The phone plan I use for unlimited data and hotspot.',
  date: 'January 2026',
  sortOrder: 3,
  discountText: REFERRALS.VISIBLE.discount,
  link: REFERRALS.VISIBLE.link,
  icon: 'smartphone',
  imageUrl:
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
  faqIds: ['ths-internet-remote', 'remote-work-internet', 'travel-wellness-gym'],
  seoTitle: 'Visible Wireless Review: Best Unlimited Plan for Travelers',
  seoDescription: `Personal review of Visible Wireless for nomadic life. Get your first month of unlimited data and ${REFERRALS.VISIBLE.discount} with referral code.`,
  seoKeywords: [
    'visible mobile review 2026',
    'best unlimited hotspot for travelers',
    'digital nomad internet solutions',
    'visible vs verizon for nomads',
    'remote work on the road',
    'cheap unlimited data plans',
    'visible wireless referral code',
    'nomad tech kit essentials',
  ],
  body: (
    <>
      <p className="prose-lead">
        For a digital nomad, internet is oxygen. Visible is the single most important tool in my
        connectivity kit, providing the reliable unlimited hotspot I need for remote work.
      </p>

      <h2>The Unlimited Hotspot Hack</h2>
      <p>
        Most "unlimited" plans have a hidden hotspot cap. Visible is different. They offer unlimited
        mobile hotspot data, which has allowed me to work from rural mountain cabins, beachfronts,
        and suburban homes without a single worry about data overages.
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
  ),
};
