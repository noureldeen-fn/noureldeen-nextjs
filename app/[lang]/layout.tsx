import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { Space_Grotesk, Inter, JetBrains_Mono, Cairo } from 'next/font/google';
import { getDictionary, Locale } from '@/lib/dictionaries';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700', '800'],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata(
  props: {
    params: Promise<{ lang: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    lang
  } = params;

  const dict = await getDictionary(lang);

  const siteUrl = 'https://www.noureldeen.me';
  const canonicalUrl = `${siteUrl}/${lang}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.title}`,
    },
    description: dict.meta.description,
    keywords: [
      'Software Quality Control Engineer',
      'SDET',
      'Test Automation',
      'Selenium',
      'Java',
      'TestNG',
      'API Testing',
      'Manual Testing',
      'Quality Assurance',
      'Frontend Engineering',
      'React',
      'Next.js',
      'TypeScript',
      'Performance Engineering',
    ],
    authors: [{ name: 'Noureldeen', url: siteUrl }],
    creator: 'Noureldeen',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `${siteUrl}/en`,
        'ar-EG': `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        'x-default': `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'ar' ? 'ar_EG' : 'en_US',
      url: canonicalUrl,
      title: dict.meta.ogTitle || dict.meta.title,
      description: dict.meta.ogDescription || dict.meta.description,
      siteName: 'Noureldeen Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      creator: '@noureldeen',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;

  const {
    lang
  } = params;

  const {
    children
  } = props;

  if (lang !== 'en' && lang !== 'ar') {
    notFound();
  }

  const isArabic = lang === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';
  const dict = await getDictionary(lang);

  // Font Optimization: Load Arabic fonts only for Arabic, Latin fonts only for English
  const fontVariables = isArabic
    ? `${cairo.variable} ${jetbrainsMono.variable} font-arabic`
    : `${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`;

  return (
    <html lang={lang} dir={dir} className={fontVariables} suppressHydrationWarning>
      <body className="bg-bg-main text-text-primary antialiased selection:bg-brand-cta selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar lang={lang} dict={{ nav: dict.nav, theme: dict.theme, locale: dict.locale }} />
            <main className="flex-grow">{children}</main>
            <Footer dict={{ footer: dict.footer }} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
