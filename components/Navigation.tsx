'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../constants';
import ContactForm from './ContactForm';
import { MenuIcon, SJLogo, XIcon } from './Icons';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHidden(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener('open-contact-portal', handleOpenContact);
    return () => window.removeEventListener('open-contact-portal', handleOpenContact);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHidden(false);
  }, [pathname]);

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
                  className={`btn-nav ${pathname === item.href ? 'active' : ''}`}
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
                className={`mobile-menu-item ${pathname === item.href ? 'active' : ''}`}
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
