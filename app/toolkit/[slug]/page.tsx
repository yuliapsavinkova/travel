import React from 'react';
import type { Metadata } from 'next';
import { ALL_REFERRALS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import { getFaqsByIds } from '../../../data/faqs';

export async function generateStaticParams() {
  return ALL_REFERRALS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = ALL_REFERRALS.find((i) => i.slug === slug);

  if (!item) return { title: 'Tool Not Found' };

  return {
    title: `${item.name} | Sitter Journey Toolkit`,
    description: item.description,
    openGraph: {
      title: `${item.name}: My Recommended Travel Tool`,
      description: item.description,
      images: item.imageUrl ? [{ url: item.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.name,
      description: item.description,
      images: item.imageUrl ? [item.imageUrl] : [],
    },
  };
}

export default async function ReferralDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = ALL_REFERRALS.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail
          onBack="/toolkit#framework"
          backLabel="Back to Toolkit"
          image=""
          title="Not Found"
        >
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Tool Not Found</h1>
            <p className="hero-paragraph">
              The requested tool could not be located in our archive.
            </p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  const faqs = item.faqIds ? getFaqsByIds(item.faqIds) : [];

  return (
    <CommonDetail
      onBack="/toolkit#framework"
      backLabel="Back to Toolkit"
      image={item.imageUrl || ''}
      title={item.name}
      date={item.date}
      isAffiliate={true}
      ctaLabel={item.discountText ? `Offer: ${item.discountText}` : 'Visit Partner'}
      ctaLink={item.link}
      prevLink={item.prevLink}
      nextLink={item.nextLink}
      faqs={faqs}
    >
      <div className="flex-col">
        <ContentRenderer content={item.body} className="detail-rich-content" />
      </div>
    </CommonDetail>
  );
}
