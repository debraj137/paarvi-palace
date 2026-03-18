import RoomCard from "@/components/RoomCard";
import { getRoomPricing, rooms } from "@/data/roomPrices";

const roomContent = [
  {
    title: "Deluxe Room",
    description: "Ideal for solo travellers and couples seeking comfort.",
    image: "/images/rooms/deluxe.jpeg",
    slug: "/deluxe-room-in-ayodhya",
  },
  {
    title: "Executive Room",
    description: "Spacious rooms with enhanced amenities for a relaxed stay.",
    image: "/images/rooms/executive.jpeg",
    slug: "/executive-room-in-ayodhya",
  },
  {
    title: "Family Suite",
    description: "Perfect for families, offering space and privacy.",
    image: "/images/rooms/family.jpeg",
    slug: "/family-suite-room-in-ayodhya",
  },
];

export default function RoomsSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Our Accommodations
          </span>

          <h2 className="mt-4 text-3xl font-light tracking-wide text-[#2b2118] md:text-4xl">
            Rooms & Suites
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#c9a24d]" />

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-gray-600">
            Elegantly designed rooms offering comfort, tranquility, and a
            restful stay near Ram Mandir, Ayodhya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
          {roomContent.map((room) => (
            <RoomCard
              key={room.title}
              title={room.title}
              pricing={getRoomPricing(rooms[room.title])}
              description={room.description}
              image={room.image}
              slug={room.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
