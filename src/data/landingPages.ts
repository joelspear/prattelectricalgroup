// Landing page content data for Meta Ads campaigns

export interface LandingPageData {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  painPoints: {
    heading: string;
    points: string[];
  };
  solution: {
    heading: string;
    description: string;
    benefits: { icon: string; title: string; description: string }[];
  };
  testimonials: {
    quote: string;
    name: string;
    location: string;
    rating: number;
  }[];
  faqs: { question: string; answer: string }[];
  thankYou: {
    heading: string;
    subheading: string;
    benefits: { icon: string; title: string; description: string }[];
  };
  formSource: string;
  showPowerBillField: boolean;
}

export const trustBadges = [
  "CEC Accredited",
  "Fully Licensed & Insured",
  "Local Adelaide Team",
  "No Subcontractors",
];

export const howItWorks = [
  {
    step: 1,
    title: "Book a Chat",
    description:
      "Quick 10-minute discovery call to understand your needs and answer any questions.",
  },
  {
    step: 2,
    title: "Get Your Custom Quote",
    description:
      "We design a solution tailored to your home or business — no cookie-cutter packages.",
  },
  {
    step: 3,
    title: "We Handle Everything",
    description:
      "Professional installation by our local in-house team. No subcontractors, no surprises.",
  },
];

