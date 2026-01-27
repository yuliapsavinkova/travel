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
};

export default function AboutPage() {
  return (
    <CommonDetail
      image="/portrait-map.jpeg"
      title="About Yulia"
      date="January 2026"
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
  );
}
