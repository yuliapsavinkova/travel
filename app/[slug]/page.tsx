import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostDetail, { getBlogPostMetadata } from '../../components/BlogPostDetail';
import ResourceReviewDetail, { getResourceMetadata } from '../../components/ResourceReviewDetail';
import { BLOG_POSTS } from '../../data/house-sitting/house-sitting';
import { ALL_RESOURCES } from '../../data/resources/resources';

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
  if (post) return getBlogPostMetadata(post);

  const resource = ALL_RESOURCES.find((item) => item.slug === slug);
  if (resource) return getResourceMetadata(resource);

  return { title: 'Not Found' };
}

export default async function RootSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (post) return <BlogPostDetail post={post} />;

  const resource = ALL_RESOURCES.find((item) => item.slug === slug);
  if (resource) return <ResourceReviewDetail item={resource} />;

  notFound();
}
