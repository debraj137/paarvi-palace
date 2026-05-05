export default function FaqSection({ eyebrow = "FAQs", title, intro, items }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.25em] text-xs text-[#b8a992]">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide text-[#2b2118]">
            {title}
          </h2>
          {intro ? (
            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
              {intro}
            </p>
          ) : null}
          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#c9a24d]" />
        </div>

        <div className="mt-14 space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-[#e5ddd3] bg-[#faf9f7] p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-light tracking-wide text-[#2b2118]">
                <span>{item.question}</span>
                <span className="text-[#c9a24d] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 pr-8 text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
