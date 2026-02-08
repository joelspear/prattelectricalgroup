import { Metadata } from "next";
import { landingPages } from "@/data/landingPages";
import { LandingPageTemplate } from "@/components/landing/LandingPageTemplate";

const data = landingPages.electrical;

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  robots: { index: false, follow: false },
};

export default function ElectricalLandingPage() {
  return <LandingPageTemplate data={data} />;
}
