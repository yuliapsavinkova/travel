'use client';

import ErrorView from '../components/ErrorView';
import '../styles.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="global-error-body">
        <ErrorView

          error={error}
          reset={reset}
          subtitle="Critical Error"
          title="Something Went Wrong"
          message="An unexpected critical error occurred. Please try reloading or check back in a few moments."
        />
      </body>
    </html>
  );
}

