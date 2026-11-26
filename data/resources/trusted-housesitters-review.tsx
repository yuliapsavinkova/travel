import Link from 'next/link';
import React from 'react';
import { REFERRALS, ResourceItem, sits_completed } from '../../types';

export const resource: ResourceItem = {
  id: 'ths',
  slug: 'trusted-housesitters-review',
  name: 'TrustedHousesitters Review',
  navTitle: 'TrustedHousesitters Review',
  description: 'Where I find almost all of my house sits.',
  date: 'January 9, 2026',
  updatedDate: 'November 23, 2026',
  sortOrder: 1,
  discountText: REFERRALS.THS.discount,
  ctaLabel: `Get ${REFERRALS.THS.discount}`,
  link: REFERRALS.THS.link,
  icon: 'home',
  imageUrl:
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
  faqIds: ['travel-savings', 'ths-worth-breakeven', 'ths-membership-discounts'],
  relatedSlugs: [
    'is-trusted-housesitters-worth-it-for-sitters',
    'trusted-housesitters-membership-cost-levels',
    'can-you-really-travel-for-free-house-sitting-math',
  ],
  body: (
    <>
      <p className="prose-lead">
        TrustedHousesitters is the main platform I use to travel full-time. The concept is simple: I
        stay in people's homes in exchange for taking care of their pets. Owners get reliable care
        for their beloved furry family members, while I get a place to stay. No money changes hands
        between the sitter and the owner. It's a mutual exchange built on trust.
      </p>

      <p>
        As a solo female housesitter and petsitter, I have completed {sits_completed} sits across
        the United States. I can say with confidence that this is one of the most effective ways to
        travel affordably and sustainably. It's not just about saving money on accommodation; it's
        about experiencing places like a local and building genuine connections along the way.
      </p>

      <h2>Why I Use This Platform</h2>
      <p>
        One of the biggest advantages of TrustedHousesitters is its review system. Both homeowners
        and sitters can leave reviews after a sit, making it easier to assess whether an arrangement
        is a good fit. I always read previous reviews carefully before committing. It's important
        that expectations on both sides are aligned before the sit begins.
      </p>

      <p>
        I paid for a year-long membership using{' '}
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          a sign-up discount
        </a>
        , and it turned out to be well worth the investment. During an entire year of traveling
        full-time across the US, I didn't pay for accommodation. Even using a conservative estimate
        of $100 per night for a hotel, that's approximately $36,500 in lodging costs avoided in one
        year. You can read my full breakdown of the numbers in my guide:{' '}
        <Link href="/is-trusted-housesitters-worth-it-for-sitters">
          Is TrustedHousesitters worth it for sitters?
        </Link>
      </p>

      <p>
        I've used the platform in many different states, and it works particularly well if you work
        remotely or simply enjoy spending time with animals. You get to live in real neighborhoods,
        discover local favorites, and experience everyday life in places that hotels can't quite
        offer.
      </p>

      <h2>The Human Connection</h2>
      <p>
        One thing I didn't fully appreciate before starting was the human connection. Many
        homeowners are incredibly warm and welcoming. They often go out of their way to make you
        comfortable, sometimes inviting you out for a meal, sharing local recommendations, or
        leaving thoughtful gifts for your arrival. These are just a few of the{' '}
        <Link href="/hidden-perks-of-house-sitting">hidden perks of house sitting</Link>.
      </p>

      <p>
        Over time, I've built lasting relationships with homeowners who trust me with their homes
        and pets. There's something special about knowing that someone can go away and enjoy their
        trip without worrying about their furry family members. That's what makes this arrangement
        work: both sides benefit from a relationship built on trust.
      </p>
    </>
  ),
};
