'use client'

import { Header, Intro, Contact, Footer } from "./ui/uiComponents";

window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

export default function Page() {

  return (
    <body>
      <Header />
      <Intro />
      <Contact />
      <Footer />
    </body>
  )
}
