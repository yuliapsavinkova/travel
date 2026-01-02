import Link from 'next/link';
import React from 'react';
import { ACTIVE_YEAR, CURRENT_YEAR, NEXT_YEAR } from '../constants';
import { InquiryTrigger } from './ClientTriggers';
import { InstagramIcon, LinkedinIcon, MailIcon, SJLogo } from './Icons';

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
                <span className="footer-brand-name serif-italic champagne-text">
                  Sitter Journey
                </span>
              </div>
            </Link>
            <p className="footer-tagline serif-italic" style={{ marginTop: 'var(--s-4)' }}>
              Life on the road, guided by full-time travel and trusted home stewardship.
            </p>
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
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/stays">Stays</Link>
              </li>
              <li>
                <Link href="/journal">Journal</Link>
              </li>
              <li>
                <Link href="/toolkit">Toolkit</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact-col">
            <div className="sub-header footer-header">Connect</div>
            <p className="footer-contact-promo">
              Accepting inquiries for seasonal stays{' '}
              <span className="footer-year-highlight">
                {ACTIVE_YEAR}-{NEXT_YEAR}
              </span>
              .
            </p>
            <InquiryTrigger
              label="Inquire"
              className="btn-gold btn-footer"
              style={{ minWidth: '160px' }}
            />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-credits">
            &copy; <span className="footer-year-highlight">{CURRENT_YEAR}</span> SITTER JOURNEY. ALL
            RIGHTS RESERVED.
          </div>
          <div className="footer-credits">
            BASED IN THE <span className="footer-year-highlight">USA</span> &bull; TRAVELING
            FULL-TIME
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
