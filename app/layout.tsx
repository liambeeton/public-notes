import type { ReactNode } from "react";
import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://notes.liambeeton.com"),
  title: {
    template: "%s | Liam's Public Notes",
    default: "Liam's Public Notes",
  },
  description:
    "A non-linear place full of ideas, research and work on software development, trail running, mountain biking, photography, and more.",
  openGraph: {
    type: "website",
    siteName: "Liam's Public Notes",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
