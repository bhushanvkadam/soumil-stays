"use client";

import { useState } from "react";

const QUICK_FACTS = [
  { label: "Check-in", value: "12:00 PM" },
  { label: "Check-out", value: "10:00 AM" },
  { label: "Max Guests", value: "6 Guests" },
  { label: "Caretaker", value: "On-Site" },
];

interface CardProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}

function QuickCard({ icon, label, onClick, active }: CardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border text-center transition-all duration-200 hover:border-forest hover:shadow-sm cursor-pointer ${
        active ? "border-forest bg-[#01B9C5]/5" : "border-stone-200 bg-white"
      }`}
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
          active ? "bg-forest text-white" : "bg-stone-100 text-gray-500"
        }`}
      >
        {icon}
      </div>
      <span className="text-xs font-medium text-foreground leading-tight">{label}</span>
    </button>
  );
}

export default function QuickFactsCards() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-3">
        {/* House Rules */}
        <QuickCard
          label="House Rules"
          onClick={() => scrollTo("good-to-know")}
          icon={
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M9 12h6M9 16h4" />
            </svg>
          }
        />

        {/* Cancellation Policy */}
        <QuickCard
          label="Cancellation"
          onClick={() => scrollTo("good-to-know")}
          icon={
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
          }
        />

        {/* Quick Facts */}
        <QuickCard
          label="Quick Facts"
          onClick={() => setPopoverOpen((v) => !v)}
          active={popoverOpen}
          icon={
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          }
        />

        {/* Things To Do */}
        <QuickCard
          label="Things To Do"
          onClick={() => scrollTo("nearby")}
          icon={
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
          }
        />
      </div>

      {/* Quick Facts Popover */}
      {popoverOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setPopoverOpen(false)}
          />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-lg border border-stone-100 p-4 z-20">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
              At a Glance
            </p>
            <div className="flex flex-col gap-2.5">
              {QUICK_FACTS.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{label}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
