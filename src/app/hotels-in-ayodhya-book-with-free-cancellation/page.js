import FaqSchema from "@/components/FaqSchema";
import FaqSection from "@/components/FaqSection";
import NearbyAttractions from "@/components/NearbyAttractions";
import Image from "next/image";

export const metadata = {
  title:
    "Hotels in Ayodhya | Book with Free Cancellation",
  description:
    "Looking for hotels in Ayodhya book with free cancellation? Stay at Paarvi Palace near Ram Mandir for a comfortable, flexible, and family-friendly experience.",
  keywords: [
    "Hotels in Ayodhya Book with Free Cancellation",
    "hotels in ayodhya with free cancellation",
    "book hotel in ayodhya with free cancellation",
    "paarvi palace ayodhya",
    "hotel near ram mandir ayodhya",
  ],
  alternates: {
    canonical: "/hotels-in-ayodhya-book-with-free-cancellation",
  },
  openGraph: {
    title: "Hotels in Ayodhya | Book with Free Cancellation",
    description:
      "Looking for hotels in Ayodhya book with free cancellation? Stay at Paarvi Palace near Ram Mandir for a comfortable, flexible, and family-friendly experience.",
    url: "https://www.paarvipalace.com/hotels-in-ayodhya-book-with-free-cancellation",
    siteName: "Paarvi Palace",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paarvi Palace in Ayodhya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const freeCancellationFaqs = [
  {
    question: "Can I book a stay in Ayodhya with free cancellation at Paarvi Palace?",
    answer:
      "Paarvi Palace is positioned as a flexible stay option for guests searching for hotels in Ayodhya with free cancellation. Guests should confirm the latest cancellation terms directly at the time of booking.",
  },
  {
    question: "Who is this free-cancellation stay option best for?",
    answer:
      "This option is especially useful for pilgrims, families, and travelers whose Ayodhya plans may shift because of train schedules, road travel, or itinerary changes.",
  },
  {
    question: "What amenities are available during the stay?",
    answer:
      "Guests can expect clean air-conditioned rooms, attached bathrooms, Wi-Fi, hot water, and other practical essentials for a comfortable stay near Ram Mandir.",
  },
  {
    question: "How do I confirm booking flexibility before arrival?",
    answer:
      "The best way is to call or message Paarvi Palace before payment or check-in so the team can confirm the latest room availability, stay details, and cancellation support.",
  },
];

export default function HotelsInAyodhyaFreeCancellationPage() {
  return (
    <>
      <FaqSchema items={freeCancellationFaqs} />
      <section className="bg-[#faf9f7]">
        <div className="border-b border-[#e5ddd3]">
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <span className="uppercase tracking-[0.35em] text-xs text-[#8b7a5e]">
              Paarvi Palace | Ayodhya
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
              Hotels in Ayodhya Book with Free Cancellation
            </h1>

            <div className="mx-auto mt-6 w-20 h-[1px] bg-[#c9a24d]" />

            <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              Enjoy a comfortable stay near Ram Mandir with the flexibility to
              book your Ayodhya trip with more confidence and convenience.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
                Flexible Stays Near Ram Mandir
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Paarvi Palace is a practical choice for travellers searching for
                hotels in Ayodhya book with free cancellation. Whether your
                plans are fixed or still evolving, our stay experience is
                designed to keep your visit comfortable, simple, and
                stress-free.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                With clean rooms, family-friendly options, and convenient
                access to Ram Mandir and other key attractions, Paarvi Palace
                offers a peaceful base for pilgrims, couples, and families
                visiting Ayodhya.
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-light tracking-wide text-[#2b2118]">
                  Why Guests Choose Paarvi Palace
                </h3>

                <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
                  <li>
                    Comfortable stay option for travellers visiting Ayodhya
                  </li>
                  <li>
                    Flexible booking convenience for changing travel plans
                  </li>
                  <li>Clean air-conditioned rooms with attached bathrooms</li>
                  <li>Wi-Fi, hot water, TV, and essential modern amenities</li>
                  <li>Suitable for couples, families, and pilgrimage groups</li>
                  <li>
                    Convenient location near Ram Mandir and local attractions
                  </li>
                </ul>
              </div>

              <NearbyAttractions />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                "Comfortable rooms for short and extended stays",
                "Flexible booking support for travel changes",
                "Air-conditioned rooms with attached bathrooms",
                "Hot water, Wi-Fi, and in-room essentials",
                "Suitable for families, couples, and pilgrims",
                "Peaceful stay near Ram Mandir",
                "Helpful housekeeping and guest support",
                "On-site parking for added convenience",
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
              Your Stay in Ayodhya at Paarvi Palace
            </h2>

            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Explore the rooms and spaces that make Paarvi Palace a
              comfortable choice for travellers visiting Ayodhya.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {[
                "/images/rooms/deluxe/1.jpeg",
                "/images/rooms/deluxe/10.jpeg",
                "/images/rooms/executive/5.jpeg",
                "/images/rooms/executive/6.jpeg",
                "/images/rooms/family-suite(2-bed)/7.jpeg",
                "/images/rooms/family-suite(2-bed)/8.jpeg",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative h-[280px] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={`Hotels in Ayodhya free cancellation image ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FaqSection
        eyebrow="Booking Questions"
        title="FAQs for Flexible Ayodhya Bookings"
        intro="These answers help guests understand booking flexibility, stay suitability, and what to confirm before arrival."
        items={freeCancellationFaqs}
      />
    </>
  );
}
