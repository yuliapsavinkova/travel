import Image from 'next/image';

interface SurfHorizonProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function SurfHorizon({
  src = '/yulia_surfing_1920_1080.JPG',
  alt = 'Yulia surfing an ocean wave',
  className = '',
}: SurfHorizonProps) {
  return (
    <div className={`surf-horizon ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="surf-image"
      />
      <svg
        className="surf-wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="surf-wave-back"
          d="M0,0 L1440,0 L1440,34 C1260,72 1080,14 880,42 C680,70 520,18 320,46 C180,64 70,50 0,32 Z"
        />
        <path
          className="surf-wave-front"
          d="M0,0 L1440,0 L1440,20 C1280,54 1100,4 900,30 C700,56 510,8 310,34 C165,52 65,38 0,22 Z"
        />
      </svg>
    </div>
  );
}
