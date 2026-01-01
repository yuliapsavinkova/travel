import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, ExternalLinkIcon } from './Icons';

interface CommonCardProps {
  image?: string;
  badge?: string;
  metadata?: { icon: React.ReactNode; text: React.ReactNode }[];
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
  const internalPath = slug ? (slug.startsWith('/') ? slug : `/${slug}`) : null;

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

  const label = actionLabel || 'Details';

  // Helper to render the shared card body content
  const renderCardBody = () => (
    <>
      {CardImage}
      {MetadataRow}
      <h3 className="serif-italic card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </>
  );

  // Scenario 1: Toolkit Item with decoupled Multi-Action Layout
  // Entire card links to internal detail review page.
  // "Nomad Essential" metadata is now on top of the heading.
  // Distinct 'Claim Discount' link rendered separately below the card.
  if (ctaLink && slug) {
    return (
      <div className="toolkit-card-wrapper">
        <Link href={internalPath!} className="glass-card">
          {renderCardBody()}
          <div className="card-footer">
            <div className="card-action-link">
              <span className="card-action-label">Review Details</span>
              <ArrowUpRightIcon size={18} style={{ color: 'var(--c-gold)' }} />
            </div>
          </div>
        </Link>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="claim-link-under"
          aria-label={`Claim discount for ${title}`}
        >
          <span className="claim-link-text">{ctaLabel || 'Claim Discount'}</span>
          <ExternalLinkIcon size={14} style={{ color: 'var(--c-gold)' }} />
        </a>
      </div>
    );
  }

  // Standard Link (Internal - Journal / Stays)
  if (slug) {
    return (
      <Link href={internalPath!} className="glass-card">
        {renderCardBody()}
        <div className="card-footer">
          <div className="card-footer-main">
            <div className="card-action-link">
              <span className="card-action-label">{label}</span>
              <ArrowUpRightIcon size={18} style={{ color: 'var(--c-gold)' }} />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Link (External)
  if (externalLink) {
    return (
      <a href={externalLink} target="_blank" rel="noopener noreferrer" className="glass-card">
        {renderCardBody()}
        <div className="card-footer">
          <div className="card-footer-main">
            <div className="card-action-link">
              <span className="card-action-label">{label}</span>
              <ArrowUpRightIcon size={18} style={{ color: 'var(--c-gold)' }} />
            </div>
          </div>
        </div>
      </a>
    );
  }

  return <div className="glass-card">{renderCardBody()}</div>;
};

export default CommonCard;
