import FaqSchema from "@/components/FaqSchema";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";

export const metadata = {
    title: "Contact Us | Paarvi Palace",
    description:
        "Get in touch with Paarvi Palace, a peaceful homestay near Ram Mandir, Ayodhya. Contact us for bookings, directions, or stay-related queries.",
};

const contactFaqs = [
    {
        question: "How can I contact Paarvi Palace for bookings?",
        answer:
            "You can contact Paarvi Palace by phone, WhatsApp, or email for booking help, stay questions, directions, and room availability updates.",
    },
    {
        question: "What details should I share when I call for a booking?",
        answer:
            "It helps to share your check-in date, check-out date, number of guests, preferred room type, and any special requirements so the team can guide you quickly.",
    },
    {
        question: "Can I get directions to Paarvi Palace before arrival?",
        answer:
            "Yes, guests can use the Google Maps link on the contact page or call the property directly for clearer route support before arriving in Ayodhya.",
    },
    {
        question: "Is WhatsApp available for quick stay-related questions?",
        answer:
            "Yes, guests can use the listed phone number for quick contact and assistance with common booking and stay questions.",
    },
];

export default function ContactPage() {
    return (
        <main>
            <FaqSchema items={contactFaqs} />

            {/* Page Hero */}
            <section className="bg-[#faf9f7] py-28">
                <div className="max-w-7xl mx-auto px-6">

                    <span className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
                        Get in Touch
                    </span>

                    <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
                        Contact Paarvi Palace
                    </h1>

                    <div className="mt-6 w-20 h-[2px] bg-[#c9a24d]"></div>

                    <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
                        Whether you need help with booking, directions to our homestay,
                        or have questions about your stay in Ayodhya, we are always
                        happy to assist you.
                    </p>

                </div>
            </section>

            {/* Contact Details */}
            <section className="bg-white py-28">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-20 text-center">

                    {/* Phone */}
                    <div>
                        <p className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
                            Phone
                        </p>
                        <a
                            href="tel:+919250538645"
                            className="mt-6 inline-block text-lg font-light text-[#2b2118] hover:text-[#c9a24d] transition"
                        >
                            +91 92505 38645
                        </a>

                        <p className="mt-2 text-gray-600">
                            Call or WhatsApp for quick assistance
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <p className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
                            Email
                        </p>
                        <Link
                            href="mailto:paarvipalace@gmail.com"
                            className="mt-6 inline-block text-lg font-light text-[#2b2118] hover:text-[#c9a24d] transition"
                        >
                            paarvipalace@gmail.com
                        </Link>

                        <p className="mt-2 text-gray-600">
                            We usually respond within a few hours
                        </p>
                    </div>

                    {/* Location */}
                    <div>
                        <p className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
                            Location
                        </p>
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

                        <p className="mt-2 text-gray-600">
                            Peaceful location, easy access
                        </p>
                    </div>

                </div>
            </section>

            <FaqSection
                eyebrow="Contact Help"
                title="Frequently Asked Questions About Contacting Paarvi Palace"
                intro="These are the common questions guests ask before calling, messaging, or requesting booking support."
                items={contactFaqs}
            />

            {/* Gentle CTA */}
            <section className="bg-[#faf9f7] py-24 text-center">
                <p className="text-gray-600">
                    We look forward to welcoming you to Paarvi Palace.
                </p>

                <Link
                    href="tel:+9192505 38645"
                    className="mt-6 inline-block text-sm tracking-widest uppercase border-b border-[#2b2118] pb-1 text-[#2b2118] hover:border-[#c9a24d] hover:text-[#c9a24d] transition"
                >
                    Call to Book Your Stay
                </Link>
            </section>

        </main>
    );
}
