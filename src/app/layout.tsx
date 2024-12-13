import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type React from 'react';
import './globals.css';
import { DrinkInfo } from '@/components/DrinkInfo';

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
        <main>
          <div className="font-sans min-h-screen flex justify-center items-center bg-gray-50 py-10">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 px-6">
              {/* Left Column */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                <DrinkInfo />
              </div>

              {/* Right Column (Form) */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
