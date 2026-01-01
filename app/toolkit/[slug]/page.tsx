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
    { icon: <TagIcon size={14} />, text: 'Nomad Essential' },
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
  ];

  const ctaButton = (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-gold"
      style={{ width: '100%', gap: '12px' }}
    >
      {item.discountText ? 'Claim Discount' : 'Visit Site'}
      <ExternalLinkIcon size={14} />
    </a>
  );

  return (
    <div className="container">
      <CommonDetail
        onBack="/toolkit#framework"
        image={item.imageUrl || ''}
        metadata={metadata}
        title={item.name}
        backLabel="Return to Toolkit"
        imageBadge={item.discountText ? `Offer: ${item.discountText}` : undefined}
        sidebar={
          <div className="detail-content-section text-center">
            <h3 className="sub-header">Direct Access</h3>
            <p className="opacity-70" style={{ fontSize: '0.9rem', marginBottom: 'var(--s-4)' }}>
              {item.promoNote || 'Support my journey by using this vetted link.'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>{ctaButton}</div>
          </div>
        }
      >
        <div className="flex-col flex-gap-lg">
          <ContentRenderer content={item.body} className="detail-rich-content" />
        </div>
      </CommonDetail>
    </div>
  );
}
