type SectionDividerOverlap = 'none' | 'above' | 'below';

interface SectionDividerProps {
  overlap?: SectionDividerOverlap;
  className?: string;
}

export default function SectionDivider({ overlap = 'none', className = '' }: SectionDividerProps) {
  const overlapClass = overlap !== 'none' ? `section-divider--${overlap}` : '';

  return (
    <div className={`section-divider ${overlapClass} ${className}`.trim()} aria-hidden="true">
      <svg className="section-divider-wave" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          className="section-divider-wave-back"
          d="M0,48 C200,16 380,68 580,38 C780,8 980,64 1180,32 C1310,12 1390,28 1440,42 L1440,80 L0,80 Z"
        />
        <path
          className="section-divider-wave-front"
          d="M0,58 C220,28 400,74 610,46 C820,18 1000,70 1200,40 C1320,22 1395,38 1440,52 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
