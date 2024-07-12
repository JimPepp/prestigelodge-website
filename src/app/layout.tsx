import { Fparagraph } from "./styles/fonts";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Marketing Services for Hospitality Businesses | Prestige Lodge",
  },
  description: `Marketing solutions tailored for the hospitality industry. Υπηρεσίες μάρκετινγκ και διαφήμησης για
  τον κλάδο της φιλοξενίας και της εστίασης. Website creation. Hotel marketing. Restaurant marketing. Athens Hospitality Marketing. 
  Διαφήμιση Ξενοδοχείου. Διαφήμιση Εστιατορίου. Μάρκετινγκ Τουρισμός. Μαρκετινγκ Αθήνα. Δημηουργία Ιστοσελίδας για εστιατόρια.
  Δημηουργία Ιστοσελίδας για ξενοδοχεία. Συμβουλευτικές υπηρεσίες εστίασης και ξενοδοχειακών. Business consulting for hospitality.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Marketing Services for Hospitality Businesses | Prestige Lodge"
        />
        <meta
          property="og:description"
          content="Marketing solutions tailored for the hospitality industry. Website creation. Hotel marketing. Restaurant marketing. Hospitality Business Consulting. Piraeus, Athens - Greece | Madrid City, Madrid - Spain"
        />
        <meta
          property="og:image"
          content="/images/android-chrome-512x512.png"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={Fparagraph.className}>{children}</body>
    </html>
  );
}
