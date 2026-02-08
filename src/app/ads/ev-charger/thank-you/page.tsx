import { Metadata } from "next";
import { landingPages } from "@/data/landingPages";
import { ThankYouPageTemplate } from "@/components/landing/ThankYouPage";

const data = landingPages["ev-charger"];

export const metadata: Metadata = {
  title: "Thank You | EV Charger Quote | Pratt Electrical Group",
  robots: { index: false, follow: false },
};

export default function EVChargerThankYouPage() {
  return <ThankYouPageTemplate data={data} />;
}
