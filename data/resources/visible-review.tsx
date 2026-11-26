import React from 'react';
import { REFERRALS, ResourceItem } from '../../types';

export const resource: ResourceItem = {
  id: 'visible',
  slug: 'visible-review',
  name: 'Visible Review',
  navTitle: 'Visible Review',
  description: 'The phone plan I use for unlimited data and hotspot.',
  date: 'January 9, 2026',
  sortOrder: 3,
  discountText: REFERRALS.VISIBLE.discount,
  ctaLabel: REFERRALS.VISIBLE.discount,
  link: REFERRALS.VISIBLE.link,
  icon: 'smartphone',
  imageUrl:
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
  faqIds: ['ths-internet-remote', 'remote-work-internet', 'travel-wellness-gym'],
  relatedSlugs: [
    'can-you-really-travel-for-free-house-sitting-math',
    'hidden-perks-of-house-sitting',
    'is-trusted-housesitters-worth-it-for-sitters',
  ],
  seoTitle: 'Visible Wireless Review: Best Unlimited Plan for Travelers',
  seoDescription: `Personal review of Visible Wireless for house sitting and remote work. Get your first month of unlimited data and ${REFERRALS.VISIBLE.discount} with referral code.`,
  seoKeywords: [
    'visible mobile review 2026',
    'best unlimited hotspot for travelers',
    'remote work internet solutions',
    'visible vs verizon for travelers',
    'reliable hotspot while traveling',
    'affordable unlimited data plans',
    'visible wireless referral code',
    'travel tech kit essentials',
  ],
  body: (
    <>
      <p className="prose-lead">
        When you work remotely from different homes, reliable internet is essential. Visible is the
        most important part of my setup, giving me an unlimited hotspot whenever I need a dependable
        connection.
      </p>

      <h2>The Unlimited Hotspot Hack</h2>
      <p>
        Most "unlimited" plans have a hidden hotspot cap. Visible is different. They offer unlimited
        mobile hotspot data, which lets me work comfortably from quiet mountain cabins, beachfront
        homes, and suburban neighborhoods without worrying about data limits.
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
            <strong>Network:</strong> Runs on Verizon’s 5G/LTE network, with strong coverage across
            the US.
          </li>
        </ul>
      </div>
    </>
  ),
};
