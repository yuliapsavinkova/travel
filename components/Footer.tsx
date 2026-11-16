import Link from 'next/link';
import { useId, type ReactNode } from 'react';
import { CURRENT_YEAR, NAV_ITEMS, TRUSTED_HOUSESITTERS_REF_LINK } from '../constants';
import BrandLogo from './BrandLogo';
import { ExternalLink } from './Icons';
import SocialMediaIcons from './SocialMediaIcons';
import SurfHorizon from './SurfHorizon';

interface FooterLink {
  href: string;
  label: string;
  sponsored?: boolean;
}

const SITE_NAME = 'sitterjourney.com';

const EXTERNAL_LINKS: FooterLink[] = [
  { href: 'https://yulia.sitterjourney.com', label: 'House & Pet Sitting Services' },
  { href: TRUSTED_HOUSESITTERS_REF_LINK, label: 'TrustedHousesitters', sponsored: true },
];

const LEGAL_LINKS: FooterLink[] = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/disclosure', label: 'Disclosure' },
];

interface NewTabLinkProps extends Pick<FooterLink, 'href' | 'sponsored'> {
  showIcon?: boolean;
  children: ReactNode;
}

const NewTabLink = ({ href, sponsored = false, showIcon = false, children }: NewTabLinkProps) => (
  <Link href={href} target="_blank" rel={`noopener noreferrer${sponsored ? ' sponsored' : ''}`}>
    {children}
    {showIcon && <ExternalLink size={12} aria-hidden="true" />}
    <span className="sr-only"> (opens in a new tab)</span>
  </Link>
);

interface FooterNavProps {
  title: string;
  children: ReactNode;
}

const FooterNav = ({ title, children }: FooterNavProps) => {
  const titleId = useId();

  return (
    <nav className="footer-col" aria-labelledby={titleId}>
      <h2 className="footer-col-title" id={titleId}>
        {title}
      </h2>
      <ul className="footer-links-list">{children}</ul>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer" id="site-footer">
    <div className="footer-inner">
      <div className="footer-columns">
        <div className="footer-col footer-col-brand">
          <BrandLogo />
          <p className="footer-brand-text">
            Travel the world on your own terms, spend less, live more, and enjoy the journey. Real stories, tips, and inspiration from the road.
          </p>
          <SocialMediaIcons className="footer-socials" />
        </div>

        <FooterNav title="Explore">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </FooterNav>

        <FooterNav title="External Networks">
          {EXTERNAL_LINKS.map(({ href, label, sponsored }) => (
            <li key={href}>
              <NewTabLink href={href} sponsored={sponsored} showIcon>
                {label}
              </NewTabLink>
            </li>
          ))}
        </FooterNav>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          <span className="copyright-symbol" aria-hidden="true">
            &copy;
          </span>
          {CURRENT_YEAR} {SITE_NAME}
        </p>

        <p>All Rights Reserved</p>

        <ul className="footer-legal">
          {LEGAL_LINKS.map(({ href, label }) => (
            <li key={href}>
              <NewTabLink href={href}>{label}</NewTabLink>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <SurfHorizon />
  </footer>
);

export default Footer;
