'use client';

import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import { SITE_CONFIG } from '../site-config';
import { trackContactModalOpen, trackSocialClick } from '../utils/analytics';

interface ContactTriggerProps {
  label?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}

/**
 * ContactTrigger triggers the global contact modal.
 */
export const ContactTrigger = ({
  label,
  children,
  className,
  style,
  ariaLabel,
}: ContactTriggerProps) => {
  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const isFooter = Boolean(button.closest('#site-footer, footer'));
    const isAboutPage = typeof window !== 'undefined' && window.location.pathname === '/about';
    const placement = isFooter ? 'footer' : isAboutPage ? 'about_page' : 'general';

    trackContactModalOpen({ placement });
    window.dispatchEvent(new CustomEvent('open-contact-portal'));
  };

  return (
    <button
      className={className}
      style={style}
      onClick={handleOpen}
      type="button"
      aria-label={ariaLabel}
    >
      {children ?? label}
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
  ariaLabel = 'Email',
}: EmailTriggerProps) => {
  const handleEmail = (event: MouseEvent<HTMLButtonElement>) => {
    const address = `${SITE_CONFIG.emailParts.user}@${SITE_CONFIG.emailParts.domain}`;
    const mailtoUrl = `mailto:${address}`;
    const button = event.currentTarget;
    const isFooter = Boolean(button.closest('#site-footer, footer'));
    const isHero = Boolean(button.closest('.hero-socials-wrapper, header'));
    const isAboutPage = typeof window !== 'undefined' && window.location.pathname === '/about';
    const isProse = Boolean(button.closest('.prose-content, .detail-rich-content, article'));
    const placement = isFooter
      ? 'footer'
      : isHero
        ? 'hero'
        : isAboutPage
          ? 'about_page'
          : isProse
            ? 'in_article'
            : 'general';

    trackSocialClick({
      network: 'Email',
      linkUrl: mailtoUrl,
      placement,
    });

    window.location.href = mailtoUrl;
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
