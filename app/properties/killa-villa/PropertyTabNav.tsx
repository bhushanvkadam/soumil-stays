"use client";

import { useEffect, useState } from "react";

const TABS = [
  { label: "About", id: "about" },
  { label: "Amenities", id: "amenities" },
  { label: "Good to Know", id: "good-to-know" },
  { label: "Reviews", id: "reviews" },
  { label: "Location", id: "location" },
];

export default function PropertyTabNav() {
  const [active, setActive] = useState("about");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      const threshold = 160;
      let current = TABS[0].id;
      for (const { id } of TABS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < threshold) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-[65px] z-10 bg-white border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex overflow-x-auto scrollbar-hide -mb-px">
          {TABS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex-shrink-0 px-5 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors duration-200 ${
                active === id
                  ? "border-forest text-forest"
                  : "border-transparent text-gray-500 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
