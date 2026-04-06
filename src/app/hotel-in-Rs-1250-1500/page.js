import NearbyAttractions from "@/components/NearbyAttractions";
import Image from "next/image";

export const metadata = {
  title: "Hotel in Rs 1250-1500 in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Looking for a hotel in Rs 1250-1500 in Ayodhya? Stay at Paarvi Palace for a spacious, family-friendly experience near Ram Mandir.",
};

export default function HotelInRs1250To1500Page() {
  return (
    <section className="bg-[#faf9f7]">
      <div className="border-b border-[#e5ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="uppercase tracking-[0.35em] text-xs text-[#8b7a5e]">
            Paarvi Palace | Ayodhya
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            Hotel in Rs 1250-1500
          </h1>

          <div className="mx-auto mt-6 w-20 h-[1px] bg-[#c9a24d]" />

          <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            A spacious and family-friendly stay in Ayodhya for guests seeking
            extra comfort and value within the Rs 1250-1500 range.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              More Space for Families and Group Stays
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Paarvi Palace is a comfortable choice for travellers looking for a
              hotel in Rs 1250-1500 in Ayodhya. This stay category is well
              suited for families, group visitors, and guests who prefer a more
              spacious room experience.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              With generous room layouts, useful amenities, and a peaceful
              atmosphere near Ram Mandir, this option is designed to make every
              stay more relaxed and convenient.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-light tracking-wide text-[#2b2118]">
                What You Can Expect
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Spacious stay ideal for guests looking in the Rs 1250-1500 range</li>
                <li>Suitable for families, groups, and longer stays</li>
                <li>Air-conditioned room with attached bathroom and hot water</li>
                <li>Wi-Fi, TV, and useful day-to-day room amenities</li>
                <li>Comfortable seating and storage for a relaxed stay</li>
                <li>Housekeeping, parking, and convenient access to Ayodhya attractions</li>
              </ul>
            </div>

            <NearbyAttractions />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Spacious rooms for families and group travellers",
              "Comfortable layout with extra room to relax",
              "Air-conditioned stay with attached bathroom",
              "Hot water and essential room amenities",
              "Wi-Fi and TV for a convenient stay",
              "Seating and storage for added comfort",
              "Housekeeping and support throughout your stay",
              "Peaceful location near Ram Mandir",
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
            Hotel in Rs 1250-1500 at Paarvi Palace
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            See the spacious, welcoming setup that makes this stay category a
            great choice for families and groups in Ayodhya.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "/images/rooms/family-suite(2-bed)/1.jpeg",
              "/images/rooms/family-suite(2-bed)/2.jpeg",
              "/images/rooms/family-suite(2-bed)/3.jpeg",
              "/images/rooms/family-suite(2-bed)/4.jpeg",
              "/images/rooms/family-suite(2-bed)/5.jpeg",
              "/images/rooms/family-suite(2-bed)/6.jpeg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-[280px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Hotel in Rs 1250-1500 image ${index + 1}`}
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
