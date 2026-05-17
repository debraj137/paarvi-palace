import RoomLandingPage from "@/components/RoomLandingPage";

const familySuiteThreeBedsFaqs = [
  {
    question: "Who is the Family Suite (3 beds) best suited for?",
    answer:
      "This suite is a strong fit for larger families, relatives travelling together, and small groups who need more beds and more shared space during their stay in Ayodhya.",
  },
  {
    question: "Does the Family Suite (3 beds) offer AC and Non-AC options?",
    answer:
      "Yes. Guests can choose AC or Non-AC options based on comfort preference, budget, and season at the time of booking.",
  },
  {
    question: "What amenities are available in the Family Suite (3 beds)?",
    answer:
      "Guests can expect Wi-Fi, a flat-screen TV, hot water, housekeeping, room service, practical seating and storage, and a layout designed for group comfort.",
  },
  {
    question: "How do I reserve the Family Suite (3 beds)?",
    answer:
      "Guests can call Paarvi Palace directly or use the booking form on the page to request room availability, preferred dates, and reservation support.",
  },
];

const familySuiteThreeBedsImages = [
  "/images/rooms/family-suite(3-bed)/1.jpeg",
  "/images/rooms/family-suite(3-bed)/2.jpeg",
  "/images/rooms/family-suite(3-bed)/3.jpeg",
];

export const metadata = {
  title: "Family Suite (3 beds) in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Stay in a spacious Family Suite (3 beds) at Paarvi Palace, Ayodhya. AC and Non-AC suite options for families and small groups near Ram Mandir.",
  keywords: [
    "family suite 3 beds in ayodhya",
    "3 bed family room ayodhya",
    "group suite near ram mandir",
    "paarvi palace family suite 3 beds",
    "large family room in ayodhya",
  ],
  alternates: {
    canonical: "/family-suite-3-beds-in-ayodhya",
  },
  openGraph: {
    title: "Family Suite (3 beds) in Ayodhya | Paarvi Palace Near Ram Mandir",
    description:
      "Explore the Family Suite (3 beds) at Paarvi Palace with spacious group-friendly interiors and AC and Non-AC options near Ram Mandir.",
    url: "https://www.paarvipalace.com/family-suite-3-beds-in-ayodhya",
    siteName: "Paarvi Palace",
    images: [
      {
        url: "/images/rooms/family-suite(3-bed)/1.jpeg",
        width: 1200,
        height: 800,
        alt: "Family Suite (3 beds) at Paarvi Palace in Ayodhya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function FamilySuiteThreeBedsPage() {
  return (
    <RoomLandingPage
      titleMain="Family Suite"
      titleAccent="(3 beds) in Ayodhya"
      heroDescription="A spacious suite for larger families and small groups who need extra sleeping space, greater flexibility, and a peaceful stay near Ram Mandir."
      roomKey="Family Suite (3 beds)"
      images={familySuiteThreeBedsImages}
      imageAltPrefix="Family Suite 3 beds at Paarvi Palace in Ayodhya image"
      detailHeading="More Space for Comfortable Group Stays"
      detailParagraphs={[
        "Our Family Suite (3 beds) at Paarvi Palace is thoughtfully arranged for families and groups who need more room while staying in Ayodhya. The layout balances comfort, practicality, and a calm atmosphere.",
        "If you are planning a stay with children, relatives, or a small pilgrim group, this suite gives everyone more personal space without separating the group across different rooms.",
      ]}
      featureHeading="Key Features of the Family Suite (3 beds)"
      featureList={[
        "Spacious suite with 3 beds for families and group stays",
        "Comfortable room layout with practical sleeping arrangements",
        "Air-conditioned room with geyser and 24/7 hot water",
        "High-speed Wi-Fi, flat-screen TV, and modern amenities",
        "Useful storage space and seating for a relaxed stay",
        "24/7 room service and daily housekeeping",
      ]}
      featureCards={[
        "Spacious suite with 3 comfortable beds",
        "Ideal for larger families and small groups",
        "Air-conditioned comfort with geyser",
        "High-speed Wi-Fi and flat-screen TV",
        "Modern attached bathroom with hot water",
        "Storage and seating for added convenience",
        "24/7 room service and housekeeping",
        "Peaceful location near Ram Mandir",
      ]}
      whyTitle="A Practical Choice for Larger Shared Family Stays"
      whyDescription="Guests searching for a 3-bed family suite usually want to keep everyone together while still maintaining comfort and flexibility. This suite works well when more than two sleepers need to share one space without making the stay feel cramped."
      whyPoints={[
        "Useful for larger families and pilgrim groups",
        "Better group comfort without splitting rooms",
        "Functional layout for shared overnight stays",
        "Clear AC and Non-AC room options",
      ]}
      galleryTitle="Inside the Family Suite (3 beds)"
      galleryIntro="Explore the spacious setup designed for families and groups seeking extra room and shared comfort at Paarvi Palace."
      faqs={familySuiteThreeBedsFaqs}
      faqTitle="FAQs for the Family Suite (3 beds)"
      faqIntro="These answers help guests compare group-friendly room choices and decide whether this suite fits their stay requirements."
    />
  );
}
