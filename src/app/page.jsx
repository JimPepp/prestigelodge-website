'use client'

import { Header, Footer, Test, Intro } from "./ui/uiComponents"

window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

export default function Page() {

  return (
    <body>
      <Header />
      <Intro />
      {/* <Test /> */}
      <Footer />
    </body>
  )
}
