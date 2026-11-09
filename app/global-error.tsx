'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', fontFamily: 'var(--f-main)' }}>
        <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
            An unexpected error occurred. Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            type="button"
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--r-pill)',
              backgroundColor: 'var(--color-brand-primary)',
              color: 'var(--color-text-primary-inverse)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
