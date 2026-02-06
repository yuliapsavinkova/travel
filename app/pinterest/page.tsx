'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, ALL_RESOURCES, IS_DEV } from '../../constants';
import { ShieldCheckIcon } from '../../components/Icons';

export default function PinterestPage() {
  const [selectedSlug, setSelectedSlug] = useState<string>(BLOG_POSTS[0].slug);

  useEffect(() => {
    if (IS_DEV) {
      document.body.classList.add('is-studio-mode');
      return () => {
        document.body.classList.remove('is-studio-mode');
      };
    }
  }, []);

  if (!IS_DEV) {
    return (
      <div className="container section-margin text-center" style={{ paddingTop: '15vh' }}>
        <ShieldCheckIcon size={64} style={{ color: 'var(--c-gold)', marginBottom: 'var(--s-4)' }} />
        <h1 className="display-title">Restricted Access.</h1>
        <p className="hero-paragraph">This tool is only available in development environments.</p>
        <Link href="/" className="btn-gold" style={{ marginTop: 'var(--s-6)' }}>
          Return Home
        </Link>
      </div>
    );
  }

  const allArticles = [...BLOG_POSTS, ...ALL_RESOURCES];
  const activeItem = allArticles.find((item) => item.slug === selectedSlug) || BLOG_POSTS[0];

  const isResource = 'name' in activeItem;
  const title = isResource ? (activeItem as any).name : (activeItem as any).title;
  const excerpt = isResource ? (activeItem as any).description : (activeItem as any).excerpt;
  const imageUrl = activeItem.imageUrl;

  return (
    <div className="pin-studio-layout">
      {/* Article Navigation Sidebar */}
      <aside className="studio-sidebar hide-scrollbar">
        <div className="studio-header">
          <div className="sub-header">Studio Mode</div>
          <h2 className="serif-italic">Archive Pin Studio</h2>
        </div>

        <div className="article-list">
          {allArticles.map((item) => (
            <button
              key={item.slug}
              className={`sidebar-btn ${selectedSlug === item.slug ? 'is-active' : ''}`}
              onClick={() => setSelectedSlug(item.slug)}
            >
              {'name' in item ? (item as any).name : (item as any).title}
            </button>
          ))}
        </div>

        <div className="sidebar-footer">
          <Link href="/" className="studio-exit">
            ← Return Home
          </Link>
        </div>
      </aside>

      {/* Main Canvas Viewer */}
      <main className="studio-viewer hide-scrollbar">
        <div className="viewer-controls">
          <div className="format-label">Pinterest: 1000px × 1500px</div>
          <button className="btn-gold" onClick={() => window.print()}>
            Save High-Res Pin
          </button>
        </div>

        <div className="pin-scale-wrapper">
          <div id="pin-canvas" className="master-pin-canvas">
            <div className="pin-visual-container">
              {/* TOP SECTION: CINEMATIC IMAGE (No logo, no tags) */}
              <div className="pin-image-box">
                <Image
                  src={imageUrl || ''}
                  alt=""
                  fill
                  unoptimized
                  priority
                  style={{ objectFit: 'cover' }}
                />
                <div className="pin-vignette" />
              </div>

              {/* BOTTOM SECTION: OVERLAPPING GLASS DOCK */}
              <div className="pin-glass-dock">
                <div className="dock-inner">
                  {/* Title and Excerpt Only - No metadata tags like date or category */}
                  <h1 className="pin-display-title serif-italic">{title}</h1>
                  <p className="pin-display-excerpt">{excerpt}</p>

                  <div className="pin-branding-dock">
                    <div className="branding-line" />
                    <div className="branding-domain">SitterJourney.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
