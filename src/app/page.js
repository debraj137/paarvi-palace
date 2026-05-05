import Amenities from "@/components/Amenities";
import ContactSection from "@/components/ContactSection";
import FaqSchema from "@/components/FaqSchema";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import RoomsSection from "@/components/RoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Hotels in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Discover Paarvi Palace, one of the comfortable hotels in Ayodhya with room options from Rs 501 to Rs 2000, private parking, selected kitchen access, and stays suitable for couples, families, and pilgrims.",
  keywords: [
    "hotels in ayodhya",
    "Hotels in Ayodhya Book with Free Cancellation",
    "hotels in ayodhya with free cancellation",
    "hotels rs 1001 to rs 2000",
    "hotels rs 501 to rs 1000",
    "couple friendly hotels",
    "hotels with parking",
    "early check in hotels",
    "luxury hotels",
    "hotels with kitchen",
    "hotels near Ayodhya Dham railway station",
  ],
  alternates: {
    canonical: "/",
  },
};

const homeFaqs = [
  {
    question: "How far is Paarvi Palace from Ram Mandir in Ayodhya?",
    answer:
      "Paarvi Palace offers a convenient stay location for guests visiting Ram Mandir and other key Ayodhya attractions. Guests can contact the property directly for the latest travel guidance and route support.",
  },
  {
    question: "What types of rooms are available at Paarvi Palace?",
    answer:
      "Guests can choose from Deluxe Rooms, Executive Rooms, and Family Suite options with multiple bed configurations, making the property suitable for couples, families, and small groups.",
  },
  {
    question: "Does Paarvi Palace offer parking and essential amenities?",
    answer:
      "Yes, Paarvi Palace offers essential stay amenities such as parking, Wi-Fi, hot water, attached bathrooms, and comfortable in-room features designed for a convenient Ayodhya stay.",
  },
  {
    question: "Is Paarvi Palace suitable for families and pilgrims?",
    answer:
      "Yes, the property is well suited for families, pilgrims, couples, and general travelers looking for a calm and comfortable stay in Ayodhya.",
  },
];

export default function Home() {
  return (
    <>
      <FaqSchema items={homeFaqs} />
      <Hero />
      <Amenities />
      <RoomsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection
        eyebrow="Stay Questions"
        title="Frequently Asked Questions About Staying at Paarvi Palace"
        intro="These are some of the most common questions guests ask before booking their stay in Ayodhya."
        items={homeFaqs}
      />
    </>
  );
}
