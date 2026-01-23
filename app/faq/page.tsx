import React from 'react';
import type { Metadata } from 'next';
import CommonDetail from '../../components/CommonDetail';
import FAQSection from '../../components/FAQSection';
import { MASTER_FAQS } from '../../data/faqs';
import { REFERRALS } from '../../types';

export const metadata: Metadata = {
  title: 'FAQ: House Sitting & Nomadic Travel | Sitter Journey',
  description:
    'Common questions about house sitting, TrustedHousesitters, and traveling full-time.',
  alternates: {
    canonical: 'https://sitterjourney.com/faq',
  },
};

export default function FAQPage() {
  return (
    <CommonDetail
      image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2400"
      title="Common Questions."
      date="January 2026"
      prevLink={{ label: 'Previous', title: 'Blog', href: '/blog' }}
      nextLink={{ label: 'Next', title: 'Resources', href: '/resources' }}
    >
      <div className="flex-col">
        <p className="prose-lead">
          Everything you need to know about starting your house sitting journey, handling
          rejections, and traveling sustainably.
        </p>

        <div style={{ marginTop: 'var(--s-6)' }}>
          <FAQSection items={MASTER_FAQS} />
        </div>

        <div className="prose-accent-box variant-cta" style={{ marginTop: 'var(--s-9)' }}>
          <span className="accent-box-label">Get {REFERRALS.THS.discount} Membership</span>
          <p>
            Ready to start your journey? Use my verified referral link to get
            {REFERRALS.THS.discount} your annual membership.
          </p>
          <a
            href={REFERRALS.THS.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-wide"
          >
            Discount: {REFERRALS.THS.discount}
          </a>
        </div>
      </div>
    </CommonDetail>
  );
}
