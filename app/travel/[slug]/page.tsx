import React from 'react';
import type { Metadata } from 'next';
import { TRAVEL_GUIDES, GLOBAL_STRINGS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';

export async function generateStaticParams() {
  return TRAVEL_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = TRAVEL_GUIDES.find((g) => g.slug === slug);

  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: `${guide.title} | Travel Guide | Sitter Journey`,
    description: guide.excerpt,
    alternates: {
      canonical: `https://sitterjourney.com/travel/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      images: guide.imageUrl ? [{ url: guide.imageUrl }] : [],
    },
  };
}

export default async function TravelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Dynamic navigation logic (Circular)
  const sortedGuides = [...TRAVEL_GUIDES].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  const guideIndex = sortedGuides.findIndex((g) => g.slug === slug);
  const guide = sortedGuides[guideIndex];

  if (!guide) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail onBack="/travel#guides" backLabel="Back to Travel" image="" title="Not Found">
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Guide Not Found</h1>
            <p className="hero-paragraph">The requested travel guide could not be located.</p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  // Circular logic for navigation
  const prevIndex = (guideIndex - 1 + sortedGuides.length) % sortedGuides.length;
  const nextIndex = (guideIndex + 1) % sortedGuides.length;

  const prevGuide = sortedGuides[prevIndex];
  const nextGuide = sortedGuides[nextIndex];

  const prevLink = {
    label: 'Previous',
    title: prevGuide.title, // TravelGuide type doesn't have navTitle currently, using title
    href: `/travel/${prevGuide.slug}`,
  };

  const nextLink = {
    label: 'Next',
    title: nextGuide.title,
    href: `/travel/${nextGuide.slug}`,
  };

  return (
    <CommonDetail
      onBack="/travel#guides"
      backLabel="Back to Travel"
      image={guide.imageUrl}
      title={guide.title}
      date={guide.date}
      isAffiliate={true}
      ctaLabel={GLOBAL_STRINGS.travelPromoBtn}
      ctaLink={GLOBAL_STRINGS.travelPromoLink}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <div className="flex-col flex-gap-md">
        <p className="prose-lead">{guide.excerpt}</p>
        <ContentRenderer content={guide.body} />
      </div>
    </CommonDetail>
  );
}
