"use client";

import { useState } from "react";

const INITIAL_COUNT = 10;

interface Props {
  amenities: string[];
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-forest mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function AmenitiesSection({ amenities }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? amenities : amenities.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visible.map((label) => (
          <div key={label} className="flex items-start gap-2.5">
            <CheckIcon />
            <span className="text-sm text-gray-600">{label}</span>
          </div>
        ))}
      </div>
      {!expanded && amenities.length > INITIAL_COUNT && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-5 flex items-center gap-1.5 text-sm font-medium text-forest hover:underline underline-offset-2"
        >
          Show all {amenities.length} amenities
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}
