import React from 'react';
import { VISIBLE_DISCOUNT, VISIBLE_LINK } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Working while traveling requires a reliable internet connection. Visible is the phone plan I
      use because it offers unlimited data and a mobile hotspot that actually works across the
      country.
    </p>

    <h2>Staying connected on the road</h2>
    <p>
      In my experience, having a predictable monthly cost and the ability to work from almost
      anywhere makes it an essential part of my resources. I do not have to worry about data caps or
      finding public WiFi when I am in a new location.
    </p>

    <p>
      It uses a major network so the coverage is excellent even in more remote areas. For a digital
      nomad or anyone living a mobile lifestyle, having one less thing to worry about is a huge
      relief. Whether I'm in a rural farmhouse or a city apartment, my hotspot is my safety net.
    </p>

    <div className="prose-accent-box variant-cta">
      <h3>Claim Your {VISIBLE_DISCOUNT} Offer</h3>
      <p>
        Ready to start? Use this referral link to {VISIBLE_DISCOUNT} and get your first month of
        unlimited data for just $5.
      </p>
      <a
        href={VISIBLE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold btn-wide"
      >
        Discount: {VISIBLE_DISCOUNT}
      </a>
    </div>
  </>
);
