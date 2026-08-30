import Link from 'next/link';
import { ArrowLeftIcon } from './Icons';

interface ReturnButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function ReturnButton({
  href,
  label = 'Return to Blog',
  className = '',
}: ReturnButtonProps) {
  let displayLabel = label;
  if (/^back to\s+/i.test(displayLabel)) {
    displayLabel = displayLabel.replace(/^back to\s+/i, 'Return to ');
  } else if (!/^return to\s+/i.test(displayLabel)) {
    displayLabel = `Return to ${displayLabel}`;
  }

  return (
    <Link href={href} className={`btn-return ${className}`} aria-label={displayLabel}>
      <ArrowLeftIcon size={12} className="btn-return-icon" />
      <span>{displayLabel}</span>
    </Link>
  );
}
