import Link from "next/link";

const roomTypes = [
  { key: "nonAc", label: "Non-AC" },
  { key: "ac", label: "AC" },
];

export default function RoomCard({
  title,
  pricing,
  description,
  image,
  slug,
}) {
  const maxDiscount =
    Math.max(...roomTypes.map(({ key }) => pricing[key].discountPercent)) || 0;

  return (
    <article className="group">
      <div className="relative h-[220px] overflow-hidden rounded-xl md:h-[260px] lg:h-[300px]">
        <Link
          href={slug}
          className="cursor-pointer transition hover:text-[#c9a24d]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            style={{ backgroundImage: `url("${encodeURI(image)}")` }}
          />
          <div className="absolute inset-0 bg-black/25" />
        </Link>

        <div className="absolute left-4 top-4 z-20 rounded-full bg-[#c9a24d] px-3 py-1 text-xs font-semibold text-white shadow-md">
          Up to {maxDiscount}% OFF
        </div>
      </div>

      <div className="mt-6 md:mt-8">
        <h3 className="text-xl font-light tracking-wide text-[#2b2118] md:text-2xl">
          <Link href={slug} className="transition hover:text-[#c9a24d]">
            {title}
          </Link>
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {roomTypes.map(({ key, label }) => {
            const roomPrice = pricing[key];
            const savings = roomPrice.originalPrice - roomPrice.discountedPrice;

            return (
              <div
                key={key}
                className="rounded-xl border border-[#e5ddd3] bg-[#faf9f7] px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7a5e]">
                  {label}
                </p>

                <p className="mt-2 text-sm text-gray-500 line-through">
                  ₹{roomPrice.originalPrice} / night
                </p>

                <p className="text-lg font-semibold text-[#2b2118]">
                  ₹{roomPrice.discountedPrice} / night
                </p>

                <p className="text-xs font-medium text-green-600">
                  You save ₹{savings}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-4 leading-relaxed text-gray-600 md:whitespace-nowrap">
          {description}
        </p>

        <Link
          href={slug}
          className="mt-6 inline-block border-b border-[#2b2118] pb-1 text-sm uppercase tracking-widest text-[#2b2118] transition hover:border-[#c9a24d] hover:text-[#c9a24d]"
        >
          View Room
        </Link>
      </div>
    </article>
  );
}
