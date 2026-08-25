import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anurrakti.com"),
  alternates: { canonical: "/" },
  title: {
    default: "One-of-One Sarees | ANURRAKTI",
    template: "%s | ANURRAKTI",
  },
  description:
    "ANURRAKTI is an Indian fashion house of one-of-one sarees—crafted once, remembered for a lifetime.",
  authors: [{ name: "ANURRAKTI", url: "https://www.anurrakti.com/about" }],
  creator: "ANURRAKTI",
  publisher: "ANURRAKTI",
  category: "Indian fashion and sarees",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "ANURRAKTI",
    title: "One-of-One Sarees | ANURRAKTI",
    description:
      "An Indian fashion house of one-of-one sarees—crafted once, remembered for a lifetime.",
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
    title: "One-of-One Sarees | ANURRAKTI",
    description:
      "An Indian fashion house of one-of-one sarees—crafted once, remembered for a lifetime.",
    images: ["/opengraph-image.png"],
  },
};

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.anurrakti.com/#organization",
      name: "ANURRAKTI",
      url: "https://www.anurrakti.com",
      description:
        "ANURRAKTI is an Indian fashion house of one-of-one sarees—crafted once, remembered for a lifetime.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.anurrakti.com/logos/anurrakti-stamp.png",
      },
      sameAs: ["https://www.instagram.com/anurrakti/"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer enquiries",
          telephone: "+91-88002-19663",
          url: "https://www.anurrakti.com/contact",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer enquiries",
          telephone: "+91-99587-04890",
          url: "https://www.anurrakti.com/contact",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.anurrakti.com/#website",
      url: "https://www.anurrakti.com",
      name: "ANURRAKTI",
      description:
        "An Indian fashion house of one-of-one sarees—crafted once, remembered for a lifetime.",
      inLanguage: "en-IN",
      publisher: { "@id": "https://www.anurrakti.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PMZQPFZH');`}
      </Script>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PMZQPFZH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <SiteFooter />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y243DNTB9B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Y243DNTB9B');
gtag('config', 'AW-18406520726');`}
        </Script>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
