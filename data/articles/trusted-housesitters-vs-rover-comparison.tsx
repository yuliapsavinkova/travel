import React from 'react';
import Link from 'next/link';
import ArticleImage from '../../components/ArticleImage';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Comparing TrustedHousesitters to Rover is extremely common—and mostly wrong. Not because one
      is better than the other, but because they solve different problems.
    </p>

    <p>
      If you don’t understand that difference before signing up, you’ll be disappointed by whichever
      one you choose.
    </p>

    <h2>The core difference: exchange vs transaction</h2>

    <div className="prose-accent-box">
      <p>
        <strong>TrustedHousesitters</strong>
      </p>
      <ul>
        <li>No money changes hands</li>
        <li>Long-term, immersive stays</li>
        <li>Built on mutual trust</li>
        <li>Planning required</li>
      </ul>

      <p>
        <strong>Rover</strong>
      </p>
      <ul>
        <li>You get paid</li>
        <li>Short-term gigs</li>
        <li>Transactional relationship</li>
        <li>Easy to start, easy to quit</li>
      </ul>
    </div>

    <p>This isn’t about features. It’s about mindset.</p>

    <h2>Why people default to Rover</h2>
    <p>Rover feels safer on paper:</p>
    <ul>
      <li>Clear pricing</li>
      <li>Defined services</li>
      <li>“Customer” expectations</li>
    </ul>

    <p>But hidden realities kick in quickly:</p>
    <ul>
      <li>Platform takes a cut</li>
      <li>Taxes and liability are on you</li>
      <li>Owners expect professional availability</li>
      <li>Burnout is real</li>
    </ul>

    <p>Rover is work. Sometimes good work, sometimes not.</p>

    <ArticleImage
      src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200"
      alt="Solo female sitting with a dog in a home setting"
      caption="Rover is a professional pet care gig; THS is a lifestyle choice based on mutual exchange."
      aspectRatio="3/2"
    />

    <h2>Why TrustedHousesitters feels risky at first</h2>
    <p>Common fears:</p>
    <ul>
      <li>“What if something goes wrong?”</li>
      <li>“What if I don’t get picked?”</li>
      <li>“Why would anyone trust strangers?”</li>
    </ul>

    <p>Valid concerns—but they fade once you understand:</p>
    <ul>
      <li>Reviews matter more than profiles</li>
      <li>Most sits are routine, not dramatic</li>
      <li>Long-term users optimize their strategy</li>
    </ul>

    <p>
      THS is not casual. It rewards people who plan and commit. If you’re curious how issues are
      actually handled, see the breakdown of:{' '}
      <Link href="/blog/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it">
        what happens when a sit is reported on TrustedHousesitters
      </Link>
      .
    </p>

    <h2>Who should choose Rover</h2>
    <ul>
      <li>You want income</li>
      <li>You want flexible, short stays</li>
      <li>You’re okay being “on call”</li>
      <li>You don’t care where you stay</li>
    </ul>
    <p>Rover is gig work. If you treat it as such, it’s fine.</p>

    <h2>Who should choose TrustedHousesitters</h2>
    <ul>
      <li>Accommodation matters more than cash</li>
      <li>You want longer stays</li>
      <li>You plan months ahead</li>
      <li>You see this as a lifestyle tool</li>
    </ul>

    <p>
      This is why long-term users rarely quit once they’re established. If you’ve decided house
      sitting fits your life, the next real question is{' '}
      <Link href="/blog/trusted-housesitters-vs-other-house-sitting-websites">
        which platform within house sitting works best
      </Link>
      .
    </p>

    <div className="prose-end">
      <strong>Your choice</strong>
      One is a side-hustle, one is a gateway to travel. I use both to maintain my life on the road,
      but for housing, THS is the clear winner.
      <br />
      <br />
      <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
        {REFERRALS.THS.label}
      </a>
    </div>
  </>
);
