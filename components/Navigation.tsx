'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { NAV_ITEMS } from '../constants';
import ContactForm from './ContactForm';
import { MenuIcon, SJLogo, XIcon } from './Icons';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolling UP or at the top: Show header
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setIsHidden(false);
      }
      // Scrolling DOWN and past threshold: Hide header
      else if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsHidden(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener('open-contact-portal', handleOpenContact);
    return () => window.removeEventListener('open-contact-portal', handleOpenContact);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHidden(false);
  }, [pathname]);

  // Logic to determine if a link is active, including sub-paths
  const checkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    // Match exact path OR if the current path is a sub-page of the link (e.g., /blog/post-slug matches /blog)
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      <header className={`app-header ${isHidden ? 'hidden' : ''}`}>
        <div className="nav-wrapper">
          <nav className="glass-island">
            <Link href="/" className="branding-clickable" aria-label="Sitter Journey Home">
              <SJLogo size={50} />
            </Link>

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
          <div className="sub-header margin-bottom-sm">Navigation</div>
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
