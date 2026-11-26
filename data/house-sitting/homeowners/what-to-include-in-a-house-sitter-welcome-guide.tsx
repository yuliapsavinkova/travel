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
  id: '17',
  slug: 'what-to-include-in-a-house-sitter-welcome-guide',
  track: 'homeowners',
  topic: 'Homeowners',
  title: 'What to Include in a House Sitter Welcome Guide (Checklist)',
  navTitle: 'Welcome Guide Checklist',
  subtitle:
    'The clear, stress-saving sections every homeowner welcome guide needs—based on over 40 real house sits.',
  excerpt:
    'Learn exactly what to leave in a house sitter welcome guide: pet feeding and medication routines, emergency vet authorization, Wi-Fi and appliance quirks, and local contacts.',
  date: 'November 23, 2026',
  category: 'Guide',
  location: 'Global',
  sortOrder: 3,
  imageUrl:
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
  ctaLabel: REFERRALS.THS.label,
  ctaLink: REFERRALS.THS.link,
  audience: ['Homeowners'],
  faqIds: ['homeowner-what-to-leave', 'homeowner-how-to-prepare', 'homeowner-interview-questions'],
  relatedSlugs: [
    'how-to-prepare-your-home-for-a-house-sitter',
    'questions-to-ask-before-hiring-a-house-sitter',
    'how-to-update-homeowners-while-house-sitting',
  ],
  seoTitle: 'What to Include in a House Sitter Welcome Guide | Homeowner Checklist',
  seoDescription:
    'Complete checklist for writing a house sitter welcome guide: pet routines, emergency vet details, lock and Wi-Fi instructions, trash schedules, and house quirks.',
  seoKeywords: [
    'house sitter welcome guide',
    'what to include in a house sitter welcome guide',
    'pet sitter instructions checklist',
    'house sitting handbook template',
    'what to leave for a pet sitter',
  ],
  body: (
    <>
      <p className="prose-lead">
        Across {sits_completed}+ sits, the single document that prevents almost every mid-trip text
        question is a clear, well-organized Welcome Guide. You do not need a 30-page manual—just the
        practical details someone actually needs at 7 a.m. or in an unexpected moment.
      </p>

      <p>
        Whether you write it in a shared Google Doc, use TrustedHousesitters’ built-in Welcome
        Guide, or leave a printed binder on the kitchen counter, aim to send a copy a few days
        before arrival so your sitter can review it ahead of time.
      </p>

      {/* Draft note: Add 1–2 sentences from experience on why sending the guide 2–3 days before arrival beats handing over a binder only at the door. */}

      <h2>1. Emergency Contacts &amp; Veterinary Authorization</h2>
      <p>Put this section right on page one so nobody has to search for it under stress:</p>
      <div className="prose-accent-box">
        <span className="accent-box-label">Page-One Safety Info</span>
        <ul>
          <li>
            <strong>Your reachable contact info:</strong> Phone, WhatsApp, and any time-zone or
            flight blackout windows.
          </li>
          <li>
            <strong>Primary vet &amp; 24-hour emergency clinic:</strong> Clinic names, addresses,
            phone numbers, and a signed note or pre-authorized card on file for urgent care.
          </li>
          <li>
            <strong>Local backup person:</strong> A nearby friend, family member, or trusted
            neighbor who has a spare key and knows your pets.
          </li>
          <li>
            <strong>Home repair contacts:</strong> Plumber, HVAC, or property manager in case an
            appliance or pipe acts up.
          </li>
        </ul>
      </div>

      <h2>2. Pet Routines, Quirks &amp; Medications</h2>
      <p>Spell out habits clearly—even ones that feel automatic to you:</p>
      <ul>
        <li>
          <strong>Feeding &amp; treats:</strong> Exact scoop sizes, feeding times, forbidden table
          scraps, and allergies.
        </li>
        <li>
          <strong>Medications:</strong> Dosage, exact timing, storage (fridge vs. cabinet), and
          tricks that actually work for giving pills.
        </li>
        <li>
          <strong>Walks &amp; behavior triggers:</strong> Typical walk length, leash reactivity,
          recall reliability, and whether they can greet other dogs or visitors.
        </li>
        <li>
          <strong>Hiding spots &amp; house rules:</strong> Favorite napping spots, counters they try
          to jump on, or doors/gates that must stay latched.
        </li>
      </ul>

      {/* Draft note: Share a quick story of a pet quirk or trick (e.g., an anxious cat's hiding spot or a specific walk trigger) that was huge to know in advance. */}

      <h2>3. House Mechanics, Keys &amp; Utilities</h2>
      <p>Include quick instructions for the everyday systems in your home:</p>
      <ul>
        <li>
          <strong>Access &amp; Wi-Fi:</strong> Network name and password, smart lock codes, alarm
          disarm steps, and any stiff deadbolts.
        </li>
        <li>
          <strong>Trash, recycling &amp; mail:</strong> Bin pickup days, where bins go at the curb,
          and mailbox key location.
        </li>
        <li>
          <strong>Thermostat &amp; appliances:</strong> Preferred temperature range,
          dishwasher/laundry quirks, and plant watering schedule.
        </li>
        <li>
          <strong>Emergency shut-offs:</strong> Breaker panel and main water shut-off locations.
        </li>
      </ul>

      <h2>4. Helpful Neighborhood &amp; Arrival Notes</h2>
      <div className="prose-accent-box variant-highlight">
        <span className="accent-box-label">Small Extras That Help</span>
        <p className="serif-italic">
          A short note on the closest grocery store, favorite quiet walking trail, safe street
          parking rules, or regular visitors (gardeners, cleaners, mail carriers) helps your sitter
          feel settled immediately.
        </p>
      </div>

      <h2>Putting It All Together</h2>
      <p>
        Pair your Welcome Guide with my{' '}
        <Link href="/how-to-prepare-your-home-for-a-house-sitter">
          checklist for preparing your home before a house sitter arrives
        </Link>
        , and make sure you cover key expectations early using these{' '}
        <Link href="/questions-to-ask-before-hiring-a-house-sitter">
          questions to ask before hiring a house sitter
        </Link>
        .
      </p>

      <div className="prose-end">
        <strong>Looking for a Trusted Sitter?</strong>
        If you use TrustedHousesitters—where their built-in Welcome Guide template makes sharing all
        of this simple—you can{' '}
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          get {REFERRALS.THS.discount} your homeowner membership with my referral link
        </a>
        . Or learn more about hiring me privately at{' '}
        <a href={YULIA_SITTER_JOURNEY_URL} target="_blank" rel="noopener noreferrer">
          {YULIA_SITTER_JOURNEY_DISPLAY}
        </a>
        .
      </div>
    </>
  ),
};
