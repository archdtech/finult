import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ULTIRO - Venture Building & Innovation Accelerator",
  description: "ULTIRO accelerates innovation and builds ambitious ventures in close partnership with visionary founders and organizations. Leveraging Nordic and international networks to scale impactful solutions globally.",
  keywords: ["ULTIRO", "venture building", "innovation accelerator", "Nordic startups", "entrepreneurship", "scaling solutions", "investment", "founders"],
  authors: [{ name: "ULTIRO Team" }],
  openGraph: {
    title: "ULTIRO - Venture Building & Innovation Accelerator",
    description: "We accelerate innovation and build ambitious ventures with visionary founders and organizations globally.",
    url: "https://ultiro.se",
    siteName: "ULTIRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ULTIRO - Venture Building & Innovation Accelerator",
    description: "We accelerate innovation and build ambitious ventures with visionary founders and organizations globally.",
  },
  other: {
    'twitter:image': 'https://ultiro.se/og-image.jpg',
    'og:image': 'https://ultiro.se/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Toaster />
      </body>
    </html>
  );
}
