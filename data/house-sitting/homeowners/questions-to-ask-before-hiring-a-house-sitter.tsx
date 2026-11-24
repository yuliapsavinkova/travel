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
  id: '16',
  slug: 'questions-to-ask-before-hiring-a-house-sitter',
  track: 'homeowners',
  topic: 'Homeowners',
  title: 'Questions to Ask Before Hiring a House Sitter (From a Sitter)',
  navTitle: 'Vetting a House Sitter',
  subtitle:
    'The practical interview questions that reveal real pet experience, calm judgment, and reliability before handing over your keys.',
  excerpt:
    'Wondering how to vet a pet or house sitter? Use these practical interview questions covering daily schedule, pet emergencies, communication habits, and red flags.',
  date: 'November 23, 2026',
  category: 'Guide',
  location: 'Global',
  sortOrder: 4,
  imageUrl: '/yulia-with-dog.jpg',
  ctaLabel: REFERRALS.THS.label,
  ctaLink: REFERRALS.THS.link,
  audience: ['Homeowners'],
  faqIds: [
    'homeowner-interview-questions',
    'homeowner-how-to-prepare',
    'homeowner-what-to-leave',
  ],
  seoTitle: 'Questions to Ask Before Hiring a House Sitter | Vetting Guide',
  seoDescription:
    'Learn the best questions to ask when interviewing a house sitter or pet sitter, what thoughtful answers sound like, and common red flags to watch for.',
  seoKeywords: [
    'questions to ask a house sitter',
    'questions to ask before hiring a pet sitter',
    'how to interview a house sitter',
    'vetting a house sitter checklist',
    'house sitter red flags',
  ],
  body: (
    <>
      <p className="prose-lead">
        Handing someone the keys to your home and trusting them with your pets is a big decision.
        Having been on the other side of over {sits_completed} homeowner video calls and handovers, I
        have noticed that the best interviews are short, specific, and practical.
      </p>

      <p>
        You do not need an interrogation. A handful of targeted questions about daily routine,
        emergencies, and home habits quickly shows whether a sitter is calm, observant, and a good
        match for your animals.
      </p>

      {/* Draft note: Add a brief opening anecdote about what separates thoughtful homeowner calls from rushed ones. */}

      <h2>1. Pet Care &amp; Temperament Questions</h2>
      <p>Start with how the sitter handles your specific pets—not pets in general:</p>
      <ul>
        <li>
          <strong>“Have you cared for a pet with [anxiety / reactivity / medical needs] before?”</strong>{' '}
          Listen for specific examples rather than a generic “I love all animals.”
        </li>
        <li>
          <strong>“What does your typical day look like while sitting?”</strong> If your dog cannot
          stay alone for 8 hours, clarify remote work habits, errands, and time at home upfront.
        </li>
        <li>
          <strong>“What do you do if a pet refuses food or seems off?”</strong> You want a sitter who
          notices subtle changes early and reaches out promptly instead of guessing.
        </li>
      </ul>

      {/* Draft note: Include a real example from one of your sits showing how you adapted to a shy cat, senior dog, or strict medication schedule. */}

      <h2>2. Emergencies, Travel Delays &amp; Backup Plans</h2>
      <p>
        Things rarely go wrong, but knowing how a sitter thinks under pressure matters far more than
        how charming they sound on video:
      </p>
      <div className="prose-accent-box">
        <span className="accent-box-label">Safety &amp; Judgment Questions</span>
        <ul>
          <li>
            <strong>“How would you handle an urgent vet visit?”</strong> Confirm they have reliable
            transportation and are comfortable acting quickly if you are unreachable on a flight.
          </li>
          <li>
            <strong>“What happens if our flight is delayed by a day?”</strong> Honest sitters tell
            you clearly whether they have buffer time or another commitment right after your dates.
          </li>
          <li>
            <strong>“Have you handled a home issue (leak, power outage, lock problem) before?”</strong>{' '}
            Practical problem-solving protects your house as well as your pets.
          </li>
        </ul>
      </div>

      <h2>3. Home Respect, Guests &amp; Communication</h2>
      <p>Clear boundaries prevent awkward surprises mid-trip:</p>
      <ul>
        <li>
          <strong>“How often do you send photo updates, and what channel works best?”</strong> Daily
          reassuring updates should feel natural to an experienced sitter.
        </li>
        <li>
          <strong>“Are you comfortable with our guest and house rules?”</strong> Be direct about
          visitors, smoking, security cameras, and off-limit rooms.
        </li>
        <li>
          <strong>“Do you have any questions about our routine or neighborhood?”</strong> Strong
          sitters ask thoughtful questions back—about leash habits, vet preferences, or sleep rules.
        </li>
      </ul>

      {/* Draft note: Add 2–3 bullet points of questions you always love hearing from homeowners (or green flags you notice). */}

      <h2>4. Quick Green Flags vs. Red Flags</h2>
      <div className="prose-accent-box variant-highlight">
        <span className="accent-box-label">What to Watch For</span>
        <p className="serif-italic">
          <strong>Green flags:</strong> asks specific questions about your pet’s routine, answers
          clearly about schedule and travel logistics, and keeps replies prompt and transparent.
          <br />
          <strong>Red flags:</strong> vague answers on availability, skipping questions about pet
          quirks, or pushing against simple home boundaries.
        </p>
      </div>

      <h2>Next Steps Once You Choose a Sitter</h2>
      <p>
        Once you have chosen the right person, set the stay up for success with my{' '}
        <Link href="/how-to-prepare-your-home-for-a-house-sitter">
          checklist for preparing your home for a house sitter
        </Link>{' '}
        and{' '}
        <Link href="/what-to-include-in-a-house-sitter-welcome-guide">
          house sitter welcome guide checklist
        </Link>
        . Still weighing whether an exchange community or a dedicated sitter fits your trip better?
        Compare both routes in{' '}
        <Link href="/trusted-housesitters-exchange-vs-professional-house-sitting">
          exchange vs. professional house sitting
        </Link>
        .
      </p>

      <div className="prose-end">
        <strong>Ready to Find the Right Sitter?</strong>
        Whether you interview sitters through TrustedHousesitters—where you can{' '}
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          claim {REFERRALS.THS.discount} your membership with my referral link
        </a>
        —or hire a private sitter directly at{' '}
        <a href={YULIA_SITTER_JOURNEY_URL} target="_blank" rel="noopener noreferrer">
          {YULIA_SITTER_JOURNEY_DISPLAY}
        </a>
        , asking focused questions upfront leads to calmer sits for everyone.
      </div>
    </>
  ),
};
