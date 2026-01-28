export const metadata = {
  title: "About Us | Paarvi Palace",
  description:
    "Learn about Paarvi Palace, a peaceful and comfortable homestay near Ram Mandir, Ayodhya, offering warm hospitality and refined stays.",
};

export default function AboutPage() {
  return (
    <main>

      {/* Page Hero */}
      <section className="bg-[#faf9f7] py-28">
        <div className="max-w-7xl mx-auto px-6">

          <span className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
            Our Story
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-wide text-[#2b2118]">
            About Paarvi Palace
          </h1>

          <div className="mt-6 w-20 h-[2px] bg-[#c9a24d]"></div>

          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
            Paarvi Palace is a thoughtfully designed homestay located near
            the sacred Ram Mandir in Ayodhya. Created with care, warmth,
            and simplicity, our home offers a peaceful retreat for pilgrims,
            families, and travellers seeking comfort and calm.
          </p>

        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              A Home Away From Home
            </h2>

            <div className="mt-4 w-14 h-px bg-[#c9a24d]"></div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At Paarvi Palace, we believe a stay should feel effortless.
              Our rooms are designed to be clean, comfortable, and calming,
              offering a restful space after a long day of darshan or travel.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you are visiting Ayodhya with family, elders, or
              on a spiritual journey, our homestay provides an atmosphere
              of quiet comfort and respectful hospitality.
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-light tracking-wide text-[#2b2118]">
              Thoughtful Hospitality
            </h2>

            <div className="mt-4 w-14 h-px bg-[#c9a24d]"></div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Located close to Ram Mandir, Paarvi Palace offers easy access
              while maintaining a peaceful environment away from crowds.
              Every detail — from cleanliness to service — is handled
              with care and attention.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We take pride in welcoming our guests personally and ensuring
              that their stay in Ayodhya is comfortable, safe, and memorable.
            </p>
          </div>

        </div>
      </section>

      {/* Gentle CTA */}
      <section className="bg-[#faf9f7] py-24 text-center">
        <p className="text-gray-600">
          We look forward to welcoming you to Paarvi Palace.
        </p>

        <a
          href="/rooms"
          className="mt-6 inline-block text-sm tracking-widest uppercase border-b border-[#2b2118] pb-1 text-[#2b2118] hover:border-[#c9a24d] hover:text-[#c9a24d] transition"
        >
          Explore Our Rooms
        </a>
      </section>

    </main>
  );
}
