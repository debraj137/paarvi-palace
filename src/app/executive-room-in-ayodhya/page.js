import NearbyAttractions from "@/components/NearbyAttractions";
import Image from "next/image";

export const metadata = {
  title: "Executive Room in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Book an Executive Room at Paarvi Palace, Ayodhya. A spacious and elegant stay ideal for business travellers and guests seeking premium comfort near Ram Mandir.",
};

export default function ExecutiveRoomPage() {
  return (
    <section className="bg-[#faf9f7]">

      {/* ===== HERO (NO IMAGE · NO CTA) ===== */}
      <div className="border-b border-[#e5ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <span className="uppercase tracking-[0.35em] text-xs text-[#8b7a5e]">
            Paarvi Palace · Ayodhya
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            Executive Room
          </h1>

          <div className="mx-auto mt-6 w-20 h-[1px] bg-[#c9a24d]" />

          <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            A refined and spacious room crafted for business travellers and
            guests who prefer added comfort, privacy, and elegance during
            their stay in Ayodhya.
          </p>

        </div>
      </div>

      {/* ===== ROOM DETAILS ===== */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              Spacious Comfort with a Premium Touch
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our Executive Rooms at Paarvi Palace are designed to offer
              additional space, refined interiors, and a calm atmosphere
              suitable for both business and leisure travellers.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you are working remotely or unwinding after a day in
              Ayodhya, the Executive Room provides the perfect balance of
              productivity and relaxation.
            </p>
            {/* KEY FEATURES */}
            <div className="mt-10">
              <h3 className="text-xl font-light tracking-wide text-[#2b2118]">
                Key Features of the Executive Room
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Spacious room layout with premium interiors</li>
                <li>Comfortable king-size bed with plush bedding</li>
                <li>Dedicated work desk ideal for business travellers</li>
                <li>High-speed Wi-Fi, flat-screen TV, and modern amenities</li>
                <li>Air-conditioned room with geyser and 24/7 hot water</li>
                <li>24×7 room service and daily housekeeping</li>
              </ul>
            </div>

            <NearbyAttractions />
          </div>

          {/* RIGHT – FEATURES */}
          <div className="grid grid-cols-2 gap-6">
            {[
              // "Spacious room with premium interiors",
              // "Comfortable seating area",
              // "Air-conditioning & high-speed Wi-Fi",
              // "Dedicated work desk",
              // "Large wardrobe & storage",
              // "24×7 room service",
              "Spacious interiors with premium furnishings",
              "Dedicated work desk for business travellers",
              "High-speed Wi-Fi & uninterrupted connectivity",
              "Comfortable seating area for relaxation",
              "Air-conditioned room with controlled lighting",
              "24×7 room service & in-room dining",
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
            Inside the Executive Room
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Experience the space, elegance, and thoughtful details that
            define our Executive Rooms at Paarvi Palace.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "/images/rooms/executive/1.jpeg",
              "/images/rooms/executive/2.jpeg",
              "/images/rooms/executive/3.jpeg",
              "/images/rooms/executive/4.jpeg",
              "/images/rooms/executive/5.jpeg",
              "/images/rooms/executive/6.jpeg",
              "/images/rooms/executive/7.jpeg",
              "/images/rooms/executive/8.jpeg",
              "/images/rooms/executive/9.jpeg",
              "/images/rooms/executive/10.jpeg"
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-[280px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Executive Room image ${index + 1}`}
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
