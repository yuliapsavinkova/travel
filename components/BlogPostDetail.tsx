import type { Metadata } from 'next';
import { getFaqsByIds } from '../data/faqs';
import { type BlogPost, INVITE_BADGE, REFERRALS } from '../types';
import {
  PUBLISHER_LOGO_URL,
  estimateReadingTime,
  getPostTrack,
  getTrackLabel,
  getTrackPath,
  toAbsoluteUrl,
  toIsoDate,
} from '../utils/content';
import { getRelatedArticlesFor } from '../utils/related';
import ArticleSidebar from './ArticleSidebar';
import CommonDetail from './CommonDetail';
import ContentRenderer from './ContentRenderer';
import MobileReferralBar from './MobileReferralBar';

export function getBlogPostMetadata(post: BlogPost): Metadata {
  const canonicalUrl = `https://sitterjourney.com/${post.slug}`;
  const publishedTime = toIsoDate(post.date);
  const modifiedTime = toIsoDate(post.updatedDate) || publishedTime;
  const absoluteImageUrl = toAbsoluteUrl(post.imageUrl);

  return {
    title: post.seoTitle || `${post.title} | Sitter Journey`,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords || [],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: ['Yulia'],
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [absoluteImageUrl],
    },
  };
}

export default function BlogPostDetail({ post }: { post: BlogPost }) {
  const track = getPostTrack(post);
  const trackPath = getTrackPath(track);
  const trackLabel = getTrackLabel(track);
  const relatedArticles = getRelatedArticlesFor(post.slug, post.relatedSlugs);

  const faqs = post.faqIds ? getFaqsByIds(post.faqIds) : [];
  const postUrl = `https://sitterjourney.com/${post.slug}`;
  const trackUrl = `https://sitterjourney.com${trackPath}`;
  const publishedIso = toIsoDate(post.date) || post.date;
  const modifiedIso = toIsoDate(post.updatedDate) || post.updatedDate || publishedIso;

  const graphEntities: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${postUrl}#article`,
      isPartOf: {
        '@type': 'CollectionPage',
        '@id': trackUrl,
        name: `${trackLabel} | Sitter Journey`,
      },
      headline: post.title,
      description: post.seoDescription || post.excerpt,
      image: toAbsoluteUrl(post.imageUrl),
      datePublished: publishedIso,
      dateModified: modifiedIso,
      mainEntityOfPage: postUrl,
      articleSection: trackLabel,
      keywords: post.seoKeywords?.join(', '),
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
      '@id': `${postUrl}#breadcrumb`,
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
          name: trackLabel,
          item: trackUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: postUrl,
        },
      ],
    },
  ];

  if (faqs.length > 0) {
    graphEntities.push({
      '@type': 'FAQPage',
      '@id': `${postUrl}#faq`,
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
        image={post.imageUrl}
        title={post.title}
        topic={trackLabel}
        topicHref={trackPath}
        date={post.date}
        updatedDate={post.updatedDate}
        readingTime={estimateReadingTime(post.body)}
        isAffiliate={post.isAffiliate ?? true}
        faqs={faqs}
        sidebar={
          <ArticleSidebar
            promoDescription={
              track === 'homeowners'
                ? REFERRALS.THS.homeownerInviteText
                : REFERRALS.THS.sitterInviteText
            }
            promoLink={post.ctaLink || REFERRALS.THS.link}
            promoLabel={post.ctaLabel || REFERRALS.THS.cta}
            relatedArticles={relatedArticles}
          />
        }
      >
        <div className="flex-col flex-gap-lg">
          <ContentRenderer content={post.body} />
        </div>
      </CommonDetail>
      {post.showStickyCta !== false && (
        <MobileReferralBar
          badge={INVITE_BADGE}
          title="TrustedHousesitters"
          promoLink={post.ctaLink || REFERRALS.THS.link}
          ctaLabel={REFERRALS.THS.discount}
          articleTitle={post.title}
          articleSlug={post.slug}
        />
      )}
    </>
  );
}
