import { SITE_CONFIG } from '../constants';
import { FacebookIcon, InstagramIcon, MailIcon, PinterestIcon, TikTokIcon } from './Icons';

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
    <nav className={`social-icons-group ${className}`} aria-label="Social media links">
      <a
        href={SITE_CONFIG.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="Instagram"
      >
        <InstagramIcon size={iconSize} />
      </a>
      <a
        href={SITE_CONFIG.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="Facebook"
      >
        <FacebookIcon size={iconSize} />
      </a>
      <a
        href={SITE_CONFIG.socials.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="TikTok"
      >
        <TikTokIcon size={iconSize} />
      </a>
      <a
        href={SITE_CONFIG.socials.pinterest}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="Pinterest"
      >
        <PinterestIcon size={iconSize} />
      </a>
      {showEmail && (
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="social-icon-btn"
          aria-label="Email"
        >
          <MailIcon size={iconSize} />
        </a>
      )}
    </nav>
  );
}
