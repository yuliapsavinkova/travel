'use client';

import type { CSSProperties } from 'react';

interface ContactTriggerProps {
  label: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * ContactTrigger triggers the global contact modal.
 */
export const ContactTrigger = ({ label, className, style }: ContactTriggerProps) => {
  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent('open-contact-portal'));
  };

  return (
    <button className={className} style={style} onClick={handleOpen} type="button">
      {label}
    </button>
  );
};

// Re-export as InquiryTrigger for backward compatibility if needed,
// but we will update all usages.
export const InquiryTrigger = ContactTrigger;
