"use client";

import { useState } from "react";
import BookingModal from "@/components/BookingModal";

export default function RoomHeroActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="tel:+919250538645"
          className="rounded-md bg-[#2b2118] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#f3ede6] transition hover:bg-[#3a2d22]"
        >
          Call To Book
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md border border-[#d8cfc4] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#6f6255] transition hover:border-[#c9a24d] hover:text-[#2b2118] cursor-pointer"
        >
          Book Now
        </button>
      </div>

      <BookingModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
