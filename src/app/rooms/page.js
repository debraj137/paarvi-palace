import FaqSchema from "@/components/FaqSchema";
import FaqSection from "@/components/FaqSection";
import RoomsSection from "@/components/RoomsSection";

export const metadata = {
  title: "Rooms & Suites Near Ram Mandir Ayodhya | Paarvi Palace",
  description:
    "Explore Deluxe, Executive, and Family Suite rooms with 2, 3, or 4 beds at Paarvi Palace in Ayodhya for couples, families, and groups.",
  keywords: [
    "rooms in ayodhya",
    "hotels rs 501 to rs 1000 in ayodhya",
    "hotels rs 1001 to rs 2000 in ayodhya",
    "couple friendly hotel rooms in ayodhya",
    "hotels with parking in ayodhya",
  ],
};

const roomsFaqs = [
  {
    question: "Which room types can I book at Paarvi Palace?",
    answer:
      "Paarvi Palace offers Deluxe Rooms, Executive Rooms, and Family Suite options so guests can choose a stay that fits couples, families, and small groups.",
  },
  {
    question: "Which room is best for families visiting Ayodhya?",
    answer:
      "Family Suite options are the best fit for families and groups because they provide multiple bed configurations and a more practical setup for shared stays.",
  },
  {
    question: "Are the rooms suitable for short pilgrim stays and weekend visits?",
    answer:
      "Yes, the rooms are designed for both short visits and longer stays, making them suitable for pilgrims, family trips, and regular travel to Ayodhya.",
  },
  {
    question: "How can I choose the right room before booking?",
    answer:
      "If you are unsure which room to book, contact Paarvi Palace directly and share your guest count, preferred budget, and stay dates so the team can guide you to the best option.",
  },
];

export default function RoomsPage() {
  return (
    <main>
      <FaqSchema items={roomsFaqs} />

      {/* Page Hero */}
      <section className="relative h-[50vh] bg-[#faf9f7] flex items-center">
        <div className="max-w-7xl mx-auto px-6">

          <span className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
            Our Accommodations
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            Rooms & Suites
          </h1>

          <div className="mt-6 w-20 h-[2px] bg-[#c9a24d]"></div>

          <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
            Thoughtfully designed rooms at Paarvi Palace offer comfort,
            calm, and warmth — ideal for pilgrims, families, and travellers
            visiting Ayodhya.
          </p>

        </div>
      </section>

      {/* Rooms */}
      <RoomsSection />

      <FaqSection
        eyebrow="Room Questions"
        title="Frequently Asked Questions About Rooms and Suites"
        intro="These common questions help guests compare room types and book the right stay for their Ayodhya visit."
        items={roomsFaqs}
      />

      {/* Gentle CTA */}
      <section className="bg-[#faf9f7] py-24 text-center">
        <p className="text-gray-600">
          Have questions or need help choosing a room?
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block text-sm tracking-widest uppercase border-b border-[#2b2118] pb-1 text-[#2b2118] hover:border-[#c9a24d] hover:text-[#c9a24d] transition"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}
