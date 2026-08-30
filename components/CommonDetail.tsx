import Link from 'next/link';
import Image from 'next/image';
import React, { type ReactNode } from 'react';
import { ArrowLeftIcon, ShieldCheckIcon, CalendarIcon } from './Icons';
import FAQSection from './FAQSection';
import type { NavLink, FAQItem } from '../types';
import { formatArticleDate } from '../utils/content';

interface CommonDetailProps {
  onBack?: string;
  backLabel?: string;
  image: string;
  topic?: string;
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
  topic,
  title,
  subtitle,
  date,
  isAffiliate = false,
  children,
  sidebar,
  prevLink,
  nextLink,
  faqs,
}: CommonDetailProps) => {
  const returnLabel = backLabel
    ? backLabel.replace(/^Back to /i, '').replace(/^Return to /i, '')
    : '';

  return (
    <div className="detail-container">
      <header className="detail-header-area">
        <div className="container text-center">
          {onBack && (
            <div className="detail-top-breadcrumb">
              <Link href={onBack} className="top-breadcrumb-link">
                <ArrowLeftIcon size={12} />
                <span>Return to {returnLabel || 'blog'}</span>
              </Link>
            </div>
          )}

          {topic && <span className="detail-topic-label"> {topic} </span>}

          <h1 className="detail-title-text">{title}</h1>
          {date && (
            <span className="detail-date-label">
              <CalendarIcon size={12} /> {formatArticleDate(date)}
            </span>
          )}
          {subtitle && <p className="detail-subtitle-text">{subtitle}</p>}
        </div>
      </header>

      <div>
        {/* Top Prev / Next Navigation Bar (Matches bottom article navigation style) */}
        {(prevLink || nextLink) && (
          <div className="detail-hero-nav-wrapper">
            <nav className="article-navigation article-navigation-top" aria-label="Previous and Next articles">
              {prevLink ? (
                <Link href={prevLink.href} className="nav-link-item prev">
                  <span className="nav-link-label">{prevLink.label}</span>
                  <span className="nav-link-title">{prevLink.title}</span>
                </Link>
              ) : (
                <div className="nav-link-item prev empty" />
              )}
              {nextLink ? (
                <Link href={nextLink.href} className="nav-link-item next">
                  <span className="nav-link-label">{nextLink.label}</span>
                  <span className="nav-link-title">{nextLink.title}</span>
                </Link>
              ) : (
                <div className="nav-link-item next empty" />
              )}
            </nav>
          </div>
        )}

        {/* Hero Section Container */}
        {image && (
          <div className="detail-hero-section">
            <div className="media-viewport">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="detail-hero-image"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {isAffiliate && (
              <div className="hero-disclosure-bar">
                <div className="disclosure-main-group">
                  <ShieldCheckIcon size={14} className="disclosure-icon" />
                  <span className="disclosure-text">
                    <a
                      href="/disclosure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="disclosure-link-inline"
                    >
                      Disclosure
                    </a>
                    : This post may contain referral or affiliate links.
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {!image && onBack && (
        <div className="container text-center" style={{ marginBottom: 'var(--s-6)' }}>
          <Link href={onBack} className="glass-pill">
            <ArrowLeftIcon size={14} />
            <span>Return to {returnLabel || 'overview'}</span>
          </Link>
        </div>
      )}

      <div className="detail-layout-container">
        <div className={`detail-layout ${sidebar ? 'with-sidebar' : ''}`}>
          <div className="prose-content">
            {children}

            {faqs && faqs.length > 0 && <FAQSection items={faqs} showReadAll={true} />}

            {/* Bottom Prev / Next Navigation */}
            {(prevLink || nextLink) && (
              <nav className="article-navigation article-navigation-bottom" aria-label="Related articles">
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

            {/* Return to blog / archive link */}
            {onBack && (
              <div className="detail-footer-nav">
                <Link href={onBack} className="btn-back-footer">
                  <ArrowLeftIcon size={16} />
                  <span>Return to {returnLabel || 'blog'}</span>
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
