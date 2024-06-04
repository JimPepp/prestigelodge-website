"use client";

import { Fh1, Fh2h3, Fh6, Fparagraph } from "../modules/fonts";
import { Fh4h5 } from "../styles/fonts";

export default function Contact() {
  return (
    <div className="py-12">
      <div className={`${Fh1.className} text-6xl flex justify-center`}>
        Contact Us
      </div>
      <div className={`${Fh2h3.className} text-5xl flex justify-center`}>
        we would love to hear from you
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 items-center">
          <p className={`${Fh4h5.className} text-4xl`}>Send us an email</p>
          <form className="flex flex-col py-4">
            <label for="fname" className=" text-text">Full Name :</label>
            <input type="text" id="fname" name="fname" placeholder="Full Name"/>
            <label for="fmail" className=" text-text">Email :</label>
            <input type="email" id="fmail" name="fmail" placeholder="Email"/> 
            <label for="ftel" className=" text-text">Contact Number :</label>
            <input type="tel" id="ftel" name="ftel" placeholder="Contact Number"/>
            <label for="fcomp" className=" text-text">Company Name :</label>
            <input type="text" id="fcomp" name="fcomp" placeholder="Company Name"/>
            <label for="fmsg" className=" text-text">Message :</label>
            <textarea type="text" id="fmsg" name="fmsg" placeholder="Message"/>
          </form>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <p className={`${Fh4h5.className} text-4xl`}>
            Contact a team member directly
          </p>
          <p>TEST</p>
        </div>
      </div>
    </div>
  );
}
