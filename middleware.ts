import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  // 1. Check custom cookie if user manually switched locale
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // 2. Parse Accept-Language header
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    return matchLocale(languages, locales as unknown as string[], defaultLocale);
  } catch (error) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already contains any supported locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const redirectUrl = new URL(
      `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}${request.nextUrl.search}`,
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
