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
        <video autoPlay muted loop width={"100%"} height={"100%"}>
          <source src="/Man-Swimming-Hotel-Pool.mp4" type="video/mp4" />
          <source src="/Man-Swimming-Hotel-Pool.webm" type="video/webm" />
          Your browser does not support videos!
        </video>
        <h1 className={`${Fh1.className} intro-txt-title intro-logo`}>
          Prestige Lodge
        </h1>
        <h3 className={`${Fh2h3.className} intro-txt-subtitle overlay-txt`}>
          The finest digital presence
        </h3>
      </div>
      <div>
        <section className="panel">
          <video autoPlay muted loop width={"100%"} height={"100%"}>
          <source src="/Sea-View.mp4" type="video/mp4" />
          <source src="/Sea-View.webm" type="video/webm" />
            <source src="/Sea-View.ogg" type="video/ogg" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            What we do
          </h3>
          <p className={`${Fparagraph.className} panel-paragraph overlay-txt`}>
            At Prestige Lodge, we specialize in providing bespoke digital
            solutions designed to elevate the online presence of businesses in
            the hospitality and dining industries. Our services include
            cutting-edge website creation, innovative digital marketing
            strategies, and comprehensive branding solutions. With a deep
            understanding of the unique challenges and opportunities in these
            sectors, we craft tailored strategies that drive engagement,
            increase bookings, and boost revenue. Our commitment to excellence,
            creativity, and customer satisfaction ensures that your digital
            presence is not only visually stunning but also highly effective in
            achieving your business goals.
          </p>
        </section>
        <section className="panel">
          <video autoPlay muted loop width={"100%"} height={"100%"}>
            <source src="/Restaurant-Walk.mp4" type="video/mp4" />
            <source src="/Restaurant-Walk.webm" type="video/webm" />
            <source src="/Restaurant-Walk.ogg" type="video/ogg" />
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
          <video autoPlay muted loop width={"100%"} height={"100%"}>
            <source src="/Sushi.mp4" type="video/mp4" />
            <source src="/Sushi.webm" type="video/webm" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            Digital marketing services
          </h3>
          <p className={`${Fparagraph.className} panel-paragraph overlay-txt`}>
            We understand the importance of a robust online presence in today's
            digital marketplace. That's why we offer comprehensive digital
            marketing services tailored for businesses in the hospitality and
            dining industries. From strategic SEO techniques to engaging social
            media campaigns, our goal is to help you attract more customers and
            drive revenue growth. We'll work closely with you to develop
            customized digital marketing strategies that align with your
            business objectives.
          </p>
        </section>
        <section className="panel">
          <video autoPlay muted loop width={"100%"} height={"100%"}>
            <source src="/Watch.mp4" type="video/mp4" />
            <source src="/Watch.webm" type="video/webm" />
            <source src="/Watch.ogg" type="video/ogg" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            Branding Services
          </h3>
          <p className={`${Fparagraph.className} panel-paragraph overlay-txt`}>
            At Prestige Lodge, we specialize in creating cohesive and memorable
            brand identities that resonate deeply with your target audience. Our
            branding services capture the essence of your business, setting you
            apart from the competition with distinctive and compelling visuals.
            From logo design to crafting powerful brand messaging, we ensure
            that every element of your brand reflects your core values and
            vision. The result is a unified and impactful brand identity that
            leaves a lasting impression on your customers, driving loyalty and
            engagement.
          </p>
        </section>
        <section className="panel">
          <video autoPlay muted loop width={"100%"} height={"100%"}>
            <source src="/Consultation.mp4" type="video/mp4" />
            <source src="/Consultation.webm" type="video/webm" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            Business Consulting
          </h3>
          <p className={`${Fparagraph.className} panel-paragraph overlay-txt`}>
            We offer comprehensive business consulting services specifically
            designed for cafeterias, bars, and restaurants. Our team of
            experienced consultants brings a wealth of industry knowledge and
            expertise to help you navigate the complexities of the hospitality
            sector. Whether you're looking to optimize operations, enhance
            customer experience, or boost profitability, we provide tailored
            strategies that address your unique challenges and goals. From
            streamlining processes and improving inventory management to
            developing effective marketing campaigns and refining your brand
            identity, our consulting services are aimed at driving your business
            towards sustained success and growth.
          </p>
        </section>
      </div>
    </div>
  );
}
