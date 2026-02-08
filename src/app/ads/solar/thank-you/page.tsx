import { Metadata } from "next";
import { landingPages } from "@/data/landingPages";
import { ThankYouPageTemplate } from "@/components/landing/ThankYouPage";

const data = landingPages.solar;

export const metadata: Metadata = {
  title: "Thank You | Solar Quote | Pratt Electrical Group",
  robots: { index: false, follow: false },
};

export default function SolarThankYouPage() {
  return <ThankYouPageTemplate data={data} />;
}
