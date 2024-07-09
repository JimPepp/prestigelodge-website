"use client";

import { Fh1 } from "../modules/fonts";

export default function Footer() {
  return (
    <div id="FOOTER DIV">
      <div className="flex flex-row py-0 justify-center items-center">
        <div className=" w-2/12 h-0.5 bg-text"></div>
        <h1
          className={`${Fh1.className} text-2xl md:text-3xl lg:text-4xl px-4 md:px-6 lg:px-10 text-center`}
        >
          Prestige Lodge
        </h1>
        <div className=" w-2/12 h-0.5 bg-text"></div>
      </div>
      <div className="flex flex-row justify-center">
        <h3
          className={`${Fh1.className} text-lg md:text-xl lg:text-2xl text-secondary text-center`}
        >
          Elevating Hospitality and Dining
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
          <a href="https://www.prestigelodgedigital.com/">
            www.prestigelodgedigital.com
          </a>
        </p>
        <p>Piraeus, Attica - Greece</p>
        <p>Madrid City, Madrid - Spain</p>
      </div>
      <div className="flex flex-col items-center py-5">
        <p className=" text-secondary">SITEMAP</p>
        <div className=" w-2/12 h-0.5 bg-text"></div>
        <div className="flex flex-col items-center py-5"></div>
        <div className=" flex flex-col items-center text-base">
          <a className="nav-item" href="/">
            Home
          </a>
          <a className="nav-item" href="/aboutus">
            About us
          </a>
          <a className="nav-item" href="/services">
            Services
          </a>
          <a className="nav-item" href="/contactus">
            Contact us
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center text-center py-5">
        <p>© 2024 Prestige Lodge. All rights reserved.</p>
      </div>
    </div>
  );
}
