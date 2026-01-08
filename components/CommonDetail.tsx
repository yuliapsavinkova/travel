import Link from 'next/link';
import React, { type ReactNode } from 'react';
import { ArrowLeftIcon, ShieldCheckIcon, ExternalLinkIcon } from './Icons';
import FAQSection from './FAQSection';
import type { NavLink, FAQItem } from '../types';

interface CommonDetailProps {
  onBack?: string;
  backLabel?: string;
  image: string;
  title: string;
  subtitle?: string;
  date?: string;
  isAffiliate?: boolean;
  children?: ReactNode;
  sidebar?: ReactNode;
  prevLink?: NavLink;
  nextLink?: NavLink;
  faqs?: FAQItem[];
  ctaLabel?: string;
  ctaLink?: string;
}

const CommonDetail = ({
  onBack,
  backLabel,
  image,
  title,
  subtitle,
  date,
  isAffiliate = false,
  children,
  sidebar,
  prevLink,
  nextLink,
  faqs,
  ctaLabel,
  ctaLink,
}: CommonDetailProps) => {
  const footerLabel = backLabel ? backLabel.replace('Back to ', '') : '';

  return (
    <div className="detail-container">
      <header className="detail-header-area">
        <div className="container text-center">
          {date && <span className="detail-date-label">{date}</span>}
          <h1 className="detail-title-text">{title}</h1>
          {subtitle && <p className="detail-subtitle-text">{subtitle}</p>}
        </div>
      </header>

      {image && (
        <div className="detail-hero-section">
          <div className="media-viewport">
            <img src={image} alt={title} className="detail-hero-image" />
          </div>

          {onBack && (
            <Link href={onBack} className="hero-glass-link hero-back-link glass-pill">
              <ArrowLeftIcon size={14} />
              <span>{backLabel}</span>
            </Link>
          )}

          {ctaLabel && ctaLink && (
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-glass-link hero-cta-link glass-pill"
            >
              <span>{ctaLabel}</span>
              <ExternalLinkIcon size={14} />
            </a>
          )}

          {isAffiliate && (
            <div className="hero-disclosure-bar">
              <ShieldCheckIcon size={16} className="disclosure-icon" />
              <span className="disclosure-text">
                Disclosure: This post contains referral or affiliate links.
                <Link
                  href="/disclosure"
                  className="disclosure-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </span>
            </div>
          )}
        </div>
      )}

      {!image && onBack && (
        <div className="container text-center" style={{ marginBottom: 'var(--s-6)' }}>
          <Link href={onBack} className="glass-pill">
            <ArrowLeftIcon size={14} />
            <span>{backLabel}</span>
          </Link>
        </div>
      )}

      <div className="detail-layout-container">
        <div className={`detail-layout ${sidebar ? 'with-sidebar' : ''}`}>
          <div className="prose-content">
            {children}

            {faqs && faqs.length > 0 && <FAQSection items={faqs} />}

            {(prevLink || nextLink) && (
              <nav className="article-navigation" aria-label="Related articles">
                {prevLink && (
                  <Link href={prevLink.href} className="nav-link-item prev">
                    <span className="nav-link-label">{prevLink.label}</span>
                    <span className="nav-link-title">{prevLink.title}</span>
                  </Link>
                )}
                {nextLink && (
                  <Link href={nextLink.href} className="nav-link-item next">
                    <span className="nav-link-label">{nextLink.label}</span>
                    <span className="nav-link-title">{nextLink.title}</span>
                  </Link>
                )}
              </nav>
            )}

            {onBack && (
              <div className="detail-footer-nav">
                <Link href={onBack} className="btn-back-footer">
                  <ArrowLeftIcon size={16} />
                  <span>Return to {footerLabel}</span>
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
