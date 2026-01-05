import { ContactTrigger } from '../../components/ClientTriggers';
import { MailIcon } from '../../components/Icons';
import { SITE_CONFIG } from '../../constants';
import CommonDetail from '../../components/CommonDetail';
import ContentRenderer from '../../components/ContentRenderer';
import { aboutIntro, aboutBody } from '../../data/articles/about-me';

export default function AboutPage() {
  return (
    <CommonDetail image="/portrait.png" title="About Yulia." date="January 2026">
      <div className="flex-col">
        <p className="prose-lead">{aboutIntro}</p>

        <ContentRenderer content={aboutBody} />

        <div className="section-divider" style={{ marginTop: 'var(--s-8)' }}>
          <h3 className="sub-header">Contact</h3>
          <h2 className="display-title-md">
            Let's <span className="serif-italic shimmer-text">Chat.</span>
          </h2>
          <p
            style={{
              maxWidth: '500px',
              margin: '0 auto var(--s-5)',
              opacity: 0.7,
              textAlign: 'center',
              fontSize: '16px',
            }}
          >
            If you have questions or stories to share, I'd love to hear from you.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
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
      </div>
    </CommonDetail>
  );
}
