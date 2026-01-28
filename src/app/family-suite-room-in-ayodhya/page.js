import Image from "next/image";

export const metadata = {
  title: "Family Suite Room in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Stay in a spacious Family Suite Room at Paarvi Palace, Ayodhya. Ideal for families and groups seeking comfort, space, and proximity to Ram Mandir.",
};

export default function FamilySuitePage() {
  return (
    <section className="bg-[#faf9f7]">

      {/* ===== HERO (NO IMAGE · NO CTA) ===== */}
      <div className="border-b border-[#e5ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <span className="uppercase tracking-[0.35em] text-xs text-[#8b7a5e]">
            Paarvi Palace · Ayodhya
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            Family Suite Room
          </h1>

          <div className="mx-auto mt-6 w-20 h-[1px] bg-[#c9a24d]" />

          <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            A spacious and welcoming suite designed for families and groups,
            offering comfort, privacy, and a relaxed stay near Ram Mandir.
          </p>

        </div>
      </div>

      {/* ===== ROOM DETAILS ===== */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              Space, Comfort & Togetherness
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our Family Suite Rooms at Paarvi Palace are thoughtfully planned
              to accommodate families and small groups who value space and
              comfort during their stay in Ayodhya.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              With multiple beds, a spacious layout, and modern amenities,
              the Family Suite ensures a relaxed and enjoyable stay for
              every member of the family.
            </p>
          </div>

          {/* RIGHT – FEATURES */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "Large suite with multiple beds",
              "Ideal for families & groups",
              "Air-conditioned comfort",
              "Spacious modern bathroom",
              "Ample storage & seating",
              "Complimentary high-speed Wi-Fi",
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
            Inside the Family Suite
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Discover the spacious layout and warm interiors designed for
            a comfortable family stay at Paarvi Palace.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "/images/rooms/family-suite/1.jpeg",
              "/images/rooms/family-suite/2.jpeg",
              "/images/rooms/family-suite/3.jpeg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-[280px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Family Suite image ${index + 1}`}
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
