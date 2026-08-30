import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container text-center section-margin" style={{ padding: 'var(--s-9) 0' }}>
      <div className="text-center">
        <span className="sub-header" style={{ color: 'var(--c-gold)' }}>
          404 Error
        </span>
        <h1 className="display-title" style={{ marginTop: 'var(--s-4)' }}>
          Page Not Found
        </h1>
        <p
          className="hero-paragraph"
          style={{ maxWidth: '500px', margin: 'var(--s-4) auto var(--s-6)' }}
        >
          The page you are looking for might have been moved or does not exist.
        </p>
        <div>
          <Link href="/" className="btn-gold">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

