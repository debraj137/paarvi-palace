const reasons = [
  {
    title: "Couple Friendly Hotels",
    description:
      "Paarvi Palace offers a calm, comfortable, and welcoming stay for couples looking for privacy, cleanliness, and easy access to Ayodhya's major attractions.",
  },
  {
    title: "Hotels With Parking",
    description:
      "Guests arriving by car can enjoy the convenience of on-site parking, making Paarvi Palace a practical choice among hotels with parking in Ayodhya.",
  },
  {
    title: "Early Check In Hotels",
    description:
      "If you arrive early, our team can assist with early check-in requests whenever rooms are available, helping you settle in with less waiting after travel.",
  },
  {
    title: "Luxury Hotels",
    description:
      "With refined interiors, thoughtful hospitality, and peaceful surroundings, Paarvi Palace delivers a stay experience that feels warm, elegant, and comfortable.",
  },
  {
    title: "Hotels With Kitchen",
    description:
      "For guests seeking extra convenience, selected stay arrangements can support kitchen-related needs, making longer or family stays more comfortable.",
  },
  {
    title: "Hotels Near Ayodhya Dham Railway Station",
    description:
      "Paarvi Palace is a convenient stay option for travellers searching for hotels near Ayodhya Dham railway station while also wanting easy access to Ram Mandir.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#faf9f7] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-light tracking-wide text-[#2b2118] md:text-4xl">
            A Comfortable Stay for Every Kind of Traveller
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#c9a24d]" />

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-600">
            Paarvi Palace combines comfort, convenience, and thoughtful
            hospitality for guests visiting Ayodhya for pilgrimage, family
            travel, or a peaceful getaway.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-[#e5ddd3] bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-light tracking-wide text-[#2b2118]">
                {reason.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
