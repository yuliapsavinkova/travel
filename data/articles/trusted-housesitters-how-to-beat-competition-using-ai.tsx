import React from 'react';
import ArticleImage from '../../components/ArticleImage';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Highly competitive sits can fill their available application slots in under an hour. If you're
      carefully reading every detail before typing your first word, you've already lost to someone
      with a more efficient system.
    </p>

    <p>
      Here's how to win the race for high-demand listings without sacrificing the personal, human
      connection that makes you a trustworthy choice.
    </p>

    <h2>The Goal: Speed Meets Substance</h2>
    <p>
      To land the most desirable listings, you must be among the first wave of applicants. This
      requires a shift in how you process information:
    </p>
    <ul>
      <li>Applying within minutes of the alert being triggered</li>
      <li>Sounding professional, prepared, and pet-focused immediately</li>
      <li>Identifying your own "red flags" before you commit your time</li>
    </ul>

    <ArticleImage
      src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?auto=format&fit=crop&q=80&w=1200"
      alt="Cat looking at a laptop"
      caption="Being fast is essential for listings in major travel hubs and sought-after locations."
      aspectRatio="3/2"
    />

    <h2>Step 1: Build Your Master Template</h2>
    <p>
      Success starts with a robust, pre-written structure. Save this in your notes where you can
      grab it instantly.
    </p>

    <div className="prose-accent-box">
      <span className="accent-box-label">Master Template Structure</span>
      <p style={{ fontFamily: 'var(--f-mono)', fontSize: '0.9rem' }}>
        Hi [OWNER_NAME],
        <br />
        <br />
        I'd love to care for [PET_NAMES] during your trip. I'm currently [YOUR_SITUATION] and I'm
        fully available for your dates.
        <br />
        <br />
        [MY_HUMAN_ANCHOR_SENTENCE]
        <br />
        <br />
        [HOME_CARE_REASSURANCE]
        <br />
        <br />
        [ADDRESS_SPECIAL_REQUIREMENTS_FROM_LISTING]
        <br />
        <br />
        Looking forward to hearing from you.
        <br />
        <br />
        [YOUR_NAME]
      </p>
    </div>

    <h2>Step 2: Use AI for Technical Extraction</h2>
    <p>
      Instead of reading the entire listing, use an AI assistant to parse the text for you. This
      saves minutes of scrolling and allows you to apply while your competition is still reading
      about the garden.
    </p>

    <div className="prose-accent-box variant-pros">
      <span className="accent-box-label">The Extraction Prompt</span>
      <p style={{ fontSize: '0.9rem' }}>
        Extract the following from this listing text and populate my template:
        <br />
        <br />- Owner's name
        <br />- Every pet name mentioned
        <br />- Specific house requirements (e.g. garden watering, mail)
        <br />- Any red flags from this list: [YOUR_PERSONAL_RED_FLAGS]
        <br />
        <br />
        LISTING TEXT:
        <br />
        [PASTE LISTING HERE]
      </p>
    </div>

    <h2>Step 3: Apply First, Read Later</h2>
    <p>
      The primary objective is to get your application submitted before the listing pauses or hits
      its limit.
    </p>
    <div className="prose-accent-box">
      <span className="accent-box-label">The Strategy</span>
      <p>
        Get your application in now. You can perform a deep dive into the listing details
        <strong>after</strong> you've secured your spot in the queue. If you discover a deal-breaker
        upon closer inspection, you can always send a polite follow-up or withdraw. But if you wait
        until you've read every word, the door will likely be closed.
      </p>
    </div>

    <h2>Step 4: The Unique Human Anchor</h2>
    <p>
      This is the most critical part of your template. It is a single, high-trust sentence that you
      write yourself once and keep for every application.
    </p>
    <p>
      Instead of a generic postscript, place this sentence directly in the body of your message. It
      should be something so specific to your lifestyle, career, or travel philosophy that it
      immediately anchors the message in your real-world identity.
    </p>
    <p>
      Think about what identifies you as a uniquely responsible person. Are you a minimalist
      traveler who leaves no trace? A remote professional who requires a stable home environment? A
      former homeowner who understands maintenance? Integrating this "Anchor" is what prevents your
      efficiency from feeling robotic.
    </p>

    <blockquote className="prose-quote">
      "Efficiency gets you in the door; your unique human anchor is what makes them choose you."
    </blockquote>

    <div className="prose-end">
      <strong>Win the race</strong>
      Competitive sits don't wait for slow applications. Use a system to be first, and use your
      unique anchor to be the one they trust.
      <br />
      <br />
      <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
        {REFERRALS.THS.label}
      </a>
    </div>
  </>
);
