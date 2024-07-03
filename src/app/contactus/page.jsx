"use client";

import { useEffect } from "react";
import { Header, Contact, Footer } from "../ui/uiComponents";

export default function ContactUs() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });

  return (
    <>
      <Header />
      <div className=" pt-16"></div>
      <Contact />
      <Footer />
    </>
  );
}
