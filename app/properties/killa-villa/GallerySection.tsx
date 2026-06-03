"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  heroImage: string;
  thumbnails: string[];
  allImages: string[];
}

export default function GallerySection({ heroImage, thumbnails, allImages }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const extra = allImages.length - thumbnails.length;

  const openAt = (i: number) => {
    setActiveIndex(i);
    setLightboxOpen(true);
  };

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % allImages.length);
  }, [allImages.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, prev, next]);

  return (
    <>
      {/* Hero */}
      <div
        className="relative w-full bg-stone-200 overflow-hidden cursor-pointer h-64 md:h-[65vh]"
        onClick={() => openAt(0)}
      >
        <Image
          src={heroImage}
          alt="Killa Villa exterior"
          fill
          className="object-cover hover:scale-[1.02] transition-transform duration-700"
          priority
          sizes="100vw"
        />
      </div>

      {/* Thumbnail strip — scrollable on mobile */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-3">
        <div className="flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible scrollbar-hide">
          {thumbnails.map((src, i) => {
            const isLast = i === thumbnails.length - 1;
            return (
              <div
                key={i}
                className="relative flex-shrink-0 w-[120px] md:w-auto aspect-[4/3] bg-stone-200 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openAt(i + 1)}
              >
                <Image
                  src={src}
                  alt={`Killa Villa photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 120px, 25vw"
                />
                {isLast && extra > 0 && (
                  <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                    <span className="text-white text-base font-medium">
                      +{extra} Photos
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox — z-[9999] covers navbar */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-sans">
            {activeIndex + 1} / {allImages.length}
          </span>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[activeIndex]}
              alt={`Gallery photo ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-black/30 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
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
