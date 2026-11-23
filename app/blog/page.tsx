import type { Metadata } from 'next';
import BlogArchive from '../../components/BlogArchive';
import { BLOG_POSTS } from '../../constants';

export const metadata: Metadata = {
  title: 'The Sitter Blog: House Sitting, Slow Travel & Freedom | Sitter Journey',
  description:
    'Practical guides, real budget math, and field notes on house sitting, slow travel, minimalism, and living with more freedom.',
  alternates: {
    canonical: 'https://sitterjourney.com/blog',
  },
  openGraph: {
    title: 'The Sitter Blog: House Sitting, Slow Travel & Freedom',
    description:
      'Practical guides, real budget math, and field notes on house sitting, slow travel, minimalism, and living with more freedom.',
    url: 'https://sitterjourney.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://sitterjourney.com/blog#collection',
        url: 'https://sitterjourney.com/blog',
        name: 'Sitter Journey Blog',
        description:
          'Practical guides and stories on house sitting, minimalism, destinations, and full-time travel.',
        blogPost: sortedPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `https://sitterjourney.com/blog/${post.slug}`,
          datePublished: post.date,
          description: post.excerpt,
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
        <header className="text-center blog-header">
          <h1 className="display-title display-title-md">
            The <span className="serif-italic">Blog.</span>
          </h1>
          <p className="hero-paragraph home-section-intro">
            Practical guides and lived stories on house sitting, minimalism, destinations, and
            building a life with more freedom.
          </p>
        </header>

        {/* Filterable & Searchable Archive */}
        <section id="archive">
          <BlogArchive posts={sortedPosts} />
        </section>

        {/* Future Pillars Callout */}
        <section className="blog-horizons-card" aria-label="Blog themes">
          <span className="sub-header">Growing Journal</span>
          <h2 className="display-title display-title-md">
            More Chapters <span className="serif-italic">Ahead</span>
          </h2>
          <p className="hero-paragraph">
            Today&apos;s archive focuses on house sitting fundamentals. As the journal grows, new
            essays on minimalism, slow destinations, and location freedom will join the archive.
          </p>

          <div className="blog-horizons-topics">
            <span className="blog-topic-tag active-pillar">House Sitting · {sortedPosts.length}</span>
            <span className="blog-topic-tag">Minimalism · Soon</span>
            <span className="blog-topic-tag">Destinations · Soon</span>
            <span className="blog-topic-tag">Freedom · Soon</span>
          </div>
        </section>
      </div>
    </>
  );
}
