import Link from "next/link";

const budgetLinks = [
    {
        href: "/hotel-in-Rs-500-1000",
        label: "Hotel in Rs 500-1000",
    },
    {
        href: "/hotel-in-Rs-1000-1250",
        label: "Hotel in Rs 1000-1250",
    },
    {
        href: "/hotel-in-Rs-1250-1500",
        label: "Hotel in Rs 1250-1500",
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#2b2118] text-[#e6dccf]">
            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* Top Section */}
                <div className="grid md:grid-cols-3 gap-16 text-center md:text-left">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-light tracking-wide text-[#f3ede6]">
                            Paarvi Palace
                        </h3>
                        <p className="mt-5 leading-relaxed text-[#cbbfae] max-w-sm">
                            A peaceful and refined homestay near Ram Mandir, Ayodhya,
                            offering comfort, warmth, and thoughtful hospitality.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="uppercase text-xs tracking-[0.25em] text-[#b8a992]">
                            Contact
                        </p>
                        <Link
                            href="https://www.google.com/maps/search/?api=1&query=Paarvi+Palace+Ayodhya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block text-sm leading-relaxed text-[#e6dccf] hover:text-[#c9a24d] transition"
                        >
                            Bhiki Ka Purva, Ashapur Village,<br />
                            Darshan Nagar, Ranopali,<br />
                            Ayodhya (Faizabad), Uttar Pradesh 224123
                        </Link>
                        <Link
                            href="tel:+919250538645"
                            className="mt-2 block text-[#e6dccf] hover:text-[#c9a24d] transition"
                        >
                            +91 92505 38645
                        </Link>

                        <Link
                            href="mailto:paarvipalace@gmail.com"
                            className="mt-2 block text-[#e6dccf] hover:text-[#c9a24d] transition"
                        >
                            paarvipalace@gmail.com
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p className="uppercase text-xs tracking-[0.25em] text-[#b8a992]">
                            Quick Links
                        </p>
                        <ul className="mt-6 space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-[#e6dccf] hover:text-[#c9a24d] transition"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/rooms"
                                    className="text-[#e6dccf] hover:text-[#c9a24d] transition"
                                >
                                    Rooms & Suites
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-[#e6dccf] hover:text-[#c9a24d] transition"
                                >
                                    Contact
                                </Link>
                            </li>
                            {budgetLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#e6dccf] hover:text-[#c9a24d] transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/executive-room-in-ayodhya"
                                    className="text-[#e6dccf] hover:text-[#c9a24d] transition"
                                >
                                    Couple Friendly Hotel
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/rooms"
                                    className="text-[#e6dccf] hover:text-[#c9a24d] transition"
                                >
                                    Luxury Hotel
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="mt-20 border-t border-[#4a3a2a]"></div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#b8a992]">
                    <p>
                        © {new Date().getFullYear()} Paarvi Hospitality. All rights reserved.
                    </p>
                    <p className="mt-4 md:mt-0">
                        Crafted with care for peaceful stays in Ayodhya
                    </p>
                </div>

            </div>
        </footer>
    );
}
