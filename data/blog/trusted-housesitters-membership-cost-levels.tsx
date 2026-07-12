import React from 'react';
import Link from 'next/link';
import { BlogPost, REFERRALS } from '../../types';

export const post: BlogPost = {
  id: '4',
  slug: 'trusted-housesitters-membership-cost-levels',
  topic: 'TrustedHousesitters',
  title: 'Which Membership Level Should You Choose?',
  navTitle: 'Membership Guide',
  excerpt:
    'Breaking down Basic, Standard, and Premium sitter memberships to find the right fit for your travel style.',
  date: 'Updated: June 26, 2026',
  category: 'Sitter Guide',
  location: 'Financial',
  sortOrder: 3,
  imageUrl:
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1200',
  ctaLabel: REFERRALS.THS.label,
  ctaLink: REFERRALS.THS.link,
  faqIds: ['travel-savings', 'ths-experience-level-sits', 'ths-membership-try'],
  seoTitle: 'Which TrustedHousesitters Sitter Membership Should You Choose? | Decision Guide',
  seoDescription:
    'Compare Basic, Standard, and Premium sitter tiers. Understand what each level offers and which one fits your travel frequency and risk tolerance.',
  seoKeywords: [
    'trustedhousesitters membership fee insurance',
    'trustedhousesitters higher-tier membership perks',
    'trustedhousesitters membership price 2026',
    'trustedhousesitters basic vs standard vs premium plans',
    'is TrustedHousesitters premium worth it',
    'which TrustedHousesitters plan to choose',
    'is trustedhousesitter free',
    'how much does it cost to join trusted house sitters',
  ],
  body: (
    <>
      <p className="prose-lead">
        TrustedHousesitters offers three membership levels for <strong>sitters</strong>. (Check the{' '}
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          TrustedHousesitters
        </a>{' '}
        website for current pricing.)
      </p>
      <p>
        Before diving into the tiers, understand this: if you're still deciding whether house
        sitting is even worth it,{' '}
        <Link href="/blog/is-trusted-housesitters-worth-it-for-sitters">
          read my breakdown on whether TrustedHousesitters is worth the investment
        </Link>
        . Once you know you're joining, the membership decision becomes about risk tolerance and
        travel frequency.
      </p>
      <h2>Understanding the Three Sitter Tiers</h2>
      <p>All three levels let you apply for unlimited sits worldwide. The differences are in:</p>
      <ul>
        <li>Per-sit booking fees</li>
        <li>Insurance and liability protection</li>
        <li>Support priority</li>
        <li>Additional perks (vet line, airport lounges, etc.)</li>
      </ul>
      <p>
        <strong>Critical to understand:</strong> Both the Basic and Standard tiers charge a booking
        fee for every confirmed sit. Only the Premium tier has no booking fees.
      </p>
      <h2>Basic: The Bare Minimum</h2>
      <div className="prose-accent-box variant-cons">
        <span className="accent-box-label">What You Get:</span>
        <ul>
          <li>Unlimited access to apply for sits</li>
          <li>Per-sit booking fee charged for each confirmed sit</li>
          <li>No insurance or liability protection</li>
          <li>Basic support</li>
        </ul>
      </div>
      <p>
        <strong>Best for:</strong> Someone new to house sitting who plans to do just 1–2 sits per
        year and is comfortable with minimal protection.
      </p>
      <h2>Standard: The Middle Ground</h2>
      <div className="prose-accent-box">
        <span className="accent-box-label">What You Get:</span>
        <ul>
          <li>Unlimited access to apply for sits</li>
          <li>Per-sit booking fee charged for each confirmed sit</li>
          <li>Accident and third-party liability protection</li>
          <li>24/7 vet line access</li>
          <li>Dedicated support</li>
        </ul>
      </div>
      <p>
        <strong>Best for:</strong> Regular sitters who do several sits per year and want liability
        protection but have backup housing if a sit cancels.
      </p>
      <p>
        <strong>Why it matters:</strong> The liability protection covers you if someone gets injured
        on the property while you're sitting, or if you're found negligent in an incident. The vet
        line is also incredibly helpful when you're in an unfamiliar area and need urgent pet
        advice.
      </p>
      <p>
        <strong>The math:</strong> Standard costs more upfront than Basic, but the added protection
        is significant. However, you still pay per-sit fees, which add up if you're doing many sits.
      </p>
      <h2>Premium: Frequent Sitters</h2>
      <div className="prose-accent-box variant-pros">
        <span className="accent-box-label">What You Get:</span>
        <ul>
          <li>Unlimited access to apply for sits</li>
          <li>
            <span className="underline">No</span> per-sit booking fees
          </li>
          <li>Accident and third-party liability protection</li>
          <li>Sit cancellation insurance</li>
          <li>24/7 vet line access</li>
          <li>Priority support</li>
          <li>2 global airport lounge passes</li>
          <li>Premium badge on profile</li>
        </ul>
      </div>
      <p>
        <strong>Best for:</strong> Full-time nomads who rely on house sitting as their primary
        accommodation, frequent sitters, and anyone who wants maximum protection.
      </p>
      <p>
        <strong>The two key features:</strong>
      </p>
      <ul>
        <li>
          <strong>No booking fees:</strong> If you're doing 8+ sits per year at regular pricing (or
          6+ with a{' '}
          <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
            25% referral discount
          </a>
          ), this alone can make Premium worth it financially.
        </li>
        <li>
          <strong>Sit cancellation insurance:</strong> If an owner cancels at the last minute,
          Premium covers emergency hotel costs.
        </li>
      </ul>
      <h2>How to Decide</h2>
      <p>Ask yourself these questions:</p>
      <ol>
        <li>
          <strong>How many sits will you do per year?</strong>
          <ul>
            <li>
              1-2 sits → Choose Basic unless you want the extra protection that comes with Standard.
            </li>
            <li>3-7 sits → Standard is usually the best value.</li>
            <li>
              8+ sits → Premium generally becomes the better financial choice because there are no
              booking fees.
            </li>
          </ul>
        </li>

        <li>
          <strong>Do you have backup housing if a sit gets canceled?</strong>
          <ul>
            <li>Yes → Basic or Standard is likely enough.</li>
            <li>No → Premium's sit cancellation insurance is incredibly valuable.</li>
          </ul>
        </li>

        <li>
          <strong>What's your comfort level with risk?</strong>
          <ul>
            <li>Comfortable without liability coverage → Basic.</li>
            <li>Want liability protection → Standard or Premium.</li>
            <li>Want the most protection and no booking fees → Premium.</li>
          </ul>
        </li>
      </ol>

      <p>
        If you plan to use TrustedHousesitters regularly throughout the year, Premium generally
        offers the best long-term value.
      </p>

      <h2>The Break-Even Math</h2>

      <p>
        <strong>
          At current pricing as of June 26, 2026 (check the{' '}
          <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
            TrustedHousesitters
          </a>{' '}
          website for updates):
        </strong>
      </p>

      <ul>
        <li>Basic: $129 annual membership + $12 booking fee for each confirmed sit.</li>
        <li>Standard: $169 annual membership + $12 booking fee for each confirmed sit.</li>
        <li>Premium: $259 annual membership only (no booking fees).</li>
      </ul>

      <p>
        Premium becomes the less expensive option starting with your 8th confirmed sit. New members
        using my{' '}
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          referral link
        </a>{' '}
        receive <strong>25% off</strong> their first year's membership. That brings the prices to
        approximately <strong>$97</strong> for Basic, <strong>$127</strong> for Standard, and{' '}
        <strong>$194</strong> for Premium. With discounted pricing, Premium becomes the less
        expensive option starting with your 6th confirmed sit.
      </p>

      <h2>My Recommendation</h2>

      <p>
        I average around 20 house sits per year, so <strong>Premium</strong> is an easy choice for
        me. At that volume, the lower cost per sit, included cancellation protection, and lack of
        booking fees more than justify the higher membership price.
      </p>

      <p>
        If you only do a handful of sits each year, <strong>Standard</strong> is likely the better
        value. It includes the liability protection most regular sitters need without paying for
        features you may never use. <strong>Basic</strong> only really makes sense if you're trying
        house sitting for the first time and expect to complete just one or two sits.
      </p>

      <p>
        For a deeper look at whether the membership investment makes sense at all, read my{' '}
        <Link href="/blog/can-you-really-travel-for-free-house-sitting-math">
          breakdown of the actual travel math
        </Link>
        .
      </p>
      <div className="prose-end">
        <strong>Ready to Join?</strong>
        Whichever plan you choose, you can use my referral link to get {REFERRALS.THS.discount} your
        first year.
        <br />
        <br />
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          {REFERRALS.THS.label}
        </a>
      </div>
    </>
  ),
};
