"use client";

import { Fh2h3 } from "../styles/fonts";

export default function CTA() {
  return (
    <>
      <div className="flex flex-col py-10 justify-center items-center">
        <h1 className={`${Fh2h3.className} text-center lg:text-xl`}>
          Contact us for a free marketing consultation!
        </h1>
        <p className={`${Fh2h3.className} nav-item py-3 lg:text-2xl`}>
          <u>
            <a href="/contactus">Contact us now!</a>
          </u>
        </p>
      </div>
    </>
  );
}
