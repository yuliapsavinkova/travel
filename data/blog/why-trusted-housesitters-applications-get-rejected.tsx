import React from 'react';
import Link from 'next/link';
import { BlogPost, REFERRALS } from '../../types';

export const post: BlogPost = {
  id: '5',
  slug: 'why-trusted-housesitters-applications-get-rejected',
  title: 'Why My House Sit Application Got Rejected',
  navTitle: 'Rejections',
  excerpt: 'Rejections happen. Here’s what you can control and what you cannot.',
  date: 'January 2026',
  category: 'Expertise',
  location: 'Strategy',
  sortOrder: 8,
  imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2070&fit=crop',
  ctaLabel: 'Claim 25% Off Membership',
  ctaLink: REFERRALS.THS.link,
  faqIds: ['ths-rejection-fix', 'ths-reviews-starting', 'ths-reporting-safety'],
  seoTitle: 'Why TrustedHousesitters Applications Get Rejected | Sitter Journey',
  seoDescription:
    'Discover why TrustedHousesitters applications get declined and how to beat the 5-app rule. Understand homeowner psychology.',
  seoKeywords: [
    'trustedhousesitters rejection reasons',
    'why ths applications get declined',
    'ths 5 application rule',
    'beating house sitting competition',
    'house sitting application tips',
    'owner pet preferences',
    'trustedhousesitters application template',
    'handling house sitting rejection',
  ],
  body: (
    <>
      <p className="prose-lead">
        I am a solo female housesitter and petsitter. I’ve completed dozens of sits across the
        United States, and one thing I know for sure is that rejection is just part of the
        experience. My advice has always been: don't take it personally.
      </p>

      <p>
        Even after so many successful sits, I still get rejected. Most of the time, the "no" has
        absolutely nothing to do with you. Here is a breakdown of the factors I've identified—the
        ones you can influence and the ones that are completely out of your hands.
      </p>

      <h2>1. Rejection Factors You Can Control</h2>
      <ul>
        <li>
          <strong>Limited Reviews:</strong> Without verified proof on the platform, you are seen as
          a higher risk. Focus on building your base with local assignments first. Read my:{' '}
          <Link href="/blog/how-to-get-your-first-house-sit-no-reviews">
            guide for landing your first sit
          </Link>
          .
        </li>
        <li>
          <strong>Volume of Competition:</strong> Even if you have several reviews, there are often
          sitters with dozens more applying for the same high-demand homes. You can improve your
          odds by applying quickly to new listings.
        </li>
        <li>
          <strong>Profile Quality:</strong> If your photos are not clear or your bio feels generic,
          homeowners will likely pass over your profile. You can fix this immediately using my:{' '}
          <Link href="/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits">
            profile mastery tips
          </Link>
          .
        </li>
        <li>
          <strong>Application Specifics:</strong> If your initial message is a template and does not
          address the specific pets or home requirements, homeowners will skip your application.
        </li>
      </ul>

      <h2>2. Rejection Factors You Cannot Control</h2>
      <p>
        When these factors are at play, the best strategy is simply to move on to the next
        opportunity immediately.
      </p>

      <ul>
        <li>
          <strong>The Returning Sitter:</strong> A previous sitter applied to the same listing. They
          almost always get priority because the owners already trust them and the pet already knows
          them.
        </li>
        <li>
          <strong>Demographic Preferences:</strong> Some homeowners specifically look for solo
          female sitters or retired couples. If you do not fit that vision, it is completely out of
          your hands.
        </li>
        <li>
          <strong>The "Mirror" Effect:</strong> Owners often pick sitters who reflect their own
          lifestyle. A young active couple might pick a young active couple. A retired solo
          homeowner might feel more comfortable with a solo female sitter.
        </li>
        <li>
          <strong>Solo vs Couple:</strong> Some owners believe a couple provides more "security" or
          better care for multiple pets. Others prefer a solo person because they have a small guest
          room or want less wear-and-tear on their home.
        </li>
        <li>
          <strong>Age Range Filters:</strong> Some owners seek a specific age range, for example, “a
          retired couple over 55”, to match the pace of their lifestyle or neighborhood.
        </li>
        <li>
          <strong>Subconscious Resemblance:</strong> Owners often subconsciously choose a sitter who
          resembles themselves. They believe the pet will adjust more easily to someone who feels
          familiar.
        </li>
        <li>
          <strong>Sitter Location:</strong> Even though the platform is focused on travel, many
          owners prefer a sitter from their own town. This often leads to rejections that have
          nothing to do with your profile or experience.
        </li>
      </ul>

      <blockquote className="prose-quote">
        "A rejection is never a reflection of your worth as a sitter. Usually, it just means the
        owner found a specific 'type' of person they had pictured in their head."
      </blockquote>

      <h2>My approach:</h2>
      <p>
        I send my application and I move on. I don't spend time wondering why I wasn't picked. The
        right sit is always the one that says "yes."
      </p>

      <div className="prose-end">
        <strong>Keep going</strong>
        Every "no" brings you closer to the next great experience. Don't let the process discourage
        you—just keep being yourself.
        <br />
        <br />
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          {REFERRALS.THS.label}
        </a>
      </div>
    </>
  ),
};
