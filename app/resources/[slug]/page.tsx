import { permanentRedirect } from 'next/navigation';
import { ALL_RESOURCES } from '../../../data/resources/resources';

/**
 * Temporary legacy /resources/[slug] -> /[slug] redirect page for Google re-indexing.
 * Safe to delete (along with the /resources/:slug rule in next.config.ts) ~1 month after launch.
 */
export async function generateStaticParams() {
  return ALL_RESOURCES.map((item) => ({
    slug: item.slug,
  }));
}

export default async function LegacyResourceRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const matchingItem = ALL_RESOURCES.find((item) => item.slug === slug);

  if (matchingItem) {
    permanentRedirect(`/${matchingItem.slug}`);
  }

  permanentRedirect('/resources');
}
