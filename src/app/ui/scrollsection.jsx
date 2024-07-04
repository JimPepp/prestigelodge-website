import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
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
      <section className="hidden lg:block scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section flex-row-reverse bg-red-400">
              <div className="w-1/3">
                <Image
                  src="/images/formal-table.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex justify-center flex-col items-center -left-1/4">
                <h1>We Create</h1>
                <h1>Website</h1>
                <h1>Experiences</h1>
              </div>
            </div>
            <div className="scroll-section bg-amber-500">
              <h3>Section 2</h3>
            </div>
            <div className="scroll-section bg-cyan-400">
              <h3>Section 3</h3>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default ScrollSection;
