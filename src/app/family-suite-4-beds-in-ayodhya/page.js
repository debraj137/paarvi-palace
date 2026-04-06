import NearbyAttractions from "@/components/NearbyAttractions";
import Image from "next/image";

export const metadata = {
  title: "Family Suite (4 beds) in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Stay in a spacious Family Suite (4 beds) at Paarvi Palace, Ayodhya. Ideal for large families and groups seeking comfort, space, and proximity to Ram Mandir.",
};

export default function FamilySuiteFourBedsPage() {
  return (
    <section className="bg-[#faf9f7]">
      <div className="border-b border-[#e5ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="uppercase tracking-[0.35em] text-xs text-[#8b7a5e]">
            Paarvi Palace | Ayodhya
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            Family Suite (4 beds)
          </h1>

          <div className="mx-auto mt-6 w-20 h-[1px] bg-[#c9a24d]" />

          <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            A large and comfortable suite for bigger families and groups who
            want generous sleeping space and a peaceful stay in Ayodhya.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              Spacious Family Stays with Added Flexibility
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our Family Suite (4 beds) at Paarvi Palace is ideal for larger
              family groups, tour groups, and guests who need maximum space and
              comfort during their stay in Ayodhya.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              With 4 beds, practical amenities, and a peaceful environment near
              Ram Mandir, this suite makes it easier for everyone to stay
              together without compromising on comfort.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-light tracking-wide text-[#2b2118]">
                Key Features of the Family Suite (4 beds)
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Large suite with 4 beds for bigger families and groups</li>
                <li>Generous layout with ample space to relax</li>
                <li>Air-conditioned room with geyser and 24/7 hot water</li>
                <li>High-speed Wi-Fi, flat-screen TV, and modern amenities</li>
                <li>Comfortable seating and storage for longer stays</li>
                <li>24x7 room service and daily housekeeping</li>
              </ul>
            </div>

            <NearbyAttractions />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Large suite with 4 comfortable beds",
              "Best for bigger families and group stays",
              "Air-conditioned comfort with geyser",
              "High-speed Wi-Fi and flat-screen TV",
              "Modern attached bathroom with hot water",
              "Seating and storage for extra convenience",
              "24x7 room service and housekeeping",
              "Convenient location near Ram Mandir",
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

        <div className="mt-28">
          <h2 className="text-3xl font-light tracking-wide text-[#2b2118] text-center">
            Inside the Family Suite (4 beds)
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            See the extra space and flexible sleeping setup designed for large
            family and group stays at Paarvi Palace.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "/images/rooms/family-suite(4-bed)/1.jpeg",
              "/images/rooms/family-suite(4-bed)/2.jpeg",
              "/images/rooms/family-suite(4-bed)/3.jpeg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-[280px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Family Suite (4 beds) image ${index + 1}`}
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
