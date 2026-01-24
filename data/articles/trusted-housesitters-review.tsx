import React from 'react';
import Link from 'next/link';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      TrustedHousesitters is what I use to travel full-time. It’s pretty simple: I stay in someone's
      home for free, and in return, I take care of their pets. There’s no money involved between us,
      which makes it feel more like I'm a guest helping out a friend.
    </p>

    <p>
      As a solo female traveler, I've done sits all over the United States. It's been an incredible
      way to see the country without spending a fortune on hotels. It's all about trust—the owner
      trusts me with their home, and I trust that the home will be a safe place for me to stay.
    </p>

    <h2>Why I like it</h2>
    <p>
      The best part for me is the reviews. Before I agree to stay anywhere, I read what other
      sitters have said. It helps me make sure the owner's expectations match what I'm able to do.
      I've found it's really important to be on the same page before you even arrive.
    </p>

    <p>
      I paid for the membership using a discount, and it's easily paid for itself. If I had stayed
      in hotels every night while traveling this past year, I would have spent thousands and
      thousands of dollars. Even if you only do a few sits a year, the math usually works out in
      your favor. You can see more about how I look at the costs here:{' '}
      <Link href="/blog/is-trusted-housesitters-worth-it-for-sitters">Is it worth it?</Link>
    </p>

    <h2>The Human Connection</h2>
    <p>
      I've met some really wonderful people through this. A lot of homeowners are so kind—they'll
      often leave me a nice meal for when I arrive or give me great tips on the best local coffee
      shops. It feels like a real community of animal lovers. I've even stayed in touch with some of
      them long after the sit ended.
    </p>

    <div className="prose-accent-box variant-cta">
      <h3>Start your own journey</h3>
      <p>
        If you want to try this out, you can use my referral link to get {REFERRALS.THS.discount}{' '}
        off the membership. It helped me save money when I started, and I hope it helps you too.
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
