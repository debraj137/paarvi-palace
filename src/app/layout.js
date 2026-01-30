import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
// import BottomBookingForm from "@/components/BottomBookingForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Paarvi Palace | Luxury Homestay",
  description: "Experience comfort & luxury at Paarvi Palace Homestay",
};

export const viewport = {
  themeColor: "#faf9f7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Paarvi Palace",
              "url": "https://paarvipalace.com",
              "logo": "https://paarvipalace.com/logo/logo.png",
              "image": [
                "https://paarvipalace.com/images/rooms/deluxe/1.jpeg",
                "https://paarvipalace.com/images/rooms/executive/1.jpeg",
                "https://paarvipalace.com/images/rooms/family/1.jpeg"
              ],
              "description": "Paarvi Palace is a peaceful luxury homestay near Ram Mandir, Ayodhya offering Deluxe, Executive and Family Suite rooms.",
              "priceRange": "₹₹",
              "telephone": "+91-9250538645",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bhiki Ka Purva, Ashapur Village, Darshan Nagar, Ranopali",
                "addressLocality": "Ayodhya",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "224123",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.7956,
                "longitude": 82.1943
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi" },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning" },
                { "@type": "LocationFeatureSpecification", "name": "Room Service" },
                { "@type": "LocationFeatureSpecification", "name": "Family Friendly" }
              ],
              "checkinTime": "12:00",
              "checkoutTime": "11:00",
              "sameAs": [
                "https://www.google.com/maps"
              ]
            }),
          }}
        />

        {children}
        {/* <BottomBookingForm/> */}
        <BookingSection />
        <Footer />
      </body>
    </html>
  );
}
