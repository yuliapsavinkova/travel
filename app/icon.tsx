import { ImageResponse } from 'next/og';

// Google Search Favicon Guidelines require multiples of 48px (48x48, 96x96, 192x192)
export const size = {
  width: 192,
  height: 192,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <svg
        width="192"
        height="192"
        viewBox="0 0 192 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pngGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF7" />
            <stop offset="30%" stopColor="#FEE0A6" />
            <stop offset="70%" stopColor="#E5C185" />
            <stop offset="100%" stopColor="#B88A44" />
          </linearGradient>
          <linearGradient id="pngBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1C1A17" />
            <stop offset="100%" stopColor="#090807" />
          </linearGradient>
          <radialGradient id="pngInnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DDAF68" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Circular Emblem Badge with safe transparent margin so no gold ever touches the canvas edges */}
        <circle
          cx="96"
          cy="96"
          r="82"
          fill="url(#pngBgGrad)"
          stroke="url(#pngGoldGrad)"
          strokeWidth="4.5"
        />
        <circle cx="96" cy="96" r="82" fill="url(#pngInnerGlow)" />

        {/* Inset Decorative Ring */}
        <circle
          cx="96"
          cy="96"
          r="72"
          fill="none"
          stroke="url(#pngGoldGrad)"
          strokeWidth="1.5"
          opacity="0.45"
        />

        {/* Outer Globe Sphere */}
        <circle
          cx="96"
          cy="96"
          r="54"
          fill="none"
          stroke="url(#pngGoldGrad)"
          strokeWidth="5.5"
        />

        {/* Central Polar Axis */}
        <line
          x1="96"
          y1="42"
          x2="96"
          y2="150"
          stroke="url(#pngGoldGrad)"
          strokeWidth="4.8"
          strokeLinecap="round"
        />

        {/* Equator */}
        <line
          x1="42"
          y1="96"
          x2="150"
          y2="96"
          stroke="url(#pngGoldGrad)"
          strokeWidth="4.8"
          strokeLinecap="round"
        />

        {/* Prime Meridian */}
        <ellipse
          cx="96"
          cy="96"
          rx="24"
          ry="54"
          fill="none"
          stroke="url(#pngGoldGrad)"
          strokeWidth="4.6"
        />

        {/* Secondary Meridian */}
        <ellipse
          cx="96"
          cy="96"
          rx="41"
          ry="54"
          fill="none"
          stroke="url(#pngGoldGrad)"
          strokeWidth="3.5"
          opacity="0.8"
        />

        {/* Upper Latitude */}
        <path
          d="M 52 74 C 67 68, 125 68, 140 74"
          fill="none"
          stroke="url(#pngGoldGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Lower Latitude */}
        <path
          d="M 52 118 C 67 124, 125 124, 140 118"
          fill="none"
          stroke="url(#pngGoldGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>,
    {
      ...size,
    }
  );
}
