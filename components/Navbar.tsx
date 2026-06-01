"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = ["Home", "Destinations", "Properties", "About", "Contact"];

interface NavbarProps {
  variant?: "dark" | "light";
  activeLink?: string;
}

export default function Navbar({ variant = "dark", activeLink }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";

  return (
    <nav
      className={
        isDark
          ? "absolute top-0 left-0 right-0 z-20"
          : "sticky top-0 z-20 bg-white border-b border-stone-100"
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link
          href="/"
          className={`font-heading text-xl md:text-2xl tracking-wide ${
            isDark ? "text-white" : "text-foreground"
          }`}
        >
          Soumil Stays
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <Link
                href={link === "Home" ? "/" : "#"}
                className={`text-sm transition-colors duration-200 ${
                  isDark
                    ? "text-white/80 hover:text-white"
                    : link === activeLink
                    ? "text-forest font-medium border-b-2 border-forest pb-0.5"
                    : "text-gray-600 hover:text-foreground"
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className={`hidden md:inline-block text-sm border rounded-lg px-4 py-2 transition-colors duration-200 ${
            isDark
              ? "text-white border-white/50 hover:bg-white/10"
              : "text-foreground border-stone-300 hover:bg-stone-50"
          }`}
        >
          List Your Property
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-1 ${isDark ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className={`md:hidden px-6 pb-6 ${
            isDark ? "bg-forest/95 backdrop-blur-sm" : "bg-white border-b border-stone-100"
          }`}
        >
          <ul className="flex flex-col gap-5 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className={`text-sm ${isDark ? "text-white" : "text-foreground"}`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#"
                className={`inline-block text-sm border rounded-lg px-4 py-2 ${
                  isDark ? "text-white border-white/50" : "text-foreground border-stone-300"
                }`}
                onClick={() => setOpen(false)}
              >
                List Your Property
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
