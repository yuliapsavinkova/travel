
"use client";

import React from 'react';

interface InquiryTriggerProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * InquiryTrigger remains a client component because it triggers
 * a global UI state change (opening the modal) that isn't a separate page.
 */
export const InquiryTrigger: React.FC<InquiryTriggerProps> = ({ label, className, style }) => {
  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent('open-inquiry-portal'));
  };

  return (
    <button className={className} style={style} onClick={handleOpen}>
      {label}
    </button>
  );
};
