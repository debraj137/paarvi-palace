import ContactSection from "@/components/ContactSection";
import ExecutiveRoomHeroActions from "@/components/ExecutiveRoomHeroActions";
import FaqSchema from "@/components/FaqSchema";
import FaqSection from "@/components/FaqSection";
import NearbyAttractions from "@/components/NearbyAttractions";
import RoomHeroCarousel from "@/components/RoomHeroCarousel";
import { getRoomPricing, rooms } from "@/data/roomPrices";
import Image from "next/image";

const executiveFaqs = [
  {
    question: "Who is the Executive Room best suited for?",
    answer:
      "The Executive Room is a strong fit for business travellers, couples, and guests who want more space, a work desk, and a quieter premium-feel stay near Ram Mandir.",
  },
  {
    question: "Does the Executive Room include AC and Non-AC options?",
    answer:
      "Yes. Paarvi Palace offers both AC and Non-AC Executive Room options so guests can choose based on comfort preference and budget.",
  },
  {
    question: "What amenities are available in the Executive Room?",
    answer:
      "Guests can expect Wi-Fi, a flat-screen TV, hot water, housekeeping, room service, and a dedicated work-friendly setup designed for comfortable short or extended stays.",
  },
  {
    question: "How can I book the Executive Room at Paarvi Palace?",
    answer:
      "Guests can call Paarvi Palace directly or use the contact page to confirm availability, room type, rates, and stay dates before booking.",
  },
];

const pricing = getRoomPricing(rooms["Executive Room"]);

const executiveRoomImages = [
  "/images/rooms/executive/1.jpeg",
  "/images/rooms/executive/2.jpeg",
  "/images/rooms/executive/3.jpeg",
  "/images/rooms/executive/4.jpeg",
  "/images/rooms/executive/5.jpeg",
  "/images/rooms/executive/6.jpeg",
  "/images/rooms/executive/7.jpeg",
  "/images/rooms/executive/8.jpeg",
  "/images/rooms/executive/9.jpeg",
  "/images/rooms/executive/10.jpeg",
];

