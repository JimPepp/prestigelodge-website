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
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={Fparagraph.className}>{children}</body>
    </html>
  );
}
