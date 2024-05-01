import { Fparagraph } from "./styles/fonts";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Prestige Lodge",
    default: "Digital Solutions for Hospitality businesses | Prestige Lodge",
  },
  description:
    "Digital solutions tailored for the hospitality industry. From website creation to digital marketing, we're here to elevate your online presence and drive success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Fparagraph.className}>{children}</body>
    </html>
  );
}
