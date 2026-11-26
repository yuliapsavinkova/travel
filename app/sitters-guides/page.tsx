import type { Metadata } from 'next';
import BlogArchive from '../../components/BlogArchive';
import { HOMEOWNER_POSTS, SITTER_POSTS } from '../../data/house-sitting/house-sitting';
import { DEFAULT_OG_IMAGE, toAbsoluteUrl, toIsoDate, toPostSummaries } from '../../utils/content';

export const metadata: Metadata = {
  title: 'House Sitting Guides for Sitters | Sitter Journey',
  description:
    'House sitting tips, real numbers, and honest lessons from my own experience: getting your first sit without reviews, winning competitive sits, and budget math.',
  alternates: {
    canonical: 'https://sitterjourney.com/sitters-guides',
  },
  openGraph: {
    title: 'House Sitting Guides for Sitters | Sitter Journey',
    description:
      'House sitting tips, real numbers, and honest lessons from my own experience: getting your first sit without reviews, winning competitive sits, and budget math.',
    url: 'https://sitterjourney.com/sitters-guides',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey - Guides for House Sitters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Sitting Guides for Sitters | Sitter Journey',
    description:
      'House sitting tips, real numbers, and honest lessons from my own experience: getting your first sit without reviews, winning competitive sits, and budget math.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function SittersGuidesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://sitterjourney.com/sitters-guides#collection',
        url: 'https://sitterjourney.com/sitters-guides',
        name: 'Guides for House Sitters',
        description: 'House sitting tips, real numbers, and honest lessons from my own experience.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: SITTER_POSTS.map((post, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            url: `https://sitterjourney.com/${post.slug}`,
            name: post.title,
            image: toAbsoluteUrl(post.imageUrl),
            datePublished: toIsoDate(post.date) || post.date,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sitterjourney.com/sitters-guides#breadcrumb',
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
            name: 'Guides for House Sitters',
            item: 'https://sitterjourney.com/sitters-guides',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container section-margin archive-page-container">
        <BlogArchive
          sitterPosts={toPostSummaries(SITTER_POSTS)}
          homeownerPosts={toPostSummaries(HOMEOWNER_POSTS)}
          initialTrack="sitters"
        />
      </div>
    </>
  );
}
