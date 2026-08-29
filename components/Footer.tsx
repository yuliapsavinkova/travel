import Link from 'next/link';
import {
  CURRENT_YEAR,
  NAV_ITEMS,
  SITE_CONFIG,
  TRUSTED_HOUSESITTERS_REF_LINK,
} from '../constants';
import { InstagramIcon, FacebookIcon, TikTokIcon, MailIcon, SJLogo, ExternalLink } from './Icons';

const Footer = () => {
  return (
    <footer className="refined-footer" id="site-footer">
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
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href={SITE_CONFIG.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="social-icon" aria-label="Email">
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
        <div className="footer-col footer-col-ext" id="footer-ext-col">
          <div className="sub-header footer-header footer-col-title">External Networks</div>
          <ul className="footer-links footer-links-list">
            <li>
              <a
                href="https://yulia.sitterjourney.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                House &amp; Pet Sitting Services <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a
                href={TRUSTED_HOUSESITTERS_REF_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                TrustedHousesitters <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-legal-bar">
          <span className="footer-credits copyright-block">
            <span className="copyright-symbol">&copy;</span>{' '}
            <span className="footer-year-highlight">{CURRENT_YEAR}</span> sitterjourney.com
          </span>
          <span className="footer-dot-divider" aria-hidden="true">&middot;</span>
          <span className="footer-credits">All Rights Reserved</span>
          <span className="footer-dot-divider" aria-hidden="true">&middot;</span>
          <div className="footer-policy-group">
            <Link
              href="/privacy"
              className="footer-legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </Link>
            <Link
              href="/disclosure"
              className="footer-legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
