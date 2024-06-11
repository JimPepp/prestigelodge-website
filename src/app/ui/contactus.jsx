import { isContext } from "vm";
import { Fh1, Fh2h3, Fh4h5, Fh6, Fparagraph } from "../modules/fonts";
import { useEffect, useRef, useState } from "react";

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
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Contact Us</h1>
      </div>
      <div className={`${Fh2h3.className} flex justify-center`}>
        <h3 className="text-base md:text-xl lg:text-xl">
          we would love to hear from you
        </h3>
      </div>
      <div className="flex flex-row py-4">
        <div className="flex flex-col w-full items-center">
          <h6 className={`${Fh4h5.className} text-base md:text-xl lg:text-xl`}>
            Send us an email
          </h6>
          <form className="flex flex-col py-4" onSubmit={handleSubmit}>
            <label htmlFor="fullname" className=" text-text">
              Full Name<span className="text-red-600">*</span> :
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
              Email<span className="text-red-600">*</span> :
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
              Subject<span className="text-red-600">*</span> :
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
              Message<span className="text-red-600">*</span> :
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
            <button className="sndbtn" type="submit">
              <p
                className={`${Fh2h3.className}`}
              >{`${buttonText.valueOf()}`}</p>
            </button>
            <span className={`${Fh4h5.className, statusColor.valueOf()} font-bold`}>{`${successMsg.valueOf()}`}</span>
          </form>
        </div>
      </div>
      <div className="flex items-center py-4 flex-col">
        <h6
          className={`${Fh4h5.className} text-center text-lg md:text-xl pt-10`}
        >
          Give us a call
        </h6>
        <p
          className={`${Fparagraph.className} text-center text-base md:text-lg py-8 w-3/6`}
        >
          Atlternatively, you may reach out to us directly at (+30) 694 353 1213
          for immediate assistance with any inquiries. We are always available
          to provide prompt and personalized support, ensuring your questions
          are addressed swiftly. We look forward to helping you elevate your
          hospitality or dining business to new heights.
        </p>
      </div>
    </div>
  );
}
