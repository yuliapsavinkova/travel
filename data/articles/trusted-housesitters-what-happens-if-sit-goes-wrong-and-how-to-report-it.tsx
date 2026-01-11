import React from 'react';
import { THS_DISCOUNT } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      If you’re considering joining TrustedHousesitters, one common question comes up early: What
      actually happens if a sit doesn’t go as planned — or if someone reports a problem?
    </p>

    <p>
      This article explains, in simple terms, how issues are raised, what typically triggers a
      report, and why documentation matters, so you can understand the system before deciding
      whether to join.
    </p>

    <h2>First: what “going wrong” usually means</h2>
    <p>Most reported sits are not emergencies or extreme situations. They usually involve:</p>
    <ul>
      <li>A mismatch between expectations and reality</li>
      <li>Unclear responsibilities</li>
      <li>Different interpretations of what was agreed</li>
    </ul>

    <p className="prose-quote variant-plain">
      In other words: <strong>misalignment, not misconduct.</strong>
    </p>

    <p>
      TrustedHousesitters is a matching platform, so its processes are built around what was
      described, agreed to, and documented.
    </p>

    <h2>Can a sit be reported?</h2>
    <p>
      <strong>Yes.</strong> Either party — the sitter or the homeowner — can report a sit.
    </p>
    <p>
      Reports can be made during the sit (if the issue is ongoing) or after the sit ends. Reporting
      exists to formally document an issue when it can’t be resolved directly.
    </p>

    <div className="prose-accent-box">
      <h3>When do people usually report a sit?</h3>
      <ul>
        <li>The pet care routine differs from what was described</li>
        <li>The home condition or amenities are not as expected</li>
        <li>There’s disagreement about time commitments or boundaries</li>
        <li>A safety, welfare, or access concern appears</li>
      </ul>
    </div>

    <h2>Why written documentation matters</h2>
    <p>TrustedHousesitters relies primarily on written information inside the platform:</p>
    <ul>
      <li>Listing descriptions and House rules</li>
      <li>In-app messages</li>
      <li>Photos or videos provided during the sit</li>
    </ul>
    <p>
      Verbal conversations, assumptions, or unwritten expectations are harder to evaluate later.
      This is why members are encouraged to ask questions before confirming, keep details in
      writing, and raise issues early.
    </p>

    <h2>Common types of reported situations</h2>

    <h3>1. Expectation mismatches</h3>
    <p>
      These usually come down to how specific the listing was. Examples include a pet requiring more
      time than implied, or additional pets not being mentioned clearly.
    </p>

    <h3>2. Responsibility or boundary questions</h3>
    <p>
      Common disagreements involve cleaning expectations, how long pets can be left alone, or
      undisclosed use of cameras. These are evaluated against what was explicitly stated.
    </p>

    <h3>3. Safety or welfare concerns</h3>
    <p>
      Health issues, unsafe living conditions, or undisclosed surveillance are usually raised as
      soon as they are noticed.
    </p>

    <div className="prose-breakout">
      <div className="prose-accent-box variant-cons">
        <h3>Typical Scenarios for Prospection Members</h3>
        <p>
          <strong>Scenario A:</strong> A sitter feels pet care is more demanding than implied.
          <em>(Evaluation: How was the routine described in writing?)</em>
        </p>

        <p>
          <strong>Scenario B:</strong> A sitter is unhappy with home cleanliness.
          <em>(Evaluation: How was the home described and when was the concern raised?)</em>
        </p>

        <p>
          <strong>Scenario C:</strong> Disagreement about "alone time" for pets.
          <em>(Evaluation: Was a specific hour limit confirmed in messages?)</em>
        </p>

        <p>
          <strong>Scenario D:</strong> Undisclosed cameras are found.
          <em>(Evaluation: Transparency upfront is a recurring requirement.)</em>
        </p>
      </div>
    </div>

    <h2>How members reduce risk</h2>
    <p>Although reporting exists, most experienced members focus on prevention by:</p>
    <ul>
      <li>Reading listings carefully for vague terms like "easy" or "low maintenance"</li>
      <li>Asking direct questions about boundaries and routines</li>
      <li>Documenting important details early if something feels off</li>
    </ul>

    <p>
      <strong>Key takeaway:</strong> If a sit goes wrong, the process centers on what was documented
      and agreed to, not on assumptions. For most, issues are uncommon — and clarity and
      communication matter more than anything else.
    </p>

    <div className="prose-accent-box variant-cta">
      <h3>Join a Trusted Community</h3>
      <p>
        Ready to start sitting with confidence? Use my verified referral link to save
        {THS_DISCOUNT} on your annual membership.
      </p>
      <a
        href="https://trustedhousesitters.com/refer/raf943607"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold"
      >
        Claim {THS_DISCOUNT} Discount Link
      </a>
    </div>
  </>
);
