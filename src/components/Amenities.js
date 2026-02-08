import {
  Wifi,
  ParkingCircle,
  Utensils,
  Snowflake,
  Bell,
  Car,
} from "lucide-react";

export default function Amenities() {
  const amenities = [
    { icon: Wifi, label: "Complimentary Wi-Fi" },
    { icon: ParkingCircle, label: "Private Parking" },
    { icon: Utensils, label: "In-House Restaurant" },
    { icon: Snowflake, label: "Air-Conditioned Rooms" },
    { icon: Bell, label: "24×7 Room Service" },
    { icon: Car, label: "Cab & Travel Assistance" },
  ];

  return (
    <section className="bg-[#faf9f7] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.25em] text-xs text-gray-500">
            Thoughtful Comfort
          </span>

          <h2 className="mt-4 text-4xl font-light tracking-wide text-[#2b2118]">
            Amenities & Services
          </h2>

          <div className="mt-6 w-20 h-[2px] bg-[#c9a24d] mx-auto"></div>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto leading-relaxed">
            Every detail at Paarvi Palace is curated to offer a serene,
            comfortable, and refined stay near Ram Mandir, Ayodhya.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group text-center"
              >
                <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 group-hover:border-[#c9a24d] transition">
                  <Icon className="w-5 h-5 text-gray-700 group-hover:text-[#c9a24d]" />
                </div>

                <p className="text-sm tracking-wide text-gray-700">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
