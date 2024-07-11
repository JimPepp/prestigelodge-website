
import { Header, Intro, CTA, Footer } from "./ui/uiComponents";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header />
      <Intro />
      <div className="flex flex-col py-8 lg:px-[20%] xl:px-[35%] 3xl:px-[40%]">
        <div className="flex flex-col justify-center px-5">
          <h1 className="text-xl lg:text-3xl text-center pt-3">What we do!</h1>
          <p className="text-center lg:text-xl">
            Handling marketing and your online presence is a time consuming
            task. We do exactly that, explicitly for hospitality businesses.
          </p>
        </div>
        <div className="flex flex-col justify-center px-5 lg:pt-8">
          <h1 className="text-xl lg:text-3xl text-center pt-3">
            What do we offer?
          </h1>
          <p className="text-center lg:text-xl">
            As your partner we can manage your marketing campaings, your website
            and your social media, allowing you to focus on running your
            business.
          </p>
        </div>
      </div>

      <CTA />

      <div className="flex flex-col justify-center items-center w-full py-8">
        <h1 className="text-xl lg:text-4xl text-center py-4">Why us?</h1>

        <div className="flex flex-col justify-center items-center lg:h-dvh lg:flex-row lg:px-[10%] 3xl:px-[30%]">
          <div className="px-0 lg:px-40">
            <h1 className="text-xl lg:text-4xl text-center pt-3">
              Experience in the field!
            </h1>
            <div className="px-20 lg:px-32 xl:px-40 py-3">
              <div className="h-0.5 bg-text"></div>
            </div>
            <p className="text-center px-5 lg:text-xl lg:px-[10%]">
              Our team has previous work expeirience in the hospitality industry, 
              and has direct knowledge of how businesses such as yours operate. 
              Therefore we correlate to your needs and concerns, brainstorming 
              tailored solutions based on your situation.
            </p>
          </div>
          <div className="flex py-4 lg:py-0 items-center justify-center">
            <Image
              src="/images/restaurant-pexels.png"
              width={1500}
              height={10}
              alt={"A table in a fine restaurant with elegant decorations, restaurant marketing for booking events."}
              className="object-cover max-h-40 object-center lg:max-h-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:h-dvh lg:flex-row-reverse lg:px-[10%] 3xl:px-[30%]">
          <div className="px-0 lg:px-40">
            <h1 className="text-xl text-center pt-3 lg:text-4xl">
              Our Guarantee
            </h1>
            <div className="px-20 lg:px-32 xl:px-40 py-3">
              <div className="h-0.5 bg-text"></div>
            </div>
            <p className="text-center px-5 lg:text-xl lg:px-[10%]">
              High Risk - High Reward! Our success is depending on your success.
              We believe that the fundamental of a great collaboration is trust.
              In order to inspire your trust, know that we will share each risk
              that you take with you!
            </p>
          </div>
          <div className="flex py-4 lg:py-0 items-center justify-center">
            <Image
              src="/images/pexels-pixabay.jpg"
              width={1500}
              height={10}
              alt={"A luxurious hotel lobby that utilizes great hotel marketing."}
              className="object-cover max-h-40 object-center lg:max-h-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:h-dvh lg:flex-row lg:px-[10%] 3xl:px-[30%]">
          <div className="px-0 lg:px-40">
            <h1 className="text-xl text-center pt-3 lg:text-4xl">
              Result - Driven
            </h1>
            <div className="px-20 lg:px-32 xl:px-40 py-3">
              <div className="h-0.5 bg-text"></div>
            </div>
            <p className="text-center px-5 lg:text-xl lg:px-[10%]">
              Bringing you results is our sole priority. We care about your
              goals and we want to help you to achieve them. That's why we
              have a drive to bring you tangible results and to see you win.
            </p>
          </div>{" "}
          <div className="flex py-4 lg:py-0 items-center justify-center">
            <Image
              src="/images/bar-pexels.png"
              width={1500}
              height={10}
              alt={"A bar that has its branding on point."}
              className="object-cover max-h-40 object-center lg:max-h-full"
            />
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
    </>
  );
}
