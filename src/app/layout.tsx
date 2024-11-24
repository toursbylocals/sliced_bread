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
        <section className="container px-4 mx-auto">
          <h1 className="text-5xl">Mountain Soul</h1>
        </section>
        {children}
      </body>
    </html>
  );
}
