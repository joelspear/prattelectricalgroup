import { Metadata } from "next";
import { landingPages } from "@/data/landingPages";
import { LandingPageTemplate } from "@/components/landing/LandingPageTemplate";

const data = landingPages.solar;

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  robots: { index: false, follow: false },
};

export default function SolarLandingPage() {
  return <LandingPageTemplate data={data} />;
}
