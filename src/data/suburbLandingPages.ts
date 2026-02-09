export interface SuburbLandingData {
  name: string;
  slug: string;
  postcode: string;
  region: string;
  intro: string;
  servicesContent: string;
  whyChooseContent: string;
  faqs: { question: string; answer: string }[];
  neighbouringSlugs: string[];
  neighbouringNames: string[];
  metaTitle: string;
  metaDescription: string;
}

export const suburbLandingPages: Record<string, SuburbLandingData> = {
  "christies-beach": {
    name: "Christies Beach",
    slug: "christies-beach",
    postcode: "5165",
    region: "Southern Adelaide",
    intro:
      "Pratt Electrical Group is proud to call Christies Beach home. Based right here in the heart of Adelaide's southern suburbs, we understand the unique electrical needs of Christies Beach properties — from the character beach cottages along the esplanade to the modern developments near the Colonnades precinct. Our local knowledge means faster response times and a genuine understanding of the coastal conditions that affect electrical installations in the area. Whether you need a switchboard upgrade for an older home, solar panels optimised for salt-air conditions, or a complete electrical fit-out for a renovation, our licensed electricians are just around the corner.",
    servicesContent:
      "As your local Christies Beach electrician, we provide the full range of residential and commercial electrical services. Many homes in the area were built in the 1960s–80s and benefit from switchboard upgrades, safety switch installations, and modern LED lighting. With electricity prices in South Australia among the highest in the country, solar installation is particularly popular here — and our SAA accreditation means your system is installed to the highest standards. We also handle EV charger installations, smoke alarm compliance, rewiring, and general electrical maintenance.",
    whyChooseContent:
      "Being based in Christies Beach means we can often provide same-day service for urgent electrical issues. Our team knows the local infrastructure, works with the local council requirements, and has built a strong reputation in the community. With a 4.9-star Google rating and SAA accreditation for solar installations, you can trust Pratt Electrical Group to deliver quality workmanship every time.",
    faqs: [
      {
        question: "How much does an electrician cost in Christies Beach?",
        answer:
          "Electrician costs in Christies Beach vary depending on the job. A standard call-out and small repair typically starts from $150-$250. We provide free, no-obligation quotes for all work so you know the cost upfront before we start.",
      },
      {
        question:
          "Do you offer emergency electrical services in Christies Beach?",
        answer:
          "As we're based in Christies Beach, we can often respond quickly to urgent electrical issues during business hours. For after-hours emergencies, contact us and we'll arrange the earliest possible appointment.",
      },
      {
        question: "Can you install solar panels in Christies Beach?",
        answer:
          "Yes, we install solar panels throughout Christies Beach. As SAA accredited installers, we design systems optimised for coastal conditions and handle all SA Power Networks paperwork. Most residential installations are completed in a single day.",
      },
      {
        question:
          "Do older Christies Beach homes need switchboard upgrades?",
        answer:
          "Many homes in Christies Beach were built with older switchboards that use ceramic fuses rather than modern circuit breakers. If your home still has a fuse box, we strongly recommend upgrading to a modern switchboard with safety switches for your family's protection.",
      },
    ],
    neighbouringSlugs: ["morphett-vale", "reynella", "hallett-cove"],
    neighbouringNames: ["Morphett Vale", "Reynella", "Hallett Cove"],
    metaTitle:
      "Electrician Christies Beach | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Christies Beach, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  "hallett-cove": {
    name: "Hallett Cove",
    slug: "hallett-cove",
    postcode: "5158",
    region: "Southern Adelaide",
    intro:
      "Pratt Electrical Group provides trusted electrical and solar services to Hallett Cove residents and businesses. This beautiful coastal suburb features a mix of modern estates and established homes, many of which benefit from electrical upgrades and solar installations. From the clifftop properties overlooking the conservation park to the newer developments around the shopping centre, we understand the specific electrical needs of Hallett Cove homes. Our proximity to the area means fast response times and reliable service you can count on.",
    servicesContent:
      "Our Hallett Cove electrical services cover everything from routine maintenance to major installations. The suburb's mix of modern and established homes means we regularly handle switchboard upgrades, safety switch installations, and complete rewires. Solar installation is particularly popular in Hallett Cove, with many homes enjoying excellent north-facing roof exposure. We also provide EV charger installations for the growing number of electric vehicle owners in the area, commercial electrical services for local businesses, and lighting upgrades throughout the home.",
    whyChooseContent:
      "Our team services Hallett Cove regularly and understands the coastal conditions that affect electrical installations. From corrosion-resistant fittings for properties near the coast to solar panel mounting systems designed for the area's wind exposure, we ensure every installation is built to last. Our SAA accreditation and 4.9-star Google rating reflect our commitment to quality.",
    faqs: [
      {
        question: "How much does an electrician cost in Hallett Cove?",
        answer:
          "Electrician costs in Hallett Cove depend on the scope of work. Minor repairs typically start from $150-$250, while switchboard upgrades range from $800-$2,500. We provide free quotes for all work.",
      },
      {
        question:
          "Do you offer emergency electrical services in Hallett Cove?",
        answer:
          "We provide priority service to Hallett Cove during business hours and can often attend the same day for urgent issues. Contact us to discuss your situation.",
      },
      {
        question: "Can you install solar panels in Hallett Cove?",
        answer:
          "Hallett Cove is excellent for solar with many homes having ideal north-facing roofs. We design and install solar systems optimised for maximum output in your specific location, including battery storage options.",
      },
      {
        question: "Is Hallett Cove good for solar power?",
        answer:
          "Yes, Hallett Cove receives excellent sunshine and many homes have unobstructed north-facing roof space. A typical 6.6kW system can save $1,500-$2,500 per year on electricity bills.",
      },
    ],
    neighbouringSlugs: ["christies-beach", "aberfoyle-park", "happy-valley"],
    neighbouringNames: ["Christies Beach", "Aberfoyle Park", "Happy Valley"],
    metaTitle:
      "Electrician Hallett Cove | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Hallett Cove, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  "morphett-vale": {
    name: "Morphett Vale",
    slug: "morphett-vale",
    postcode: "5162",
    region: "Southern Adelaide",
    intro:
      "Pratt Electrical Group has built a strong presence in Morphett Vale, one of Adelaide's largest southern suburbs. With a population of over 25,000, Morphett Vale features a diverse mix of properties — from unit complexes and townhouses through to established family homes and newer developments. Our electricians service all types of properties throughout the suburb, providing everything from general electrical maintenance to complete solar installations. Whether you're in a home near the Panalatinga Road precinct or a commercial property along Main South Road, we've got you covered.",
    servicesContent:
      "Morphett Vale's diverse property types mean we handle a wide variety of electrical work across the suburb. Our residential services include switchboard upgrades for older homes, safety switch installations, LED lighting upgrades, and smoke alarm compliance. Solar installation is increasingly popular as homeowners look to offset South Australia's high electricity costs. We also provide commercial electrical services for the many businesses along Main South Road and surrounding commercial areas, including data cabling, security system installation, and LED upgrades.",
    whyChooseContent:
      "With Morphett Vale being one of our most-serviced suburbs, we have extensive experience with the local property types and electrical infrastructure. Our quick response times to the area, combined with our SAA accreditation for solar and a 4.9-star Google rating, make us the natural choice for Morphett Vale residents seeking quality electrical work.",
    faqs: [
      {
        question: "How much does an electrician cost in Morphett Vale?",
        answer:
          "Our Morphett Vale service rates are competitive, with standard call-outs starting from $150. We always provide a detailed quote before starting work so there are no surprises.",
      },
      {
        question: "Do you service unit complexes in Morphett Vale?",
        answer:
          "Yes, we regularly work on unit complexes and strata properties throughout Morphett Vale. We're experienced with shared electrical systems and can work with your body corporate or property manager.",
      },
      {
        question: "Can you install solar panels in Morphett Vale?",
        answer:
          "Morphett Vale is well-suited for solar. We install systems on all roof types throughout the suburb and handle all SA Power Networks paperwork. Most installations are completed in one day.",
      },
    ],
    neighbouringSlugs: ["christies-beach", "woodcroft", "reynella"],
    neighbouringNames: ["Christies Beach", "Woodcroft", "Reynella"],
    metaTitle:
      "Electrician Morphett Vale | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Morphett Vale, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  "flagstaff-hill": {
    name: "Flagstaff Hill",
    slug: "flagstaff-hill",
    postcode: "5159",
    region: "Southern Adelaide",
    intro:
      "Pratt Electrical Group is a trusted electrical and solar provider for Flagstaff Hill, one of Adelaide's most desirable southern suburbs. Known for its quality family homes, excellent schools, and leafy streets, Flagstaff Hill properties often feature larger homes with higher electrical demands. Our electricians are experienced with the specific needs of the area — from powering pool equipment and outdoor entertainment areas to installing solar systems on the generous roof spaces that Flagstaff Hill homes are known for.",
    servicesContent:
      "Flagstaff Hill homes tend to be larger and well-appointed, which means electrical work often includes switchboard upgrades to handle increased power demands, comprehensive lighting design and installation, pool and spa electrical work, outdoor entertainment area wiring, and home automation systems. Solar installation is particularly effective here with many homes having large, unobstructed north-facing roofs. We also install EV chargers and provide full commercial electrical services for local businesses.",
    whyChooseContent:
      "Our team has completed numerous projects in Flagstaff Hill and understands what homeowners in the area expect — quality workmanship, attention to detail, and a professional approach. Our SAA accreditation ensures solar installations meet the highest standards, and our 4.9-star Google rating is built on consistently delivering excellent results.",
    faqs: [
      {
        question: "How much does an electrician cost in Flagstaff Hill?",
        answer:
          "Costs depend on the job scope. Standard electrical repairs start from $150-$250. For larger projects like switchboard upgrades or solar installations, we provide detailed free quotes.",
      },
      {
        question: "Can you install solar panels in Flagstaff Hill?",
        answer:
          "Flagstaff Hill is one of the best suburbs for solar in Adelaide. The larger roof areas and elevated position provide excellent sun exposure. We regularly install 6.6kW to 13kW systems in the area.",
      },
      {
        question: "Do you do pool electrical work in Flagstaff Hill?",
        answer:
          "Yes, we handle all pool and spa electrical requirements including pump connections, pool lighting, safety compliance, and timer installations. All work meets Australian Standards.",
      },
    ],
    neighbouringSlugs: ["aberfoyle-park", "happy-valley", "woodcroft"],
    neighbouringNames: ["Aberfoyle Park", "Happy Valley", "Woodcroft"],
    metaTitle:
      "Electrician Flagstaff Hill | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Flagstaff Hill, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  "aberfoyle-park": {
    name: "Aberfoyle Park",
    slug: "aberfoyle-park",
    postcode: "5159",
    region: "Southern Adelaide",
    intro:
      "Pratt Electrical Group provides comprehensive electrical and solar services to Aberfoyle Park, a well-established family suburb in Adelaide's south. The suburb features quality homes on generous blocks, many with excellent potential for solar installations. From the established properties near the Hub Shopping Centre to newer developments throughout the area, our licensed electricians are experienced with all types of residential and commercial electrical work in Aberfoyle Park.",
    servicesContent:
      "Our services in Aberfoyle Park include residential switchboard upgrades, LED lighting installations, safety switch compliance, and complete rewiring for older homes. Solar installation is a strong focus, with many Aberfoyle Park homes having ideal roof conditions for maximum solar generation. We also provide EV charger installations, outdoor and landscape lighting, home automation, and commercial electrical services for local businesses. Whether you need a simple power point installed or a complete electrical renovation, our team can help.",
    whyChooseContent:
      "We service Aberfoyle Park regularly and have built a strong reputation in the area for reliable, quality electrical work. Our SAA accreditation means your solar installation meets the highest Australian standards, and our competitive pricing with no hidden costs ensures you get genuine value.",
    faqs: [
      {
        question: "How much does an electrician cost in Aberfoyle Park?",
        answer:
          "Standard electrical work in Aberfoyle Park typically starts from $150 for minor repairs. We provide free, no-obligation quotes for all jobs so you know exactly what to expect.",
      },
      {
        question: "Can you install solar panels in Aberfoyle Park?",
        answer:
          "Yes, Aberfoyle Park is well-suited for solar with many homes having excellent roof orientation. We install and maintain solar systems from 6.6kW through to larger systems with battery storage.",
      },
      {
        question:
          "Do you offer landscape lighting installation in Aberfoyle Park?",
        answer:
          "Yes, we design and install outdoor and landscape lighting for Aberfoyle Park properties. From garden path lighting to feature lighting for entertainment areas, we create both functional and beautiful outdoor spaces.",
      },
    ],
    neighbouringSlugs: ["flagstaff-hill", "happy-valley", "hallett-cove"],
    neighbouringNames: ["Flagstaff Hill", "Happy Valley", "Hallett Cove"],
    metaTitle:
      "Electrician Aberfoyle Park | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Aberfoyle Park, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  woodcroft: {
    name: "Woodcroft",
    slug: "woodcroft",
    postcode: "5162",
    region: "Southern Adelaide",
    intro:
      "Pratt Electrical Group provides trusted electrical and solar services throughout Woodcroft. This popular family suburb features a mix of established and newer homes, with many residents investing in electrical upgrades and solar installations to improve their homes and reduce energy costs. Our electricians are familiar with the common property types in Woodcroft and can handle everything from routine repairs to complete solar system installations.",
    servicesContent:
      "Our Woodcroft services include switchboard upgrades for homes built in the 1980s-90s that may still have older fuse boxes, safety switch installations, LED lighting upgrades, and ceiling fan installations. Solar power is increasingly popular in Woodcroft, and we install systems that maximise your savings on electricity bills. We also provide EV charger installations, smoke alarm compliance, and full commercial electrical services for local businesses in the Woodcroft area.",
    whyChooseContent:
      "We're a trusted name among Woodcroft residents, with regular projects in the area building our reputation for quality and reliability. Our fast response times, SAA accreditation for solar, and transparent pricing make us the go-to electrician for Woodcroft families.",
    faqs: [
      {
        question: "How much does an electrician cost in Woodcroft?",
        answer:
          "Electrician costs in Woodcroft start from $150 for minor work. We provide free quotes for all projects to ensure complete transparency before any work begins.",
      },
      {
        question: "Can you install solar panels in Woodcroft?",
        answer:
          "Yes, Woodcroft is well-suited for solar. We install complete solar systems including panels, inverters, and optional battery storage. Most residential installations are completed in one day.",
      },
      {
        question: "Do Woodcroft homes need switchboard upgrades?",
        answer:
          "Many Woodcroft homes built in the 1980s-90s still have original switchboards that would benefit from an upgrade to modern circuit breakers and safety switches. This improves safety and allows for additional circuits.",
      },
    ],
    neighbouringSlugs: ["morphett-vale", "flagstaff-hill", "reynella"],
    neighbouringNames: ["Morphett Vale", "Flagstaff Hill", "Reynella"],
    metaTitle:
      "Electrician Woodcroft | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Woodcroft, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  "happy-valley": {
    name: "Happy Valley",
    slug: "happy-valley",
    postcode: "5159",
    region: "Southern Adelaide",
    intro:
      "Pratt Electrical Group serves Happy Valley with comprehensive electrical and solar services. This thriving suburb features a healthy mix of established homes and modern developments, creating consistent demand for quality electrical work. Whether you're upgrading the electrics in an older Happy Valley home or need solar installed on a new build, our licensed electricians provide reliable, professional service to the entire Happy Valley community.",
    servicesContent:
      "Happy Valley residents benefit from our full range of electrical services. Switchboard upgrades are common in the established parts of the suburb, while newer homes often require additional circuits, smart home wiring, and EV charger installations. Solar installation continues to grow in popularity as Happy Valley homeowners look to take advantage of South Australia's sunshine and offset high electricity costs. We also provide LED lighting upgrades, safety switch installations, smoke alarm compliance, and commercial services for local businesses.",
    whyChooseContent:
      "Our track record in Happy Valley speaks for itself — quality workmanship, honest pricing, and a reliable team that shows up when we say we will. With SAA accreditation for solar installations and a 4.9-star Google rating built over years of consistent service, Pratt Electrical Group is the electrician Happy Valley trusts.",
    faqs: [
      {
        question: "How much does an electrician cost in Happy Valley?",
        answer:
          "Standard electrical work in Happy Valley starts from $150 for minor repairs. Larger projects like solar installation or switchboard upgrades come with free, detailed quotes so you know the full cost upfront.",
      },
      {
        question: "Can you install solar panels in Happy Valley?",
        answer:
          "Yes, Happy Valley is excellent for solar with good sun exposure across most of the suburb. We design systems tailored to your home's roof and energy usage, and handle all paperwork including SA Power Networks applications.",
      },
      {
        question:
          "Do you offer emergency electrical services in Happy Valley?",
        answer:
          "We provide fast response service to Happy Valley during business hours and can often attend the same day for urgent issues. Contact us to discuss your needs.",
      },
    ],
    neighbouringSlugs: ["aberfoyle-park", "flagstaff-hill", "hallett-cove"],
    neighbouringNames: ["Aberfoyle Park", "Flagstaff Hill", "Hallett Cove"],
    metaTitle:
      "Electrician Happy Valley | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Happy Valley, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  "aldinga-beach": {
    name: "Aldinga Beach",
    slug: "aldinga-beach",
    postcode: "5173",
    region: "Fleurieu",
    intro:
      "Pratt Electrical Group is the trusted choice for electrical and solar services in Aldinga Beach, one of Adelaide's fastest-growing coastal communities. With new housing developments expanding the suburb year on year, there's strong demand for quality electrical work — from new home fit-outs to solar installations designed for the coastal environment. Our electricians understand the unique challenges of working in a beachside location, including salt-air corrosion resistance and installation techniques suited to the area's sandy soils.",
    servicesContent:
      "Our services in Aldinga Beach cover new home electrical fit-outs for the many developments in the area, solar installations optimised for coastal conditions, switchboard upgrades, safety switch installations, and EV charger installations. The area's rapid growth means many homeowners are building new and want to include solar from day one — a smart move given South Australia's electricity prices. We also handle outdoor lighting for the area's entertainment-focused outdoor living spaces, and commercial services for local businesses along the Aldinga Beach Road corridor.",
    whyChooseContent:
      "Our experience with coastal installations means we use appropriate materials and techniques to ensure longevity in the salt-air environment. Combined with our SAA accreditation, competitive pricing, and strong reputation across the southern suburbs, Pratt Electrical Group is the natural choice for Aldinga Beach residents.",
    faqs: [
      {
        question: "How much does an electrician cost in Aldinga Beach?",
        answer:
          "Electrician rates in Aldinga Beach start from $150 for minor repairs. For new builds, solar installations, or larger projects, we provide detailed free quotes tailored to your specific needs.",
      },
      {
        question: "Can you install solar panels in Aldinga Beach?",
        answer:
          "Aldinga Beach is excellent for solar with its high sunshine hours. We install solar systems designed for coastal conditions with corrosion-resistant mounting and fittings. Most installations are completed in one day.",
      },
      {
        question: "Do you do new home electrical fit-outs in Aldinga Beach?",
        answer:
          "Yes, we handle complete electrical fit-outs for new homes in the Aldinga Beach area, including switchboard installation, power and lighting circuits, solar pre-wiring, and smart home infrastructure.",
      },
    ],
    neighbouringSlugs: ["christies-beach", "morphett-vale", "woodcroft"],
    neighbouringNames: ["Christies Beach", "Morphett Vale", "Woodcroft"],
    metaTitle:
      "Electrician Aldinga Beach | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Aldinga Beach, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  reynella: {
    name: "Reynella",
    slug: "reynella",
    postcode: "5161",
    region: "Southern Adelaide",
    intro:
      "Pratt Electrical Group provides comprehensive electrical and solar services to Reynella and Old Reynella. These established southern Adelaide suburbs feature many older homes that benefit from modern electrical upgrades. From heritage properties requiring careful rewiring to established homes needing switchboard upgrades, our licensed electricians have the experience and expertise to handle the unique requirements of Reynella properties while respecting their character.",
    servicesContent:
      "Reynella's mix of heritage homes and established properties means our services here often include switchboard upgrades to replace old ceramic fuse boxes, safety switch installations, complete rewiring for older homes, LED lighting upgrades, and solar installation on various roof types. Battery storage is increasingly popular in the area as homeowners look to maximise their energy independence. We also provide smoke alarm compliance upgrades, EV charger installations, and commercial electrical services for businesses along the Reynella Boulevard precinct.",
    whyChooseContent:
      "Our experience with Reynella's older properties gives us an edge — we understand the common electrical issues in homes of different eras and can provide appropriate solutions that maintain the character of your property while bringing it up to modern safety standards. Our 4.9-star rating and SAA accreditation are your guarantee of quality.",
    faqs: [
      {
        question: "How much does an electrician cost in Reynella?",
        answer:
          "Electrician costs in Reynella start from $150 for minor electrical work. We provide free quotes for all jobs including rewiring, switchboard upgrades, and solar installations.",
      },
      {
        question: "Can you install solar panels in Reynella?",
        answer:
          "Yes, we install solar on all roof types found in Reynella, including tiled and corrugated iron roofs. Our SAA accreditation ensures your system is installed correctly and eligible for government rebates.",
      },
      {
        question: "Do older Reynella homes need rewiring?",
        answer:
          "Many Reynella homes built before 1980 may have original wiring that doesn't meet current standards. We can inspect your wiring and advise whether a partial or full rewire is recommended for safety.",
      },
    ],
    neighbouringSlugs: ["morphett-vale", "woodcroft", "christies-beach"],
    neighbouringNames: ["Morphett Vale", "Woodcroft", "Christies Beach"],
    metaTitle:
      "Electrician Reynella | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Reynella, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
  "adelaide-cbd": {
    name: "Adelaide CBD",
    slug: "adelaide-cbd",
    postcode: "5000",
    region: "Adelaide Metro",
    intro:
      "Pratt Electrical Group provides professional electrical services to Adelaide CBD businesses and residents. The city centre presents unique electrical challenges — from heritage building compliance in the older grid areas to modern fit-outs in high-rise apartments and office spaces. Our licensed electricians are experienced with the specific requirements of CBD work, including strata compliance, after-hours installations to avoid business disruption, and the heritage considerations that apply to many city buildings.",
    servicesContent:
      "Our Adelaide CBD services include commercial office fit-outs and refurbishments, apartment electrical upgrades, LED lighting for retail and hospitality, data cabling and structured wiring, security system installation, and solar systems for commercial rooftops. We understand the importance of minimising disruption to CBD businesses and can schedule work outside business hours. For apartment buildings, we work with body corporates and strata managers to coordinate electrical upgrades efficiently.",
    whyChooseContent:
      "Our experience with Adelaide CBD commercial and residential properties means we understand the complexities of city electrical work. From navigating building management requirements to ensuring compliance with heritage standards, we deliver quality workmanship with minimal disruption to your business or residence.",
    faqs: [
      {
        question: "Do you service apartments in the Adelaide CBD?",
        answer:
          "Yes, we service apartments throughout the Adelaide CBD. We work with body corporates and strata managers on both individual apartment work and common area upgrades.",
      },
      {
        question: "Can you do after-hours electrical work in the CBD?",
        answer:
          "Yes, we regularly complete commercial electrical work in the Adelaide CBD after hours or on weekends to minimise disruption to businesses. Contact us to arrange a suitable time.",
      },
      {
        question: "Do you install solar on Adelaide CBD buildings?",
        answer:
          "We install solar on suitable CBD commercial rooftops. Building height, roof orientation, and body corporate approvals are factors we assess during our free site evaluation.",
      },
    ],
    neighbouringSlugs: ["hallett-cove", "christies-beach", "morphett-vale"],
    neighbouringNames: ["Hallett Cove", "Christies Beach", "Morphett Vale"],
    metaTitle:
      "Electrician Adelaide CBD | Local Electrical & Solar Services | Pratt Electrical Group",
    metaDescription:
      "Trusted electrician in Adelaide CBD, SA. Residential & commercial electrical services, solar installation & battery storage. SAA accredited. Call 0474 320 534 for a free quote.",
  },
};

export const suburbLandingSlugs = Object.keys(suburbLandingPages);
