import Link from "next/link";

export default function RoomCard({ title, originalPrice, discountPercent, description, image, slug }) {
  const discountedPrice = Math.round(
    originalPrice - (originalPrice * discountPercent) / 100
  );

  const savings = originalPrice - discountedPrice;
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
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 z-20 bg-[#c9a24d] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
          {discountPercent}% OFF
        </div>

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
        <div className="mt-3">

          <p className="text-sm text-gray-500 line-through">
            ₹{originalPrice} / night
          </p>

          <p className="text-lg font-semibold text-[#2b2118]">
            ₹{discountedPrice} / night
          </p>

          <p className="text-xs text-green-600 font-medium">
            You save ₹{savings}
          </p>

        </div>


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
