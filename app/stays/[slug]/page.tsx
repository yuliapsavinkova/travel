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
        <CommonDetail onBack="/stays#portfolio" backLabel="Stays" image="" title="Not Found">
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
      backLabel="Stays"
      image={stay.imageUrl || ''}
      title={stay.location}
      date={stay.date}
      isAffiliate={true}
      ctaLabel={GLOBAL_STRINGS.travelPromoBtn}
      ctaLink={GLOBAL_STRINGS.travelPromoLink}
      prevLink={{ label: 'Destinations', href: '/travel' }}
      nextLink={{ label: 'Journal: My First Sit', href: '/journal/get-your-first-house-sit' }}
    >
      <div className="flex-col flex-gap-md">
        <p className="prose-lead">{stay.sitDescription}</p>
        <ContentRenderer content={stay.body} />
      </div>
    </CommonDetail>
  );
}
