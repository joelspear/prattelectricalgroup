import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Solar Installation Adelaide | SAA Accredited | Pratt Electrical Group",
  description:
    "SAA accredited solar installer in Adelaide. Residential & commercial solar panels, battery storage & system upgrades. Quality products, expert installation. Free quotes.",
  openGraph: {
    title:
      "Solar Installation Adelaide | SAA Accredited | Pratt Electrical Group",
    description:
      "SAA accredited solar installer in Adelaide. Residential & commercial solar panels, battery storage & system upgrades. Quality products, expert installation. Free quotes.",
    url: "https://www.prattelectricalgroup.com/solar",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Solar Installation Adelaide | SAA Accredited | Pratt Electrical Group",
    description:
      "SAA accredited solar installer in Adelaide. Residential & commercial solar panels, battery storage & system upgrades.",
  },
};

export default function SolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
