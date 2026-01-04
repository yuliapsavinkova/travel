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
      prevLink={{ label: 'My Stays', href: '/stays' }}
      nextLink={{ label: "Traveler's Toolkit", href: '/toolkit' }}
    >
      <div className="flex-col flex-gap-md">
        <p className="prose-lead">{guide.excerpt}</p>
        <ContentRenderer content={guide.body} />
      </div>
    </CommonDetail>
  );
}
