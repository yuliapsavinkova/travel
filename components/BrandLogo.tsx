import Link from 'next/link';
import { SJLogo } from './Icons';

interface BrandLogoProps {
  className?: string;
  iconSize?: number;
  href?: string;
  onClick?: () => void;
}

export default function BrandLogo({
  className = '',
  iconSize = 36,
  href = '/',
  onClick,
}: BrandLogoProps) {
  const content = (
    <div className={`brand-wordmark ${className}`}>
      <SJLogo size={iconSize} className="brand-logo-icon" />
      <span className="brand-logo-name serif-italic">
        <span className="brand-name-light">Sitter </span>
        <span className="brand-name-accent">Journey</span>
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="brand-logo-link"
        aria-label="Sitter Journey Home"
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return content;
}
