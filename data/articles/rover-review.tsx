import React from 'react';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Rover is the ultimate side-gig for animal lovers and a vital tool for filling scheduling gaps
      in a nomadic lifestyle. It allows you to earn while you travel.
    </p>

    <h2>Turning Animal Care into Income</h2>
    <p>
      Unlike house sitting exchanges, Rover is a marketplace for paid pet services. I use it
      primarily for overnight house sitting and drop-in visits. It’s an excellent way to monetize
      your skills as a responsible sitter while you move between long-term sits.
    </p>

    <div className="prose-accent-box variant-pros">
      <span className="accent-box-label">Why it works for travelers:</span>
      <ul>
        <li>
          <strong>Flexibility:</strong> Set your own rates and availability.
        </li>
        <li>
          <strong>Demand:</strong> High demand in almost every US city.
        </li>
        <li>
          <strong>Safety:</strong> The Rover Guarantee and 24/7 support.
        </li>
      </ul>
    </div>

    <div className="prose-accent-box variant-cta">
      <span className="accent-box-label">Claim Your {REFERRALS.ROVER.discount}</span>
      <p>
        Sign up to become a sitter on Rover and start earning. If you use my link, you also get a{' '}
        {REFERRALS.ROVER.discount} credit for your own pet care needs.
      </p>
      <a
        href={REFERRALS.ROVER.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold btn-wide"
      >
        {REFERRALS.ROVER.cta}
      </a>
    </div>
  </>
);
