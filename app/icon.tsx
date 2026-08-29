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
        background: 'linear-gradient(135deg, #24211C 0%, #0F0E0C 100%)',
        borderRadius: '50%',
        border: '6px solid #DDAF68',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <svg
        width="150"
        height="150"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'flex' }}
      >
        <defs>
          <linearGradient id="pngGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF7" />
            <stop offset="35%" stopColor="#F2D8A7" />
            <stop offset="75%" stopColor="#DDAF68" />
            <stop offset="100%" stopColor="#B88A44" />
          </linearGradient>
        </defs>

        {/* Outer Globe Sphere */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="url(#pngGoldGrad)"
          strokeWidth="4"
        />

        {/* Vertical Axis */}
        <line
          x1="50"
          y1="12"
          x2="50"
          y2="88"
          stroke="url(#pngGoldGrad)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />

        {/* Horizontal Equator */}
        <line
          x1="12"
          y1="50"
          x2="88"
          y2="50"
          stroke="url(#pngGoldGrad)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />

        {/* Primary Meridian */}
        <ellipse
          cx="50"
          cy="50"
          rx="16"
          ry="38"
          stroke="url(#pngGoldGrad)"
          strokeWidth="3.4"
        />

        {/* Secondary Meridian */}
        <ellipse
          cx="50"
          cy="50"
          rx="27"
          ry="38"
          stroke="url(#pngGoldGrad)"
          strokeWidth="2.2"
          opacity="0.65"
        />

        {/* Upper Latitude */}
        <path
          d="M 18 35 C 28 32, 72 32, 82 35"
          stroke="url(#pngGoldGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Lower Latitude */}
        <path
          d="M 18 65 C 28 68, 72 68, 82 65"
          stroke="url(#pngGoldGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </div>,
    {
      ...size,
    }
  );
}
