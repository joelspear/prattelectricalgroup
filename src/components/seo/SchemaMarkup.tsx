interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  services: string[];
  catalogName: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  services,
  catalogName,
}: ServiceSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Electrician",
      name: "Pratt Electrical Group",
      url: "https://www.prattelectricalgroup.com",
    },
    areaServed: { "@type": "State", name: "South Australia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: catalogName,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

const SchemaMarkup = { ServiceSchema, FAQSchema };
export default SchemaMarkup;
