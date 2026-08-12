import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anurrakti.com"),
  title: {
    default: "ANURRAKTI",
    template: "%s | ANURRAKTI",
  },
  description:
    "ANURRAKTI is a contemporary Indian fashion house rooted in textile, emotion and enduring drape.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "ANURRAKTI",
    title: "ANURRAKTI",
    description:
      "Contemporary Indian sarees rooted in textile, emotion and enduring drape.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ANURRAKTI logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANURRAKTI",
    description:
      "Contemporary Indian sarees rooted in textile, emotion and enduring drape.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
