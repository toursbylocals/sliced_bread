import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="header min-h-[280px] mb-8">
            <div className="container min-h-[280px] px-4 mx-auto items-center max-w-[1200px] flex justify-between">
              <h1 className="text-5xl text-primary italic page-title">Mountain Soul</h1>
              <ThemeSwitcher />
            </div>
          </section>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
