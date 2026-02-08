import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Solar Finance Options Adelaide | Payment Plans | Pratt Electrical Group",
  description:
    "Flexible finance options for solar installation in Adelaide. Interest-free payment plans available. Make solar affordable with Pratt Electrical Group.",
  openGraph: {
    title:
      "Solar Finance Options Adelaide | Payment Plans | Pratt Electrical Group",
    description:
      "Flexible finance options for solar installation in Adelaide. Interest-free payment plans available. Make solar affordable with Pratt Electrical Group.",
    url: "https://www.prattelectricalgroup.com/finance",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Solar Finance Options Adelaide | Payment Plans | Pratt Electrical Group",
    description:
      "Flexible finance options for solar installation in Adelaide. Interest-free payment plans available.",
  },
};

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
