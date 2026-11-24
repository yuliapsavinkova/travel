import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArchive from '../../components/BlogArchive';
import { HOMEOWNER_POSTS } from '../../constants';
import { DEFAULT_OG_IMAGE, toAbsoluteUrl, toIsoDate } from '../../utils/content';

export const metadata: Metadata = {
  title: 'Guides for Homeowners & Pet Parents | Sitter Journey',
  description:
    'Practical guides for homeowners leaving pets at home: choosing exchange vs. private sitting, preparing your home, and questions to ask before hiring a sitter.',
  alternates: {
    canonical: 'https://sitterjourney.com/homeowners',
  },
  openGraph: {
    title: 'Guides for Homeowners & Pet Parents | Sitter Journey',
    description:
      'Practical guides for homeowners leaving pets at home: choosing exchange vs. private sitting, preparing your home, and questions to ask before hiring a sitter.',
    url: 'https://sitterjourney.com/homeowners',
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
      'Practical guides for homeowners leaving pets at home: choosing exchange vs. private sitting, preparing your home, and questions to ask before hiring a sitter.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function HomeownersPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://sitterjourney.com/homeowners#collection',
        url: 'https://sitterjourney.com/homeowners',
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
        '@id': 'https://sitterjourney.com/homeowners#breadcrumb',
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
            item: 'https://sitterjourney.com/homeowners',
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
          <span className="sub-header">For Homeowners &amp; Pet Parents</span>
          <h1 className="display-title display-title-md">
            Homeowner <span className="serif-italic">Guides.</span>
          </h1>
          <p className="hero-paragraph home-section-intro">
            Honest advice from an experienced sitter on choosing the right sitting model, vetting
            applicants, and preparing your home for calm, reliable pet care.
          </p>
        </header>

        <section id="archive">
          <BlogArchive posts={HOMEOWNER_POSTS} showAudienceTabs={false} />
        </section>

        <section className="home-feature-card text-center" aria-label="Track switcher">
          <span className="sub-header">Thinking About House Sitting Yourself?</span>
          <h2 className="display-title display-title-md">
            Read <span className="serif-italic">For Sitters</span>
          </h2>
          <p className="hero-paragraph home-feature-paragraph">
            If you want to travel as a house sitter, visit the dedicated Sitter Guides track with
            application tips, cost breakdowns, and profile strategies.
          </p>
          <div className="hero-button-group" style={{ justifyContent: 'center' }}>
            <Link href="/sitters" className="btn-gold">
              Read Sitter Guides &rarr;
            </Link>
            <Link href="/blog" className="secondary-btn">
              All Blog Guides
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
