"use client";

import { Fh1, Fh2h3, Fh6, Fparagraph } from "../modules/fonts";
import { Fh4h5 } from "../styles/fonts";

export default function Contact() {
  return (
    <div className="py-12">
      <div className={`${Fh1.className} text-6xl flex justify-center`}>
        Contact Us
      </div>
      <div className={`${Fh2h3.className} text-4xl flex justify-center`}>
        we would love to hear from you
      </div>
      <div className="flex flex-row py-4 px-12">
        <div className="flex flex-col w-full items-center">
          <p className={`${Fh4h5.className} text-3xl`}>Send us an email</p>
          <form className="flex flex-col py-4">
            <label for="fname" className=" text-text">
              Full Name :
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Full Name"
            />
            <label for="fmail" className=" text-text">
              Email :
            </label>
            <input type="email" id="fmail" name="fmail" placeholder="Email" />
            <label for="ftel" className=" text-text">
              Contact Number :
            </label>
            <input
              type="tel"
              id="ftel"
              name="ftel"
              placeholder="Contact Number"
            />
            <label for="fcomp" className=" text-text">
              Company Name :
            </label>
            <input
              type="text"
              id="fcomp"
              name="fcomp"
              placeholder="Company Name"
            />
            <label for="fmsg" className=" text-text">
              Message :
            </label>
            <textarea type="text" id="fmsg" name="fmsg" placeholder="Message" />
          </form>{" "}
        </div>
      </div>
      <div className="flex items-center py-4 flex-col">
        <div className="sndbtn">
          <p className={`${Fh2h3.className}`}>send</p>
        </div>
        <p className={`${Fparagraph.className} text-xl py-10 w-3/6`}>
            Atlternatively, you may reach out to us directly at (+30) 694 353
            1213 for immediate assistance with any inquiries. Our team is
            readily available to provide prompt and personalized support,
            ensuring your questions are addressed swiftly. We look forward to
            helping you elevate your hospitality or dining business to new
            heights.
          </p>
      </div>
    </div>
  );
}
