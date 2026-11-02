"use client";

import {
  ArrowRight,
  Bookmark,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  ExternalLink,
  Heart,
  Info,
  MapPin,
  Menu,
  Newspaper,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  SunMedium,
  Trash2,
  Waves,
  X,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useDeferredValue, useMemo, useState, useSyncExternalStore } from "react";
import { categories, dayparts, holidayThemes, quickPlans, swagItems, townNews, vendors, type Category, type Daypart, type HolidayTheme } from "./data";

const EMPTY_LIST = "[]";

function readStoredList(key: string): string {
  if (typeof window === "undefined") return EMPTY_LIST;
  try {
    const value = window.localStorage.getItem(key);
    if (!value) return EMPTY_LIST;
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) && parsed.every((item) => typeof item === "string")
      ? JSON.stringify(parsed)
      : EMPTY_LIST;
  } catch {
    return EMPTY_LIST;
  }
}

function usePersistentList(key: string): [string[], (next: string[]) => void] {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const eventName = `cb411:${key}`;
      const handleStorage = (event: StorageEvent) => {
        if (event.key === key) onStoreChange();
      };
      window.addEventListener("storage", handleStorage);
      window.addEventListener(eventName, onStoreChange);
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(eventName, onStoreChange);
      };
    },
    [key],
  );

  const getSnapshot = useCallback(() => readStoredList(key), [key]);
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => EMPTY_LIST);
  const value = useMemo<string[]>(() => JSON.parse(snapshot) as string[], [snapshot]);

  const setValue = useCallback(
    (next: string[]) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // The planner remains usable when storage is unavailable.
      }
      window.dispatchEvent(new Event(`cb411:${key}`));
    },
    [key],
  );

  return [value, setValue];
}

function minutesLabel(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  if (minutes === 60) return "1 hr";
  return `${minutes / 60} hrs`;
}

