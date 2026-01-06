import React from 'react';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import { getFaqsByIds } from '../../../data/faqs';
import { BlogPost } from '../../../types';

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

  // SEO Best Practice: Keep titles under 60 chars and descriptions under 160
  return {
    title: `${post.title} | Sitter Journey`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date, // Helpful for Google "Freshness" algorithm
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
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail
          onBack="/journal#archive"
          backLabel="Back to Journal"
          image=""
          title="Not Found"
        >
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Post Not Found</h1>
            <p className="hero-paragraph">
              This journal entry appears to have moved or been removed.
            </p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  const faqs = post.faqIds ? getFaqsByIds(post.faqIds) : [];

  return (
    <CommonDetail
      onBack="/journal#archive"
      backLabel="Back to Journal"
      image={post.imageUrl}
      title={post.title}
      date={post.date}
      isAffiliate={true}
      ctaLabel={post.ctaLabel}
      ctaLink={post.ctaLink}
      prevLink={post.prevLink}
      nextLink={post.nextLink}
      faqs={faqs}
    >
      <div className="flex-col flex-gap-lg">
        <ContentRenderer content={post.body} />
      </div>
    </CommonDetail>
  );
}
