import React from 'react';
import Link from 'next/link';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      If you love pets and want to travel at no cost, TrustedHousesitters (THS) is one of the few
      platforms that can actually make it happen. <strong>But here is the catch:</strong> House
      sitting doesn’t make flights free—it just eliminates the single biggest cost of travel:
      accommodation.
    </p>

    <h2>Is it actually legit?</h2>
    <p>
      Yes. Based on my numerous successful sits across the country, I can confirm it is a robust,
      safe, and highly functional community. It is a global platform connecting homeowners with
      sitters who care for pets and homes while owners are away. Sitters pay an annual subscription,
      then can stay in homes around the world—no accommodation cost, just pet care.
    </p>

    <div className="prose-breakout">
      <div className="prose-accent-box variant-pros">
        <span className="accent-box-label">The Pros</span>
        <ul>
          <li>
            <strong>Massive Volume:</strong> Thousands of active sits across the globe.
          </li>
          <li>
            <strong>Zero Rent:</strong> Eliminates your primary travel expense.
          </li>
          <li>
            <strong>Home Comforts:</strong> Full kitchens, workspaces, and cozy living rooms.
          </li>
          <li>
            <strong>Verified Reviews:</strong> A system built on transparency and trust.
          </li>
        </ul>
      </div>
      <div className="prose-accent-box variant-cons">
        <span className="accent-box-label">The Cons</span>
        <ul>
          <li>
            <strong>Upfront Cost:</strong> You must pay the annual fee to apply.
          </li>
          <li>
            <strong>Responsibility:</strong> This is a job, not a vacation. Pets need you.
          </li>
          <li>
            <strong>Competition:</strong> Popular cities like NYC or London move fast.
          </li>
          <li>
            <strong>Learning Curve:</strong> Your first few sits take strategy to land.
          </li>
        </ul>
      </div>
    </div>

    <h2>The 2-Night Breakeven Math</h2>
    <p>People often hesitate at the $129-$259 annual fee. But let’s look at the math:</p>
    <ul>
      <li>
        Standard Sitter membership: <strong>~$169/year</strong> (with discount)
      </li>
      <li>
        Average hotel/Airbnb cost (conservative): <strong>$85/night</strong>
      </li>
      <li>
        <strong>Breakeven:</strong> 2 hotel nights = your entire year paid for.
      </li>
    </ul>
    <p>
      Everything after those first 2 nights is net savings. For a full-time traveler, this is easily
      the most powerful financial lever available. Read more about:{' '}
      <Link href="/blog/trusted-housesitters-membership-cost-levels">
        Sitter guide: membership cost and different levels
      </Link>
      .
    </p>

    <div className="prose-end">
      <strong>Final Verdict</strong>
      For the cost of two nights in a mediocre hotel, you unlock a year of staying in beautiful
      homes with pets you'll love. It is the single most effective trade a traveler can make.
      <br />
      <br />
      <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
        {REFERRALS.THS.label}
      </a>
    </div>
  </>
);
