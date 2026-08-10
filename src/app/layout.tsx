import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ANURRAKTI",
    template: "%s | ANURRAKTI",
  },
  description:
    "ANURRAKTI is a contemporary Indian fashion house rooted in textile, emotion and enduring drape.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
