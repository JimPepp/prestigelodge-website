import { Header, Contact, Footer } from "../ui/uiComponents";

export const metadata = {
  title: "Contact",
  description:
    "Contact us to learn how we can help hospitality businesses with their marketing campaigns and online presence management. Hotel marketing, restaurant marketing, website creation for hotels and restaurants.",
};

export default function ContactUs() {

  return (
    <>
      <Header />
      <div className=" pt-16"></div>
      <Contact />
      <Footer />
    </>
  );
}
