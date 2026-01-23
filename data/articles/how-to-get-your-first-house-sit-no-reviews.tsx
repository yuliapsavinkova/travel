import React from 'react';
import Link from 'next/link';
import ArticleImage from '../../components/ArticleImage';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      I remember trying to get my very first house sit and feeling like it was impossible. Now that
      I've done sits all over the country, I can see that the first one is definitely the hardest
      hurdle.
    </p>

    <p>
      When you have zero reviews, it’s hard to convince someone to give you their keys. I learned
      pretty quickly that I couldn't just apply for the "dream" houses in places like NYC or
      California right away. I had to find a way to show I was trustworthy without having a list of
      stars on my profile yet.
    </p>

    <h2>The Austin Story</h2>
    <p>
      One of the first sits I landed was in Austin, Texas, right in the middle of the summer. It was
      105 degrees every single day and most people were trying to leave the city, not go to it.
      Because competition was low, the homeowners were willing to take a chance on someone new like
      me. I just wanted that first five-star review, so I was happy to be there even in the heat.
    </p>

    <div className="prose-accent-box">
      <span className="accent-box-label">What I stumbled upon:</span>
      <p>
        If you're just starting, don't look for the perfect vacation spot. Look for a review. Once
        you have a couple of people saying you did a good job, it gets much easier to go wherever
        you want.
      </p>
    </div>

    <h2>A few things that worked for me:</h2>
    <ul>
      <li>
        <strong>I looked for short stays:</strong> People are usually less worried about a 2-day cat
        sit than a month-long stay with three dogs. Short sits are a great way to build up your
        profile fast.
      </li>
      <li>
        <strong>I was honest about being new:</strong> I didn't try to hide that this was my first
        time. I told them I worked from home and would be with their pets all day, which helped them
        feel better.
      </li>
      <li>
        <strong>I used the pets' names:</strong> It sounds small, but I always made sure to talk
        about their pets specifically in my message so they knew I actually read their post.
      </li>
    </ul>

    <ArticleImage
      src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200"
      alt="Cat in a house"
      caption="Starting with simple cat sits helped me build the trust I needed for bigger assignments later."
      aspectRatio="3/2"
    />

    <blockquote className="prose-quote">
      "You aren't trying to be a pro on day one. You're just showing a homeowner that you care about
      their pets and will keep their house clean."
    </blockquote>

    <div className="prose-end">
      <strong>Keep trying</strong>
      It can be a bit discouraging at first, but don't give up. Once you get that first "yes," the
      whole world opens up. I hope these simple things I found out help you land your first sit too.
      <br />
      <br />
      <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
        {REFERRALS.THS.label}
      </a>
    </div>
  </>
);
