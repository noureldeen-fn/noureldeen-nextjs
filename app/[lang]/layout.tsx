import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { spaceGrotesk, inter, cairo } from '@/lib/fonts';
import { getDictionary, Locale } from '@/lib/dictionaries';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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

  const siteUrl = 'https://noureldeen.dev';
  const canonicalUrl = `${siteUrl}/${lang}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.title}`,
    },
    description: dict.meta.description,
    keywords: [
      'Frontend Architect',
      'Next.js',
      'React',
      'TypeScript',
      'Design Systems',
      'Tailwind CSS',
      'Performance Engineering',
      'RTL Architecture',
      'Cairo Font',
      'Space Grotesk',
    ],
    authors: [{ name: 'Noureldeen', url: siteUrl }],
    creator: 'Noureldeen',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `${siteUrl}/en`,
        'ar-EG': `${siteUrl}/ar`,
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

  // Font Optimization: Cairo for AR, Space Grotesk + Inter for EN
  const fontVariables = isArabic
    ? `${cairo.variable} font-arabic`
    : `${spaceGrotesk.variable} ${inter.variable} font-sans`;

  return (
    <html lang={lang} dir={dir} className={fontVariables} suppressHydrationWarning>
      <body className="bg-bg-main text-text-primary antialiased selection:bg-brand-cta selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-col min-h-screen">
            <Navbar lang={lang} dict={dict} />
            <main className="flex-grow">{children}</main>
            <Footer dict={dict} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
