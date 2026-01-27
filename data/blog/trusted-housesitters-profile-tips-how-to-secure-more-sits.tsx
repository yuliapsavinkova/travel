import React from 'react';
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
        If you want to secure more sits on TrustedHousesitters, your profile needs to instantly
        build trust. Owners skim fast and decide even faster. Your goal is to look reliable, clear,
        and easy to say yes to.
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

      <ArticleImage
        src="https://images.unsplash.com/photo-1517125591588-3a29b2182211?q=80&w=2073&auto=format&fit=crop"
        alt="Sitter with a happy dog"
        caption="Clear, authentic photos with animals are your most powerful trust-building tool."
        aspectRatio="3/2"
      />

      <h2>2. Profile Content: Write for Owners</h2>
      <p>
        Owners care about one thing: whether you can handle their home and their pet. Avoid generic
        travel manifestos and wall-of-text personal stories. Clarity beats flexibility here.
      </p>

      <div className="prose-end">
        <strong>Build your foundation</strong>
        Once your profile is solid, you're ready to start applying. The first sit is the hardest,
        but a clear profile makes it much more likely.
        <br />
        <br />
        <a href={REFERRALS.THS.link} target="_blank" rel="noopener noreferrer">
          {REFERRALS.THS.label}
        </a>
      </div>
    </>
  ),
};
