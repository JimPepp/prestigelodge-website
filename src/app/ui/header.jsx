"use client";

import { Fh1, Fh2h3, Fh6 } from "@/app/modules/fonts";
import {
  gsap,
  useGSAP,
  ScrollTrigger,
  TextPlugin,
  Flip,
} from "../modules/gsap";
import { useRef } from "react";
import Image from "next/image";
import $ from "jquery";

var menuIsOpen = false;

export default function Header() {
  const main = useRef();

  useGSAP(() => {
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
      delay: 1,
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

    function recenterLogo() {
      // get the logo container
      const logo = document.querySelector(".logo");
      // get the state of the logo
      const state = Flip.getState(".logo");
      // toggle the content justification of the logo
      logo.classList.toggle("recenter");
    }

    let logoAnim = gsap.timeline({ repeat: 0, paused: true });
    logoAnim.to(".logo", {
      opacity: 0,
      duration: 0.15,
      ease: "sine",
    });
    logoAnim.to(".logo", {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: "expo.inOut",
      onStart: recenterLogo,
    });

    document.querySelector("#burgerIcon").onclick = () => {
      // boolean to identify the state of the menu
      menuIsOpen = !menuIsOpen;

      if (menuIsOpen) {
        // Set animation to frame 0 and play
        logoAnim.play();
        logoAnim.seek(0);
        headerBorder.play();
        headerMenuText.play();
        headerTrigger.disable();
        burgerToX[0].play();
        burgerToX[1].play();
        burgerToX[2].play();
        menuContainer.play();
      } else {
        // Set animation to frame 0 and play
        logoAnim.play();
        logoAnim.seek(0);
        headerBorder.reverse();
        headerMenuText.reverse();
        headerTrigger.enable();
        burgerToX[0].reverse();
        burgerToX[1].reverse();
        burgerToX[2].reverse();
        menuContainer.reverse();
      }
    };
  });

  return (
    <>
      <header className="main-tool-bar z-40">
        <div className="w-full flex flex-row-reverse items-center pl-24 pr-24 flex-nowrap m-0 p-0 border-2 header">
          <div className="w-full flex logo">
            <h1 className={`${Fh1.className}`}>Prestige Lodge</h1>
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
          <h3
            className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
          >
            Hotels
          </h3>
          <Image
            className="relative z-40"
            src="/hotel-pool-pexels.png"
            // fill = true adjusts the image dimations to the div
            // use along-side with object-fit and object-position for correct aspect ratio!
            // check : golbals.css @ 197
            fill={true}
            alt="Picture of a pool in a hotel, surrounded by a spruce deck. Various trees behind the deck and sea in the far background"
          />
        </div>
      </div>
    </>
  );
}
