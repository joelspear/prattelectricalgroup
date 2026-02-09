import type { Metadata } from "next";
import { ChatWidget } from "@/components/chat/ChatWidget";
import "./globals.css";

const SITE_URL = "https://www.prattelectricalgroup.com";
const OG_IMAGE =
  "https://res.cloudinary.com/dhzl5ccct/image/upload/v1770464871/Pratt_Electrical_Group_Logo_dzfg0y.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Electrician Adelaide | Solar Installation SA | Pratt Electrical Group",
    template: "%s | Pratt Electrical Group",
  },
  description:
    "Adelaide's trusted electrician & SAA accredited solar installer. Residential & commercial electrical services, solar panels & battery storage. Free quotes. Call 0474 320 534.",
  keywords: [
    "electrician Adelaide",
    "electrician South Australia",
    "solar installer Adelaide",
    "solar installation Adelaide",
    "commercial electrician Adelaide",
    "residential electrician Adelaide",
    "solar panels Adelaide",
    "SAA accredited installer",
    "battery storage Adelaide",
    "EV charger installation Adelaide",
  ],
  authors: [{ name: "Pratt Electrical Group" }],
  creator: "Fuel My Social",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Pratt Electrical Group",
    title:
      "Electrician Adelaide | Solar Installation SA | Pratt Electrical Group",
    description:
      "Adelaide's trusted electrician & SAA accredited solar installer. Residential & commercial electrical services, solar panels & battery storage. Free quotes. Call 0474 320 534.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pratt Electrical Group - Adelaide's Trusted Electrical & Solar Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Electrician Adelaide | Solar Installation SA | Pratt Electrical Group",
    description:
      "Adelaide's trusted electrician & SAA accredited solar installer. Residential & commercial electrical services, solar panels & battery storage. Free quotes.",
    images: [OG_IMAGE],
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
    icon: [
      {
        url: "https://res.cloudinary.com/dhzl5ccct/image/upload/f_png,w_32,h_32,c_fit/v1770464871/Pratt_Electrical_Group_Logo_phhoux.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/dhzl5ccct/image/upload/f_png,w_16,h_16,c_fit/v1770464871/Pratt_Electrical_Group_Logo_phhoux.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple:
      "https://res.cloudinary.com/dhzl5ccct/image/upload/f_png,w_180,h_180,c_fit/v1770464871/Pratt_Electrical_Group_Logo_phhoux.png",
  },
  manifest: "/site.webmanifest",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Electrician", "LocalBusiness"],
  name: "Pratt Electrical Group",
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: "+61474320534",
  email: "info@prattelectricalgroup.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Davis Ave",
    addressLocality: "Christies Beach",
    addressRegion: "SA",
    postalCode: "5165",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-35.1265",
    longitude: "138.4986",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  areaServed: {
    "@type": "State",
    name: "South Australia",
  },
  priceRange: "$$",
  foundingDate: "2020",
  sameAs: [
    "https://www.facebook.com/Pratt-Electrical-Group-108210651308329/",
    "https://www.instagram.com/prattelectricalgroup/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-neutral-light text-charcoal">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
