'use client'

import { useEffect } from "react";
import { Header, Intro, Contact, Footer } from "./ui/uiComponents";

export default function Page() {

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0,0);
    }
  })

  return (
    <>
      <Header />
      <Intro />
      <Contact />
      <Footer />
    </>
  )
}
