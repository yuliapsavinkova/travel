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
        background: 'linear-gradient(135deg, #24211C 0%, #0F0E0C 100%)',
        borderRadius: '36px',
        border: '5px solid #DDAF68',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <svg
        width="135"
        height="135"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'flex' }}
      >
        <defs>
          <linearGradient id="appleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF7" />
            <stop offset="35%" stopColor="#F2D8A7" />
            <stop offset="75%" stopColor="#DDAF68" />
            <stop offset="100%" stopColor="#B88A44" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="url(#appleGoldGrad)"
          strokeWidth="4"
        />
        <line
          x1="50"
          y1="12"
          x2="50"
          y2="88"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="50"
          x2="88"
          y2="50"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="16"
          ry="38"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.4"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="27"
          ry="38"
          stroke="url(#appleGoldGrad)"
          strokeWidth="2.2"
          opacity="0.65"
        />
        <path
          d="M 18 35 C 28 32, 72 32, 82 35"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M 18 65 C 28 68, 72 68, 82 65"
          stroke="url(#appleGoldGrad)"
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
