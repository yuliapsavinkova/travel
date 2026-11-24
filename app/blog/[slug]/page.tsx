import { permanentRedirect } from 'next/navigation';
import { BLOG_POSTS } from '../../../data/house-sitting/house-sitting';

/**
 * Temporary legacy /blog/[slug] -> /[slug] redirect page for Google re-indexing.
 * Safe to delete (along with `redirects()` in next.config.ts) ~1 month after launch.
 */
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function LegacyBlogPostRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const matchingPost = BLOG_POSTS.find((p) => p.slug === slug);

  if (matchingPost) {
    permanentRedirect(`/${matchingPost.slug}`);
  }

  permanentRedirect('/sitters-guides');
}
