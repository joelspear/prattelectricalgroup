import { FAQItem } from "@/components/sections/FAQ";

export const residentialFAQs: FAQItem[] = [
  {
    question: "How much does an electrician cost in Adelaide?",
    answer:
      "Electrician costs in Adelaide vary depending on the job. A typical callout fee ranges from $80-$120, with hourly rates between $80-$100. Simple jobs like installing a power point might cost $150-$250, while a switchboard upgrade can range from $1,500-$4,000. We provide free, no-obligation quotes for all jobs so you know the cost upfront.",
  },
  {
    question: "Do I need a safety switch (RCD)?",
    answer:
      "Yes, safety switches are mandatory in all South Australian homes for power and lighting circuits. If your home was built before 1991, you may not have adequate safety switch protection. We recommend having your switchboard inspected to ensure compliance with current safety standards. Safety switches can literally save lives by cutting power in milliseconds when a fault is detected.",
  },
  {
    question: "Can you work on weekends or after hours?",
    answer:
      "Yes! We understand that electrical issues don't always happen during business hours. We offer 24/7 emergency service for urgent issues, and can schedule routine work for times that suit your schedule, including weekends. After-hours work may attract additional fees.",
  },
  {
    question: "How quickly can you come out?",
    answer:
      "For emergencies, we aim to respond within 1 hour in the Adelaide metro area. For non-urgent work, we can usually schedule an appointment within 1-2 business days. Same-day service is often available for urgent but non-emergency issues.",
  },
  {
    question: "Do you provide certificates of compliance?",
    answer:
      "Yes, all electrical work we perform comes with a Certificate of Compliance (CoC) as required by South Australian law. This certificate confirms the work meets Australian Standards and is essential for insurance purposes and property sales.",
  },
];

export const commercialFAQs: FAQItem[] = [
  {
    question: "Can you work outside business hours to minimise disruption?",
    answer:
      "Absolutely. We understand that electrical work during business hours can disrupt your operations. We regularly schedule work for evenings, weekends, and public holidays to minimise impact on your business. We'll work around your schedule to find the best time.",
  },
  {
    question: "Do you handle large commercial projects?",
    answer:
      "Yes, we have experience with projects ranging from small office fit-outs to large warehouse installations. We've built relationships with Adelaide's largest electrical suppliers, allowing us to handle projects of any scale. We can provide references from similar projects on request.",
  },
  {
    question: "What's your emergency response time?",
    answer:
      "For commercial emergencies, we aim to respond within 1 hour in the Adelaide metro area, 24/7. We understand that electrical issues can shut down your business and cost you money every minute, so we prioritise commercial emergency calls.",
  },
  {
    question: "Are you properly insured for commercial work?",
    answer:
      "Yes, we carry comprehensive public liability insurance and professional indemnity insurance suitable for commercial projects. We can provide certificates of currency on request. All our electricians are fully licensed and background-checked.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes, we offer ongoing maintenance contracts for commercial clients. Regular maintenance helps prevent unexpected breakdowns, ensures compliance with safety regulations, and can extend the life of your electrical systems. Contact us to discuss a maintenance plan tailored to your needs.",
  },
];

export const solarFAQs: FAQItem[] = [
  {
    question: "How much does solar cost in Adelaide?",
    answer:
      "A typical 6.6kW residential solar system in Adelaide costs between $4,000-$8,000 after rebates. Larger systems (10kW+) range from $8,000-$15,000. The exact cost depends on panel quality, inverter type, roof complexity, and any additional electrical work required. We provide detailed, transparent quotes with no hidden costs.",
  },
  {
    question: "What size solar system do I need?",
    answer:
      "The right size depends on your electricity usage, roof space, and budget. As a guide: a 6.6kW system suits average households using 20-25kWh/day, while larger families or those working from home may benefit from 10kW+. We analyse your electricity bills to recommend the optimal size for your situation.",
  },
  {
    question: "What rebates are available in South Australia?",
    answer:
      "The main rebate is the federal Small-scale Technology Certificate (STC) rebate, which provides an upfront discount of $2,000-$4,000 depending on system size. Adelaide also has some of Australia's best feed-in tariff rates. We handle all rebate paperwork and ensure you receive every dollar you're entitled to.",
  },
  {
    question: "How long does solar installation take?",
    answer:
      "A standard residential installation takes 1 day. Larger or more complex systems may take 2-3 days. After installation, SA Power Networks typically approves grid connection within 10 business days. We handle all paperwork and liaise with SAPN on your behalf.",
  },
  {
    question: "What brands do you install?",
    answer:
      "We install premium solar panels from brands like Jinko, Trina, LONGi, and Q Cells, paired with quality inverters from Fronius, SMA, Sungrow, and Enphase. For batteries, we install Tesla Powerwall, Sungrow, and BYD. We only use products backed by solid warranties and proven performance.",
  },
  {
    question: "Is my roof suitable for solar?",
    answer:
      "Most roofs in Adelaide are suitable for solar. Ideal conditions are a north-facing roof with minimal shading, but east and west-facing panels also perform well. We conduct a free site assessment to evaluate your roof's suitability and design a system that maximises your energy production.",
  },
];

export const generalFAQs: FAQItem[] = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, all our electricians are fully licensed in South Australia and we carry comprehensive public liability insurance. We're also Clean Energy Council (CEC) accredited for solar installations, which is required to install systems that qualify for government rebates.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we provide free, no-obligation quotes for all work. For most jobs, we can provide an accurate quote over the phone or via email. For larger or more complex projects, we'll arrange a free site visit to assess the work required.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service the entire Adelaide metropolitan area, with a focus on the southern suburbs including Christies Beach, Flagstaff Hill, Hallett Cove, Happy Valley, Morphett Vale, and surrounding areas. We also service regional South Australia for larger projects.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfer, and all major credit cards including Visa and Mastercard. For larger projects, we can arrange progress payments or finance options. Payment is due on completion unless otherwise arranged.",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "Yes, all our workmanship is guaranteed. We also ensure that all products we install come with manufacturer warranties. If any issue arises from our work, we'll return to fix it at no additional cost.",
  },
];

const allFAQs = {
  residential: residentialFAQs,
  commercial: commercialFAQs,
  solar: solarFAQs,
  general: generalFAQs,
};

export default allFAQs;
