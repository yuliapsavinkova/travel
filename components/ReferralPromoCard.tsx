import { INVITE_BADGE, REFERRALS } from '../types';
import { ArrowUpRightIcon } from './Icons';

export interface ReferralPromoCardProps {
  badge?: string;
  title?: string;
  description?: string;
  link?: string;
  ctaLabel?: string;
}

export default function ReferralPromoCard({
  badge = INVITE_BADGE,
  title = 'TrustedHousesitters',
  description = REFERRALS.THS.sitterInviteText,
  link = REFERRALS.THS.link,
  ctaLabel = REFERRALS.THS.cta,
}: ReferralPromoCardProps) {
  return (
    <section className="sidebar-card sidebar-callout-card" aria-label="Member discount">
      <span className="sidebar-callout-badge">{badge}</span>
      <h3 className="sidebar-callout-title">{title}</h3>
      <p className="sidebar-callout-desc">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold sidebar-callout-cta"
      >
        <span>{ctaLabel}</span>
        <ArrowUpRightIcon size={13} style={{ marginLeft: '6px' }} aria-hidden="true" />
      </a>
    </section>
  );
}
