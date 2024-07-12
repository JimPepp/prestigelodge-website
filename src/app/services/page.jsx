import { Header, Footer, ScrollSection, CTA } from "../ui/uiComponents";

export const metadata = {
  title: "Website Creation - Hospitality Marketing - Business Consulting Services for Hospitality Establishments.",
  description:
  `Visit our website to learn more on how we can help hospitality businesses with their marketing campaigns and online presence management. 
  Αναλαμβάνουμε διαφημηστικές καμπάνιες και την διαδυκτιακή παρουσία του ξενοδοχείου ή του εστιατορίου σας. Επισκευτείτε την ιστοσελίδα μας
  για να μάθετε περισσότερα. Website creation. Hotel marketing. Restaurant marketing. Athens Hospitality Marketing. Διαφήμιση Ξενοδοχείου. 
  Διαφήμιση Εστιατορίου. Μάρκετινγκ Τουρισμός. Μαρκετινγκ Αθήνα. Δημηουργία Ιστοσελίδας για εστιατόρια. Δημηουργία Ιστοσελίδας για ξενοδοχεία. 
  Hotel marketing, restaurant marketing, website creation for hotels and restaurants.`,
};

export default function Services() {
  return (
    <>
      <Header />
      <div className="pt-40 flex justify-center text-center flex-col">
        <h1 className="text-2xl lg:text-4xl">Our Solutions</h1>
        <p className="lg:pb-32 pb-8 pt-4 lg:text-xl lg:px-[35%]">We can manage the following for you, 
          allowing you to put your a hundred percent of your focus to running your business.</p>
      </div>
      <ScrollSection />
      <div className="py-10"></div>
      <CTA />
      <div className="py-10"></div>
      <Footer />
    </>
  );
}
