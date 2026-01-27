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
    title: item.seoTitle || `${item.name} | Sitter Journey Resources`,
    description: item.seoDescription || item.description,
    keywords: item.seoKeywords || [],
    alternates: {
      canonical: `https://sitterjourney.com/resources/${item.slug}`,
    },
    openGraph: {
      title: item.seoTitle || `${item.name}: My Recommended Travel Tool`,
      description: item.seoDescription || item.description,
      images: item.imageUrl ? [{ url: item.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.seoTitle || item.name,
      description: item.seoDescription || item.description,
      images: item.imageUrl ? [item.imageUrl] : [],
    },
  };
}

export default async function ResourceDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Dynamic navigation logic - Ensure items are sorted by sortOrder before finding index
  const sortedItems = [...ALL_RESOURCES].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  const itemIndex = sortedItems.findIndex((i) => i.slug === slug);
  const item = sortedItems[itemIndex];

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

  // Circular logic for navigation
  const prevIndex = (itemIndex - 1 + sortedItems.length) % sortedItems.length;
  const nextIndex = (itemIndex + 1) % sortedItems.length;

  const prevItem = sortedItems[prevIndex];
  const nextItem = sortedItems[nextIndex];

  const prevLink = {
    label: 'Previous',
    title: prevItem.navTitle || prevItem.name,
    href: `/resources/${prevItem.slug}`,
  };

  const nextLink = {
    label: 'Next',
    title: nextItem.navTitle || nextItem.name,
    href: `/resources/${nextItem.slug}`,
  };

  const faqs = item.faqIds ? getFaqsByIds(item.faqIds) : [];

  return (
    <>
      <CommonDetail
        onBack="/resources#archive"
        backLabel="Back to Resources"
        image={item.imageUrl || ''}
        title={item.name}
        subtitle={item.subtitle}
        date={item.date}
        isAffiliate={true}
        ctaLabel={item.discountText ? `Discount: ${item.discountText}` : 'Visit'}
        ctaLink={item.link}
        prevLink={prevLink}
        nextLink={nextLink}
        faqs={faqs}
      >
        <div className="flex-col">
          <ContentRenderer content={item.body} className="detail-rich-content" />
        </div>
      </CommonDetail>
    </>
  );
}
