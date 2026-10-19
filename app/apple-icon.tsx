import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1C1A17 0%, #0A0908 100%)',
      }}
    >
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="appleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF7" />
            <stop offset="30%" stopColor="#FEE0A6" />
            <stop offset="70%" stopColor="#E5C185" />
            <stop offset="100%" stopColor="#B88A44" />
          </linearGradient>
          <radialGradient id="appleInnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DDAF68" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Circular Emblem Border */}
        <circle
          cx="90"
          cy="90"
          r="76"
          fill="url(#appleInnerGlow)"
          stroke="url(#appleGoldGrad)"
          strokeWidth="4"
        />

        {/* Inset Decorative Ring */}
        <circle
          cx="90"
          cy="90"
          r="68"
          fill="none"
          stroke="url(#appleGoldGrad)"
          strokeWidth="1.4"
          opacity="0.45"
        />

        {/* Outer Globe Sphere */}
        <circle cx="90" cy="90" r="50" fill="none" stroke="url(#appleGoldGrad)" strokeWidth="5" />

        {/* Central Polar Axis */}
        <line
          x1="90"
          y1="40"
          x2="90"
          y2="140"
          stroke="url(#appleGoldGrad)"
          strokeWidth="4.4"
          strokeLinecap="round"
        />

        {/* Equator */}
        <line
          x1="40"
          y1="90"
          x2="140"
          y2="90"
          stroke="url(#appleGoldGrad)"
          strokeWidth="4.4"
          strokeLinecap="round"
        />

        {/* Prime Meridian */}
        <ellipse
          cx="90"
          cy="90"
          rx="22"
          ry="50"
          fill="none"
          stroke="url(#appleGoldGrad)"
          strokeWidth="4.2"
        />

        {/* Secondary Meridian */}
        <ellipse
          cx="90"
          cy="90"
          rx="38"
          ry="50"
          fill="none"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.2"
          opacity="0.8"
        />

        {/* Upper Latitude */}
        <path
          d="M 49 70 C 63 64, 117 64, 131 70"
          fill="none"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />

        {/* Lower Latitude */}
        <path
          d="M 49 110 C 63 116, 117 116, 131 110"
          fill="none"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
      </svg>
    </div>,
    {
      ...size,
    }
  );
}
