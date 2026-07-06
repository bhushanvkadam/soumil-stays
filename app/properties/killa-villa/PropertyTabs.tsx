"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import AmenitiesSection from "./AmenitiesSection";
import GoodToKnow from "./GoodToKnow";

// ─── Static data ───────────────────────────────────────────────────────────────
const AMENITIES: string[] = [
  "3 AC Bedrooms",
  "AC Living Room",
  "Smart TV",
  "Wi-Fi",
  "Private Pool",
  "Lawn",
  "Outdoor Games",
  "Board Games",
  "Refrigerator",
  "Microwave",
  "Induction",
  "Dishes & Silverware",
  "5 Bathrooms",
  "Towels & Toiletries",
  "Power Backup",
  "Caretaker",
  "Private Parking",
  "24hr CCTV",
];

const PRICING = [
  { season: "Weekday (Mon – Thu)", rate: "Enquire", minStay: "1 Night" },
  { season: "Weekend (Fri – Sun)", rate: "Enquire", minStay: "2 Nights" },
  { season: "Peak (Dec 20 – Jan 5)", rate: "Enquire", minStay: "3 Nights" },
];

const REVIEWS = [
  {
    text: "Honestly one of the best villa stays we've had near Mumbai. The glass walls make the living room feel like you're outside, and the pool was perfect. Caretaker was incredibly helpful throughout.",
    reviewer: "Priya M.",
    date: "May 2025",
    rating: 5,
    guests: 4,
    nights: 2,
  },
  {
    text: "Great space for our group of 6. Everything was clean, well-maintained, and exactly as described. The location in Varsoli is quieter than Alibag town which we loved.",
    reviewer: "Rahul & Family",
    date: "March 2025",
    rating: 5,
    guests: 6,
    nights: 3,
  },
  {
    text: "Perfect weekend escape. Loved the pool and the open living area. Would have loved slightly better kitchen equipment but otherwise a fantastic stay.",
    reviewer: "Sneha K.",
    date: "April 2025",
    rating: 4,
    guests: 3,
    nights: 2,
  },
];

interface CategoryRating {
  label: string;
  score: number;
  icon: ReactNode;
}

const CATEGORY_RATINGS: CategoryRating[] = [
  {
    label: "Staff",
    score: 4.9,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Cleanliness",
    score: 4.8,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Location",
    score: 5.0,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Value",
    score: 4.7,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={s <= rating ? "#f59e0b" : "none"}
          stroke="#f59e0b"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

// ─── Tab content panels ────────────────────────────────────────────────────────
function AboutContent() {
  return (
    <div className="py-8 flex flex-col gap-5">
      <div className="border-l-4 border-forest bg-[#01B9C5]/5 rounded-r-xl p-5">
        <h3 className="font-heading text-base text-foreground mb-2">
          What Makes This Place Special
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Killa Villa&apos;s defining feature is its wall of glass — three full-height panels
          that turn the living room into an extension of the pool deck. It&apos;s the kind
          of stillness that&apos;s hard to find within two hours of Mumbai.
        </p>
      </div>
      <p className="text-gray-600 text-[15px] leading-relaxed">
        Wake up to stillness. At Killa Villa, mornings begin with light flooding through
        full-height glass walls, the pool glinting in the courtyard below, and nothing on
        the agenda but deciding where to have your coffee. This is a villa designed for
        people who want to feel genuinely away.
      </p>
      <p className="text-gray-600 text-[15px] leading-relaxed">
        Killa Villa is a modern 3BHK private villa in Varsoli, Alibag — featuring a
        double-sized living area, a private swimming pool, and warm interiors that invite
        you to slow down. With space for six guests and a caretaker on call, every detail
        of your stay is taken care of.
      </p>
    </div>
  );
}

function AmenitiesContent() {
  return (
    <div className="py-8">
      <AmenitiesSection amenities={AMENITIES} />
    </div>
  );
}

function GoodToKnowContent() {
  return (
    <div className="py-8 flex flex-col gap-10">
      <GoodToKnow />
      <div>
        <h2 className="font-heading text-2xl text-foreground mb-4">Seasonal Pricing</h2>
        <div className="rounded-xl overflow-hidden border border-stone-200">
          <div className="bg-forest grid grid-cols-3 px-5 py-3">
            {["Season / Day", "Rate (Per Night)", "Min. Stay"].map((h) => (
              <span key={h} className="text-xs font-medium text-white/80 uppercase tracking-wider">
                {h}
              </span>
            ))}
          </div>
          {PRICING.map(({ season, rate, minStay }, i) => (
            <div
              key={season}
              className={`grid grid-cols-3 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}`}
            >
              <span className="text-foreground">{season}</span>
              <span className="text-gray-500 italic">{rate}</span>
              <span className="text-gray-500">{minStay}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewsContent() {
  return (
    <div className="py-8 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="font-heading text-5xl text-foreground leading-none">4.8</span>
        <div>
          <Stars rating={5} size={16} />
          <p className="text-xs text-gray-400 mt-1">Based on 24 stays</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 p-5 bg-[#F8F9FA] rounded-xl">
        {CATEGORY_RATINGS.map(({ label, score, icon }) => (
          <div key={label} className="flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#01B9C5]/10 flex items-center justify-center text-forest">
              {icon}
            </div>
            <span className="font-heading text-lg text-foreground leading-none">{score}</span>
            <span className="text-xs text-gray-400">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {REVIEWS.map(({ text, reviewer, date, rating, guests, nights }) => (
          <div
            key={reviewer}
            className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm flex flex-col gap-3"
          >
            <Stars rating={rating} />
            <p className="text-xs text-gray-400">
              {guests} guests &middot; {nights} nights &middot; {date}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
              &ldquo;{text}&rdquo;
            </p>
            <div className="pt-3 border-t border-stone-100">
              <p className="text-xs font-medium tracking-widest uppercase text-foreground">
                {reviewer}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Killa Villa</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────
type TabId = "about" | "amenities" | "good-to-know" | "reviews";

const TABS: { label: string; id: TabId }[] = [
  { label: "About", id: "about" },
  { label: "Amenities", id: "amenities" },
  { label: "Good to Know", id: "good-to-know" },
  { label: "Reviews", id: "reviews" },
];

export default function PropertyTabs() {
  const [active, setActive] = useState<TabId>("about");

  return (
    <div>
      {/* Sticky tab bar — negative margins break out of container padding on mobile/tablet */}
      <div className="sticky top-[65px] z-10 bg-white border-b border-stone-100 shadow-sm -mx-4 md:-mx-8 lg:mx-0">
        <div className="relative px-4 md:px-8 lg:px-0">
          <div className="flex overflow-x-auto scrollbar-hide -mb-px">
            {TABS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex-shrink-0 px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm font-medium border-b-2 whitespace-nowrap transition-colors duration-200 ${
                  active === id
                    ? "border-forest text-forest"
                    : "border-transparent text-gray-500 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          {/* Right fade — indicates more tabs available on small screens */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent lg:hidden" />
        </div>
      </div>

      {/* Tab content — only the active panel renders */}
      <div className="min-h-[280px]">
        {active === "about" && <AboutContent />}
        {active === "amenities" && <AmenitiesContent />}
        {active === "good-to-know" && <GoodToKnowContent />}
        {active === "reviews" && <ReviewsContent />}
      </div>
    </div>
  );
}
