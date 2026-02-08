import { Metadata } from "next";
import { landingPages } from "@/data/landingPages";
import { ThankYouPageTemplate } from "@/components/landing/ThankYouPage";

const data = landingPages.electrical;

export const metadata: Metadata = {
  title: "Thank You | Electrical Quote | Pratt Electrical Group",
  robots: { index: false, follow: false },
};

export default function ElectricalThankYouPage() {
  return <ThankYouPageTemplate data={data} />;
}
