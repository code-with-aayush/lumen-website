// src/app/layout.tsx
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
// Side-effect import: validates env vars at build + first request.
import "@/lib/env";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { UtmCapture } from "@/components/UtmCapture";
import { Analytics } from "@/components/Analytics";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";

const ChatWidget = dynamic(
  () => import("@/components/ChatWidget").then((m) => ({ default: m.ChatWidget })),
  { ssr: false }
);

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Medical Aesthetics, West Village NYC`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://lumenaesthetics.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumenaesthetics.com",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Medical Aesthetics, West Village NYC`,
    description: SITE_DESCRIPTION,
    // images auto-registered by src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Medical Aesthetics, West Village NYC`,
    description: SITE_DESCRIPTION,
    // images auto-registered by the same opengraph-image file
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <SmoothScroll />
        <UtmCapture />
        <Analytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-champagne focus:text-ink-deep focus:px-4 focus:py-2 focus:text-sm focus:font-sans"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
