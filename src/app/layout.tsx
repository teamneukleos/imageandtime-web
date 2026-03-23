import './globals.css';
import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import CursorGlow from './(public)/components/CursorGlow';
import SmoothScroll from './(public)/components/SmoothScroll';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'imageandtime',
  description: 'Image and Time, a creative agency based in Lagos, Nigeria.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans bg-white text-gray-900 dark:bg-[#0f172a] dark:text-gray-100 transition-colors duration-300`}>
        <CursorGlow />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}