'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { NAV_ITEMS } from '../site-config';
import { trackContactModalOpen } from '../utils/analytics';
import BrandLogo from './BrandLogo';
import { MenuIcon, XIcon } from './Icons';

const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false });

interface NavigationProps {
  blogPaths?: string[];
  resourcePaths?: string[];
}

const STATIC_BLOG_ROUTES = new Set(['/sitters-guides', '/homeowners-guides']);

const Navigation = ({ blogPaths = [], resourcePaths = [] }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 24);

      // If mobile menu is open, never hide the header
      if (isMobileMenuOpen) {
        setIsHidden(false);
        return;
      }

      // Always show header at or near the top of the page, or when scrolling UP
      if (currentScrollY <= 60 || currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }
      // Scrolling DOWN and well past top hero threshold: Hide header
      else if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsHidden(true);
      }

      lastScrollY.current = Math.max(0, currentScrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener('open-contact-portal', handleOpenContact);
    return () => window.removeEventListener('open-contact-portal', handleOpenContact);
  }, []);

  useEffect(() => {
    const isOverlayOpen = isMobileMenuOpen || isContactOpen;
    if (!isOverlayOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsContactOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, isContactOpen]);

  useEffect(() => {
    if (pathname) {
      setIsMobileMenuOpen(false);
      setIsHidden(false);
      setIsScrolled(window.scrollY > 24);
    }
  }, [pathname]);

  const blogRouteSet = useMemo(() => {
    return new Set([...STATIC_BLOG_ROUTES, ...blogPaths]);
  }, [blogPaths]);

  const resourceRouteSet = useMemo(() => {
    return new Set(resourcePaths);
  }, [resourcePaths]);

  const checkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/sitters-guides' && pathname && blogRouteSet.has(pathname)) return true;
    if (href === '/resources' && pathname && resourceRouteSet.has(pathname)) return true;
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`app-header ${isHome ? 'is-home' : ''} ${isScrolled ? 'is-scrolled' : ''} ${isHidden ? 'hidden' : ''}`}
      >
        <div className="nav-wrapper">
          <nav className="header-bar" aria-label="Primary navigation">
            <BrandLogo />
            <div className="desktop-nav">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`btn-nav ${checkActive(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="nav-action-group">
              <button
                type="button"
                className="btn-gold desktop-only"
                onClick={() => {
                  trackContactModalOpen({ placement: 'header_desktop' });
                  setIsContactOpen(true);
                }}
              >
                Contact
              </button>
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-overlay"
              >
                {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        id="mobile-menu-overlay"
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <div className="mobile-nav-stack">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-menu-item ${checkActive(item.href) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="mobile-menu-item mobile-menu-cta"
              onClick={() => {
                trackContactModalOpen({ placement: 'header_mobile' });
                setIsMobileMenuOpen(false);
                setIsContactOpen(true);
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {isContactOpen && (
        <div className="portal-overlay" role="dialog" aria-modal="true" aria-label="Contact Yulia">
          <div className="portal-bg" aria-hidden="true" onClick={() => setIsContactOpen(false)} />
          <div className="portal-modal hide-scrollbar">
            <ContactForm onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
