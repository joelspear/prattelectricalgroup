import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Service Areas | Electrician & Solar Across South Australia | Pratt Electrical",
  description:
    "Pratt Electrical Group services all of South Australia including Adelaide CBD, southern suburbs, Adelaide Hills & regional SA. Find your local electrician.",
  openGraph: {
    title:
      "Service Areas | Electrician & Solar Across South Australia | Pratt Electrical",
    description:
      "Pratt Electrical Group services all of South Australia including Adelaide CBD, southern suburbs, Adelaide Hills & regional SA. Find your local electrician.",
    url: "https://www.prattelectricalgroup.com/service-areas",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Service Areas | Electrician & Solar Across South Australia | Pratt Electrical",
    description:
      "Pratt Electrical Group services all of South Australia including Adelaide CBD, southern suburbs, Adelaide Hills & regional SA.",
  },
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
