import React from 'react';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      “Free travel” sounds like influencer bait and in most cases, it is. House sitting is
      different, but only if you understand the math, the tradeoffs, and the actual constraints of
      the lifestyle.
    </p>

    <p>
      This article breaks down exactly when house sitting is effectively free, when it’s not, and
      why most people fail to make it work. Accommodation is typically 40–70% of travel costs.
      Removing it changes everything.
    </p>

    <h2>What “Free Travel” Actually Means (And Doesn't)</h2>
    <ul>
      <li>
        <strong>It does NOT mean:</strong> Free flights, luxury vacations on demand, or zero
        responsibility.
      </li>
      <li>
        <strong>It DOES mean:</strong> $0 accommodation costs, stable housing while traveling, and
        predictable food/living expenses instead of nightly hotel rates.
      </li>
    </ul>

    <h2>Scenario #1: The Slow Traveler (1–2 Sits/Month)</h2>
    <p>
      This is the most common path for digital nomads. You spend a few weeks in one location before
      moving on.
    </p>
    <ul>
      <li>Assumption: 14 nights per sit, 10 months per year.</li>
      <li>Hotel alternative ($100/night): $14,000 total.</li>
      <li>Membership cost: ~$200.</li>
      <li>Net savings: ~$13,800/year.</li>
    </ul>
    <p>
      Even if you spend $2,000 extra on transport and occasional buffer hotels, you are still over
      $10k ahead compared to traditional travel.
    </p>

    <h2>Scenario #2: Full-Time Nomad (365 Days)</h2>
    <p>
      Skeptics usually say: “Sure, but you’ll never cover the whole year.” In practice, many sitters
      do—especially if they are flexible with location and apply strategically.
    </p>

    <div className="prose-breakout">
      <div className="financial-flip-container">
        <div className="sub-header">Full-Time Nomad Comparison</div>
        <h3 className="serif-italic">The Financial Flip</h3>

        <div className="financial-flip-grid">
          <div className="financial-flip-col old">
            <span className="sub-header">Traditional Living</span>
            <div className="amount">$36,500</div>
            <p className="calculation">$100/night x 365 Days</p>
          </div>
          <div className="financial-flip-col new">
            <span className="sub-header">Sitter Journey</span>
            <div className="amount">$200</div>
            <p className="calculation">Annual Membership</p>
          </div>
        </div>

        <div className="financial-flip-results">
          <div className="badge">The Real Gap</div>
          <p className="serif-italic" style={{ marginBottom: 'var(--s-2)' }}>
            Even with 35 paid nights ($4k) for travel gaps:
          </p>
          <div className="total-amount display-title-md shimmer-text">$32,000+</div>
          <p className="serif-italic">Saved every single year.</p>
        </div>
      </div>
    </div>

    <h2>Scenario #3: My Actual Experience</h2>
    <p>
      In the last 6 months (180 days), I paid for just 6 nights of hotels—and that was mostly by
      choice, not necessity. This is the part most people miss: House sitting compounds. The longer
      you do it and the stronger your reviews, the easier it becomes to string sits together
      back-to-back.
    </p>

    <h2>The Hidden Costs</h2>
    <p>House sitting is not magic. Costs still exist:</p>
    <ul>
      <li>
        <strong>Transport:</strong> Flights or fuel costs remain your responsibility.
      </li>
      <li>
        <strong>Time:</strong> Applying for sits and managing your profile takes effort.
      </li>
      <li>
        <strong>Constraints:</strong> You have fixed dates and pet responsibilities.
      </li>
    </ul>

    <h2>Why Most People Fail</h2>
    <p>
      They treat it like Airbnb. They apply late, only want the top-tier "Instagram" cities, or have
      weak profiles. Success rewards flexibility, reliability, and clear communication.
    </p>

    <div className="prose-end">
      <strong>The Bottom Line</strong>
      So, is it really “free travel”? If by “free” you mean no accommodation costs and radically
      cheaper long-term travel, then absolutely. It doesn't make you rich; it makes travel
      sustainable.
      <br />
      <br />
      <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
        {REFERRALS.THS.label}
      </a>
    </div>
  </>
);
