import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import Script from "next/script";
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
       <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1241403251416000');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-634NGVQGS2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-634NGVQGS2');
          `}
        </Script>

        {/* <Script id="meta-pixel" strategy="afterInteractive">
          {`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1241403251416000');
  fbq('track', 'PageView');
`}
        </Script> */}

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1241403251416000&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "@id": "https://www.paarvipalace.com/#hotel",
              "name": "Hotel Paarvi Palace",
              "url": "https://www.paarvipalace.com/",
              "logo": "https://www.paarvipalace.com/logo/logo.png",
              "image": [
                "https://www.paarvipalace.com/images/rooms/deluxe/1.jpeg",
                "https://www.paarvipalace.com/images/rooms/executive/1.jpeg",
                "https://www.paarvipalace.com/images/rooms/family-suite/1.jpeg"
              ],
              "telephone": "+91-9250538645",
              "priceRange": "₹₹",
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
                { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Breakfast Available", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Mobility Accessible", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning in Some Rooms", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Kitchen in Some Rooms", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Family Friendly", "value": true }
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
