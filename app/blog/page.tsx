import type { Metadata } from 'next';
import BlogArchive from '../../components/BlogArchive';
import { BLOG_POSTS } from '../../constants';
import { DEFAULT_OG_IMAGE, toAbsoluteUrl, toIsoDate, toPostSummaries } from '../../utils/content';

export const metadata: Metadata = {
  title: 'All Guides & Articles | Sitter Journey',
  description:
    'Browse all house sitting guides separated clearly into dedicated tracks for Sitters and Homeowners.',
  alternates: {
    canonical: 'https://sitterjourney.com/blog',
  },
  openGraph: {
    title: 'All Guides & Articles | Sitter Journey',
    description:
      'Browse all house sitting guides separated clearly into dedicated tracks for Sitters and Homeowners.',
    url: 'https://sitterjourney.com/blog',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey Guides & Journal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Guides & Articles | Sitter Journey',
    description:
      'Browse all house sitting guides separated clearly into dedicated tracks for Sitters and Homeowners.',
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
        name: 'Sitter Journey Guides',
        description:
          'Practical guides and stories on house sitting for both sitters and homeowners.',
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
            name: 'All Guides',
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
        <header className="text-center">
          <h1 className="display-title display-title-md">
            The <span className="serif-italic">Blog.</span>
          </h1>
          <p className="hero-paragraph home-section-intro">
            Practical guides and lived stories on house sitting for both sitters and homeowners.
          </p>
        </header>

        <section id="archive">
          <BlogArchive posts={toPostSummaries(BLOG_POSTS)} />
        </section>
      </div>
    </>
  );
}
