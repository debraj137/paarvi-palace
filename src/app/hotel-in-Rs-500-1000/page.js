import NearbyAttractions from "@/components/NearbyAttractions";
import Image from "next/image";

export const metadata = {
  title: "Hotel in Rs 500-1000 in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Looking for a hotel in Rs 500-1000 in Ayodhya? Discover a comfortable and affordable stay at Paarvi Palace near Ram Mandir.",
};

export default function HotelInRs500To1000Page() {
  return (
    <section className="bg-[#faf9f7]">
      <div className="border-b border-[#e5ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="uppercase tracking-[0.35em] text-xs text-[#8b7a5e]">
            Paarvi Palace | Ayodhya
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            Hotel in Rs 500-1000
          </h1>

          <div className="mx-auto mt-6 w-20 h-[1px] bg-[#c9a24d]" />

          <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            A comfortable and budget-friendly stay in Ayodhya for guests seeking
            peace, convenience, and easy access to Ram Mandir.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              Affordable Comfort in Ayodhya
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Paarvi Palace offers a welcoming stay for travellers searching for
              a hotel in Rs 500-1000 in Ayodhya. Our rooms are designed to give
              guests a relaxed and comfortable experience without compromising
              on essential amenities.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you are visiting Ayodhya for pilgrimage, a short family trip,
              or a peaceful overnight stay, this budget-friendly option keeps
              you close to major attractions while ensuring a restful
              experience.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-light tracking-wide text-[#2b2118]">
                What You Can Expect
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Budget-friendly stay ideal for guests looking in the Rs 500-1000 range</li>
                <li>Clean and comfortable rooms for solo travellers and couples</li>
                <li>Air-conditioned stay with attached bathroom and hot water</li>
                <li>Wi-Fi access and essential in-room amenities</li>
                <li>Peaceful location with convenient access to Ram Mandir</li>
                <li>Helpful service, housekeeping, and on-site parking</li>
              </ul>
            </div>

            <NearbyAttractions />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Affordable rooms for budget-conscious travellers",
              "Comfortable stay for solo guests and couples",
              "Air-conditioned room with attached bathroom",
              "Hot water and essential daily-use amenities",
              "Wi-Fi access for work and connectivity",
              "Convenient location near Ram Mandir",
              "Regular housekeeping and room assistance",
              "On-site parking for added convenience",
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
            Hotel in Rs 500-1000 at Paarvi Palace
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Take a look at the comfort and simplicity that make Paarvi Palace a
            great budget stay in Ayodhya.
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
                  alt={`Hotel in Rs 500-1000 image ${index + 1}`}
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
