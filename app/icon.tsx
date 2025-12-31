import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '1.5px solid #e5c185',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Globe Grid simulation */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '1px',
            background: '#e5c185',
            top: '50%',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '1px',
            height: '100%',
            background: '#e5c185',
            left: '50%',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '14px',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid #e5c185',
            left: '9px',
            opacity: 0.8,
          }}
        />
        
        {/* Monogram circle center */}
        <div
          style={{
            background: 'black',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '0.5px solid #e5c185',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 6,
              fontFamily: 'serif',
              fontWeight: 900,
              fontStyle: 'italic',
              color: '#e5c185',
            }}
          >
            GT
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}