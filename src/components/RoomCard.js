import Link from "next/link";

export default function RoomCard({ title, price, description, image, slug }) {
  return (
    <article className="group">

      {/* Image */}
      <div className="relative h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden rounded-xl">
        <Link
          href={slug}
          className="hover:text-[#c9a24d] transition cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            style={{ backgroundImage: `url(${image})` }} 
          />
        <div className="absolute inset-0 bg-black/25"></div>
        </Link>

      </div>

      {/* Content */}
      <div className="mt-6 md:mt-8">

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-light tracking-wide text-[#2b2118]">
          <Link
            href={slug}
            className="hover:text-[#c9a24d] transition">
            {title}
          </Link>
        </h3>

        {/* Price */}
        <p className="mt-2 text-sm text-gray-700">
          Starting from <span className="font-medium">{price}</span>
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-relaxed md:whitespace-nowrap">
          {description}
        </p>

        {/* CTA */}
        <Link
          href={slug}
          className="inline-block mt-6 text-sm tracking-widest uppercase text-[#2b2118] border-b border-[#2b2118] pb-1 hover:border-[#c9a24d] hover:text-[#c9a24d] transition"
        >
          View Room
        </Link>

      </div>

    </article>
  );
}
