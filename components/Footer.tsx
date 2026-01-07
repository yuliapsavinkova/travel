import Link from 'next/link';
import type { ReactNode } from 'react';
import { ACTIVE_YEAR, CURRENT_YEAR, NEXT_YEAR, GLOBAL_STRINGS, NAV_ITEMS } from '../constants';
import { ContactTrigger } from './ClientTriggers';
import { InstagramIcon, LinkedinIcon, MailIcon, SJLogo, ExternalLinkIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="refined-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link
              href="/"
              className="branding-clickable footer-brand-trigger"
              aria-label="Sitter Journey Home"
            >
              <div className="footer-brand-wordmark">
                <SJLogo size={40} className="footer-brand-icon" />
                <span className="footer-brand-name serif-italic">
                  <span>Sitter </span>
                  <span className="shimmer-text">Journey</span>
                </span>
              </div>
            </Link>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="#" className="social-icon" aria-label="Email">
                <MailIcon size={20} />
              </a>
            </div>
          </div>
          <div className="footer-nav-col">
            <div className="sub-header footer-header">Explore</div>
            <ul className="footer-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact-col">
            <div className="sub-header footer-header">Contact</div>
            <p className="footer-contact-promo" style={{ display: 'block' }}>
              Available for house sitting during{' '}
              <span className="footer-year-highlight">{ACTIVE_YEAR}</span>
              <span style={{ opacity: 0.5, margin: '0 4px' }}>&mdash;</span>
              <span className="footer-year-highlight">{NEXT_YEAR}</span>.
            </p>
            <div
              className="footer-action-group"
              style={{ marginTop: 'var(--s-4)', display: 'flex', gap: 'var(--s-3)' }}
            >
              <ContactTrigger
                label="Contact"
                className="btn-gold"
                style={{ flex: 1, minWidth: '140px' }}
              />
              <a
                href={GLOBAL_STRINGS.travelPromoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
                style={{
                  flex: 1,
                  minWidth: '140px',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                Join
                <ExternalLinkIcon size={14} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal-links">
            <span className="footer-credits">
              <span className="copyright-symbol">&copy;</span>{' '}
              <span className="footer-year-highlight">{CURRENT_YEAR}</span> SITTER JOURNEY
            </span>
            <Link
              href="/privacy"
              className="footer-legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              PRIVACY
            </Link>
            <Link
              href="/disclosure"
              className="footer-legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCLOSURE
            </Link>
          </div>
          <div className="footer-credits">
            BASED IN THE <span className="footer-year-highlight">USA</span> • TRAVELING FULL-TIME
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
