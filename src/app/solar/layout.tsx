import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Installation South Australia | Solar Panels & Battery Storage",
  description:
    "SAA accredited solar installer in South Australia. Residential & commercial solar. Battery storage. SA Government rebates. Quality systems, quality installation.",
};

export default function SolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
