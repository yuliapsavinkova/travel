import React from 'react';
import ArticleImage from '../../components/ArticleImage';
import { THS_DISCOUNT } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Your first house sit is the hardest one to get. After that, it gets exponentially easier. The
      reason most people never get past this stage isn’t lack of qualifications — it’s bad strategy.
    </p>

    <p>
      I got my first house sit with zero reviews by stacking the odds in my favor instead of
      competing where everyone else applies. Here’s exactly how I did it, step by step.
    </p>

    <h2>Why most beginners get stuck</h2>
    <p>New sitters usually:</p>
    <ul>
      <li>Apply in popular destinations</li>
      <li>Apply during peak season</li>
      <li>Go for long sits</li>
      <li>Send generic applications</li>
    </ul>

    <p>
      Then they panic when no one responds. That’s not a you problem. That’s a competition problem.
      Homeowners don’t want to take risks when they have options. Your job for the first sit is to
      remove risk and reduce competition.
    </p>

    <h2>Step 1: Choose a high-demand, low-competition location</h2>
    <p>
      I intentionally chose Austin, Texas for my first sit. Not because it’s glamorous — but because
      it’s strategic. I applied during peak summer, when temperatures are brutal and many sitters
      avoid the area.
    </p>

    <p>
      At the same time, Austin has a large and highly mobile tech community, which means people
      travel frequently, often on short notice, even during off-season months. Fewer sitters +
      plenty of homeowners = opportunity.
    </p>

    <div className="prose-accent-box">
      <p>This approach works in:</p>
      <ul>
        <li>Hot cities in summer</li>
        <li>Cold cities in winter</li>
        <li>Less “Instagram-famous” locations</li>
      </ul>
      <p>You don’t need Paris. You need a place other sitters are skipping.</p>
    </div>

    <h2>Step 2: Start with cats and short sits</h2>
    <p>
      For your first sit, cats are easier than dogs and short stays are easier than long ones. Cats
      represent lower perceived responsibility, no rigid walking schedules, and homeowners generally
      feel more flexible.
    </p>

    <p>
      I specifically applied to cat sits only and short trips (2–5 days). Short sits are less
      commitment and lower risk—the ideal “yes” for a homeowner choosing someone without reviews.
    </p>

    <ArticleImage
      src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200"
      alt="Cat in a sunlit home"
      caption="My first sit was 2 days and 2 cats for a homeowner driving from Austin to Dallas."
      aspectRatio="3/2"
    />

    <h2>Step 3: Apply strategically</h2>
    <p>
      I applied to 3 sits total. Not 20. Not 50. High-quality applications beat volume, especially
      when you’re new. One of those three accepted me. That conversion rate is not luck — it’s
      positioning.
    </p>

    <h2>Step 4: Write an application that removes homeowner anxiety</h2>
    <p>
      Your message is not about convincing someone you’re amazing. It’s about making them feel calm
      about leaving. Here’s the exact type of message I used:
    </p>

    <blockquote className="prose-quote variant-plain">
      "Hi [Name], I saw your listing in Austin and would love to care for your cats while you’re
      away. I work remotely and am usually home, so they’d have consistent attention and care. I’ve
      spent a lot of time around cats and am very comfortable with feeding routines, litter care,
      and respecting their space. Since your trip is short, I’m happy to do a quick video call
      beforehand if that helps you feel comfortable. I know leaving pets can be stressful, and I’m
      happy to answer any questions. Best, Yulia"
    </blockquote>

    <h2>Step 5: Expect rejection — it’s normal and meaningless</h2>
    <p>
      Even with a solid application, you will get declined or ignored. Reasons include: someone
      applied earlier, someone had previous reviews, or plans changed. This is not feedback on you.
      Most people quit too early because they assume silence means failure. It doesn’t.
    </p>

    <h2>Step 6: Once you get one sit, momentum kicks in</h2>
    <p>
      After my first sit, I received my first review, homeowners started responding more, and longer
      sits became realistic. House sitting has a clear snowball effect. The first sit is simply the
      entry point.
    </p>

    <div className="prose-accent-box">
      <h3>My exact first-sit timeline:</h3>
      <ul>
        <li>Created my profile</li>
        <li>Applied to 3 local cat sits</li>
        <li>Accepted for a 2-day sit</li>
        <li>Completed the sit successfully</li>
        <li>Received my first positive review immediately after</li>
      </ul>
    </div>

    <p>
      If you want your first house sit faster: apply off-season, avoid over-saturated destinations,
      choose cats over dogs, and write calm, specific messages. Be selective, not desperate. This
      isn’t luck — it’s strategy.
    </p>

    <div className="prose-accent-box variant-cta">
      <h3>Get Started with a Discount</h3>
      <p>
        Ready to build your profile and start sitting? You can get a massive head start on your
        first year of travel with a special offer.
      </p>
      <a
        href="https://trustedhousesitters.com/refer/raf943607"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold"
        style={{ minWidth: '280px' }}
      >
        Claim your {THS_DISCOUNT} Discount
      </a>
    </div>
  </>
);
