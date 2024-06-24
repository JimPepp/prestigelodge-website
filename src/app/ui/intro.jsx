"use client";

import {
  gsap,
  useGSAP,
  ScrollTrigger,
  TextPlugin,
  Flip,
} from "../modules/gsap";
import { Fh1, Fh2h3, Fh6, Fparagraph } from "../modules/fonts";
import Image from "next/image";
import { Info } from "./uiComponents";
import { Panel } from "./uiComponents";

export default function Intro() {
  useGSAP(() => {
    // variables to animate the panel, titles, and paragraphs
    var panels = gsap.utils.toArray(".panel");
    var titles = gsap.utils.toArray(".panel-title");
    var paragraphs = gsap.utils.toArray(".panel-paragraph");

    // Set animation timeline for the panels.
    panels.pop(); // get rid of the last one (don't need it in the loop)
    panels.forEach((panel, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          pinSpacing: false,
          pin: true,
          scrub: true,
          // set the transformOrigin so that it's in the center vertically of the viewport when the element's bottom hits the bottom of the viewport
          onRefresh: () =>
            gsap.set(panel, {
              transformOrigin:
                "center " +
                (panel.offsetHeight - window.innerHeight / 2) +
                "px",
            }),
        },
      });

      // Start normal and on the end of scroll trigger
      // make it bigger and semi-transparent
      tl.fromTo(
        panel,
        {
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
        },
        {
          y: 0,
          rotate: 0,
          scale: 1.5,
          opacity: 0.5,
        }
      ).to(panel, { opacity: 0, duration: 1 });
    });

    // Set the timeline animation for the titles
    titles.pop();
    titles.forEach((title, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top center",
          end: "center center",
        },
      });

      // Set scale to 0, making it invisible and then
      // slowly bring it to it's supposed style.
      tl.fromTo(
        title,
        {
          y: 0,
          rotate: 0,
          scale: 0,
          duration: 1,
        },
        {
          y: 0,
          rotate: 0,
          scale: 1,
        }
      );
    });

    // Timeline animation for the paragraph
    paragraphs.pop();
    paragraphs.forEach((paragraph, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: paragraph,
          start: "top center",
          end: "center center",
        },
      });

      // The paragraph starts completely transparent
      // and as we scroll down it becomes visible
      tl.fromTo(
        paragraph,
        {
          y: 0,
          rotate: 0,
          opacity: 0,
          duration: 1,
        },
        {
          y: 0,
          rotate: 0,
          opacity: 1,
        }
      );
    });

    // Animating the text of the intro subtitle using the scroll trigger
  });

  return (
    <div className="INTRO-DIV">
      <div>
        <video
          autoPlay
          muted
          loop
          width={"100%"}
          height={"100%"}
          className="hidden lg:block object-cover object-bottom max-h-128"
        >
          <source src="/video/Sea-View.mp4" type="video/mp4" />
          <source src="/video/Sea-View.webm" type="video/webm" />
          <source src="/video/Sea-View.ogg" type="video/ogg" />
          Your browser does not support videos!
        </video>
        <div className="block lg:hidden">
          <Image
            src="/images/jungle-pool.jpg"
            width={1500}
            height={300}
            alt="A woman relaxing in a luxurious hotel pool in the jungle."
            priority={true}
            className="object-cover max-h-96"
          />
        </div>
        <h1
          className={`${Fh1.className} hidden lg:block lg:text-logoM intro-txt-title intro-logo `}
        >
          Prestige Lodge
        </h1>
        <h3
          className={`${Fh2h3.className} hidden lg:block lg:text-2xl intro-txt-subtitle overlay-txt top-[40%]`}
        >
          The finest digital presence
        </h3>
        <h1
          className={`${Fh1.className} block lg:hidden text-center intro-txt-title intro-logo-sm text-4xl sm:text-5xl md:text-6xl md:top-[20%]`}
        >
          Prestige Lodge
        </h1>{" "}
        <h3
          className={`${Fh2h3.className} } block lg:hidden text-base text-center md:text-xl intro-txt-subtitle overlay-txt top-[36%] md:top-[25%]`}
        >
          The finest digital presence
        </h3>
      </div>
      <div className="hidden lg:block">
        <section className="panel">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="hidden lg:block h-full"
          >
            <source src="/video/Man-Swimming-Hotel-Pool.mp4" type="video/mp4" />
            <source
              src="/video/Man-Swimming-Hotel-Pool.webm"
              type="video/webm"
            />
            Your browser does not support videos!
          </video>
          <Panel
            title="What we do"
            paragraph="At Prestige Lodge, we specialize in website creation, 
              digital marketing, and business consulting. We work explicitly 
              with hospitality and dining businesses. With hands-on experience 
              in the field, our solutions are tailored exactly to your needs, 
              with your profitability and online presence as our sole priority. By 
              partnering with us, you can access a network of professionals 
              dedicated to your success in the competitive online landscape."
          />
        </section>
        <section className="panel">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="hidden lg:block h-full"
          >
            <source src="/video/Restaurant-Walk.mp4" type="video/mp4" />
            <source src="/video/Restaurant-Walk.webm" type="video/webm" />
            <source src="/video/Restaurant-Walk.ogg" type="video/ogg" />
            Your browser does not support videos!
          </video>
          <Panel
            title="Website development"
            paragraph="When creating a website, we are always determined to 
              display the quality and efficiency of the services that your business 
              provides. Moreover, rather than creating an ordinary website, we 
              specialize in creating immersive experiences that summarize the essence 
              and individuality of your business.We are dedicated to ensure that your 
              business stands out from your competition, while leaving a lasting 
              impression on your target audience."
          />
        </section>
        <section className="panel">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="hidden lg:block h-full"
          >
            <source src="/video/Consultation.mp4" type="video/mp4" />
            <source src="/video/Consultation.webm" type="video/webm" />
            Your browser does not support videos!
          </video>
          <Panel
            title="Business Consulting"
            paragraph="At Prestige Lodge, our Business Consulting services are designed to
              elevate your hospitality enterprise by connecting you with certified
              professionals who have years of hands-on experience in the industry.
              Our consultants provide tailored advice and strategic insights to
              optimize your operations, enhance customer experiences, and drive
              growth. Whether you're looking to improve efficiency, boost your
              online presence, or refine your brand, our experts are here to guide
              you every step of the way, ensuring your business achieves its full
              potential."
          />
        </section>
        <section className="panel">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="hidden lg:block h-full"
          >
            <source src="/video/Watch.mp4" type="video/mp4" />
            <source src="/video/Watch.webm" type="video/webm" />
            <source src="/video/Watch.ogg" type="video/ogg" />
            Your browser does not support videos!
          </video>
          <Panel
            title="What makes us different"
            paragraph="Choose Prestige Lodge because we are dedicated to 
            empowering hospitality and dining businesses with our top-tier 
            consultants and our exceptional digital solutions. We always ensure 
            that your business establishment benefits from our services, and 
            that it thrives against your competition. As a local company, 
            we pride ourselves on being directly approachable and deeply 
            invested in your success, with support from professionals who 
            understand the industry's unique challenges and opportunities."
          />
        </section>
      </div>
      <div>
        <Info
          title={"What we do"}
          paragraph="At Prestige Lodge, we specialize in website creation, 
            digital marketing, and business consulting. We work explicitly 
            with hospitality and dining businesses. With hands-on experience 
            in the field, our solutions are tailored exactly to your needs, 
            with your profitability and online presence as our sole priority. By 
            partnering with us, you can access a network of professionals 
            dedicated to your success in the competitive online landscape."
          img="/images/restaurant-pexels.png"
          alt="An elegant restaurant whith wooden furniture next to a yacht marina in the afternoon."
          width={1500}
          height={300}
          reverse={true}
        />
        <Info
          title={"Website development"}
          paragraph="When creating a website, we are always determined to 
            display the quality and efficiency of the services that your business 
            provides. Moreover, rather than creating an ordinary website, we 
            specialize in creating immersive experiences that summarize the essence 
            and individuality of your business.We are dedicated to ensure that your 
            business stands out from your competition, while leaving a lasting 
            impression on your target audience."
          img="/images/bar-pexels.png"
          alt="An elegant bar whith wooden furniture, fabric stools and velvet chairs."
          width={1500}
          height={300}
          reverse={false}
        />
        <Info
          title={"Business Consulting"}
          paragraph="At Prestige Lodge, our Business Consulting services are designed to
            elevate your hospitality enterprise by connecting you with certified
            professionals who have years of hands-on experience in the industry.
            Our consultants provide tailored advice and strategic insights to
            optimize your operations, enhance customer experiences, and drive
            growth. Whether you're looking to improve efficiency, boost your
            online presence, or refine your brand, our experts are here to guide
            you every step of the way, ensuring your business achieves its full
            potential."
          img="/images/coffee-shop-pexels.png"
          alt="An elegant bar whith wooden furniture, fabric stools and velvet chairs."
          width={1500}
          height={300}
          reverse={true}
        />
        <div className="flex lg:hidden items-center text-center flex-col p-8">
          <h5 className="px-8 text-xl">What makes us different</h5>
          <p className="px-8 text-base">
            Choose Prestige Lodge because we are dedicated to empowering
            hospitality and dining businesses with our top-tier consultants and
            our exceptional digital solutions. We always ensure that your
            business establishment benefits from our services, and that it
            thrives against your competition. As a local company, we pride
            ourselves on being directly approachable and deeply invested in your
            success, with support from professionals who understand the
            industry's unique challenges and opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
