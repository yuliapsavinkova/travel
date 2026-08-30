import React from 'react';
import type { Metadata } from 'next';
import { BLOG_POSTS, REFERRALS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import StickyReaderCta from '../../../components/StickyReaderCta';
import { getFaqsByIds } from '../../../data/faqs';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.seoTitle || `${post.title} | Sitter Journey Blog`,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords || [],
    alternates: {
      canonical: `https://sitterjourney.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.imageUrl,
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
      images: [post.imageUrl],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const post = sortedPosts[postIndex];

  if (!post) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail onBack="/blog#archive" backLabel="Back to Blog" image="" title="Not Found">
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Post Not Found</h1>
            <p className="hero-paragraph">
              This blog entry appears to have moved or been removed. Please check the archive.
            </p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  // Circular logic for navigation
  const prevIndex = (postIndex - 1 + sortedPosts.length) % sortedPosts.length;
  const nextIndex = (postIndex + 1) % sortedPosts.length;

  const prevPost = sortedPosts[prevIndex];
  const nextPost = sortedPosts[nextIndex];

  const prevLink = {
    label: 'Previous',
    title: prevPost.navTitle || prevPost.title,
    href: `/blog/${prevPost.slug}`,
  };

  const nextLink = {
    label: 'Next',
    title: nextPost.navTitle || nextPost.title,
    href: `/blog/${nextPost.slug}`,
  };

  const faqs = post.faqIds ? getFaqsByIds(post.faqIds) : [];

  const postUrl = `https://sitterjourney.com/blog/${post.slug}`;
  const graphEntities: any[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${postUrl}#article`,
      isPartOf: {
        '@type': 'Blog',
        '@id': 'https://sitterjourney.com/blog',
        name: 'Sitter Journey Blog',
      },
      headline: post.title,
      description: post.seoDescription || post.excerpt,
      image: post.imageUrl.startsWith('http') ? post.imageUrl : `https://sitterjourney.com${post.imageUrl}`,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: postUrl,
      articleSection: post.category,
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
        logo: 'https://sitterjourney.com/icon.svg',
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
          name: 'Blog',
          item: 'https://sitterjourney.com/blog',
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
        onBack="/blog#archive"
        backLabel="Return to Blog"
        image={post.imageUrl}
        title={post.title}
        topic={post.topic}
        date={post.date}
        isAffiliate={true}
        prevLink={prevLink}
        nextLink={nextLink}
        faqs={faqs}
      >
        <div className="flex-col flex-gap-lg">
          <ContentRenderer content={post.body} />
        </div>
      </CommonDetail>

      <StickyReaderCta
        promoLink={post.ctaLink || REFERRALS.THS.link}
        text="Get 25% off TrustedHousesitters Membership"
      />
    </>
  );
}
