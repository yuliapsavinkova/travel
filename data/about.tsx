import React from 'react';
import { REFERRALS, YULIA_SITTER_JOURNEY } from '../types';

export const body = (
  <>
    <p className="prose-lead">
      Hi, I’m Yulia. I travel across the globe, living a lifestyle that blends house sitting,
      minimalism, and intentional travel.
    </p>

    <p>
      I focus on long-term house sits, often staying for a month or more at a time. This allows me
      to fully immerse myself in new surroundings without the stress of constant moving. For me,
      travel is about settling in and understanding the rhythm of a place. I primarily use the
      TrustedHousesitters platform for finding my sits. If you're looking to start your own journey,
      you can use my link for{' '}
      <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
        {REFERRALS.THS.ratePercent} off your membership
      </a>
      .
    </p>

    <p>
      This site is where I share my insights from building this lifestyle. I write about how I got
      my first house sit, what staying in someone’s home has really been like for me, and what helps
      me feel safe traveling solo. It also reflects how I think about intentional living: focusing
      on what matters most to me while letting go of the rest.
    </p>

    <h2>Professional House Sitting</h2>
    <p>
      Recently, I made California my home base and started housesitting professionally. If you or
      anyone you know could benefit from a trusted, dedicated house sitter, you can find my
      services, client testimonials, and booking inquiries on my website:{' '}
      <a href={YULIA_SITTER_JOURNEY.link} target="_blank" rel="noopener noreferrer">
        {YULIA_SITTER_JOURNEY.display}
      </a>
      .
    </p>

    <h2>Why Trust This Site</h2>
    <p>
      Everything you read here is based on real, lived experience. I don't write about theories or
      sponsored trips. I focus on what works, what doesn’t, and who this lifestyle is actually for.
      House sitting involves significant responsibility, and I value planning and respect for every
      home and pet I care for.
    </p>

    <p>
      I am currently documenting my journey and expanding this space to share more of my insights on
      minimalist living and slow travel. These approaches to freedom and happiness go hand in hand
      for me, and I invite you to check back often as I share more of my stories and practical
      lessons.
    </p>

    <h2>About My Links</h2>
    <p>
      Some pages include member invite links. If you join through them, you get a discount and I
      receive free membership months or account credits at no extra cost to you. I only share
      services I actually use myself.
    </p>
  </>
);
