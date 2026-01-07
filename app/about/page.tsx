import { ContactTrigger } from '../../components/ClientTriggers';
import { MailIcon } from '../../components/Icons';
import { SITE_CONFIG } from '../../constants';
import CommonDetail from '../../components/CommonDetail';
import ContentRenderer from '../../components/ContentRenderer';
import { intro as aboutIntro, body as aboutBody } from '../../data/articles/about';

export default function AboutPage() {
  return (
    <CommonDetail
      image="/portrait.png"
      title="About Yulia."
      date="January 2026"
      prevLink={{ label: 'Go to', title: 'Blog', href: '/blog' }}
      nextLink={{ label: 'Go to', title: 'Resources', href: '/resources' }}
    >
      <div className="flex-col">
        <p className="prose-lead">{aboutIntro}</p>

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
