import type { Metadata } from 'next';
import { ContactTrigger } from '../../components/ClientTriggers';
import { MailIcon } from '../../components/Icons';
import { SITE_CONFIG } from '../../constants';
import CommonDetail from '../../components/CommonDetail';
import ContentRenderer from '../../components/ContentRenderer';
import { body as aboutBody } from '../../data/about';

export const metadata: Metadata = {
  title: 'About Yulia: Full-Time Housesitter & Traveler | Sitter Journey',
  description:
    'Learn more about my journey as a solo female housesitter and how I travel intentionally across the United States.',
  alternates: {
    canonical: 'https://sitterjourney.com/about',
  },
  openGraph: {
    title: 'About Yulia: Full-Time Housesitter & Traveler',
    description:
      'Learn more about my journey as a solo female housesitter and how I travel intentionally across the United States.',
    url: 'https://sitterjourney.com/about',
    type: 'profile',
    images: [
      {
        url: 'https://sitterjourney.com/yulia-with-dog.jpg',
        width: 1200,
        height: 630,
        alt: 'Yulia - Professional House Sitter and Solo Female Traveler',
      },
    ],
  },
};

export default function AboutPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://sitterjourney.com/about#webpage',
        url: 'https://sitterjourney.com/about',
        name: 'About Yulia | Sitter Journey',
        description:
          'Learn more about my journey as a solo female housesitter and how I travel intentionally across the United States.',
        mainEntity: {
          '@type': 'Person',
          '@id': 'https://sitterjourney.com/#author',
          name: 'Yulia',
          jobTitle: 'Professional House Sitter & Travel Writer',
          image: 'https://sitterjourney.com/yulia-with-dog.jpg',
          url: 'https://sitterjourney.com/about',
          sameAs: [
            SITE_CONFIG.socials.instagram,
            SITE_CONFIG.socials.facebook,
            SITE_CONFIG.socials.tiktok,
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sitterjourney.com/about#breadcrumb',
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
            name: 'About Yulia',
            item: 'https://sitterjourney.com/about',
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
      <CommonDetail
        image="/yulia-with-dog.jpg"
        title="About Yulia"
        date="August 29, 2026"
        prevLink={{ label: 'Go to', title: 'Blog', href: '/blog' }}
        nextLink={{ label: 'Go to', title: 'Resources', href: '/resources' }}
      >
        <div className="flex-col">
          <ContentRenderer content={aboutBody} />

          <div
            style={{
              marginTop: 'var(--s-6)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--s-4)',
              flexWrap: 'wrap',
            }}
          >
            <ContactTrigger label="Contact" className="btn-gold" />
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="secondary-btn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <MailIcon size={16} />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </CommonDetail>
    </>
  );
}
