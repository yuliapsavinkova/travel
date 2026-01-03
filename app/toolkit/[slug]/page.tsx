import React from 'react';
import { REFERRALS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';

export async function generateStaticParams() {
  const allItems = REFERRALS.flatMap((cat) => cat.items);
  return allItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ReferralDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allItems = REFERRALS.flatMap((cat) => cat.items);
  const item = allItems.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail onBack="/toolkit#framework" image="" title="Not Found">
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

  return (
    <CommonDetail
      onBack="/toolkit#framework"
      image={item.imageUrl || ''}
      title={item.name}
      ctaLabel={item.discountText ? `Offer: ${item.discountText}` : 'Visit Partner'}
      ctaLink={item.link}
    >
      <div className="flex-col">
        <ContentRenderer content={item.body} className="detail-rich-content" />
      </div>
    </CommonDetail>
  );
}
