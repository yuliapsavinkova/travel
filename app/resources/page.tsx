import type { Metadata } from 'next';
import CommonCard from '../../components/CommonCard';
import { ALL_RESOURCES } from '../../data/resources/resources';
import { DEFAULT_OG_IMAGE } from '../../utils/content';

export const metadata: Metadata = {
  title: 'Travel Resources & Discounts: My Trusted Toolkit | Sitter Journey',
  description:
    'A curated list of the tools, memberships, and services I use for full-time travel and house sitting. Includes verified discounts.',
  alternates: {
    canonical: 'https://sitterjourney.com/resources',
  },
  openGraph: {
    title: 'Travel Resources & Discounts: My Trusted Toolkit',
    description:
      'A curated list of the tools, memberships, and services I use for full-time travel and house sitting. Includes verified discounts.',
    url: 'https://sitterjourney.com/resources',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sitter Journey Resources & Verified Discounts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Resources & Discounts: My Trusted Toolkit',
    description:
      'A curated list of the tools, memberships, and services I use for full-time travel and house sitting. Includes verified discounts.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ResourcesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://sitterjourney.com/resources#collection',
        url: 'https://sitterjourney.com/resources',
        name: 'Travel Resources & Discounts | Sitter Journey',
        description: 'A curated list of tools, memberships, and services for nomadic travel and house sitting.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: ALL_RESOURCES.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            description: item.description,
            url: `https://sitterjourney.com/resources/${item.slug}`,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sitterjourney.com/resources#breadcrumb',
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
            name: 'Travel Resources',
            item: 'https://sitterjourney.com/resources',
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
      <div className="container section-margin archive-page-container" id="archive">
        <header className="text-center section-margin">
          <h1 className="display-title display-title-md">
            The <span className="serif-italic">Resources.</span>
          </h1>
          <p className="hero-paragraph home-section-intro">
            The tools and services I use every day to live and work on the road.
          </p>
        </header>

        <div className="grid-standard">
          {ALL_RESOURCES.map((item) => (
            <CommonCard
              key={item.id}
              title={item.name}
              image={item.imageUrl}
              description={item.description}
              badge={item.discountText ? 'Promo' : 'Tool'}
              slug={`/resources/${item.slug}`}
              actionLabel="Details"
              ctaLink={item.link}
              ctaLabel={item.discountText ? `Discount: ${item.discountText}` : 'Visit'}
            />
          ))}
        </div>
      </div>
    </>
  );
}
