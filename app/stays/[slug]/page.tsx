import React from 'react';
import { REVIEWS, GLOBAL_STRINGS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';

export async function generateStaticParams() {
  return REVIEWS.map((stay) => ({
    slug: stay.slug,
  }));
}

export default async function StayDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stay = REVIEWS.find((s) => s.slug === slug);

  if (!stay) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail onBack="/stays#portfolio" image="" title="Not Found">
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Stay Not Found</h1>
            <p className="hero-paragraph">The requested stay could not be located.</p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  return (
    <CommonDetail
      onBack="/stays#portfolio"
      image={stay.imageUrl || ''}
      title={stay.location}
      date={stay.date}
      ctaLabel="Offer: 25% Off Membership"
      ctaLink={GLOBAL_STRINGS.travelPromoLink}
    >
      <div className="flex-col flex-gap-md">
        <div className="detail-content-section" style={{ marginTop: 0 }}>
          <h3 className="sub-header">The Assignment</h3>
          <p className="detail-content-text lead">{stay.sitDescription}</p>
        </div>

        <ContentRenderer content={stay.body} />

        <div
          className="detail-tag-group"
          style={{ marginTop: 'var(--s-4)', display: 'flex', gap: 'var(--s-2)', flexWrap: 'wrap' }}
        >
          {stay.tags.map((tag) => (
            <span
              key={tag}
              className="detail-tag"
              style={{
                background: 'var(--c-glass)',
                border: '1px solid var(--c-border-light)',
                padding: '6px 12px',
                borderRadius: 'var(--r-pill)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--c-gold)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CommonDetail>
  );
}
