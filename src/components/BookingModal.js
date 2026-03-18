"use client";

import emailjs from "emailjs-com";
import { useState } from "react";
import { getRoomPricing, rooms } from "@/data/roomPrices";

const roomTypeOptions = ["Deluxe Room", "Executive Room", "Family Suite"];

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    roomType: "",
    roomVariant: "",
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "1",
    children: "0",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      ...(name === "roomType"
        ? { roomType: value, roomVariant: "" }
        : { [name]: value }),
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      ...(name === "roomType" ? { roomVariant: "" } : {}),
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.roomType) {
      newErrors.roomType = "Please select a room type";
    }

    if (!form.roomVariant) {
      newErrors.roomVariant = "Please select AC or Non-AC";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!form.checkIn) {
      newErrors.checkIn = "Please select a check-in date";
    }

    if (!form.checkOut) {
      newErrors.checkOut = "Please select a check-out date";
    }

    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      newErrors.checkOut = "Check-out date must be after check-in date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const roomPricing = getRoomPricing(rooms[form.roomType]);
  const selectedVariantPricing = roomPricing?.[form.roomVariant] ?? null;

  const nights =
    form.checkIn && form.checkOut
      ? Math.ceil(
          (new Date(form.checkOut) - new Date(form.checkIn)) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const totalPrice = selectedVariantPricing
    ? selectedVariantPricing.discountedPrice * nights
    : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          roomType: form.roomType,
          roomVariant: form.roomVariant === "ac" ? "AC" : "Non-AC",
          name: form.name,
          email: form.email,
          phone: form.phone,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          adults: form.adults,
          children: form.children,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setForm({
      roomType: "",
      roomVariant: "",
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      adults: "1",
      children: "0",
    });
    setErrors({});
    onClose();
  };

  const sendWhatsApp = () => {
    const message = `
New Booking Request - Paarvi Palace

Room: ${form.roomType}
Variant: ${form.roomVariant === "ac" ? "AC" : "Non-AC"}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Check-in: ${form.checkIn}
Check-out: ${form.checkOut}
Adults: ${form.adults}
Children: ${form.children}
`;

    window.open(
      `https://wa.me/918123417647?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 md:bg-black/50"
        onClick={handleClose}
      />

      <div
        className="relative mx-4 flex max-h-[90vh] w-full max-w-xl flex-col rounded-xl bg-[#faf9f7] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-[#faf9f7] px-10 pb-6 pt-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#b8a992]">
            Reservation
          </span>

          <h2 className="mt-3 text-3xl font-light tracking-wide text-[#2b2118]">
            Book Your Stay
          </h2>

          <div className="mt-5 h-[2px] w-16 bg-[#c9a24d]" />
        </div>

        {!success ? (
          <form
            onSubmit={handleSubmit}
            className="flex-1 space-y-6 overflow-y-auto px-10 py-6"
          >
            <div>
              <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                Room Type
              </label>
              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className={`w-full appearance-none rounded-md border bg-white px-4 py-3 text-[#2b2118] focus:outline-none ${
                  errors.roomType
                    ? "border-red-500"
                    : "border-[#d8cfc4] focus:border-[#c9a24d]"
                }`}
              >
                <option value="">Select Room Type</option>
                {roomTypeOptions.map((roomType) => (
                  <option key={roomType} value={roomType}>
                    {roomType}
                  </option>
                ))}
              </select>
              {errors.roomType && (
                <p className="mt-1 text-sm text-red-600">{errors.roomType}</p>
              )}
            </div>

            {form.roomType && (
              <div>
                <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                  Room Category
                </label>
                <select
                  name="roomVariant"
                  value={form.roomVariant}
                  onChange={handleChange}
                  className={`w-full appearance-none rounded-md border bg-white px-4 py-3 text-[#2b2118] focus:outline-none ${
                    errors.roomVariant
                      ? "border-red-500"
                      : "border-[#d8cfc4] focus:border-[#c9a24d]"
                  }`}
                >
                  <option value="">Select AC or Non-AC</option>
                  <option value="nonAc">Non-AC</option>
                  <option value="ac">AC</option>
                </select>
                {errors.roomVariant && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.roomVariant}
                  </p>
                )}
              </div>
            )}

            {form.roomType && roomPricing && (
              <div className="rounded-md border border-[#e5ddd3] bg-[#f3ede6] px-4 py-3 text-sm text-[#2b2118]">
                <p className="font-medium">Room pricing per night</p>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-md bg-white/70 px-3 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7a5e]">
                      Non-AC
                    </p>
                    <p className="mt-1 text-gray-500 line-through">
                      ₹{roomPricing.nonAc.originalPrice}
                    </p>
                    <p className="font-medium">
                      ₹{roomPricing.nonAc.discountedPrice}
                    </p>
                  </div>

                  <div className="rounded-md bg-white/70 px-3 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7a5e]">
                      AC
                    </p>
                    <p className="mt-1 text-gray-500 line-through">
                      ₹{roomPricing.ac.originalPrice}
                    </p>
                    <p className="font-medium">₹{roomPricing.ac.discountedPrice}</p>
                  </div>
                </div>

                {selectedVariantPricing && (
                  <p className="mt-3 font-medium">
                    Selected {form.roomVariant === "ac" ? "AC" : "Non-AC"} rate:
                    {" "}₹{selectedVariantPricing.discountedPrice} / night
                  </p>
                )}

                {selectedVariantPricing && nights > 0 && (
                  <p className="mt-1 font-medium">
                    Total ({nights} night{nights > 1 ? "s" : ""}): ₹{totalPrice}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Guest full name"
                className="w-full appearance-none rounded-md border border-[#d8cfc4] bg-white px-4 py-3 text-[#2b2118] focus:border-[#c9a24d] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full appearance-none rounded-md border bg-white px-4 py-3 text-[#2b2118] focus:outline-none ${
                  errors.email
                    ? "border-red-500"
                    : "border-[#d8cfc4] focus:border-[#c9a24d]"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={`w-full appearance-none rounded-md border bg-white px-4 py-3 text-[#2b2118] focus:outline-none ${
                  errors.phone
                    ? "border-red-500"
                    : "border-[#d8cfc4] focus:border-[#c9a24d]"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  min={today}
                  className="w-full appearance-none rounded-md border border-[#d8cfc4] bg-white px-4 py-3 text-[#2b2118] focus:border-[#c9a24d] focus:outline-none"
                />
                {errors.checkIn && (
                  <p className="mt-1 text-sm text-red-600">{errors.checkIn}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  min={form.checkIn || today}
                  className="w-full appearance-none rounded-md border border-[#d8cfc4] bg-white px-4 py-3 text-[#2b2118] focus:border-[#c9a24d] focus:outline-none"
                />
                {errors.checkOut && (
                  <p className="mt-1 text-sm text-red-600">{errors.checkOut}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                  Adults
                </label>
                <select
                  name="adults"
                  value={form.adults}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-md border border-[#d8cfc4] bg-white px-4 py-3 text-[#2b2118] focus:border-[#c9a24d] focus:outline-none"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm tracking-wide text-[#2b2118]">
                  Children
                </label>
                <select
                  name="children"
                  value={form.children}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-md border border-[#d8cfc4] bg-white px-4 py-3 text-[#2b2118] focus:border-[#c9a24d] focus:outline-none"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {errors.submit && (
              <p className="text-sm text-red-600">{errors.submit}</p>
            )}

            <div className="sticky bottom-0 flex items-center justify-between border-t border-[#e5ddd3] bg-[#faf9f7] px-10 py-6">
              <button
                type="button"
                onClick={handleClose}
                className="cursor-pointer text-sm uppercase tracking-widest text-[#6f6255] transition hover:text-[#2b2118]"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer rounded-md px-8 py-3 uppercase tracking-widest transition ${
                  loading
                    ? "cursor-not-allowed bg-gray-400 text-white"
                    : "bg-[#2b2118] text-[#f3ede6] hover:bg-[#3a2d22]"
                }`}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <div className="px-10 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a24d] text-2xl text-[#c9a24d]">
              ✓
            </div>

            <h3 className="mt-8 text-2xl font-light tracking-wide text-[#2b2118]">
              Booking Request Sent
            </h3>

            <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-600">
              Thank you for choosing Paarvi Palace. We&apos;ve received your
              booking request and will contact you shortly to confirm
              availability.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={sendWhatsApp}
                className="rounded-md bg-[#25D366] px-6 py-3 uppercase tracking-widest text-white transition hover:bg-[#1ebe5d]"
              >
                Send via WhatsApp
              </button>

              <button
                onClick={handleClose}
                className="border-b border-[#2b2118] pb-1 text-sm uppercase tracking-widest text-[#2b2118] transition hover:border-[#c9a24d] hover:text-[#c9a24d]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
