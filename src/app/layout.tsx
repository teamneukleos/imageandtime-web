import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from './components/navbar';
import NavbarGlow from './components/navbarglow';
import Footer from './components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
});

export const metadata: Metadata = {
  title: 'imageandtime',
  description: 'Portfolio website of Oluwatosin, a passionate frontend developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`
          ${poppins.className}
          bg-white text-gray-900
          dark:bg-[#0f172a] dark:text-gray-100
          transition-colors duration-300
        `}
      >
        <Navbar />
        <NavbarGlow />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}