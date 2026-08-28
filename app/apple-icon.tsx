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
        background: '#0a0a0c',
        borderRadius: '36px',
        border: '4px solid #E5C185',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg
        width="144"
        height="144"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'flex' }}
      >
        <defs>
          <linearGradient id="appleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7E6" />
            <stop offset="45%" stopColor="#E5C185" />
            <stop offset="100%" stopColor="#B08D57" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#appleGoldGrad)"
          strokeWidth="4"
        />
        <line
          x1="50"
          y1="8"
          x2="50"
          y2="92"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="50"
          x2="92"
          y2="50"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="18"
          ry="42"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3"
        />
        <path
          d="M 17 33 C 28 29, 72 29, 83 33"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 17 67 C 28 71, 72 71, 83 67"
          stroke="url(#appleGoldGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>,
    {
      ...size,
    }
  );
}
