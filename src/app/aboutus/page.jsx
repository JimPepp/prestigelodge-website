"use client";

import { useEffect } from "react";
import { Header, Contact, Footer } from "../ui/uiComponents";

export default function AboutUs() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });


  return (
    <>
      <Header />
      <div className="py-32"></div>
      <Footer />
    </>
  );
}
