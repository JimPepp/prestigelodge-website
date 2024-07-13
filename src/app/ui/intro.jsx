"use client";

import { gsap, useGSAP } from "../modules/gsap";
import { Fh2h3 } from "../modules/fonts";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div>
        <video
          autoPlay
          muted
          loop
          width={"100%"}
          height={"100%"}
          className="hidden lg:block object-cover object-center max-h-[30rem]"
        >
          <source src="/video/hotel-view.mp4" type="video/mp4" />
          <source src="/video/hotel-view.webm" type="video/webm" />
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
          className={`${Fh2h3.className} block top-[25%] sm:text-xl lg:text-4xl intro-txt-title overlay-txt text-center w-full lg:w-1/2 px-8 lg:p-0`}
        >
          Increase attention towards your hospitality business
        </h1>
      </div>
    </>
  );
}
