"use client";

import { useState } from "react";

const DESTINATIONS = ["All Destinations", "Alibag", "Dapoli", "Karjat"];

export default function SearchBar() {
  const [destination, setDestination] = useState("All destinations");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <div className="relative z-10 -mt-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">

          {/* Destination */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Destination
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm text-foreground bg-white focus:outline-none focus:ring-1 focus:ring-forest"
            >
              {DESTINATIONS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Check In
            </label>
            <input
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm text-foreground bg-white focus:outline-none focus:ring-1 focus:ring-forest"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Check Out
            </label>
            <input
              type="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm text-foreground bg-white focus:outline-none focus:ring-1 focus:ring-forest"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Guests
            </label>
            <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden h-[42px]">
              <button
                type="button"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="px-3 h-full text-gray-500 hover:bg-stone-50 transition-colors text-lg leading-none"
              >
                −
              </button>
              <span className="flex-1 text-center text-sm text-foreground font-medium">
                {guests} Adult{guests !== 1 ? "s" : ""}
              </span>
              <button
                type="button"
                onClick={() => setGuests(Math.min(20, guests + 1))}
                className="px-3 h-full text-gray-500 hover:bg-stone-50 transition-colors text-lg leading-none"
              >
                +
              </button>
            </div>
          </div>

          {/* Search button — 5th field in the row */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-transparent uppercase tracking-widest select-none">Search</span>
            <button className="w-full bg-forest text-white rounded-lg px-6 py-2.5 text-sm font-medium hover:bg-[#15352a] transition-colors flex items-center justify-center gap-2 h-[42px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Search
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
