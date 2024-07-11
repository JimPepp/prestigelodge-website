import { Header, Contact, CTA, Footer, Profile } from "../ui/uiComponents";
import { Fh1, Fh2h3 } from "../styles/fonts";

export default function TheTeam() {
  return (
    <>
      <Header />
      <div className="pt-32">
        <div className="flex justify-center">
          <h1 className={`${Fh1.className} text-2xl lg:text-6xl`}>Meet the team</h1>
        </div>
      </div>
      <div>
        <Profile
          name="James Peppas"
          img="/images/james.jpg"
          info="Founder"
          email="james@prestigelodgedigital.com"
          left={false}
        />
        <Profile
          name="Polybius Stamoulakatos"
          img="/images/polybius.jpg"
          info="Marketing Specialist"
          email="polybius@prestigelodgedigital.com"
          left={true}
        />
      </div>
      <div className="flex justify-center items-center text-center px-8 pt-10">
        <p className={`${Fh2h3.className} lg:text-xl`}>Your success is our priority. Let us know how we can help!</p>
      </div>
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
