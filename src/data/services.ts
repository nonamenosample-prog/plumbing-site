export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image?: string;

  bullets: string[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "emergency",
    title: "Emergency Service",
    description: "24/7 help for urgent plumbing & electrical issues.",
    icon: "🚨",
    image: "/images/services/emergency.jpg",
    bullets: [
      "Same-day scheduling when available",
      "Transparent pricing before work starts",
      "Licensed & insured technicians",
    ],
    whyUs: [
      "Fast response times",
      "Clean, respectful techs",
      "Work backed by guarantee",
    ],
    faqs: [
      { q: "Do you offer 24/7 emergency service?", a: "Yes. Call us anytime and we’ll coordinate the fastest available help." },
      { q: "How quickly can someone arrive?", a: "Timing depends on location and workload, but we prioritize true emergencies." },
    ],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    description: "Repairs, installs, fixtures, and leak detection.",
    icon: "🔧",
    image: "/images/services/plumbing.jpg",
    bullets: ["Leak repairs & detection", "Fixtures & faucets", "Toilets & disposals"],
    whyUs: ["Upfront estimates", "Clean work area", "Quality parts & workmanship"],
    faqs: [
      { q: "Do you handle small repairs?", a: "Yes — from dripping faucets to running toilets and everything in between." },
      { q: "Do you provide estimates?", a: "Yes. We explain options and pricing before we start." },
    ],
  },
  {
    slug: "drain-sewer",
    title: "Drain & Sewer",
    description: "Clogs, hydro-jetting, inspections, and repairs.",
    icon: "🌀",
    image: "/images/services/drain-sewer.jpg",
    bullets: ["Drain cleaning", "Camera inspection", "Hydro-jetting"],
    whyUs: ["Modern diagnostic tools", "Long-term solutions", "Honest recommendations"],
    faqs: [
      { q: "Can you remove recurring clogs?", a: "Yes. We find the root cause and recommend the best long-term fix." },
      { q: "Do you do camera inspections?", a: "Yes — it helps diagnose issues without guesswork." },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    description: "Panels, outlets, lighting, safety inspections.",
    icon: "⚡",
    bullets: ["Outlet & switch repair", "Lighting installs", "Panel upgrades"],
    whyUs: ["Safety-first approach", "Code-compliant work", "Clear communication"],
    faqs: [
      { q: "Do you upgrade electrical panels?", a: "Yes. We assess your needs and install code-compliant upgrades." },
      { q: "Can you fix flickering lights?", a: "Yes — it can be wiring, fixtures, or panel issues. We diagnose safely." },
    ],
  },
  {
    slug: "water-heaters",
    title: "Water Heaters",
    description: "Repair, replacement, tankless & maintenance.",
    icon: "🔥",
    image: "/images/services/water-heaters.jpg",
    bullets: ["No-hot-water repairs", "Replacement & installs", "Tankless solutions"],
    whyUs: ["Right-size recommendations", "Quality installs", "Maintenance options"],
    faqs: [
      { q: "Tank or tankless—what’s better?", a: "It depends on usage and budget. We’ll explain pros/cons for your home." },
      { q: "Do you offer same-day replacement?", a: "Often yes, depending on stock and schedule." },
    ],
  },
  {
    slug: "water-treatment",
    title: "Water Treatment",
    description: "Filtration, softeners, clean water solutions.",
    icon: "💧",
    image: "/images/services/water-treatment.jpg",
    bullets: ["Whole-home filtration", "Water softeners", "Drinking water systems"],
    whyUs: ["Water testing guidance", "Trusted equipment", "Professional installation"],
    faqs: [
      { q: "Do I need a water softener?", a: "If you have hard water (scale, dry skin, spots), a softener can help." },
      { q: "Can you install RO drinking water?", a: "Yes — we install under-sink systems and advise on maintenance." },
    ],
  },
];
