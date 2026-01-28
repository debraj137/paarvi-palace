import RoomsSection from "@/components/RoomsSection";

export const metadata = {
  title: "Rooms & Suites | Paarvi Palace",
  description:
    "Explore our Deluxe Rooms, Executive Rooms, and Family Suites at Paarvi Palace, a peaceful homestay near Ram Mandir, Ayodhya.",
};

export default function RoomsPage() {
  return (
    <main>

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
