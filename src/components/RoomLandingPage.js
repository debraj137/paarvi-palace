import ContactSection from "@/components/ContactSection";
import FaqSchema from "@/components/FaqSchema";
import FaqSection from "@/components/FaqSection";
import NearbyAttractions from "@/components/NearbyAttractions";
import RoomHeroActions from "@/components/RoomHeroActions";
import RoomHeroCarousel from "@/components/RoomHeroCarousel";
import { getRoomPricing, rooms } from "@/data/roomPrices";
import Image from "next/image";

export default function RoomLandingPage({
  badgeText = "Premium Stay Near Ram Mandir",
  titleMain,
  titleAccent = "in Ayodhya",
  heroDescription,
  roomKey,
  images,
  imageAltPrefix,
  detailHeading,
  detailParagraphs,
  featureHeading,
  featureList,
  featureCards,
  whyTitle,
  whyDescription,
  whyPoints,
  galleryTitle,
  galleryIntro,
  faqs,
  faqTitle,
  faqIntro,
  contactSectionClassName = "bg-white pb-32 pt-10",
}) {
  const pricing = getRoomPricing(rooms[roomKey]);

  return (
    <>
      <FaqSchema items={faqs} />

      <section className="bg-[#faf9f7]">
        <div className="border-b border-[#e5ddd3]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-10">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#e5ddd3] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#8b7a5e]">
                {badgeText}
              </div>

              <div className="mt-6">
                <span className="block text-xs uppercase tracking-[0.4em] text-[#8b7a5e]">
                  Paarvi Palace | Ayodhya
                </span>

                <h1 className="mt-4 max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.03em] text-[#2b2118] md:text-6xl">
                  {titleMain}
                  <span className="mt-2 block font-normal text-[#b8892f]">
                    {titleAccent}
                  </span>
                </h1>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-[2px] w-20 bg-[#c9a24d]" />
                <div className="h-[2px] w-8 bg-[#e5ddd3]" />
              </div>

              <p className="mt-8 max-w-2xl text-gray-600 leading-relaxed">
                {heroDescription}
              </p>

              <RoomHeroActions />

              {pricing ? (
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
              ) : null}
            </div>

            <RoomHeroCarousel
              images={images}
              altPrefix={imageAltPrefix}
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-start gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
                {detailHeading}
              </h2>

              {detailParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-10">
                <h3 className="text-xl font-light tracking-wide text-[#2b2118]">
                  {featureHeading}
                </h3>

                <ul className="mt-6 list-inside list-disc space-y-3 text-gray-600 leading-relaxed">
                  {featureList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <NearbyAttractions />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {featureCards.map((item) => (
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
                  {whyTitle}
                </h2>
                <p className="mt-5 text-gray-600 leading-relaxed">
                  {whyDescription}
                </p>
              </div>

              <div className="grid gap-4">
                {whyPoints.map((item) => (
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
              {galleryTitle}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              {galleryIntro}
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {images.map((src, index) => (
                <div
                  key={src}
                  className="relative h-[280px] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={`${titleMain} image ${index + 1}`}
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
        title={faqTitle}
        intro={faqIntro}
        items={faqs}
      />
      <ContactSection className={contactSectionClassName} />
    </>
  );
}
