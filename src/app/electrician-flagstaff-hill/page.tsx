import { Metadata } from "next";
import SuburbLandingTemplate from "@/components/suburbs/SuburbLandingTemplate";
import { suburbLandingPages } from "@/data/suburbLandingPages";

const data = suburbLandingPages["flagstaff-hill"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://www.prattelectricalgroup.com/electrician-flagstaff-hill`,
  },
  twitter: {
    card: "summary_large_image",
    title: data.metaTitle,
    description: data.metaDescription,
  },
};

export default function ElectricianFlagstaffHillPage() {
  return <SuburbLandingTemplate data={data} />;
}