export const metadata = {
  title: "Executive Room in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Book an Executive Room at Paarvi Palace, Ayodhya. Spacious AC and Non-AC room options with Wi-Fi, work desk, hot water, and easy access to Ram Mandir.",
  keywords: [
    "executive room in ayodhya",
    "executive room near ram mandir",
    "paarvi palace executive room",
    "business hotel room in ayodhya",
    "hotel room with wifi in ayodhya",
  ],
  alternates: {
    canonical: "/executive-room-in-ayodhya",
  },
  openGraph: {
    title: "Executive Room in Ayodhya | Paarvi Palace Near Ram Mandir",
    description:
      "Explore the Executive Room at Paarvi Palace with spacious interiors, AC and Non-AC pricing, Wi-Fi, hot water, and a comfortable stay near Ram Mandir.",
    url: "https://www.paarvipalace.com/executive-room-in-ayodhya",
    siteName: "Paarvi Palace",
    images: [
      {
        url: "/images/rooms/executive/7.jpeg",
        width: 1200,
        height: 800,
        alt: "Executive Room at Paarvi Palace in Ayodhya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ExecutiveRoomPage() {
  return (
    <>
      <FaqSchema items={executiveFaqs} />

      <section className="bg-[#faf9f7]">
        <div className="border-b border-[#e5ddd3]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-10">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#e5ddd3] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#8b7a5e]">
                Premium Stay Near Ram Mandir
              </div>

              <div className="mt-6">
                <span className="block text-xs uppercase tracking-[0.4em] text-[#8b7a5e]">
                  Paarvi Palace | Ayodhya
                </span>

                <h1 className="mt-4 max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.03em] text-[#2b2118] md:text-6xl">
                  Executive Room
                  <span className="mt-2 block font-normal text-[#b8892f]">
                    in Ayodhya
                  </span>
                </h1>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-[2px] w-20 bg-[#c9a24d]" />
                <div className="h-[2px] w-8 bg-[#e5ddd3]" />
              </div>

              <p className="mt-8 max-w-2xl text-gray-600 leading-relaxed">
                A spacious, elegant stay for guests who want extra comfort,
                better work-friendly utility, and quick access to Ram Mandir.
              </p>

              <ExecutiveRoomHeroActions />

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e5ddd3] bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8b7a5e]">
                    Non-AC Rate
                  </p>
                  <p className="mt-3 text-sm text-gray-500 line-through">
                    Rs {pricing.nonAc.originalPrice}
                  </p>
                  <p className="text-2xl font-light text-[#2b2118]">
                    Rs {pricing.nonAc.discountedPrice} / night
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e5ddd3] bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8b7a5e]">
                    AC Rate
                  </p>
                  <p className="mt-3 text-sm text-gray-500 line-through">
                    Rs {pricing.ac.originalPrice}
                  </p>
                  <p className="text-2xl font-light text-[#2b2118]">
                    Rs {pricing.ac.discountedPrice} / night
                  </p>
                </div>
              </div>
            </div>

            <RoomHeroCarousel
              images={executiveRoomImages}
              altPrefix="Executive Room at Paarvi Palace in Ayodhya image"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-start gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
                Spacious Comfort with a Premium Touch
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our Executive Rooms at Paarvi Palace are designed for guests who
                want a little more from their stay in Ayodhya, including extra
                space, refined interiors, and a calmer atmosphere for work or
                rest.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                If someone lands on this page while comparing options, the
                Executive Room gives them a clear middle path between budget and
                premium: more comfort than a basic stay without moving into a
                large family suite.
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-light tracking-wide text-[#2b2118]">
                  Key Features of the Executive Room
                </h3>

                <ul className="mt-6 list-inside list-disc space-y-3 text-gray-600 leading-relaxed">
                  <li>Spacious room layout with premium interiors</li>
                  <li>Comfortable king-size bed with plush bedding</li>
                  <li>Dedicated work desk ideal for business travellers</li>
                  <li>High-speed Wi-Fi, flat-screen TV, and modern amenities</li>
                  <li>Air-conditioned room with geyser and 24/7 hot water</li>
                  <li>24/7 room service and daily housekeeping</li>
                </ul>
              </div>

              <NearbyAttractions />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                "Spacious interiors with premium furnishings",
                "Dedicated work desk for business travellers",
                "High-speed Wi-Fi and uninterrupted connectivity",
                "Comfortable seating area for relaxation",
                "Air-conditioned room with controlled lighting",
                "24/7 room service and in-room dining",
                "Convenient for short business and pilgrimage stays",
                "Easy access to Ram Mandir, airport, and city routes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#e5ddd3] bg-white/70 p-6"
                >
                  <p className="text-sm tracking-wide text-[#2b2118]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 rounded-[28px] border border-[#e5ddd3] bg-white p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#8b7a5e]">
                  Why Guests Choose It
                </span>
                <h2 className="mt-4 text-3xl font-light tracking-wide text-[#2b2118]">
                  A Better Fit for Guests Comparing Value, Space, and Comfort
                </h2>
                <p className="mt-5 text-gray-600 leading-relaxed">
                  Visitors searching for an executive room usually want a quick
                  answer to one question: is this room worth the upgrade? This
                  room is ideal if you want more spacious interiors, a stronger
                  work-and-rest setup, and a more polished stay experience near
                  Ayodhya&apos;s key attractions.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Good match for couples wanting extra comfort",
                  "Useful for remote work and business travel",
                  "Clear AC and Non-AC pricing options",
                  "Stronger booking intent with direct call support",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#faf9f7] px-5 py-4 text-sm text-[#2b2118]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-28">
            <h2 className="text-center text-3xl font-light tracking-wide text-[#2b2118]">
              Inside the Executive Room
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Experience the space, elegance, and thoughtful details that
              define our Executive Rooms at Paarvi Palace.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {executiveRoomImages.map((src, index) => (
                <div
                  key={src}
                  className="relative h-[280px] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={`Executive Room image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="Room Questions"
        title="FAQs for the Executive Room"
        intro="These answers help guests quickly decide whether this room type matches their budget, travel style, and stay requirements."
        items={executiveFaqs}
      />
      <ContactSection className="bg-white pb-32 pt-10" />
    </>
  );
}
