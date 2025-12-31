
import React from 'react';
import { GLOBAL_STRINGS } from '../constants';
import { ExternalLinkIcon } from './Icons';

/**
 * A reusable Server Component for displaying a high-conversion referral call-to-action.
 * Content is managed globally via GLOBAL_STRINGS in constants.ts.
 */
const ReferralPromo = () => {
  return (
    <div className="section-divider" style={{ marginTop: 'var(--s-9)', borderTopColor: 'var(--c-border-gold)', textAlign: 'left' }}>
      <div className="detail-content-section text-center" style={{ width: '100%' }}>
        <h3 className="sub-header">{GLOBAL_STRINGS.travelPromoTitle}</h3>
        <p className="opacity-70" style={{ fontSize: '1rem', marginBottom: 'var(--s-5)', maxWidth: '600px', margin: '0 auto var(--s-5)' }}>
          {GLOBAL_STRINGS.travelPromoText}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a 
            href={GLOBAL_STRINGS.travelPromoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ gap: '12px', minWidth: '280px' }}
          >
            {GLOBAL_STRINGS.travelPromoBtn}
            <ExternalLinkIcon size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReferralPromo;
