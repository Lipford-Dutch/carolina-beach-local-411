export type Category = "all" | "eat" | "do" | "night" | "services" | "news" | "water" | "essentials";
export type Daypart = "morning" | "midday" | "sunset" | "night";
export type HolidayTheme = "default" | "thanksgiving" | "christmas" | "new-years-eve" | "easter" | "memorial-day" | "fourth-of-july" | "labor-day";

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

export interface TownNewsItem {
  id: string;
  date: string;
  label: string;
  title: string;
  summary: string;
  url: string;
  kind: "town" | "holiday" | "community";
}

export const holidayThemes: { id: HolidayTheme; label: string; note: string }[] = [
  { id: "default", label: "Island standard", note: "Year-round Carolina Beach palette" },
  { id: "thanksgiving", label: "Thanksgiving", note: "Warm harvest colours for November" },
  { id: "christmas", label: "Christmas", note: "Coastal evergreen and cranberry" },
  { id: "new-years-eve", label: "New Year's Eve", note: "Midnight blue with celebratory gold" },
  { id: "easter", label: "Easter", note: "Soft spring colour accents" },
  { id: "memorial-day", label: "Memorial Day", note: "Respectful red, white, and blue" },
  { id: "fourth-of-july", label: "4th of July", note: "Bright summer patriotic accents" },
  { id: "labor-day", label: "Labor Day", note: "Late-summer sunset palette" },
];

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All spots" },
  { id: "eat", label: "Eat + drink" },
  { id: "do", label: "Things to do" },
  { id: "night", label: "After dark" },
  { id: "services", label: "Local services" },
  { id: "news", label: "News + media" },
  { id: "water", label: "Marina + ramps" },
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
    id: "nollies-taco-joint",
    name: "Nollie's Taco Joint",
    category: "eat",
    eyebrow: "Skate taco stop",
    description: "A colorful, beach-close taco joint for fast burritos, tacos, nachos, and laid-back Carolina Beach energy.",
    detail: "3 Pelican Lane",
    tags: ["Tacos", "Casual", "Near the beach"],
    dayparts: ["midday", "sunset", "night"],
    minutes: 45,
    url: "https://www.wilmingtonandbeaches.com/listing/nollies-taco-joint/1258/",
    image: "/images/hurricane-alleys.jpg",
    imageAlt: "Bright coastal restaurant dining space",
  },
  {
    id: "hoplite-pub",
    name: "HopLite Irish Pub",
    category: "night",
    eyebrow: "Neighborhood pub",
    description: "Irish and American pub fare, late island hours, food and drink specials, and a refreshed game-room hangout.",
    detail: "720 North Lake Park Boulevard",
    tags: ["Pub fare", "Game room", "Late hours"],
    dayparts: ["midday", "sunset", "night"],
    minutes: 75,
    url: "https://hopliterestaurant.com/",
    image: "/images/seawitch.jpg",
    imageAlt: "Warm outdoor restaurant patio prepared for evening service",
  },
  {
    id: "angels-auto-repair",
    name: "Angels Auto Repair",
    category: "services",
    eyebrow: "Island auto care",
    description: "A local automotive repair option for residents and visitors who need dependable help before getting back on the road.",
    detail: "306 N Lake Park Blvd, Carolina Beach · (910) 636-3053",
    tags: ["Auto repair", "Local service", "Verify hours"],
    dayparts: ["morning", "midday"],
    minutes: 30,
    url: "https://www.google.com/maps/search/?api=1&query=Angels+Auto+Repair+Carolina+Beach+NC",
    image: "/images/beach-path.jpg",
    imageAlt: "Sunny coastal road leading toward the water",
  },
  {
    id: "generals-of-chaos",
    name: "Generals of Chaos",
    category: "do",
    eyebrow: "Community listing",
    description: "A user-submitted local vendor listing added to the island guide; public business details and a primary link are still being confirmed.",
    detail: "Carolina Beach area · confirm location before visiting",
    tags: ["Community submitted", "Local vendor", "Details pending"],
    dayparts: ["morning", "midday", "sunset", "night"],
    minutes: 30,
    url: "https://www.carolinabeach.gov/",
    image: "/images/boardwalk.jpg",
    imageAlt: "Atlantic shoreline with bright water and sandy beach",
  },
  {
    id: "pleasure-island-design",
    name: "Pleasure Island Design",
    category: "services",
    eyebrow: "Coastal home pro",
    description: "Cabinet refinishing, refacing, repair, hardware, and design consultation for Carolina Beach and the SE North Carolina coast.",
    detail: "3720 Carolina Beach Road, Suite F, Wilmington",
    tags: ["Cabinetry", "Consultations", "Coastal homes"],
    dayparts: ["morning", "midday"],
    minutes: 30,
    url: "https://www.pleasureislanddesign.com/",
    image: "/images/beach-path.jpg",
    imageAlt: "Sunny coastal road leading toward the water",
  },
  {
    id: "island-gazette",
    name: "Island Gazette",
    category: "news",
    eyebrow: "Local news archive",
    description: "Carolina Beach's long-running community newspaper archive, useful for local history, events, business notes, and civic context.",
    detail: "Legacy publication; active contact and relaunch details should be verified locally",
    tags: ["Local news", "Island history", "Source pending"],
    dayparts: ["morning", "midday", "sunset"],
    minutes: 15,
    url: "https://www.islandgazette.net/",
    image: "/images/market.jpg",
    imageAlt: "Colorful produce at an open-air local market",
  },
  {
    id: "st-joseph-marina-boat-ramp",
    name: "St. Joseph Street Marina + Boat Ramp 411",
    category: "water",
    eyebrow: "Water access",
    description: "Sound-side marina placeholder paired with verified public launch options at Carolina Beach State Park and NC Wildlife boating access areas.",
    detail: "St. Joseph Street area; confirm private marina access before arrival",
    tags: ["Boat ramps", "Marina", "Verify access"],
    dayparts: ["morning", "midday", "sunset"],
    minutes: 30,
    url: "https://www.ncparks.gov/state-parks/carolina-beach-state-park/facilities",
    image: "/images/odysea.jpg",
    imageAlt: "Surfer riding a clean ocean wave",
  },
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
  morning: ["parking-411", "carolina-beach-market", "st-joseph-marina-boat-ramp"],
  midday: ["parking-411", "nollies-taco-joint", "boardwalk-district"],
  sunset: ["boardwalk-district", "hurricane-alleys", "hoplite-pub"],
  night: ["seawitch", "hoplite-pub", "nollies-taco-joint"],
};

