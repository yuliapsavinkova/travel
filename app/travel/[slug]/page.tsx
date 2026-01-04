import React from 'react';
import { TRAVEL_GUIDES, GLOBAL_STRINGS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';

export async function generateStaticParams() {
  return TRAVEL_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function TravelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = TRAVEL_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail onBack="/travel#guides" image="" title="Not Found">
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Guide Not Found</h1>
            <p className="hero-paragraph">The requested travel guide could not be located.</p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  return (
    <CommonDetail
      onBack="/travel#guides"
      image={guide.imageUrl}
      title={guide.title}
      date={guide.date}
      isAffiliate={true}
      ctaLabel="Offer: 25% Off Membership"
      ctaLink={GLOBAL_STRINGS.travelPromoLink}
    >
      <div className="flex-col flex-gap-lg">
        <div className="detail-content-section">
          <h3 className="sub-header">Overview</h3>
          <p className="detail-content-text lead">{guide.excerpt}</p>
        </div>

        <ContentRenderer content={guide.body} />

        <div className="detail-content-section" style={{ marginTop: 'var(--s-6)' }}>
          <h3 className="sub-header">Guide Highlights</h3>
          <div
            className="detail-tag-group"
            style={{ display: 'flex', gap: 'var(--s-2)', flexWrap: 'wrap' }}
          >
            {guide.tags.map((tag) => (
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
      </div>
    </CommonDetail>
  );
}
