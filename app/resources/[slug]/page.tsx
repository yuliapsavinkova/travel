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

  const resourceUrl = `https://sitterjourney.com/resources/${item.slug}`;
  const graphEntities: any[] = [
    {
      '@type': 'Review',
      '@id': `${resourceUrl}#review`,
      headline: item.seoTitle || item.name,
      description: item.seoDescription || item.description,
      image: item.imageUrl?.startsWith('http') ? item.imageUrl : item.imageUrl ? `https://sitterjourney.com${item.imageUrl}` : undefined,
      datePublished: item.date,
      dateModified: item.date,
      mainEntityOfPage: resourceUrl,
      itemReviewed: {
        '@type': 'Product',
        name: item.name,
        description: item.description,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        '@id': 'https://sitterjourney.com/#author',
        name: 'Yulia',
        url: 'https://sitterjourney.com/about',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://sitterjourney.com/#organization',
        name: 'Sitter Journey',
        logo: 'https://sitterjourney.com/icon.svg',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${resourceUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://sitterjourney.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Travel Resources',
          item: 'https://sitterjourney.com/resources',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: item.name,
          item: resourceUrl,
        },
      ],
    },
  ];

  if (faqs.length > 0) {
    graphEntities.push({
      '@type': 'FAQPage',
      '@id': `${resourceUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': graphEntities,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CommonDetail
        onBack="/resources#archive"
        backLabel="Return to Resources"
        image={item.imageUrl || ''}
        title={item.name}
        subtitle={item.subtitle}
        date={item.date}
        isAffiliate={true}
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
