"use client";

import { gsap, useGSAP } from "../modules/gsap";
import { Fh2h3 } from "../modules/fonts";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <video
          autoPlay
          muted
          loop
          width={"100%"}
          height={"100%"}
          className="hidden lg:block object-cover object-center h-screen opacity-80"
        >
          <source src="/video/hotel-view.mp4" type="video/mp4" />
          <source src="/video/hotel-view.webm" type="video/webm" />
          Your browser does not support videos!
        </video>
        <div className="block lg:hidden">
          <Image
            src="/images/pexels-pixabay.jpg"
            width={1500}
            height={300}
            alt="A woman relaxing in a luxurious hotel pool in the jungle."
            priority={true}
            className="object-cover object-top h-screen opacity-50"
          />
        </div>
        <div className="absolute mt-10 top-[35%] text-2xl sm:text-3xl lg:text-4xl text-center w-full lg:w-1/2 px-8 lg:p-0">
          <h1 className={`${Fh2h3.className} `}>
            Maximize customer visits to your hospitality business
          </h1>{" "}
          <div className="mt-4 md:mt-8">
            <p className={`text-base lg:text-xl`}>
              <a
                href="/contactus"
                className="mt-8 inline-block text-xl rounded border border-current px-8 py-3 font-medium text-text transition hover:scale-110 bg-amber-200 hover:shadow-xl focus:outline-none focus:ring active:text-amber-200"
              >
                I'm Interested!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
