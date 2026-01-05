import React from 'react';
import { ALL_REFERRALS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';

export async function generateStaticParams() {
  return ALL_REFERRALS.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ReferralDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Clean logic: data is already typed and flattened at the source
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
    >
      <div className="flex-col">
        <ContentRenderer content={item.body} className="detail-rich-content" />
      </div>
    </CommonDetail>
  );
}
