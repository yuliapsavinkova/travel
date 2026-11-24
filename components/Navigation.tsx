'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { NAV_ITEMS } from '../site-config';
import BrandLogo from './BrandLogo';
import { MenuIcon, XIcon } from './Icons';

const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false });

interface NavigationProps {
  blogPaths?: string[];
  resourcePaths?: string[];
}

const STATIC_BLOG_ROUTES = new Set(['/blog', '/sitters', '/homeowners']);

const Navigation = ({ blogPaths = [], resourcePaths = [] }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // If mobile menu is open, never hide the header
      if (isMobileMenuOpen) {
        setIsHidden(false);
        return;
      }

      const currentScrollY = window.scrollY;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener('open-contact-portal', handleOpenContact);
    return () => window.removeEventListener('open-contact-portal', handleOpenContact);
  }, []);

  useEffect(() => {
    if (pathname) {
      setIsMobileMenuOpen(false);
      setIsHidden(false);
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
    if (href === '/blog' && pathname && blogRouteSet.has(pathname)) return true;
    if (href === '/resources' && pathname && resourceRouteSet.has(pathname)) return true;
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <>
      <header className={`app-header ${isHidden ? 'hidden' : ''}`}>
        <div className="nav-wrapper">
          <nav className="glass-island">
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
                onClick={() => setIsContactOpen(true)}
              >
                Contact
              </button>
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
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
        <div className="portal-overlay">
          <div className="portal-bg" onClick={() => setIsContactOpen(false)} />
          <div className="portal-modal hide-scrollbar">
            <ContactForm onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
