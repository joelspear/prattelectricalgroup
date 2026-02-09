import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "EV Charger Installation Adelaide | Home & Commercial | Pratt Electrical",
  description:
    "Professional EV charger installation across Adelaide & SA. Home and commercial charging stations. Licensed electricians, quality workmanship. Get your free quote today.",
  openGraph: {
    title:
      "EV Charger Installation Adelaide | Home & Commercial | Pratt Electrical",
    description:
      "Professional EV charger installation across Adelaide & SA. Home and commercial charging stations. Licensed electricians, quality workmanship. Get your free quote today.",
    url: "https://www.prattelectricalgroup.com/ev-chargers",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "EV Charger Installation Adelaide | Home & Commercial | Pratt Electrical",
    description:
      "Professional EV charger installation across Adelaide & SA. Home and commercial charging stations.",
  },
};

export default function EVChargersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
