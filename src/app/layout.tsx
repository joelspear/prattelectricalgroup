import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ChatBotWrapper } from "@/components/chat/ChatBotWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://prattelectrical.fuelmysocial.com.au"),
  title: {
    default: "Pratt Electrical Group | South Australia Electrician & Solar Installer",
    template: "%s | Pratt Electrical Group",
  },
  description:
    "South Australia's trusted electrical and solar experts. Residential, commercial & solar installation. SAA accredited. Free quotes. Call 0474 320 534.",
  keywords: [
    "electrician South Australia",
    "electrician Adelaide",
    "solar installer South Australia",
    "solar installer Adelaide",
    "commercial electrician SA",
    "residential electrician SA",
    "solar panels South Australia",
    "SAA accredited installer",
  ],
  authors: [{ name: "Pratt Electrical Group" }],
  creator: "Fuel My Social",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://prattelectrical.fuelmysocial.com.au",
    siteName: "Pratt Electrical Group",
    title: "Pratt Electrical Group | South Australia Electrician & Solar Installer",
    description:
      "South Australia's trusted electrical and solar experts. SAA accredited. Free quotes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pratt Electrical Group - South Australia's Trusted Electrical & Solar Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratt Electrical Group | South Australia Electrician & Solar Installer",
    description:
      "South Australia's trusted electrical and solar experts. SAA accredited.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        {/* Google Analytics placeholder - add your GA4 tracking ID */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body className="font-sans antialiased bg-neutral-light text-charcoal">
        {children}
        <ChatBotWrapper />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="698810e12ad2f7d213eba44e"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
