
import React from 'react';
import Link from 'next/link';
import { InquiryTrigger } from '../components/ClientTriggers';
import { AwardIcon, GlobeIcon, ShieldCheckIcon, ChevronDownIcon, ArrowUpRightIcon, StarIcon } from '../components/Icons';
import { SITE_STATS } from '../constants';

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero-stack section-margin">
        <div className="media-viewport">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2400" alt="Girl Travels Journey" />
          <div className="hero-gradient-overlay" />
        </div>
        <div className="hero-content-overlay">
          <div className="sub-header hero-sub-header">Professional Stewardship & Reliable Care</div>
          <h1 className="display-title">Attentive Care for <br/><span className="champagne-text">Your Home and Companions.</span></h1>
          <p className="hero-paragraph">Solo female traveler specializing in long-term house sitting and professional stewardship. Providing absolute peace of mind through {SITE_STATS.sitsCount} verified assignments across the United States.</p>
          <div className="hero-button-group">
            <Link href="/stays" className="btn-gold">View Portfolio</Link>
            <Link href="/journal" className="secondary-btn">Expert Insights</Link>
          </div>
        </div>
        
        <Link href="#milestones" className="scroll-trigger" aria-label="Scroll to milestones">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <section className="section-margin text-center">
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--s-6)', flexWrap: 'wrap', marginTop: 'var(--s-4)' }}>
          <div className="detail-metadata-item"><StarIcon size={16} style={{ color: 'var(--c-gold)' }} /> {SITE_STATS.satisfactionRate} Client Satisfaction</div>
          <div className="detail-metadata-item"><ShieldCheckIcon size={16} style={{ color: 'var(--c-gold)' }} /> Verified Background Check</div>
          <div className="detail-metadata-item"><AwardIcon size={16} style={{ color: 'var(--c-gold)' }} /> {SITE_STATS.sitsCount} Verified Assignments</div>
        </div>
      </section>

      <section className="milestone-gallery-section" id="milestones">
        <div className="container">
          <div className="milestone-header">
            <div className="sub-header">Professional History</div>
            <h2 className="display-title display-title-md color-white">A <span className="serif-italic champagne-text">Proven Path.</span></h2>
          </div>
          <div className="grid-standard grid-stats">
            {[
              { label: 'Verified Sits', value: SITE_STATS.sitsCount, icon: <AwardIcon size={28} />, img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800' },
              { label: 'States Explored', value: SITE_STATS.statesCount, icon: <GlobeIcon size={28} />, img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800' },
              { label: 'Technical Accuracy', value: '100%', icon: <ShieldCheckIcon size={28} />, img: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800' }
            ].map((stat, i) => (
              <div key={i} className="stat-card-glass">
                <div className="stat-background media-viewport">
                  <img src={stat.img} alt={stat.label} className="opacity-40" />
                  <div className="stat-image-overlay" />
                </div>
                <div className="stat-content">
                  <div className="stat-icon-circle">{stat.icon}</div>
                  <div className="gold-stat-number">{stat.value}</div>
                  <div className="sub-header no-margin opacity-90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-margin text-center">
        <div className="section-divider">
          <div className="sub-header">Professional Inquiry</div>
          <h2 className="display-title display-title-md">Seeking <span className="serif-italic champagne-text">Reliability?</span></h2>
          <p className="hero-paragraph" style={{ margin: 'var(--s-4) auto' }}>Currently accepting inquiries for long-term seasonal stays. Let's ensure your home and companions are in trusted hands.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--s-4)' }}>
            <InquiryTrigger label="Start An Inquiry" className="btn-gold" />
            <Link href="/stays" className="secondary-btn">Browse Full Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
