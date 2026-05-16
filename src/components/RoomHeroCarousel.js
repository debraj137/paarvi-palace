"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function RoomHeroCarousel({ images, altPrefix, priority = false }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[28px] md:min-h-[520px]">
      <Image
        src={images[activeIndex]}
        alt={`${altPrefix} ${activeIndex + 1}`}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 45vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Show previous room image"
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#2b2118] shadow-sm transition hover:bg-white"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Show next room image"
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#2b2118] shadow-sm transition hover:bg-white"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-sm">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show room image ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? "bg-white" : "bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
