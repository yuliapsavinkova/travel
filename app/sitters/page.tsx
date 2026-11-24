import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArchive from '../../components/BlogArchive';
import { SITTER_POSTS } from '../../constants';
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
        <header className="text-center">
          <span className="sub-header">For Sitters</span>
          <h1 className="display-title display-title-md">
            Sitter <span className="serif-italic">Guides.</span>
          </h1>
          <p className="hero-paragraph home-section-intro">
            Everything I learned completing full-time house sits—from landing your first stay with
            zero reviews to saving thousands on travel lodging.
          </p>
        </header>

        <section id="archive">
          <BlogArchive posts={toPostSummaries(SITTER_POSTS)} showAudienceTabs={false} />
        </section>

        <section className="home-feature-card text-center" aria-label="Track switcher">
          <span className="sub-header">Are You a Pet Parent or Homeowner?</span>
          <h2 className="display-title display-title-md">
            Looking to <span className="serif-italic">Hire or Host a Sitter?</span>
          </h2>
          <p className="hero-paragraph home-feature-paragraph">
            I keep homeowner guides separate from sitter strategy—read checklists on preparing your
            home, interviewing applicants, and choosing exchange vs. private care.
          </p>
          <div className="hero-button-group" style={{ justifyContent: 'center' }}>
            <Link href="/homeowners" className="btn-gold">
              Read Homeowner Guides &rarr;
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
