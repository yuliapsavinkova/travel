import React from 'react';
import ArticleImage from '../../components/ArticleImage';
import { REFERRALS } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      If you want to secure more sits on TrustedHousesitters, your profile needs to instantly build
      trust. Owners skim fast and decide even faster. Your goal is to look reliable, clear, and easy
      to say yes to.
    </p>

    <p>
      A strong profile makes an owner feel confident. They need to know they can hand you their keys
      and their beloved pets without worry. This isn't about telling your life story: it is about
      clarity and proof of responsibility.
    </p>

    <h2>1. Profile Photos: Get This Right First</h2>
    <p>
      Having good photos sets you up for success. Choose images that are clear and well lit. Owners
      often look at your photos before they read a single word of your bio.
    </p>

    <div className="prose-accent-box">
      <span className="accent-box-label">Image rules for success:</span>
      <ul>
        <li>Show your face clearly in your main profile photo</li>
        <li>Include at least one photo of you with a pet (dog or cat both work)</li>
        <li>
          <strong>Use a 3:2 aspect ratio:</strong> This ensures your images don't get cropped,
          rescaled, or blurry.
        </li>
      </ul>
    </div>

    <h3>What 3:2 means in practice:</h3>
    <ul>
      <li>Examples: 900 × 600, 1500 × 1000, 3000 × 2000</li>
      <li>The width of your photo should always be 1.5 times the height</li>
    </ul>
    <p>
      If you upload a square or vertical image, TrustedHousesitters will shrink it and it won’t
      display full-size. That immediately looks sloppy and unprofessional. Authentic, well-lit
      photos with animals build immediate rapport.
    </p>

    <ArticleImage
      src="https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop"
      alt="Sitter with a happy dog"
      caption="Clear, authentic photos with animals are your most powerful trust-building tool."
      aspectRatio="3/2"
    />

    <p>
      <strong>Additional photos to include:</strong>
    </p>
    <ul>
      <li>You interacting with animals (playing, walking, cuddling)</li>
      <li>Natural settings — homes, gardens, outdoors</li>
      <li>Real moments, not stiff selfies</li>
    </ul>
    <p>You should have multiple photos. One looks incomplete; five to ten looks solid.</p>

    <h2>2. Profile Content: Write for Owners, Not for Yourself</h2>
    <p>
      Owners care about one thing: whether you can handle their home and their pet. Avoid generic
      travel manifestos and long childhood stories.
    </p>

    <div className="prose-accent-box variant-cons">
      <span className="accent-box-label">What NOT to do:</span>
      <ul>
        <li>Long childhood stories about your first hamster</li>
        <li>Travel manifestos about your "soul searching" journey</li>
        <li>Philosophical paragraphs about freedom and life</li>
      </ul>
    </div>

    <p>
      <strong>What to do instead:</strong> Make it easy for an owner to picture you in their home.
      Answer their unspoken questions quickly. Focus on: What pets you’ve cared for, how you
      structure your day around animals, and what kind of sitter you are in practical terms.
    </p>

    <h2>3. Responsibility and Cleanliness</h2>
    <p>
      This matters more than personality. Be explicit. Don’t assume it’s obvious. Mention things
      like: you keep homes clean and organized, you follow feeding routines exactly, and you notice
      changes in pet behavior.
    </p>

    <blockquote className="prose-quote">
      "I leave homes as clean (or cleaner) than I found them. I stick closely to routines and
      instructions, treating someone else’s home with the same care as my own."
    </blockquote>

    <h2>4. Show Consistency, Availability, and Pet Coverage</h2>
    <p>
      Owners worry about flakiness. Help them relax by clarifying: Your typical length of sits
      (weekends vs long-term), whether you work remotely or are out during the day, and how often
      pets will be left alone. Clarity beats flexibility here.
    </p>

    <h2>5. Reviews and Experience: Build Credibility Fast</h2>
    <p>
      If you have reviews, reference them naturally and reinforce what owners already praised.
      Everyone starts somewhere—what matters is how trustworthy you sound.
    </p>

    <h2>6. Make Your Profile Easy to Scan</h2>
    <p>
      Most owners are busy and will skim first. Use short paragraphs, clear sections, and
      straightforward language. Avoid walls of text. A clean, organized profile signals a clean and
      organized sitter.
    </p>

    <h2>7. Keep Your Profile Updated</h2>
    <p>
      An outdated profile looks abandoned. Update your bio when you complete new sits, add new
      photos of animals you've bonded with, and keep your availability calendar current. Even small
      updates signal that you are active and engaged.
    </p>

    <div className="prose-end">
      <strong>Build your foundation</strong>
      Once your profile is solid, you're ready to start applying. The first sit is the hardest, but
      a clear profile makes it much more likely.
      <br />
      <br />
      <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
        {REFERRALS.THS.label}
      </a>
    </div>
  </>
);
