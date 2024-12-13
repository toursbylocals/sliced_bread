import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type React from 'react';
import './globals.css';
import { Header } from '@/components/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Spicy Manhattans!',
  description: 'Order spicy manhattans!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} 
      ${geistMono.variable}`}
      >
        <div
          className="font-sans grid grid-rows-[20px_1fr_20px] 
      items-center 
      justify-items-center 
      min-h-screen 
      p-8 
      pb-20 
      gap-16 
      sm:p-20"
        >
          <main className="flex flex-col row-start-2 items-center">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
