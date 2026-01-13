import React from 'react';
import Link from 'next/link';
import ArticleImage from '../../components/ArticleImage';
import { THS_DISCOUNT, THS_LINK } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      If you’re looking into house sitting, TrustedHousesitters (THS) will come up first. Then
      you’ll discover alternatives like Nomador, MindMyHouse, and HouseSittersAmerica and wonder if
      THS is actually better—or just better at marketing.
    </p>

    <p>
      Short answer: TrustedHousesitters is usually the best option, but not for everyone. Here’s
      why.
    </p>

    <h2>What all house-sitting websites have in common</h2>
    <p>Before comparing platforms, understand the baseline:</p>
    <ul>
      <li>No one is paid — it is an exchange of care for stay.</li>
      <li>Trust and reputation matter more than platform features.</li>
      <li>Availability depends heavily on geography.</li>
    </ul>

    <div className="prose-accent-box">
      <p>
        Every platform lives or dies on sit volume and trust mechanisms. That’s where the real
        differences are.
      </p>
    </div>

    <h2>1. TrustedHousesitters (THS)</h2>
    <p>
      <strong>What it does well</strong>
    </p>
    <ul>
      <li>By far the largest number of listings worldwide</li>
      <li>Strong review system on both sides</li>
      <li>Structured applications and sit histories</li>
      <li>High adoption in expensive cities (NYC, London, Sydney)</li>
    </ul>

    <p>
      <strong>Real drawbacks</strong>
    </p>
    <ul>
      <li>Annual membership fee (higher than competitors)</li>
      <li>Popular sits get competitive</li>
      <li>Not friendly to last-minute planners</li>
    </ul>

    <p>
      <strong>THS works best if:</strong>
    </p>
    <ul>
      <li>You want international or major-city sits</li>
      <li>You’re planning ahead</li>
      <li>You plan to use it long term</li>
    </ul>

    <ArticleImage
      src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200"
      alt="Solo female traveler planning a trip on a laptop with her dog"
      caption="Choosing the right platform depends on your travel goals and how much you plan ahead."
      aspectRatio="3/2"
    />

    <h2>2. Nomador</h2>
    <p>
      <strong>Strengths:</strong> Good presence in France and parts of Europe. It is slightly more
      flexible about “local” sits and has a lower barrier for casual sitters.
    </p>
    <p>
      <strong>Limitations:</strong> Fewer listings overall and a smaller global footprint compared
      to THS.
    </p>

    <h2>3. MindMyHouse & HouseSittersAmerica</h2>
    <ul>
      <li>
        <strong>MindMyHouse:</strong> Very cheap membership and straightforward, but lacks strong
        trust signals and active moderation.
      </li>
      <li>
        <strong>HouseSittersAmerica:</strong> Decent US coverage and popular with retirees, but it
        has a dated interface and weak international presence.
      </li>
    </ul>

    <div className="prose-accent-box variant-plain">
      <h3>Which one is actually best?</h3>
      <p>
        For most people, TrustedHousesitters wins because more sits equals more chances to land a
        match. It offers the best long-term ROI if you actually travel frequently.
      </p>
    </div>

    <p>
      If you’re still unsure whether house sitting itself makes sense for you—and not just the
      platform—you might be comparing it to paid options like Rover.
    </p>

    <Link
      href="/blog/trusted-housesitters-vs-rover-comparison"
      className="faq-action-row"
      style={{
        marginTop: 'var(--s-4)',
        border: 'none',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span>THS vs Rover: What People Get Wrong</span>
      <span>→</span>
    </Link>

    <div className="prose-accent-box variant-cta">
      <h3>Join the Global Leader</h3>
      <p>Ready to access the largest network of sits? Use my link for {THS_DISCOUNT} off.</p>
      <a href={THS_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold btn-wide">
        Discount: {THS_DISCOUNT}
      </a>
    </div>
  </>
);
