import Link from 'next/link';
import Image from 'next/image';
import React, { type ReactNode } from 'react';
import { ArrowUpRightIcon, ExternalLinkIcon } from './Icons';

interface CommonCardProps {
  image?: string;
  badge?: string;
  metadata?: { icon: ReactNode; text: ReactNode }[];
  title: string;
  description: string;
  actionLabel?: string;
  externalLink?: string;
  slug?: string;
  ctaLink?: string;
  ctaLabel?: string;
}

const CommonCard: React.FC<CommonCardProps> = ({
  image,
  badge,
  metadata,
  title,
  description,
  actionLabel,
  externalLink,
  slug,
  ctaLink,
  ctaLabel,
}) => {
  const internalPath = slug ? (slug.startsWith('/') ? slug : `/${slug}`) : '';
  const label = actionLabel || 'Explore';

  return (
    <div className="card-wrapper">
      <div className="glass-card">
        {image && (
          <div className="card-image-viewport media-viewport">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="card-main-image"
              style={{ objectFit: 'cover' }}
            />
            {badge && <div className="card-badge glass-pill">{badge}</div>}
            <div className="card-image-overlay" />
          </div>
        )}

        <div className="card-content-stack">
          {metadata && metadata.length > 0 && (
            <div className="card-metadata">
              {metadata.map((item, idx) => (
                <span key={idx} className="metadata-item">
                  {item.icon} {item.text}
                </span>
              ))}
            </div>
          )}

          <h3 className="serif-italic card-title">{title}</h3>
          <p className="card-description">{description}</p>

          {ctaLink && (
            <div className="card-internal-cta">
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="subtle-referral-link"
                aria-label={ctaLabel || 'Claim Offer'}
              >
                <span className="serif-italic">
                  {ctaLabel
                    ? `Offer: ${ctaLabel.replace('Get: ', '').replace('Offer: ', '')}`
                    : 'Claim Discount'}
                </span>
                <ExternalLinkIcon size={14} className="cta-icon" />
              </a>
            </div>
          )}

          <div className="card-footer">
            {internalPath ? (
              <Link href={internalPath} className="card-action-link stretched-link">
                <span className="card-action-label">{label}</span>
                <div className="action-arrow-wrapper">
                  <ArrowUpRightIcon size={18} className="action-arrow" />
                </div>
              </Link>
            ) : externalLink ? (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-action-link stretched-link"
              >
                <span className="card-action-label">{label}</span>
                <div className="action-arrow-wrapper">
                  <ArrowUpRightIcon size={18} className="action-arrow" />
                </div>
              </a>
            ) : (
              <div className="card-action-link">
                <span className="card-action-label">{label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
