import type { Metadata } from 'next';
import BlogArchive from '../../components/BlogArchive';
import { BLOG_POSTS, HOMEOWNER_POSTS, SITTER_POSTS } from '../../data/house-sitting/house-sitting';
import { DEFAULT_OG_IMAGE, toAbsoluteUrl, toIsoDate, toPostSummaries } from '../../utils/content';

export const metadata: Metadata = {
  title: 'House Sitting Blog: Guides for Sitters & Homeowners | Sitter Journey',
  description:
    'Read dedicated house sitting guides separated by tab: For Sitters and For Homeowners.',
  alternates: {
    canonical: 'https://sitterjourney.com/blog',
  },
  openGraph: {
    title: 'House Sitting Blog: Guides for Sitters & Homeowners | Sitter Journey',
    description:
      'Read dedicated house sitting guides separated by tab: For Sitters and For Homeowners.',
    url: 'https://sitterjourney.com/blog',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey Blog - For Sitters and For Homeowners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Sitting Blog: Guides for Sitters & Homeowners | Sitter Journey',
    description:
      'Read dedicated house sitting guides separated by tab: For Sitters and For Homeowners.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://sitterjourney.com/blog#collection',
        url: 'https://sitterjourney.com/blog',
        name: 'Sitter Journey Blog',
        description:
          'House sitting guides organized into dedicated tabs for Sitters and Homeowners.',
        blogPost: BLOG_POSTS.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `https://sitterjourney.com/${post.slug}`,
          image: toAbsoluteUrl(post.imageUrl),
          datePublished: toIsoDate(post.date) || post.date,
          description: post.excerpt,
          author: {
            '@type': 'Person',
            '@id': 'https://sitterjourney.com/#author',
            name: 'Yulia',
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sitterjourney.com/blog#breadcrumb',
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
            name: 'Blog',
            item: 'https://sitterjourney.com/blog',
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
          variant="blog"
        />
      </div>
    </>
  );
}
