import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from './Icons';

interface CommonDetailProps {
  onBack: string;
  image: string;
  metadata?: { icon: React.ReactNode; text: React.ReactNode }[];
  title: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  backLabel?: string;
  imageBadge?: string;
  headerAction?: React.ReactNode;
}

const CommonDetail: React.FC<CommonDetailProps> = ({
  onBack,
  image,
  metadata,
  title,
  children,
  sidebar,
  backLabel = 'Back',
  imageBadge,
  headerAction,
}) => {
  return (
    <div className="container detail-container">
      <Link href={onBack} className="btn-back">
        <ArrowLeftIcon size={16} />
        {backLabel}
      </Link>

      <div className="media-viewport detail-hero">
        <img src={image} alt={title} />
        {imageBadge && (
          <div
            className="card-badge"
            style={{
              top: 'var(--s-5)',
              right: 'var(--s-5)',
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(12px) saturate(1.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'var(--c-white)',
            }}
          >
            {imageBadge}
          </div>
        )}
        <div className="detail-hero-gradient" />
      </div>

      <div className={`detail-layout ${sidebar ? 'with-sidebar' : ''}`}>
        <div>
          <div className="detail-header-block">
            {metadata && (
              <div
                className="detail-metadata-row"
                style={{ marginBottom: headerAction ? 'var(--s-3)' : 'var(--s-5)' }}
              >
                {metadata.map((item, idx) => (
                  <span
                    key={idx}
                    className="detail-metadata-item sub-header"
                    style={{ marginBottom: 0 }}
                  >
                    {item.icon} {item.text}
                  </span>
                ))}
              </div>
            )}

            {headerAction && (
              <div className="detail-header-action" style={{ marginBottom: 'var(--s-4)' }}>
                {headerAction}
              </div>
            )}

            <h1 className="display-title detail-title-text">{title}</h1>
          </div>

          <div className="detail-content-text">{children}</div>
        </div>

        {sidebar && <div className="detail-sidebar">{sidebar}</div>}
      </div>
    </div>
  );
};

export default CommonDetail;
