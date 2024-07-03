"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Header, Footer } from "../ui/uiComponents";

export default function Services() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });

  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".h-panel");
  var elementWidth = 0;

  useRef(() => {  
    elementWidth = document.querySelector(".hcontainer").offsetWidth;
  });

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".hcontainer",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + elementWidth,
    },
  });

  return (
    <>
      <Header />
      <div className="hcontainer">
        <div className="descrption w-full bg-slate-300">Description</div>
        <section className="h-panel w-full bg-red-300">First</section>
        <section className="h-panel w-full bg-green-500">Second</section>
        <section className="h-panel w-full bg-blue-600">Third</section>
      </div>
      <Footer />
    </>
  );
}
