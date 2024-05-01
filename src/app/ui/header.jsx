"use client";

import { Fh1, Fh2h3 } from "@/app/modules/fonts";
import { gsap, useGSAP, ScrollTrigger, TextPlugin } from "../modules/gsap";
import { useRef } from "react";
import Image from "next/image";
import $ from "jquery";

var menuIsOpen = false;

export default function Header() {
  const main = useRef();
  var currentLayout = "justify-end";
  var logoFlexbox = $("#logoContainer");

  useGSAP(() => {
    let logoAnimation = gsap.to(".logo", {
      duration: 1.7, // the whole menu must slide in from the left with the same duration
      xPercent: -360, // Use the flip plugin
      ease: "power1.in(1.7)",
      paused: true,
    });

    let headerBorder = gsap.to(".header", {
      css: {
        borderColor: "#f5f5f0",
      },
      duration: 1.7,
      ease: "ease",
      paused: true,
    });

    let headerMenuText = gsap.to("#menuText", {
      duration: 0.7,
      paused: true,
      text: "close",
      ease: "none",
      delay: 0.5,
    });

    let burgerToX = [
      gsap.to(".line1", {
        // line 1 rotates 45
        rotateZ: 45,
        translateY: 12,
        duration: 0.5,
        ease: "none",
        paused: true,
      }),
      gsap.to(".line2", {
        // line 2 opacity 0
        opacity: 0,
        duration: 0.2,
        ease: "none",
        paused: true,
      }),
      gsap.to(".line3", {
        // line 3 rotates -45
        rotateZ: -45,
        translateY: -12,
        duration: 0.5,
        ease: "none",
        paused: true,
      }),
    ];

    const menuContainer = gsap.to(".menu", {
      left: 0,
      paused: true,
      duration: 1.7,
      ease: "sine",
      // start: "top top",
      // end: "max",
    });

    const showAnim = gsap
      .from(".main-tool-bar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    const headerTrigger = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    document.querySelector("#burgerIcon").onclick = () => {
      menuIsOpen = !menuIsOpen;

      // Remove the 
      logoFlexbox.removeClass(currentLayout);
      console.log("removed class" + currentLayout);

      if (menuIsOpen) {
        currentLayout = "justify-center"
        // logoAnimation.play();
        headerBorder.play();
        headerMenuText.play();
        headerTrigger.disable();
        burgerToX[0].play();
        burgerToX[1].play();
        burgerToX[2].play();
        menuContainer.play();
      } else {
        currentLayout = "justify-end";
        // logoAnimation.reverse();
        headerBorder.reverse();
        headerMenuText.reverse();
        headerTrigger.enable();
        burgerToX[0].reverse();
        burgerToX[1].reverse();
        burgerToX[2].reverse();
        menuContainer.reverse();
      }

      logoFlexbox.addClass(currentLayout);
      console.log("added class" + currentLayout);


    };
  });

  return (
    <>
      <header className="main-tool-bar z-40">
        <div className="w-full flex flex-row-reverse items-center pl-24 pr-24 flex-nowrap m-0 p-0 border-2 header">
          <div className="w-full flex justify-end" id="logoContainer">
            <h1 className={`${Fh1.className} logo`}>Prestige Lodge</h1>
          </div>
          <div className="flex flex-row items-center justify-center">
            <button className="cursor-pointer pr-4" id="burgerIcon">
              <div className=" w-8 my-2 border-2 rounded line line1"></div>
              <div className=" w-8 my-2 border-2 rounded line line2"></div>
              <div className=" w-8 my-2 border-2 rounded line line3"></div>
            </button>
            <h4 className={Fh2h3.className} id="menuText">
              menu
            </h4>
          </div>
        </div>
      </header>
      <div className="menu">
        <div className="flex justify-center text-center items-baseline flex-col pl-24">
          <h6 className={`${Fh2h3.className} nav-item mb-14`}>Home</h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14`}>About us</h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14`}>Services</h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14`}>Portfolio</h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14`}>Testimonials</h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14`}>Contact us</h6>
        </div>
        <div className="menu-image">
          <Image
            src="/hotel-pool-pexels.png"
            fill={true}
            alt="Picture of a pool in a hotel, surrounded by a spruce deck. Various trees behind the deck and sea in the far background"
          />
        </div>
      </div>
    </>
  );
}
