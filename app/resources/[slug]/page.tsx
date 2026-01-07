import React from 'react';
import type { Metadata } from 'next';
import { ALL_RESOURCES } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import { getFaqsByIds } from '../../../data/faqs';

export async function generateStaticParams() {
  return ALL_RESOURCES.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = ALL_RESOURCES.find((i) => i.slug === slug);

  if (!item) return { title: 'Resource Not Found' };

  return {
    title: `${item.name} | Sitter Journey Resources`,
    description: item.description,
    openGraph: {
      title: `${item.name}: My Recommended Travel Tool`,
      description: item.description,
      images: item.imageUrl ? [{ url: item.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.name,
      description: item.description,
      images: item.imageUrl ? [item.imageUrl] : [],
    },
  };
}

export default async function ResourceDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = ALL_RESOURCES.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail
          onBack="/resources#archive"
          backLabel="Back to Resources"
          image=""
          title="Not Found"
        >
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Resource Not Found</h1>
            <p className="hero-paragraph">The requested resource could not be located.</p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  const faqs = item.faqIds ? getFaqsByIds(item.faqIds) : [];

  return (
    <CommonDetail
      onBack="/resources#archive"
      backLabel="Back to Resources"
      image={item.imageUrl || ''}
      title={item.name}
      date={item.date}
      isAffiliate={true}
      ctaLabel={item.discountText ? `Offer: ${item.discountText}` : 'Visit Partner'}
      ctaLink={item.link}
      prevLink={item.prevLink}
      nextLink={item.nextLink}
      faqs={faqs}
    >
      <div className="flex-col">
        <ContentRenderer content={item.body} className="detail-rich-content" />
      </div>
    </CommonDetail>
  );
}
