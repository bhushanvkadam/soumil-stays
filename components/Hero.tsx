"use client";

import { useState } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const HERO_IMG =
  "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.07.47.png";

const VIMEO_SRC =
  "https://player.vimeo.com/video/36016501?autoplay=1&muted=1&loop=1&background=1&controls=0";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  // Fires when the Vimeo iframe document has loaded. A short extra delay lets
  // the player script initialise and buffer a few frames so the fade reveals
  // moving video rather than a loading spinner.
  const handleIframeLoad = () => {
    setTimeout(() => setVideoReady(true), 400);
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-stone-900 overflow-hidden">

      {/* ── Layer 1: fallback image (always visible, never removed) ── */}
      <Image
        src={HERO_IMG}
        alt="Soumil's Stays luxury villa"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* ── Layer 2: Vimeo video (crossfades over the image) ───────── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          opacity: videoReady ? 1 : 0,
          transition: "opacity 700ms ease-in-out",
        }}
        aria-hidden="true"
      >
        <iframe
          src={VIMEO_SRC}
          allow="autoplay; fullscreen"
          frameBorder="0"
          title=""
          className="video-cover"
          onLoad={handleIframeLoad}
        />
      </div>

      {/* ── Layer 3: dark overlay (always on top of both layers) ───── */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-28">
          <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-5 font-sans">
            Alibag · Dapoli · Karjat
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-5 max-w-2xl">
            Your Perfect Escape Awaits
          </h1>
          <p className="text-white/75 text-base md:text-lg mb-10 max-w-lg leading-relaxed font-sans">
            19 private villas across Alibag, Dapoli and Karjat — curated for those who travel with intention
          </p>
          <a
            href="#villas"
            className="block sm:inline-block w-full sm:w-auto text-center bg-forest text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-[#019aaa] transition-colors duration-300"
          >
            Explore Properties
          </a>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative z-10 w-full px-4 md:px-8 pt-8 pb-12">
        <SearchBar />
      </div>
    </section>
  );
}