export default function Home() {
  const [category, setCategory] = useState<Category>("all");
  const [daypart, setDaypart] = useState<Daypart>("midday");
  const [query, setQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const [route, setRoute] = usePersistentList("route");
  const [savedSwag, setSavedSwag] = usePersistentList("swag");
  const [holidayTheme, setHolidayTheme] = useState<HolidayTheme>("default");

  const visibleVendors = useMemo(() => {
    const matches = vendors.filter((vendor) => {
      const searchable = [vendor.name, vendor.eyebrow, vendor.description, vendor.detail, ...vendor.tags]
        .join(" ")
        .toLowerCase();
      return (category === "all" || vendor.category === category) && searchable.includes(deferredQuery);
    });

    return matches.toSorted((a, b) => Number(b.dayparts.includes(daypart)) - Number(a.dayparts.includes(daypart)));
  }, [category, daypart, deferredQuery]);

  const routeVendors = useMemo(
    () => route.map((id) => vendors.find((vendor) => vendor.id === id)).filter((vendor) => vendor !== undefined),
    [route],
  );

  const routeMinutes = routeVendors.reduce((total, vendor) => total + vendor.minutes, 0);

  const toggleRoute = (id: string) => {
    if (route.includes(id)) {
      setRoute(route.filter((item) => item !== id));
      return;
    }
    setRoute([...route, id]);
  };

  const makeQuickPlan = () => {
    setRoute(quickPlans[daypart]);
    window.setTimeout(() => document.querySelector("#my-route")?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
  };

  const toggleSwag = (id: string) => {
    setSavedSwag(savedSwag.includes(id) ? savedSwag.filter((item) => item !== id) : [...savedSwag, id]);
  };

  return (
    <div className={`site-shell theme-${holidayTheme}`}>
      <a className="skip-link" href="#main-content">Skip to planner</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Carolina Beach 411 home">
          <span className="brand-mark" aria-hidden="true"><Waves /></span>
          <span>
            <strong>Carolina Beach</strong>
            <small>LOCAL VENDORS · VIBES · 411</small>
          </span>
        </a>

        <button
          className="icon-button mobile-menu"
          type="button"
          aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          {mobileNavOpen ? <X /> : <Menu />}
        </button>

        <nav className={mobileNavOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          <a href="#directory" onClick={() => setMobileNavOpen(false)}>Find a spot</a>
          <a href="#beach-411" onClick={() => setMobileNavOpen(false)}>Beach 411</a>
          <a href="#local-intel" onClick={() => setMobileNavOpen(false)}>Local intel</a>
          <a href="#themes" onClick={() => setMobileNavOpen(false)}>Themes</a>
          <a href="#swag" onClick={() => setMobileNavOpen(false)}>Swag</a>
          <a className="route-link" href="#my-route" onClick={() => setMobileNavOpen(false)}>
            <Bookmark aria-hidden="true" /> My route <span>{route.length}</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/images/beach-path.jpg"
            alt="Sunlit beach path opening toward the Atlantic Ocean"
            width="2200"
            height="1400"
            priority
            sizes="100vw"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-inner">
            <p className="kicker"><SunMedium aria-hidden="true" /> 2026 island edition</p>
            <h1 id="hero-title">Carolina Beach,<br />planned in 3 minutes.</h1>
            <p className="hero-copy">Choose your moment. We’ll surface the local stops and beach-day basics that fit it.</p>

            <div className="planner-bar" aria-label="Quick beach-day planner">
              <label className="search-control">
                <Search aria-hidden="true" />
                <span className="sr-only">Search local spots</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search food, surf, music…"
                  autoComplete="off"
                />
              </label>

              <fieldset className="daypart-control">
                <legend>Plan for</legend>
                <div className="segmented-control">
                  {dayparts.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={daypart === item.id ? "is-active" : ""}
                      aria-pressed={daypart === item.id}
                      onClick={() => setDaypart(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <button className="primary-action" type="button" onClick={makeQuickPlan}>
                <Sparkles aria-hidden="true" /> Build my 3-stop plan
              </button>
            </div>
          </div>
        </section>

        <section className="pulse-strip" aria-label="Current 2026 quick facts">
          <a href="https://www.carolinabeach.gov/201/Carolina-Beach-Market" target="_blank" rel="noreferrer">
            <span className="pulse-icon market"><Check /></span>
            <span><strong>Market season</strong><small>Saturdays · 8 AM-1 PM</small></span>
            <ChevronRight />
          </a>
          <a href="https://www.carolinabeach.gov/249/Parking" target="_blank" rel="noreferrer">
            <span className="pulse-icon parking"><MapPin /></span>
            <span><strong>Parking 411</strong><small>Paid through October 31</small></span>
            <ChevronRight />
          </a>
          <a href="https://cbboardwalk.com/" target="_blank" rel="noreferrer">
            <span className="pulse-icon rides"><Sparkles /></span>
            <span><strong>Rides are open</strong><small>Daily · 5-11 PM</small></span>
            <ChevronRight />
          </a>
          <a href="https://www.carolinabeach.gov/306/Municipal-Marina-Mooring-Field" target="_blank" rel="noreferrer">
            <span className="pulse-icon water"><Waves /></span>
            <span><strong>Harbor check</strong><small>Reservations required</small></span>
            <ChevronRight />
          </a>
        </section>

        <section className="theme-section" id="themes" aria-labelledby="themes-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow"><Palette aria-hidden="true" /> SEASONAL CONTROL</p>
              <h2 id="themes-title">Set the island mood.</h2>
            </div>
            <p>Apply a holiday skin when you need one. The theme changes colour accents and atmosphere only; it never changes civic facts, vendor details, or event dates.</p>
          </div>
          <div className="theme-picker" role="toolbar" aria-label="Choose a holiday theme">
            {holidayThemes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                className={holidayTheme === theme.id ? "is-active" : ""}
                aria-pressed={holidayTheme === theme.id}
                onClick={() => setHolidayTheme(theme.id)}
              >
                <span>{theme.label}</span>
                <small>{theme.note}</small>
              </button>
            ))}
          </div>
          <p className="theme-status" aria-live="polite"><Sparkles aria-hidden="true" /> Active theme: <strong>{holidayThemes.find((theme) => theme.id === holidayTheme)?.label}</strong>. Saved for this visit.</p>
        </section>

        <section className="directory-section" id="directory" aria-labelledby="directory-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">LOCAL SHORTLIST</p>
              <h2 id="directory-title">Find your next stop.</h2>
            </div>
            <p>Independent favorites, services, local news, water access, and official essentials worth checking before the plan gets moving.</p>
          </div>

          <div className="category-tabs" role="toolbar" aria-label="Filter local spots by category">
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                className={category === item.id ? "is-active" : ""}
                aria-pressed={category === item.id}
                onClick={() => setCategory(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="directory-layout">
            <div>
              <p className="result-line" aria-live="polite">
                <strong>{visibleVendors.length}</strong> {visibleVendors.length === 1 ? "spot" : "spots"}
                {query ? ` matching “${query}”` : ` · ${dayparts.find((item) => item.id === daypart)?.label} picks first`}
              </p>

              {visibleVendors.length > 0 ? (
                <div className="vendor-grid">
                  {visibleVendors.map((vendor) => {
                    const isSaved = route.includes(vendor.id);
                    return (
                      <article className="vendor-card" key={vendor.id}>
                        <div className="vendor-image-wrap">
                          <Image
                            src={vendor.image}
                            alt={vendor.imageAlt}
                            width="1200"
                            height="800"
                            sizes="(max-width: 780px) 100vw, (max-width: 1100px) 65vw, 40vw"
                          />
                          <span className={`category-badge ${vendor.category}`}>{vendor.eyebrow}</span>
                          {vendor.dayparts.includes(daypart) && <span className="moment-badge">Fits {daypart}</span>}
                        </div>
                        <div className="vendor-content">
                          <div className="vendor-title-row">
                            <h3>{vendor.name}</h3>
                            <button
                              className={isSaved ? "save-button is-saved" : "save-button"}
                              type="button"
                              aria-label={isSaved ? `Remove ${vendor.name} from route` : `Add ${vendor.name} to route`}
                              aria-pressed={isSaved}
                              title={isSaved ? "Remove from route" : "Add to route"}
                              onClick={() => toggleRoute(vendor.id)}
                            >
                              {isSaved ? <Check /> : <Bookmark />}
                            </button>
                          </div>
                          <p>{vendor.description}</p>
                          <p className="vendor-detail"><MapPin aria-hidden="true" /> {vendor.detail}</p>
                          <div className="tag-list" aria-label={`${vendor.name} features`}>
                            {vendor.tags.map((tag) => <span key={tag}>{tag}</span>)}
                          </div>
                          <div className="vendor-actions">
                            <span><Clock3 aria-hidden="true" /> {minutesLabel(vendor.minutes)}</span>
                            <a href={vendor.url} target="_blank" rel="noreferrer">
                              Visit official site <ExternalLink aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="empty-state">
                  <Search aria-hidden="true" />
                  <h3>No beach-day match yet.</h3>
                  <p>Try a broader search or reset the category.</p>
                  <button type="button" onClick={() => { setQuery(""); setCategory("all"); }}>Show every spot</button>
                </div>
              )}
            </div>

            <aside className="route-panel" id="my-route" aria-labelledby="route-title">
              <div className="route-heading">
                <div>
                  <p className="eyebrow">MY BEACH DAY</p>
                  <h2 id="route-title">Your route</h2>
                </div>
                {route.length > 0 && (
                  <button className="icon-button" type="button" onClick={() => setRoute([])} aria-label="Clear route" title="Clear route">
                    <Trash2 />
                  </button>
                )}
              </div>

              <div className="route-progress" aria-label={`${Math.min(route.length, 3)} of 3 suggested stops selected`}>
                {[0, 1, 2].map((slot) => <span key={slot} className={route.length > slot ? "is-filled" : ""} />)}
              </div>

              {routeVendors.length === 0 ? (
                <div className="route-empty">
                  <Compass aria-hidden="true" />
                  <p>Three good stops are enough for a memorable beach day.</p>
                  <button type="button" onClick={makeQuickPlan}><Sparkles /> Make it easy</button>
                </div>
              ) : (
                <ol className="route-list">
                  {routeVendors.map((vendor, index) => (
                    <li key={vendor.id}>
                      <span className="route-number">{String(index + 1).padStart(2, "0")}</span>
                      <span><strong>{vendor.name}</strong><small>{vendor.eyebrow} · {minutesLabel(vendor.minutes)}</small></span>
                      <button type="button" onClick={() => toggleRoute(vendor.id)} aria-label={`Remove ${vendor.name}`}><X /></button>
                    </li>
                  ))}
                </ol>
              )}

              <div className="route-total">
                <span><Clock3 /> Estimated stop time</span>
                <strong>{routeMinutes ? minutesLabel(routeMinutes) : "—"}</strong>
              </div>
              <p className="local-save-note"><Check /> Saved on this device</p>
            </aside>
          </div>
        </section>

        <section className="essentials-section" id="beach-411" aria-labelledby="essentials-title">
          <div className="section-intro inverse">
            <div>
              <p className="eyebrow">THE USEFUL STUFF</p>
              <h2 id="essentials-title">Beach 411, before your feet hit the sand.</h2>
            </div>
            <a href="https://www.carolinabeach.gov/" target="_blank" rel="noreferrer">Town updates <ArrowRight /></a>
          </div>
          <div className="essentials-grid">
            <article><span>01</span><h3>Parking season</h3><p>Paid town parking is enforced March 1 through October 31, generally 9 AM-8 PM. Check signs and current rates.</p><a href="https://www.carolinabeach.gov/249/Parking" target="_blank" rel="noreferrer">Parking details <ExternalLink /></a></article>
            <article><span>02</span><h3>Boardwalk access</h3><p>The raised oceanfront boardwalk has public access points, seating, showers, foot washes, and restroom facilities.</p><a href="https://www.carolinabeach.gov/298/Boardwalk-District" target="_blank" rel="noreferrer">Boardwalk guide <ExternalLink /></a></article>
            <article><span>03</span><h3>Thursday energy</h3><p>Summer boardwalk nights pair amusement rides with live bands and fireworks. Weather can change plans.</p><a href="https://cbboardwalk.com/" target="_blank" rel="noreferrer">Check the latest <ExternalLink /></a></article>
            <article><span>04</span><h3>Boat ramp 411</h3><p>Carolina Beach State Park lists a 54-slip marina with two public ramps, fuel, supplies, restrooms, and launch fees.</p><a href="https://www.ncparks.gov/state-parks/carolina-beach-state-park/facilities" target="_blank" rel="noreferrer">State Park ramps <ExternalLink /></a></article>
            <article><span>05</span><h3>NC Wildlife access</h3><p>Use the NC Wildlife boating access locator for free public access areas, closures, accessibility, and caution notes.</p><a href="https://www.ncwildlife.gov/boating/boating-access-areas" target="_blank" rel="noreferrer">Find ramps <ExternalLink /></a></article>
            <article><span>06</span><h3>Ocean first</h3><p>Read posted flags, swim near lifeguards, hydrate early, and treat rip-current guidance as non-negotiable.</p><a href="https://www.weather.gov/safety/ripcurrent" target="_blank" rel="noreferrer">NOAA safety <ExternalLink /></a></article>
          </div>
        </section>

        <section className="intel-section" id="local-intel" aria-labelledby="intel-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">LOCAL INTEL</p>
              <h2 id="intel-title">More signal, less scrolling.</h2>
            </div>
            <p>Fast source links for the pieces visitors usually need after they pick food, music, a ramp, or a beach access point.</p>
          </div>
          <div className="intel-grid">
            <article>
              <Newspaper aria-hidden="true" />
              <h3>News + local context</h3>
              <p>Island Gazette remains useful as a legacy Carolina Beach news archive. Active publishing/contact details should be verified before treating it as a current paper.</p>
              <a href="https://www.islandgazette.net/" target="_blank" rel="noreferrer">Open Island Gazette <ExternalLink /></a>
            </article>
            <article>
              <Waves aria-hidden="true" />
              <h3>Marina + mooring</h3>
              <p>The Town Municipal Marina and Mooring Field serves ICW mile marker 295 with reservations, dinghy docks, pump-out stations, and harbor master support.</p>
              <a href="https://www.carolinabeach.gov/306/Municipal-Marina-Mooring-Field" target="_blank" rel="noreferrer">Town marina info <ExternalLink /></a>
            </article>
            <article>
              <Info aria-hidden="true" />
              <h3>Visitor center</h3>
              <p>The Pleasure Island Chamber visitor center at 1121 North Lake Park Boulevard is the current source for guides, events, and island questions.</p>
              <a href="https://carolina-beach.wilmingtonandbeaches.com/about/island-info/visitor-information-center/" target="_blank" rel="noreferrer">Visitor info <ExternalLink /></a>
            </article>
          </div>
        </section>

        <section className="news-section" id="town-news" aria-labelledby="town-news-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow"><Newspaper aria-hidden="true" /> TOWN NEWS</p>
              <h2 id="town-news-title">What’s moving on the island.</h2>
            </div>
            <p>Curated from the Town of Carolina Beach’s public news, recreation, and holiday pages. Dates and schedules should be rechecked before publishing a promotion.</p>
          </div>
          <div className="news-grid">
            {townNews.map((item) => (
              <article className={`news-card ${item.kind}`} key={item.id}>
                <div className="news-meta"><span>{item.label}</span><time>{item.date}</time></div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href={item.url} target="_blank" rel="noreferrer">Read the source <ExternalLink aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="swag-section" id="swag" aria-labelledby="swag-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">BEACH VIBES SWAG</p>
              <h2 id="swag-title">Wear the good part home.</h2>
            </div>
            <p>Early merch concepts inspired by the market, the boardwalk, and the unhurried island rhythm.</p>
          </div>
          <div className="swag-grid">
            {swagItems.map((item) => {
              const isSaved = savedSwag.includes(item.id);
              return (
                <article className={`swag-card ${item.color}`} key={item.id}>
                  <div className="swag-art"><span>{item.code}</span><Waves aria-hidden="true" /></div>
                  <div className="swag-copy">
                    <span>Concept 0{swagItems.indexOf(item) + 1}</span>
                    <h3>{item.name}</h3>
                    <p>{item.note}</p>
                    <button type="button" onClick={() => toggleSwag(item.id)} aria-pressed={isSaved}>
                      {isSaved ? <Check /> : <Heart />} {isSaved ? "Saved" : "Save concept"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="swag-status" aria-live="polite"><ShoppingBag /> {savedSwag.length} {savedSwag.length === 1 ? "concept" : "concepts"} saved on this device</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><Waves /><strong>Carolina Beach<br />Local Vendors + Beach Vibes 411</strong></div>
        <p>Built for the hour between “what should we do?” and sunset.</p>
        <div className="footer-links">
          <a href="https://www.carolinabeach.gov/" target="_blank" rel="noreferrer">Town of Carolina Beach</a>
          <a href="https://cbboardwalk.com/" target="_blank" rel="noreferrer">Boardwalk Amusements</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <small>Information checked November 2, 2026. Hours, rates, weather, access rules, and seasonal schedules can change; confirm with each linked source before heading out.</small>
      </footer>
    </div>
  );
}
