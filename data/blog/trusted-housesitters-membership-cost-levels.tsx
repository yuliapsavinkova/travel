import React from 'react';
import ArticleImage from '../../components/ArticleImage';
import { BlogPost, REFERRALS } from '../../types';

export const post: BlogPost = {
  id: '4',
  slug: 'trusted-housesitters-membership-cost-levels',
  title: 'Sitter Guide: TrustedHousesitters Membership Cost & Levels',
  navTitle: 'Cost Levels',
  excerpt:
    'Breaking down Basic, Standard, and Premium sitter memberships to find the right fit for you.',
  date: 'January 2026',
  category: 'Sitter Guide',
  location: 'Financial',
  sortOrder: 3,
  imageUrl:
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1200',
  ctaLabel: 'Claim 25% Off Code',
  ctaLink: REFERRALS.THS.link,
  faqIds: ['travel-savings', 'ths-experience-level-sits', 'ths-membership-try'],
  seoTitle: 'TrustedHousesitters Membership Cost & Tiers Explained',
  seoDescription:
    'Compare Basic, Standard, and Premium sitter tiers on TrustedHousesitters. We break down the pricing and features of each level.',
  seoKeywords: [
    'ths membership levels',
    'trustedhousesitters cost 2026',
    'ths basic vs standard vs premium',
    'sitter cancellation insurance',
    'trusted housesitters pricing guide',
    'is ths premium worth it',
    'house sitting insurance sitter',
    'ths discount code',
  ],
  body: (
    <>
      <p className="prose-lead">
        Understanding the different membership tiers for sitters on TrustedHousesitters is key to
        choosing the plan that fits your risk tolerance and travel style.
      </p>

      <p>
        TrustedHousesitters offers three main tiers for sitters. Each comes with the same core
        ability to apply for unlimited sits, but the differences in insurance and perks are
        significant.
      </p>

      <ArticleImage
        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200"
        alt="Happy dog in a well-maintained home"
        caption="Choosing the right sitter membership level depends on your frequency of travel."
        aspectRatio="3/2"
      />

      <h2>1. The Basic Sitter Plan</h2>
      <p>
        The entry-level plan. Best for local sitters or those who only plan to sit once or twice a
        year.
      </p>

      <h2>2. The Standard Sitter Plan</h2>
      <p>
        The most popular choice and the one I recommend. It includes everything in Basic, plus:
        <strong>Accident & Third Party Liability Protection</strong>, 24/7 Vet Line, and basic
        identity verification.
      </p>

      <h2>3. The Premium Sitter Plan</h2>
      <p>
        For full-time nomads who rely on house sitting for housing. It includes:
        <strong>Sit Cancellation Insurance</strong> (which covers hotel costs if an owner cancels
        last minute), 24/7 Priority Support, and Global Airport Lounge passes.
      </p>

      <div className="prose-accent-box">
        <h3>Which should you choose?</h3>
        <p>
          I personally use the <strong>Standard</strong> plan. The liability protection provides
          peace of mind when staying in expensive homes with beloved pets.
        </p>
      </div>

      <div className="prose-end">
        <strong>Ready to Join?</strong>
        Whichever plan you choose, you can use my referral link to get {REFERRALS.THS.discount} your
        first year.
        <br />
        <br />
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          {REFERRALS.THS.label}
        </a>
      </div>
    </>
  ),
};
