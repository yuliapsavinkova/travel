import type { Metadata } from 'next';
import BlogArchive from '../../components/BlogArchive';
import { HOMEOWNER_POSTS, SITTER_POSTS } from '../../data/house-sitting/house-sitting';
import { DEFAULT_OG_IMAGE, toAbsoluteUrl, toIsoDate, toPostSummaries } from '../../utils/content';

export const metadata: Metadata = {
  title: 'House Sitting Guides for Sitters | Sitter Journey',
  description:
    'Step-by-step house sitting strategy for sitters: getting your first sit without reviews, winning competitive sits, budget math, and life on the road.',
  alternates: {
    canonical: 'https://sitterjourney.com/sitters',
  },
  openGraph: {
    title: 'House Sitting Guides for Sitters | Sitter Journey',
    description:
      'Step-by-step house sitting strategy for sitters: getting your first sit without reviews, winning competitive sits, budget math, and life on the road.',
    url: 'https://sitterjourney.com/sitters',
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
      'Step-by-step house sitting strategy for sitters: getting your first sit without reviews, winning competitive sits, budget math, and life on the road.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function SittersPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://sitterjourney.com/sitters#collection',
        url: 'https://sitterjourney.com/sitters',
        name: 'Guides for House Sitters',
        description:
          'Step-by-step guides on starting house sitting, building a 5-star profile, and traveling full-time.',
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
        '@id': 'https://sitterjourney.com/sitters#breadcrumb',
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
            name: 'For Sitters',
            item: 'https://sitterjourney.com/sitters',
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
          variant="track"
        />
      </div>
    </>
  );
}
