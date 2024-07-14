import { Header, Contact, Footer, Profile } from "../ui/uiComponents";
import { Fh1, Fh2h3 } from "../styles/fonts";

export const metadata = {
  title: "Meet the team of Prestige Lodge!",
  description: `See who is behind Prestige Lodge and contact us directly.`,
};

export default function TheTeam() {
  return (
    <>
      <Header />
      <div className="pt-32"></div>{" "}
      <div className="flex justify-center items-center text-center px-8 pt-10">
        <p className={`${Fh2h3.className} text-2xl lg:text-4xl`}>
          Your success is our priority. Let us know how we can help!
        </p>
      </div>
      <Contact />
      <div className="pt-4 pb-32">
        <div className="flex flex-col items-center">
          <h1 className={`text-3xl lg:text-4xl`}>Direct Access</h1>
          <h1 className={`text-2xl lg:text-3xl`}>
            You may also contact a team member directly!
          </h1>
        </div>
        <div className="pt-10">
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
      </div>
      <Footer />
    </>
  );
}
