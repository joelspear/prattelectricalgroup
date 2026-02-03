// Chat Knowledge Base for Pratt Electrical AI Chatbot

import { contactInfo } from "./siteData";

export const getWelcomeMessage = () => `👋 Hi there! I'm the Pratt Electrical assistant.

I can help you with questions about solar, electrical services, pricing, bookings, and more.

Before we chat, could I grab your name and email? That way, if we get disconnected or you need follow-up info, we can reach you.`;

export const getPostRegistrationMessage = (name: string) => `Thanks ${name}! Great to meet you. 😊

How can I help you today? You can ask me anything about:
• Solar panel installation & pricing
• Battery storage options
• Electrical services (residential & commercial)
• EV charger installation
• Finance options
• Booking a free quote

Or just type your question and I'll do my best to help!`;

// Knowledge base for responses
const knowledgeBase = {
  // Solar pricing
  solarPricing: {
    keywords: ["solar", "price", "cost", "how much", "pricing", "solar system", "panels", "6.6", "10kw", "13kw"],
    response: (name: string) => `Great question, ${name}! A typical solar system in Adelaide costs:

• 6.6kW system: $5,500 - $8,500
• 10kW system: $7,500 - $10,500
• 13kW system: $10,500 - $14,000

These prices are fully installed and include the government rebate.

The best way to get an accurate price for your home is a free quote — we'll assess your roof, check your power usage, and recommend the right system. Want me to help arrange that?`,
  },

  // Battery pricing
  batteryPricing: {
    keywords: ["battery", "powerwall", "tesla", "sungrow", "byd", "storage", "backup"],
    response: (name: string) => `Great question about batteries, ${name}! Here are our popular options (installed):

• Tesla Powerwall 3 (13.5kWh): $12,000 - $15,000
• Sungrow (9.6kWh): $9,000 - $12,000
• BYD (10.2kWh): $10,000 - $13,000

The SA Home Battery Scheme rebate of up to $372/kWh can reduce these costs significantly.

Would you like a free quote to see what works best for your setup?`,
  },

  // EV Charger pricing
  evChargerPricing: {
    keywords: ["ev", "charger", "electric vehicle", "tesla charger", "zappi", "car charger", "charging"],
    response: (name: string) => `Great question about EV chargers, ${name}! Installation costs typically range from:

• Basic installation: $1,200 - $1,800
• Standard installation: $1,800 - $2,500
• Complex installation: $2,500 - $4,000

We install Tesla Wall Connectors, Zappi smart chargers, and universal chargers. If you have solar, we can set up smart charging to use your excess solar power!

Want me to arrange a free quote for your specific situation?`,
  },

  // Electrical pricing
  electricalPricing: {
    keywords: ["switchboard", "power point", "ceiling fan", "safety switch", "rcd", "electrical", "electrician", "rewire"],
    response: (name: string) => `Here's a guide to common electrical work, ${name}:

• Switchboard upgrade: $1,500 - $4,000
• Safety switch (RCD) installation: $180 - $350
• Power point installation: $150 - $250
• Ceiling fan installation: $150 - $300
• General callout + first hour: $150 - $200

These are estimates — we'll provide an accurate quote before any work begins. Would you like to book a free quote?`,
  },

  // Emergency
  emergency: {
    keywords: ["emergency", "sparking", "burning", "smoke", "power out", "outage", "urgent", "dangerous"],
    response: (name: string) => `That sounds like it could be urgent, ${name}. For electrical emergencies:

1. Don't touch the affected area
2. Switch off the circuit at your switchboard if safe
3. Call a licensed electrician or SA Power Networks (13 12 61) for immediate assistance

For non-urgent electrical work, we'd love to help! Give us a call on **${contactInfo.phoneFormatted}** or book a free quote through our contact page.

Is there anything else I can help with?`,
  },

  // Book quote
  bookQuote: {
    keywords: ["book", "quote", "appointment", "free quote", "consultation", "visit", "come out"],
    response: (name: string) => `Fantastic, ${name}! I can help with that.

You've got a few options:

1. **Book online:** Visit our contact page to request a quote
2. **Call directly:** ${contactInfo.phoneFormatted}
3. **Email:** ${contactInfo.email}

James typically responds within 2 business hours during Mon-Fri 7am-5pm.

Which would work best for you?`,
  },

  // Service areas
  serviceAreas: {
    keywords: ["service area", "location", "suburb", "where", "cover", "travel", "come to", "mount barker", "hills", "northern", "southern"],
    response: (name: string) => `Great question, ${name}! We're based in Christie's Beach and service:

**Primary areas (fastest response):**
Christie's Beach, Flagstaff Hill, Hallett Cove, Happy Valley, Morphett Vale, Reynella, Seaford, Aldinga Beach, Woodcroft, Aberfoyle Park

**Full coverage:**
All Adelaide metro, Adelaide Hills, Northern suburbs to Gawler, and Southern suburbs to Aldinga.

What suburb are you in? I can confirm we service your area!`,
  },

  // Installation time
  installTime: {
    keywords: ["how long", "installation time", "take to install", "duration", "days"],
    response: (name: string) => `Good question, ${name}!

• **Residential solar:** Most installations are completed in 1 day
• **Commercial solar:** Typically 2-5 days depending on size
• **Grid connection:** SA Power Networks approval takes 2-4 weeks after installation

For electrical work, most jobs are same-day. Larger projects like switchboard upgrades might take a full day.

Any other questions about the process?`,
  },

  // Solar size recommendation
  solarSize: {
    keywords: ["what size", "how big", "kw need", "system size", "recommend"],
    response: (name: string) => `Great question, ${name}! Here's a general guide:

• **6.6kW:** Perfect for most Adelaide households (2-4 people)
• **10kW:** Larger families, home offices, or small pool
• **13kW+:** Large homes, EVs, pools, or high usage

We assess your actual electricity bills and usage patterns to recommend the right size. A system that's too small won't cover your needs, and too big wastes money.

Want a free assessment to find your ideal size?`,
  },

  // Warranty
  warranty: {
    keywords: ["warranty", "guarantee", "how long last", "covered", "protection"],
    response: (name: string) => `Great question about warranties, ${name}!

• **Solar panels:** 25-year performance warranty
• **Inverters:** 5-12 years depending on brand
• **Batteries:** 10-year warranty (most brands)
• **Workmanship:** We stand behind our installation work

We only use quality brands with solid warranty backing — no cheap imports that fail after a few years.

Anything else you'd like to know?`,
  },

  // Add battery to existing
  addBattery: {
    keywords: ["add battery", "existing solar", "retrofit", "already have solar", "upgrade"],
    response: (name: string) => `Yes, we can definitely help with that, ${name}!

We regularly retrofit batteries to existing solar systems. We'll assess your current inverter to determine compatibility:

• Some inverters are "battery-ready" — easy addition
• Others may need a separate battery inverter
• Older systems might benefit from a full hybrid upgrade

We'll recommend the most cost-effective option for your setup. Want us to take a look?`,
  },

  // Payment/Finance
  payment: {
    keywords: ["payment", "finance", "pay", "interest free", "plan", "afford"],
    response: (name: string) => `Good question, ${name}! We offer several payment options:

• Bank transfer
• Credit/debit cards
• Cash
• **Interest-free payment plans** through our finance partners

For solar and larger jobs, payment plans make it easy to start saving on power bills right away without a big upfront cost.

Would you like more details on the finance options?`,
  },

  // Rebates
  rebates: {
    keywords: ["rebate", "incentive", "government", "stc", "subsidy", "scheme", "discount"],
    response: (name: string) => `Great question about rebates, ${name}!

**Solar Rebate (STC):**
• Federal government rebate: $2,000 - $4,000 depending on system size
• Already included in our quoted prices

**Battery Rebate (SA Home Battery Scheme):**
• Up to $372 per kWh of storage
• Subject to eligibility criteria

**Feed-in Tariff:**
• Get paid for excess solar exported to grid
• Typically 4-12c/kWh depending on your retailer

We handle all the rebate paperwork for you!`,
  },

  // Credentials
  credentials: {
    keywords: ["licensed", "accredited", "qualified", "cec", "insured", "certified"],
    response: (name: string) => `Absolutely, ${name}! Here are our credentials:

✅ Fully licensed electricians
✅ CEC (Clean Energy Council) Accredited Solar Installers
✅ Fully insured
✅ Police checked
✅ Growing by reputation since 2020

We take our credentials seriously — it's how we ensure quality work and protect our customers.

Anything else you'd like to know about us?`,
  },

  // About company
  about: {
    keywords: ["about", "who", "company", "james", "pratt", "history", "started"],
    response: (name: string) => `Happy to share, ${name}!

Pratt Electrical Group was started by James Pratt in 2020. We've grown rapidly through word-of-mouth and reputation — not big advertising budgets.

Based in Christie's Beach, we're now one of Adelaide's fastest-growing electrical and solar teams. Our philosophy is simple: quality work, fair pricing, and genuine customer care.

Is there something specific you'd like to know?`,
  },

  // Contact
  contact: {
    keywords: ["contact", "phone", "email", "call", "reach", "talk", "speak"],
    response: (name: string) => `Here's how to reach us, ${name}:

📞 **Phone:** ${contactInfo.phoneFormatted}
📧 **Email:** ${contactInfo.email}
📍 **Base:** Christie's Beach, Adelaide

**Hours:**
• Mon-Fri 7am-5pm

James typically responds within 2 business hours. Is there anything else I can help with?`,
  },

  // Human handoff
  humanHandoff: {
    keywords: ["speak to someone", "talk to human", "real person", "speak to james", "not helpful", "frustrated"],
    response: (name: string) => `I understand, ${name}. I think this one's best handled by our team directly.

Here's how to reach us:

📞 **Call:** ${contactInfo.phoneFormatted}
📧 **Email:** ${contactInfo.email}

If it's during business hours (Mon-Fri 7am-5pm), James will typically respond within a couple of hours.

Is there anything else I can help with in the meantime?`,
  },

  // Off-topic
  offTopic: {
    keywords: ["weather", "pizza", "football", "joke", "funny"],
    response: (name: string) => `Ha, good one ${name}! That's a bit outside my expertise — I'm best at helping with electrical and solar questions. 😄

Is there anything about our services I can help you with?`,
  },

  // Competitors
  competitors: {
    keywords: ["competitor", "other company", "better", "cheaper elsewhere", "someone else"],
    response: (name: string) => `I can only speak to what Pratt Electrical offers, ${name} — I'm not across the details of other companies.

What I can tell you is that we're CEC accredited, offer free quotes, and have built our reputation on quality work and genuine customer care.

Want to know more about what we do?`,
  },

  // Discount
  discount: {
    keywords: ["discount", "cheaper", "deal", "negotiate", "lower price", "best price"],
    response: (name: string) => `I can't negotiate pricing, ${name}, but I can tell you we always aim to be competitive and transparent. Our quotes include everything — no hidden costs.

The best way to get accurate pricing is to book a free quote. James can discuss your specific needs and find the best solution for your budget.

Want me to help arrange that?`,
  },

  // Thank you / goodbye
  thanks: {
    keywords: ["thank", "thanks", "cheers", "bye", "goodbye", "great", "helpful"],
    response: (name: string) => `You're welcome, ${name}! 😊

If you have any more questions later, feel free to come back and chat. Or you can always call us on ${contactInfo.phoneFormatted}.

Have a great day!`,
  },
};

// Find the best matching response
export function findResponse(query: string, userName: string): string {
  const lowerQuery = query.toLowerCase();

  // Check each knowledge base entry for keyword matches
  let bestMatch: { entry: keyof typeof knowledgeBase; score: number } | null = null;

  for (const [key, value] of Object.entries(knowledgeBase)) {
    const score = value.keywords.reduce((acc, keyword) => {
      if (lowerQuery.includes(keyword.toLowerCase())) {
        return acc + 1;
      }
      return acc;
    }, 0);

    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { entry: key as keyof typeof knowledgeBase, score };
    }
  }

  if (bestMatch) {
    return knowledgeBase[bestMatch.entry].response(userName);
  }

  // Default fallback response
  return `Thanks for your question, ${userName}! I'm not 100% sure about that one, but I'd hate to give you the wrong info.

For specific questions, the best option is to:

📞 **Call:** ${contactInfo.phoneFormatted}
📧 **Email:** ${contactInfo.email}

Or ask me about:
• Solar pricing and installation
• Battery storage
• EV chargers
• Electrical services
• Booking a free quote

Is there something else I can help with?`;
}

export default knowledgeBase;
