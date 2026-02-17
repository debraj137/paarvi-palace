import RoomCard from "@/components/RoomCard";

export default function RoomsSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="uppercase tracking-[0.25em] text-xs text-gray-500">
            Our Accommodations
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide text-[#2b2118]">
            Rooms & Suites
          </h2>

          <div className="mt-6 w-20 h-[2px] bg-[#c9a24d] mx-auto"></div>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto leading-relaxed">
            Elegantly designed rooms offering comfort, tranquility,
            and a restful stay near Ram Mandir, Ayodhya.
          </p>
        </div>

        {/* ✅ Responsive Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">

          <RoomCard
            title="Deluxe Room"
            originalPrice={1499}
            discountPercent={50}
            description="Ideal for solo travellers and couples seeking comfort."
            image="/images/rooms/deluxe.jpeg"
            slug="/deluxe-room-in-ayodhya"
          />

          <RoomCard
            title="Executive Room"
            originalPrice={1999}
            discountPercent={50}
            description="Spacious rooms with enhanced amenities for a relaxed stay."
            image="/images/rooms/executive.jpeg"
            slug="/executive-room-in-ayodhya"
          />

          <RoomCard
            title="Family Suite"
            originalPrice={2499}
            discountPercent={50}
            description="Perfect for families, offering space and privacy."
            image="/images/rooms/family.jpeg"
            slug="/family-suite-room-in-ayodhya"
          />

        </div>

      </div>
    </section>
  );
}
