"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function RoomModal({
  rooms,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (activeIndex === null) return null;

  const room = rooms[activeIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 md:bg-black/80 backdrop-blur-sm flex items-center justify-center">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-[#c9a24d] transition"
      >
        <X size={28} />
      </button>

      {/* Left Arrow */}
      <button
        onClick={onPrev}
        className="absolute left-6 text-white hover:text-[#c9a24d] transition"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={onNext}
        className="absolute right-6 text-white hover:text-[#c9a24d] transition"
      >
        <ChevronRight size={40} />
      </button>

      {/* Modal Content */}
      <div className="max-w-5xl w-full px-6">

        {/* Image */}
        <div
          className="h-[70vh] bg-cover bg-center rounded-sm"
          style={{ backgroundImage: `url(${room.image})` }}
        />

        {/* Info */}
        <div className="mt-6 text-center text-white">
          <h2 className="text-3xl font-light tracking-wide">
            {room.title}
          </h2>

          <p className="mt-2 text-gray-300">
            Starting from {room.price}
          </p>

          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            {room.description}
          </p>
        </div>

      </div>
    </div>
  );
}
