"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  heroImage: string;
  allImages: string[];
}

export default function GallerySection({ heroImage, allImages }: Props) {
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // 4 preview photo tiles (indices 1–4 from allImages; index 0 is the hero)
  const previewPhotos = [allImages[1], allImages[2], allImages[3], allImages[4]];

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % allImages.length);
  }, [allImages.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        setViewAllOpen(false);
      }
      if (lightboxOpen) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, prev, next]);

  useEffect(() => {
    if (viewAllOpen || lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [viewAllOpen, lightboxOpen]);

  return (
    <>
      {/* ── 5-Tile Grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-2">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 rounded-2xl overflow-hidden">

          {/* ── Hero tile — col 1, rows 1-2 on desktop ──────────────── */}
          <div
            className="relative col-span-2 md:col-span-1 md:row-span-2 h-56 md:h-[420px] bg-stone-200 overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={heroImage}
              alt="Sea Lestine — main photo"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </div>

          {/* ── 4 photo tiles — cols 2-3, rows 1-2 on desktop ──────── */}
          {previewPhotos.map((src, idx) => (
            <div
              key={idx}
              className="relative h-36 md:h-[204px] bg-stone-200 overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(idx + 1)}
            >
              <Image
                src={src}
                alt={`Sea Lestine photo ${idx + 2}`}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* View All Photos button */}
        <div className="flex justify-end mt-3">
          <button
            onClick={() => setViewAllOpen(true)}
            className="flex items-center gap-2 border border-stone-300 text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:border-forest hover:text-forest transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
            </svg>
            View All {allImages.length} Photos
          </button>
        </div>
      </div>

      {/* ── View All Photos Modal ────────────────────────────────────── */}
      {viewAllOpen && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col"
          style={{ background: "rgba(0,0,0,0.96)" }}
        >
          <div className="flex items-center justify-between px-6 py-4 flex-shrink-0">
            <p className="text-white/60 text-sm font-sans">{allImages.length} Photos · Sea Lestine</p>
            <button
              onClick={() => setViewAllOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-8">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
              {allImages.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] bg-stone-800 rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={src}
                    alt={`Sea Lestine photo ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-400"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <svg
                      width="28" height="28"
                      viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Single-Image Lightbox ───────────────────────────────────── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-sans">
            {lightboxIndex + 1} / {allImages.length}
          </span>

          <div
            className="relative w-[90vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightboxIndex]}
              alt={`Gallery photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-black/30 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-black/30 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
