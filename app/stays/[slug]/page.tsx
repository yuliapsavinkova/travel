import React from 'react';
import { REVIEWS, GLOBAL_STRINGS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import {
  MapPinIcon,
  CalendarIcon,
  StarIcon,
  QuoteIcon,
  ExternalLinkIcon,
} from '../../../components/Icons';

export default async function StayDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stay = REVIEWS.find((s) => s.slug === slug);

  if (!stay) {
    return (
      <div className="container text-center section-margin">
        <h1 className="display-title">Stay Not Found</h1>
        <CommonDetail onBack="/stays#portfolio" image="" title="Not Found">
          <div className="text-center">The requested stay could not be located.</div>
        </CommonDetail>
      </div>
    );
  }

  const metadata = [
    { icon: <MapPinIcon size={14} />, text: stay.location },
    { icon: <CalendarIcon size={14} />, text: stay.date },
    { icon: <StarIcon size={14} style={{ color: 'var(--c-gold)' }} />, text: 'Verified 5.0' },
  ];

  return (
    <div className="container">
      <CommonDetail
        onBack="/stays#portfolio"
        image={stay.imageUrl || ''}
        metadata={metadata}
        title={stay.location}
        backLabel="Return to Portfolio"
        sidebar={
          <div className="detail-content-section">
            <div className="flex-col flex-gap-md">
              <QuoteIcon size={32} style={{ color: 'var(--c-gold)', opacity: 0.4 }} />
              <p className="detail-testimonial-text serif-italic" style={{ fontSize: '1.2rem' }}>
                "{stay.text}"
              </p>
              <div
                className="detail-testimonial-attribution sub-header"
                style={{ marginBottom: 'var(--s-4)' }}
              >
                — {stay.name}
              </div>
              <div className="section-divider" style={{ margin: 'var(--s-3) 0', padding: 0 }} />
              <a
                href={GLOBAL_STRINGS.travelPromoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: '10px', padding: '10px 15px', width: '100%' }}
              >
                Verified via TrustedHousesitters
                <ExternalLinkIcon size={12} style={{ marginLeft: '8px' }} />
              </a>
            </div>
          </div>
        }
      >
        <div className="flex-col flex-gap-lg">
          <div className="detail-content-section">
            <h3 className="sub-header">The Assignment</h3>
            <p className="detail-content-text lead">{stay.sitDescription}</p>
          </div>

          <ContentRenderer content={stay.body} />

          <div className="detail-tag-group" style={{ marginTop: 'var(--s-4)' }}>
            {stay.tags.map((tag) => (
              <span key={tag} className="detail-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CommonDetail>
    </div>
  );
}
