import Amenities from "@/components/Amenities";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import RoomsSection from "@/components/RoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Amenities />
      <RoomsSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </>
  );
}
