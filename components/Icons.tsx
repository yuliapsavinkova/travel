import { type ReactNode, type SVGProps, useId } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  // Explicitly add common SVG attributes to satisfy strict TypeScript checking
  className?: string;
  strokeWidth?: number | string;
  // Add children property to support nested SVG content
  children?: ReactNode;
}

/**
 * Base wrapper to ensure all icons share the same aesthetic DNA
 */
const IconBase = ({ size = 24, strokeWidth = 2, children, ...props }: IconProps) => (
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

export const SJLogo = ({ size = 48, className, ...props }: IconProps) => {
  const uid = useId().replace(/:/g, '');
  const clipId = `sj-clip-${uid}`;
  const skyId = `sj-sky-${uid}`;
  const sunId = `sj-sun-${uid}`;
  const sandId = `sj-sand-${uid}`;
  const seaId = `sj-sea-${uid}`;

  return (
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
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="45.5" />
        </clipPath>
        <linearGradient id={skyId} x1="50" y1="4" x2="50" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#103A68" />
          <stop offset="100%" stopColor="#236CB0" />
        </linearGradient>
        <linearGradient id={sunId} x1="37" y1="23" x2="43" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE494" />
          <stop offset="100%" stopColor="#E19638" />
        </linearGradient>
        <linearGradient id={sandId} x1="35" y1="52" x2="90" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EAC98E" />
          <stop offset="100%" stopColor="#C89B58" />
        </linearGradient>
        <linearGradient id={seaId} x1="50" y1="56" x2="50" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2382A6" />
          <stop offset="100%" stopColor="#12486C" />
        </linearGradient>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {/* Coastal Sky */}
        <rect x="0" y="0" width="100" height="100" fill={`url(#${skyId})`} />

        {/* Travel Sun */}
        <circle cx="38" cy="38" r="14" fill={`url(#${sunId})`} />

        {/* North Star / Compass Sparkle */}
        <path
          d="M 69 19 Q 69 26.5 76.5 26.5 Q 69 26.5 69 34 Q 69 26.5 61.5 26.5 Q 69 26.5 69 19 Z"
          fill="#FAF6EE"
        />

        {/* Minimalist Home Silhouette (grounded seamlessly into headland) */}
        <path d="M 62 50 L 70 42.5 L 78 50 V 61 H 62 Z" fill="#FAF6EE" />

        {/* Sunlit Coastal Headland */}
        <path d="M 24 67 Q 58 51 98 63 L 98 100 L 20 100 Z" fill={`url(#${sandId})`} />

        {/* Ocean Swell */}
        <path d="M 0 60 Q 28 51 56 65 T 100 61 L 100 100 L 0 100 Z" fill={`url(#${seaId})`} />

        {/* Journey Wave Crests */}
        <path
          d="M 4 72 Q 30 62 56 73 T 97 72"
          stroke="#FAF6EE"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.92"
        />
        <path
          d="M 12 84 Q 38 76 64 84 T 94 83"
          stroke="#7AD0E4"
          strokeWidth="2.8"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>

      {/* High-contrast Medallion Rim (legible on both light & dark tabs) */}
      <circle cx="50" cy="50" r="46" stroke="#E4C488" strokeWidth="3.5" />
    </svg>
  );
};

/* --- BRAND & SOCIAL --- */

export const InstagramIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </IconBase>
);

export const FacebookIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </IconBase>
);

export const TikTokIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </IconBase>
);

export const PinterestIcon = (props: IconProps) => (
  <IconBase {...props}>
    <line x1="8" y1="20" x2="12" y2="11" />
    <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
    <circle cx="12" cy="12" r="9" />
  </IconBase>
);

export const MailIcon = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconBase>
);

export const MessageSquareIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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

export const ChevronDownIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m6 9 6 6 6-6" />
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

export const ClockIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </IconBase>
);

export const StarIcon = (props: IconProps) => (
  <IconBase {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconBase>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </IconBase>
);

export const CompassIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </IconBase>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </IconBase>
);

export const CheckCircleIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconBase>
);
