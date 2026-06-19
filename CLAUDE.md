# Soumil's Stays — Project Rules for Claude Code

## Project Overview
Luxury villa rental website for Soumil's Stays. 19 properties across Alibag, Dapoli, and Karjat. Built with Next.js 14 App Router, Tailwind CSS, TypeScript.

## Tech Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Language: TypeScript
- Fonts: Poppins (headings, weights 500/600/700), Inter (body)
- Hosting: Vercel

## Brand Colours
- Teal (primary): #01B9C5 — Tailwind token: `forest` / `bg-forest` / `text-forest`
- Background: #FFFFFF (pure white) — Tailwind token: `background` / `bg-background`
- Light grey (section separation): #F8F9FA — use `bg-[#F8F9FA]` on alternating sections that need visual separation from white
- White (cards, navbar): #FFFFFF
- Near black (body text): #1a1a1a
- Grey (secondary text): #6b7280
- Footer background: #017a85 (dark teal — use this for footer only)
- Hover/darker teal: #019aaa (use for button hover states, e.g. `hover:bg-[#019aaa]`)
- Stats bar: #01B9C5 (bright teal — matches primary)

## Folder Structure
- app/ — pages and layouts
- components/ — reusable components
- components/ui/ — Button, Badge, SectionHeading, Accordion
- lib/ — data files and utilities
- public/ — images and static assets

## Design Rules — Never Break These
- Poppins for ALL headings (via `font-heading` class), Inter for everything else
- Buttons: rounded-lg, never all-caps, primary = teal bg (`bg-forest`) + white text
- Cards: shadow-sm, hover:shadow-md hover:-translate-y-1 transition
- Sections: minimum py-20 on desktop
- Images: always aspect-video + object-cover + bg-stone-200 fallback
- Never use pure #000000 — use #1a1a1a for text
- Mobile first always

## Homepage Section Order
1. Navbar
2. Hero (full screen)
3. Search bar (destination, dates, guests)
4. Featured property — Suruchi
5. Property grid
6. Destination tiles — Alibag, Dapoli, Karjat
7. Why Soumil's Stays (stats bar)
8. Testimonials
9. About teaser
10. Footer
11. Sticky side contact widget

## Key Facts
- Featured property: Suruchi — 6BHK, lake-touching, Kurul Alibag
- Destinations: Alibag, Dapoli, Karjat
- WhatsApp numbers: +91 9112385333, +91 8149165295, +91 8169706267, +91 8975265295
- No pricing data yet — show "Enquire for pricing" wherever price would appear
- Use bg-stone-200 placeholder for all images until real photos arrive
- All property data lives in lib/properties.ts only — never hardcode in components
