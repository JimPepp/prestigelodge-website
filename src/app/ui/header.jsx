"use client";

import { Fh1, Fh2h3 } from "@/app/modules/fonts";
import { gsap, useGSAP, ScrollTrigger, TextPlugin } from "../modules/gsap";
import { useRef } from "react";
import $ from "jquery";

var menuIsOpen = false;
var firstLoad = true;

export default function Header() {
  const main = useRef();

  useGSAP(() => {
    let logoAnimation = gsap.to(".logo", {
      duration: 1.7,  // the whole menu must slide in from the left with the same duration
      xPercent: -250, // Use the flip plugin 
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
      ease: "rough",
      delay: 0.5,
    });

    const showAnim = gsap
      .from(".main-tool-bar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    document.querySelector("#burgerIcon").onclick = () => {
      console.log("I clicked the burger mr Belcher!");
      menuIsOpen = !menuIsOpen;
      console.log("Menu is open : " + menuIsOpen.valueOf());

      if (menuIsOpen) {
        logoAnimation.play();
        headerBorder.play();
        headerMenuText.play();
      } else {
        logoAnimation.reverse();
        headerBorder.reverse();
        headerMenuText.reverse();
      }
    };
  });

  return (
    <>
      <header className="main-tool-bar">
        <div className="w-full flex flex-row-reverse items-center pl-24 pr-24 flex-nowrap justify-between m-0 p-0 border-2 header">
          <h1 className={`${Fh1.className} logo`}>Prestige Lodge</h1>
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
      <div className="w-full">
        <div>
          <h1>TEAGA</h1>
        </div>
      </div>
    </>
  );
}
