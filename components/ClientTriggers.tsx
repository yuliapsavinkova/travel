'use client';

import type { CSSProperties } from 'react';

interface InquiryTriggerProps {
  label: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * InquiryTrigger remains a client component because it triggers
 * a global UI state change (opening the modal) that isn't a separate page.
 */
export const InquiryTrigger = ({ label, className, style }: InquiryTriggerProps) => {
  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent('open-inquiry-portal'));
  };

  return (
    <button className={className} style={style} onClick={handleOpen} type="button">
      {label}
    </button>
  );
};
