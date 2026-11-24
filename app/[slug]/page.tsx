import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import CommonDetail from '../../components/CommonDetail';
import ContentRenderer from '../../components/ContentRenderer';
import StickyReaderCta from '../../components/StickyReaderCta';
import {
  BLOG_POSTS,
  HOMEOWNER_POSTS,
  SITTER_POSTS,
} from '../../data/house-sitting/house-sitting';
import { REFERRALS } from '../../types';
import { getFaqsByIds } from '../../data/faqs';
import {
  PUBLISHER_LOGO_URL,
  getPostTrack,
  getTrackLabel,
  getTrackPath,
  toAbsoluteUrl,
  toIsoDate,
} from '../../utils/content';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

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

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const track = getPostTrack(post);
  const trackPath = getTrackPath(track);
  const trackLabel = getTrackLabel(track);
  const trackPosts = track === 'homeowners' ? HOMEOWNER_POSTS : SITTER_POSTS;
  const trackIndex = trackPosts.findIndex((p) => p.slug === post.slug);

  // Circular navigation strictly isolated within the article's track
  const prevPost = trackPosts[(trackIndex - 1 + trackPosts.length) % trackPosts.length];
  const nextPost = trackPosts[(trackIndex + 1) % trackPosts.length];

  const prevLink =
    trackPosts.length > 1
      ? {
          label: 'Previous',
          title: prevPost.navTitle || prevPost.title,
          href: `/${prevPost.slug}`,
        }
      : undefined;

  const nextLink =
    trackPosts.length > 1
      ? {
          label: 'Next',
          title: nextPost.navTitle || nextPost.title,
          href: `/${nextPost.slug}`,
        }
      : undefined;

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
        onBack={trackPath}
        backLabel={`Back to ${trackLabel}`}
        image={post.imageUrl}
        title={post.title}
        topic={post.topic}
        date={post.date}
        updatedDate={post.updatedDate}
        isAffiliate={post.isAffiliate ?? true}
        prevLink={prevLink}
        nextLink={nextLink}
        faqs={faqs}
      >
        <div className="flex-col flex-gap-lg">
          <ContentRenderer content={post.body} />
        </div>
      </CommonDetail>

      {post.showStickyCta !== false && (
        <StickyReaderCta
          promoLink={post.ctaLink || REFERRALS.THS.link}
          text={post.stickyCtaText || REFERRALS.THS.stickyText}
          articleTitle={post.title}
          articleSlug={post.slug}
        />
      )}
    </>
  );
}
