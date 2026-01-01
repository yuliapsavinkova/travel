'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactForm from './ContactForm';
import { SJLogo, MenuIcon, XIcon } from './Icons';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleOpenInquiry = () => setIsContactOpen(true);
    window.addEventListener('open-inquiry-portal', handleOpenInquiry);
    return () => window.removeEventListener('open-inquiry-portal', handleOpenInquiry);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Stays', href: '/stays' },
    { label: 'Travel', href: '/travel' },
    { label: 'Journal', href: '/journal' },
    { label: 'Toolkit', href: '/toolkit' },
  ];

  return (
    <>
      <header className="app-header">
        <div className="nav-wrapper">
          <nav className="glass-island">
            <Link href="/" className="branding-clickable" aria-label="Sitter Journey Home">
              <SJLogo size={60} />
            </Link>

            <div className="desktop-nav">
              {navItems.map((item) => (
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
              <button className="btn-gold desktop-only" onClick={() => setIsContactOpen(true)}>
                Connect
              </button>
              <button
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
            {navItems.map((item) => (
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
              className="mobile-menu-item mobile-menu-cta"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactOpen(true);
              }}
            >
              Start Inquiry
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
