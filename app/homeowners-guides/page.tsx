import type { Metadata } from 'next';
import BlogArchive from '../../components/BlogArchive';
import { HOMEOWNER_POSTS, SITTER_POSTS } from '../../data/house-sitting/house-sitting';
import { DEFAULT_OG_IMAGE, toAbsoluteUrl, toIsoDate, toPostSummaries } from '../../utils/content';

export const metadata: Metadata = {
  title: 'Guides for Homeowners & Pet Parents | Sitter Journey',
  description:
    'Checklists, questions to ask, and advice for homeowners welcoming a house sitter—shared from my perspective as a sitter.',
  alternates: {
    canonical: 'https://sitterjourney.com/homeowners-guides',
  },
  openGraph: {
    title: 'Guides for Homeowners & Pet Parents | Sitter Journey',
    description:
      'Checklists, questions to ask, and advice for homeowners welcoming a house sitter—shared from my perspective as a sitter.',
    url: 'https://sitterjourney.com/homeowners-guides',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey - Guides for Homeowners & Pet Parents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides for Homeowners & Pet Parents | Sitter Journey',
    description:
      'Checklists, questions to ask, and advice for homeowners welcoming a house sitter—shared from my perspective as a sitter.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function HomeownersGuidesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://sitterjourney.com/homeowners-guides#collection',
        url: 'https://sitterjourney.com/homeowners-guides',
        name: 'Guides for Homeowners & Pet Parents',
        description:
          'Checklists and honest comparisons to help homeowners find, vet, and welcome trustworthy house sitters.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: HOMEOWNER_POSTS.map((post, idx) => ({
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
        '@id': 'https://sitterjourney.com/homeowners-guides#breadcrumb',
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
            name: 'For Homeowners',
            item: 'https://sitterjourney.com/homeowners-guides',
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
          initialTrack="homeowners"
        />
      </div>
    </>
  );
}
