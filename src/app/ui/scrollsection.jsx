import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 bottom",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            {/* Section 1 */}
            <div className="scroll-section flex-row-reverse">
              <div className="hidden lg:block w-1/2">
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full"
                  style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                >
                  <source src="/video/ElephantPool.mp4" type="video/mp4" />
                  <source src="/video/ElephantPool.webm" type="video/webm" />
                  Your browser does not support videos!
                </video>
              </div>
              <div className="w-full flex justify-center flex-col items-center -left-1/4 px-10 lg:px-0">
                <h1 className="text-xl lg:text-3xl">Website Creation</h1>
                <p className="py-4 lg:py-9 lg:px-40 text-center">
                  Using the latest technologies, we can create a website for
                  your buisness. The websites that we create are not just
                  ordinary websites, but modern experiences. We always
                  prioritize to showcase the services that your business
                  provides to your customers. Every visitor on your website will
                  be left with a positive impression, therefore converting them
                  to a customer.
                </p>
                <p className="lg:py-3 lg:px-40 text-center">
                  With such a website you can easily stand out from your
                  competition!
                </p>
                <Image
                  src="/images/formal-table.png"
                  width={500}
                  height={10}
                  alt={"A table in a fine restaurant with elegant decorations"}
                  className="object-cover max-h-72 md:max-w-screen-md object-center pt-10 block lg:hidden"
                />
              </div>
            </div>
            {/* Section 2 */}
            <div className="scroll-section" ref={sectionRef}>
              <div className="hidden lg:block w-1/2">
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full"
                  style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                >
                  <source src="/video/HotelAlley.mp4" type="video/mp4" />
                  <source src="/video/HotelAlley.webm" type="video/webm" />
                  Your browser does not support videos!
                </video>
              </div>
              <div className="w-full flex justify-center flex-col items-center -left-1/4 px-10 lg:px-0">
                <h1 className="text-xl lg:text-3xl">Marketing</h1>
                <p className="py-4 lg:py-9 lg:px-40 text-center">
                  In today's day and age, attention is the currency for your
                  business. However you may have a lot of things on your table
                  while managing your business. That's where we come in with our
                  marketing services. With modern marketing approaches we will
                  draw as much as possible attention to your business. Attention
                  is key, and we can help you get it!
                </p>
                <p className="lg:py-3 lg:px-40 text-center">
                  Get ahead from your competition!
                </p>
                <Image
                  src="/images/MeetingRoom.png"
                  width={500}
                  height={10}
                  alt={"A table in a fine restaurant with elegant decorations"}
                  className="object-cover max-h-72 md:max-w-screen-md object-bottom pt-10 block lg:hidden"
                />
              </div>
            </div>
            {/* Section 3 */}
            <div className="scroll-section" ref={sectionRef}>
              <div className="hidden lg:block w-1/2">
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full"
                  style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                >
                  <source src="/video/Cocktail.mp4" type="video/mp4" />
                  <source src="/video/Cocktail.webm" type="video/webm" />
                  Your browser does not support videos!
                </video>
              </div>
              <div className="w-full flex justify-center flex-col items-center -left-1/4 px-10 lg:px-0">
                <h1 className="text-xl lg:text-3xl">Business Consulting</h1>
                <p className="py-4 lg:py-9 lg:px-40 text-center">
                  If you're facing issues that you don't know how to handle or
                  if you would like a professional advice, our business
                  consulting services are for you. Due to our years of hands on
                  experience working in the industry, we can connect you with
                  people that have worked in the finest establishments.
                  Professionals such as executive chefs, bar managers, and other
                  business owners with multiple successfull businesses.
                </p>
                <p className="lg:py-3 lg:px-40 text-center">
                  Get inshights from experienced professionals!
                </p>
                <Image
                  src="/images/Tables.png"
                  width={500}
                  height={5}
                  alt={"A table in a fine restaurant with elegant decorations"}
                  className="object-cover max-h-72 md:max-w-screen-md object-bottom pt-10 block lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScrollSection;
