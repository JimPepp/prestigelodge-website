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
          className="hidden lg:block"
        >
          <source src="/video/Man-Swimming-Hotel-Pool.mp4" type="video/mp4" />
          <source src="/video/Man-Swimming-Hotel-Pool.webm" type="video/webm" />
          Your browser does not support videos!
        </video>{" "}
        <div className="block lg:hidden">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="object-cover"
          >
            <source src="/video/ElephantPool.mp4" type="video/mp4" />
            <source src="/video/ElephantPool.mp4.webm" type="video/webm" />
            Your browser does not support videos!
          </video>
        </div>
        <h1
          className={`${Fh1.className} absolute top-1/4 left-1/3 text-xl lg:text-logoXL intro-txt-title intro-logo `}
        >
          Prestige Lodge
        </h1>
        <h3 className={`${Fh2h3.className} intro-txt-subtitle overlay-txt`}>
          The finest digital presence
        </h3>
      </div>
      <div>
        <section className="panel">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="hidden lg:block"
          >
            <source src="/video/Sea-View.mp4" type="video/mp4" />
            <source src="/video/Sea-View.webm" type="video/webm" />
            <source src="/video/Sea-View.ogg" type="video/ogg" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            What we do
          </h3>
          <p className={`${Fparagraph.className} panel-paragraph overlay-txt`}>
            At Prestige Lodge, we specialize in connecting hospitality
            businesses with top-tier service providers to enhance their digital
            presence and operational efficiency. Our tailored solutions bridge
            the gap between hotels, restaurants, and other hospitality entities
            with experts in website creation, digital marketing, and branding.
            By partnering with us, hospitality businesses can access a network
            of professionals dedicated to driving their success in the
            competitive online landscape.
          </p>
        </section>
        <section className="panel">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="hidden lg:block"
          >
            <source src="/video/Restaurant-Walk.mp4" type="video/mp4" />
            <source src="/video/Restaurant-Walk.webm" type="video/webm" />
            <source src="/video/Restaurant-Walk.ogg" type="video/ogg" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            Website development
          </h3>
          <p
            className={`${Fparagraph.className} panel-paragraph overlay-txt overlay-txt`}
          >
            We redefine website development with our innovative approach. Each
            website we create is meticulously tailored exclusively for you. Far
            from being just another ordinary website, we specialize in
            delivering immersive experiences that truly encapsulate the essence
            and individuality of your business. With our dedication to precision
            and creativity, we ensure that your online presence stands out from
            the crowd, leaving a lasting impression on your audience.
          </p>
        </section>
        <section className="panel">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="hidden lg:block"
          >
            <source src="/video/Consultation.mp4" type="video/mp4" />
            <source src="/video/Consultation.webm" type="video/webm" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            Business Consulting
          </h3>
          <p className={`${Fparagraph.className} panel-paragraph overlay-txt`}>
            At Prestige Lodge, our Business Consulting services are designed to
            elevate your hospitality enterprise by connecting you with certified
            professionals who have years of hands-on experience in the industry.
            Our consultants provide tailored advice and strategic insights to
            optimize your operations, enhance customer experiences, and drive
            growth. Whether you're looking to improve efficiency, boost your
            online presence, or refine your brand, our experts are here to guide
            you every step of the way, ensuring your business achieves its full
            potential.
          </p>
        </section>
        <section className="panel">
          <video
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
            className="hidden lg:block"
          >
            <source src="/video/Watch.mp4" type="video/mp4" />
            <source src="/video/Watch.webm" type="video/webm" />
            <source src="/video/Watch.ogg" type="video/ogg" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            What makes us different!
          </h3>
          <p className={`${Fparagraph.className} panel-paragraph overlay-txt`}>
            Choose Prestige Lodge because we are dedicated to empowering
            hospitality businesses by connecting them with top-tier service
            providers for exceptional digital solutions. Our unique approach
            ensures that your establishment benefits from tailored website
            creation, digital marketing, and branding expertise. As a local
            company, we pride ourselves on being directly approachable and
            deeply invested in the success of our community. With Prestige
            Lodge, you'll receive personalized, hands-on support from
            professionals who understand your industry's unique challenges and
            opportunities, ensuring your business thrives in the competitive
            online landscape.
          </p>
        </section>
      </div>
    </div>
  );
}
