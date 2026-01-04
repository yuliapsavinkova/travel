import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeftIcon, ExternalLinkIcon, ShieldCheckIcon } from './Icons';

interface CommonDetailProps {
  onBack?: string;
  backLabel?: string;
  image: string;
  title: string;
  date?: string;
  ctaLabel?: string;
  ctaLink?: string;
  isAffiliate?: boolean;
  children: ReactNode;
  sidebar?: ReactNode;
}

const CommonDetail = ({
  onBack,
  backLabel = 'Archive',
  image,
  title,
  date,
  ctaLabel,
  ctaLink,
  isAffiliate = false,
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
        {onBack && (
          <Link
            href={onBack}
            className="hero-glass-link hero-back-link"
            aria-label={`Go back to ${backLabel}`}
          >
            <ArrowLeftIcon size={12} />
            <span>{backLabel}</span>
          </Link>
        )}

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

        {/* Cinematic Disclosure Overlay - Pinned to bottom of image */}
        {isAffiliate && (
          <div className="hero-disclosure-bar">
            <ShieldCheckIcon size={14} className="disclosure-icon" />
            <span className="disclosure-text">
              Disclosure: This post contains referral or affiliate links. If you use them, I may
              receive a credit or commission at no cost to you.{' '}
              <Link
                href="/disclosure"
                target="_blank"
                rel="noopener noreferrer"
                className="disclosure-link"
              >
                Read More
              </Link>
            </span>
          </div>
        )}
      </div>

      <div className="detail-layout-container">
        <div className={`detail-layout ${sidebar ? 'with-sidebar' : ''}`}>
          <div className="prose-content">
            {children}

            {onBack && (
              <div className="detail-footer-nav">
                <Link href={onBack} className="btn-back-footer">
                  <ArrowLeftIcon size={14} />
                  <span>Return to {backLabel}</span>
                </Link>
              </div>
            )}
          </div>

          {sidebar && <div className="detail-sidebar">{sidebar}</div>}
        </div>
      </div>
    </div>
  );
};

export default CommonDetail;
