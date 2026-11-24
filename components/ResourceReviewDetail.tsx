import type { Metadata } from 'next';
import { getFaqsByIds } from '../data/faqs';
import { ALL_RESOURCES } from '../data/resources/resources';
import type { ResourceItem } from '../types';
import { PUBLISHER_LOGO_URL, toAbsoluteUrl, toIsoDate } from '../utils/content';
import CommonDetail from './CommonDetail';
import ContentRenderer from './ContentRenderer';

export function getResourceMetadata(item: ResourceItem): Metadata {
  const canonicalUrl = `https://sitterjourney.com/${item.slug}`;
  const absoluteImageUrl = item.imageUrl ? toAbsoluteUrl(item.imageUrl) : undefined;

  return {
    title: item.seoTitle || `${item.name} | Sitter Journey Resources`,
    description: item.seoDescription || item.description,
    keywords: item.seoKeywords || [],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: item.seoTitle || `${item.name}: My Recommended Travel Tool`,
      description: item.seoDescription || item.description,
      url: canonicalUrl,
      images: absoluteImageUrl ? [{ url: absoluteImageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.seoTitle || item.name,
      description: item.seoDescription || item.description,
      images: absoluteImageUrl ? [absoluteImageUrl] : [],
    },
  };
}

export default function ResourceReviewDetail({ item }: { item: ResourceItem }) {
  const sortedItems = [...ALL_RESOURCES].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  const itemIndex = sortedItems.findIndex((i) => i.slug === item.slug);
  const prevItem = sortedItems[(itemIndex - 1 + sortedItems.length) % sortedItems.length];
  const nextItem = sortedItems[(itemIndex + 1) % sortedItems.length];

  const prevLink =
    sortedItems.length > 1
      ? {
          label: 'Previous',
          title: prevItem.navTitle || prevItem.name,
          href: `/${prevItem.slug}`,
        }
      : undefined;

  const nextLink =
    sortedItems.length > 1
      ? {
          label: 'Next',
          title: nextItem.navTitle || nextItem.name,
          href: `/${nextItem.slug}`,
        }
      : undefined;

  const faqs = item.faqIds ? getFaqsByIds(item.faqIds) : [];
  const resourceUrl = `https://sitterjourney.com/${item.slug}`;
  const productName = item.name.replace(/\s+Review$/i, '');
  const imageFormatted = toAbsoluteUrl(item.imageUrl);
  const publishedIso = toIsoDate(item.date) || item.date;
  const modifiedIso = toIsoDate(item.updatedDate) || item.updatedDate || publishedIso;

  const graphEntities: Record<string, unknown>[] = [
    {
      '@type': 'Product',
      '@id': `${resourceUrl}#product`,
      name: productName,
      description: item.description,
      image: imageFormatted,
      offers: {
        '@type': 'Offer',
        url: item.link || resourceUrl,
        priceCurrency: 'USD',
        price: '0',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        description: item.discountText || item.description,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '1',
        bestRating: '5',
        worstRating: '1',
      },
      review: {
        '@type': 'Review',
        '@id': `${resourceUrl}#review`,
        headline: item.seoTitle || item.name,
        description: item.seoDescription || item.description,
        reviewBody: item.seoDescription || item.description,
        image: imageFormatted,
        datePublished: publishedIso,
        dateModified: modifiedIso,
        mainEntityOfPage: resourceUrl,
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
          logo: PUBLISHER_LOGO_URL,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
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
        updatedDate={item.updatedDate}
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
