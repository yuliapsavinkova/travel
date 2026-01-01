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

      {/* Meridians */}
      <div
        style={{
          position: 'absolute',
          width: '14px',
          height: '100%',
          borderRadius: '50%',
          border: '1px solid #e5c185',
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '24px',
          height: '100%',
          borderRadius: '50%',
          border: '0.5px solid #e5c185',
          opacity: 0.4,
        }}
      />

      {/* Parallels */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '10px',
          borderRadius: '50%',
          borderTop: '1px solid #e5c185',
          top: '20px',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '10px',
          borderRadius: '50%',
          borderBottom: '1px solid #e5c185',
          bottom: '20px',
          opacity: 0.6,
        }}
      />
    </div>,
    // ImageResponse options
    {
      ...size,
    }
  );
}
