import Image from "next/image";

export const metadata = {
  title: "Deluxe Room in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Stay in a comfortable Deluxe Room at Paarvi Palace, Ayodhya. Ideal for couples and solo travellers near Ram Mandir.",
};

export default function DeluxeRoomPage() {
  return (
    <section className="bg-[#faf9f7]">

      {/* ===== HERO (NO IMAGE · NO CTA) ===== */}
      <div className="border-b border-[#e5ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <span className="uppercase tracking-[0.35em] text-xs text-[#8b7a5e]">
            Paarvi Palace · Ayodhya
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            Deluxe Room
          </h1>

          <div className="mx-auto mt-6 w-20 h-[1px] bg-[#c9a24d]" />

          <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            A peaceful and thoughtfully designed room for solo travellers and
            couples, offering comfort, calm, and proximity to Ram Mandir.
          </p>

        </div>
      </div>

      {/* ===== ROOM DETAILS ===== */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              Thoughtfully Designed for Comfort
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our Deluxe Rooms at Paarvi Palace offer a calm and refined stay
              experience. Carefully curated interiors, modern amenities, and
              a peaceful ambience make it an ideal choice for guests visiting
              Ayodhya.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you’re here for pilgrimage or leisure, the Deluxe Room
              ensures rest, privacy, and convenience just minutes from
              Ram Mandir.
            </p>
          </div>

          {/* RIGHT – FEATURES */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "King-size bed with premium linens",
              "Air-conditioned comfort",
              "Free high-speed Wi-Fi",
              "LED TV with channels",
              "Modern attached bathroom",
              "In-room dining & service",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#e5ddd3] rounded-xl p-6 bg-white/70"
              >
                <p className="text-sm tracking-wide text-[#2b2118]">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ===== GALLERY ===== */}
        <div className="mt-28">

          <h2 className="text-3xl font-light tracking-wide text-[#2b2118] text-center">
            Inside the Deluxe Room
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            A glimpse into the elegance and comfort that awaits you at
            Paarvi Palace.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "/images/rooms/deluxe/1.jpeg",
              "/images/rooms/deluxe/2.jpeg",
              "/images/rooms/deluxe/3.jpeg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-[280px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Deluxe Room image ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
