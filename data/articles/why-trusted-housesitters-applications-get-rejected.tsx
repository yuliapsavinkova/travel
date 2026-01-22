import React from 'react';
import Link from 'next/link';
import { THS_DISCOUNT, THS_LINK } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      It is frustrating to be rejected, and it happens more often than you think, even to
      experienced sitters. You should never take it personally, because most of the time, it has
      nothing to do with you. I will share the top reasons why applications get rejected:
    </p>

    <blockquote className="prose-quote variant-plain">
      <strong>Advice:</strong> NEVER take it personally.
    </blockquote>

    <h2>1. Rejection Factors You Can Control</h2>
    <ul>
      <li>
        <strong>Limited Reviews:</strong> Without verified proof on the platform, you are seen as a
        higher risk. Focus on building your base with local assignments first. Read my:{' '}
        <Link href="/blog/how-to-get-your-first-house-sit-no-reviews">
          guide for landing your first sit
        </Link>
        .
      </li>
      <li>
        <strong>Volume of Competition:</strong> Even if you have several reviews, there are often
        sitters with dozens more applying for the same high demand homes.
      </li>
      <li>
        <strong>Profile Quality:</strong> If your photos are not clear or your bio feels generic,
        homeowners will likely pass over your profile. You can fix this immediately using my:{' '}
        <Link href="/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits">
          profile mastery tips
        </Link>
        .
      </li>
      <li>
        <strong>Application Specifics:</strong> If your initial message is a template and does not
        address the specific pets or home requirements, homeowners will skip your application.
      </li>
    </ul>

    <h2>2. Rejection Factors You Cannot Control</h2>
    <p>
      When these factors are at play, the best strategy is simply to move on to the next opportunity
      immediately.
    </p>

    <ul>
      <li>
        <strong>The Returning Sitter:</strong> A previous sitter applied to the same listing. They
        almost always get priority because the owners already trust them and the pet already knows
        them.
      </li>
      <li>
        <strong>Demographic Preferences:</strong> Some homeowners specifically look for solo female
        sitters or retired couples. If you do not fit that vision, it is completely out of your
        hands.
      </li>
      <li>
        <strong>Age Range Filters:</strong> Some owners seek a specific age range, for example, “a
        retired couple over 55”, to match the pace of their lifestyle or neighborhood.
      </li>
      <li>
        <strong>Subconscious Resemblance:</strong> Owners often subconsciously choose a sitter who
        resembles themselves. They believe the pet will adjust more easily to someone who feels
        familiar.
      </li>
      <li>
        <strong>Sitter Location:</strong> Even though the platform is focused on travel, many owners
        prefer a sitter from their own town. This often leads to rejections that have nothing to do
        with your profile or experience.
      </li>
    </ul>

    <p className="prose-end">
      Success in house sitting is about finding the right match, not about being perfect for every
      home. Stay focused and keep your strategy sharp.
      <span style={{ display: 'block', marginTop: 'var(--s-4)' }}>
        <a href={THS_LINK} target="_blank" rel="noopener noreferrer">
          Save {THS_DISCOUNT} on your membership using my verified referral link.
        </a>
      </span>
    </p>
  </>
);
