import { Metadata } from "next";
import { notFound } from "next/navigation";
import SuburbPageContent from "./SuburbPageContent";
import { suburbsData, suburbSlugs } from "@/data/suburbs";

export function generateStaticParams() {
  return suburbSlugs.map((suburb) => ({
    suburb: suburb,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { suburb: string };
}): Metadata {
  const suburb = suburbsData[params.suburb];
  if (!suburb) {
    return {
      title: "Suburb Not Found",
    };
  }

  return {
    title: `Electrician ${suburb.name} | Pratt Electrical Group`,
    description: `Licensed electrician serving ${suburb.name} ${suburb.postcode}. Solar installation, switchboard upgrades, electrical services. Call 0474 320 534.`,
  };
}

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const suburb = suburbsData[params.suburb];

  if (!suburb) {
    notFound();
  }

  return <SuburbPageContent suburb={suburb} />;
}
