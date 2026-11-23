import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import SocialMediaIcons from './SocialMediaIcons';

interface HomeHeroProps {
  children?: ReactNode;
}

export default function HomeHero({ children }: HomeHeroProps) {
  return (
    <section className="hero-home">
      <div className="hero-home-media">
        <Image
          src="/yulia-miami-beach.jpg"
          alt="Yulia on the beach in Miami, Florida"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 68vw"
          className="hero-home-image"
        />
      </div>

      <div className="container hero-home-inner">
        <div className="hero-home-text">
          <div className="hero-socials-wrapper">
            <SocialMediaIcons className="hero-socials" iconSize={18} />
          </div>
          <h1 className="display-title">
            <span className="hero-title-nowrap">My Journey</span>
          </h1>
          <p className="hero-paragraph">
            I&apos;m embarking on an adventure of slow travel around the world through house
            sitting, discovering new places and experiencing life through local eyes.
          </p>
          <div className="hero-button-group">
            <Link href="/blog#archive" className="btn-gold">
              Read Blog
            </Link>
            <Link href="/resources" className="secondary-btn">
              Resources
            </Link>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
