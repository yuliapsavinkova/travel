import React from 'react';
import { REFERRALS } from '../types';

export const disclosureContent = (
  <>
    <p className="prose-lead">
      Transparency is the foundation of the Sitter Journey community. This page explains how I
      handle resource and affiliate relationships on this site.
    </p>

    <h2>Resources vs. Affiliates</h2>
    <p>
      Currently, many of the links in my resources (like TrustedHousesitters) are
      <strong>Resource Links</strong>. I do not receive cash payments for these. Instead, they
      operate on a "Give One, Get One" model. For example, you receive a discount on your
      membership, and I receive a credit (like a free month) added to mine.
    </p>

    <p>
      <strong>Affiliate Links</strong> are slightly different and involve a cash commission paid by
      a brand. While I may incorporate these in the future to help cover site hosting and
      photography costs, my current focus is solely on the resource programs I personally use every
      day.
    </p>

    <h2>Why I Disclose Both</h2>
    <p>
      Whether it is a free month of service or a small commission, the law (FTC) and search engines
      (Google) require disclosure of any "material connection." This ensures you know exactly when a
      recommendation might be incentivized.
    </p>

    <div className="prose-accent-box">
      <h3>Current Resource Partners</h3>
      <ul>
        <li>
          <strong>
            <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
              TrustedHousesitters
            </a>
            :
          </strong>
          Resource (Free Membership Months)
        </li>
        <li>
          <strong>
            <a href={REFERRALS.ROVER.link} target="_blank" rel="noopener noreferrer">
              Rover
            </a>
            :
          </strong>
          Resource (Pet Care Credits)
        </li>
        <li>
          <strong>
            <a href={REFERRALS.VISIBLE.link} target="_blank" rel="noopener noreferrer">
              Visible
            </a>
            :
          </strong>
          Resource (Mobile Service Credits)
        </li>
        <li>
          <strong>
            <a href={REFERRALS.PF.link} target="_blank" rel="noopener noreferrer">
              Planet Fitness
            </a>
            :
          </strong>
          Resource (Wellness Credits)
        </li>
      </ul>
    </div>
  </>
);
