import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Root path '/' always redirects to the primary English route '/en'
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Check if pathname already contains any supported locale (/en or /ar)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const redirectUrl = new URL(
      `/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}${request.nextUrl.search}`,
      request.url
    );

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, static assets, etc.
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
