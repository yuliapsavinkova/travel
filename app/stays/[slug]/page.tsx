import React from 'react';
import type { Metadata } from 'next';
import { REVIEWS, GLOBAL_STRINGS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';

export async function generateStaticParams() {
  return REVIEWS.map((stay) => ({
    slug: stay.slug,
  }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const stay = REVIEWS.find((s) => s.slug === slug);

  if (!stay) return { title: 'Stay Not Found' };

  return {
    title: `Housesitting in ${stay.location} | Sitter Journey`,
    description: stay.sitDescription,
    alternates: {
      canonical: `https://sitterjourney.com/stays/${stay.slug}`,
    },
    openGraph: {
      title: `Housesitting in ${stay.location}`,
      description: stay.sitDescription,
      images: stay.imageUrl ? [{ url: stay.imageUrl }] : [],
    },
  };
}

export default async function StayDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stay = REVIEWS.find((s) => s.slug === slug);

  if (!stay) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail
          onBack="/stays#portfolio"
          backLabel="Back to Stays"
          image=""
          title="Not Found"
        >
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Stay Not Found</h1>
            <p className="hero-paragraph">
              The requested stay could not be located in our portfolio.
            </p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  return (
    <CommonDetail
      onBack="/stays#portfolio"
      backLabel="Back to Stays"
      image={stay.imageUrl || ''}
      title={stay.location}
      date={stay.date}
      isAffiliate={true}
      ctaLabel={GLOBAL_STRINGS.travelPromoBtn}
      ctaLink={GLOBAL_STRINGS.travelPromoLink}
      prevLink={{ label: 'Previous', title: 'Travel', href: '/travel' }}
      nextLink={{
        label: 'Next',
        title: 'First Sit',
        href: '/blog/how-to-get-your-first-house-sit-no-reviews',
      }}
    >
      <div className="flex-col flex-gap-md">
        <p className="prose-lead">{stay.sitDescription}</p>
        <ContentRenderer content={stay.body} />
      </div>
    </CommonDetail>
  );
}
