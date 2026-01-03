import React from 'react';
import { REFERRALS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import { ExternalLinkIcon, TagIcon } from '../../../components/Icons';

export default async function ReferralDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allItems = REFERRALS.flatMap((cat) => cat.items);
  const item = allItems.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="container text-center section-margin">
        <h1 className="display-title">Tool Not Found</h1>
        <CommonDetail onBack="/toolkit#framework" image="" title="Not Found">
          <div className="text-center">The requested tool could not be located.</div>
        </CommonDetail>
      </div>
    );
  }

  const metadata = [
    ...(item.discountText
      ? [
          {
            icon: null,
            text: (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tasteful-promo-link"
                style={{ gap: '6px' }}
              >
                Claim: {item.discountText}
                <ExternalLinkIcon size={12} />
              </a>
            ),
          },
        ]
      : []),
    { icon: <TagIcon size={14} />, text: 'Traveler Essential' },
  ];

  return (
    <div className="container">
      <CommonDetail
        onBack="/toolkit#framework"
        image={item.imageUrl || ''}
        metadata={metadata}
        title={item.name}
        backLabel="Return to Toolkit"
        imageBadge={item.discountText ? `Offer: ${item.discountText}` : undefined}
      >
        <div className="flex-col">
          <ContentRenderer content={item.body} className="detail-rich-content" />

          {item.discountText && (
            <div style={{ marginTop: 'var(--s-4)' }}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tasteful-promo-link"
                style={{ gap: '6px' }}
              >
                Claim: {item.discountText}
                <ExternalLinkIcon size={12} />
              </a>
            </div>
          )}
        </div>
      </CommonDetail>
    </div>
  );
}
