import React from 'react';
import Link from 'next/link';
import { BlogPost, REFERRALS } from '../../types';

export const post: BlogPost = {
  id: '12',
  slug: 'trusted-housesitters-how-to-set-up-alerts-and-filters',
  title: 'My TrustedHousesitters Alert Strategy (Real Examples)',
  navTitle: 'Alerts Strategy',
  excerpt:
    'How I configure alerts to catch the sits I actually want. Real examples from a full-time sitter.',
  date: 'January 2026',
  category: 'Expertise',
  location: 'Strategy',
  sortOrder: 11,
  imageUrl:
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200',
  ctaLabel: 'Claim 25% Off Membership',
  ctaLink: REFERRALS.THS.link,
  seoTitle: 'TrustedHousesitters Alert Strategy | Real Sitter Examples',
  seoDescription:
    'Real examples of how an experienced sitter configures TrustedHousesitters alerts. Learn a strategic approach that actually works.',
  seoKeywords: [
    'trustedhousesitters alerts strategy',
    'ths notification setup',
    'house sitting alert examples',
    'how to use ths filters',
    'competitive sit notifications',
    'house sitting search strategy',
  ],
  body: (
    <>
      <p className="prose-lead">
        Alerts are how you catch sits before they fill up. Here's how I configure mine, with real
        examples you can adapt to your own situation.
      </p>

      <p>
        <strong>Fair warning:</strong> You'll probably find yourself browsing sits constantly. It's
        more entertaining than social media, honestly. When you see a sit you really love (even if
        the dates don't work), click the heart/like button. TrustedHousesitters will send you alerts
        when that specific homeowner posts new dates in the future.
      </p>

      <h2>My Alert Strategy</h2>
      <p>
        Everyone's filters will be different because we all want different things. Here's how I set
        mine up. Use these as examples to build your own system.
      </p>

      <h3>Alert #1: Long-Term Cat Sits Anywhere in the US</h3>

      <div className="prose-accent-box variant-pros">
        <span className="accent-box-label">My Settings:</span>
        <ul>
          <li>
            <strong>Location:</strong> United States (entire country)
          </li>
          <li>
            <strong>Pet type:</strong> Cats only
          </li>
          <li>
            <strong>Duration:</strong> 1 month or longer
          </li>
          <li>
            <strong>Dates:</strong> Next 6 months
          </li>
        </ul>
      </div>

      <p>
        <strong>Why this works for me:</strong> Long-term cat sits are my foundation. Cats are lower
        maintenance, and a month gives me time to settle into a location. I'm flexible on where in
        the US, so casting a wide net makes sense.
      </p>

      <p>
        <strong>Why 6 months?</strong> I usually book 6 months ahead, not more. Life can always
        change when you're doing this full-time, and I want flexibility. If you have a specific work
        vacation week, you'd configure this differently.
      </p>

      <h2>Finding Your Own Strategy</h2>

      <p>Your alerts should match your actual needs and constraints:</p>

      <ul>
        <li>
          <strong>If you have a car:</strong> You can be flexible on location
        </li>
        <li>
          <strong>If you don't have a car:</strong> Filter for cities with good public transit
        </li>
        <li>
          <strong>If you work remotely:</strong> Make sure you can filter or check for wifi
        </li>
        <li>
          <strong>If you have pets of your own:</strong> Look for sits that allow guest pets
        </li>
      </ul>

      <h2>Don't Overdo It</h2>

      <p>Start with 2-3 alerts that match what you actually want. You can always add more later.</p>

      <p>
        Too many alerts = you'll ignore them all. Keep it focused on sits you'd genuinely accept.
      </p>

      <p>
        If you're brand new and don't have reviews yet, read my{' '}
        <Link href="/blog/how-to-get-your-first-house-sit-no-reviews">
          guide on landing your first sit
        </Link>{' '}
        before spending too much time on alert strategy. Get that first review, then worry about
        optimization.
      </p>

      <p>
        Once you have alerts set up and you're ready to apply quickly, check out my{' '}
        <Link href="/blog/trusted-housesitters-how-to-apply-for-competitive-sits-fast-using-ai">
          AI strategy for fast applications
        </Link>
        .
      </p>

      <div className="prose-end">
        <strong>The Bottom Line</strong>
        Alerts save time and catch opportunities you'd otherwise miss. Start simple, adjust as you
        learn what you actually want. And yes, browsing sits is addictive - but at least it's more
        useful than scrolling social media.
        <br />
        <br />
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          {REFERRALS.THS.label}
        </a>
      </div>
    </>
  ),
};
