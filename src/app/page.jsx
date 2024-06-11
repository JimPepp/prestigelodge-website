'use client'

import { useEffect } from "react";
import { Intro, Contact, Footer } from "./ui/uiComponents";

export default function Page() {

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0,0);
    }
  })

  return (
    <>
      <Intro />
      <Contact />
      <Footer />
    </>
  )
}
