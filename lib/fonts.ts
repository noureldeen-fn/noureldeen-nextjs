import { Space_Grotesk, Inter, Cairo } from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});
