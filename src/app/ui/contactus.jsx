"use client"

import { Fh1, Fh2h3, Fh4h5, Fparagraph } from "../modules/fonts";
import { useState } from "react";

export default function Contact() {
  //    States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //    Form validation state
  const [errors, setErrors] = useState({});

  //    Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  //    Setting success or failure messages states
  let [successMsg, setSuccessMsg] = useState(" ");
  let [statusColor, setStatusColor] = useState(" ");

  //    Handling form submission
  const handleValidation = () => {
    let tempErrors = [];
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });

    if (!isValid) {
      console.log("errors", errors);
      setStatusColor(" text-red-600 ");
      setSuccessMsg("Please ensure that you fill all information!");
    } else {
      setStatusColor(" text-blue-600 ");
      setSuccessMsg("Your email has been successfully sent!");
    }
    console.log("Valid form : ", isValid);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }

      console.log("NO ERROR");
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
    console.log(successMsg, statusColor);
  };

  return (
    <div className="py-12">
      <div className={`${Fh1.className} flex justify-center`}>
        <h1 className="text-3xl md:text-4xl lg:text-6xl">Contact Us</h1>
      </div>
      <div className={`${Fh2h3.className} flex justify-center`}>
        <h3 className="text-2xl lg:text-3xl">
          Interested in doing business?
        </h3>
      </div>
      <div className="flex flex-row py-4">
        <div className="flex flex-col w-full items-center">
          <h6 className={`${Fh4h5.className} text-2xl lg:text-3xl`}>
            Send us an email
          </h6>
          <form className="flex flex-col py-4 text-xl" onSubmit={handleSubmit}>
            <label htmlFor="fullname" className=" text-text">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
            <label htmlFor="email" className=" text-text">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
            <label htmlFor="subject" className=" text-text">
              Subject<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <label htmlFor="message" className=" text-text">
              Message<span className="text-red-600">*</span>
            </label>
            <textarea
              type="text"
              name="message"
              id="fmsg"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button className="max-w-40 inline-block text-xl rounded border border-current px-8 py-3 font-medium text-text transition hover:scale-110 bg-amber-200 hover:shadow-xl focus:outline-none focus:ring active:text-amber-200">
              <p
                className={`${Fh2h3.className} `}
              >{`${buttonText.valueOf()}`}</p>
            </button>
            <span className={`${Fh4h5.className, statusColor.valueOf()} font-bold`}>{`${successMsg.valueOf()}`}</span>
          </form>
        </div>
      </div>
      <div className="flex items-center py-4 flex-col">
        <h6
          className={`${Fh4h5.className} text-center text-2xl lg:text-3xl pt-10`}
        >
          or give us a call
        </h6>
        <p
          className={`${Fparagraph.className} text-center text-xl md:text-lg lg:text-2xl py-8 w-3/6`}
        >
          Alternatively, you may reach out to us directly at (+30) 694 353 1213
          for immediate assistance with any inquiries. We look forward to working 
          with you.
        </p>
      </div>
    </div>
  );
}
