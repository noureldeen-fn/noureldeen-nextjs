'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full p-8 rounded-2xl border border-surface-card-border bg-surface-card shadow-lg">
        <h2 className="text-xl font-bold text-text-primary mb-3 font-heading">
          Something went wrong
        </h2>
        <p className="text-sm text-text-muted mb-6 font-body">
          An unexpected error occurred while loading this section.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-xl bg-brand-cta hover:bg-brand-cta-hover text-white font-semibold text-sm shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
