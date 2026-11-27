import Image from 'next/image';
import Link from 'next/link';
import { INVITE_BADGE, REFERRALS, type RelatedArticleItem } from '../types';
import ReferralPromoCard from './ReferralPromoCard';

interface ArticleSidebarProps {
  promoBadge?: string;
  promoTitle?: string;
  promoDescription?: string;
  promoLink?: string;
  promoLabel?: string;
  showPromo?: boolean;
  relatedArticles?: RelatedArticleItem[];
}

export default function ArticleSidebar({
  promoBadge = INVITE_BADGE,
  promoTitle = 'TrustedHousesitters',
  promoDescription = REFERRALS.THS.sitterInviteText,
  promoLink = REFERRALS.THS.link,
  promoLabel = REFERRALS.THS.cta,
  showPromo = true,
  relatedArticles = [],
}: ArticleSidebarProps) {
  return (
    <div className="detail-sidebar-stack">
      <section className="sidebar-card sidebar-author-card" aria-label="About the author">
        <Link
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-author-avatar-link"
          aria-label="About Yulia (opens in a new tab)"
        >
          <div className="sidebar-author-avatar-wrap">
            <Image
              src="/yulia-with-dog.jpg"
              alt="Yulia, House Sitter and Slow Traveler"
              fill
              sizes="132px"
              className="sidebar-author-avatar"
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>
        </Link>
        <h2 className="sidebar-author-name">
          <Link
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-author-name-link"
          >
            Meet Yulia
          </Link>
        </h2>
        <p className="sidebar-author-bio">
          I travel across the globe, living a lifestyle that blends house sitting, minimalism, and
          intentional travel.
        </p>
        <Link
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-author-link"
        >
          <span>About Me</span>
          <span aria-hidden="true">&rarr;</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
      </section>

      {relatedArticles.length > 0 && (
        <nav
          className="sidebar-card sidebar-related-card"
          aria-label="Other articles you might enjoy"
        >
          <span className="sidebar-eyebrow">You Might Also Enjoy</span>
          <div className="sidebar-related-list">
            {relatedArticles.map((article) => (
              <Link key={article.slug} href={article.href} className="sidebar-related-item">
                <div className="sidebar-related-thumb-wrap">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="72px"
                    className="sidebar-related-thumb"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="sidebar-related-meta">
                  <span className="sidebar-related-title">{article.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      )}

      {showPromo && (
        <ReferralPromoCard
          badge={promoBadge}
          title={promoTitle}
          description={promoDescription}
          link={promoLink}
          ctaLabel={promoLabel}
        />
      )}
    </div>
  );
}
