import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "./I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Proaño - Full Stack Developer",
  description: "Portfolio of David Proaño, Full Stack Developer specializing in modern web technologies, React, Next.js, and Node.js",
  keywords: "David Proaño, Full Stack Developer, React, Next.js, Node.js, TypeScript, Portfolio",
  authors: [{ name: "David Proaño" }],
  openGraph: {
    title: "David Proaño - Full Stack Developer",
    description: "Portfolio of David Proaño, Full Stack Developer specializing in modern web technologies",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#1e1b4b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
