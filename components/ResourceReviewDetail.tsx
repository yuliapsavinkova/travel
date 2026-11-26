import type { Metadata } from 'next';
import { getFaqsByIds } from '../data/faqs';
import type { ResourceItem } from '../types';
import {
  PUBLISHER_LOGO_URL,
  estimateReadingTime,
  toAbsoluteUrl,
  toIsoDate,
} from '../utils/content';
import { getRelatedArticlesFor } from '../utils/related';
import ArticleSidebar from './ArticleSidebar';
import CommonDetail from './CommonDetail';
import ContentRenderer from './ContentRenderer';
import MobileReferralBar from './MobileReferralBar';

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
  const relatedArticles = getRelatedArticlesFor(item.slug, item.relatedSlugs);

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

  const actionLabel =
    item.ctaLabel ||
    (item.discountText
      ? /^(save|get|join|claim)\b/i.test(item.discountText)
        ? item.discountText
        : `Get ${item.discountText}`
      : `Visit ${productName}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CommonDetail
        image={item.imageUrl || ''}
        topic="Resources"
        topicHref="/resources"
        title={item.name}
        subtitle={item.subtitle}
        date={item.date}
        updatedDate={item.updatedDate}
        readingTime={estimateReadingTime(item.body)}
        isAffiliate={true}
        faqs={faqs}
        sidebar={
          <ArticleSidebar
            promoBadge={item.discountText ? 'Referral Offer' : 'Recommended Tool'}
            promoTitle={productName}
            promoDescription={item.description}
            promoLink={item.link}
            promoLabel={actionLabel}
            relatedArticles={relatedArticles}
          />
        }
      >
        <div className="flex-col">
          <ContentRenderer content={item.body} className="detail-rich-content" />
        </div>
      </CommonDetail>
      <MobileReferralBar
        badge={item.discountText ? 'Referral Offer' : 'Recommended Tool'}
        title={productName}
        promoLink={item.link}
        ctaLabel={actionLabel}
        articleTitle={item.name}
        articleSlug={item.slug}
      />
    </>
  );
}
