import React from 'react';
import Link from 'next/link';
import { BlogPost, REFERRALS } from '../../types';

export const post: BlogPost = {
  id: '4',
  slug: 'trusted-housesitters-membership-cost-levels',
  title: 'Which TrustedHousesitters Sitter Membership Level Should You Choose?',
  navTitle: 'Membership Guide',
  excerpt:
    'Breaking down Basic, Standard, and Premium sitter memberships to find the right fit for your travel style.',
  date: 'January 2026',
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
    'trustedhousesitters ths basic vs standard vs premium plans',
    'trustedhousesitters is ths premium worth it',
    'trustedhousesitters which ths plan to choose',
    'is trustedhousesitter free',
    'how much does it cost to join trusted house sitters',
  ],
  body: (
    <>
      <p className="prose-lead">
        TrustedHousesitters offers three membership levels for sitters (not pet owners - that's a
        different pricing structure). The question isn't "what do they cost?" (you can check that on
        their site). The question is: which one actually fits your situation?
      </p>

      <p>
        Before diving into the tiers, understand this: if you're still deciding whether house
        sitting is even worth it,{' '}
        <Link href="/blog/is-trusted-housesitters-worth-it-for-sitters">
          read my breakdown on whether THS is worth the investment
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
        <strong>Critical to understand:</strong> Both Basic and Standard charge a per-sit booking
        fee for every confirmed sit. Only Premium has no booking fees.
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
        <strong>Best for:</strong> Someone testing house sitting for the very first time who plans
        to do only 1-2 sits per year and is comfortable with minimal protection.
      </p>

      <p>
        <strong>The reality:</strong> No liability protection means if you're found negligent in an
        incident, you have no coverage. The per-sit fees also add up quickly if you do more than a
        couple sits.
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

      <h2>Premium: For Full-Time Nomads</h2>

      <div className="prose-accent-box variant-pros">
        <span className="accent-box-label">What You Get:</span>
        <ul>
          <li>Unlimited access to apply for sits</li>
          <li>
            <strong>No per-sit booking fees</strong>
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
        housing and do many sits per year.
      </p>

      <p>
        <strong>The two key features:</strong>
      </p>
      <ul>
        <li>
          <strong>No booking fees:</strong> If you're doing 10+ sits per year, this alone makes
          Premium worth it financially
        </li>
        <li>
          <strong>Sit cancellation insurance:</strong> If an owner cancels last-minute and you have
          no backup housing, Premium covers emergency hotel costs
        </li>
      </ul>

      <h2>How to Decide</h2>

      <p>Ask yourself these questions:</p>

      <ol>
        <li>
          <strong>How many sits will you do per year?</strong>
          <ul>
            <li>1-2 sits → Basic or Standard (calculate total with booking fees)</li>
            <li>3-5 sits → Standard makes sense</li>
            <li>6+ sits → Premium becomes cost-effective due to no booking fees</li>
            <li>Full-time (10+ sits) → Premium is the clear winner</li>
          </ul>
        </li>
        <li>
          <strong>Do you have backup housing if a sit cancels?</strong>
          <ul>
            <li>Yes → Standard might be enough</li>
            <li>No → Premium protects you</li>
          </ul>
        </li>
        <li>
          <strong>What's your comfort level with risk?</strong>
          <ul>
            <li>Willing to go without liability coverage → Basic</li>
            <li>Want liability protection → Standard or Premium</li>
            <li>Want full protection + no booking fees → Premium</li>
          </ul>
        </li>
      </ol>

      <h2>The Break-Even Math</h2>
      <p>
        <strong>At current pricing (check THS for updates):</strong>
      </p>
      <ul>
        <li>Basic: Annual fee + (per-sit fee × number of sits)</li>
        <li>Standard: Annual fee + (per-sit fee × number of sits)</li>
        <li>Premium: Annual fee only (no per-sit fees)</li>
      </ul>
      <p>
        Premium breaks even with Standard at around 8 sits per year. After that, Premium is cheaper.
      </p>

      <h2>My Recommendation</h2>

      <p>
        I use <strong>Premium</strong> because I travel full-time and house sitting is my primary
        housing. The sit cancellation insurance is worth it when you have no backup plan, and the no
        booking fees save money when you're doing many sits throughout the year.
      </p>

      <p>
        For most people who house sit regularly but have other housing options, Standard provides
        the liability protection you need. Basic only makes sense if you're truly just testing the
        waters with 1-2 sits.
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