export const landingPages: Record<string, LandingPageData> = {
  solar: {
    slug: "solar",
    meta: {
      title:
        "Solar Installation Adelaide | Free Quote | Pratt Electrical Group",
      description:
        "Cut your electricity bills by up to 80% with solar. CEC accredited, local Adelaide installers. Free quote — no obligation.",
    },
    hero: {
      headline: "Sick of Rising Power Bills?",
      subheadline:
        "Adelaide homeowners are cutting their electricity bills by up to 80% with solar. Find out how much you could save.",
    },
    painPoints: {
      heading: "Sound Familiar?",
      points: [
        "Your power bills keep climbing every single quarter",
        "You've got a perfectly good roof sitting there doing nothing",
        "You're paying for electricity you could be generating yourself",
        "You've been meaning to look into solar but don't know where to start",
      ],
    },
    solution: {
      heading: "Go Solar and Take Control of Your Energy",
      description:
        "We design and install high-quality solar systems tailored to your home and energy usage. From initial consultation to final commissioning, our local team handles everything — so you can start saving from day one.",
      benefits: [
        {
          icon: "Zap",
          title: "Slash Your Bills",
          description:
            "Most of our customers see their power bills drop by 60–80% after going solar.",
        },
        {
          icon: "TrendingUp",
          title: "Increase Property Value",
          description:
            "Solar-equipped homes sell faster and for more money — it's an investment that pays for itself.",
        },
        {
          icon: "BadgeDollarSign",
          title: "Government Rebates Available",
          description:
            "Take advantage of federal STCs and state incentives to reduce your upfront cost.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "The team at Pratt were fantastic. Professional, on time, and the system is performing brilliantly. Our bills have dropped from $650 to under $100.",
        name: "Sarah M.",
        location: "Adelaide Hills",
        rating: 5,
      },
      {
        quote:
          "Best decision we've made for the house. The whole process was smooth and James explained everything clearly. Highly recommend.",
        name: "David R.",
        location: "Morphett Vale",
        rating: 5,
      },
      {
        quote:
          "We got three quotes and Pratt were the most thorough. No pressure, just honest advice. System was installed within a week.",
        name: "Michelle T.",
        location: "Flagstaff Hill",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "How long does installation take?",
        answer:
          "Most residential installations are completed in a single day. From your initial enquiry to a fully operational system, the process usually takes 2–4 weeks.",
      },
      {
        question: "Is my roof suitable for solar?",
        answer:
          "Most Adelaide roofs are great for solar. We assess your roof orientation, angle, and shading during our free consultation to design the optimal system for your property.",
      },
      {
        question: "What rebates are available?",
        answer:
          "Federal Small-scale Technology Certificates (STCs) and state incentives can significantly reduce your upfront cost. We handle all the rebate paperwork for you.",
      },
      {
        question: "Do you handle the full installation?",
        answer:
          "Yes — from initial design to final commissioning, our in-house team handles everything. No subcontractors. We also take care of all council approvals and grid connection paperwork.",
      },
      {
        question: "What brands do you install?",
        answer:
          "We install premium tier-1 panels and inverters from leading brands. During your consultation, we'll recommend the best system for your roof and energy needs.",
      },
    ],
    thankYou: {
      heading: "Great Decision — Here's Why Solar Pays Off",
      subheading:
        "You're on your way to slashing your power bills and taking control of your energy. Here's what makes solar such a smart move.",
      benefits: [
        {
          icon: "Zap",
          title: "Slash Your Power Bills",
          description:
            "Most of our customers see their electricity bills drop by 60–80% after going solar. That's thousands saved every year.",
        },
        {
          icon: "TrendingUp",
          title: "Increase Your Property Value",
          description:
            "Solar-equipped homes sell faster and for more money. It's an investment that pays for itself — and then some.",
        },
        {
          icon: "BadgeDollarSign",
          title: "Government Rebates Available",
          description:
            "Take advantage of federal STCs and state incentives to reduce your upfront cost. We handle all the paperwork.",
        },
        {
          icon: "Sun",
          title: "Adelaide Gets Amazing Sunshine",
          description:
            "South Australia averages over 2,500 hours of sunshine per year — ideal conditions for solar generation.",
        },
        {
          icon: "ShieldCheck",
          title: "CEC Accredited Installers",
          description:
            "Our accreditation means you get quality workmanship, proper system design, and eligibility for all available rebates.",
        },
        {
          icon: "Award",
          title: "Long-Term Warranties",
          description:
            "Quality panels and inverters backed by solid manufacturer warranties. Serious peace of mind for decades to come.",
        },
      ],
    },
    formSource: "Meta Ads - Solar Landing Page",
    showPowerBillField: true,
  },
  battery: {
    slug: "battery",
    meta: {
      title:
        "Battery Storage Adelaide | Free Quote | Pratt Electrical Group",
      description:
        "Store your solar energy and use it when you need it most. Blackout protection, lower bills. CEC accredited Adelaide installers.",
    },
    hero: {
      headline: "Stop Giving Your Solar Energy Away",
      subheadline:
        "Your solar panels generate plenty of power — but you're sending most of it back to the grid for pennies. A battery changes everything.",
    },
    painPoints: {
      heading: "Sound Familiar?",
      points: [
        "Your solar does nothing for you after the sun goes down",
        "You're buying back expensive peak-rate power every evening",
        "When the power goes out, so does everything — even with solar",
        "You're fed up with tiny feed-in tariffs that don't reflect the value of your energy",
      ],
    },
    solution: {
      heading: "Store Your Solar, Use It When It Matters",
      description:
        "A home battery lets you store the excess solar energy your panels generate during the day and use it at night or during peak times. Plus, you get blackout protection and can even earn credits through Virtual Power Plant programs.",
      benefits: [
        {
          icon: "Battery",
          title: "Store Your Solar",
          description:
            "Keep the energy your panels produce instead of sending it back to the grid for next to nothing.",
        },
        {
          icon: "ShieldCheck",
          title: "Blackout Protection",
          description:
            "Keep your lights, fridge, and essentials running when the grid goes down.",
        },
        {
          icon: "Coins",
          title: "VPP Credits",
          description:
            "Earn money by joining a Virtual Power Plant program — your battery works for you even when you're not using it.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "We had a blackout last month and didn't even notice until the neighbours told us. The battery kicked in seamlessly. Absolute game changer.",
        name: "Mark L.",
        location: "Noarlunga",
        rating: 5,
      },
      {
        quote:
          "Our evening bills have practically disappeared since getting the battery. We barely import anything from the grid now.",
        name: "Jenny K.",
        location: "Aberfoyle Park",
        rating: 5,
      },
      {
        quote:
          "James and the team explained everything in plain English. Installation was clean and professional. Couldn't be happier.",
        name: "Paul D.",
        location: "Reynella",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Can I add a battery to my existing solar system?",
        answer:
          "Yes — in most cases, a battery can be retrofitted to your existing solar setup. We'll check your current inverter and system to recommend the best option.",
      },
      {
        question: "Will a battery power my whole house during a blackout?",
        answer:
          "It depends on the battery size and what you want to run. Most setups cover essential circuits — lights, fridge, internet, and a few power points. We design the backup to suit your needs.",
      },
      {
        question: "What's the payback period for a battery?",
        answer:
          "Typically 5–8 years, depending on your energy usage, tariff rates, and whether you join a VPP. With rising electricity costs, payback periods are getting shorter every year.",
      },
      {
        question: "Which battery brands do you install?",
        answer:
          "We install leading brands including Tesla Powerwall, BYD, Sungrow, and Enphase. We'll recommend the best option for your needs and budget.",
      },
      {
        question: "How long do batteries last?",
        answer:
          "Most quality home batteries come with a 10-year warranty and are designed to last 15+ years. We only install products we trust to go the distance.",
      },
    ],
    thankYou: {
      heading: "Smart Move — Here's Why Battery Storage Pays Off",
      subheading:
        "You're about to stop giving your solar energy away for pennies. Here's what a battery system does for you.",
      benefits: [
        {
          icon: "Battery",
          title: "Use Your Solar Energy 24/7",
          description:
            "Store excess solar during the day and use it at night. No more buying expensive peak-rate power from the grid.",
        },
        {
          icon: "ShieldCheck",
          title: "Blackout Protection",
          description:
            "When the grid goes down, your battery kicks in automatically. Keep your lights, fridge, and essentials running.",
        },
        {
          icon: "Coins",
          title: "Virtual Power Plant Credits",
          description:
            "Join a VPP program and earn money from your battery — it works for you even when you're not using it.",
        },
        {
          icon: "TrendingUp",
          title: "Rising Electricity Prices",
          description:
            "Electricity prices keep climbing. A battery locks in your savings and protects you from future rate increases.",
        },
        {
          icon: "Zap",
          title: "Maximise Your Solar Investment",
          description:
            "Without a battery, you're only using about 30% of your solar. With one, you can use up to 80% or more.",
        },
        {
          icon: "Award",
          title: "Premium Brands, Long Warranties",
          description:
            "We install Tesla Powerwall, BYD, Sungrow, and Enphase — all backed by solid long-term warranties.",
        },
      ],
    },
    formSource: "Meta Ads - Battery Landing Page",
    showPowerBillField: true,
  },
  "ev-charger": {
    slug: "ev-charger",
    meta: {
      title:
        "EV Charger Installation Adelaide | Free Quote | Pratt Electrical Group",
      description:
        "Fast, safe home EV charger installation by licensed Adelaide electricians. Charge from your solar. All EV brands supported.",
    },
    hero: {
      headline: "Charge Your EV at Home — the Smart Way",
      subheadline:
        "Stop wasting time at public chargers. Get a dedicated home EV charger installed by licensed Adelaide electricians — and charge from your solar for almost nothing.",
    },
    painPoints: {
      heading: "Sound Familiar?",
      points: [
        "You're still using the slow charger that came in the box",
        "You don't have a dedicated circuit and you're worried about overloading your switchboard",
        "You're paying for public charging when your solar could be doing it for free",
      ],
    },
    solution: {
      heading: "Fast, Safe EV Charging at Home",
      description:
        "We install dedicated EV chargers with their own circuit, properly rated for safe, fast charging. If you've got solar, we can set it up to charge your car from the sun — slashing your running costs even further.",
      benefits: [
        {
          icon: "Sun",
          title: "Charge From Solar",
          description:
            "Pair your charger with your solar system and drive on sunshine. It doesn't get cheaper than free fuel.",
        },
        {
          icon: "Zap",
          title: "Fast Home Charging",
          description:
            "A dedicated Level 2 charger delivers a full charge overnight — up to 10x faster than a standard power point.",
        },
        {
          icon: "Car",
          title: "All EV Brands",
          description:
            "Tesla, BYD, Hyundai, Kia, MG, Polestar — we install chargers compatible with every EV on the market.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Having a proper charger at home is so convenient. Plug in when I get home, full charge by morning. Should've done it ages ago.",
        name: "Tom S.",
        location: "Blackwood",
        rating: 5,
      },
      {
        quote:
          "The team set up our charger to run off our solar during the day. We're basically driving for free now. Brilliant.",
        name: "Lisa W.",
        location: "Aldinga Beach",
        rating: 5,
      },
      {
        quote:
          "Quick and professional install. They sorted the switchboard upgrade at the same time. Very happy with the whole experience.",
        name: "Chris H.",
        location: "Seaford",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What type of charger do I need?",
        answer:
          "For most homeowners, a Level 2 (7kW–22kW) wall-mounted charger is ideal. We'll assess your switchboard capacity and recommend the right unit for your EV and driving habits.",
      },
      {
        question: "How long does installation take?",
        answer:
          "A standard installation takes 2–4 hours. If a switchboard upgrade is needed, it may take a bit longer. We'll let you know upfront.",
      },
      {
        question: "Can I charge my EV from solar?",
        answer:
          "Absolutely. If you have solar panels, we can configure your charger to prioritise solar energy. Some smart chargers even let you schedule charging during peak solar production.",
      },
      {
        question: "Will my switchboard handle an EV charger?",
        answer:
          "We'll assess your switchboard during the quoting process. If it needs an upgrade, we can handle that too — we're licensed electricians after all.",
      },
    ],
    thankYou: {
      heading: "Great Choice — Here's Why Home EV Charging Makes Sense",
      subheading:
        "No more trips to public chargers or worrying about slow charging. Here's what a proper home setup gives you.",
      benefits: [
        {
          icon: "Sun",
          title: "Charge From Your Solar",
          description:
            "Pair your charger with solar and drive on sunshine. It doesn't get cheaper than free fuel.",
        },
        {
          icon: "Zap",
          title: "Up to 10x Faster Charging",
          description:
            "A dedicated Level 2 charger delivers a full charge overnight — no more waiting around with a standard plug.",
        },
        {
          icon: "Car",
          title: "Works With Every EV",
          description:
            "Tesla, BYD, Hyundai, Kia, MG, Polestar — we install chargers compatible with every EV on the market.",
        },
        {
          icon: "ShieldCheck",
          title: "Safe, Dedicated Circuit",
          description:
            "A properly installed charger with its own circuit means no overloading, no tripped breakers, no worries.",
        },
        {
          icon: "TrendingUp",
          title: "Save on Running Costs",
          description:
            "Home charging is significantly cheaper than public charging — especially when you charge from solar.",
        },
        {
          icon: "Award",
          title: "Licensed, Insured Installation",
          description:
            "Our licensed electricians handle everything — from switchboard assessment to final commissioning.",
        },
      ],
    },
    formSource: "Meta Ads - EV Charger Landing Page",
    showPowerBillField: false,
  },
  electrical: {
    slug: "electrical",
    meta: {
      title:
        "Licensed Electrician Adelaide | Free Quote | Pratt Electrical Group",
      description:
        "Licensed, insured Adelaide electricians for residential and commercial work. Switchboard upgrades, rewiring, safety inspections. Free quotes.",
    },
    hero: {
      headline: "Adelaide's Trusted Local Electricians",
      subheadline:
        "From switchboard upgrades to full rewires, our licensed team handles residential and commercial electrical work across Adelaide — done right, on time, every time.",
    },
    painPoints: {
      heading: "Sound Familiar?",
      points: [
        "Your lights flicker or your power trips more than it should",
        "Your switchboard still has ceramic fuses from decades ago",
        "You're worried your old wiring isn't safe for your family",
        "You need electrical work done but can't find a sparky who actually shows up",
      ],
    },
    solution: {
      heading: "Professional Electrical Services You Can Trust",
      description:
        "Whether it's a simple power point install or a full commercial fit-out, we bring the same level of care and professionalism to every job. Fully licensed, fully insured, and we always clean up after ourselves.",
      benefits: [
        {
          icon: "Award",
          title: "Licensed Sparkies",
          description:
            "Fully licensed and insured electricians. We do it right the first time, every time.",
        },
        {
          icon: "ShieldCheck",
          title: "Safety Compliant",
          description:
            "All work meets Australian standards. Compliance certificates provided for every job.",
        },
        {
          icon: "Building2",
          title: "Residential & Commercial",
          description:
            "From family homes to warehouses — we handle projects of every size across Adelaide.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Called about a switchboard issue and James had everything sorted quickly. Fair pricing and excellent communication throughout. Highly recommend.",
        name: "Andrew B.",
        location: "Christies Beach",
        rating: 5,
      },
      {
        quote:
          "We've used Pratt for all our commercial fit-outs. Reliable, professional, and always on schedule. They're our go-to electricians now.",
        name: "Karen P.",
        location: "Lonsdale",
        rating: 5,
      },
      {
        quote:
          "Had the whole house rewired and a new switchboard put in. The team were tidy, respectful, and explained everything. Great experience.",
        name: "Steve C.",
        location: "Old Reynella",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Are you fully licensed and insured?",
        answer:
          "Yes — all our electricians are fully licensed and insured. We provide compliance certificates for all work completed.",
      },
      {
        question: "Do you offer emergency electrical work?",
        answer:
          "We prioritise urgent jobs wherever possible. Give us a call and we'll do our best to get someone to you quickly.",
      },
      {
        question: "Do you provide compliance certificates?",
        answer:
          "Yes — every job we complete comes with the appropriate compliance certificate as required by South Australian regulations.",
      },
      {
        question: "Do you work on commercial properties?",
        answer:
          "Absolutely. We handle everything from office fit-outs to warehouse installations and retail shop electrical work.",
      },
    ],
    thankYou: {
      heading: "You're in Good Hands — Here's Why Pratt Electrical",
      subheading:
        "We treat every job like it's our own home. Here's what you can expect working with us.",
      benefits: [
        {
          icon: "Award",
          title: "Fully Licensed & Insured",
          description:
            "Every electrician on our team is fully licensed and insured. We do it right the first time, every time.",
        },
        {
          icon: "ShieldCheck",
          title: "Compliance Certificates Provided",
          description:
            "All work meets Australian standards. You'll receive the appropriate compliance certificate for every job.",
        },
        {
          icon: "Building2",
          title: "Residential & Commercial",
          description:
            "From family homes to warehouses — we handle projects of every size right across Adelaide.",
        },
        {
          icon: "Zap",
          title: "Quality Workmanship Guaranteed",
          description:
            "We stand behind every job we do. If something's not right, we'll come back and fix it — no questions asked.",
        },
        {
          icon: "Clock",
          title: "On Time, Every Time",
          description:
            "We show up when we say we will. No waiting around, no chasing. Reliable service you can count on.",
        },
        {
          icon: "MapPin",
          title: "Local Adelaide Team",
          description:
            "We're a local team who live and work in Adelaide. No call centres, no subcontractors — just us.",
        },
      ],
    },
    formSource: "Meta Ads - Electrical Landing Page",
    showPowerBillField: false,
  },
};