export const townNews: TownNewsItem[] = [
  {
    id: "clean-marina",
    date: "Oct 13, 2026",
    label: "Town update",
    title: "Municipal Marina earns NC Clean Marina certification",
    summary: "The certification recognises best practices across water quality, stormwater, waste, fueling, emergency response, and education.",
    url: "https://www.carolinabeach.gov/m/NewsFlash",
    kind: "town",
  },
  {
    id: "coastal-park-grant",
    date: "Sep 29, 2026",
    label: "Town update",
    title: "$3.5M awarded for a future Coastal Park and Event Stage",
    summary: "A provisional New Hanover Community Endowment grant will support planning for public green space, events, and family amenities in the Boardwalk district.",
    url: "https://www.carolinabeach.gov/m/newsflash/home/detail/41",
    kind: "town",
  },
  {
    id: "holiday-market",
    date: "Dec 5, 2026",
    label: "Holiday calendar",
    title: "Holiday Market at Carolina Beach Lake",
    summary: "The annual market is scheduled for 9 AM–3 PM. Vendor applications are closed; check the Town page for approved-vendor and weather updates.",
    url: "https://www.carolinabeach.gov/215/Holiday-Market",
    kind: "holiday",
  },
  {
    id: "holiday-series",
    date: "Dec 4–19, 2026",
    label: "Holiday calendar",
    title: "Christmas Parade, Holiday Movie, and Santa by the Sea",
    summary: "The Town calendar lists the Christmas Parade on Dec. 4, Holiday Movie on Dec. 12, and Santa by the Sea on Dec. 19; schedules can change.",
    url: "https://www.carolinabeach.gov/196/Recreation-Programs",
    kind: "holiday",
  },
  {
    id: "ocean-rescue-buoy",
    date: "Sep 10, 2026",
    label: "Public safety",
    title: "CB/Kure Beach Ocean Rescue receives remote-control rescue buoy",
    summary: "The U SAFE device adds another tool for reaching people in distress while helping responders manage risk in the water.",
    url: "https://www.carolinabeach.gov/m/NewsFlash",
    kind: "town",
  },
];

export const swagItems = [
  { id: "sunset-tee", code: "CB", name: "Boardwalk Sunset Tee", note: "Washed coral, heavyweight cotton", color: "coral" },
  { id: "market-tote", code: "LOCAL", name: "Lake Market Tote", note: "Natural canvas, long handles", color: "kelp" },
  { id: "sticker-pack", code: "411", name: "Beach 411 Sticker Pack", note: "Weatherproof local-icons set", color: "tide" },
  { id: "vibes-cap", code: "VIBES", name: "Local Vibes Cap", note: "Low profile, sun-faded navy", color: "night" },
] as const;
