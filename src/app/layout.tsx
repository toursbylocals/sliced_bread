import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mountain Soul",
  description: "The Pure Essence of Nature"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="header min-h-[280px] mb-8">
          <div className="container min-h-[280px] px-4 mx-auto flex items-center max-w-[1200px]">
            <h1 className="text-5xl text-primary italic page-title">Mountain Soul</h1>
          </div>
        </section>
        {children}
      </body>
    </html>
  );
}
