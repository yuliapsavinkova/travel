import React from 'react';
import Link from 'next/link';
import ArticleImage from '../../components/ArticleImage';
import { BlogPost, REFERRALS } from '../../types';

export const post: BlogPost = {
  id: '2',
  slug: 'trusted-housesitters-profile-tips-how-to-secure-more-sits',
  title: 'TrustedHousesitters Profile Tips: How to Secure More Sits',
  navTitle: 'Profile Tips',
  excerpt: 'Master your profile with practical tips, including photo rules and proven examples.',
  date: 'January 2026',
  category: 'Expertise',
  location: 'Profile Strategy',
  sortOrder: 5,
  imageUrl:
    'https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop',
  ctaLabel: 'Get 25% Off Membership',
  ctaLink: REFERRALS.THS.link,
  faqIds: ['ths-beginner-difficulty', 'ths-rejection-common', 'ths-reporting-safety'],
  seoTitle: 'TrustedHousesitters Profile Tips | How to Build a 5-Star Profile',
  seoDescription:
    'Master your TrustedHousesitters profile with these photo and bio tips. Learn the 3:2 aspect ratio rule for winning applications.',
  seoKeywords: [
    'trustedhousesitters profile tips',
    'how to get more house sits',
    'house sitting bio examples',
    'ths profile photo size',
    'winning sitter application strategy',
    'trust building for sitters',
    'house sitting profile checklist',
    'sitter bio writing tips',
  ],
  body: (
    <>
      <p className="prose-lead">
        Most sitters write profiles about themselves - their travel dreams, their love of animals,
        their life story. Owners don't care about any of that. They care about one thing: whether
        you can handle their home and their pet.
      </p>

      <p>
        A strong profile makes an owner feel confident. They need to know they can hand you their
        keys and their beloved pets without worry. This isn't about telling your life story: it is
        about clarity and proof of responsibility.
      </p>

      <h2>1. Profile Photos: Get This Right First</h2>
      <p>
        Having good photos sets you up for success. Choose images that are clear and well lit.
        Owners often look at your photos before they read a single word of your bio.
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
        If you upload a square or vertical image, TrustedHousesitters will shrink it and it won't
        display full-size. That immediately looks sloppy and unprofessional. Authentic, well-lit
        photos with animals build immediate rapport.
      </p>

      <ArticleImage
        src="https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop"
        alt="Sitter with a happy dog"
        caption="Clear, authentic photos with animals are your most powerful trust-building tool."
        aspectRatio="3/2"
      />

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
          <li>Generic statements like "I love animals and travel"</li>
        </ul>
      </div>

      <h3>What to do instead:</h3>
      <ul>
        <li>Make it easy for an owner to picture you in their home</li>
        <li>Answer their unspoken questions quickly</li>
        <li>
          Focus on: What pets you've cared for, how you structure your day around animals, your
          approach to home care
        </li>
      </ul>

      <h3>Good vs Bad Bio Language:</h3>
      <div className="prose-breakout">
        <div className="prose-accent-box variant-cons">
          <span className="accent-box-label">❌ Bad Example:</span>
          <p className="serif-italic">
            "I've loved animals my whole life and dream of traveling the world to experience new
            cultures and make meaningful connections."
          </p>
        </div>
        <div className="prose-accent-box variant-pros">
          <span className="accent-box-label">✅ Good Example:</span>
          <p className="serif-italic">
            "I've cared for dogs and cats for 5+ years, including managing medication schedules and
            special diets. I work remotely and am home throughout the day with pets."
          </p>
        </div>
      </div>

      <h2>3. Show Responsibility and Cleanliness</h2>
      <p>
        This matters more than personality. Be explicit about how you handle homes and routines.
      </p>

      <div className="prose-accent-box variant-pros">
        <span className="accent-box-label">Strong Bio Language:</span>
        <ul>
          <li>"I keep homes clean and organized"</li>
          <li>"I follow feeding routines exactly as instructed"</li>
          <li>"I leave homes as clean (or cleaner) than I found them"</li>
          <li>"I provide daily photo updates"</li>
        </ul>
      </div>

      <p>
        Owners want to know you take this seriously. Specific statements about cleanliness and
        routine adherence build trust immediately.
      </p>

      <h2>4. Highlight Your Situation</h2>
      <p>Owners want to know if you'll actually be home with their pets. Be clear about:</p>
      <ul>
        <li>
          <strong>Remote work:</strong> "I work remotely, so I'm home with pets throughout the day"
        </li>
        <li>
          <strong>Retired:</strong> "I'm retired and have full flexibility with my schedule"
        </li>
        <li>
          <strong>Flexible schedule:</strong> "I structure my days around pet care needs"
        </li>
      </ul>

      <p>
        This reassures owners that their pets won't be alone for long stretches. It's one of the
        biggest concerns they have.
      </p>

      <h2>5. Keep It Scannable</h2>
      <p>
        Owners are reviewing multiple profiles. Make yours easy to read. If you're just getting
        started, check out my guide on{' '}
        <Link href="/blog/how-to-get-your-first-house-sit-no-reviews">
          how to get your first sit with no reviews
        </Link>{' '}
        for strategies that work even without a track record.
      </p>
      <ul>
        <li>Use short paragraphs (2-3 sentences max)</li>
        <li>Lead with your strongest points</li>
        <li>Avoid walls of text</li>
        <li>Be specific, not vague</li>
      </ul>

      <h2>Profile Completion Checklist</h2>
      <p>Before you start applying, make sure you've completed these essential steps:</p>
      <ul>
        <li>
          <strong>Verify your identity:</strong> Complete all verification badges
          TrustedHousesitters offers
        </li>
        <li>
          <strong>Add references:</strong> Personal or professional references build credibility
        </li>
        <li>
          <strong>Fill all sections:</strong> Incomplete profiles signal you're not serious
        </li>
        <li>
          <strong>Proofread everything:</strong> Typos and errors undermine trust
        </li>
        <li>
          <strong>Upload quality photos:</strong> Remember the 3:2 aspect ratio rule
        </li>
      </ul>

      <h2>Common Profile Mistakes</h2>

      <div className="prose-accent-box variant-cons">
        <span className="accent-box-label">Avoid These:</span>
        <ul>
          <li>
            <strong>Too much personality, not enough capability:</strong> Owners need to know you
            can handle their pets, not your life philosophy
          </li>
          <li>
            <strong>Blurry or cropped photos:</strong> Shows lack of attention to detail
          </li>
          <li>
            <strong>Incomplete profiles:</strong> Missing sections signal you're not serious
          </li>
          <li>
            <strong>Generic language:</strong> "I love all animals" doesn't tell them anything
            useful
          </li>
        </ul>
      </div>

      <p>
        Once your profile is solid and you've built up some reviews, you'll want to move fast on
        competitive sits. Read my{' '}
        <Link href="/blog/trusted-housesitters-how-to-apply-for-competitive-sits-fast-using-ai">
          AI strategy for applying to high-demand sits
        </Link>{' '}
        to scale your applications without sacrificing quality.
      </p>

      <div className="prose-end">
        <strong>The Bottom Line</strong>A clear, professional profile removes barriers for owners to
        say "yes." Get your photos right, write for their concerns, and show you're responsible.
        That's what converts views into confirmed sits.
        <br />
        <br />
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          {REFERRALS.THS.label}
        </a>
      </div>
    </>
  ),
};
