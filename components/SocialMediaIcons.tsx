import { SITE_CONFIG } from '../constants';
import { FacebookIcon, InstagramIcon, MailIcon, TikTokIcon } from './Icons';

interface SocialMediaIconsProps {
  className?: string;
  iconSize?: number;
  showEmail?: boolean;
}

export default function SocialMediaIcons({
  className = '',
  iconSize = 18,
  showEmail = true,
}: SocialMediaIconsProps) {
  return (
    <div className={`social-icons-group ${className}`} role="list" aria-label="Social media links">
      <a
        href={SITE_CONFIG.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="Instagram"
        role="listitem"
      >
        <InstagramIcon size={iconSize} />
      </a>
      <a
        href={SITE_CONFIG.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="Facebook"
        role="listitem"
      >
        <FacebookIcon size={iconSize} />
      </a>
      <a
        href={SITE_CONFIG.socials.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="TikTok"
        role="listitem"
      >
        <TikTokIcon size={iconSize} />
      </a>
      {showEmail && (
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="social-icon-btn"
          aria-label="Email"
          role="listitem"
        >
          <MailIcon size={iconSize} />
        </a>
      )}
    </div>
  );
}
