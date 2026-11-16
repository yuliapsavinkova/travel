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
      <Image src={src} alt={alt} fill sizes="100vw" className="surf-image" />
    </div>
  );
}
