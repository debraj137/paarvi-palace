"use client";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
    
    const [form, setForm] = useState({
        roomType: "",
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        adults: "1",       // NEW (default 1 adult)
        children: "0",     // NEW
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const today = new Date().toISOString().split("T")[0];
    const [loading, setLoading] = useState(false);
    if (!isOpen) return null;
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};

        if (!form.roomType) {
            newErrors.roomType = "Please select a room type";
        }

        // Email
        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address";
        }

        // Phone (India)
        if (!form.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
            newErrors.phone = "Enter a valid 10-digit mobile number";
        }

        // Date validation
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        console.log("Booking data:", form);
        setLoading(true);
        try {
            await emailjs.send(
                // "service_vmo3puh",
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                // "__ejs-test-mail-service__",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    roomType: form.roomType,
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    checkIn: form.checkIn,
                    checkOut: form.checkOut,
                    adults: form.adults,
                    children: form.children,
                },
                // "5O0_W59M6dR_YI6O9"
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            // alert("Booking request sent successfully!");
            setSuccess(true);
        } catch (error) {
            // alert("Failed to send booking. Please try again.");
            setErrors({ submit: "Something went wrong. Please try again." });
        }
        finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setSuccess(false);
        setForm({
            roomType: "",
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
New Booking Request – Paarvi Palace

Room: ${form.roomType}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Check-in: ${form.checkIn}
Check-out: ${form.checkOut}
Adults: ${form.adults}
Children: ${form.children}
`;

        window.open(
            `https://wa.me/916000347693?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };




    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/30 md:bg-black/50"
                onClick={handleClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-xl mx-4 bg-[#faf9f7] rounded-xl shadow-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="px-10 pt-10 pb-6 sticky top-0 bg-[#faf9f7] z-10">
                    <span className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
                        Reservation
                    </span>

                    <h2 className="mt-3 text-3xl font-light tracking-wide text-[#2b2118]">
                        Book Your Stay
                    </h2>

                    <div className="mt-5 w-16 h-[2px] bg-[#c9a24d]"></div>
                </div>

                {/* Form */}
                {!success ? (
                    <form onSubmit={handleSubmit} className="px-10 py-6 space-y-6 overflow-y-auto flex-1">

                        {/* Room Type */}
                        <div>
                            <label className="block text-sm tracking-wide text-[#2b2118] mb-2">
                                Room Type
                            </label>
                            <select
                                name="roomType"
                                value={form.roomType}
                                onChange={handleChange}
                                className={`w-full bg-transparent border px-4 py-3 rounded-md focus:outline-none ${errors.roomType
                                    ? "border-red-500"
                                    : "border-[#d8cfc4] focus:border-[#c9a24d]"
                                    }`}>
                                <option value="">Select Room Type</option>
                                <option>Deluxe Room</option>
                                <option>Executive Room</option>
                                <option>Family Suite</option>
                            </select>
                        </div>

                        {/* Guest Name */}
                        <div>
                            <label className="block text-sm tracking-wide text-[#2b2118] mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Guest full name"
                                className="w-full bg-transparent border border-[#d8cfc4] px-4 py-3 rounded-md focus:outline-none focus:border-[#c9a24d]"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm tracking-wide text-[#2b2118] mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`w-full bg-transparent border px-4 py-3 rounded-md focus:outline-none ${errors.email
                                    ? "border-red-500"
                                    : "border-[#d8cfc4] focus:border-[#c9a24d]"
                                    }`}
                            />

                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm tracking-wide text-[#2b2118] mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+91 XXXXX XXXXX"
                                className={`w-full bg-transparent border px-4 py-3 rounded-md focus:outline-none ${errors.phone
                                    ? "border-red-500"
                                    : "border-[#d8cfc4] focus:border-[#c9a24d]"
                                    }`}
                            />

                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.phone}
                                </p>
                            )}

                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm tracking-wide text-[#2b2118] mb-2">
                                    Check-in Date
                                </label>
                                <input
                                    type="date"
                                    name="checkIn"
                                    value={form.checkIn}
                                    onChange={handleChange}
                                    min={today}
                                    className="w-full bg-transparent border border-[#d8cfc4] px-4 py-3 rounded-md focus:outline-none focus:border-[#c9a24d]"
                                />
                                {errors.checkIn && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.checkIn}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm tracking-wide text-[#2b2118] mb-2">
                                    Check-out Date
                                </label>
                                <input
                                    type="date"
                                    name="checkOut"
                                    value={form.checkOut}
                                    onChange={handleChange}
                                    min={form.checkIn || today}
                                    className="w-full bg-transparent border border-[#d8cfc4] px-4 py-3 rounded-md focus:outline-none focus:border-[#c9a24d]"
                                />
                                {errors.checkOut && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.checkOut}
                                    </p>
                                )}

                            </div>
                        </div>
                        {/* Guests */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm tracking-wide text-[#2b2118] mb-2">
                                    Adults
                                </label>
                                <select
                                    name="adults"
                                    value={form.adults}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border border-[#d8cfc4] px-4 py-3 rounded-md focus:outline-none focus:border-[#c9a24d]"
                                >
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <option key={n} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm tracking-wide text-[#2b2118] mb-2">
                                    Children
                                </label>
                                <select
                                    name="children"
                                    value={form.children}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border border-[#d8cfc4] px-4 py-3 rounded-md focus:outline-none focus:border-[#c9a24d]"
                                >
                                    {[0, 1, 2, 3, 4].map((n) => (
                                        <option key={n} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-10 py-6 sticky bottom-0 bg-[#faf9f7] border-t border-[#e5ddd3] flex items-center justify-between">

                            <button
                                type="button"
                                onClick={handleClose}
                                className="text-sm tracking-widest uppercase text-[#6f6255] hover:text-[#2b2118] transition cursor-pointer"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-8 py-3 rounded-md tracking-widest uppercase transition cursor-pointer
                                        ${loading
                                        ? "bg-gray-400 text-white cursor-not-allowed"
                                        : "bg-[#2b2118] text-[#f3ede6] hover:bg-[#3a2d22]"
                                    }`}
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>

                        </div>
                    </form>
                ) : (
                    <div className="px-10 py-16 text-center">

                        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full border border-[#c9a24d] text-[#c9a24d] text-2xl">
                            ✓
                        </div>

                        <h3 className="mt-8 text-2xl font-light tracking-wide text-[#2b2118]">
                            Booking Request Sent
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-md mx-auto">
                            Thank you for choosing Paarvi Palace.
                            We’ve received your booking request and will contact you shortly
                            to confirm availability.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                            <button
                                onClick={sendWhatsApp}
                                className="bg-[#25D366] text-white px-6 py-3 rounded-md tracking-widest uppercase hover:bg-[#1ebe5d] transition"
                            >
                                Send via WhatsApp
                            </button>

                            <button
                                onClick={handleClose}
                                className="text-sm tracking-widest uppercase border-b border-[#2b2118] pb-1 text-[#2b2118] hover:border-[#c9a24d] hover:text-[#c9a24d] transition"
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
