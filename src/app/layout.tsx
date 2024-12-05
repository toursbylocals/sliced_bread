import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import ReactLenis from 'lenis/react';
import OrderPopup from '@/components/organisms/OrderPopup';
import Footer from '@/components/organisms/Footer';

export const metadata: Metadata = {
  title: 'ChaBliss | Best Milk Tea',
  description: 'ChaBliss unofficial Website, the BEST milk tea in the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ReactLenis root>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ReactLenis>

        <OrderPopup />
      </body>
    </html>
  );
}
