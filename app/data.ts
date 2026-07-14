export type Category = "all" | "eat" | "do" | "night" | "essentials";
export type Daypart = "morning" | "midday" | "sunset" | "night";

export interface Vendor {
  id: string;
  name: string;
  category: Exclude<Category, "all">;
  eyebrow: string;
  description: string;
  detail: string;
  tags: string[];
  dayparts: Daypart[];
  minutes: number;
  url: string;
  image: string;
  imageAlt: string;
}

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All spots" },
  { id: "eat", label: "Eat + drink" },
  { id: "do", label: "Things to do" },
  { id: "night", label: "After dark" },
  { id: "essentials", label: "Beach basics" },
];

export const dayparts: { id: Daypart; label: string }[] = [
  { id: "morning", label: "Morning" },
  { id: "midday", label: "Midday" },
  { id: "sunset", label: "Sunset" },
  { id: "night", label: "Night" },
];

export const vendors: Vendor[] = [
  {
    id: "carolina-beach-market",
    name: "Carolina Beach Market",
    category: "do",
    eyebrow: "Saturday ritual",
    description: "Fresh produce, baked goods, local wine, natural soaps, makers, and live music by the lake.",
    detail: "Saturdays, 8 AM-1 PM through October 3, 2026",
    tags: ["Local makers", "Pet friendly", "Lake"],
    dayparts: ["morning", "midday"],
    minutes: 45,
    url: "https://www.carolinabeach.gov/201/Carolina-Beach-Market",
    image: "/images/market.jpg",
    imageAlt: "Colorful produce at an open-air local market",
  },
  {
    id: "boardwalk-district",
    name: "Boardwalk District",
    category: "do",
    eyebrow: "Classic CB",
    description: "A pedestrian beachside stretch for ocean views, shops, food, swings, and easy people-watching.",
    detail: "Between Cape Fear Boulevard and Harper Avenue",
    tags: ["Walkable", "Beach access", "Family"],
    dayparts: ["morning", "midday", "sunset", "night"],
    minutes: 60,
    url: "https://www.carolinabeach.gov/298/Boardwalk-District",
    image: "/images/boardwalk.jpg",
    imageAlt: "Atlantic shoreline with bright water and sandy beach",
  },
  {
    id: "boardwalk-amusements",
    name: "Boardwalk Amusements",
    category: "night",
    eyebrow: "New for 2026",
    description: "Thrill rides, kids rides, midway games, fair food, and a 100-foot oceanfront gondola wheel.",
    detail: "Open daily, 5-11 PM; seasonal dates may change",
    tags: ["Rides", "Games", "Ocean views"],
    dayparts: ["sunset", "night"],
    minutes: 90,
    url: "https://cbboardwalk.com/",
    image: "/images/rides.jpg",
    imageAlt: "Illuminated amusement rides against an evening sky",
  },
  {
    id: "seawitch",
    name: "SeaWitch Cafe & Tiki Bar",
    category: "night",
    eyebrow: "Music + patio",
    description: "A lively local stop for coastal food, an outdoor tiki bar, and a regular live-music calendar.",
    detail: "227 Carolina Beach Avenue North",
    tags: ["Live music", "Dinner", "Patio"],
    dayparts: ["sunset", "night"],
    minutes: 90,
    url: "https://seawitchtikibar.com/",
    image: "/images/seawitch.jpg",
    imageAlt: "Warm outdoor restaurant patio prepared for evening service",
  },
  {
    id: "hurricane-alleys",
    name: "Hurricane Alley’s",
    category: "eat",
    eyebrow: "Oceanfront break",
    description: "Boardwalk food and drinks with an upstairs deck that makes the Atlantic part of the table.",
    detail: "5 Boardwalk",
    tags: ["Oceanfront", "Deck", "Lunch + dinner"],
    dayparts: ["midday", "sunset", "night"],
    minutes: 60,
    url: "https://hurricanealleyscb.com/",
    image: "/images/hurricane-alleys.jpg",
    imageAlt: "Bright coastal restaurant dining space",
  },
  {
    id: "odysea-surf-school",
    name: "Odysea Surf School & Ocean Lab",
    category: "do",
    eyebrow: "Learn the water",
    description: "Teacher-led surf instruction, paddle sessions, camps, and hands-on ocean education for kids.",
    detail: "607 North Lake Park Boulevard",
    tags: ["Surf", "Ocean Lab", "Adaptive partner"],
    dayparts: ["morning", "midday"],
    minutes: 90,
    url: "https://odyseasurf.com/",
    image: "/images/odysea.jpg",
    imageAlt: "Surfer riding a clean ocean wave",
  },
  {
    id: "tony-silvagni",
    name: "Tony Silvagni Surf School",
    category: "do",
    eyebrow: "Pro-led adventure",
    description: "Year-round surf and paddleboard lessons, kayak tours, camps, and delivered beach rentals.",
    detail: "107 Charlotte Avenue",
    tags: ["Lessons", "Rentals", "Kayak tours"],
    dayparts: ["morning", "midday"],
    minutes: 90,
    url: "https://surfschoolnc.com/",
    image: "/images/tony-silvagni.jpg",
    imageAlt: "Surfboard floating on clear ocean water",
  },
  {
    id: "parking-411",
    name: "Parking + Beach Access 411",
    category: "essentials",
    eyebrow: "Know before you go",
    description: "Check current parking availability, rates, access points, and payment options before the beach day starts.",
    detail: "Paid season: March 1-October 31, 9 AM-8 PM",
    tags: ["Live map", "Rates", "Accessibility"],
    dayparts: ["morning", "midday", "sunset", "night"],
    minutes: 5,
    url: "https://www.carolinabeach.gov/249/Parking",
    image: "/images/beach-path.jpg",
    imageAlt: "Sunny coastal road leading toward the water",
  },
];

export const quickPlans: Record<Daypart, string[]> = {
  morning: ["parking-411", "carolina-beach-market", "odysea-surf-school"],
  midday: ["parking-411", "boardwalk-district", "hurricane-alleys"],
  sunset: ["boardwalk-district", "hurricane-alleys", "boardwalk-amusements"],
  night: ["seawitch", "boardwalk-amusements", "hurricane-alleys"],
};

export const swagItems = [
  { id: "sunset-tee", code: "CB", name: "Boardwalk Sunset Tee", note: "Washed coral, heavyweight cotton", color: "coral" },
  { id: "market-tote", code: "LOCAL", name: "Lake Market Tote", note: "Natural canvas, long handles", color: "kelp" },
  { id: "sticker-pack", code: "411", name: "Beach 411 Sticker Pack", note: "Weatherproof local-icons set", color: "tide" },
  { id: "vibes-cap", code: "VIBES", name: "Local Vibes Cap", note: "Low profile, sun-faded navy", color: "night" },
] as const;
