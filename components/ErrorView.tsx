'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export interface ErrorViewProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  subtitle?: string;
  message?: string;
  showHomeLink?: boolean;
}

/**
 * Reusable error presentation view shared between segment error boundaries (error.tsx)
 * and root error boundaries (global-error.tsx).
 */
export default function ErrorView({
  error,
  reset,
  title = 'Something Went Wrong',
  subtitle = 'Error',
  message = 'An unexpected error occurred while loading this page. Please try again or return home.',
  showHomeLink = true,
}: ErrorViewProps) {
  useEffect(() => {
    // Log error details for diagnostics
    console.error('[Sitter Journey Error Boundary]', error);
  }, [error]);

  return (
    <main className="container text-center section-margin error-view-wrapper">
      <div className="error-view-card">
        <span className="sub-header">{subtitle}</span>
        <h1 className="display-title display-title-md error-view-title">{title}</h1>
        <p className="error-view-description">{message}</p>

        <div className="error-view-actions">
          <button onClick={() => reset()} type="button" className="btn-gold">
            Try Again
          </button>
          {showHomeLink && (
            <Link href="/" className="secondary-btn">
              Return Home
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

