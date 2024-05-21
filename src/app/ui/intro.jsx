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
    var panels = gsap.utils.toArray(".panel");

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

      tl.fromTo(
        panel,
        1,
        { y: 0, rotate: 0, scale: 1, opacity: 1 },
        { y: 0, rotateX: 0, scale: 0.5, opacity: 0.5 },
        0
      ).to(panel, 0.1, { opacity: 0 });
    });
  });

  return (
    <div className="INTRO-DIV">
      <div>
        <video autoPlay muted loop width={"100%"} height={"100%"}>
          <source src="/Man-Swimming-Hotel-Pool.mp4" type="video/mp4" />
          Your browser does not support videos!
        </video>
        <h1 className={`${Fh1.className} intro-txt-title intro-logo`}>Prestige Lodge</h1>
        <h3 className={`${Fh2h3.className} intro-txt-subtitle overlay-txt`}>
          The finest digital presence
        </h3>
      </div>
      <div>
        <section className="panel">
          <video autoPlay muted loop width={"100%"} height={"100%"}>
            <source src="/Sea-View.mp4" type="video/mp4" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>What we do</h3>
          <p className={`${Fparagraph.className} panel-subtitle overlay-txt`}>
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
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>Website Creation</h3>
          <p className={`${Fparagraph.className} panel-subtitle overlay-txt overlay-txt`}>
            We redefine website creation with our unparalleled services. Each
            website we craft is a masterpiece, meticulously tailored exclusively
            for you. Far from being just another ordinary website, we specialize
            in delivering immersive experiences that truly encapsulate the
            essence and individuality of your business. With our dedication to
            precision and creativity, we ensure that your online presence stands
            out from the crowd, leaving a lasting impression on your audience.
          </p>
        </section>
        <section className="panel">
          <video autoPlay muted loop width={"100%"} height={"100%"}>
            <source src="/Sushi.mp4" type="video/mp4" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            Digital marketing strategies
          </h3>
          <p className={`${Fparagraph.className} panel-subtitle overlay-txt`}>
            We understand the importance of a robust online presence in today's
            digital landscape. That's why we offer comprehensive digital
            marketing services meticulously tailored for businesses in the
            hospitality and dining industries. From strategic SEO techniques to
            engaging social media campaigns, our goal is to help you attract
            more customers and drive revenue growth. Whether you're a boutique
            hotel, a cozy cafe, or a fine dining restaurant, we'll work closely
            with you to develop customized digital marketing strategies that
            align with your business objectives and resonate with your target
            audience. With our expertise and dedication, we'll elevate your
            online presence and set you apart from the competition.
          </p>
        </section>
        <section className="panel">
          <video autoPlay muted loop width={"100%"} height={"100%"}>
            <source src="/Watch.mp4" type="video/mp4" />
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            Immersive Branding Experiences
          </h3>
          <p className={`${Fparagraph.className} panel-subtitle overlay-txt`}>
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
            Your browser does not support videos!
          </video>
          <h3 className={`${Fh2h3.className} panel-title overlay-txt`}>
            Business Consulting
          </h3>
          <p className={`${Fparagraph.className} panel-subtitle overlay-txt`}>
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
