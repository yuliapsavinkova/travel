import Link from 'next/link';
import React, { type ReactNode } from 'react';
import { ArrowLeftIcon, ExternalLinkIcon, ShieldCheckIcon } from './Icons';
import type { NavLink } from '../types';

interface CommonDetailProps {
  onBack?: string;
  backLabel?: string;
  image: string;
  title: string;
  date?: string;
  ctaLabel?: string;
  ctaLink?: string;
  isAffiliate?: boolean;
  children?: ReactNode;
  sidebar?: ReactNode;
  prevLink?: NavLink;
  nextLink?: NavLink;
  prevNavLabel?: string;
  nextNavLabel?: string;
}

const CommonDetail = ({
  onBack,
  backLabel,
  image,
  title,
  date,
  ctaLabel,
  ctaLink,
  isAffiliate = false,
  children,
  sidebar,
  prevLink,
  nextLink,
  prevNavLabel = 'Previous',
  nextNavLabel = 'Next',
}: CommonDetailProps) => {
  // Clean the label for the footer to avoid "Return to Back to..."
  const footerLabel = backLabel ? backLabel.replace('Back to ', '') : '';

  return (
    <div className="detail-container">
      <header className="detail-header-area">
        <div className="container text-center">
          {date && <span className="detail-date-label">{date}</span>}
          <h1 className="detail-title-text">{title}</h1>
        </div>
      </header>

      <div className="detail-hero-section">
        <div className="media-viewport">
          <img src={image} alt={title} className="detail-hero-image" />
          {/* Overlay removed to ensure full brightness as title is above image */}
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

      <div className="detail-layout-container">
        <div className={`detail-layout ${sidebar ? 'with-sidebar' : ''}`}>
          <div className="prose-content">
            {children}

            {ctaLink && ctaLabel && (
              <div className="detail-minimal-cta">
                <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="glass-pill">
                  <span className="serif-italic">{ctaLabel}</span>
                  <ExternalLinkIcon size={14} className="cta-icon" />
                </a>
              </div>
            )}

            {(prevLink || nextLink) && (
              <nav className="article-navigation" aria-label="Related articles">
                <div className="nav-link-block prev">
                  {prevLink && (
                    <Link href={prevLink.href}>
                      <span className="nav-link-label">{prevNavLabel}</span>
                      <span className="nav-link-title">{prevLink.label}</span>
                    </Link>
                  )}
                </div>
                <div className="nav-link-block next">
                  {nextLink && (
                    <Link href={nextLink.href}>
                      <span className="nav-link-label">{nextNavLabel}</span>
                      <span className="nav-link-title">{nextLink.label}</span>
                    </Link>
                  )}
                </div>
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
