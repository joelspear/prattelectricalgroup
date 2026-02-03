import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Installation Adelaide | Solar Panels & Battery Storage",
  description:
    "SAA accredited solar installer in Adelaide. Residential & commercial solar. Battery storage. SA Government rebates. Quality systems, quality installation.",
};

export default function SolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
