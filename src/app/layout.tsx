import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { AppErrorBoundary } from "./components/AppErrorBoundary/index";
import { AppHeader } from "./components/Layout/Header";
import { AppFooter } from "./components/Layout/Footer";

const norIBM = localFont({
  src: "../../public/assets/fonts/ibm-plex-sanas-arabic-normal.woff2",
  variable: "--font-ibm-normal",
  weight: "400",
});
const semiIbm = localFont({
  src: "../../public/assets/fonts/ibm-plex-sanas-arabic-med.woff2",
  variable: "--font-ibm-med",
  weight: "500",
});

export const metadata: Metadata = {
  title: "ثمانية",
  description:
    "ثمانية — نصنع الوثائقيات وننشر المقالات ونصدح عبر البودكاست، لنغيّر ثقافة الصحافة العربية.",
};

// tailwind: layout text appearance other
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`antialiased py-4 bg-background font-medium ${norIBM.variable} ${semiIbm.variable}`}
      >
        <AppErrorBoundary>
          <AppHeader />
        </AppErrorBoundary>
        <AppErrorBoundary>{children}</AppErrorBoundary>
        <AppErrorBoundary>
          <AppFooter />
        </AppErrorBoundary>
      </body>
    </html>
  );
}
