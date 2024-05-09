"use client";

import { Fh1, Fh2h3, Fh6, Fparagraph } from "@/app/modules/fonts";
import {
  gsap,
  useGSAP,
  ScrollTrigger,
  TextPlugin,
  Flip,
} from "../modules/gsap";
import Image from "next/image";
import { useRef } from "react";
import $ from "jquery";

var menuIsOpen = false;

function recenterLogo() {
  // get the logo container
  const logo = document.querySelector(".logo");
  // get the state of the logo
  // const state = Flip.getState(".logo");
  // toggle the content justification of the logo
  logo.classList.toggle("recenter");
}

export default function Header() {
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
      duration: 0.3,
      paused: true,
      text: "close",
      ease: "none",
      delay: 1,
      reversed: true,
    });

    let burgerToX = [
      gsap.to(".line1", {
        // line 1 rotates 45
        rotateZ: 45,
        translateY: 10,
        duration: 0.1,
        ease: "none",
        paused: true,
      }),
      gsap.to(".line2", {
        // line 2 opacity 0
        opacity: 0,
        duration: 0.1,
        ease: "none",
        paused: true,
      }),
      gsap.to(".line3", {
        // line 3 rotates -45
        rotateZ: -45,
        translateY: -10,
        duration: 0.1,
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

    let logoAnim = gsap.timeline({ repeat: 0, paused: true });
    logoAnim.to(".logo", {
      opacity: 0,
      duration: 0.3,
      ease: "sine",
    });
    logoAnim.to(".logo", {
      opacity: 1,
      delay: 1,
      duration: 0.3,
      ease: "expo.inOut",
      onStart: recenterLogo,
      onReverseComplete: recenterLogo,
    });

    const arrowAnim = gsap.to("#scrollArrows", {
      duration: 0.5,
      ease: "elastic.inOut(0.3)",
      y: -10,
      repeat: -1,
      yoyo: true,
    });
    arrowAnim.play();

    let currentIndex = -1,
      sections = document.querySelectorAll("section"),
      images = document.querySelectorAll("#menuImage"),
      headings = gsap.utils.toArray(".menu-image-txt"),
      wrap = gsap.utils.wrap(0, sections.length),
      animating = false;

    function scrolled(index, direction) {
      animating = true;
      index = wrap(index);

      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      // If we scrolled
      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: 100 * direction }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      console.log(index + " : is the value of index");
      currentIndex = index;
      console.log(currentIndex + " : is the value of currentIndex");
    }

    ScrollTrigger.observe({
      target: ".menu-image",
      type: "wheel, scroll",
      onUp: () => scrolled(currentIndex - 1, -1),
      onDown: () => scrolled(currentIndex + 1, 1),
    });

    document.querySelector("#burgerIcon").onclick = () => {
      // boolean to identify the state of the menu
      menuIsOpen = !menuIsOpen;

      if (menuIsOpen && !logoAnim.isActive()) {
        // Set animation to frame 0 and play
        logoAnim.seek(0);
        logoAnim.play();
        headerBorder.play();
        headerMenuText.play();
        headerTrigger.disable();
        burgerToX[0].play();
        burgerToX[1].play();
        burgerToX[2].play();
        menuContainer.play();
      } else {
        logoAnim.reverse();
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
        <div className="w-full flex flex-row-reverse items-center sm:pl-24 sm:pr-24 pl-8 pr-8 flex-nowrap m-0 p-0 border-2 header">
          <div className="w-full flex logo">
            <h1 className={`${Fh1.className} text-5xl sm:text-6xl`}>
              Prestige Lodge
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center">
            <button className="cursor-pointer pr-4" id="burgerIcon">
              <div className=" w-8 my-2 rounded line line1"></div>
              <div className=" w-8 my-2 rounded line line2"></div>
              <div className=" w-8 my-2 rounded line line3"></div>
            </button>
            <h4
              className={`${Fh2h3.className} hidden lg:flex text-2xl md:text-4xl`}
              id="menuText"
            >
              menu
            </h4>
          </div>
        </div>
      </header>
      <div className="menu items-center justify-center lg:justify-between">
        <div className="flex justify-center text-center items-center lg:items-baseline flex-col pl-24 pr-24">
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4`}>
            Home
          </h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4`}>
            About us
          </h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4`}>
            Services
          </h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4`}>
            Portfolio
          </h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4`}>
            Testimonials
          </h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4`}>
            Contact us
          </h6>
        </div>
        <div className="menu-image hidden lg:flex self-center lg:self-auto">
          <section className="first">
            <div
              className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
            >
              <h3>Hotels</h3>
            </div>
            <Image
              className="relative"
              id="menuImage"
              src="/hotel-pool-pexels.png"
              // fill = true adjusts the image dimations to the div
              // use along-side with object-fit and object-position for correct aspect ratio!
              // check : golbals.css @ .menu-image>img
              fill={true}
              alt="Picture of a pool in a hotel, surrounded by a spruce deck. Various trees behind the deck and sea in the far background"
            />
          </section>
          <section className="second">
            <div
              className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
            >
              <h3>Restaurants</h3>
            </div>
            <Image
              className="relative"
              id="menuImage"
              src="/restaurant-pexels.png"
              // fill = true adjusts the image dimations to the div
              // use along-side with object-fit and object-position for correct aspect ratio!
              // check : golbals.css @ .menu-image>img
              fill={true}
              alt="Picture of a nice restaurant next to a marina. Yachts on the background. The restaurant has wooden chairs with blue cloth on the cushions, and wooden tables with light blue decorations."
            />
          </section>
          {/* <section className="third">
            <h3
              className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
            >
              Coffee Shops
            </h3>
            <Image
              className="relative z-40"
              id="menuImage"
              src="/coffee-shop-pexels.png"
              // fill = true adjusts the image dimations to the div
              // use along-side with object-fit and object-position for correct aspect ratio!
              // check : golbals.css @ .menu-image>img
              fill={true}
              alt="Picture of a coffee shop, with white marble on top of the bar. A display of various ingredients to makek beverages. Gold decorations on a white wall."
            />
          </section>
          <section className="fourth">
            <h3
              className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
            >
              Bars And Nightclubs
            </h3>
            <Image
              className="relative z-40"
              id="menuImage"
              src="/bar-pexels.png"
              // fill = true adjusts the image dimations to the div
              // use along-side with object-fit and object-position for correct aspect ratio!
              // check : golbals.css @ .menu-image>img
              fill={true}
              alt="Picture of a bar, surrounded by stools. Coasy atmosphere and a display of bottles with various alcoholic drinks."
            />
          </section> */}
          <div className="flex justify-center w-full flex-col self-end">
            <p
              className={`${Fparagraph.className} menu-image-txt flex relative justify-center z-50`}
            >
              Scroll Down Here!
            </p>
            <p
              className={`${Fparagraph.className} menu-image-txt flex relative justify-center z-50 `}
              id="scrollArrows"
            >
              ⇣⇣⇣
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
