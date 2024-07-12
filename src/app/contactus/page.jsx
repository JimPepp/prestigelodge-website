import { Header, Contact, Footer } from "../ui/uiComponents";

export const metadata = {
  title: "Contact Prestige Lodge for a FREE Marking Consultation!",
  description: `Contact us to learn how we can help hospitality businesses with their marketing campaigns and online presence management.
  Επικοινονίστε μαζι μας, για να μαθετε περισοτερα για τις υπηρεσίες μάρκετινγκ και διαφήμησης για τον κλάδο της φιλοξενίας και της εστίασης. 
  Website creation. Hotel marketing. Restaurant marketing. Athens Hospitality Marketing. Διαφήμιση Ξενοδοχείου. Διαφήμιση Εστιατορίου. 
  Μάρκετινγκ Τουρισμός. Μαρκετινγκ Αθήνα. Δημηουργία Ιστοσελίδας για εστιατόρια. Δημηουργία Ιστοσελίδας για ξενοδοχεία. Hotel marketing, 
  restaurant marketing, website creation for hotels and restaurants.`,
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
