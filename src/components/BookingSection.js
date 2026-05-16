"use client";
import BookingModal from "./BookingModal";
import { useState } from "react";

export default function BookingSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="reserve-now"
      className="bg-[#f7f4ef] border-t border-[#e5ddd3]"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        {/* Heading */}
        <span className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
          Reservation
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide text-[#2b2118]">
          Book Your Stay at Paarvi Palace
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Experience comfort, peace, and warm hospitality near Ram Mandir, Ayodhya.
        </p>

        {/* CTA */}
        <button
          onClick={() => setOpen(true)}
          className="mt-10 bg-[#2b2118] text-[#f3ede6] px-10 py-4 rounded-md tracking-widest uppercase hover:bg-[#3a2d22] transition cursor-pointer"
        >
          Reserve Now
        </button>

        {/* Booking Modal */}
        <BookingModal
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
}
