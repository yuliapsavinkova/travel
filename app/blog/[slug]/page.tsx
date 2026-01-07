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

  return {
    title: `${post.title} | Sitter Journey Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
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
        <CommonDetail onBack="/blog#archive" backLabel="Back to Blog" image="" title="Not Found">
          <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
            <h1 className="display-title">Post Not Found</h1>
            <p className="hero-paragraph">This blog entry appears to have moved or been removed.</p>
          </div>
        </CommonDetail>
      </div>
    );
  }

  const faqs = post.faqIds ? getFaqsByIds(post.faqIds) : [];

  return (
    <CommonDetail
      onBack="/blog#archive"
      backLabel="Back to Blog"
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
