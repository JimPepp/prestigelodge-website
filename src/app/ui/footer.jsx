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
        <h1 className={`${Fh1.className} text-2xl md:text-3xl lg:text-4xl px-4 md:px-6 lg:px-10`}>Prestige Lodge</h1>
        <div className=" w-2/12 h-0.5 bg-text"></div>
      </div>
      <div className="flex flex-row justify-center">
        <h3 className={`${Fh1.className} text-lg md:text-xl lg:text-2xl text-secondary`}>
          Where Digital Sophistication Meets Hospitality Excellence
        </h3>
      </div>
      <div className="flex justify-center pt-5 pb-2">
        <p>Follow us</p>
      </div>
      <div className="flex flex-row justify-center">
        {/* <p className="px-5 nav-item">Facebook</p> */}
        <p className="px-8 nav-item">
          <a href="https://x.com/prestigelodge">X</a>
        </p>
        {/* <p className="px-5 nav-item">Instagram</p> */}
      </div>
      <div className="flex flex-col items-center py-5">
        <p className="nav-item">
          <a href="https://www.prestigelodgedigital.com/">www.prestigelodgedigital.com</a>
        </p>
        <p>Piraeus, Attica - Greece</p>
      </div>
      <div className="flex flex-col items-center py-5">
        <p>© 2024 Prestige Lodge. All rights reserved.</p>
      </div>
    </div>
  );
}
