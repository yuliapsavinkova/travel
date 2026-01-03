import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeftIcon, ExternalLinkIcon } from './Icons';

interface CommonDetailProps {
  onBack: string;
  image: string;
  title: string;
  date?: string;
  ctaLabel?: string;
  ctaLink?: string;
  children: ReactNode;
  sidebar?: ReactNode;
}

const CommonDetail = ({
  onBack,
  image,
  title,
  date,
  ctaLabel,
  ctaLink,
  children,
  sidebar,
}: CommonDetailProps) => {
  return (
    <div className="detail-container">
      {/* Editorial Header - Centered Typography */}
      <header className="detail-header-area">
        {date && <span className="detail-date-label">{date}</span>}
        <h1 className="detail-title-text">{title}</h1>
      </header>

      {/* Featured Media - Contained & Rounded with Glass Navigation */}
      <div className="detail-hero-section">
        <img src={image} alt={title} className="detail-hero-image" />
        <div className="detail-hero-overlay" />

        {/* Glass Corner Navigation - Pinned to corners */}
        <Link
          href={onBack}
          className="hero-glass-link hero-back-link"
          aria-label="Go back to archive"
        >
          <ArrowLeftIcon size={12} />
          <span>Archive</span>
        </Link>

        {ctaLabel && ctaLink && (
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-glass-link hero-cta-link"
          >
            <span>{ctaLabel}</span>
            <ExternalLinkIcon size={12} />
          </a>
        )}
      </div>

      <div className="detail-layout-container">
        <div className={`detail-layout ${sidebar ? 'with-sidebar' : ''}`}>
          <div className="prose-content">
            {children}

            <div className="detail-footer-nav">
              <Link href={onBack} className="btn-back-footer">
                <ArrowLeftIcon size={14} />
                <span>Return to Journey Archive</span>
              </Link>
            </div>
          </div>

          {sidebar && <div className="detail-sidebar">{sidebar}</div>}
        </div>
      </div>
    </div>
  );
};

export default CommonDetail;
