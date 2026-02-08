// Site-wide data and constants for Pratt Electrical Group

export const siteConfig = {
  name: "Pratt Electrical Group",
  shortName: "Pratt Electrical",
  tagline: "South Australia's Trusted Electrical & Solar Experts",
  description:
    "South Australia's trusted electrical and solar experts. Residential, commercial & solar installation. SAA accredited. Free quotes.",
  url: "https://www.prattelectricalgroup.com",
};

export const contactInfo = {
  phone: "0474 320 534",
  phoneFormatted: "0474 320 534",
  phoneTel: "tel:+61474320534",
  email: "sales@prattelectricalgroup.com",
  address: {
    street: "18 Davis Ave",
    suburb: "Christies Beach",
    state: "SA",
    postcode: "5165",
    full: "18 Davis Ave, Christies Beach SA 5165",
  },
  owner: "James Pratt",
  businessName: "Pratt Electrical Group Pty Ltd",
  founded: 2020,
  hours: "Mon-Fri 7am-5pm",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/prattelectricalgroup",
  instagram: "https://www.instagram.com/prattelectricalgroup",
  googleMaps:
    "https://www.google.com/maps/place/Adelaide+SA,+Australia",
};

export const credentials = {
  saaAccredited: true,
  saaCompliant: true,
  fullyInsured: true,
  backgroundChecked: true,
  licensedElectricians: true,
};

export const trustStats = [
  { value: "5+", label: "Years Serving South Australia" },
  { value: "500+", label: "Projects Completed" },
  { value: "SAA", label: "Accredited Installers" },
  { value: "100%", label: "Customer Satisfaction" },
];

export const services = {
  residential: {
    title: "Residential Electrical",
    slug: "residential",
    shortDescription:
      "Expert electrical services for your home. From small repairs to complete rewires.",
    services: [
      "Switchboard Upgrades",
      "Lighting Installation",
      "Power Points & GPOs",
      "Safety Switches (RCDs)",
      "Smoke Alarms",
      "Rewiring",
      "New Home Builds",
      "Extensions & Renovations",
      "Home Automation",
      "EV Charger Installation",
      "General Maintenance & Repairs",
    ],
  },
  commercial: {
    title: "Commercial Electrical",
    slug: "commercial",
    shortDescription:
      "Reliable electrical solutions for businesses across SA. Office fit-outs to industrial.",
    services: [
      "Office & Retail Fit-Outs",
      "LED Lighting Upgrades",
      "Data & Communications Cabling",
      "Security System Installation",
      "Air Conditioning Electrical",
      "Electrical Troubleshooting",
      "Standby Generator Installation",
      "Warehouse & Industrial",
      "Maintenance Contracts",
    ],
  },
  solar: {
    title: "Solar & Battery",
    slug: "solar",
    shortDescription:
      "SAA accredited solar installation. Cut your electricity bills with quality solar systems.",
    services: [
      "Residential Solar Systems",
      "Commercial Solar",
      "Battery Storage",
      "Solar System Upgrades",
      "Maintenance & Repairs",
      "SA Power Networks Connection",
    ],
  },
};

export const serviceAreas = [
  "All across South Australia",
];

export const testimonials = [
  {
    id: 1,
    name: "Shae Nielsen",
    location: "Adelaide",
    rating: 5,
    text: "A fantastic team! Great customer support from beginning to end. Professional, knowledgeable, and the quality of work is outstanding. Highly recommend Pratt Electrical for any electrical needs.",
    service: "Residential",
  },
  {
    id: 2,
    name: "Scott D.",
    location: "SA",
    rating: 5,
    text: "Professional, affordable and on time. Couldn't ask for more from a solar installation. The team explained everything clearly and the system is performing exactly as promised.",
    service: "Solar",
    source: "YourSolarQuotes",
  },
  {
    id: 3,
    name: "Michael R.",
    location: "Adelaide",
    rating: 5,
    text: "Called about a switchboard issue and James had everything sorted quickly. Fair pricing and excellent communication throughout. Highly recommend.",
    service: "Residential",
  },
  {
    id: 4,
    name: "Sarah T.",
    location: "Flagstaff Hill",
    rating: 5,
    text: "Had our entire house rewired during renovation. The team was professional, clean, and completed the job on schedule. Very happy with the result.",
    service: "Residential",
  },
  {
    id: 5,
    name: "David M.",
    location: "Noarlunga",
    rating: 5,
    text: "Pratt Electrical installed a solar system for our business. The process was seamless from quote to installation. Already seeing significant savings on power bills.",
    service: "Commercial Solar",
  },
];

export const whyChooseUs = [
  {
    title: "Fast-Growing Local Team",
    description:
      "Built on reputation, not advertising. Our rapid growth since 2020 is proof of quality workmanship.",
    icon: "TrendingUp",
  },
  {
    title: "Quality Over Quantity",
    description:
      "We do it right the first time. Every job is completed to the highest standards.",
    icon: "Award",
  },
  {
    title: "Reliable & On Time",
    description:
      "We show up when we say we will and complete every job on schedule.",
    icon: "Clock",
  },
  {
    title: "SAA Accredited",
    description:
      "Standards Australia accredited installers. Properly certified for all solar and electrical work.",
    icon: "ShieldCheck",
  },
];

export const fuelMySocial = {
  name: "Fuel My Social",
  contact: {
    name: "Joel Spear",
    email: "joel@fuelmysocial.com.au",
    phone: "+61 451 245 589",
  },
  url: "https://fuelmysocial.com.au",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Residential Electrical", href: "/residential" },
      { label: "Commercial Electrical", href: "/commercial" },
      { label: "Solar & Battery", href: "/solar" },
      { label: "EV Chargers", href: "/ev-chargers" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Finance Options", href: "/finance" },
      { label: "FAQ", href: "/faq" },
      { label: "Maintenance Plans", href: "/maintenance" },
      { label: "Referral Program", href: "/referrals" },
    ],
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Residential Electrical", href: "/residential" },
    { label: "Commercial Electrical", href: "/commercial" },
    { label: "Solar & Battery", href: "/solar" },
    { label: "EV Chargers", href: "/ev-chargers" },
  ],
  resources: [
    { label: "Finance Options", href: "/finance" },
    { label: "FAQ", href: "/faq" },
    { label: "Service Areas", href: "/service-areas" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};
