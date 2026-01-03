import type { SVGProps, ReactNode } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Base wrapper to ensure all icons share the same aesthetic DNA
 */
const IconBase = ({
  size = 24,
  strokeWidth = 2,
  children,
  ...props
}: IconProps & { children: ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

export const SJLogo = ({ size = 48, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    shapeRendering="geometricPrecision"
    {...props}
  >
    <title>Sitter Journey Logo</title>
    <defs>
      <linearGradient id="logo-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="45%" stopColor="#E5C185" />
        <stop offset="100%" stopColor="#B08D57" />
      </linearGradient>
    </defs>

    {/* Outer Ring */}
    <circle cx="50" cy="50" r="46" stroke="url(#logo-gold-gradient)" strokeWidth="2" />

    {/* Stylized Globe Lines */}
    <circle
      cx="50"
      cy="50"
      r="38"
      stroke="url(#logo-gold-gradient)"
      strokeWidth="1.5"
      opacity="0.8"
    />

    {/* Meridians (Vertical) */}
    <ellipse cx="50" cy="50" rx="14" ry="38" stroke="url(#logo-gold-gradient)" strokeWidth="1.5" />
    <ellipse
      cx="50"
      cy="50"
      rx="26"
      ry="38"
      stroke="url(#logo-gold-gradient)"
      strokeWidth="0.8"
      opacity="0.4"
    />
    <line x1="50" y1="12" x2="50" y2="88" stroke="url(#logo-gold-gradient)" strokeWidth="1.5" />

    {/* Equator / Parallels (Horizontal) */}
    <line x1="12" y1="50" x2="88" y2="50" stroke="url(#logo-gold-gradient)" strokeWidth="1.5" />
    <path
      d="M18 35C28 32 72 32 82 35"
      stroke="url(#logo-gold-gradient)"
      strokeWidth="1.2"
      opacity="0.6"
    />
    <path
      d="M18 65C28 68 72 68 82 65"
      stroke="url(#logo-gold-gradient)"
      strokeWidth="1.2"
      opacity="0.6"
    />
    <path
      d="M25 24C35 22 65 22 75 24"
      stroke="url(#logo-gold-gradient)"
      strokeWidth="0.8"
      opacity="0.4"
    />
    <path
      d="M25 76C35 78 65 78 75 76"
      stroke="url(#logo-gold-gradient)"
      strokeWidth="0.8"
      opacity="0.4"
    />
  </svg>
);

/* --- BRAND & SOCIAL --- */

export const InstagramIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </IconBase>
);

export const LinkedinIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </IconBase>
);

export const MailIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconBase>
);

/* --- INTERFACE & NAVIGATION --- */

export const MenuIcon = (props: IconProps) => (
  <IconBase {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </IconBase>
);

export const XIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
);

export const ChevronDownIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m6 9 6 6 6-6" />
  </IconBase>
);

export const ArrowLeftIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </IconBase>
);

export const ArrowUpRightIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </IconBase>
);

/* --- FUNCTIONAL & DECORATIVE --- */

export const MapPinIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);

export const CalendarIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </IconBase>
);

export const StarIcon = (props: IconProps) => (
  <IconBase {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconBase>
);

export const AwardIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </IconBase>
);

export const GlobeIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconBase>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </IconBase>
);

export const HeartIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </IconBase>
);

export const HomeIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </IconBase>
);

export const SmartphoneIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <line x1="12" x2="12" y1="18" y2="18" />
  </IconBase>
);

/**
 * Added to support financial and payment tool representation.
 */
export const CreditCardIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </IconBase>
);

export const LeafIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-10 10Z" />
    <path d="M11 20c-1 0-3-3-3-3" />
  </IconBase>
);

export const CompassIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </IconBase>
);

export const QuoteIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4.48-3.52 8-4 8Z" />
    <path d="M14 21c3 0 7-1 7-8V5h-7v8h4c0 4.48-3.52 8-4 8Z" />
  </IconBase>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </IconBase>
);

export const TagIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <line x1="7" x2="7.01" y1="7" y2="7" />
  </IconBase>
);

export const CheckCircleIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconBase>
);
