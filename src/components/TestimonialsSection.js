"use client";

import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ankit Sharma",
      location: "Delhi",
      text: "A very peaceful and comfortable stay. The rooms were clean, well-maintained, and the location near Ram Mandir is extremely convenient.",
    },
    {
      name: "Sunita Verma",
      location: "Lucknow",
      text: "After a long day, Paarvi Palace felt calm and welcoming. The hospitality was warm and the stay was truly relaxing.",
    },
    {
      name: "Rohit Agarwal",
      location: "Jaipur",
      text: "Perfect for families visiting Ayodhya. Quiet surroundings, comfortable rooms, and a feeling of safety throughout our stay.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((index + 1) % testimonials.length);

  return (
    <section className="bg-[#faf9f7] py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Section Header */}
        <span className="uppercase tracking-[0.25em] text-xs text-gray-500">
          Guest Experiences
        </span>

        <h2 className="mt-4 text-4xl font-light tracking-wide">
          What Our Guests Say
        </h2>

        <div className="mt-6 w-20 h-[2px] bg-[#c9a24d] mx-auto"></div>

        {/* Testimonial */}
        <div className="mt-20 relative">

          <p
            key={index}
            className="text-xl text-gray-700 leading-relaxed transition-opacity duration-700"
          >
            “{testimonials[index].text}”
          </p>

          <div className="mt-10 text-sm tracking-wide text-gray-600">
            {testimonials[index].name},{" "}
            <span className="text-gray-500">
              {testimonials[index].location}
            </span>
          </div>

          {/* Controls */}
          <div className="mt-16 flex items-center justify-center gap-10">

            <button
              onClick={prev}
              className="text-gray-400 hover:text-[#c9a24d] transition"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index
                      ? "bg-[#c9a24d]"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={next}
              className="text-gray-400 hover:text-[#c9a24d] transition"
              aria-label="Next testimonial"
            >
              →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
