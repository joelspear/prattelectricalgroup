// Chat Knowledge Base for Pratt Electrical AI Chatbot

import { contactInfo } from "./siteData";

export const getWelcomeMessage = () => `👋 Hi there! I'm the Pratt Electrical assistant.

I can help you with questions about solar, electrical services, bookings, and more.

Before we chat, could I grab your name and email? That way, if we get disconnected or you need follow-up info, we can reach you.`;

export const getPostRegistrationMessage = (name: string) => `Thanks ${name}! Great to meet you. 😊

How can I help you today? You can ask me anything about:
• Solar panel installation
• Battery storage options
• Electrical services (residential & commercial)
• EV charger installation
• Finance options
• Booking a free quote

Or just type your question and I'll do my best to help!`;

// Knowledge base for responses
const knowledgeBase = {
  // Solar
  solarPricing: {
    keywords: ["solar", "price", "cost", "how much", "pricing", "solar system", "panels"],
    response: (name: string) => `Great question, ${name}! Solar system pricing depends on your home, roof type, and energy usage.

The best way to get an accurate price is a free quote — we'll assess your roof, check your power usage, and recommend the right system. Government rebates of up to $20,000 are available and we handle all the paperwork.

📅 **Book a quick 10-min discovery call** and we'll chat through your options: ${DISCOVERY_CALL_URL}

Or call us directly on ${contactInfo.phoneFormatted}!`,
  },

  // Battery
  batteryPricing: {
    keywords: ["battery", "storage", "backup"],
    response: (name: string) => `Great question about batteries, ${name}!

Battery storage lets you use your solar power at night and during blackouts — true energy independence. We install a range of quality battery systems with solid warranties.

Government rebates are available to help reduce the cost. The best way to find the right battery for your setup is a free assessment.

📅 **Book a quick 10-min discovery call** to discuss your options: ${DISCOVERY_CALL_URL}`,
  },

  // EV Charger
  evChargerPricing: {
    keywords: ["ev", "charger", "electric vehicle", "car charger", "charging"],
    response: (name: string) => `Great question about EV chargers, ${name}!

We install a range of EV chargers for both residential and commercial properties. If you have solar, we can set up smart charging to use your excess solar power!

Every installation is different, so the best way to get accurate pricing is a free assessment.

📅 **Book a quick 10-min discovery call** to chat through your setup: ${DISCOVERY_CALL_URL}`,
  },

  // Electrical services
  electricalPricing: {
    keywords: ["switchboard", "power point", "safety switch", "rcd", "electrical", "electrician", "rewire"],
    response: (name: string) => `We offer a full range of electrical services, ${name}:

• Switchboard upgrades
• Safety switch (RCD) installation
• Power point installation
• Lighting upgrades
• General electrical maintenance

Every job is different, so we provide a clear quote before any work begins — no hidden costs.

📅 **Book a quick 10-min discovery call** to discuss your needs: ${DISCOVERY_CALL_URL}`,
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
    keywords: ["book", "quote", "appointment", "free quote", "consultation", "visit", "come out", "discovery", "call"],
    response: (name: string) => `Fantastic, ${name}! I can help with that.

You've got a few options:

1. 📅 **Book a 10-min discovery call:** ${DISCOVERY_CALL_URL}
2. **Call directly:** ${contactInfo.phoneFormatted}
3. **Email:** ${contactInfo.email}

The discovery call is a quick chat to understand your needs and give you a rough idea on pricing. No obligation!

Which would work best for you?`,
  },

  // Service areas
  serviceAreas: {
    keywords: ["service area", "location", "suburb", "where", "cover", "travel", "come to", "mount barker", "hills", "northern", "southern"],
    response: (name: string) => `Great question, ${name}! We service all of South Australia.

We're based in Adelaide and cover the full metro area, Adelaide Hills, northern suburbs, southern suburbs, and regional SA.

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
    response: (name: string) => `Great question, ${name}! The right solar system size depends on your household size, energy usage, and budget.

We assess your actual electricity bills and usage patterns to recommend the right size. A system that's too small won't cover your needs, and too big wastes money.

📅 **Book a free discovery call** and we'll work it out together: ${DISCOVERY_CALL_URL}`,
  },

  // Warranty
  warranty: {
    keywords: ["warranty", "guarantee", "how long last", "covered", "protection"],
    response: (name: string) => `Great question about warranties, ${name}!

We only use quality panels and inverters backed by solid long-term warranties. We also stand behind our installation workmanship.

No cheap imports that fail after a few years — we use reputable brands with proper warranty backing.

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
• **Payment plans** through our finance partners

For solar and larger jobs, payment plans make it easy to start saving on power bills right away without a big upfront cost.

Would you like more details on the finance options?`,
  },

  // Rebates
  rebates: {
    keywords: ["rebate", "incentive", "government", "stc", "subsidy", "scheme", "discount"],
    response: (name: string) => `Great question about rebates, ${name}!

Government rebates of up to $20,000 are available for solar and battery installations. These can significantly reduce the upfront cost.

We handle all the rebate paperwork for you and our quoted prices include applicable rebates.

📅 **Book a discovery call** to find out how much you could save: ${DISCOVERY_CALL_URL}`,
  },

  // Credentials
  credentials: {
    keywords: ["licensed", "accredited", "qualified", "saa", "insured", "certified"],
    response: (name: string) => `Absolutely, ${name}! Here are our credentials:

✅ Fully licensed electricians
✅ SAA (Standards Australia) Accredited Solar Installers
✅ Fully insured
✅ Police checked
✅ Growing by reputation since 2020

We take our credentials seriously — it's how we ensure quality work and protect our customers.

Anything else you'd like to know about us?`,
  },

  // About company
  about: {
    keywords: ["about", "who", "company", "pratt", "history", "started"],
    response: (name: string) => `Happy to share, ${name}!

Pratt Electrical Group was started in 2020. We've grown rapidly through word-of-mouth and reputation — not big advertising budgets.

Based in Adelaide, we're now one of South Australia's fastest-growing electrical and solar teams. Our philosophy is simple: quality work, fair pricing, and genuine customer care.

Is there something specific you'd like to know?`,
  },

  // Contact
  contact: {
    keywords: ["contact", "phone", "email", "call", "reach", "talk", "speak"],
    response: (name: string) => `Here's how to reach us, ${name}:

📞 **Phone:** ${contactInfo.phoneFormatted}
📧 **Email:** ${contactInfo.email}
📍 **Base:** Adelaide, South Australia

**Hours:**
• Mon-Fri 7am-5pm

We typically respond within 2 business hours. Is there anything else I can help with?`,
  },

  // Human handoff
  humanHandoff: {
    keywords: ["speak to someone", "talk to human", "real person", "not helpful", "frustrated"],
    response: (name: string) => `I understand, ${name}. I think this one's best handled by our team directly.

Here's how to reach us:

📞 **Call:** ${contactInfo.phoneFormatted}
📧 **Email:** ${contactInfo.email}

If it's during business hours (Mon-Fri 7am-5pm), we'll typically respond within a couple of hours.

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

What I can tell you is that we're SAA accredited, offer free quotes, and have built our reputation on quality work and genuine customer care.

Want to know more about what we do?`,
  },

  // Discount
  discount: {
    keywords: ["discount", "cheaper", "deal", "negotiate", "lower price", "best price"],
    response: (name: string) => `I can't negotiate pricing, ${name}, but I can tell you we always aim to be competitive and transparent. Our quotes include everything — no hidden costs.

The best way to get accurate pricing is a quick chat with our team.

📅 **Book a 10-min discovery call** and we'll find the best solution for your budget: ${DISCOVERY_CALL_URL}`,
  },

  // Referral
  referral: {
    keywords: ["referral", "refer", "friend", "recommend"],
    response: (name: string) => `Great question, ${name}! We have a referral program where you earn **$300** for every successful referral.

Just have your friend mention your name when they book. Once their job is complete, you get $300. No limit on how many people you can refer!

Check out our referrals page for more details, or give us a call on ${contactInfo.phoneFormatted}.`,
  },

  // Thank you / goodbye
  thanks: {
    keywords: ["thank", "thanks", "cheers", "bye", "goodbye", "great", "helpful"],
    response: (name: string) => `You're welcome, ${name}! 😊

If you have any more questions later, feel free to come back and chat. Or you can always call us on ${contactInfo.phoneFormatted}.

Have a great day!`,
  },
};

const DISCOVERY_CALL_URL = "https://api.leadconnectorhq.com/widget/bookings/10min-discovery-call";

// Detect interest tags from user messages
const tagKeywords: Record<string, string[]> = {
  solar: ["solar", "panels", "solar system", "solar installation"],
  battery: ["battery", "storage", "backup", "powerwall"],
  "ev-charger": ["ev", "charger", "electric vehicle", "car charger", "charging"],
  electrical: ["switchboard", "power point", "safety switch", "rcd", "electrician", "rewire", "lighting", "wiring"],
  residential: ["residential", "home", "house"],
  commercial: ["commercial", "business", "office", "warehouse", "shop"],
};

export function detectInterestTags(message: string): string[] {
  const lower = message.toLowerCase();
  const tags: string[] = [];

  for (const [tag, keywords] of Object.entries(tagKeywords)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      tags.push(tag);
    }
  }

  return tags;
}

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
• Solar installation
• Battery storage
• EV chargers
• Electrical services
• Booking a free quote

Is there something else I can help with?`;
}

export default knowledgeBase;
