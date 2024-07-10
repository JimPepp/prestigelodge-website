"use client";

import { gsap, useGSAP } from "../modules/gsap";
import { Fh1, Fh2h3 } from "../modules/fonts";
import Image from "next/image";
import { Info } from "./uiComponents";
import { Panel } from "./uiComponents";
import { Fh4h5 } from "../styles/fonts";

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
          className="hidden lg:block object-cover object-bottom max-h-128 hover:max-h-128"
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
          className={`${Fh2h3.className} block top-[25%] lg:top-[30%] sm:text-xl lg:text-4xl intro-txt-title overlay-txt text-center w-full lg:w-1/2 px-8 lg:p-0 3xl:top-[25%]`}
        >
          Increase attention towards your business. Learn more below!
        </h1>
      </div>
    </div>
  );
}
