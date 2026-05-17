import RoomLandingPage from "@/components/RoomLandingPage";

const executiveFaqs = [
  {
    question: "Who is the Executive Room best suited for?",
    answer:
      "The Executive Room is a strong fit for business travellers, couples, and guests who want more space, a work desk, and a quieter premium-feel stay near Ram Mandir.",
  },
  {
    question: "Does the Executive Room include AC and Non-AC options?",
    answer:
      "Yes. Paarvi Palace offers both AC and Non-AC Executive Room options so guests can choose based on comfort preference and budget.",
  },
  {
    question: "What amenities are available in the Executive Room?",
    answer:
      "Guests can expect Wi-Fi, a flat-screen TV, hot water, housekeeping, room service, and a dedicated work-friendly setup designed for comfortable short or extended stays.",
  },
  {
    question: "How can I book the Executive Room at Paarvi Palace?",
    answer:
      "Guests can call Paarvi Palace directly or use the contact page to confirm availability, room type, rates, and stay dates before booking.",
  },
];

const executiveRoomImages = [
  "/images/rooms/executive/1.jpeg",
  "/images/rooms/executive/2.jpeg",
  "/images/rooms/executive/3.jpeg",
  "/images/rooms/executive/4.jpeg",
  "/images/rooms/executive/5.jpeg",
  "/images/rooms/executive/6.jpeg",
  "/images/rooms/executive/7.jpeg",
  "/images/rooms/executive/8.jpeg",
  "/images/rooms/executive/9.jpeg",
  "/images/rooms/executive/10.jpeg",
];

export const metadata = {
  title: "Executive Room in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Book an Executive Room at Paarvi Palace, Ayodhya. Spacious AC and Non-AC room options with Wi-Fi, work desk, hot water, and easy access to Ram Mandir.",
  keywords: [
    "executive room in ayodhya",
    "executive room near ram mandir",
    "paarvi palace executive room",
    "business hotel room in ayodhya",
    "hotel room with wifi in ayodhya",
  ],
  alternates: {
    canonical: "/executive-room-in-ayodhya",
  },
  openGraph: {
    title: "Executive Room in Ayodhya | Paarvi Palace Near Ram Mandir",
    description:
      "Explore the Executive Room at Paarvi Palace with spacious interiors, AC and Non-AC pricing, Wi-Fi, hot water, and a comfortable stay near Ram Mandir.",
    url: "https://www.paarvipalace.com/executive-room-in-ayodhya",
    siteName: "Paarvi Palace",
    images: [
      {
        url: "/images/rooms/executive/7.jpeg",
        width: 1200,
        height: 800,
        alt: "Executive Room at Paarvi Palace in Ayodhya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ExecutiveRoomPage() {
  return (
    <RoomLandingPage
      titleMain="Executive Room"
      titleAccent="in Ayodhya"
      heroDescription="A spacious, elegant stay for guests who want extra comfort, better work-friendly utility, and quick access to Ram Mandir."
      roomKey="Executive Room"
      images={executiveRoomImages}
      imageAltPrefix="Executive Room at Paarvi Palace in Ayodhya image"
      detailHeading="Spacious Comfort with a Premium Touch"
      detailParagraphs={[
        "Our Executive Rooms at Paarvi Palace are designed for guests who want a little more from their stay in Ayodhya, including extra space, refined interiors, and a calmer atmosphere for work or rest.",
        "If someone lands on this page while comparing options, the Executive Room gives them a clear middle path between budget and premium: more comfort than a basic stay without moving into a large family suite.",
      ]}
      featureHeading="Key Features of the Executive Room"
      featureList={[
        "Spacious room layout with premium interiors",
        "Comfortable king-size bed with plush bedding",
        "Dedicated work desk ideal for business travellers",
        "High-speed Wi-Fi, flat-screen TV, and modern amenities",
        "Air-conditioned room with geyser and 24/7 hot water",
        "24/7 room service and daily housekeeping",
      ]}
      featureCards={[
        "Spacious interiors with premium furnishings",
        "Dedicated work desk for business travellers",
        "High-speed Wi-Fi and uninterrupted connectivity",
        "Comfortable seating area for relaxation",
        "Air-conditioned room with controlled lighting",
        "24/7 room service and in-room dining",
        "Convenient for short business and pilgrimage stays",
        "Easy access to Ram Mandir, airport, and city routes",
      ]}
      whyTitle="A Better Fit for Guests Comparing Value, Space, and Comfort"
      whyDescription="Visitors searching for an executive room usually want a quick answer to one question: is this room worth the upgrade? This room is ideal if you want more spacious interiors, a stronger work-and-rest setup, and a more polished stay experience near Ayodhya's key attractions."
      whyPoints={[
        "Good match for couples wanting extra comfort",
        "Useful for remote work and business travel",
        "Clear AC and Non-AC pricing options",
        "Stronger booking intent with direct call support",
      ]}
      galleryTitle="Inside the Executive Room"
      galleryIntro="Experience the space, elegance, and thoughtful details that define our Executive Rooms at Paarvi Palace."
      faqs={executiveFaqs}
      faqTitle="FAQs for the Executive Room"
      faqIntro="These answers help guests quickly decide whether this room type matches their budget, travel style, and stay requirements."
    />
  );
}
