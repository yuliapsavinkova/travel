'use client';

import type { CSSProperties, ReactNode } from 'react';
import { SITE_CONFIG } from '../site-config';

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

interface EmailTriggerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}

/**
 * EmailTrigger assembles the mailto URL in JavaScript on click
 * so no raw email address or mailto: href is rendered in static HTML.
 */
export const EmailTrigger = ({
  children,
  className,
  style,
  ariaLabel = 'Email Me',
}: EmailTriggerProps) => {
  const handleEmail = () => {
    const address = `${SITE_CONFIG.emailParts.user}@${SITE_CONFIG.emailParts.domain}`;
    window.location.href = `mailto:${address}`;
  };

  return (
    <button
      className={className}
      style={style}
      onClick={handleEmail}
      type="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
