import Link from 'next/link';
import React from 'react';
import ArticleImage from '../../../components/ArticleImage';
import { BlogPost, REFERRALS } from '../../../types';

export const post: BlogPost = {
  id: '2',
  slug: 'trusted-housesitters-profile-tips-how-to-secure-more-sits',
  track: 'sitters',
  topic: 'TrustedHousesitters',
  title: 'Profile Tips: How to Secure More Sits',
  navTitle: 'Profile Tips',
  excerpt:
    'What I have learned about building a sitter profile homeowners trust, including photo guidelines and real examples.',
  date: 'January 9, 2026',
  category: 'Sitter Guide',
  location: 'Strategy',
  sortOrder: 5,
  audience: ['Sitters'],
  imageUrl:
    'https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop',
  ctaLabel: REFERRALS.THS.label,
  ctaLink: REFERRALS.THS.link,
  faqIds: ['trusted-profile-tips', 'ths-photo-aspect', 'ths-cleanliness-mention'],
  relatedSlugs: [
    'how-to-get-your-first-house-sit-no-reviews',
    'why-trusted-housesitters-applications-get-rejected',
    'how-to-update-homeowners-while-house-sitting',
  ],
  seoTitle: 'TrustedHousesitters Profile Tips | How to Build a 5-Star Profile',
  seoDescription:
    'My insights on building a TrustedHousesitters profile that earns trust, including the 3:2 photo aspect ratio and practical bio examples.',
  seoKeywords: [
    'trustedhousesitters profile tips',
    'how to get more house sits',
    'house sitting bio examples',
    'TrustedHousesitters profile photo size',
    'winning sitter application strategy',
    'trust building for sitters',
    'house sitting profile checklist',
    'sitter bio writing tips',
  ],
  body: (
    <>
      <p className="prose-lead">
        In my experience, many sitters write profiles focused mostly on their travel dreams or life
        story. From what I have seen and heard from homeowners, what matters most to them is knowing
        you can take good care of their home and their pet.
      </p>

      <p>
        A strong profile helps an owner feel comfortable handing over their keys and beloved pets.
        For me, writing a good profile has never been about telling my life story. It is about
        clarity and showing reliability.
      </p>

      <h2>1. Profile Photos: Get This Right First</h2>
      <p>
        Having good photos sets you up for success. Choose images that are clear and well lit.
        Owners often look at your photos before they read a single word of your bio.
      </p>

      <div className="prose-accent-box">
        <span className="accent-box-label">What works well for photos:</span>
        <ul>
          <li>Show your face clearly in your main profile photo</li>
          <li>Include at least one photo of you with a pet (dog or cat both work)</li>
          <li>
            <strong>Use a 3:2 aspect ratio:</strong> This helps keep your images from getting
            cropped, rescaled, or blurry.
          </li>
        </ul>
      </div>

      <h3>What 3:2 means in practice:</h3>
      <ul>
        <li>Examples: 900 × 600, 1500 × 1000, 3000 × 2000</li>
        <li>For a 3:2 photo, the width is 1.5 times the height</li>
      </ul>

      <p>
        If you upload a square or vertical image, TrustedHousesitters will shrink it and it won't
        display full-size. That can make an otherwise great profile look unpolished. Authentic,
        well-lit photos with animals build immediate rapport.
      </p>

      <ArticleImage
        src="https://images.unsplash.com/photo-1517125591588-3a29b2182219?q=80&w=2073&auto=format&fit=crop"
        alt="Sitter with a happy dog"
        caption="Clear, authentic photos with animals are your most powerful trust-building tool."
        aspectRatio="3/2"
      />

      <h2>2. Profile Content: Write for Owners, Not for Yourself</h2>
      <p>
        When owners look through profiles, they mainly want to know whether they can picture you
        caring for their home and pet. I have found it helps to skip long travel manifestos or
        childhood stories.
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
        <Link href="/how-to-get-your-first-house-sit-no-reviews">
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
        <Link href="/trusted-housesitters-how-to-apply-for-competitive-sits-fast-using-ai">
          AI strategy for applying to high-demand sits
        </Link>{' '}
        to scale your applications without sacrificing quality.
      </p>

      <div className="prose-end">
        <strong>My Takeaway</strong>From my experience, a clear, thoughtful profile removes a lot of
        hesitation for owners. Getting your photos right, speaking to their concerns, and showing
        how you care for a home goes a long way toward turning profile views into confirmed sits.
      </div>
    </>
  ),
};
