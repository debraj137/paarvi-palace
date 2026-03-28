import Amenities from "@/components/Amenities";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import RoomsSection from "@/components/RoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Hotels in Ayodhya | Paarvi Palace Near Ram Mandir",
  description:
    "Discover Paarvi Palace, one of the comfortable hotels in Ayodhya with room options from Rs 501 to Rs 2000, private parking, selected kitchen access, and stays suitable for couples, families, and pilgrims.",
  keywords: [
    "hotels in ayodhya",
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

export default function Home() {
  return (
    <>
      <Hero />
      <Amenities />
      <RoomsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
