import { Metadata } from "next";
import { landingPages } from "@/data/landingPages";
import { ThankYouPageTemplate } from "@/components/landing/ThankYouPage";

const data = landingPages.battery;

export const metadata: Metadata = {
  title: "Thank You | Battery Quote | Pratt Electrical Group",
  robots: { index: false, follow: false },
};

export default function BatteryThankYouPage() {
  return <ThankYouPageTemplate data={data} />;
}
