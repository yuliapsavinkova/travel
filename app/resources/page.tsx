import type { Metadata } from 'next';
import CommonCard from '../../components/CommonCard';
import { ALL_RESOURCES } from '../../data/resources/resources';
import { INVITE_BADGE } from '../../types';
import { DEFAULT_OG_IMAGE } from '../../utils/content';

export const metadata: Metadata = {
  title: 'Resources: Apps & Services I Use | Sitter Journey',
  description:
    'A curated list of the apps, memberships, and services I use for house sitting and travel. Includes verified discounts.',
  alternates: {
    canonical: 'https://sitterjourney.com/resources',
  },
  openGraph: {
    title: 'Resources: Apps & Services I Use',
    description:
      'A curated list of the apps, memberships, and services I use for house sitting and travel. Includes verified discounts.',
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
    title: 'Resources: Apps & Services I Use',
    description:
      'A curated list of the apps, memberships, and services I use for house sitting and travel. Includes verified discounts.',
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
        name: 'Resources: Apps and Services I Use | Sitter Journey',
        description:
          'A curated list of apps, memberships, and services I use for house sitting and travel.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: ALL_RESOURCES.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            description: item.description,
            url: `https://sitterjourney.com/${item.slug}`,
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
            name: 'Resources',
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
        <header className="text-center blog-archive-header">
          <span className="sub-header">Resources</span>
          <h1 className="display-title display-title-md">Apps and Services I Use.</h1>
          <p className="hero-paragraph blog-archive-subtitle">
            I only recommend what I actually use myself on my travels and adventures.
          </p>
        </header>

        <div className="grid-standard">
          {ALL_RESOURCES.map((item) => (
            <CommonCard
              key={item.id}
              title={item.name}
              image={item.imageUrl}
              description={item.description}
              badge={item.discountText ? INVITE_BADGE : 'Tool'}
              slug={`/${item.slug}`}
              actionLabel="Details"
              ctaLink={item.link}
              ctaLabel={item.ctaLabel || item.discountText || 'Visit'}
            />
          ))}
        </div>
      </div>
    </>
  );
}
