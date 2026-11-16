import Image from 'next/image';
import Link from 'next/link';
import SocialMediaIcons from './SocialMediaIcons';

export default function HomeHero() {
  return (
    <section className="hero-home section-margin">
      <div className="hero-home-media">
        <Image
          src="/yulia-miami-beach.jpg"
          alt="Yulia on the beach in Miami, Florida"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 68vw"
          className="hero-home-image"
        />
      </div>

      <div className="container hero-home-inner">
        <div className="hero-col-text hero-home-text">
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
              My Blog
            </Link>
            <Link href="/resources#archive" className="secondary-btn">
              My Resources
            </Link>
          </div>
        </div>
      </div>

      <svg
        className="hero-home-wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="hero-home-wave-back"
          d="M0,48 C200,16 380,68 580,38 C780,8 980,64 1180,32 C1310,12 1390,28 1440,42 L1440,80 L0,80 Z"
        />
        <path
          className="hero-home-wave-front"
          d="M0,58 C220,28 400,74 610,46 C820,18 1000,70 1200,40 C1320,22 1395,38 1440,52 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
