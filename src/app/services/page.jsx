"use client";

import { Header, Footer, ScrollSection, CTA } from "../ui/uiComponents";

export default function Services() {
  return (
    <>
      <Header />
      <div className="pt-40 flex justify-center text-center flex-col">
        <h1 className="text-2xl lg:text-4xl">Our Solutions</h1>
        <p className="lg:pb-32 pb-8 pt-4 lg:text-xl lg:px-[35%]">We can manage the following for you, 
          allowing you to put your a hundred percent of your focus to your business.</p>
      </div>
      <ScrollSection />
      <div className="py-10"></div>
      <CTA />
      <div className="py-10"></div>
      <Footer />
    </>
  );
}
