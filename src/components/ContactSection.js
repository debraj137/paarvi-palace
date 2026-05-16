import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactSection({
    className = "bg-white py-32",
}) {
    return (
        <section className={className}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="uppercase tracking-[0.25em] text-xs text-gray-500">
                        Get in Touch
                    </span>

                    <h2 className="mt-4 text-4xl font-light tracking-wide text-[#2b2118]">
                        Contact Paarvi Palace
                    </h2>

                    <div className="mt-6 w-20 h-[2px] bg-[#c9a24d] mx-auto"></div>

                    <p className="mt-6 text-gray-600 max-w-xl mx-auto leading-relaxed">
                        We’re always happy to assist you with bookings, directions,
                        or any questions regarding your stay in Ayodhya.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid md:grid-cols-3 gap-16 text-center">

                    {/* Phone */}
                    <div>
                        <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full border border-gray-200">
                            <Phone className="w-5 h-5 text-gray-700" />
                        </div>
                        <p className="text-sm tracking-wide text-gray-500">Call Us</p>
                        <Link
                            href="tel:+919250538645"
                            className="mt-2 text-lg font-light hover:text-[#c9a24d] transition"
                        >
                            +91 92505 38645
                        </Link>
                    </div>

                    {/* Email */}
                    <div>
                        <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full border border-gray-200">
                            <Mail className="w-5 h-5 text-gray-700" />
                        </div>
                        <p className="text-sm tracking-wide text-gray-500">Email</p>
                        <Link
                            href="mailto:paarvipalace@gmail.com"
                            className="mt-2 text-lg font-light hover:text-[#c9a24d] transition"
                        >
                            paarvipalace@gmail.com
                        </Link>
                    </div>

                    {/* Location */}
                    <div>
                        <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full border border-gray-200">
                            <MapPin className="w-5 h-5 text-gray-700" />
                        </div>
                        <p className="text-sm tracking-wide text-gray-500">Location</p>
                        <Link
                            href="https://www.google.com/maps/search/?api=1&query=Paarvi+Palace+Ayodhya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-sm font-light leading-relaxed text-gray-700 hover:text-[#c9a24d] transition"
                        >
                            Bhiki Ka Purva, Ashapur Village,<br />
                            Darshan Nagar, Ranopali,<br />
                            Ayodhya (Faizabad), Uttar Pradesh 224123
                        </Link>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <a
                        href="tel:+9192505 38645"
                        className="inline-block text-sm tracking-widest uppercase border-b border-gray-800 pb-1 hover:border-[#c9a24d] hover:text-[#c9a24d] transition text-[#2b2118]"
                    >
                        Call to Book Your Stay
                    </a>
                </div>

            </div>
        </section>
    );
}
