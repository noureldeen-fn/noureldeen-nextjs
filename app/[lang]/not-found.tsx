import Link from 'next/link';
import { Home, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-brand-cta flex items-center justify-center text-white mb-6 shadow-glow">
        <Terminal className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-extrabold font-heading text-brand-cta mb-2">404</h1>
      <h2 className="text-2xl font-bold font-heading text-text-primary mb-4">
        Page Not Found / الصفحة غير موجودة
      </h2>
      <p className="text-text-muted max-w-md mb-8">
        The requested architectural resource could not be found or has been relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cta text-white font-semibold text-sm shadow-glow hover:bg-brand-cta-hover transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Home / العودة للرئيسية</span>
      </Link>
    </div>
  );
}
