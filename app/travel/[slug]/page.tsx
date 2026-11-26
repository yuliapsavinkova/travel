import type { Metadata } from 'next';
import React from 'react';
import ArticleSidebar from '../../../components/ArticleSidebar';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import MobileReferralBar from '../../../components/MobileReferralBar';
import { TRAVEL_GUIDES } from '../../../data/travel/travel';
import { REFERRALS } from '../../../types';
import {
  PUBLISHER_LOGO_URL,
  estimateReadingTime,
  toAbsoluteUrl,
  toIsoDate,
} from '../../../utils/content';
import { getRelatedArticlesFor } from '../../../utils/related';

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

  const publishedTime = toIsoDate(guide.date);
  const modifiedTime = toIsoDate(guide.updatedDate) || publishedTime;
  const absoluteImageUrl = guide.imageUrl ? toAbsoluteUrl(guide.imageUrl) : undefined;

  return {
    title: `${guide.title} | Travel Guide | Sitter Journey`,
    description: guide.excerpt,
    keywords: [
      guide.location,
      `${guide.location} travel guide`,
      'house sitting destinations',
      'slow travel',
      'slow travel guide',
    ],
    alternates: {
      canonical: `https://sitterjourney.com/travel/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | Travel Guide`,
      description: guide.excerpt,
      url: `https://sitterjourney.com/travel/${guide.slug}`,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: ['Yulia'],
      images: absoluteImageUrl
        ? [
            {
              url: absoluteImageUrl,
              width: 1200,
              height: 630,
              alt: guide.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | Travel Guide`,
      description: guide.excerpt,
      images: absoluteImageUrl ? [absoluteImageUrl] : [],
    },
  };
}

export default async function TravelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const guide = TRAVEL_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail topic="Travel Guides" topicHref="/travel" image="" title="Not Found">
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Guide Not Found</h1>
            <p className="hero-paragraph">The requested travel guide could not be located.</p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  const relatedArticles = getRelatedArticlesFor(guide.slug, guide.relatedSlugs);

  const guideUrl = `https://sitterjourney.com/travel/${guide.slug}`;
  const publishedIso = toIsoDate(guide.date) || guide.date;
  const modifiedIso = toIsoDate(guide.updatedDate) || guide.updatedDate || publishedIso;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${guideUrl}#article`,
        headline: guide.title,
        description: guide.excerpt,
        image: toAbsoluteUrl(guide.imageUrl),
        datePublished: publishedIso,
        dateModified: modifiedIso,
        mainEntityOfPage: guideUrl,
        about: {
          '@type': 'Place',
          name: guide.location,
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
          logo: PUBLISHER_LOGO_URL,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${guideUrl}#breadcrumb`,
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
            name: 'Travel Guides',
            item: 'https://sitterjourney.com/travel',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: guideUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CommonDetail
        image={guide.imageUrl}
        topic="Travel Guides"
        topicHref="/travel"
        title={guide.title}
        date={guide.date}
        updatedDate={guide.updatedDate}
        readingTime={estimateReadingTime(guide.body)}
        isAffiliate={true}
        sidebar={
          <ArticleSidebar
            promoLink={REFERRALS.THS.link}
            promoLabel={REFERRALS.THS.cta}
            relatedArticles={relatedArticles}
          />
        }
      >
        <div className="flex-col flex-gap-md">
          <p className="prose-lead">{guide.excerpt}</p>
          <ContentRenderer content={guide.body} />
        </div>
      </CommonDetail>
      <MobileReferralBar
        badge="Referral Offer"
        title="TrustedHousesitters"
        promoLink={REFERRALS.THS.link}
        ctaLabel={`Get ${REFERRALS.THS.discount}`}
        articleTitle={guide.title}
        articleSlug={guide.slug}
      />
    </>
  );
}
