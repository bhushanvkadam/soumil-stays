"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = ["Home", "Destinations", "Properties", "About", "Contact"];
const WA_LINK = "https://wa.me/918975265295";

interface NavbarProps {
  variant?: "dark" | "light";
  activeLink?: string;
}

export default function Navbar({ variant = "dark", activeLink }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <nav
      ref={navRef}
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
          Soumil&apos;s Stays
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
                  href={link === "Home" ? "/" : "#"}
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
            {/* WhatsApp contact */}
            <li className={`pt-4 border-t ${isDark ? "border-white/10" : "border-stone-100"}`}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm ${
                  isDark ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-foreground"
                } transition-colors`}
                onClick={() => setOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
