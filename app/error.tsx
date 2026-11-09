'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container text-center section-margin" style={{ padding: 'var(--s-9) 0' }}>
      <span className="sub-header">Error</span>
      <h2 className="display-title" style={{ marginTop: 'var(--s-4)' }}>
        Something Went Wrong
      </h2>
      <p
        style={{
          maxWidth: '500px',
          margin: 'var(--s-4) auto var(--s-6)',
          color: 'var(--color-text-secondary)',
          fontSize: '1.1rem',
          lineHeight: 1.6,
        }}
      >
        An unexpected error occurred while loading this section.
      </p>
      <button onClick={() => reset()} type="button" className="btn-gold">
        Try Again
      </button>
    </div>
  );
}
