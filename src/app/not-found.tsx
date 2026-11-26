import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-screen items-center justify-center py-24">
      <div className="max-w-xl text-center">
        <span className="editorial-pill">404 // ROUTE NOT FOUND</span>
        <h1 className="mt-5 text-5xl font-bold text-[var(--text-primary)] md:text-7xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
          The route you requested does not exist or may have been relocated.
        </p>
        <Link href="/" className="button-primary mt-8">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to overview
        </Link>
      </div>
    </div>
  );
}
