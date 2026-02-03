import { FAQItem } from "@/components/sections/FAQ";

export interface FAQCategory {
  id: string;
  name: string;
  faqs: FAQItem[];
}

// Solar & Battery FAQs
export const solarFAQs: FAQItem[] = [
  {
    question: "How does solar work?",
    answer:
      "Solar panels convert sunlight into electricity. The power is used in your home first, with any excess exported to the grid. Adding a battery lets you store solar power for use at night.",
  },
  {
    question: "What size solar system do I need?",
    answer:
      "The right system depends on your energy usage, roof space, and goals. We assess your needs and recommend the best option for your home.",
    link: { text: "Get a free quote", href: "/contact" },
  },
  {
    question: "How long does solar installation take?",
    answer:
      "Most residential installations are completed in one day. Commercial systems may take 2-5 days depending on size. Grid connection approval from SA Power Networks typically takes 2-4 weeks.",
  },
  {
    question: "Are there government rebates available?",
    answer:
      "Yes, government rebates are available that can significantly reduce the cost of your solar system. We handle all the paperwork and ensure you receive the maximum rebate you're entitled to.",
  },
  {
    question: "What's the payback period for solar in Adelaide?",
    answer:
      "Typically 3-5 years for residential systems. Adelaide's high electricity prices and abundant sunshine make solar highly cost-effective.",
    link: { text: "Get a quote", href: "/contact" },
  },
  {
    question: "Can I add a battery to my existing solar system?",
    answer:
      "Yes! We can retrofit batteries to most existing solar systems. We'll assess your current setup and recommend compatible options.",
  },
  {
    question: "What happens during a blackout with solar?",
    answer:
      "Standard solar systems shut down during blackouts for safety. With a battery system, you can maintain power to essential circuits during outages.",
  },
  {
    question: "Do I need council approval for solar panels?",
    answer:
      "Generally no, if panels don't overhang the roof or affect heritage considerations. We handle all SA Power Networks paperwork for grid connection.",
  },
];

// Residential Electrical FAQs
export const residentialFAQs: FAQItem[] = [
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we provide free quotes for all residential and commercial work. Call 0474 320 534 or fill out our online form.",
    link: { text: "Get a free quote", href: "/contact" },
  },
  {
    question: "When should I upgrade my switchboard?",
    answer:
      "If your switchboard has ceramic fuses (not circuit breakers), is over 25 years old, or you're adding air conditioning/solar, it likely needs upgrading.",
  },
  {
    question: "Do I need a safety switch?",
    answer:
      "SA regulations require safety switches (RCDs) on power and lighting circuits in all homes. If your home doesn't have them, we strongly recommend upgrading — they save lives.",
  },
  {
    question: "Do you work on weekends?",
    answer:
      "We can arrange weekend appointments for an additional fee. Contact us to discuss availability.",
  },
  {
    question: "How quickly can you come out?",
    answer:
      "For most jobs, we can usually schedule an appointment within 1-2 business days. Contact us and we'll find a time that works.",
  },
  {
    question: "Do you provide certificates of compliance?",
    answer:
      "Yes, all electrical work we perform comes with a Certificate of Compliance (CoC) as required by South Australian law.",
  },
];

// Commercial Electrical FAQs
export const commercialFAQs: FAQItem[] = [
  {
    question: "Do you handle large commercial projects?",
    answer:
      "Yes, we service everything from small retail fit-outs to large commercial solar installations. We've built relationships with Adelaide's largest electrical suppliers.",
  },
  {
    question: "Can you work outside business hours to avoid disruption?",
    answer:
      "Absolutely. We regularly complete commercial work after hours or on weekends to minimise business disruption.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes, we offer ongoing maintenance agreements for commercial clients including regular inspections, priority response, and preventive maintenance.",
    link: { text: "Learn about maintenance plans", href: "/maintenance" },
  },
  {
    question: "Are you properly insured for commercial work?",
    answer:
      "Yes, we carry comprehensive public liability insurance and professional indemnity insurance suitable for commercial projects. We can provide certificates of currency on request.",
  },
];

// General FAQs
export const generalFAQs: FAQItem[] = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, all our electricians are fully licensed in South Australia and we carry comprehensive public liability insurance. We're also SAA accredited for solar installations.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service all of South Australia, with a focus on the Adelaide metropolitan area.",
    link: { text: "View service areas", href: "/service-areas" },
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "Yes, all our workmanship is guaranteed. We also ensure that all products we install come with manufacturer warranties. If any issue arises from our work, we'll return to fix it at no additional cost.",
  },
];

// All FAQ Categories for the FAQ page
export const faqCategories: FAQCategory[] = [
  { id: "all", name: "All Questions", faqs: [] },
  { id: "solar", name: "Solar & Battery", faqs: solarFAQs },
  { id: "residential", name: "Residential Electrical", faqs: residentialFAQs },
  { id: "commercial", name: "Commercial Electrical", faqs: commercialFAQs },
];

// Combine all FAQs for "All Questions" view
export const allFAQsList: FAQItem[] = [
  ...solarFAQs,
  ...residentialFAQs,
  ...commercialFAQs,
  ...generalFAQs,
];

const allFAQs = {
  residential: residentialFAQs,
  commercial: commercialFAQs,
  solar: solarFAQs,
  general: generalFAQs,
};

export default allFAQs;
