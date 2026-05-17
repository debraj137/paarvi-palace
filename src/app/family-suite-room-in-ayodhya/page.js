import RoomLandingPage from "@/components/RoomLandingPage";

const familySuiteTwoBedsFaqs = [
  {
    question: "Who is the Family Suite (2 beds) best for?",
    answer:
      "This suite is ideal for small families, relatives travelling together, and guests who want more sleeping flexibility and more room than a standard couple stay.",
  },
  {
    question: "Does the Family Suite (2 beds) have AC and Non-AC options?",
    answer:
      "Yes. Guests can choose AC or Non-AC options based on comfort preference, season, and budget at the time of booking.",
  },
  {
    question: "What amenities are included in the Family Suite (2 beds)?",
    answer:
      "The suite includes Wi-Fi, a flat-screen TV, hot water, housekeeping, room service, multiple beds, and a more spacious layout for a relaxed family stay.",
  },
  {
    question: "How can I book the Family Suite (2 beds)?",
    answer:
      "Guests can call Paarvi Palace directly or use the booking form on this page to request dates, confirm room choice, and reserve the suite.",
  },
];

const familySuiteTwoBedsImages = [
  "/images/rooms/family-suite(2-bed)/1.jpeg",
  "/images/rooms/family-suite(2-bed)/2.jpeg",
  "/images/rooms/family-suite(2-bed)/3.jpeg",
  "/images/rooms/family-suite(2-bed)/4.jpeg",
  "/images/rooms/family-suite(2-bed)/5.jpeg",
  "/images/rooms/family-suite(2-bed)/6.jpeg",
  "/images/rooms/family-suite(2-bed)/7.jpeg",
  "/images/rooms/family-suite(2-bed)/8.jpeg",
  "/images/rooms/family-suite(2-bed)/9.jpeg",
  "/images/rooms/family-suite(2-bed)/10.jpeg",
  "/images/rooms/family-suite(2-bed)/11.jpeg",
  "/images/rooms/family-suite(2-bed)/12.jpeg",
];

export const metadata = {
  title: "Family Suite (2 beds) in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Stay in a spacious Family Suite (2 beds) at Paarvi Palace, Ayodhya. AC and Non-AC suite options for families and small groups near Ram Mandir.",
  keywords: [
    "family suite in ayodhya",
    "2 bed family suite ayodhya",
    "family room near ram mandir",
    "paarvi palace family suite",
    "group stay room in ayodhya",
  ],
  alternates: {
    canonical: "/family-suite-room-in-ayodhya",
  },
  openGraph: {
    title: "Family Suite (2 beds) in Ayodhya | Paarvi Palace Near Ram Mandir",
    description:
      "Explore the Family Suite (2 beds) at Paarvi Palace with AC and Non-AC options, spacious interiors, and a family-friendly stay near Ram Mandir.",
    url: "https://www.paarvipalace.com/family-suite-room-in-ayodhya",
    siteName: "Paarvi Palace",
    images: [
      {
        url: "/images/rooms/family-suite(2-bed)/7.jpeg",
        width: 1200,
        height: 800,
        alt: "Family Suite (2 beds) at Paarvi Palace in Ayodhya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function FamilySuitePage() {
  return (
    <RoomLandingPage
      titleMain="Family Suite"
      titleAccent="(2 beds) in Ayodhya"
      heroDescription="A spacious and welcoming suite for families and small groups who want comfort, privacy, and a more relaxed stay near Ram Mandir."
      roomKey="Family Suite (2 beds)"
      images={familySuiteTwoBedsImages}
      imageAltPrefix="Family Suite 2 beds at Paarvi Palace in Ayodhya image"
      detailHeading="Space, Comfort, and Togetherness for Family Stays"
      detailParagraphs={[
        "Our Family Suite (2 beds) at Paarvi Palace is thoughtfully planned for families and small groups who need more space and a room layout that feels comfortable throughout their stay in Ayodhya.",
        "For guests comparing room options, this suite works well when you want extra sleeping flexibility and a more family-friendly setup than a standard couple room can offer.",
      ]}
      featureHeading="Key Features of the Family Suite (2 beds)"
      featureList={[
        "Spacious suite ideal for families and small groups",
        "Multiple comfortable beds with premium bedding",
        "Air-conditioned room with geyser and 24/7 hot water",
        "High-speed Wi-Fi, flat-screen TV, and modern amenities",
        "Ample storage space and comfortable seating area",
        "24/7 room service and daily housekeeping",
      ]}
      featureCards={[
        "Spacious suite with multiple beds",
        "Ideal for families and group stays",
        "Air-conditioned comfort with geyser",
        "High-speed Wi-Fi and flat-screen TV",
        "Spacious modern attached bathroom",
        "Comfortable seating and storage space",
        "24/7 room service and housekeeping",
        "On-site parking space for up to 15 cars",
      ]}
      whyTitle="A Better Option for Small Families and Shared Stays"
      whyDescription="Guests looking at the 2-bed family suite usually want a stay that is easier to share, easier to manage, and more comfortable for multiple people in one room. This suite gives you that flexibility while keeping the stay practical and well-located."
      whyPoints={[
        "Strong fit for small families and relatives",
        "More sleeping flexibility than standard rooms",
        "Useful for shared pilgrim travel plans",
        "Clear AC and Non-AC suite pricing",
      ]}
      galleryTitle="Inside the Family Suite (2 beds)"
      galleryIntro="Explore the layout, interiors, and extra space that make this suite a comfortable choice for family stays at Paarvi Palace."
      faqs={familySuiteTwoBedsFaqs}
      faqTitle="FAQs for the Family Suite (2 beds)"
      faqIntro="These answers help guests decide whether this family suite matches their group size, comfort needs, and booking plan."
    />
  );
}
