"use client";

import { Fh1, Fh2h3, Fh6, Fparagraph } from "../modules/fonts";
import {
  gsap,
  useGSAP,
  ScrollTrigger,
  TextPlugin,
  Flip,
} from "../modules/gsap";

export default function Footer() {
  return (
    <div id="FOOTER DIV">
      <div className="flex flex-row py-0 justify-center items-center">
        <div className=" w-2/12 h-0.5 bg-text"></div>
        <h1 className={`${Fh1.className} pl-10 pr-10`}>Prestige Lodge</h1>
        <div className=" w-2/12 h-0.5 bg-text"></div>
      </div>
      <div className="flex flex-row justify-center">
        <h3 className={`${Fh1.className} text-secondary`}>
          Where Digital Sophistication Meets Hospitality Excellence
        </h3>
      </div>
      <div className="flex flex-row justify-center py-5">
        <p className="px-5 nav-item">Facebook</p>
        <p className="px-8 nav-item">X</p>
        <p className="px-5 nav-item">Instagram</p>
      </div>
      <div className="flex flex-col items-center py-5">
        <p className="nav-item">
          <a href="#.#">www.prestigelodgedigital.com</a>
        </p>
        <p>Piraeus, Attica - Greece</p>
      </div>
      {/* <div className="flex flex-col items-center py-5">
        <p className=" text-secondary">SITEMAP</p>
        <div className=" w-2/12 h-0.5 bg-text"></div>
        <div className="flex flex-col items-center py-5">
          <p className="nav-item py-3">
            <a href="#.#">Home</a>
          </p>
          <p className="nav-item py-3">
            <a href="#.#">About us</a>
          </p>
          <p className="nav-item py-3">
            <a href="#.#">Services</a>
          </p>
          <p className="nav-item py-3">
            <a href="#.#">Portfolio</a>
          </p>
          <p className="nav-item py-3">
            <a href="#.#">Testimonials</a>
          </p>
          <p className="nav-item py-3">
            <a href="#.#">Contact us</a>
          </p>
        </div>
      </div> */}
      <div className="flex flex-col items-center py-5">
        <p>© 2024 Prestige Lodge. All rights reserved.</p>
      </div>
    </div>
  );
}
