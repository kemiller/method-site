import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: {
    default: 'Method — Recipes that work with your brain',
    template: '%s | Method',
  },
  description:
    'A recipe app designed for people with ADHD and executive dysfunction. Structured cooking workflows instead of walls of text.',
  metadataBase: new URL('https://method.cooking'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
