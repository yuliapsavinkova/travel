import React from 'react';
import Link from 'next/link';
import { REFERRALS } from '../../constants';
import CommonCard from '../../components/CommonCard';
import {
  SmartphoneIcon,
  HomeIcon,
  HeartIcon,
  CreditCardIcon,
  LeafIcon,
  ChevronDownIcon,
} from '../../components/Icons';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'home':
      return <HomeIcon size={14} />;
    case 'smartphone':
      return <SmartphoneIcon size={14} />;
    case 'leaf':
      return <LeafIcon size={14} />;
    case 'heart':
      return <HeartIcon size={14} />;
    default:
      return <CreditCardIcon size={14} />;
  }
};

export default function ToolkitPage() {
  const allTools = REFERRALS.flatMap((category) => category.items);

  return (
    <div className="container">
      <section className="hero-stack section-margin">
        <div className="media-viewport">
          <img
            src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=2400"
            alt="The Nomadic Framework Essentials"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="hero-content-overlay">
          <div className="sub-header hero-sub-header">Nomadic Framework</div>
          <h1 className="display-title">
            The Nomad's <br />
            <span className="champagne-text">Essential Tools.</span>
          </h1>
          <p className="hero-paragraph">
            A curated selection of the resources that make a global lifestyle
            possible.
          </p>
          <div className="hero-button-group">
            <Link href="#framework" className="btn-gold">
              Explore Tools
            </Link>
            <Link href="/journal" className="secondary-btn">
              The Journal
            </Link>
          </div>
        </div>

        <Link href="#framework" className="scroll-trigger" aria-label="Scroll to framework">
          <ChevronDownIcon size={28} className="scroll-icon-anim" />
        </Link>
      </section>

      <header className="text-center section-margin">
        <div className="sub-header">The Framework</div>
        <h2 className="display-title display-title-md">
          Essential <span className="serif-italic champagne-text">Toolkit.</span>
        </h2>
      </header>

      <div className="grid-standard" id="framework">
        {allTools.map((item) => (
          <CommonCard
            key={item.id}
            title={item.name}
            image={item.imageUrl}
            description={item.description}
            badge={item.discountText ? 'Preferred' : 'Essential'}
            metadata={[{ icon: getIcon(item.icon), text: 'Nomad Essential' }]}
            slug={`/toolkit/${item.slug}`}
            actionLabel="Review details"
            ctaLink={item.link}
            ctaLabel={item.discountText ? `Claim: ${item.discountText}` : 'Visit Site'}
          />
        ))}
      </div>
    </div>
  );
}
