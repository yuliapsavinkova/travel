import Image from 'next/image';
import Link from 'next/link';
import React, { type ReactNode } from 'react';
import type { FAQItem, NavLink } from '../types';
import { formatArticleDate } from '../utils/content';
import FAQSection from './FAQSection';
import { CalendarIcon, ClockIcon } from './Icons';

interface CommonDetailProps {
  image: string;
  topic?: string;
  topicHref?: string;
  title: string;
  subtitle?: string;
  date?: string;
  updatedDate?: string;
  readingTime?: string;
  isAffiliate?: boolean;
  children?: ReactNode;
  sidebar?: ReactNode;
  prevLink?: NavLink;
  nextLink?: NavLink;
  faqs?: FAQItem[];
}

const CommonDetail = ({
  image,
  topic,
  topicHref,
  title,
  subtitle,
  date,
  updatedDate,
  readingTime,
  isAffiliate = false,
  children,
  sidebar,
  prevLink,
  nextLink,
  faqs,
}: CommonDetailProps) => {
  const hasDate = Boolean(date || updatedDate);
  const articleHeaderContent = (
    <>
      {topic &&
        (topicHref ? (
          <Link href={topicHref} className="detail-topic-label detail-topic-link">
            {topic}
          </Link>
        ) : (
          <div className="detail-topic-label">{topic}</div>
        ))}
      <h1 className="detail-title-text">{title}</h1>
      {subtitle && <p className="detail-subtitle-text">{subtitle}</p>}
      {(hasDate || readingTime) && (
        <div className="detail-date-wrapper">
          {hasDate && (
            <span className="detail-date-label">
              <CalendarIcon size={12} /> {formatArticleDate(date, updatedDate)}
            </span>
          )}
          {hasDate && readingTime && (
            <span className="detail-meta-sep" aria-hidden="true">
              ·
            </span>
          )}
          {readingTime && (
            <span className="detail-date-label">
              <ClockIcon size={12} /> {readingTime}
            </span>
          )}
        </div>
      )}
    </>
  );

  return (
    <div className={`detail-container ${sidebar ? 'has-sidebar' : ''}`}>
      {!sidebar && (
        <>
          <header className="detail-header-area">
            <div className="container text-center">{articleHeaderContent}</div>
          </header>

          {/* Top Prev / Next Navigation Bar (Matches bottom article navigation style) */}
          {(prevLink || nextLink) && (
            <div className="detail-hero-nav-wrapper">
              <nav
                className="article-navigation article-navigation-top"
                aria-label="Previous and Next articles"
              >
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
        </>
      )}

      <div className="detail-layout-container">
        <div className={`detail-layout ${sidebar ? 'with-sidebar' : ''}`}>
          <div className="prose-content">
            {sidebar && <header className="detail-article-header">{articleHeaderContent}</header>}

            {image && (
              <div className="detail-hero-section">
                <div className="media-viewport">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="detail-hero-image"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            )}

            {isAffiliate && (
              <p className="detail-disclosure-note">
                <Link
                  href="/disclosure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-disclosure-link"
                >
                  Disclosure
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
                : May contain invite links
              </p>
            )}

            <div className="detail-article-body">{children}</div>

            {faqs && faqs.length > 0 && <FAQSection items={faqs} linkHeading={true} />}

            {/* Bottom Prev / Next Navigation (shown only on non-sidebar utility pages) */}
            {!sidebar && (prevLink || nextLink) && (
              <nav
                className="article-navigation article-navigation-bottom"
                aria-label="Related articles"
              >
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
          </div>

          {sidebar && (
            <aside className="detail-sidebar" aria-label="Author and related guides sidebar">
              {sidebar}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonDetail;
