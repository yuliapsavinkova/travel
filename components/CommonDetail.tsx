import Link from 'next/link';
import Image from 'next/image';
import React, { type ReactNode } from 'react';
import { ShieldCheckIcon, CalendarIcon } from './Icons';
import FAQSection from './FAQSection';
import ReturnButton from './ReturnButton';
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
  return (
    <div className="detail-container">
      <header className="detail-header-area">
        <div className="container text-center">
          {topic && <span className="detail-topic-label"> {topic} </span>}

          <h1 className="detail-title-text">{title}</h1>
          {date && (
            <span className="detail-date-label">
              <CalendarIcon size={12} /> {formatArticleDate(date)}
            </span>
          )}

          {onBack && (
            <div className="detail-back-top">
              <ReturnButton href={onBack} label={backLabel} />
            </div>
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
              <div className="detail-back-bottom">
                <ReturnButton href={onBack} label={backLabel} />
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
