import React from 'react';
import { BLOG_POSTS } from '../../../constants';
import CommonDetail from '../../../components/CommonDetail';
import ContentRenderer from '../../../components/ContentRenderer';
import { BlogPost } from '../../../types';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = BLOG_POSTS as BlogPost[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container text-center section-margin">
        <CommonDetail onBack="/journal#archive" backLabel="Journal" image="" title="Not Found">
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

  return (
    <CommonDetail
      onBack="/journal#archive"
      backLabel="Journal"
      image={post.imageUrl}
      title={post.title}
      date={post.date}
      isAffiliate={true}
      ctaLabel={post.ctaLabel}
      ctaLink={post.ctaLink}
      prevLink={{ label: "The Traveler's Toolkit", href: '/toolkit' }}
      nextLink={{ label: 'Explore My Stays', href: '/stays' }}
    >
      <div className="flex-col flex-gap-lg">
        <ContentRenderer content={post.body} />
      </div>
    </CommonDetail>
  );
}
