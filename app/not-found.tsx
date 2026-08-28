import Link from 'next/link';
import CommonDetail from '../components/CommonDetail';

export default function NotFound() {
  return (
    <div className="container text-center section-margin">
      <CommonDetail onBack="/" backLabel="Back to Home" image="" title="404 - Not Found">
        <div className="text-center" style={{ padding: 'var(--s-8) 0' }}>
          <h1 className="display-title">Page Not Found</h1>
          <p className="hero-paragraph">
            The page you are looking for might have been moved or does not exist.
          </p>
          <div style={{ marginTop: 'var(--s-6)' }}>
            <Link href="/" className="btn-gold">
              Return Home
            </Link>
          </div>
        </div>
      </CommonDetail>
    </div>
  );
}
