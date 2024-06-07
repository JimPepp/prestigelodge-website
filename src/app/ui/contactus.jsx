"use client";

import { Fh1, Fh2h3, Fh4h5, Fh6, Fparagraph } from "../modules/fonts";
import { useState } from "react";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="py-12">
      <div className={`${Fh1.className} text-6xl flex justify-center`}>
        <h1>Contact Us</h1>
      </div>
      <div className={`${Fh2h3.className} flex justify-center`}>
        <h3>we would love to hear from you</h3>
      </div>
      <div className="flex flex-row py-4 px-12">
        <div className="flex flex-col w-full items-center">
          <h6 className={`${Fh4h5.className}`}>Send us an email</h6>
          <form className="flex flex-col py-4">
            <label for="fname" className=" text-text">
              Full Name :
            </label>
            <input
              type="text"
              name="fname"
              placeholder="Full Name"
              onChange={(e) => { setFullname(e.target.value) }}
            />
            <label for="fmail" className=" text-text">
              Email :
            </label>
            <input type="email" name="fmail" onChange={(e) => { setEmail(e.target.value) }}/>{" "}
            <label for="fsubj" className=" text-text">
              Sunject :
            </label>
            <input
              type="text"
              name="fsubj"
              onChange={(e) => { setSubject(e.target.value) }}
            />
            <label for="fmsg" className=" text-text">
              Message :
            </label>
            <textarea type="text" name="fmsg" id="fmsg" onChange={(e) => { setMessage(e.target.value) }}/>
          </form>{" "}
        </div>
      </div>
      <div className="flex items-center py-4 flex-col">
        <div className="sndbtn">
          <p className={`${Fh2h3.className}`}>send</p>
        </div>
        <h6 className={`${Fh4h5.className} pt-10`}>Give us a call</h6>
        <p className={`${Fparagraph.className} text-xl py-8 w-3/6`}>
          Atlternatively, you may reach out to us directly at (+30) 694 353 1213
          for immediate assistance with any inquiries. We are always
          available to provide prompt and personalized support, ensuring your
          questions are addressed swiftly. We look forward to helping you
          elevate your hospitality or dining business to new heights.
        </p>
      </div>
    </div>
  );
}
