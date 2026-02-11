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
  metadataBase: new URL("https://www.paarvipalace.com"),

  title: "Paarvi Palace | Homestay Near Ram Mandir Ayodhya",
  description:
    "Paarvi Palace is a peaceful luxury homestay near Ram Mandir, Ayodhya offering Deluxe, Executive and Family Suite rooms for solo travellers, couples, families, and pilgrims seeking a comfortable stay.",

  openGraph: {
    title: "Paarvi Palace | Luxury Homestay Near Ram Mandir Ayodhya",
    description:
      "Paarvi Palace is a peaceful luxury homestay near Ram Mandir, Ayodhya offering Deluxe, Executive and Family Suite rooms for pilgrims, families and travellers.",
    url: "https://paarvipalace.com",
    siteName: "Paarvi Palace",
    images: [
      {
        url: "/og-image.png", // place OG image in /public
        width: 1200,
        height: 630,
        alt: "Paarvi Palace – Luxury Homestay in Ayodhya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Paarvi Palace | Luxury Homestay Near Ram Mandir Ayodhya",
    description:
      "Paarvi Palace is a peaceful luxury homestay near Ram Mandir, Ayodhya offering Deluxe, Executive and Family Suite rooms for pilgrims, families and travellers.",
    images: ["/og-image.png"],
  },
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
              "@id": "https://paarvipalace.com/#hotel",
              "name": "Hotel Paarvi Palace",
              "url": "https://paarvipalace.com/",
              "logo": "https://paarvipalace.com/logo/logo.png",
              "image": [
                "https://paarvipalace.com/images/rooms/deluxe/1.jpeg",
                "https://paarvipalace.com/images/rooms/executive/1.jpeg",
                "https://paarvipalace.com/images/rooms/family-suite/1.jpeg"
              ],
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
                "latitude": 26.7689284,
                "longitude": 82.1896528
              },
              "description": "Hotel Paarvi Palace is a peaceful and comfortable hotel near Ram Mandir in Ayodhya, offering Deluxe Rooms, Executive Rooms, and Family Suites for pilgrims, families, and business travellers.",
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Family Friendly", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Private Parking", "value": true }
              ],
              "sameAs": [
                "https://maps.app.goo.gl/wGNYsZE37rkqdy11A"
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
