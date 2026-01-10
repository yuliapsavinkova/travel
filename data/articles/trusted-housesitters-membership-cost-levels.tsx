import React from 'react';
import ArticleImage from '../../components/ArticleImage';
import { THS_DISCOUNT } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Understanding the different membership tiers for sitters on TrustedHousesitters is key to
      choosing the plan that fits your travel style and safety needs.
    </p>

    <p>
      TrustedHousesitters offers three main levels of membership specifically for
      <strong>sitters</strong>: Basic, Standard, and Premium. These are separate from owner
      memberships.
    </p>

    <ArticleImage
      src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200"
      alt="Happy dog in a well-maintained home"
      caption="Choosing the right sitter membership level depends on how often you plan to sit."
      aspectRatio="3/2"
    />

    <h2>1. The Basic Sitter Plan</h2>
    <p>
      The entry-level plan. It gives you access to unlimited sits worldwide and allows you to build
      your professional sitter profile. Ideal for budget-conscious sitters.
    </p>

    <h2>2. The Standard Sitter Plan</h2>
    <p>
      The most popular choice. It includes everything in Basic, plus{' '}
      <strong>Accident & Liability Protection</strong> and a 24/7 Vet Line, which is vital in
      unfamiliar locations.
    </p>

    <h2>3. The Premium Sitter Plan</h2>
    <p>
      For full-time nomads. It includes <strong>Sit Cancellation Insurance</strong> (to help cover
      hotels if owners cancel) and global airport lounge passes.
    </p>

    <div className="prose-accent-box variant-cta">
      <h3>Join with a Discount</h3>
      <p>
        Ready to choose your tier? Use my referral link to get {THS_DISCOUNT} off your first year.
      </p>
      <a
        href="https://trustedhousesitters.com/refer/raf943607"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold"
      >
        Claim your {THS_DISCOUNT} Discount
      </a>
    </div>
  </>
);
