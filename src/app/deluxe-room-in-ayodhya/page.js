import RoomLandingPage from "@/components/RoomLandingPage";

const deluxeFaqs = [
  {
    question: "Who should choose the Deluxe Room at Paarvi Palace?",
    answer:
      "The Deluxe Room is ideal for solo travellers, couples, and guests who want a comfortable, practical stay near Ram Mandir without moving to a larger suite category.",
  },
  {
    question: "Does the Deluxe Room offer AC and Non-AC options?",
    answer:
      "Yes. Guests can choose between AC and Non-AC Deluxe Room options depending on comfort preference, travel season, and budget.",
  },
  {
    question: "What amenities are available in the Deluxe Room?",
    answer:
      "The Deluxe Room includes practical essentials such as Wi-Fi, a flat-screen TV, hot water, room service, housekeeping, and a comfortable bed setup for a relaxed Ayodhya stay.",
  },
  {
    question: "How can I reserve the Deluxe Room?",
    answer:
      "Guests can call Paarvi Palace directly or use the booking form on the page to check dates, room choice, and reservation details before arrival.",
  },
];

const deluxeRoomImages = [
  "/images/rooms/deluxe/1.jpeg",
  "/images/rooms/deluxe/2.jpeg",
  "/images/rooms/deluxe/3.jpeg",
  "/images/rooms/deluxe/4.jpeg",
  "/images/rooms/deluxe/5.jpeg",
  "/images/rooms/deluxe/6.jpeg",
  "/images/rooms/deluxe/7.jpeg",
  "/images/rooms/deluxe/8.jpeg",
  "/images/rooms/deluxe/9.jpeg",
  "/images/rooms/deluxe/10.jpeg",
];

export const metadata = {
  title: "Deluxe Room in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Stay in a comfortable Deluxe Room at Paarvi Palace, Ayodhya. AC and Non-AC options with Wi-Fi, hot water, and easy access to Ram Mandir.",
  keywords: [
    "deluxe room in ayodhya",
    "deluxe room near ram mandir",
    "paarvi palace deluxe room",
    "budget room in ayodhya",
    "comfortable hotel room in ayodhya",
  ],
  alternates: {
    canonical: "/deluxe-room-in-ayodhya",
  },
  openGraph: {
    title: "Deluxe Room in Ayodhya | Paarvi Palace Near Ram Mandir",
    description:
      "Explore the Deluxe Room at Paarvi Palace with comfortable interiors, AC and Non-AC pricing, and a peaceful stay near Ram Mandir.",
    url: "https://www.paarvipalace.com/deluxe-room-in-ayodhya",
    siteName: "Paarvi Palace",
    images: [
      {
        url: "/images/rooms/deluxe/7.jpeg",
        width: 1200,
        height: 800,
        alt: "Deluxe Room at Paarvi Palace in Ayodhya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function DeluxeRoomPage() {
  return (
    <RoomLandingPage
      titleMain="Deluxe Room"
      titleAccent="in Ayodhya"
      heroDescription="A peaceful and thoughtfully designed stay for solo travellers and couples who want comfort, convenience, and proximity to Ram Mandir."
      roomKey="Deluxe Room"
      images={deluxeRoomImages}
      imageAltPrefix="Deluxe Room at Paarvi Palace in Ayodhya image"
      detailHeading="Thoughtfully Designed for Everyday Comfort"
      detailParagraphs={[
        "Our Deluxe Rooms at Paarvi Palace offer a calm and refined stay experience with practical amenities, restful interiors, and a peaceful atmosphere for guests visiting Ayodhya.",
        "If you are comparing room options, the Deluxe Room is a smart fit for guests who want comfort, convenience, and value without needing the larger footprint of an Executive Room or Family Suite.",
      ]}
      featureHeading="Key Features of the Deluxe Room"
      featureList={[
        "Spacious interiors suitable for solo travellers, couples, and small families",
        "One king-size bed with plush bedding for two guests",
        "Air-conditioned room with geyser and 24/7 hot water",
        "High-speed Wi-Fi, flat-screen TV, and modern amenities",
        "Dedicated work desk ideal for business travellers",
        "24/7 room service and daily housekeeping",
      ]}
      featureCards={[
        "Spacious interiors designed for comfort",
        "One king-size bed for two guests",
        "Air-conditioned room with geyser",
        "High-speed Wi-Fi and flat-screen TV",
        "Modern attached bathroom with hot water",
        "Dedicated work desk for business travellers",
        "24/7 room service and housekeeping",
        "On-site parking space for up to 15 cars",
      ]}
      whyTitle="A Strong Choice for Simple, Comfortable Stays in Ayodhya"
      whyDescription="Guests looking for a Deluxe Room usually want a clean, comfortable, well-located option that feels easy to book and easy to trust. This room category works especially well for short pilgrim visits, couple stays, and practical overnight plans."
      whyPoints={[
        "Comfortable for solo travellers and couples",
        "Balanced option for budget and convenience",
        "Clear AC and Non-AC pricing choices",
        "Useful for short pilgrim and leisure stays",
      ]}
      galleryTitle="Inside the Deluxe Room"
      galleryIntro="A closer look at the comfort, layout, and peaceful ambience that define our Deluxe Room experience at Paarvi Palace."
      faqs={deluxeFaqs}
      faqTitle="FAQs for the Deluxe Room"
      faqIntro="These answers help guests quickly understand whether the Deluxe Room is the right match for their stay style, budget, and travel plan."
    />
  );
}
