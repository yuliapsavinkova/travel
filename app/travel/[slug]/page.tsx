import React from 'react';
import { TRAVEL_GUIDES } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import { MapPinIcon, CompassIcon } from '../../../components/Icons';

export default async function TravelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = TRAVEL_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="container text-center section-margin">
        <h1 className="display-title">Guide Not Found</h1>
        <CommonDetail onBack="/travel#guides" image="" title="Not Found">
          <div className="text-center">The requested guide could not be located.</div>
        </CommonDetail>
      </div>
    );
  }

  const metadata = [
    { icon: <MapPinIcon size={14} />, text: guide.location },
    {
      icon: <CompassIcon size={14} style={{ color: 'var(--c-gold)' }} />,
      text: 'Verified Experience',
    },
  ];

  return (
    <div className="container">
      <CommonDetail
        onBack="/travel#guides"
        image={guide.imageUrl}
        metadata={metadata}
        title={guide.title}
        backLabel="Return to Travel"
      >
        <div className="flex-col flex-gap-lg">
          <div className="detail-content-section">
            <h3 className="sub-header">Overview</h3>
            <p className="detail-content-text lead">{guide.excerpt}</p>
          </div>

          <ContentRenderer content={guide.body} />

          <div className="detail-content-section" style={{ marginTop: 'var(--s-6)' }}>
            <h3 className="sub-header">Guide Highlights</h3>
            <div className="detail-tag-group">
              {guide.tags.map((tag) => (
                <span key={tag} className="detail-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CommonDetail>
    </div>
  );
}
