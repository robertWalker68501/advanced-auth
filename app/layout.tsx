import { ReactNode } from 'react';

import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Public_Sans,
  JetBrains_Mono,
} from 'next/font/google';

import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

const jetbrainsMonoHeading = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-heading',
});

const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Advanced Auth',
  description: 'Advanced Auth using Better-Auth and Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        publicSans.variable,
        jetbrainsMonoHeading.variable
      )}
    >
      <body className='dark'>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
