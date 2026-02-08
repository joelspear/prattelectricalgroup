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

  const title = `Electrician ${suburb.name} | Local Electrical & Solar Services | Pratt Electrical Group`;
  const description = `Trusted electrician in ${suburb.name}, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.prattelectricalgroup.com/service-areas/${suburb.slug}`,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const suburb = suburbsData[params.suburb];

  if (!suburb) {
    notFound();
  }

  return <SuburbPageContent suburb={suburb} />;
}
