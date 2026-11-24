import Link from 'next/link';
import React from 'react';
import {
  BlogPost,
  REFERRALS,
  YULIA_SITTER_JOURNEY_DISPLAY,
  YULIA_SITTER_JOURNEY_URL,
  sits_completed,
} from '../../../types';

export const post: BlogPost = {
  id: '15',
  slug: 'how-to-prepare-your-home-for-a-house-sitter',
  track: 'homeowners',
  topic: 'Homeowners',
  title: 'How to Prepare Your Home for a House Sitter: Practical Checklist',
  navTitle: 'Preparing Your Home',
  subtitle:
    'A calm, practical home-prep guide from a full-time sitter so your pets stay settled and your trip starts smoothly.',
  excerpt:
    'Learn how to prepare your home and pets before a house sitter arrives—from welcome guide essentials and stocked supplies to clearing space in the kitchen and setting clear expectations.',
  date: 'November 23, 2026',
  category: 'Guide',
  location: 'Global',
  sortOrder: 2,
  imageUrl: '/cute-cat-in-blankets.jpeg',
  ctaLabel: REFERRALS.THS.label,
  ctaLink: REFERRALS.THS.link,
  audience: ['Homeowners'],
  faqIds: [
    'homeowner-how-to-prepare',
    'homeowner-what-to-leave',
    'homeowner-interview-questions',
  ],
  seoTitle: 'How to Prepare Your Home for a House Sitter | Complete Checklist',
  seoDescription:
    'A practical checklist for homeowners preparing for a house sitter: welcome guide details, pet supplies, clean kitchen & sleeping space, and house quirks to share early.',
  seoKeywords: [
    'how to prepare your home for a house sitter',
    'house sitter preparation checklist',
    'what to leave for a house sitter',
    'house sitting welcome guide checklist',
    'preparing home for pet sitter',
  ],
  body: (
    <>
      <p className="prose-lead">
        After completing {sits_completed}+ stays across the country, one pattern stands out right
        away: the smoothest sits rarely happen in the fanciest homes—they happen in homes where
        essentials are clear, easy to find, and ready before departure.
      </p>

      <p>
        You do not need hotel-level perfection to welcome a sitter. What makes the biggest
        difference is removing guesswork around your pets, keys, routines, and small house quirks
        so everyone relaxes on day one.
      </p>

      {/* Draft note: Add 1–2 short personal observations here about what immediately puts you at ease on arrival vs. common small oversights homeowners miss when rushing to pack. */}

      <h2>1. Ready the Living &amp; Sleeping Spaces</h2>
      <p>
        A sitter settles in faster—and focuses right away on your pets—when the basics are ready
        for them upon arrival:
      </p>
      <ul>
        <li>
          <strong>Fresh sheets and towels:</strong> Make the guest bed or sleeping space with clean
          linens and set out two bath towels.
        </li>
        <li>
          <strong>Clear closet and drawer space:</strong> Even a small section of hanging space and
          one empty drawer keeps luggage out of the way.
        </li>
        <li>
          <strong>Fridge and pantry room:</strong> Clear one shelf in the refrigerator and freezer
          so your sitter can store groceries comfortably.
        </li>
        <li>
          <strong>Clean kitchen counters and sink:</strong> Starting with an empty sink and trash
          bin sets an easy rhythm for keeping the kitchen tidy while you are away.
        </li>
      </ul>

      {/* Draft note: Expand with your preferred sleeping/remote-work workspace detail (e.g., desk chair, outlet access, lighting) if helpful for traveling sitters. */}

      <h2>2. Stock Pet Food, Supplies &amp; Backups</h2>
      <p>
        Running out of kibble, litter, or medication mid-trip creates avoidable stress. Aim to have
        enough supplies on hand to cover your full trip plus a few extra buffer days in case travel
        is delayed:
      </p>
      <div className="prose-accent-box">
        <span className="accent-box-label">Pet Supply Check</span>
        <ul>
          <li>
            <strong>Food and treats:</strong> Extra kibble, wet food, litter, and poop bags stored in
            one obvious spot.
          </li>
          <li>
            <strong>Medications and dosing notes:</strong> Clear written instructions, pill pockets
            or syringes, and refill dates if applicable.
          </li>
          <li>
            <strong>Walking gear:</strong> Harnesses, leashes, reflective tags, and paw wipes near
            the front door.
          </li>
          <li>
            <strong>Cleaning backups:</strong> Paper towels, enzyme cleaner, broom, and extra trash
            bags easy to grab.
          </li>
        </ul>
      </div>

      <h2>3. Write a Clear Welcome Guide</h2>
      <p>
        Even after an in-person walkthrough, details blur once you leave for the airport. For a full
        template, read{' '}
        <Link href="/what-to-include-in-a-house-sitter-welcome-guide">
          what to include in a house sitter welcome guide
        </Link>
        —at minimum, cover:
      </p>
      <ul>
        <li>
          <strong>Daily pet routine:</strong> Meal portions, walk length, leash reactivity or shy
          behaviors, and bedtime habits.
        </li>
        <li>
          <strong>Veterinary &amp; emergency contacts:</strong> Your primary vet, nearest 24-hour
          emergency clinic, microchip info, and a local friend or neighbor who has a spare key.
        </li>
        <li>
          <strong>Home mechanics:</strong> Wi-Fi name and password, thermostat range, trash and
          recycling pickup days, breaker box location, and water shut-off valve.
        </li>
        <li>
          <strong>Keys, codes &amp; alarms:</strong> Smart lock PINs, garage clickers, and any
          door-sticking or alarm timing quirks.
        </li>
      </ul>

      {/* Draft note: Share a quick example of a quirky appliance, tricky lock, or hidden plant watering routine you wish an owner had written down beforehand. */}

      <h2>4. Share the Quirks Openly</h2>
      <div className="prose-accent-box variant-highlight">
        <span className="accent-box-label">Why Honesty Helps</span>
        <p className="serif-italic">
          Every house and pet has quirks—a temperamental shower handle, a dog that barks at delivery
          trucks, or a neighbor who drops by for mail. Naming them upfront prevents surprises and
          helps your sitter handle them calmly.
        </p>
      </div>

      <h2>5. Confirm Communication &amp; Handover Timing</h2>
      <p>
        Before you head out, agree on two practical details: how often you want updates (text,
        WhatsApp, or platform messages) and whether you will do a handover overlap or lockbox entry.
        If you are still deciding between an exchange platform and hiring privately, read my guide on{' '}
        <Link href="/trusted-housesitters-exchange-vs-professional-house-sitting">
          exchange vs. professional house sitting
        </Link>
        , or review{' '}
        <Link href="/questions-to-ask-before-hiring-a-house-sitter">
          essential questions to ask before hiring a house sitter
        </Link>
        .
      </p>

      {/* Draft note: Wrap up with a short closing story or invite homeowners to reach out via yulia.sitterjourney.com if they want a dependable private sitter. */}

      <div className="prose-end">
        <strong>Ready to Welcome a Sitter?</strong>
        A little preparation before departure lets you step onto the plane knowing both your pets
        and your home are in calm hands. If you are inviting sitters through TrustedHousesitters,
        you can{' '}
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          get {REFERRALS.THS.discount} your homeowner membership with my referral link
        </a>
        —or learn about hiring me privately at{' '}
        <a href={YULIA_SITTER_JOURNEY_URL} target="_blank" rel="noopener noreferrer">
          {YULIA_SITTER_JOURNEY_DISPLAY}
        </a>
        .
      </div>
    </>
  ),
};
