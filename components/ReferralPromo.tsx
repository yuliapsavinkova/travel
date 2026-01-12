import { GLOBAL_STRINGS, THS_LINK, THS_DISCOUNT } from '../constants';
import { ExternalLinkIcon } from './Icons';

/**
 * A reusable Server Component for displaying a high-conversion referral call-to-action.
 * Content is managed globally via GLOBAL_STRINGS in constants.ts.
 */
const ReferralPromo = () => {
  return (
    <div
      className="section-divider"
      style={{ marginTop: 'var(--s-9)', borderTopColor: 'var(--c-border-gold)' }}
    >
      <div className="detail-content-section promo-card-constrained text-center">
        <h3 className="sub-header">{GLOBAL_STRINGS.travelPromoTitle}</h3>
        <p
          className="opacity-70"
          style={{
            fontSize: '1rem',
            marginBottom: 'var(--s-5)',
            maxWidth: '540px',
            margin: '0 auto var(--s-5)',
          }}
        >
          {GLOBAL_STRINGS.travelPromoText}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href={THS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-wide"
            style={{ gap: '12px' }}
          >
            Discount: {THS_DISCOUNT}
            <ExternalLinkIcon size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReferralPromo;
