import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CommonDetail from '../../components/CommonDetail';
import ContentRenderer from '../../components/ContentRenderer';
import StickyReaderCta from '../../components/StickyReaderCta';
import { getFaqsByIds } from '../../data/faqs';
import { BLOG_POSTS, HOMEOWNER_POSTS, SITTER_POSTS } from '../../data/house-sitting/house-sitting';
import { ALL_RESOURCES } from '../../data/resources/resources';
import { REFERRALS } from '../../types';
import {
  PUBLISHER_LOGO_URL,
  getPostTrack,
  getTrackLabel,
  getTrackPath,
  toAbsoluteUrl,
  toIsoDate,
} from '../../utils/content';

export async function generateStaticParams() {
  return [...BLOG_POSTS, ...ALL_RESOURCES].map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (post) {
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

  const resource = ALL_RESOURCES.find((item) => item.slug === slug);
  if (!resource) return { title: 'Not Found' };

  const canonicalUrl = `https://sitterjourney.com/${resource.slug}`;
  const absoluteImageUrl = resource.imageUrl ? toAbsoluteUrl(resource.imageUrl) : undefined;

  return {
    title: resource.seoTitle || `${resource.name} | Sitter Journey Resources`,
    description: resource.seoDescription || resource.description,
    keywords: resource.seoKeywords || [],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: resource.seoTitle || `${resource.name}: My Recommended Travel Tool`,
      description: resource.seoDescription || resource.description,
      url: canonicalUrl,
      images: absoluteImageUrl ? [{ url: absoluteImageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.seoTitle || resource.name,
      description: resource.seoDescription || resource.description,
      images: absoluteImageUrl ? [absoluteImageUrl] : [],
    },
  };
}

export default async function RootSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (post) {
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

  const sortedItems = [...ALL_RESOURCES].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  const itemIndex = sortedItems.findIndex((i) => i.slug === slug);
  const item = sortedItems[itemIndex];

  if (!item) {
    notFound();
  }

  const prevIndex = (itemIndex - 1 + sortedItems.length) % sortedItems.length;
  const nextIndex = (itemIndex + 1) % sortedItems.length;
  const prevItem = sortedItems[prevIndex];
  const nextItem = sortedItems[nextIndex];

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
