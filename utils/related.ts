import { BLOG_POSTS } from '../data/house-sitting/house-sitting';
import { ALL_RESOURCES } from '../data/resources/resources';
import { TRAVEL_GUIDES } from '../data/travel/travel';
import type { RelatedArticleItem } from '../types';
import { resolveRelatedArticles } from './content';

export function getRelatedArticlesFor(
  currentSlug: string,
  relatedSlugs?: string[],
  limit = 3
): RelatedArticleItem[] {
  const pool: RelatedArticleItem[] = [
    ...BLOG_POSTS.map((post) => ({
      slug: post.slug,
      title: post.title,
      imageUrl: post.imageUrl,
      href: `/${post.slug}`,
    })),
    ...TRAVEL_GUIDES.map((guide) => ({
      slug: guide.slug,
      title: guide.title,
      imageUrl: guide.imageUrl,
      href: `/travel/${guide.slug}`,
    })),
    ...ALL_RESOURCES.map((resource) => ({
      slug: resource.slug,
      title: resource.name,
      imageUrl: resource.imageUrl || '/yulia-with-dog.jpg',
      href: `/${resource.slug}`,
    })),
  ];

  return resolveRelatedArticles(relatedSlugs, currentSlug, pool, limit);
}
