import React from 'react';
import Link from 'next/link';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      TrustedHousesitters is the main platform I use to travel full-time. The concept is simple: I
      stay in homes for free. In exchange, owners get reliable care for their beloved furry family
      members. There is no money involved, and I am treated as a guest rather than an employee.
    </p>

    <p>
      As a solo female housesitter and petsitter, I have completed numerous sits across the United
      States. I can say with confidence that this is the single most effective way to travel
      sustainably. It is not just about a free place to stay; it is about a mutual exchange of trust
      that benefits both the sitter and the pet owner.
    </p>

    <h2>Why I Use This Platform</h2>
    <p>
      The platform is built on verified reviews, which makes it easy to choose the right fit. I
      always read previous reviews carefully before committing to a stay. This ensures that the
      expectations of both the homeowner and myself are aligned before the sit begins.
    </p>

    <p>
      I paid for a year-long membership with a sign-up discount and it was worth the investment. By
      using this service, I didn’t pay for any accommodations for an entire year I traveled
      full-time across the US. Even at a very low estimate of one hundred dollars per night for a
      hotel, that adds up to thirty-six thousand dollars in annual savings. You can read my full
      breakdown of the math in my guide:{' '}
      <Link href="/blog/is-trusted-housesitters-worth-it-for-sitters">
        Is TrustedHousesitters worth it for sitters?
      </Link>
    </p>

    <p>
      I have used the platform in many different states. It works exceptionally well if you work
      remotely or simply enjoy spending time with animals. You get to live like a local in real
      neighborhoods and experience life in a way that hotels can't offer.
    </p>

    <h2>The Human Connection</h2>
    <p>
      Many homeowners are incredibly warm. They often go out of their way to show appreciation and
      make you comfortable; they even sometimes invite you out for a meal or leave thoughtful gifts
      on your arrival. What sets TrustedHousesitters apart is the sense of community. You aren't
      just a guest; you are a temporary steward of a home. I've built lasting relationships with
      homeowners who appreciate knowing their pets are happy and their home is safe while they are
      away.
    </p>

    <div className="prose-accent-box variant-cta">
      <h3>Claim Your {REFERRALS.THS.discount} Sitter Membership</h3>
      <p>
        Ready to start your own journey? Use my verified referral link to get{' '}
        {REFERRALS.THS.discount} your annual sitter membership. The savings apply to any of their
        annual membership tiers.
      </p>
      <a
        href={REFERRALS.THS.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold btn-wide"
      >
        Discount: {REFERRALS.THS.discount}
      </a>
    </div>
  </>
);
