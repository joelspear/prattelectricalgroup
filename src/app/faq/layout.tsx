import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQ | Electrical & Solar Questions | Pratt Electrical Group Adelaide",
  description:
    "Common questions about electrical services, solar installation, battery storage & EV chargers in Adelaide. Expert answers from Pratt Electrical Group.",
  openGraph: {
    title:
      "FAQ | Electrical & Solar Questions | Pratt Electrical Group Adelaide",
    description:
      "Common questions about electrical services, solar installation, battery storage & EV chargers in Adelaide. Expert answers from Pratt Electrical Group.",
    url: "https://www.prattelectricalgroup.com/faq",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FAQ | Electrical & Solar Questions | Pratt Electrical Group Adelaide",
    description:
      "Common questions about electrical services, solar installation, battery storage & EV chargers in Adelaide.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
