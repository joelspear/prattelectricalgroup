import { Metadata } from "next";
import SuburbLandingTemplate from "@/components/suburbs/SuburbLandingTemplate";
import { suburbLandingPages } from "@/data/suburbLandingPages";

const data = suburbLandingPages["christies-beach"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://www.prattelectricalgroup.com/electrician-christies-beach`,
  },
  twitter: {
    card: "summary_large_image",
    title: data.metaTitle,
    description: data.metaDescription,
  },
};

export default function ElectricianChristiesBeachPage() {
  return <SuburbLandingTemplate data={data} />;
}
