import { FAQItem } from "@/components/sections/FAQ";

export interface FAQCategory {
  id: string;
  name: string;
  faqs: FAQItem[];
}

// Solar & Battery FAQs
export const solarFAQs: FAQItem[] = [
  {
    question: "How much does solar cost in Adelaide?",
    answer:
      "A 6.6kW system typically costs $5,500-$8,500 installed after rebates. A 10kW system costs $7,500-$10,500. Prices vary based on panel quality and roof complexity.",
    link: { text: "Get a quote", href: "/contact" },
  },
  {
    question: "What size solar system do I need?",
    answer:
      "Most Adelaide households do well with a 6.6kW system. For larger families or homes with pools/EVs, consider 10kW+. We assess your usage and recommend the right size.",
    link: { text: "Try our calculator", href: "/solar-calculator" },
  },
  {
    question: "How long does solar installation take?",
    answer:
      "Most residential installations are completed in one day. Commercial systems may take 2-5 days depending on size. Grid connection approval from SA Power Networks typically takes 2-4 weeks.",
  },
  {
    question: "What rebates are available for solar in SA?",
    answer:
      "The federal STC rebate reduces costs by $2,000-$4,000 depending on system size. Battery storage is eligible for up to $372/kWh under the Cheaper Home Batteries Program.",
  },
  {
    question: "What's the payback period for solar in Adelaide?",
    answer:
      "Typically 3-5 years for residential systems. Adelaide's high electricity prices and abundant sunshine make solar highly cost-effective.",
    link: { text: "Calculate your savings", href: "/solar-calculator" },
  },
  {
    question: "Do you install Tesla Powerwall?",
    answer:
      "Yes, we're certified Tesla Powerwall installers. The Powerwall 3 (13.5kWh) costs approximately $12,000-$15,000 installed. We also install Sungrow, BYD, and other quality batteries.",
  },
  {
    question: "What's a solar feed-in tariff?",
    answer:
      "It's the rate your energy retailer pays for excess solar you export to the grid. In SA, rates range from 4-12c/kWh depending on your retailer and plan.",
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
    question: "How much does an electrician cost per hour in Adelaide?",
    answer:
      "Rates typically range from $80-$120/hour plus a call-out fee. We provide upfront quotes so you know the total cost before work begins.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we provide free quotes for all residential and commercial work. Call 0406 494 941 or fill out our online form.",
    link: { text: "Get a free quote", href: "/contact" },
  },
  {
    question: "When should I upgrade my switchboard?",
    answer:
      "If your switchboard has ceramic fuses (not circuit breakers), is over 25 years old, or you're adding air conditioning/solar, it likely needs upgrading. Signs include frequently tripping circuits or burning smells.",
  },
  {
    question: "Do I need a safety switch?",
    answer:
      "SA regulations require safety switches (RCDs) on power and lighting circuits in all homes. If your home doesn't have them, we strongly recommend upgrading — they save lives.",
  },
  {
    question: "Can you install ceiling fans?",
    answer:
      "Yes, ceiling fan installation is one of our most common jobs. Cost is typically $150-$300 per fan, depending on wiring requirements.",
  },
  {
    question: "Do you work on weekends?",
    answer:
      "We can arrange weekend appointments for an additional fee. Emergency services are available 24/7.",
  },
  {
    question: "How quickly can you come out?",
    answer:
      "For emergencies, we aim to respond within 1 hour in the Adelaide metro area. For non-urgent work, we can usually schedule an appointment within 1-2 business days.",
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
      "Yes, we offer ongoing maintenance agreements for commercial clients including regular inspections, emergency priority response, and preventive maintenance.",
    link: { text: "Learn about maintenance plans", href: "/maintenance" },
  },
  {
    question: "Are you properly insured for commercial work?",
    answer:
      "Yes, we carry comprehensive public liability insurance and professional indemnity insurance suitable for commercial projects. We can provide certificates of currency on request.",
  },
];

// Pricing & Payment FAQs
export const pricingFAQs: FAQItem[] = [
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we partner with finance providers offering interest-free options for solar and larger electrical projects.",
    link: { text: "Learn about finance", href: "/finance" },
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer, credit/debit cards, and cash. Payment plans available for qualifying projects.",
  },
  {
    question: "Are your prices GST inclusive?",
    answer: "All quoted prices include GST unless otherwise stated.",
  },
];

// Emergency Services FAQs
export const emergencyFAQs: FAQItem[] = [
  {
    question: "Do you offer 24/7 emergency services?",
    answer:
      "Yes, we're available 24/7 for genuine electrical emergencies including power outages, sparking outlets, burning smells, and safety hazards.",
    link: { text: "Emergency page", href: "/emergency" },
  },
  {
    question: "What's your emergency response time?",
    answer:
      "We aim to respond within 1 hour for Adelaide metro emergencies. Call 0406 494 941 immediately for urgent situations.",
  },
  {
    question: "What should I do if I smell burning from an outlet?",
    answer:
      "Turn off power at the switchboard immediately, do not use the outlet, and call us right away. This could indicate a serious fire hazard.",
  },
];

// General FAQs
export const generalFAQs: FAQItem[] = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, all our electricians are fully licensed in South Australia and we carry comprehensive public liability insurance. We're also CEC accredited for solar installations.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service the entire Adelaide metropolitan area, with a focus on the southern suburbs including Christie's Beach, Flagstaff Hill, Hallett Cove, Happy Valley, Morphett Vale, and surrounding areas.",
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
  { id: "pricing", name: "Pricing & Payments", faqs: pricingFAQs },
  { id: "emergency", name: "Emergency Services", faqs: emergencyFAQs },
];

// Combine all FAQs for "All Questions" view
export const allFAQsList: FAQItem[] = [
  ...solarFAQs,
  ...residentialFAQs,
  ...commercialFAQs,
  ...pricingFAQs,
  ...emergencyFAQs,
  ...generalFAQs,
];

const allFAQs = {
  residential: residentialFAQs,
  commercial: commercialFAQs,
  solar: solarFAQs,
  general: generalFAQs,
  pricing: pricingFAQs,
  emergency: emergencyFAQs,
};

export default allFAQs;
