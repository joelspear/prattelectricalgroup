import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://prattelectrical.fuelmysocial.com.au"),
  title: {
    default: "Pratt Electrical Group | Adelaide Electrician & Solar Installer | 24/7 Service",
    template: "%s | Pratt Electrical Group",
  },
  description:
    "Adelaide's trusted electrical and solar experts. Residential, commercial & solar installation. CEC accredited. 24/7 emergency service. Free quotes. Call 0406 494 941.",
  keywords: [
    "electrician Adelaide",
    "solar installer Adelaide",
    "commercial electrician Adelaide",
    "residential electrician Adelaide",
    "24 hour electrician Adelaide",
    "emergency electrician Adelaide",
    "solar panels Adelaide",
    "CEC accredited installer",
  ],
  authors: [{ name: "Pratt Electrical Group" }],
  creator: "Fuel My Social",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://prattelectrical.fuelmysocial.com.au",
    siteName: "Pratt Electrical Group",
    title: "Pratt Electrical Group | Adelaide Electrician & Solar Installer",
    description:
      "Adelaide's trusted electrical and solar experts. CEC accredited. 24/7 emergency service. Free quotes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pratt Electrical Group - Adelaide's Trusted Electrical & Solar Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratt Electrical Group | Adelaide Electrician & Solar Installer",
    description:
      "Adelaide's trusted electrical and solar experts. CEC accredited. 24/7 emergency service.",
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
