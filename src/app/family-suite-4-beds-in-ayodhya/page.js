import RoomLandingPage from "@/components/RoomLandingPage";

const familySuiteFourBedsFaqs = [
  {
    question: "Who should book the Family Suite (4 beds)?",
    answer:
      "This suite is best for bigger families, group travellers, and guests who want maximum shared sleeping capacity in one comfortable room near Ram Mandir.",
  },
  {
    question: "Does the Family Suite (4 beds) have AC and Non-AC options?",
    answer:
      "Yes. Paarvi Palace offers both AC and Non-AC options for the Family Suite (4 beds), depending on guest preference and availability.",
  },
  {
    question: "What amenities come with the Family Suite (4 beds)?",
    answer:
      "The suite includes Wi-Fi, a flat-screen TV, hot water, housekeeping, room service, seating, storage, and a spacious layout intended for larger shared stays.",
  },
  {
    question: "How can I reserve the Family Suite (4 beds)?",
    answer:
      "Guests can call Paarvi Palace directly or use the booking form on the page to confirm dates, room preference, and booking details.",
  },
];

const familySuiteFourBedsImages = [
  "/images/rooms/family-suite(4-bed)/1.jpeg",
  "/images/rooms/family-suite(4-bed)/2.jpeg",
  "/images/rooms/family-suite(4-bed)/3.jpeg",
];

export const metadata = {
  title: "Family Suite (4 beds) in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Stay in a spacious Family Suite (4 beds) at Paarvi Palace, Ayodhya. AC and Non-AC suite options for large families and groups near Ram Mandir.",
  keywords: [
    "family suite 4 beds in ayodhya",
    "4 bed family room ayodhya",
    "large group room near ram mandir",
    "paarvi palace family suite 4 beds",
    "big family stay in ayodhya",
  ],
  alternates: {
    canonical: "/family-suite-4-beds-in-ayodhya",
  },
  openGraph: {
    title: "Family Suite (4 beds) in Ayodhya | Paarvi Palace Near Ram Mandir",
    description:
      "Explore the Family Suite (4 beds) at Paarvi Palace with large group-friendly interiors and AC and Non-AC options near Ram Mandir.",
    url: "https://www.paarvipalace.com/family-suite-4-beds-in-ayodhya",
    siteName: "Paarvi Palace",
    images: [
      {
        url: "/images/rooms/family-suite(4-bed)/1.jpeg",
        width: 1200,
        height: 800,
        alt: "Family Suite (4 beds) at Paarvi Palace in Ayodhya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function FamilySuiteFourBedsPage() {
  return (
    <RoomLandingPage
      titleMain="Family Suite"
      titleAccent="(4 beds) in Ayodhya"
      heroDescription="A large and comfortable suite for bigger families and groups who want generous sleeping space and a peaceful, practical stay in Ayodhya."
      roomKey="Family Suite (4 beds)"
      images={familySuiteFourBedsImages}
      imageAltPrefix="Family Suite 4 beds at Paarvi Palace in Ayodhya image"
      detailHeading="Spacious Family Stays with Added Flexibility"
      detailParagraphs={[
        "Our Family Suite (4 beds) at Paarvi Palace is ideal for larger family groups, tour groups, and guests who need maximum space and comfort during their stay in Ayodhya.",
        "If keeping everyone together matters more than splitting into multiple rooms, this suite gives you a practical way to manage larger shared stays near Ram Mandir.",
      ]}
      featureHeading="Key Features of the Family Suite (4 beds)"
      featureList={[
        "Large suite with 4 beds for bigger families and groups",
        "Generous layout with ample space to relax",
        "Air-conditioned room with geyser and 24/7 hot water",
        "High-speed Wi-Fi, flat-screen TV, and modern amenities",
        "Comfortable seating and storage for longer stays",
        "24/7 room service and daily housekeeping",
      ]}
      featureCards={[
        "Large suite with 4 comfortable beds",
        "Best for bigger families and group stays",
        "Air-conditioned comfort with geyser",
        "High-speed Wi-Fi and flat-screen TV",
        "Modern attached bathroom with hot water",
        "Seating and storage for extra convenience",
        "24/7 room service and housekeeping",
        "Convenient location near Ram Mandir",
      ]}
      whyTitle="A Strong Match for Bigger Family and Group Travel Plans"
      whyDescription="Guests searching for a 4-bed family suite usually need maximum shared capacity without giving up comfort. This suite helps larger groups stay together in one place, making check-in, coordination, and overnight travel more convenient."
      whyPoints={[
        "Best suited for bigger families and group travel",
        "Easier coordination than splitting multiple rooms",
        "Extra sleeping capacity in one shared layout",
        "Clear AC and Non-AC suite pricing",
      ]}
      galleryTitle="Inside the Family Suite (4 beds)"
      galleryIntro="See the extra space and flexible sleeping setup designed for large family and group stays at Paarvi Palace."
      faqs={familySuiteFourBedsFaqs}
      faqTitle="FAQs for the Family Suite (4 beds)"
      faqIntro="These answers help guests understand whether this larger suite is the right fit for their group size, comfort needs, and booking plan."
    />
  );
}
