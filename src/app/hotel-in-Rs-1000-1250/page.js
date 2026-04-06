import NearbyAttractions from "@/components/NearbyAttractions";
import Image from "next/image";

export const metadata = {
  title: "Hotel in Rs 1000-1250 in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Looking for a hotel in Rs 1000-1250 in Ayodhya? Enjoy a spacious and comfortable stay at Paarvi Palace near Ram Mandir.",
};

export default function HotelInRs1000To1250Page() {
  return (
    <section className="bg-[#faf9f7]">
      <div className="border-b border-[#e5ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="uppercase tracking-[0.35em] text-xs text-[#8b7a5e]">
            Paarvi Palace | Ayodhya
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            Hotel in Rs 1000-1250
          </h1>

          <div className="mx-auto mt-6 w-20 h-[1px] bg-[#c9a24d]" />

          <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            A refined and comfortable stay in Ayodhya for guests looking for a
            little more space and convenience within the Rs 1000-1250 budget.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              Spacious Comfort at a Practical Price
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Paarvi Palace offers a welcoming option for travellers searching
              for a hotel in Rs 1000-1250 in Ayodhya. These rooms are ideal for
              guests who want added comfort, a little more space, and a calm
              setting near key city attractions.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you are visiting for pilgrimage, a short business stay, or
              a relaxed city visit, this category delivers a balanced experience
              of comfort, convenience, and value.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-light tracking-wide text-[#2b2118]">
                What You Can Expect
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Comfortable stay for guests looking in the Rs 1000-1250 range</li>
                <li>Spacious room layout with a clean and modern feel</li>
                <li>Air-conditioned room with attached bathroom and hot water</li>
                <li>Wi-Fi, flat-screen TV, and essential amenities</li>
                <li>Useful work-friendly setup for business and remote travellers</li>
                <li>Housekeeping, room support, and easy access to Ram Mandir</li>
              </ul>
            </div>

            <NearbyAttractions />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Spacious interiors with added comfort",
              "Suitable for couples and business travellers",
              "Air-conditioned room with attached bathroom",
              "Hot water and essential room amenities",
              "Wi-Fi and flat-screen TV for convenience",
              "Comfortable setup for work or relaxation",
              "Helpful room service and housekeeping",
              "Convenient stay near Ram Mandir",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#e5ddd3] rounded-xl p-6 bg-white/70"
              >
                <p className="text-sm tracking-wide text-[#2b2118]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <h2 className="text-3xl font-light tracking-wide text-[#2b2118] text-center">
            Hotel in Rs 1000-1250 at Paarvi Palace
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Explore the comfort and thoughtful details that make this a great
            mid-budget stay option in Ayodhya.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "/images/rooms/executive/1.jpeg",
              "/images/rooms/executive/2.jpeg",
              "/images/rooms/executive/3.jpeg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-[280px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Hotel in Rs 1000-1250 image ${index + 1}`}
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
