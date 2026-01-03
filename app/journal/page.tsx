import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import { CalendarIcon, MapPinIcon, ChevronDownIcon } from '../../components/Icons';

export default function JournalPage() {
  return (
    <>
      <section className="hero-stack section-margin">
        <div className="media-viewport">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=2400"
            alt="Travel Journaling"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="hero-content-overlay">
          <div className="sub-header hero-sub-header">Stories from the Road</div>
          <h1 className="display-title">
            The Art of <span className="champagne-text">the Journey.</span>
          </h1>
          <p className="hero-paragraph">
            Documenting the intersections of architecture, pet companionship, and the traveler
            lifestyle.
          </p>
          <div className="hero-button-group">
            <Link href="#archive" className="btn-gold">
              Read Archive
            </Link>
            <Link href="/toolkit#framework" className="secondary-btn">
              Travel Toolkit
            </Link>
          </div>
        </div>

        <Link href="#archive" className="scroll-trigger" aria-label="Scroll to archive">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <div className="container">
        <header className="text-center section-margin" id="archive">
          <div className="sub-header">Archive</div>
          <h2 className="display-title display-title-md">
            The <span className="serif-italic champagne-text">Journal.</span>
          </h2>
        </header>

        <div className="grid-standard">
          {BLOG_POSTS.map((post) => (
            <CommonCard
              key={post.id}
              image={post.imageUrl}
              badge="Journal"
              metadata={[
                { icon: <CalendarIcon size={12} />, text: post.date },
                { icon: <MapPinIcon size={12} />, text: post.location },
              ]}
              title={post.title}
              description={post.excerpt}
              slug={`/journal/${post.slug}`}
              actionLabel="Read Journal"
            />
          ))}
        </div>
      </div>
    </>
  );
}
