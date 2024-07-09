"use client";

import { Fh1, Fh2h3 } from "./styles/fonts";
import { Header, Intro, CTA, Footer } from "./ui/uiComponents";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header />
      <Intro />
      <div className="flex flex-col py-8 lg:px-96">
        <div className="flex flex-col justify-center px-5 lg:px-72">
          <h1 className="text-xl lg:text-3xl text-center pt-3">What we do!</h1>
          <p className="text-center lg:text-xl">
            Handling marketing and your online presence is a time consuming
            task. We work explicitly with hospitality and dining businesses.
          </p>
        </div>
        <div className="flex flex-col justify-center px-5 lg:px-72">
          <h1 className="text-xl lg:text-3xl text-center pt-3">What do we offer?</h1>
          <p className="text-center lg:text-xl">
            As your partner we can manage your marketing campaings, your website
            and your social media, allowing you to focus on the essentials of
            running your busines.
          </p>
        </div>
      </div>

      <CTA/>

      <div className="flex flex-col justify-center items-center w-full py-8">
        <h1 className="text-xl lg:text-4xl text-center pt-3">Why us?</h1>
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <div className="px-0 lg:px-40">
            <h1 className="text-xl lg:text-3xl text-center pt-3">
              Experience in the field
            </h1>
            <div className="px-20 lg:px-60 py-3">
              <div className="h-0.5 bg-text"></div>
            </div>
            <p className="text-center lg:text-xl px-5 lg:pr-">
              Our marketing and web-deveopment teams have previous work
              expeirience in the hospitality and dining industries. Our team is
              built from individuals who have hands on experience in businesses
              such as yours, therefore they correlate to your concerns.
            </p>
          </div>
          <div className="w-1/2 flex py-4 lg:py-0 items-center justify-center">
            <Image
              src="/images/restaurant-pexels.png"
              width={1500}
              height={10}
              alt={"A table in a fine restaurant with elegant decorations"}
              className="object-cover max-h-40 object-center lg:max-h-128"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row-reverse">
          <div>
            <h1 className="text-xl text-center pt-3">Our Guarantee</h1>
            <div className="px-20 lg:px-60 py-3">
              <div className="h-0.5 bg-text"></div>
            </div>
            <p className="text-center px-5">
              High Risk - High Reward! Our success is depending on your success.
              We believe that the fundamental of a great collaboration is trust.
              In order to inspire your trust, know that we will share each risk
              that you take with you!
            </p>
          </div>
          <div className="w-1/2 flex py-4 lg:py-0 items-center justify-center">
            <Image
              src="/images/bar-pexels.png"
              width={1500}
              height={10}
              alt={"A table in a fine restaurant with elegant decorations"}
              className="object-cover max-h-40 object-center lg:max-h-128"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <div>
            <h1 className="text-xl text-center pt-3">Result - Driven</h1>
            <div className="px-20 lg:px-60 py-3">
              <div className="h-0.5 bg-text"></div>
            </div>
            <p className="text-center px-5">
              Our number one priority is always bringing you results. We always
              put you as a priority and your business. We care about your
              results and we want to help you to achieve them.
            </p>
          </div>
          <div className="w-1/2 flex py-4 lg:py-0 items-center justify-center">
            <Image
              src="/images/pexels-pixabay.jpg"
              width={1500}
              height={10}
              alt={"A table in a fine restaurant with elegant decorations"}
              className="object-cover max-h-40 object-center lg:max-h-128"
            />
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
    </>
  );
}
