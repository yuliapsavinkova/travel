import React from 'react';
import Link from 'next/link';
import ArticleImage from '../../components/ArticleImage';
import { THS_DISCOUNT, THS_LINK } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Your first house sit is the hardest one to get. After that, it gets exponentially easier. The
      reason most people never get past this stage isn’t lack of qualifications, it’s bad strategy.
      I will share exactly how I went from zero reviews to a fully booked schedule.
    </p>

    <p>
      I got my first house sit with zero reviews by stacking the odds in my favor instead of
      competing where everyone else applies. You must understand that for your first sit, it might
      not be a dream sit, your goal is to do a great job and get a positive review.
    </p>

    <h2>1. The Strategy of Risk Removal</h2>
    <p>
      New sitters usually fail because they apply to popular destinations for long stays with
      generic messages.
    </p>

    <h2>2. Choose High Demand, Low Competition Locations</h2>
    <ul>
      <li>
        <strong>Off Season Cities:</strong> I chose Austin, Texas in the middle of summer. It was
        brutal heat, so competition was low, but homeowners were desperate for sitters while they
        fled to cooler climates.
      </li>
      <li>
        <strong>Less Famous Areas:</strong> Target local suburbs or smaller cities where the
        "Instagram" crowd isn't looking.
      </li>
      <li>
        <strong>Peak Travel Windows:</strong> Apply for sits during major holidays when every owner
        is looking for help at the same time.
      </li>
    </ul>

    <div className="prose-accent-box">
      <p>This approach works in:</p>
      <ul>
        <li>Hot cities in summer</li>
        <li>Cold cities in winter</li>
        <li>Suburban local neighborhoods</li>
      </ul>
      <p>You don’t need a destination; you need a review.</p>
    </div>

    <h2>3. If you like Cats, start with Cats and Short Stays</h2>
    <p>
      Cats are usually much easier to care for and fewer things can go wrong. Homeowners generally
      feel more flexible about who they hire for a 3 day cat sit compared to a 3 week multi dog
      assignment.
    </p>

    <ArticleImage
      src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200"
      alt="Cat in a sunlit home"
      caption="Short cat sits are the ideal entry point for building a trustworthy profile."
      aspectRatio="3/2"
    />

    <h2>4. Write Applications that Remove Anxiety</h2>
    <p>
      Your message is not about convincing someone you’re amazing. It’s about making them feel calm
      about leaving. Avoid long travel manifestos.
    </p>

    <blockquote className="prose-quote variant-plain">
      <strong>Pro Tip:</strong> Always address the pets by name in your message.
    </blockquote>

    <ul>
      <li>
        <strong>Mention Home Presence:</strong> If you work remotely, state it clearly. Owners love
        knowing someone is physically there for the pets.
      </li>
      <li>
        <strong>Offer a Video Call:</strong> Proactively offering a call shows transparency and
        responsibility.
      </li>
      <li>
        <strong>Relevant Experience:</strong> Mention your background with animals even if it wasn't
        through a formal house sitting app.
      </li>
    </ul>

    <h2>5. Expect Rejection</h2>
    <p>
      Even with a solid application, you will be ignored. Most rejections are due to returning
      sitters or timing. For more on this, read my guide on:{' '}
      <Link href="/blog/why-trusted-housesitters-applications-get-rejected">
        why applications get rejected
      </Link>
      .
    </p>

    <div className="prose-end">
      House sitting has a powerful snowball effect. Once you get that first five star review, the
      world opens up. Focus on the strategy, stay consistent, and land that first sit.
      <br />
      <a href={THS_LINK} target="_blank" rel="noopener noreferrer">
        Save {THS_DISCOUNT} on your membership
      </a>
    </div>
  </>
);
