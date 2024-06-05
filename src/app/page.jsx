'use client'

import { Intro, Contact, Footer } from "./ui/uiComponents";

window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

export default function Page() {

  return (
    <body>
      <Intro />
      <Contact />
      <Footer />
    </body>
  )
}
