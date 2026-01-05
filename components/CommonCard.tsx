import Link from 'next/link';
import type { ReactNode } from 'react';
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

const CommonCard = ({
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
}: CommonCardProps) => {
  const internalPath = slug ? (slug.startsWith('/') ? slug : `/${slug}`) : '';
  const label = actionLabel || 'Details';

  const CardImage = image ? (
    <div className="card-image-viewport media-viewport">
      <img src={image} alt={title} loading="lazy" />
      {badge && <div className="card-badge">{badge}</div>}
    </div>
  ) : null;

  const MetadataRow =
    metadata && metadata.length > 0 ? (
      <div
        className="card-metadata"
        style={{ marginBottom: 'var(--s-2)', marginTop: 'var(--s-2)' }}
      >
        {metadata.map((item, idx) => (
          <span key={idx} className="card-metadata-item">
            {item.icon} {item.text}
          </span>
        ))}
      </div>
    ) : null;

  return (
    <div className="card-wrapper">
      <div className="glass-card">
        {CardImage}
        {MetadataRow}
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
                {ctaLabel ? `Offer: ${ctaLabel.replace('Get: ', '')}` : 'Claim Discount'}
              </span>
              <ExternalLinkIcon size={12} className="cta-icon" />
            </a>
          </div>
        )}

        <div className="card-footer">
          {internalPath ? (
            <Link href={internalPath} className="card-action-link stretched-link">
              <span className="card-action-label">{label}</span>
              <ArrowUpRightIcon size={18} className="action-arrow" />
            </Link>
          ) : externalLink ? (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-action-link stretched-link"
            >
              <span className="card-action-label">{label}</span>
              <ArrowUpRightIcon size={18} className="action-arrow" />
            </a>
          ) : (
            <div className="card-action-link static">
              <span className="card-action-label">{label}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
