import React from 'react';
import Link from 'next/link';
import { THS_DISCOUNT } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      If you love pets and want to travel at no cost, TrustedHousesitters (THS) is one of the few
      platforms that can actually make it happen.
      <strong>But here is the catch:</strong> House sitting doesn’t make flights free—it just
      eliminates the single biggest cost of travel: accommodation.
    </p>

    <h2>Is it actually legit?</h2>
    <p>
      Yes. I have completed dozens of sits across the US. It is a global platform connecting
      homeowners with sitters who care for pets and homes while owners are away. Sitters pay an
      annual subscription, then can stay in homes around the world—no accommodation cost, just pet
      care.
    </p>

    <div className="prose-breakout prose-comparison-grid">
      <div className="prose-accent-box variant-pros">
        <h3>The Pros</h3>
        <ul>
          <li>
            <strong>Thousands of sits:</strong> Huge volume globally.
          </li>
          <li>
            <strong>Zero rent:</strong> Your primary expense disappears.
          </li>
          <li>
            <strong>Pet fix:</strong> Animal love without the commitment.
          </li>
          <li>
            <strong>Verified:</strong> Built on a system of trust and safety.
          </li>
        </ul>
      </div>
      <div className="prose-accent-box variant-cons">
        <h3>The Cons</h3>
        <ul>
          <li>
            <strong>Annual fee:</strong> Upfront cost to join (use a discount!).
          </li>
          <li>
            <strong>Competition:</strong> High-demand cities are very competitive.
          </li>
          <li>
            <strong>Rejections:</strong> Part of the process.
          </li>
          <li>
            <strong>Responsibility:</strong> This is a job, not an Airbnb.
          </li>
        </ul>
      </div>
    </div>

    <h2>The 2-Night Breakeven Math</h2>
    <p>Is it worth paying for? Let’s look at the entry-level logic:</p>
    <ul>
      <li>
        TrustedHousesitters membership: <strong>~$200/year</strong>
      </li>
      <li>
        Average hotel cost (very conservative): <strong>$100/night</strong>
      </li>
      <li>
        <strong>Breakeven:</strong> 2 hotel nights = $200
      </li>
    </ul>
    <p>
      Everything after those first 2 nights is net savings. Even for one short trip a year, the
      platform usually pays for itself. If you're curious about specific plans, read my guide on{' '}
      <Link href="/blog/trusted-housesitters-membership-cost-levels">
        membership cost and different levels
      </Link>
      .
    </p>

    <div className="prose-accent-box variant-plain">
      <h3>Still Skeptical?</h3>
      <p>
        But does this actually work in the real world—or is it just clever marketing math? I break
        down real itineraries and numbers in my companion guide:
      </p>
      <Link
        href="/blog/can-you-really-travel-for-free-house-sitting-math"
        className="faq-action-row"
        style={{
          marginTop: 'var(--s-4)',
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>Can You Really Travel for Free? Real Math</span>
        <span style={{ marginLeft: 'auto' }}>→</span>
      </Link>
    </div>

    <div className="prose-accent-box variant-cta">
      <h3>Join with a Discount</h3>
      <p>
        If you're ready to start your journey, don't pay full price. Use my verified link to claim
        your {THS_DISCOUNT} discount on any annual sitter membership.
      </p>
      <a
        href="https://trustedhousesitters.com/refer/raf943607"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold"
      >
        Claim {THS_DISCOUNT} Discount Link
      </a>
    </div>
  </>
);
