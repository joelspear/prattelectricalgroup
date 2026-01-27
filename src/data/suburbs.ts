// Suburb data for service area pages

export interface SuburbInfo {
  name: string;
  slug: string;
  postcode: string;
  region: string;
  description: string;
  features: string[];
  population?: string;
  nearbySuburbs: string[];
}

export const suburbsData: Record<string, SuburbInfo> = {
  "christies-beach": {
    name: "Christies Beach",
    slug: "christies-beach",
    postcode: "5165",
    region: "Southern Adelaide",
    description:
      "Christies Beach is our home base. As local electricians living and working in the area, we know the electrical needs of Christies Beach homes inside out - from the older beach cottages to modern developments.",
    features: [
      "Fastest response times - we're just around the corner",
      "Deep knowledge of local electrical infrastructure",
      "Many satisfied customers in the area",
      "Solar installations optimised for coastal conditions",
    ],
    population: "~14,000",
    nearbySuburbs: ["Noarlunga", "Port Noarlunga", "Seaford", "Morphett Vale"],
  },
  "flagstaff-hill": {
    name: "Flagstaff Hill",
    slug: "flagstaff-hill",
    postcode: "5159",
    region: "Southern Adelaide",
    description:
      "Flagstaff Hill is one of Adelaide's most desirable suburbs, known for its quality homes and family-friendly atmosphere. We regularly service homes here for solar installations, switchboard upgrades, and general electrical work.",
    features: [
      "Experienced with larger family homes",
      "Solar installations with excellent sun exposure",
      "Pool and outdoor lighting specialists",
      "Switchboard upgrades for growing power needs",
    ],
    population: "~9,500",
    nearbySuburbs: ["Happy Valley", "Aberfoyle Park", "Hallett Cove", "Sheidow Park"],
  },
  "hallett-cove": {
    name: "Hallett Cove",
    slug: "hallett-cove",
    postcode: "5158",
    region: "Southern Adelaide",
    description:
      "Hallett Cove combines coastal living with modern amenities. From the clifftop homes to the newer estates, we provide comprehensive electrical services to Hallett Cove residents.",
    features: [
      "Coastal property electrical expertise",
      "Corrosion-resistant installations",
      "Solar panels suited to ocean-facing properties",
      "EV charger installations for modern homes",
    ],
    population: "~12,000",
    nearbySuburbs: ["Sheidow Park", "Trott Park", "Lonsdale", "Flagstaff Hill"],
  },
  "happy-valley": {
    name: "Happy Valley",
    slug: "happy-valley",
    postcode: "5159",
    region: "Southern Adelaide",
    description:
      "Happy Valley is a thriving suburb with a mix of established homes and new developments. We've completed numerous solar installations and electrical upgrades throughout the area.",
    features: [
      "Mix of new and established home expertise",
      "Strong solar installation track record",
      "Efficient service to the entire suburb",
      "Regular switchboard upgrade work",
    ],
    population: "~10,500",
    nearbySuburbs: ["Flagstaff Hill", "Aberfoyle Park", "Reynella", "Woodcroft"],
  },
  "morphett-vale": {
    name: "Morphett Vale",
    slug: "morphett-vale",
    postcode: "5162",
    region: "Southern Adelaide",
    description:
      "Morphett Vale is one of Adelaide's largest suburbs, and we've built a strong presence here over the years. From unit complexes to family homes, we service all types of properties.",
    features: [
      "Extensive experience across the suburb",
      "Unit and townhouse specialists",
      "Commercial and residential services",
      "Quick response times guaranteed",
    ],
    population: "~25,000",
    nearbySuburbs: ["Hackham", "Reynella", "Christies Beach", "Woodcroft"],
  },
  "reynella": {
    name: "Reynella",
    slug: "reynella",
    postcode: "5161",
    region: "Southern Adelaide",
    description:
      "Reynella and Old Reynella are established suburbs with many homes benefiting from electrical upgrades. We regularly work in the area on everything from rewires to solar installations.",
    features: [
      "Heritage home rewiring expertise",
      "Safety switch upgrades for older homes",
      "Solar installations on various roof types",
      "Comprehensive electrical maintenance",
    ],
    population: "~12,000",
    nearbySuburbs: ["Old Reynella", "Morphett Vale", "Happy Valley", "Woodcroft"],
  },
  "aldinga-beach": {
    name: "Aldinga Beach",
    slug: "aldinga-beach",
    postcode: "5173",
    region: "Southern Adelaide",
    description:
      "Aldinga Beach is one of Adelaide's fastest-growing areas, with new housing developments creating strong demand for electrical services. We're well-positioned to serve this expanding community.",
    features: [
      "New home electrical fit-outs",
      "Solar installations for new builds",
      "Growing presence in the area",
      "Beach-appropriate installations",
    ],
    population: "~14,000",
    nearbySuburbs: ["Sellicks Beach", "Port Willunga", "Aldinga", "McLaren Vale"],
  },
  "seaford": {
    name: "Seaford",
    slug: "seaford",
    postcode: "5169",
    region: "Southern Adelaide",
    description:
      "Seaford offers excellent coastal living with a mix of property styles. We provide full electrical services to Seaford residents, from emergency repairs to solar installations.",
    features: [
      "Coastal property specialists",
      "Strong local customer base",
      "Solar optimised for sea views",
      "Full residential service range",
    ],
    population: "~17,000",
    nearbySuburbs: ["Moana", "Port Noarlunga South", "Noarlunga", "Christies Beach"],
  },
  noarlunga: {
    name: "Noarlunga",
    slug: "noarlunga",
    postcode: "5168",
    region: "Southern Adelaide",
    description:
      "The Noarlunga area, including Noarlunga Centre and surrounds, is a key service area for us. We work with both residential and commercial properties throughout the precinct.",
    features: [
      "Residential and commercial services",
      "Close to our base location",
      "Regular maintenance contracts",
      "Rapid emergency response",
    ],
    nearbySuburbs: ["Christies Beach", "Port Noarlunga", "Seaford", "Morphett Vale"],
  },
  "aberfoyle-park": {
    name: "Aberfoyle Park",
    slug: "aberfoyle-park",
    postcode: "5159",
    region: "Southern Adelaide",
    description:
      "Aberfoyle Park is a well-established suburb with quality homes that often require electrical upgrades and solar installations. We're familiar with the area and its electrical needs.",
    features: [
      "Quality home specialists",
      "Solar installations with hill views",
      "Switchboard upgrades",
      "Outdoor and landscape lighting",
    ],
    nearbySuburbs: ["Happy Valley", "Flagstaff Hill", "Chandlers Hill", "Hub"],
  },
  woodcroft: {
    name: "Woodcroft",
    slug: "woodcroft",
    postcode: "5162",
    region: "Southern Adelaide",
    description:
      "Woodcroft is a growing suburb with many families choosing to invest in solar and electrical upgrades. We regularly service homes throughout the area.",
    features: [
      "Family home specialists",
      "Solar installation experts",
      "Ceiling fan installations",
      "General electrical maintenance",
    ],
    nearbySuburbs: ["Morphett Vale", "Happy Valley", "Reynella", "Sheidow Park"],
  },
  "mclaren-vale": {
    name: "McLaren Vale",
    slug: "mclaren-vale",
    postcode: "5171",
    region: "Southern Adelaide",
    description:
      "McLaren Vale is famous for its wineries and rural lifestyle. We provide electrical services to both residential properties and commercial premises in this beautiful region.",
    features: [
      "Rural and semi-rural property expertise",
      "Winery and commercial services",
      "Solar for larger properties",
      "Underground power connections",
    ],
    nearbySuburbs: ["Aldinga", "Willunga", "Old Noarlunga", "Hackham"],
  },
  "old-reynella": {
    name: "Old Reynella",
    slug: "old-reynella",
    postcode: "5161",
    region: "Southern Adelaide",
    description:
      "Old Reynella features many heritage and established homes that require careful electrical work. Our experience with older properties makes us well-suited to this area.",
    features: [
      "Heritage property specialists",
      "Rewiring and upgrades",
      "Safety compliance work",
      "Period-appropriate solutions",
    ],
    nearbySuburbs: ["Reynella", "Morphett Vale", "Happy Valley", "Reynella East"],
  },
  "port-noarlunga": {
    name: "Port Noarlunga",
    slug: "port-noarlunga",
    postcode: "5167",
    region: "Southern Adelaide",
    description:
      "Port Noarlunga is a charming coastal suburb just minutes from our base. We provide comprehensive electrical services to homes and businesses in this popular beach area.",
    features: [
      "Very close to our base",
      "Coastal property expertise",
      "Quick response times",
      "Beach lifestyle electrical needs",
    ],
    nearbySuburbs: ["Noarlunga", "Christies Beach", "Port Noarlunga South", "Seaford"],
  },
  "sheidow-park": {
    name: "Sheidow Park",
    slug: "sheidow-park",
    postcode: "5158",
    region: "Southern Adelaide",
    description:
      "Sheidow Park is a modern suburb with many well-appointed homes. We regularly work in the area on solar installations, EV chargers, and general electrical work.",
    features: [
      "Modern home electrical expertise",
      "High solar adoption area",
      "EV charger installations",
      "Smart home integrations",
    ],
    nearbySuburbs: ["Hallett Cove", "Trott Park", "Woodcroft", "Flagstaff Hill"],
  },
  "trott-park": {
    name: "Trott Park",
    slug: "trott-park",
    postcode: "5158",
    region: "Southern Adelaide",
    description:
      "Trott Park is a family-friendly suburb with good-sized homes perfect for solar installations. We've completed numerous projects in the area.",
    features: [
      "Family home specialists",
      "Solar installations",
      "Switchboard upgrades",
      "Air conditioning electrical",
    ],
    nearbySuburbs: ["Sheidow Park", "Hallett Cove", "O'Halloran Hill", "Woodcroft"],
  },
  blackwood: {
    name: "Blackwood",
    slug: "blackwood",
    postcode: "5051",
    region: "Adelaide Hills",
    description:
      "Blackwood is a beautiful hills suburb with character homes. We provide electrical services to Blackwood residents, understanding the unique needs of hills properties.",
    features: [
      "Hills property experience",
      "Heritage home specialists",
      "Storm damage repairs",
      "Backup power solutions",
    ],
    nearbySuburbs: ["Belair", "Coromandel Valley", "Hawthorndene", "Eden Hills"],
  },
  belair: {
    name: "Belair",
    slug: "belair",
    postcode: "5052",
    region: "Adelaide Hills",
    description:
      "Belair is a leafy hills suburb known for its national park and character homes. We service Belair properties for all electrical needs.",
    features: [
      "Character home expertise",
      "Hills terrain experience",
      "Storm response service",
      "Outdoor and garden lighting",
    ],
    nearbySuburbs: ["Blackwood", "Glenalta", "Hawthorndene", "Mitcham"],
  },
  stirling: {
    name: "Stirling",
    slug: "stirling",
    postcode: "5152",
    region: "Adelaide Hills",
    description:
      "Stirling in the Adelaide Hills features stunning properties that require quality electrical work. We service the area for both residential and commercial needs.",
    features: [
      "Premium property experience",
      "Hills commercial services",
      "Quality installations",
      "Backup power systems",
    ],
    nearbySuburbs: ["Aldgate", "Bridgewater", "Crafers", "Heathfield"],
  },
  "adelaide-cbd": {
    name: "Adelaide CBD",
    slug: "adelaide-cbd",
    postcode: "5000",
    region: "Central Adelaide",
    description:
      "We service the Adelaide CBD for both residential apartments and commercial premises. Our team is experienced with city electrical requirements.",
    features: [
      "Apartment building specialists",
      "Commercial fit-outs",
      "Strata electrical work",
      "Office electrical services",
    ],
    nearbySuburbs: ["North Adelaide", "Kent Town", "Hindmarsh", "Unley"],
  },
  glenelg: {
    name: "Glenelg",
    slug: "glenelg",
    postcode: "5045",
    region: "Western Adelaide",
    description:
      "Glenelg is Adelaide's premier beachside suburb. We provide electrical services to Glenelg's mix of heritage homes, modern apartments, and commercial properties.",
    features: [
      "Beachside property expertise",
      "Heritage and modern homes",
      "Apartment electrical work",
      "Commercial services",
    ],
    nearbySuburbs: ["Glenelg North", "Glenelg South", "Somerton Park", "Brighton"],
  },
  unley: {
    name: "Unley",
    slug: "unley",
    postcode: "5061",
    region: "Central Adelaide",
    description:
      "Unley is one of Adelaide's most prestigious suburbs with beautiful character homes. We provide quality electrical work suited to these premium properties.",
    features: [
      "Character home specialists",
      "Quality workmanship",
      "Heritage-appropriate solutions",
      "Premium customer service",
    ],
    nearbySuburbs: ["Parkside", "Malvern", "Goodwood", "Hyde Park"],
  },
  norwood: {
    name: "Norwood",
    slug: "norwood",
    postcode: "5067",
    region: "Eastern Adelaide",
    description:
      "Norwood is a vibrant inner suburb with a mix of residential and commercial properties. We service the area for all electrical needs.",
    features: [
      "Mixed-use property experience",
      "Shop fit-outs",
      "Residential services",
      "Heritage considerations",
    ],
    nearbySuburbs: ["Kent Town", "Kensington", "Stepney", "Maylands"],
  },
};

export const suburbSlugs = Object.keys(suburbsData);
