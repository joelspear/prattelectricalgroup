// Site-wide data and constants for Pratt Electrical Group

export const siteConfig = {
  name: "Pratt Electrical Group",
  shortName: "Pratt Electrical",
  tagline: "Adelaide's Trusted Electrical & Solar Experts",
  description:
    "Adelaide's trusted electrical and solar experts. Residential, commercial & solar installation. CEC accredited. 24/7 emergency service. Free quotes.",
  url: "https://prattelectrical.fuelmysocial.com.au",
  productionUrl: "https://www.prattelectricalgroup.com",
};

export const contactInfo = {
  phone: "0406 494 941",
  phoneFormatted: "0406 494 941",
  phoneTel: "tel:+61406494941",
  email: "james@prattelectricalgroup.com",
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
  hours: "24/7 Emergency Service Available",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/prattelectricalgroup",
  instagram: "https://www.instagram.com/prattelectricalgroup",
  googleMaps:
    "https://www.google.com/maps/place/Christies+Beach+SA+5165,+Australia",
};

export const credentials = {
  cecAccredited: true,
  cecMember: true,
  fullyInsured: true,
  backgroundChecked: true,
  licensedElectricians: true,
};

export const trustStats = [
  { value: "5+", label: "Years Serving Adelaide" },
  { value: "500+", label: "Projects Completed" },
  { value: "CEC", label: "Accredited Installers" },
  { value: "24/7", label: "Emergency Service" },
];

export const services = {
  residential: {
    title: "Residential Electrical",
    slug: "residential",
    shortDescription:
      "Expert electrical services for Adelaide homes. From small repairs to complete rewires.",
    services: [
      "Switchboard Upgrades",
      "Lighting Installation",
      "Ceiling Fans",
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
      "Reliable electrical solutions for Adelaide businesses. Office fit-outs to industrial.",
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
      "24/7 Emergency Service",
    ],
  },
  solar: {
    title: "Solar & Battery",
    slug: "solar",
    shortDescription:
      "CEC accredited solar installation. Cut your electricity bills with quality solar systems.",
    services: [
      "Residential Solar Systems (6.6kW, 10kW, 13kW)",
      "Commercial Solar",
      "Battery Storage (Tesla, Sungrow)",
      "Solar System Upgrades",
      "Maintenance & Repairs",
      "SA Power Networks Connection",
    ],
  },
};

export const serviceAreas = [
  "Christies Beach",
  "Flagstaff Hill",
  "Aldinga Beach",
  "Hallett Cove",
  "Happy Valley",
  "Woodcroft",
  "Morphett Vale",
  "Noarlunga",
  "Seaford",
  "Reynella",
  "Aberfoyle Park",
  "Blackwood",
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
    location: "Christies Beach",
    rating: 5,
    text: "Called for an emergency switchboard issue on a Sunday. James arrived within an hour and had everything sorted quickly. Fair pricing and excellent communication throughout.",
    service: "Emergency",
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
    text: "Pratt Electrical installed a 10kW solar system for our business. The process was seamless from quote to installation. Already seeing significant savings on power bills.",
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
    title: "24/7 Availability",
    description:
      "Emergencies don't wait, neither do we. Call anytime for urgent electrical issues.",
    icon: "Clock",
  },
  {
    title: "CEC Accredited",
    description:
      "Clean Energy Council accredited installers. Properly certified for all solar work.",
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
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Residential Electrical", href: "/residential" },
      { label: "Commercial Electrical", href: "/commercial" },
      { label: "Solar & Battery", href: "/solar" },
      { label: "EV Chargers", href: "/ev-chargers" },
      { label: "Emergency 24/7", href: "/emergency" },
    ],
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Residential Electrical", href: "/residential" },
    { label: "Commercial Electrical", href: "/commercial" },
    { label: "Solar & Battery", href: "/solar" },
    { label: "EV Chargers", href: "/ev-chargers" },
    { label: "Emergency 24/7", href: "/emergency" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "FAQ", href: "/faq" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};
