import Image from "next/image";

export default function RoomGallery({ images }) {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative h-[260px] overflow-hidden rounded-lg"
        >
          <Image
            src={src}
            alt={`Room image ${index + 1}`}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
